<?php
declare(strict_types=1);
$destination = 'orford';
ob_start();
require __DIR__ . '/destination-template.php';
$html = (string) ob_get_clean();

$transferSection = <<<'HTML'
<section class="section" aria-labelledby="orford-transfer-title">
  <div class="section-head">
    <div><p class="eyebrow">Transfer · Mittwoch, 29. September</p><h2 id="orford-transfer-title">Direkt, Genussstopp oder Garten?</h2></div>
    <span class="local-note">Gemeinsame Entscheidung</span>
  </div>
  <p style="max-width:800px;color:var(--muted);margin:-8px 0 20px">Der Wechsel von Québec City nach Orford bekommt drei realistische Varianten: A als entspannte Fahrt mit Poutine-Pause, B mit der Fromagerie du Presbytère als unsere Empfehlung und C mit dem Parc Marie-Victorin als bewusst erlebnisreiche Option. Alle drei enthalten Route, Zeiten, Aufwand, Quellen sowie gemeinsame Sterne- und Kommentar-Abstimmung.</p>
  <a class="new-idea-button" href="05-transfer-29-09.php" style="display:inline-flex"><span>↗</span> Transfervarianten vergleichen &amp; abstimmen</a>
</section>
HTML;

$activitiesSection = <<<'HTML'
<section class="section" aria-labelledby="orford-activities-title">
  <div class="section-head">
    <div><p class="eyebrow">30. September &amp; 1. Oktober</p><h2 id="orford-activities-title">Zwei Tage – zuerst die Bausteine wählen</h2></div>
    <span class="local-note">Gemeinsame Auswahl</span>
  </div>
  <p style="max-width:820px;color:var(--muted);margin:-8px 0 20px">Noch kein fertiger Tagesplan: Vergleicht großer Wandertag, leichter Indian-Summer-Parktag, Magog &amp; Marais, Saint-Benoît-du-Lac, Lac-Kreuzfahrt und Spa. Jeder bewertet zuerst nur das Interesse; aus den Favoriten bauen wir danach drei konkrete Zweitages-Varianten – entspannt, ausgewogen und erlebnisreich.</p>
  <a class="new-idea-button" href="05-aktivitaeten.php" style="display:inline-flex"><span>↗</span> Aktivitäten vergleichen &amp; abstimmen</a>
</section>
HTML;

$needle = '<section class="section ideas" id="ideas">';
if (str_contains($html, $needle)) {
    $html = str_replace($needle, $transferSection . "\n" . $activitiesSection . "\n" . $needle, $html);
}
echo $html;
