<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$profileId = canada_profile();
$profile = CANADA_PROFILES[$profileId];
$destination = $destination ?? 'montreal';
$heroMeta = [
  'montreal' => [
    'number' => '01',
    'chips' => ['Lars · Andrea · Christina · Manfred', 'Uville Hotel', '2 volle Tage', '3 Abende'],
  ],
  'mauricie' => [
    'number' => '02',
    'chips' => ['Nature Nature', '3 Nächte', '2 volle Naturtage', 'Selbstversorger'],
  ],
  'sainte-rose' => [
    'number' => '03',
    'chips' => ['Exode en Nature', '4 Nächte', '3 volle Tage', 'Fjord & Monts-Valin'],
  ],
  'orford' => [
    'number' => '05',
    'chips' => ['Espace 4 Saisons', '3 Nächte', '2 volle Tage', 'Indian Summer'],
  ],
];
$hero = $heroMeta[$destination] ?? $heroMeta['montreal'];
?>
<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#143b2b"><meta name="description" content="Canada 2027 – Reiseplanung"><meta name="robots" content="noindex,nofollow"><title>Canada 2027</title><link rel="stylesheet" href="styles.css?v=20260906-5"></head><body class="destination-page" data-destination="<?= htmlspecialchars($destination, ENT_QUOTES) ?>">
<header class="topbar"><a class="brand" href="index.php"><span class="brand-mark">🍁</span><span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span></a><nav class="desktop-nav"><a href="index.php">Übersicht</a><a class="active" href="#ideas">Ideen</a></nav><a class="profile-chip" href="login.php?switch=1&amp;next=<?= rawurlencode($_SERVER['REQUEST_URI'] ?? '/index.php') ?>" aria-label="Profil wechseln"><i class="avatar <?= $profile['avatar'] ?>"></i><span><?= $profile['name'] ?></span></a></header>
<section class="destination-hero" id="top"><div class="destination-hero-inner"><a class="back-link" href="index.php">← Reiseübersicht</a><p class="eyebrow"><?= htmlspecialchars($hero['number'], ENT_QUOTES) ?> · Destination</p><h1 id="destination-title"></h1><p id="destination-summary"></p><div class="destination-hero-chips"><?php foreach ($hero['chips'] as $chip): ?><span><?= htmlspecialchars($chip, ENT_QUOTES) ?></span><?php endforeach; ?></div></div></section>
<main><nav class="destination-tabs destination-switcher" id="destination-tabs" role="tablist" aria-label="Destination auswählen"></nav>
<section class="section"><div class="section-head"><div><p class="eyebrow">Vom Ankommen bis zur Abreise</p><h2>Anreise &amp; Tage vor Ort</h2></div><div class="legend"><span><i class="dot move"></i> Reisetag</span><span><i class="dot stay"></i> Tag vor Ort</span></div></div><div class="route-list" id="route-list"></div></section>
<?php if ($destination === 'montreal'): ?>
<section class="section montreal-planner" aria-labelledby="montreal-planner-title">
  <div class="section-head montreal-plan-head">
    <div><p class="eyebrow">Vier Tagesblöcke · drei Abende</p><h2 id="montreal-planner-title">Erst auswählen, dann die Route bauen</h2></div>
    <span class="local-note">Planungsstand · September 2026</span>
  </div>
  <p class="montreal-intro">Freitag gehört dem Ankommen. Samstag und Sonntag bieten jeweils einen Vormittag und einen Nachmittag. Abendessen und Abendprogramm sind jeden Tag bewusst reserviert – damit Montréal nicht nach dem Sightseeing einfach aufhört.</p>
  <div class="time-budget" aria-label="Verfügbare Zeit in Montréal">
    <article><span>Fr · 17.09.</span><strong>Ankommen</strong><small>Dinner + leichter Abend</small></article>
    <article><span>Sa · 18.09.</span><strong>2 Blöcke</strong><small>Vormittag + Nachmittag</small></article>
    <article><span>So · 19.09.</span><strong>2 Blöcke</strong><small>Vormittag + Nachmittag</small></article>
    <article class="budget-total"><span>Verfügbar</span><strong>4 Tagesblöcke</strong><small>plus 3 Abendprogramme</small></article>
  </div>
  <div class="block-key">
    <span><b>Kurz</b> 1–1,5 Std.</span><span><b>½ Block</b> 2–2,5 Std.</span><span><b>1 Block</b> 3–4 Std.</span><span><b>2 Blöcke</b> 6–7 Std.</span>
  </div>
  <aside class="jetlag-note"><span>☀️</span><div><strong>Freitag: freundlich zum Jetlag</strong><p>Nach der Landung möglichst nach Ortszeit leben: einchecken, duschen, früh essen, noch etwas Tageslicht und Bewegung. Kein langer Schlaf am Nachmittag; gegen 21:30–22:00 Uhr ins Bett. Deshalb bleibt das erste Abendprogramm kurz und jederzeit abbrechbar.</p><a href="https://www.cdc.gov/yellow-book/hcp/travel-air-sea/jet-lag-disorder.html" target="_blank" rel="noopener">Hinweise des CDC zum Jetlag ↗</a></div></aside>
</section>

<section class="section montreal-evenings" aria-labelledby="montreal-evenings-title">
  <div class="section-head"><div><p class="eyebrow">Jeden Tag mitgedacht</p><h2 id="montreal-evenings-title">Drei Abende in Montréal</h2></div><span class="local-note">Restaurantwahl folgt später</span></div>
  <div class="evening-grid">
    <article><span class="evening-number">01</span><p class="idea-place">Freitag · flexibel</p><h3>Erstes Dinner &amp; Altstadtlicht</h3><p>Ein schönes Essen nahe dem Uville, danach 45–75 Minuten über Rue Saint-Paul, Place d’Armes und zum Alten Hafen. Keine feste Buchung außer dem Restaurant.</p><div class="evening-links"><a href="https://restaurantmonarque.ca/en/" target="_blank" rel="noopener">Monarque ↗</a><a href="https://www.gibbys.com/en/" target="_blank" rel="noopener">Gibbys ↗</a></div></article>
    <article><span class="evening-number">02</span><p class="idea-place">Samstag · Erlebnisabend</p><h3>Ein buchbares Highlight</h3><p>AURA, Twilight Walk, Night Tour oder Ghost Walk. Zuerst stimmen wir über den besonderen Abend grundsätzlich ab, danach wählt jeder seinen Favoriten.</p><a class="evening-cta" href="idea.php?id=montreal-evening">Abendideen ansehen &amp; abstimmen →</a></article>
    <article><span class="evening-number">03</span><p class="idea-place">Sonntag · Abschluss</p><h3>Besonderes Dinner, ruhiger Ausklang</h3><p>Das Restaurant passend zum letzten Tagesviertel wählen. Danach Cocktailbar, Live-Musik, Hafenrunde oder bewusst nur ein entspannter Spaziergang.</p><a class="evening-cta" href="idea.php?id=montreal-dinner">Dinner-Stil abstimmen →</a></article>
  </div>
</section>

<section class="section montreal-videos" aria-labelledby="montreal-videos-title">
  <div class="section-head"><div><p class="eyebrow">Erst ansehen, dann entscheiden</p><h2 id="montreal-videos-title">Ein Gefühl für die Viertel</h2></div><span class="local-note">Videos öffnen YouTube</span></div>
  <div class="video-grid">
    <a class="video-card" href="https://www.youtube.com/watch?v=8-KWazizDXM" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/8-KWazizDXM/hqdefault.jpg" alt="Vorschau auf einen Rundgang durch den Alten Hafen von Montréal" loading="lazy"><span class="play-mark">▶</span><div><small>Vieux-Montréal</small><strong>Alter Hafen und Altstadt</strong></div></a>
    <a class="video-card" href="https://www.youtube.com/watch?v=1cKSOxaq1NA" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/1cKSOxaq1NA/hqdefault.jpg" alt="Vorschau auf Plateau und Mile End in Montréal" loading="lazy"><span class="play-mark">▶</span><div><small>Stadtviertel</small><strong>Plateau und Mile End</strong></div></a>
    <a class="video-card" href="https://www.youtube.com/watch?v=69-9SvOtxTY" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/69-9SvOtxTY/hqdefault.jpg" alt="Vorschau auf den Jean-Talon-Markt in Montréal" loading="lazy"><span class="play-mark">▶</span><div><small>Kulinarik</small><strong>Jean-Talon Market</strong></div></a>
    <a class="video-card" href="https://www.youtube.com/watch?v=Z40_9B_xDt0" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/Z40_9B_xDt0/hqdefault.jpg" alt="Vorschau auf eine geführte Fahrradtour durch Montréal" loading="lazy"><span class="play-mark">▶</span><div><small>Geführt</small><strong>Montréal per Fahrrad</strong></div></a>
  </div>
</section>
<?php endif; ?>
<?php if ($destination === 'sainte-rose'): ?>
<section class="section" aria-labelledby="transfer-decision-title">
  <div class="section-head">
    <div><p class="eyebrow">Transfer · Donnerstag, 23. September</p><h2 id="transfer-decision-title">Roadtrip oder Val-Jalbert?</h2></div>
    <span class="local-note">Gemeinsame Entscheidung</span>
  </div>
  <p style="max-width:780px;color:var(--muted);margin:-8px 0 20px">Der lange Wechsel von Nature Nature nach Exode wird bewusst genutzt. Vergleicht B2 mit mehreren flexiblen Stopps gegen C mit Val-Jalbert als großem Hauptziel – inklusive Google-Routen, Zeiten, Kosten, Quellen, Video sowie gemeinsamer Sterne- und Kommentar-Abstimmung.</p>
  <a class="new-idea-button" href="03-transfer-23-09.php" style="display:inline-flex"><span>↗</span> Transfervarianten vergleichen &amp; abstimmen</a>
</section>
<?php endif; ?>
<section class="section ideas" id="ideas"><div class="section-head ideas-head"><div><p class="eyebrow">Gemeinsam entscheiden</p><h2 id="ideas-title"></h2></div><a class="new-idea-button" href="new-idea.php?destination=<?= rawurlencode($destination) ?>"><span>＋</span> Neue Idee</a></div>
<?php if ($destination === 'montreal'): ?><div class="interest-scale"><strong>So stimmen wir ab:</strong><span>★★★★★ unbedingt</span><span>★★★★ gerne</span><span>★★★ neutral</span><span>★★ eher nicht</span><span>★ kann entfallen</span><small>Die Zeitangabe auf jeder Karte enthält auch Wege und kurze Pausen. Details, Links und Kommentare öffnen sich beim Antippen.</small></div><?php endif; ?>
<div class="idea-toolbar"><div class="filters"><button class="filter active" data-filter="all">Alle</button><button class="filter" data-filter="booked">Gebucht</button><button class="filter" data-filter="idea">Ideen</button></div><a id="comparison-link" class="comparison-link" href="#" target="_blank" hidden>PDF-Übersicht ↗</a></div><div class="idea-grid" id="idea-grid"></div></section></main>
<nav class="mobile-nav"><a href="index.php"><span>⌁</span>Reise</a><a class="active" href="#ideas"><span>★</span>Ideen</a><a href="index.php#travellers"><span>♙</span>Wir vier</a></nav><dialog id="details-dialog"><button class="close-dialog" aria-label="Schließen">×</button><div id="dialog-content"></div></dialog><script src="app.js?v=20260906-4"></script></body></html>
