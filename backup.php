<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    http_response_code(405);
    header('Allow: GET');
    exit('Methode nicht erlaubt');
}

$files = [
    'ideas' => 'ideas.json',
    'checklists' => 'checklists.json',
    'decisions' => 'decision-status.json',
    'transfer20September' => 'transfer-decisions-20-09.json',
    'transfer23September' => 'transfer-decisions.json',
    'quebec' => 'quebec-decisions.json',
    'transfer29September' => 'transfer-decisions-29-09.json',
    'orfordActivities' => 'orford-activities.json',
];

$datasets = [];
foreach ($files as $key => $name) {
    $path = __DIR__ . '/data/' . $name;
    if (!is_file($path)) {
        $datasets[$key] = null;
        continue;
    }
    $decoded = json_decode((string) file_get_contents($path), true);
    $datasets[$key] = is_array($decoded) ? $decoded : null;
}

$payload = [
    'project' => 'Canada 2027',
    'schemaVersion' => 1,
    'createdAt' => gmdate('c'),
    'createdBy' => canada_profile(),
    'datasets' => $datasets,
];
$json = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
if (!is_string($json)) {
    http_response_code(500);
    exit('Sicherung konnte nicht erstellt werden');
}

header('Content-Type: application/json; charset=utf-8');
header('Content-Disposition: attachment; filename="canada-2027-sicherung-' . gmdate('Y-m-d') . '.json"');
header('Content-Length: ' . strlen($json));
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
echo $json;
