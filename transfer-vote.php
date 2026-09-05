<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$currentProfile = canada_require_api();

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const TRANSFER_VARIANTS = ['b2','c'];
$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/transfer-decisions.json';

function respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function clean_text($value, int $limit): string {
    $text = trim(strip_tags((string) $value));
    return function_exists('mb_substr') ? mb_substr($text, 0, $limit) : substr($text, 0, $limit);
}
function empty_data(): array {
    return [
        'ratings' => ['b2' => [], 'c' => []],
        'comments' => ['b2' => [], 'c' => []],
    ];
}
function normalize_data($data): array {
    $base = empty_data();
    if (!is_array($data)) return $base;
    foreach (TRANSFER_VARIANTS as $variant) {
        if (isset($data['ratings'][$variant]) && is_array($data['ratings'][$variant])) $base['ratings'][$variant] = $data['ratings'][$variant];
        if (isset($data['comments'][$variant]) && is_array($data['comments'][$variant])) $base['comments'][$variant] = $data['comments'][$variant];
    }
    return $base;
}
function read_data(string $file): array {
    if (!is_file($file)) return empty_data();
    $raw = file_get_contents($file);
    return normalize_data(is_string($raw) ? json_decode($raw, true) : null);
}
function variant_view(array $data, string $variant, string $currentProfile): array {
    $ratings = is_array($data['ratings'][$variant] ?? null) ? $data['ratings'][$variant] : [];
    $values = array_values(array_filter($ratings, fn($rating) => is_int($rating) && $rating >= 1 && $rating <= 5));
    $comments = array_values(array_filter((array) ($data['comments'][$variant] ?? []), fn($comment) => is_array($comment)));
    usort($comments, fn($a, $b) => strcmp((string) ($a['createdAt'] ?? ''), (string) ($b['createdAt'] ?? '')));
    return [
        'ratings' => $ratings,
        'average' => $values ? round(array_sum($values) / count($values), 1) : null,
        'ratingCount' => count($values),
        'comments' => $comments,
        'currentProfile' => $currentProfile,
        'profiles' => CANADA_PROFILES,
    ];
}
function all_view(array $data, string $currentProfile): array {
    return ['variants' => [
        'b2' => variant_view($data, 'b2', $currentProfile),
        'c' => variant_view($data, 'c', $currentProfile),
    ]];
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$data = read_data($dataFile);

if ($method === 'GET') respond(200, all_view($data, $currentProfile));
if ($method !== 'POST') respond(405, ['error' => 'Methode nicht erlaubt']);
if (!canada_origin_ok()) respond(403, ['error' => 'Ungültige Herkunft']);
canada_require_csrf();

$raw = file_get_contents('php://input');
if (!is_string($raw) || strlen($raw) > 12000) respond(400, ['error' => 'Ungültige Anfrage']);
$body = json_decode($raw, true);
if (!is_array($body)) respond(400, ['error' => 'Ungültige Anfrage']);

$action = (string) ($body['action'] ?? '');
$variant = clean_text($body['variant'] ?? '', 8);
if (!in_array($variant, TRANSFER_VARIANTS, true)) respond(422, ['error' => 'Variante nicht gefunden']);

if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) respond(500, ['error' => 'Speicher nicht verfügbar']);

$handle = fopen($dataFile, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) respond(500, ['error' => 'Speicher nicht verfügbar']);

$storedRaw = stream_get_contents($handle);
$stored = is_string($storedRaw) && $storedRaw !== '' ? json_decode($storedRaw, true) : null;
$data = normalize_data($stored);

if ($action === 'rating') {
    $rating = (int) ($body['rating'] ?? 0);
    if ($rating < 1 || $rating > 5) {
        flock($handle, LOCK_UN); fclose($handle);
        respond(422, ['error' => 'Bitte 1 bis 5 Sterne wählen']);
    }
    $data['ratings'][$variant][$currentProfile] = $rating;
} elseif ($action === 'comment') {
    $text = clean_text($body['text'] ?? '', 1000);
    $parentId = clean_text($body['parentId'] ?? '', 80);
    if ($text === '') {
        flock($handle, LOCK_UN); fclose($handle);
        respond(422, ['error' => 'Bitte einen Kommentar eingeben']);
    }
    if (count($data['comments'][$variant]) >= 500) {
        flock($handle, LOCK_UN); fclose($handle);
        respond(422, ['error' => 'Zu viele Kommentare']);
    }
    if ($parentId !== '') {
        $parent = null;
        foreach ($data['comments'][$variant] as $candidate) {
            if (($candidate['id'] ?? '') === $parentId) { $parent = $candidate; break; }
        }
        if (!$parent || !empty($parent['parentId']) || !empty($parent['deleted'])) {
            flock($handle, LOCK_UN); fclose($handle);
            respond(422, ['error' => 'Antwort nicht möglich']);
        }
    }
    $data['comments'][$variant][] = [
        'id' => bin2hex(random_bytes(12)),
        'profile' => $currentProfile,
        'text' => $text,
        'parentId' => $parentId ?: null,
        'createdAt' => gmdate('c'),
    ];
} elseif ($action === 'delete-comment') {
    $commentId = clean_text($body['commentId'] ?? '', 80);
    $comments = $data['comments'][$variant];
    $targetIndex = null;
    foreach ($comments as $index => $comment) {
        if (($comment['id'] ?? '') === $commentId) { $targetIndex = $index; break; }
    }
    if ($targetIndex === null) {
        flock($handle, LOCK_UN); fclose($handle);
        respond(404, ['error' => 'Kommentar nicht gefunden']);
    }
    if (($comments[$targetIndex]['profile'] ?? '') !== $currentProfile) {
        flock($handle, LOCK_UN); fclose($handle);
        respond(403, ['error' => 'Du kannst nur deinen eigenen Kommentar löschen']);
    }
    $isRoot = empty($comments[$targetIndex]['parentId']);
    $hasReplies = $isRoot && count(array_filter($comments, fn($comment) => ($comment['parentId'] ?? '') === $commentId)) > 0;
    if ($hasReplies) {
        $comments[$targetIndex]['deleted'] = true;
        $comments[$targetIndex]['profile'] = null;
        $comments[$targetIndex]['text'] = '';
    } else {
        array_splice($comments, $targetIndex, 1);
        $activeParentIds = array_filter(array_map(fn($comment) => $comment['parentId'] ?? null, $comments));
        $comments = array_values(array_filter($comments, fn($comment) => empty($comment['deleted']) || in_array($comment['id'] ?? '', $activeParentIds, true)));
    }
    $data['comments'][$variant] = $comments;
} else {
    flock($handle, LOCK_UN); fclose($handle);
    respond(422, ['error' => 'Unbekannte Aktion']);
}

$encoded = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
rewind($handle);
ftruncate($handle, 0);
if (fwrite($handle, $encoded) === false) {
    flock($handle, LOCK_UN); fclose($handle);
    respond(500, ['error' => 'Speichern fehlgeschlagen']);
}
fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);
respond(200, all_view($data, $currentProfile));
