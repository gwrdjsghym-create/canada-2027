<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$currentProfile = canada_require_api();

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const DECISION_STATUS_IDS = [
    'montreal-evening','montreal-dinner','mauricie-hike','mauricie-flex',
    'transfer-20','transfer-23','fjord-day','quebec-day','transfer-29','orford-days'
];
$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/decision-status.json';

function decision_respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
function decision_clean($value, int $limit): string {
    $text = trim(strip_tags((string) $value));
    return function_exists('mb_substr') ? mb_substr($text, 0, $limit) : substr($text, 0, $limit);
}
function decision_read(string $file): array {
    if (!is_file($file)) return ['decisions' => []];
    $raw = file_get_contents($file);
    $data = is_string($raw) ? json_decode($raw, true) : null;
    return is_array($data) && is_array($data['decisions'] ?? null) ? $data : ['decisions' => []];
}
function decision_view(array $data, string $currentProfile): array {
    return ['decisions' => $data['decisions'], 'currentProfile' => $currentProfile, 'profiles' => CANADA_PROFILES];
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$data = decision_read($dataFile);
if ($method === 'GET') decision_respond(200, decision_view($data, $currentProfile));
if ($method !== 'POST') decision_respond(405, ['error' => 'Methode nicht erlaubt']);
if (!canada_origin_ok()) decision_respond(403, ['error' => 'Ungültige Herkunft']);
canada_require_csrf();

$raw = file_get_contents('php://input');
if (!is_string($raw) || strlen($raw) > 5000) decision_respond(400, ['error' => 'Ungültige Anfrage']);
$body = json_decode($raw, true);
if (!is_array($body)) decision_respond(400, ['error' => 'Ungültige Anfrage']);
$action = decision_clean($body['action'] ?? '', 20);
$decision = decision_clean($body['decision'] ?? '', 50);
if (!in_array($decision, DECISION_STATUS_IDS, true)) decision_respond(422, ['error' => 'Entscheidung nicht gefunden']);

if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) decision_respond(500, ['error' => 'Speicher nicht verfügbar']);
$handle = fopen($dataFile, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) decision_respond(500, ['error' => 'Speicher nicht verfügbar']);
$storedRaw = stream_get_contents($handle);
$stored = is_string($storedRaw) && $storedRaw !== '' ? json_decode($storedRaw, true) : null;
$data = is_array($stored) && is_array($stored['decisions'] ?? null) ? $stored : ['decisions' => []];

if ($action === 'set') {
    $summary = decision_clean($body['summary'] ?? '', 800);
    if ($summary === '') { flock($handle, LOCK_UN); fclose($handle); decision_respond(422, ['error' => 'Favorit fehlt']); }
    $data['decisions'][$decision] = [
        'summary' => $summary,
        'setBy' => $currentProfile,
        'updatedAt' => gmdate('c'),
    ];
} elseif ($action === 'reopen') {
    unset($data['decisions'][$decision]);
} else {
    flock($handle, LOCK_UN); fclose($handle);
    decision_respond(422, ['error' => 'Unbekannte Aktion']);
}

$encoded = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
rewind($handle); ftruncate($handle, 0);
if (fwrite($handle, $encoded) === false) { flock($handle, LOCK_UN); fclose($handle); decision_respond(500, ['error' => 'Speichern fehlgeschlagen']); }
fflush($handle); flock($handle, LOCK_UN); fclose($handle);
decision_respond(200, decision_view($data, $currentProfile));
