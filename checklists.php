<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$currentProfile = canada_require_api();

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/checklists.json';

function respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_text($value, int $limit): string {
    $text = trim((string) $value);
    $text = strip_tags($text);
    return function_exists('mb_substr') ? mb_substr($text, 0, $limit) : substr($text, 0, $limit);
}

function validate_data($input): ?array {
    if (!is_array($input) || !isset($input['al'], $input['cm'])) return null;
    $result = [];
    foreach (['al', 'cm'] as $coupleId) {
        $couple = $input[$coupleId];
        if (!is_array($couple) || !isset($couple['lists']) || !is_array($couple['lists'])) return null;
        $lists = [];
        foreach (array_slice($couple['lists'], 0, 30) as $list) {
            if (!is_array($list)) continue;
            $title = clean_text($list['title'] ?? '', 60);
            if ($title === '') continue;
            $items = [];
            foreach (array_slice(is_array($list['items'] ?? null) ? $list['items'] : [], 0, 80) as $item) {
                if (!is_array($item)) continue;
                $text = clean_text($item['text'] ?? '', 100);
                if ($text === '') continue;
                $items[] = [
                    'id' => clean_text($item['id'] ?? uniqid('item-', true), 80),
                    'text' => $text,
                    'done' => !empty($item['done'])
                ];
            }
            $lists[] = [
                'id' => clean_text($list['id'] ?? uniqid('list-', true), 80),
                'title' => $title,
                'icon' => clean_text($list['icon'] ?? '🍁', 8),
                'items' => $items
            ];
        }
        $result[$coupleId] = [
            'title' => $coupleId === 'al' ? 'Andrea & Lars' : 'Christina & Manfred',
            'avatars' => '',
            'lists' => $lists
        ];
    }
    return $result;
}

if ($method === 'GET') {
    if (!is_file($dataFile)) respond(200, ['data' => null, 'updatedAt' => null]);
    $raw = file_get_contents($dataFile);
    $stored = is_string($raw) ? json_decode($raw, true) : null;
    respond(200, is_array($stored) ? $stored : ['data' => null, 'updatedAt' => null]);
}

if ($method !== 'POST') respond(405, ['error' => 'Method not allowed']);

if (!canada_origin_ok()) respond(403, ['error' => 'Invalid origin']);
canada_require_csrf();

$raw = file_get_contents('php://input');
if (!is_string($raw) || strlen($raw) > 250000) respond(400, ['error' => 'Invalid payload']);
$body = json_decode($raw, true);
$data = validate_data($body['data'] ?? null);
if ($data === null) respond(422, ['error' => 'Invalid checklist data']);

if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) respond(500, ['error' => 'Storage unavailable']);
$payload = ['data' => $data, 'updatedAt' => gmdate('c')];
$encoded = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
if (file_put_contents($dataFile, $encoded, LOCK_EX) === false) respond(500, ['error' => 'Could not save']);
respond(200, $payload);
