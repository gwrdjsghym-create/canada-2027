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

$needle = '<section class="section ideas" id="ideas">';
if (str_contains($html, $needle)) {
    $html = str_replace($needle, $transferSection . "\n" . $needle, $html);
}
echo $html;
