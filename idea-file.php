<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$ideaId = preg_replace('/[^a-zA-Z0-9-]/', '', (string) ($_GET['idea'] ?? ''));
$dataFile = __DIR__ . '/data/ideas.json';
$data = is_file($dataFile) ? json_decode((string) file_get_contents($dataFile), true) : null;
$attachment = null;
foreach ((array) ($data['customIdeas'] ?? []) as $idea) {
    if (is_array($idea) && ($idea['id'] ?? '') === $ideaId) { $attachment = $idea['attachment'] ?? null; break; }
}
if (!is_array($attachment)) { http_response_code(404); exit('Datei nicht gefunden'); }
$stored = basename((string) ($attachment['stored'] ?? ''));
$path = __DIR__ . '/data/uploads/' . $stored;
if ($stored === '' || !is_file($path)) { http_response_code(404); exit('Datei nicht gefunden'); }
$name = str_replace(["\r","\n",'"'], '', (string) ($attachment['name'] ?? 'Datei'));
header('Content-Type: ' . (string) ($attachment['mime'] ?? 'application/octet-stream'));
header('Content-Length: ' . filesize($path));
header('Content-Disposition: inline; filename="' . $name . '"');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: private, max-age=300');
readfile($path);
