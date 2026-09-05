<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
$currentProfile = canada_require_api();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const STATIC_IDEA_IDS = ['whale-tour','montreal-ideas','transfer-stop','lac-solitaire','ruisseau-bouchard','cascades-falaises','canoe-intro','waber-falls','shawinigan','montagne-du-chapeau','fjordtag-varianten','pic-tete-de-chien'];
const DESTINATION_IDS = ['montreal','mauricie','sainte-rose','quebec','orford'];
const MAX_UPLOAD_BYTES = 10485760;
$dataDir = __DIR__ . '/data';
$uploadDir = $dataDir . '/uploads';
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

function idea_empty_data(): array { return ['ratings' => [], 'comments' => [], 'customIdeas' => []]; }

function idea_read(string $file): array {
    if (!is_file($file)) return idea_empty_data();
    $raw = file_get_contents($file);
    $data = is_string($raw) ? json_decode($raw, true) : null;
    return is_array($data) ? array_merge(idea_empty_data(), $data) : idea_empty_data();
}

function idea_custom(array $data, string $ideaId): ?array {
    foreach ((array) ($data['customIdeas'] ?? []) as $idea) {
        if (is_array($idea) && ($idea['id'] ?? '') === $ideaId) return $idea;
    }
    return null;
}

function idea_exists(array $data, string $ideaId): bool {
    return in_array($ideaId, STATIC_IDEA_IDS, true) || idea_custom($data, $ideaId) !== null;
}

function idea_view(array $data, string $ideaId, string $currentProfile): array {
    $ratings = is_array($data['ratings'][$ideaId] ?? null) ? $data['ratings'][$ideaId] : [];
    $values = array_values(array_filter($ratings, fn($rating) => is_int($rating) && $rating >= 1 && $rating <= 5));
    $comments = array_values(array_filter((array) ($data['comments'][$ideaId] ?? []), fn($comment) => is_array($comment)));
    usort($comments, fn($a, $b) => strcmp((string) ($a['createdAt'] ?? ''), (string) ($b['createdAt'] ?? '')));
    return ['idea' => idea_custom($data, $ideaId), 'ratings' => $ratings, 'average' => $values ? round(array_sum($values) / count($values), 1) : null, 'ratingCount' => count($values), 'comments' => $comments, 'currentProfile' => $currentProfile, 'profiles' => CANADA_PROFILES];
}

function idea_parse_links(string $value): array {
    $links = [];
    foreach (preg_split('/\R/', $value) ?: [] as $line) {
        $url = trim($line);
        if ($url === '') continue;
        if (!filter_var($url, FILTER_VALIDATE_URL) || !in_array(strtolower((string) parse_url($url, PHP_URL_SCHEME)), ['http','https'], true)) idea_respond(422, ['error' => 'Bitte nur vollständige Links mit https:// eintragen']);
        $links[] = ['label' => parse_url($url, PHP_URL_HOST) ?: 'Link öffnen', 'url' => $url];
        if (count($links) >= 8) break;
    }
    return $links;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$ideaId = idea_clean($_GET['idea'] ?? '', 80);
$data = idea_read($dataFile);

if ($method === 'GET' && isset($_GET['summary'])) {
    $summaries = [];
    $customIds = array_values(array_filter(array_map(fn($idea) => is_array($idea) ? ($idea['id'] ?? null) : null, (array) $data['customIdeas'])));
    foreach (array_merge(STATIC_IDEA_IDS, $customIds) as $id) {
        if (!is_string($id) || $id === '') continue;
        $ratings = is_array($data['ratings'][$id] ?? null) ? $data['ratings'][$id] : [];
        $values = array_values(array_filter($ratings, fn($rating) => is_int($rating) && $rating >= 1 && $rating <= 5));
        $visibleComments = array_filter((array) ($data['comments'][$id] ?? []), fn($comment) => is_array($comment) && empty($comment['deleted']));
        $summaries[$id] = ['average' => $values ? round(array_sum($values) / count($values), 1) : null, 'count' => count($values), 'mine' => $ratings[$currentProfile] ?? null, 'comments' => count($visibleComments)];
    }
    idea_respond(200, ['ideas' => $summaries, 'customIdeas' => array_values((array) $data['customIdeas'])]);
}

if ($method === 'GET') {
    if (!idea_exists($data, $ideaId)) idea_respond(404, ['error' => 'Idee nicht gefunden']);
    idea_respond(200, idea_view($data, $ideaId, $currentProfile));
}
if ($method !== 'POST') idea_respond(405, ['error' => 'Methode nicht erlaubt']);
if (!canada_origin_ok()) idea_respond(403, ['error' => 'Ungültige Herkunft']);
canada_require_csrf();

$isMultipart = str_starts_with((string) ($_SERVER['CONTENT_TYPE'] ?? ''), 'multipart/form-data');
if ($isMultipart) {
    $body = $_POST;
} else {
    $raw = file_get_contents('php://input');
    if (!is_string($raw) || strlen($raw) > 12000) idea_respond(400, ['error' => 'Ungültige Anfrage']);
    $body = json_decode($raw, true);
    if (!is_array($body)) idea_respond(400, ['error' => 'Ungültige Anfrage']);
}
$action = (string) ($body['action'] ?? '');
if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) idea_respond(500, ['error' => 'Speicher nicht verfügbar']);

$newIdea = null;
$newUploadPath = null;
if ($action === 'create-idea') {
    $destination = idea_clean($body['destination'] ?? '', 40);
    $title = idea_clean($body['title'] ?? '', 120);
    $text = idea_clean($body['text'] ?? '', 3000);
    if (!in_array($destination, DESTINATION_IDS, true)) idea_respond(422, ['error' => 'Destination nicht gefunden']);
    if ($title === '') idea_respond(422, ['error' => 'Bitte eine Überschrift eingeben']);
    if ($text === '') idea_respond(422, ['error' => 'Bitte die Idee kurz beschreiben']);
    $links = idea_parse_links((string) ($body['links'] ?? ''));
    $newId = 'custom-' . bin2hex(random_bytes(10));
    $attachment = null;
    $file = $_FILES['attachment'] ?? null;
    if (is_array($file) && (int) ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
        if ((int) $file['error'] !== UPLOAD_ERR_OK) idea_respond(422, ['error' => 'Die Datei konnte nicht hochgeladen werden']);
        if ((int) ($file['size'] ?? 0) > MAX_UPLOAD_BYTES) idea_respond(422, ['error' => 'Die Datei darf höchstens 10 MB groß sein']);
        $mime = (new finfo(FILEINFO_MIME_TYPE))->file((string) $file['tmp_name']);
        $types = ['application/pdf' => 'pdf','image/jpeg' => 'jpg','image/png' => 'png','image/webp' => 'webp'];
        if (!is_string($mime) || !isset($types[$mime])) idea_respond(422, ['error' => 'Erlaubt sind PDF, JPG, PNG und WebP']);
        if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true) && !is_dir($uploadDir)) idea_respond(500, ['error' => 'Upload-Speicher nicht verfügbar']);
        $stored = bin2hex(random_bytes(16)) . '.' . $types[$mime];
        $newUploadPath = $uploadDir . '/' . $stored;
        if (!move_uploaded_file((string) $file['tmp_name'], $newUploadPath)) idea_respond(500, ['error' => 'Die Datei konnte nicht gespeichert werden']);
        $attachment = ['stored' => $stored, 'name' => idea_clean($file['name'] ?? 'Datei', 160), 'mime' => $mime, 'size' => (int) $file['size']];
    }
    $newIdea = ['id' => $newId, 'destination' => $destination, 'type' => 'idea', 'icon' => '🍁', 'title' => $title, 'text' => $text, 'links' => $links, 'attachment' => $attachment, 'author' => $currentProfile, 'createdAt' => gmdate('c')];
    $ideaId = $newId;
}

$handle = fopen($dataFile, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) {
    if ($newUploadPath && is_file($newUploadPath)) unlink($newUploadPath);
    idea_respond(500, ['error' => 'Speicher nicht verfügbar']);
}
$storedRaw = stream_get_contents($handle);
$data = is_string($storedRaw) && $storedRaw !== '' ? json_decode($storedRaw, true) : null;
$data = is_array($data) ? array_merge(idea_empty_data(), $data) : idea_empty_data();

if ($action === 'create-idea') {
    $data['customIdeas'][] = $newIdea;
} elseif (!idea_exists($data, $ideaId)) {
    flock($handle, LOCK_UN); fclose($handle); idea_respond(404, ['error' => 'Idee nicht gefunden']);
} elseif ($action === 'rating') {
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
        if (!$parent || !empty($parent['parentId']) || !empty($parent['deleted'])) { flock($handle, LOCK_UN); fclose($handle); idea_respond(422, ['error' => 'Antwort nicht möglich']); }
    }
    $data['comments'][$ideaId][] = ['id' => bin2hex(random_bytes(12)), 'profile' => $currentProfile, 'text' => $text, 'parentId' => $parentId ?: null, 'createdAt' => gmdate('c')];
} elseif ($action === 'delete-comment') {
    $commentId = idea_clean($body['commentId'] ?? '', 80);
    $comments = isset($data['comments'][$ideaId]) && is_array($data['comments'][$ideaId]) ? $data['comments'][$ideaId] : [];
    $targetIndex = null;
    foreach ($comments as $index => $comment) if (($comment['id'] ?? '') === $commentId) { $targetIndex = $index; break; }
    if ($targetIndex === null) { flock($handle, LOCK_UN); fclose($handle); idea_respond(404, ['error' => 'Kommentar nicht gefunden']); }
    if (($comments[$targetIndex]['profile'] ?? '') !== $currentProfile) { flock($handle, LOCK_UN); fclose($handle); idea_respond(403, ['error' => 'Du kannst nur deinen eigenen Kommentar löschen']); }
    $isRoot = empty($comments[$targetIndex]['parentId']);
    $hasReplies = $isRoot && count(array_filter($comments, fn($comment) => ($comment['parentId'] ?? '') === $commentId)) > 0;
    if ($hasReplies) {
        $comments[$targetIndex]['deleted'] = true; $comments[$targetIndex]['profile'] = null; $comments[$targetIndex]['text'] = '';
    } else {
        array_splice($comments, $targetIndex, 1);
        $activeParentIds = array_filter(array_map(fn($comment) => $comment['parentId'] ?? null, $comments));
        $comments = array_values(array_filter($comments, fn($comment) => empty($comment['deleted']) || in_array($comment['id'] ?? '', $activeParentIds, true)));
    }
    $data['comments'][$ideaId] = $comments;
} elseif ($action === 'delete-idea') {
    $custom = idea_custom($data, $ideaId);
    if (!$custom) { flock($handle, LOCK_UN); fclose($handle); idea_respond(403, ['error' => 'Diese feste Idee kann nicht gelöscht werden']); }
    if (($custom['author'] ?? '') !== $currentProfile) { flock($handle, LOCK_UN); fclose($handle); idea_respond(403, ['error' => 'Du kannst nur deine eigene Idee löschen']); }
    $stored = basename((string) ($custom['attachment']['stored'] ?? ''));
    $data['customIdeas'] = array_values(array_filter((array) $data['customIdeas'], fn($idea) => ($idea['id'] ?? '') !== $ideaId));
    unset($data['ratings'][$ideaId], $data['comments'][$ideaId]);
    if ($stored !== '' && is_file($uploadDir . '/' . $stored)) unlink($uploadDir . '/' . $stored);
} else {
    flock($handle, LOCK_UN); fclose($handle);
    if ($newUploadPath && is_file($newUploadPath)) unlink($newUploadPath);
    idea_respond(422, ['error' => 'Unbekannte Aktion']);
}

$encoded = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
rewind($handle); ftruncate($handle, 0);
if (fwrite($handle, $encoded) === false) { flock($handle, LOCK_UN); fclose($handle); idea_respond(500, ['error' => 'Speichern fehlgeschlagen']); }
fflush($handle); flock($handle, LOCK_UN); fclose($handle);
if ($action === 'delete-idea') idea_respond(200, ['deleted' => true]);
idea_respond(200, idea_view($data, $ideaId, $currentProfile));
