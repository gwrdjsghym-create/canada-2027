<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$currentProfile = canada_require_api();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const IDEA_IDS = ['whale-tour','montreal-ideas','transfer-stop','lac-solitaire','ruisseau-bouchard','cascades-falaises','canoe-intro','waber-falls','shawinigan'];
$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/ideas.json';

function idea_respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function idea_clean($value, int $limit): string {
    $text = trim(strip_tags((string) $value));
    return function_exists('mb_substr') ? mb_substr($text, 0, $limit) : substr($text, 0, $limit);
}

function idea_empty_data(): array { return ['ratings' => [], 'comments' => []]; }

function idea_read(string $file): array {
    if (!is_file($file)) return idea_empty_data();
    $raw = file_get_contents($file);
    $data = is_string($raw) ? json_decode($raw, true) : null;
    return is_array($data) ? array_merge(idea_empty_data(), $data) : idea_empty_data();
}

function idea_view(array $data, string $ideaId, string $currentProfile): array {
    $ratings = is_array($data['ratings'][$ideaId] ?? null) ? $data['ratings'][$ideaId] : [];
    $values = array_values(array_filter($ratings, fn($rating) => is_int($rating) && $rating >= 1 && $rating <= 5));
    $comments = array_values(array_filter((array) ($data['comments'][$ideaId] ?? []), fn($comment) => is_array($comment)));
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

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$ideaId = idea_clean($_GET['idea'] ?? '', 60);

if ($method === 'GET' && isset($_GET['summary'])) {
    $data = idea_read($dataFile);
    $summaries = [];
    foreach (IDEA_IDS as $id) {
        $ratings = is_array($data['ratings'][$id] ?? null) ? $data['ratings'][$id] : [];
        $values = array_values(array_filter($ratings, fn($rating) => is_int($rating) && $rating >= 1 && $rating <= 5));
        $summaries[$id] = ['average' => $values ? round(array_sum($values) / count($values), 1) : null, 'count' => count($values), 'mine' => $ratings[$currentProfile] ?? null, 'comments' => count((array) ($data['comments'][$id] ?? []))];
    }
    idea_respond(200, ['ideas' => $summaries]);
}

if (!in_array($ideaId, IDEA_IDS, true)) idea_respond(404, ['error' => 'Idee nicht gefunden']);
if ($method === 'GET') idea_respond(200, idea_view(idea_read($dataFile), $ideaId, $currentProfile));
if ($method !== 'POST') idea_respond(405, ['error' => 'Methode nicht erlaubt']);
if (!canada_origin_ok()) idea_respond(403, ['error' => 'Ungültige Herkunft']);
canada_require_csrf();

$raw = file_get_contents('php://input');
if (!is_string($raw) || strlen($raw) > 12000) idea_respond(400, ['error' => 'Ungültige Anfrage']);
$body = json_decode($raw, true);
if (!is_array($body)) idea_respond(400, ['error' => 'Ungültige Anfrage']);
$action = (string) ($body['action'] ?? '');

if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) idea_respond(500, ['error' => 'Speicher nicht verfügbar']);
$handle = fopen($dataFile, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) idea_respond(500, ['error' => 'Speicher nicht verfügbar']);
$storedRaw = stream_get_contents($handle);
$data = is_string($storedRaw) && $storedRaw !== '' ? json_decode($storedRaw, true) : null;
$data = is_array($data) ? array_merge(idea_empty_data(), $data) : idea_empty_data();

if ($action === 'rating') {
    $rating = (int) ($body['rating'] ?? 0);
    if ($rating < 1 || $rating > 5) { flock($handle, LOCK_UN); fclose($handle); idea_respond(422, ['error' => 'Bitte 1 bis 5 Sterne wählen']); }
    if (!isset($data['ratings'][$ideaId]) || !is_array($data['ratings'][$ideaId])) $data['ratings'][$ideaId] = [];
    $data['ratings'][$ideaId][$currentProfile] = $rating;
} elseif ($action === 'comment') {
    $text = idea_clean($body['text'] ?? '', 1000);
    $parentId = idea_clean($body['parentId'] ?? '', 80);
    if ($text === '') { flock($handle, LOCK_UN); fclose($handle); idea_respond(422, ['error' => 'Bitte einen Kommentar eingeben']); }
    if (!isset($data['comments'][$ideaId]) || !is_array($data['comments'][$ideaId])) $data['comments'][$ideaId] = [];
    if (count($data['comments'][$ideaId]) >= 500) { flock($handle, LOCK_UN); fclose($handle); idea_respond(422, ['error' => 'Zu viele Kommentare']); }
    if ($parentId !== '') {
        $parent = null;
        foreach ($data['comments'][$ideaId] as $candidate) if (($candidate['id'] ?? '') === $parentId) $parent = $candidate;
        if (!$parent || !empty($parent['parentId'])) { flock($handle, LOCK_UN); fclose($handle); idea_respond(422, ['error' => 'Antwort nicht möglich']); }
    }
    $data['comments'][$ideaId][] = ['id' => bin2hex(random_bytes(12)), 'profile' => $currentProfile, 'text' => $text, 'parentId' => $parentId ?: null, 'createdAt' => gmdate('c')];
} else {
    flock($handle, LOCK_UN); fclose($handle); idea_respond(422, ['error' => 'Unbekannte Aktion']);
}

$encoded = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
rewind($handle); ftruncate($handle, 0);
if (fwrite($handle, $encoded) === false) { flock($handle, LOCK_UN); fclose($handle); idea_respond(500, ['error' => 'Speichern fehlgeschlagen']); }
fflush($handle); flock($handle, LOCK_UN); fclose($handle);
idea_respond(200, idea_view($data, $ideaId, $currentProfile));
