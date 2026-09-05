<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$profileId = canada_profile();
$profile = CANADA_PROFILES[$profileId];
$allowed = ['montreal','mauricie','sainte-rose','quebec','orford'];
$destination = (string) ($_GET['destination'] ?? 'montreal');
if (!in_array($destination, $allowed, true)) $destination = 'montreal';
?>
<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#143b2b"><meta name="robots" content="noindex,nofollow"><title>Neue Idee · Canada 2027</title><link rel="stylesheet" href="styles.css"></head><body class="idea-editor-page" data-new-idea data-destination="<?= htmlspecialchars($destination, ENT_QUOTES) ?>">
<header class="topbar"><a class="brand" href="index.php"><span class="brand-mark">🍁</span><span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span></a><a class="profile-chip" href="login.php?switch=1&amp;next=<?= rawurlencode($_SERVER['REQUEST_URI'] ?? '/index.php') ?>"><i class="avatar <?= $profile['avatar'] ?>"></i><span><?= $profile['name'] ?></span></a></header>
<main class="idea-editor-shell"><a class="back-link" id="new-idea-back" href="index.php">← Zurück zu den Ideen</a><section class="idea-editor-card"><p class="eyebrow">Gemeinsam planen</p><h1>Neue Idee</h1><p id="new-idea-destination" class="editor-destination"></p><form id="new-idea-form" enctype="multipart/form-data"><input type="hidden" name="action" value="create-idea"><input type="hidden" name="destination" value="<?= htmlspecialchars($destination, ENT_QUOTES) ?>"><label>Überschrift<input name="title" maxlength="120" required placeholder="z. B. Fahrradtour am Lachine-Kanal"></label><label>Beschreibung<textarea name="text" maxlength="3000" required placeholder="Was ist die Idee und warum könnte sie zu unserer Reise passen?"></textarea></label><label>Links <small>Optional · ein vollständiger Link pro Zeile</small><textarea name="links" class="links-field" placeholder="https://…&#10;https://…"></textarea></label><label class="file-field">Datei anhängen <small>Optional · PDF, JPG, PNG oder WebP · maximal 10 MB</small><input name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"></label><div class="form-message" id="new-idea-message" role="status"></div><button class="primary-button" type="submit">Idee veröffentlichen</button></form></section></main><script src="app.js?v=20260905-7"></script></body></html>
