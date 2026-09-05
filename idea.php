<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$profileId = canada_profile();
$profile = CANADA_PROFILES[$profileId];
?>
<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#143b2b"><meta name="robots" content="noindex,nofollow"><title>Idee · Canada 2027</title><link rel="stylesheet" href="styles.css"></head><body class="idea-detail-page" data-idea-detail>
<header class="topbar"><a class="brand" href="index.php"><span class="brand-mark">🍁</span><span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span></a><a class="profile-chip" href="login.php?switch=1&amp;next=<?= rawurlencode($_SERVER['REQUEST_URI'] ?? '/index.php') ?>"><i class="avatar <?= $profile['avatar'] ?>"></i><span><?= $profile['name'] ?></span></a></header>
<main class="idea-detail-shell"><a class="back-link idea-back" id="idea-back" href="index.php">← Zurück zu den Ideen</a><div id="idea-detail" class="idea-detail-loading">Idee wird geladen …</div></main>
<script src="app.js?v=20260905-4"></script></body></html>
