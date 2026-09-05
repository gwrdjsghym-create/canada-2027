<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$currentProfile = canada_require_api();

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const TRANSFER_2009_VARIANTS = ['a', 'b', 'c'];
$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/transfer-decisions-20-09.json';

function transfer_2009_respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function transfer_2009_clean($value, int $limit): string {
    $text = trim(strip_tags((string) $value));
    return function_exists('mb_substr') ? mb_substr($text, 0, $limit) : substr($text, 0, $limit);
}
function transfer_2009_empty(): array {
    return ['ratings' => ['a' => [], 'b' => [], 'c' => []], 'comments' => ['a' => [], 'b' => [], 'c' => []]];
}
function transfer_2009_normalize($data): array {
    $base = transfer_2009_empty();
    if (!is_array($data)) return $base;
    foreach (TRANSFER_2009_VARIANTS as $variant) {
        if (isset($data['ratings'][$variant]) && is_array($data['ratings'][$variant])) $base['ratings'][$variant] = $data['ratings'][$variant];
        if (isset($data['comments'][$variant]) && is_array($data['comments'][$variant])) $base['comments'][$variant] = $data['comments'][$variant];
    }
    return $base;
}
function transfer_2009_read(string $file): array {
    if (!is_file($file)) return transfer_2009_empty();
    $raw = file_get_contents($file);
    return transfer_2009_normalize(is_string($raw) ? json_decode($raw, true) : null);
}
function transfer_2009_variant_view(array $data, string $variant, string $currentProfile): array {
    $ratings = is_array($data['ratings'][$variant] ?? null) ? $data['ratings'][$variant] : [];
    $values = array_values(array_filter($ratings, fn($rating) => is_int($rating) && $rating >= 1 && $rating <= 5));
    $comments = array_values(array_filter((array) ($data['comments'][$variant] ?? []), fn($comment) => is_array($comment)));
    usort($comments, fn($a, $b) => strcmp((string) ($a['createdAt'] ?? ''), (string) ($b['createdAt'] ?? '')));
    return ['ratings' => $ratings, 'average' => $values ? round(array_sum($values) / count($values), 1) : null,
        'ratingCount' => count($values), 'comments' => $comments, 'currentProfile' => $currentProfile, 'profiles' => CANADA_PROFILES];
}
function transfer_2009_all_view(array $data, string $currentProfile): array {
    $variants = [];
    foreach (TRANSFER_2009_VARIANTS as $variant) $variants[$variant] = transfer_2009_variant_view($data, $variant, $currentProfile);
    return ['variants' => $variants];
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$data = transfer_2009_read($dataFile);
if ($method === 'GET') transfer_2009_respond(200, transfer_2009_all_view($data, $currentProfile));
if ($method !== 'POST') transfer_2009_respond(405, ['error' => 'Methode nicht erlaubt']);
if (!canada_origin_ok()) transfer_2009_respond(403, ['error' => 'Ungültige Herkunft']);
canada_require_csrf();

$raw = file_get_contents('php://input');
if (!is_string($raw) || strlen($raw) > 12000) transfer_2009_respond(400, ['error' => 'Ungültige Anfrage']);
$body = json_decode($raw, true);
if (!is_array($body)) transfer_2009_respond(400, ['error' => 'Ungültige Anfrage']);
$action = (string) ($body['action'] ?? '');
$variant = transfer_2009_clean($body['variant'] ?? '', 8);
if (!in_array($variant, TRANSFER_2009_VARIANTS, true)) transfer_2009_respond(422, ['error' => 'Variante nicht gefunden']);
if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) transfer_2009_respond(500, ['error' => 'Speicher nicht verfügbar']);
$handle = fopen($dataFile, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) transfer_2009_respond(500, ['error' => 'Speicher nicht verfügbar']);
$storedRaw = stream_get_contents($handle);
$data = transfer_2009_normalize(is_string($storedRaw) && $storedRaw !== '' ? json_decode($storedRaw, true) : null);

if ($action === 'rating') {
    $rating = (int) ($body['rating'] ?? 0);
    if ($rating < 1 || $rating > 5) { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(422, ['error' => 'Bitte 1 bis 5 Sterne wählen']); }
    $data['ratings'][$variant][$currentProfile] = $rating;
} elseif ($action === 'comment') {
    $text = transfer_2009_clean($body['text'] ?? '', 1000);
    $parentId = transfer_2009_clean($body['parentId'] ?? '', 80);
    if ($text === '') { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(422, ['error' => 'Bitte einen Kommentar eingeben']); }
    if (count($data['comments'][$variant]) >= 500) { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(422, ['error' => 'Zu viele Kommentare']); }
    if ($parentId !== '') {
        $parent = null;
        foreach ($data['comments'][$variant] as $candidate) if (($candidate['id'] ?? '') === $parentId) { $parent = $candidate; break; }
        if (!$parent || !empty($parent['parentId']) || !empty($parent['deleted'])) { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(422, ['error' => 'Antwort nicht möglich']); }
    }
    $data['comments'][$variant][] = ['id' => bin2hex(random_bytes(12)), 'profile' => $currentProfile, 'text' => $text,
        'parentId' => $parentId ?: null, 'createdAt' => gmdate('c')];
} elseif ($action === 'delete-comment') {
    $commentId = transfer_2009_clean($body['commentId'] ?? '', 80);
    $comments = $data['comments'][$variant];
    $targetIndex = null;
    foreach ($comments as $index => $comment) if (($comment['id'] ?? '') === $commentId) { $targetIndex = $index; break; }
    if ($targetIndex === null) { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(404, ['error' => 'Kommentar nicht gefunden']); }
    if (($comments[$targetIndex]['profile'] ?? '') !== $currentProfile) { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(403, ['error' => 'Du kannst nur deinen eigenen Kommentar löschen']); }
    $isRoot = empty($comments[$targetIndex]['parentId']);
    $hasReplies = $isRoot && count(array_filter($comments, fn($comment) => ($comment['parentId'] ?? '') === $commentId)) > 0;
    if ($hasReplies) { $comments[$targetIndex]['deleted'] = true; $comments[$targetIndex]['profile'] = null; $comments[$targetIndex]['text'] = ''; }
    else { array_splice($comments, $targetIndex, 1); }
    $data['comments'][$variant] = $comments;
} else {
    flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(422, ['error' => 'Unbekannte Aktion']);
}

$encoded = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
rewind($handle); ftruncate($handle, 0);
if (fwrite($handle, $encoded) === false) { flock($handle, LOCK_UN); fclose($handle); transfer_2009_respond(500, ['error' => 'Speichern fehlgeschlagen']); }
fflush($handle); flock($handle, LOCK_UN); fclose($handle);
transfer_2009_respond(200, transfer_2009_all_view($data, $currentProfile));
