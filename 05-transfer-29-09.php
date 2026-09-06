<?php
declare(strict_types=1);
require __DIR__ . '/auth-lib.php';
canada_require_login();
$profileId = canada_profile();
$profile = CANADA_PROFILES[$profileId];
$csrf = canada_csrf();
?>
<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#143b2b">
<meta name="description" content="Canada 2027 – Transferentscheidung Québec City nach Orford">
<meta name="robots" content="noindex,nofollow">
<meta name="csrf-token" content="<?= htmlspecialchars($csrf, ENT_QUOTES) ?>">
<title>Transfer 29.09.2027 · Canada 2027</title>
<link rel="stylesheet" href="styles.css?v=20260906-8">
<style>
.transfer-main { width:min(1180px,calc(100% - 32px)); margin:24px auto 100px; }
.transfer-hero { position:relative; overflow:hidden; padding:clamp(28px,5vw,56px); color:#fff; background:linear-gradient(138deg,#082f2b 0%,#0d5b4d 58%,#287b69 100%); border-radius:32px; box-shadow:var(--shadow); }
.transfer-hero::after { content:"29.09."; position:absolute; right:-8px; bottom:-35px; color:rgba(255,255,255,.05); font:800 clamp(5rem,13vw,10rem)/1 Georgia,serif; }
.transfer-hero > * { position:relative; z-index:1; }
.transfer-hero .back-link { color:rgba(255,255,255,.78); }
.transfer-hero h1 { max-width:900px; margin-top:8px; font-size:clamp(2.35rem,5vw,4.6rem); }
.transfer-hero p:last-child { max-width:840px; color:rgba(255,255,255,.8); }
.transfer-chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:20px; }
.transfer-chip { padding:7px 11px; border:1px solid rgba(255,255,255,.18); border-radius:99px; background:rgba(255,255,255,.10); font-size:.8rem; font-weight:800; }
.transfer-note { margin:18px 0; padding:14px 16px; border:1px solid #ead8a9; border-radius:16px; background:#fff7df; color:#5e4a19; }
.transfer-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; margin-top:18px; }
.transfer-card { position:relative; overflow:hidden; border:1px solid var(--line); border-radius:28px; background:var(--paper); box-shadow:0 12px 42px rgba(15,42,31,.06); }
.transfer-card.recommended { border-color:#d7b663; box-shadow:0 14px 46px rgba(119,86,12,.12); }
.recommend-badge { position:absolute; right:18px; top:18px; z-index:2; padding:7px 10px; border-radius:99px; color:#5a4310; background:#fff0bd; font-size:.72rem; font-weight:900; letter-spacing:.03em; }
.transfer-card-head { padding:24px 24px 18px; border-bottom:1px solid var(--line); background:linear-gradient(145deg,#edf5ef,#fff); }
.transfer-card.recommended .transfer-card-head { background:linear-gradient(145deg,#fff7df,#fff); }
.transfer-card.experience .transfer-card-head { background:linear-gradient(145deg,#eef6f2,#fff); }
.transfer-card h2 { font-size:clamp(1.8rem,3vw,2.55rem); }
.transfer-card-head p { margin:7px 0 0; color:var(--muted); }
.transfer-card-body { padding:22px 24px 26px; }
.route-button { display:flex; align-items:center; justify-content:center; gap:9px; width:100%; padding:14px 16px; border-radius:14px; color:#fff; background:var(--forest); font-weight:900; box-shadow:0 8px 22px rgba(12,74,64,.16); }
.route-button:hover { background:var(--pine); }
.metric-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; margin:16px 0 20px; }
.metric { padding:11px; border:1px solid var(--line); border-radius:14px; background:#f8faf7; }
.metric small { display:block; color:var(--muted); font-size:.65rem; font-weight:850; letter-spacing:.06em; text-transform:uppercase; }
.metric strong { display:block; margin-top:3px; font-size:.95rem; }
.transfer-card h3 { margin:22px 0 9px; font-size:1.16rem; }
.transfer-card p { color:#40534f; }
.timeline { margin-left:8px; padding-left:18px; border-left:3px solid #c8d7cf; }
.timeline-stop { position:relative; padding:0 0 16px; }
.timeline-stop::before { content:""; position:absolute; left:-25px; top:5px; width:11px; height:11px; border:2px solid #fff; border-radius:50%; background:var(--pine); box-shadow:0 0 0 1px #a9bbb0; }
.timeline-time { color:var(--maple); font-size:.72rem; font-weight:900; }
.timeline-stop b { display:block; margin-top:2px; }
.timeline-stop p { margin:3px 0 7px; font-size:.88rem; color:var(--muted); }
.inline-links { display:flex; flex-wrap:wrap; gap:7px; }
.mini-link { display:inline-flex; align-items:center; padding:7px 9px; border:1px solid #bfcac4; border-radius:10px; background:#fff; font-size:.76rem; font-weight:800; }
.procon { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:14px; }
.procon > div { padding:13px 14px; border-radius:14px; }
.pro { background:#edf5ef; }
.con { background:#fff0eb; }
.procon strong { display:block; margin-bottom:5px; }
.procon ul { margin:0; padding-left:18px; font-size:.86rem; color:#40534f; }
.decision-section { margin-top:18px; padding:clamp(22px,4vw,38px); border:1px solid rgba(12,74,64,.09); border-radius:30px; background:rgba(255,253,248,.97); box-shadow:0 12px 42px rgba(15,42,31,.05); }
.decision-section h2 { margin-bottom:8px; }
.decision-leader { display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin:16px 0 20px; }
.score-pill { padding:9px 12px; border:1px solid var(--line); border-radius:99px; background:#f7faf7; font-size:.84rem; font-weight:850; }
.vote-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.vote-card { padding:18px; border:1px solid var(--line); border-radius:20px; background:#fff; }
.vote-card.recommended { border-color:#dec678; background:#fffdf6; }
.vote-card h3 { font-size:1.18rem; }
.group-ratings { display:grid; gap:7px; margin:12px 0; }
.person-rating { display:grid; grid-template-columns:92px 1fr; gap:8px; align-items:center; font-size:.82rem; }
.person-rating b { color:var(--forest); }
.stars { display:flex; gap:2px; }
.star-button { padding:0; border:0; color:#c7cec9; background:transparent; cursor:pointer; font-size:1.55rem; line-height:1; }
.star-button.active { color:var(--gold); }
.rating-help { margin:5px 0 14px; color:var(--muted); font-size:.75rem; }
.comments-title { margin-top:18px!important; }
.comment-list { display:grid; gap:9px; margin-top:10px; }
.comment { padding:11px 12px; border:1px solid #e3e8e4; border-radius:13px; background:#fafcf9; }
.comment.reply { margin-left:24px; background:#fff; }
.comment-head { display:flex; justify-content:space-between; gap:10px; color:var(--muted); font-size:.72rem; }
.comment-head strong { color:var(--forest); }
.comment p { margin:5px 0; color:#314641; font-size:.86rem; white-space:pre-wrap; }
.comment-actions { display:flex; gap:10px; }
.comment-actions button { padding:0; border:0; background:transparent; color:var(--pine); cursor:pointer; font-size:.72rem; font-weight:800; }
.comment-form { display:grid; grid-template-columns:1fr auto; gap:7px; margin-top:10px; }
.comment-form input { min-width:0; padding:10px 11px; border:1px solid var(--line); border-radius:11px; font:inherit; }
.comment-form button { padding:10px 13px; border:0; border-radius:11px; color:#fff; background:var(--pine); font-weight:850; cursor:pointer; }
.reply-form { display:none; grid-template-columns:1fr auto; gap:6px; margin-top:8px; }
.reply-form.open { display:grid; }
.reply-form input { min-width:0; padding:8px 9px; border:1px solid var(--line); border-radius:9px; font:inherit; font-size:.82rem; }
.reply-form button { border:0; border-radius:9px; color:#fff; background:var(--forest); font-weight:800; }
.compare-table { width:100%; border-collapse:collapse; margin-top:12px; }
.compare-table th,.compare-table td { padding:11px 9px; border-bottom:1px solid #e4e9e5; text-align:left; vertical-align:top; }
.compare-table th { color:var(--muted); font-size:.75rem; }
.sources-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; margin-top:14px; }
.source-link { padding:12px 13px; border:1px solid var(--line); border-radius:13px; background:#fff; font-size:.82rem; font-weight:800; }
.status { min-height:20px; margin-top:8px; color:var(--muted); font-size:.78rem; }
.recommend-callout { display:grid; grid-template-columns:auto 1fr; gap:14px; align-items:start; margin-top:16px; padding:18px; border:1px solid #dec678; border-radius:18px; background:#fff9e8; }
.recommend-callout span { font-size:1.7rem; }
.recommend-callout p { margin:4px 0 0; color:#5a4d2d; }
@media (max-width:980px) { .transfer-grid,.vote-grid { grid-template-columns:1fr; } }
@media (max-width:860px) { .sources-grid { grid-template-columns:1fr; } }
@media (max-width:560px) { .transfer-main { width:min(100% - 20px,1180px); } .transfer-card-body,.transfer-card-head { padding-left:16px; padding-right:16px; } .procon { grid-template-columns:1fr; } .person-rating { grid-template-columns:78px 1fr; } .compare-table { font-size:.82rem; } }
</style>
</head>
<body>
<header class="topbar">
  <a class="brand" href="index.php"><span class="brand-mark">🍁</span><span><strong>Canada 2027</strong><small>17. September – 2. Oktober</small></span></a>
  <nav class="desktop-nav"><a href="index.php">Übersicht</a><a class="active" href="05-orford.php">Orford</a></nav>
  <a class="profile-chip" href="login.php?switch=1&amp;next=<?= rawurlencode($_SERVER['REQUEST_URI'] ?? '/05-transfer-29-09.php') ?>" aria-label="Profil wechseln"><i class="avatar <?= htmlspecialchars($profile['avatar'], ENT_QUOTES) ?>"></i><span><?= htmlspecialchars($profile['name']) ?></span></a>
</header>

<main class="transfer-main">
<section class="transfer-hero" id="top">
  <a class="back-link" href="05-orford.php">← Zurück zu Orford</a>
  <p class="eyebrow">Transfer · Mittwoch, 29. September 2027</p>
  <h1>Québec City → Orford</h1>
  <p>Der letzte große Destinationswechsel soll angenehm bleiben. Drei realistische Varianten reichen von einer einfachen Mittagspause bis zu einem echten Gartenbesuch – immer mit dem Ziel, Espace 4 Saisons ohne Hektik zu erreichen.</p>
  <div class="transfer-chips"><span class="transfer-chip">4 Erwachsene</span><span class="transfer-chip">Ford Expedition</span><span class="transfer-chip">ca. 250 km direkt</span><span class="transfer-chip">Check-in Espace 4 Saisons ab 16:00</span></div>
</section>

<div class="transfer-note"><strong>Planungsstand September 2026:</strong> Hôtel Port-Royal nennt aktuell Check-out bis 11:00 Uhr; Espace 4 Saisons Zimmerbezug ab 16:00 Uhr. Für die direkte Fahrt planen wir konservativ mit rund 3:25 Std. Reiner Fahrzeit. Öffnungszeiten, Preise und Navigation werden vor der Reise 2027 erneut geprüft.</div>

<section class="transfer-grid">
<article class="transfer-card">
  <div class="transfer-card-head"><p class="eyebrow">Variante A · entspannt</p><h2>Poutine-Pause</h2><p>Québec City → Drummondville → Orford</p></div>
  <div class="transfer-card-body">
    <a class="route-button" href="https://www.google.com/maps/dir/?api=1&amp;origin=Hotel+Port-Royal%2C+144+Rue+Saint-Pierre%2C+Qu%C3%A9bec%2C+QC&amp;destination=Espace+4+Saisons%2C+4940+Chemin+du+Parc%2C+Orford%2C+QC&amp;travelmode=driving&amp;waypoints=Roy+Jucep%2C+1050+Boulevard+Saint-Joseph%2C+Drummondville%2C+QC" target="_blank" rel="noopener">🗺️ Google-Route A öffnen ↗</a>
    <div class="metric-grid">
      <div class="metric"><small>Abfahrt</small><strong>ca. 10:30</strong></div>
      <div class="metric"><small>Stopp</small><strong>45–60 Min.</strong></div>
      <div class="metric"><small>Ankunft</small><strong>ca. 15:45–16:15</strong></div>
      <div class="metric"><small>Wetter</small><strong>fast egal</strong></div>
    </div>
    <h3>Warum diese Variante?</h3>
    <p>Sie nutzt die Strecke, ohne aus dem Transfer einen Ausflugstag zu machen. Drummondville liegt sinnvoll auf dem Weg; Roy Jucep ist eine unkomplizierte Québec-Pause und verbindet Mittagessen mit einem kleinen Stück Poutine-Geschichte.</p>
    <h3>Vorgesehener Ablauf</h3>
    <div class="timeline">
      <div class="timeline-stop"><span class="timeline-time">08:00–09:30</span><b>Frühstück &amp; packen</b><p>Ruhiger letzter Morgen in Québec City.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 10:30</span><b>Hôtel Port-Royal verlassen</b><p>Ohne frühes Aufstehen, aber mit genug Reserve.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 12:30–13:30</span><b>Roy Jucep · Drummondville</b><p>Mittagessen, Toilette, Beine vertreten. Kein zusätzlicher Programmpunkt.</p><div class="inline-links"><a class="mini-link" href="https://royjucep.com/" target="_blank" rel="noopener">Offizielle Seite ↗</a><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Roy+Jucep%2C+Drummondville%2C+QC" target="_blank" rel="noopener">Google Maps ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 15:45–16:15</span><b>Espace 4 Saisons</b><p>Check-in praktisch passend zur offiziellen Zimmerfreigabe.</p></div>
    </div>
    <div class="procon"><div class="pro"><strong>Plus</strong><ul><li>minimaler Zusatzaufwand</li><li>kaum wetterabhängig</li><li>sehr entspannter Rhythmus</li></ul></div><div class="con"><strong>Minus</strong><ul><li>kleiner Erlebniswert</li><li>weniger typisch Eastern Townships</li></ul></div></div>
  </div>
</article>

<article class="transfer-card recommended">
  <span class="recommend-badge">⭐ Unsere Empfehlung</span>
  <div class="transfer-card-head"><p class="eyebrow">Variante B · ausgewogen</p><h2>Käse &amp; Region</h2><p>Québec City → Fromagerie du Presbytère → Orford</p></div>
  <div class="transfer-card-body">
    <a class="route-button" href="https://www.google.com/maps/dir/?api=1&amp;origin=Hotel+Port-Royal%2C+144+Rue+Saint-Pierre%2C+Qu%C3%A9bec%2C+QC&amp;destination=Espace+4+Saisons%2C+4940+Chemin+du+Parc%2C+Orford%2C+QC&amp;travelmode=driving&amp;waypoints=Fromagerie+du+Presbyt%C3%A8re%2C+222+Rue+Principale%2C+Sainte-%C3%89lizabeth-de-Warwick%2C+QC" target="_blank" rel="noopener">🗺️ Google-Route B öffnen ↗</a>
    <div class="metric-grid">
      <div class="metric"><small>Abfahrt</small><strong>ca. 10:00</strong></div>
      <div class="metric"><small>Stopp</small><strong>60–75 Min.</strong></div>
      <div class="metric"><small>Ankunft</small><strong>ca. 15:30–16:15</strong></div>
      <div class="metric"><small>Wetter</small><strong>geringes Risiko</strong></div>
    </div>
    <h3>Warum diese Variante?</h3>
    <p>Ein echter regionaler Genussstopp statt eines großen Pflichtprogramms. Die Fromagerie du Presbytère produziert vor Ort, nutzt die ehemalige Kirche zur Reifung und bietet aktuell Boutique, Käseplatten und Picknickbereich.</p>
    <h3>Vorgesehener Ablauf</h3>
    <div class="timeline">
      <div class="timeline-stop"><span class="timeline-time">08:00–09:15</span><b>Frühstück</b><p>Danach packen und auschecken.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 10:00</span><b>Abfahrt Québec City</b><p>Etwas früher als A, damit der Genussstopp entspannt bleibt.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 12:00–13:15</span><b>Fromagerie du Presbytère</b><p>Boutique, Käse probieren beziehungsweise Käseplatte teilen, kleine Pause und bei Gefallen etwas für Orford mitnehmen.</p><div class="inline-links"><a class="mini-link" href="https://www.fromageriedupresbytere.com/en" target="_blank" rel="noopener">Offizielle Seite ↗</a><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Fromagerie+du+Presbyt%C3%A8re%2C+Sainte-%C3%89lizabeth-de-Warwick%2C+QC" target="_blank" rel="noopener">Google Maps ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 15:30–16:15</span><b>Ankunft Orford</b><p>Zimmerbezug, Gepäck und anschließend bewusst kein weiteres Sightseeing.</p></div>
    </div>
    <div class="procon"><div class="pro"><strong>Plus</strong><ul><li>starker Québec-Faktor</li><li>geringer körperlicher Aufwand</li><li>passt sehr gut zum Check-in</li><li>Mitnahme für Orford möglich</li></ul></div><div class="con"><strong>Minus</strong><ul><li>kleiner Umweg</li><li>2027 Öffnungszeiten neu prüfen</li></ul></div></div>
  </div>
</article>

<article class="transfer-card experience">
  <div class="transfer-card-head"><p class="eyebrow">Variante C · erlebnisreich</p><h2>Parc Marie-Victorin</h2><p>Québec City → Kingsey Falls → Orford</p></div>
  <div class="transfer-card-body">
    <a class="route-button" href="https://www.google.com/maps/dir/?api=1&amp;origin=Hotel+Port-Royal%2C+144+Rue+Saint-Pierre%2C+Qu%C3%A9bec%2C+QC&amp;destination=Espace+4+Saisons%2C+4940+Chemin+du+Parc%2C+Orford%2C+QC&amp;travelmode=driving&amp;waypoints=Parc+Marie-Victorin%2C+385+Boulevard+Marie-Victorin%2C+Kingsey+Falls%2C+QC" target="_blank" rel="noopener">🗺️ Google-Route C öffnen ↗</a>
    <div class="metric-grid">
      <div class="metric"><small>Abfahrt</small><strong>ca. 09:00</strong></div>
      <div class="metric"><small>Besuch</small><strong>2–2½ Std.</strong></div>
      <div class="metric"><small>Ankunft</small><strong>ca. 16:00–17:00</strong></div>
      <div class="metric"><small>Wetter</small><strong>mittel</strong></div>
    </div>
    <h3>Warum diese Variante?</h3>
    <p>Der botanische Park ist ein echter Programmpunkt mit Themengärten, Mosaïcultures und rund sechs Kilometern Wegen. Er lohnt sich nur, wenn ihr bewusst noch einen halben Aktivitätstag aus dem Transfer machen möchtet.</p>
    <h3>Vorgesehener Ablauf</h3>
    <div class="timeline">
      <div class="timeline-stop"><span class="timeline-time">07:30–08:30</span><b>Frühstück</b><p>Früherer Start als bei A und B.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 09:00</span><b>Abfahrt Québec City</b><p>Damit der Park nicht unter Zeitdruck besucht werden muss.</p></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 11:15–14:00</span><b>Parc Marie-Victorin</b><p>2–2½ Stunden Besuch plus kleiner Lunch oder Picknick. Bei Regen verliert C deutlich an Reiz.</p><div class="inline-links"><a class="mini-link" href="https://www.parcmarievictorin.com/" target="_blank" rel="noopener">Offizielle Seite ↗</a><a class="mini-link" href="https://www.google.com/maps/search/?api=1&amp;query=Parc+Marie-Victorin%2C+Kingsey+Falls%2C+QC" target="_blank" rel="noopener">Google Maps ↗</a></div></div>
      <div class="timeline-stop"><span class="timeline-time">ca. 16:00–17:00</span><b>Espace 4 Saisons</b><p>Späteste der drei Varianten, aber weiterhin ohne Abendstress.</p></div>
    </div>
    <div class="procon"><div class="pro"><strong>Plus</strong><ul><li>höchster Erlebniswert</li><li>echter eigenständiger Besuch</li><li>schöne Herbstkulisse möglich</li></ul></div><div class="con"><strong>Minus</strong><ul><li>früher Start</li><li>2–3 Stunden Programm</li><li>wetterabhängiger</li><li>nimmt Orford etwas Naturenergie vorweg</li></ul></div></div>
  </div>
</article>
</section>

<section class="decision-section">
  <p class="eyebrow">Unsere Einordnung</p>
  <h2>B ist der beste Mittelweg</h2>
  <div class="recommend-callout"><span>⭐</span><div><strong>Fromagerie du Presbytère</strong><p>Genug Erlebnis, um die Fahrt aufzuwerten – aber nicht so viel Programm, dass der Transfer anstrengend wird. A bleibt die perfekte Ruheoption; C ist nur dann besser, wenn ihr an diesem Morgen ausdrücklich noch einen richtigen Ausflug wollt.</p></div></div>
</section>

<section class="decision-section">
  <p class="eyebrow">Gemeinsam entscheiden</p>
  <h2>Wie gefällt euch jede Variante?</h2>
  <p>Jeder bewertet unabhängig mit 1–5 Sternen. Kommentare und Antworten bleiben pro Variante getrennt.</p>
  <div class="decision-leader">
    <span class="score-pill">A · Poutine: <b id="avg-a">–</b></span>
    <span class="score-pill">B · Fromagerie: <b id="avg-b">–</b></span>
    <span class="score-pill">C · Parc: <b id="avg-c">–</b></span>
    <span class="score-pill">Zwischenstand: <b id="leader">noch offen</b></span>
  </div>
  <div class="vote-grid">
    <article class="vote-card" data-variant="a"><h3>A · Poutine-Pause</h3><div class="group-ratings" id="ratings-a"></div><div class="rating-help">Tippe auf 1–5 Sterne, um deine Bewertung zu speichern.</div><h3 class="comments-title">Kommentare</h3><div class="comment-list" id="comments-a"></div><form class="comment-form" data-variant="a"><input maxlength="1000" placeholder="Kommentar schreiben …" required><button>Posten</button></form><div class="status" id="status-a"></div></article>
    <article class="vote-card recommended" data-variant="b"><h3>B · Fromagerie ⭐</h3><div class="group-ratings" id="ratings-b"></div><div class="rating-help">Tippe auf 1–5 Sterne, um deine Bewertung zu speichern.</div><h3 class="comments-title">Kommentare</h3><div class="comment-list" id="comments-b"></div><form class="comment-form" data-variant="b"><input maxlength="1000" placeholder="Kommentar schreiben …" required><button>Posten</button></form><div class="status" id="status-b"></div></article>
    <article class="vote-card" data-variant="c"><h3>C · Parc Marie-Victorin</h3><div class="group-ratings" id="ratings-c"></div><div class="rating-help">Tippe auf 1–5 Sterne, um deine Bewertung zu speichern.</div><h3 class="comments-title">Kommentare</h3><div class="comment-list" id="comments-c"></div><form class="comment-form" data-variant="c"><input maxlength="1000" placeholder="Kommentar schreiben …" required><button>Posten</button></form><div class="status" id="status-c"></div></article>
  </div>
</section>

<section class="decision-section">
  <p class="eyebrow">Direkter Vergleich</p>
  <h2>Was entscheidet ihr eigentlich?</h2>
  <table class="compare-table">
    <thead><tr><th>Kriterium</th><th>A · entspannt</th><th>B · ausgewogen ⭐</th><th>C · erlebnisreich</th></tr></thead>
    <tbody>
      <tr><td>Charakter</td><td>Fahrt + Mittagessen</td><td>regionaler Genussstopp</td><td>halber Ausflugstag</td></tr>
      <tr><td>Zusatzaufwand</td><td>minimal</td><td>gering</td><td>deutlich</td></tr>
      <tr><td>Stoppdauer</td><td>45–60 Min.</td><td>60–75 Min.</td><td>2–2½ Std.</td></tr>
      <tr><td>Wetterrisiko</td><td>sehr gering</td><td>gering</td><td>mittel</td></tr>
      <tr><td>Körperlich</td><td>sehr gering</td><td>sehr gering</td><td>leicht</td></tr>
      <tr><td>Kosten</td><td>$</td><td>$–$$</td><td>$$</td></tr>
      <tr><td>Erlebniswert</td><td>★★☆☆☆</td><td>★★★★☆</td><td>★★★★★</td></tr>
      <tr><td>Erholung</td><td>★★★★★</td><td>★★★★☆</td><td>★★☆☆☆</td></tr>
    </tbody>
  </table>
</section>

<section class="decision-section">
  <p class="eyebrow">Ankunftsabend</p>
  <h2>Nach dem Check-in ist Schluss mit Programm</h2>
  <p>Unabhängig von A, B oder C: Zimmer beziehen, Gepäck abstellen, Pool/Jacuzzi und ankommen. Für den ersten Abend planen wir bewusst keine weitere Aktivität und keine zusätzliche Autofahrt.</p>
  <div class="timeline" style="margin-top:18px">
    <div class="timeline-stop"><span class="timeline-time">ab ca. 16:00</span><b>Check-in · Espace 4 Saisons</b><p>Zimmer offiziell aktuell ab 16:00 Uhr; Rezeption derzeit bis 23:00 Uhr.</p></div>
    <div class="timeline-stop"><span class="timeline-time">ca. 16:30–18:30</span><b>Hotel &amp; Erholung</b><p>Pool/Jacuzzi, duschen, umziehen, Pause.</p></div>
    <div class="timeline-stop"><span class="timeline-time">ca. 19:00</span><b>Abendessen im Hotel</b><p>Bistro 4 Saisons als naheliegende Lösung; aktuelle Mittwochsöffnung passt, 2027 erneut prüfen.</p><div class="inline-links"><a class="mini-link" href="https://espace4saisons.com/en/" target="_blank" rel="noopener">Espace 4 Saisons ↗</a><a class="mini-link" href="https://bistro4saisons.com/en/" target="_blank" rel="noopener">Bistro 4 Saisons ↗</a></div></div>
  </div>
</section>

<section class="decision-section">
  <p class="eyebrow">Quellen &amp; Entscheidungshilfen</p>
  <h2>Direkt weiterprüfen</h2>
  <div class="sources-grid">
    <a class="source-link" href="https://www.leportroyal.com/" target="_blank" rel="noopener">Hôtel Port-Royal · offizielle Seite ↗</a>
    <a class="source-link" href="https://espace4saisons.com/en/important-information-for-all-our-customers/" target="_blank" rel="noopener">Espace 4 Saisons · wichtige Informationen ↗</a>
    <a class="source-link" href="https://royjucep.com/" target="_blank" rel="noopener">Roy Jucep · offizielle Seite ↗</a>
    <a class="source-link" href="https://www.fromageriedupresbytere.com/en" target="_blank" rel="noopener">Fromagerie du Presbytère · offizielle Seite ↗</a>
    <a class="source-link" href="https://www.parcmarievictorin.com/" target="_blank" rel="noopener">Parc Marie-Victorin · offizielle Seite ↗</a>
    <a class="source-link" href="https://bistro4saisons.com/en/" target="_blank" rel="noopener">Bistro 4 Saisons · Restaurant ↗</a>
  </div>
  <div class="transfer-note" style="margin-bottom:0"><strong>2027 neu prüfen:</strong> Check-out Port-Royal, Check-in/Rezeption/Pool Espace 4 Saisons, Fahrzeiten und Baustellen, Öffnungszeiten Fromagerie und Parc Marie-Victorin, Eintrittspreise sowie Bistro-Reservierung.</div>
</section>
</main>

<nav class="mobile-nav"><a href="index.php"><span>⌁</span>Reise</a><a class="active" href="05-orford.php"><span>★</span>Orford</a><a href="#top"><span>↑</span>Oben</a></nav>

<script>
const csrf = document.querySelector('meta[name="csrf-token"]').content;
const variants = ['a','b','c'];
const variantNames = {a:'A · Poutine-Pause',b:'B · Fromagerie',c:'C · Parc Marie-Victorin'};
let state = null;

async function api(method='GET', body=null) {
  const options = { method, headers: { 'Accept':'application/json' } };
  if (body) {
    options.headers['Content-Type'] = 'application/json';
    options.headers['X-CSRF-Token'] = csrf;
    options.body = JSON.stringify(body);
  }
  const response = await fetch('transfer-vote-29-09.php', options);
  const data = await response.json().catch(()=>({error:'Ungültige Serverantwort'}));
  if (!response.ok) throw new Error(data.error || 'Speichern fehlgeschlagen');
  return data;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}
function stars(rating, ownVariant) {
  let html = '<div class="stars">';
  for (let i=1;i<=5;i++) html += `<button type="button" class="star-button ${i <= (rating||0) ? 'active' : ''}" data-rate="${i}" data-variant="${ownVariant}" aria-label="${i} Sterne">★</button>`;
  return html + '</div>';
}
function renderRatings(variant, view) {
  const host = document.getElementById('ratings-'+variant);
  host.innerHTML = Object.entries(view.profiles).map(([id,p]) => `
    <div class="person-rating"><b>${esc(p.name)}</b>${id === view.currentProfile ? stars(view.ratings[id] || 0, variant) : `<span>${'★'.repeat(view.ratings[id]||0)}${'☆'.repeat(5-(view.ratings[id]||0))}</span>`}</div>
  `).join('');
}
function dateText(iso) {
  try { return new Intl.DateTimeFormat('de-DE', {dateStyle:'short', timeStyle:'short'}).format(new Date(iso)); } catch { return ''; }
}
function renderComments(variant, view) {
  const host = document.getElementById('comments-'+variant);
  const roots = view.comments.filter(c => !c.parentId);
  if (!roots.length) { host.innerHTML = '<div class="rating-help">Noch keine Kommentare.</div>'; return; }
  host.innerHTML = roots.map(root => {
    const replies = view.comments.filter(c => c.parentId === root.id);
    return commentHtml(root, view, false) + replies.map(r => commentHtml(r, view, true)).join('');
  }).join('');
}
function commentHtml(c, view, reply) {
  const deleted = !!c.deleted;
  const name = deleted ? 'Gelöschter Kommentar' : (view.profiles[c.profile]?.name || 'Unbekannt');
  const canDelete = !deleted && c.profile === view.currentProfile;
  const replyAction = !reply && !deleted ? `<button type="button" data-reply="${esc(c.id)}">Antworten</button>` : '';
  const deleteAction = canDelete ? `<button type="button" data-delete="${esc(c.id)}">Löschen</button>` : '';
  const replyForm = !reply && !deleted ? `<form class="reply-form" data-parent="${esc(c.id)}" data-variant="${esc(view.variant)}"><input maxlength="1000" placeholder="Antwort schreiben …" required><button>Antworten</button></form>` : '';
  return `<div class="comment ${reply ? 'reply' : ''}">
    <div class="comment-head"><strong>${esc(name)}</strong><span>${esc(dateText(c.createdAt))}</span></div>
    <p>${deleted ? 'Kommentar wurde gelöscht.' : esc(c.text)}</p>
    <div class="comment-actions">${replyAction}${deleteAction}</div>${replyForm}
  </div>`;
}
function render() {
  variants.forEach(v => {
    const view = state.variants[v];
    view.variant = v;
    renderRatings(v, view);
    renderComments(v, view);
    document.getElementById('avg-'+v).textContent = view.average === null ? '–' : `${view.average.toFixed(1)} / 5 (${view.ratingCount})`;
  });
  const ranked = variants.map(v => ({v,avg:state.variants[v].average})).filter(x => x.avg !== null).sort((x,y)=>y.avg-x.avg);
  if (ranked.length < 2) document.getElementById('leader').textContent = 'noch offen';
  else if (ranked[0].avg === ranked[1].avg) document.getElementById('leader').textContent = 'Gleichstand';
  else document.getElementById('leader').textContent = variantNames[ranked[0].v];
}
async function refresh() { state = await api(); render(); }

document.addEventListener('click', async e => {
  const rate = e.target.closest('[data-rate]');
  if (rate) {
    const v = rate.dataset.variant, status = document.getElementById('status-'+v);
    try { status.textContent='Speichere …'; state = await api('POST', {action:'rating',variant:v,rating:Number(rate.dataset.rate)}); render(); status.textContent='Bewertung gespeichert.'; }
    catch(err) { status.textContent=err.message; }
    return;
  }
  const reply = e.target.closest('[data-reply]');
  if (reply) {
    const form = document.querySelector(`.reply-form[data-parent="${CSS.escape(reply.dataset.reply)}"]`);
    if (form) { form.classList.toggle('open'); if (form.classList.contains('open')) form.querySelector('input').focus(); }
    return;
  }
  const del = e.target.closest('[data-delete]');
  if (del) {
    if (!confirm('Eigenen Kommentar wirklich löschen?')) return;
    const v = del.closest('.vote-card').dataset.variant, status = document.getElementById('status-'+v);
    try { state = await api('POST', {action:'delete-comment',variant:v,commentId:del.dataset.delete}); render(); status.textContent='Kommentar gelöscht.'; }
    catch(err) { status.textContent=err.message; }
  }
});

document.addEventListener('submit', async e => {
  if (e.target.matches('.comment-form')) {
    e.preventDefault();
    const v=e.target.dataset.variant, input=e.target.querySelector('input'), status=document.getElementById('status-'+v);
    try { status.textContent='Speichere …'; state=await api('POST',{action:'comment',variant:v,text:input.value}); input.value=''; render(); status.textContent='Kommentar gespeichert.'; }
    catch(err) { status.textContent=err.message; }
  }
  if (e.target.matches('.reply-form')) {
    e.preventDefault();
    const v=e.target.dataset.variant, input=e.target.querySelector('input'), status=document.getElementById('status-'+v);
    try { state=await api('POST',{action:'comment',variant:v,text:input.value,parentId:e.target.dataset.parent}); render(); status.textContent='Antwort gespeichert.'; }
    catch(err) { status.textContent=err.message; }
  }
});

refresh().catch(err => variants.forEach(v => document.getElementById('status-'+v).textContent = 'Abstimmung konnte nicht geladen werden: '+err.message));
</script>
</body></html>
