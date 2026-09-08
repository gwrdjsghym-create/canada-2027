const destinations = [
  { id: "all", label: "Gesamte Reise", sectionTitle: "Canada 2027", page: "index.php" },
  { id: "montreal", label: "Montréal", dates: "17.–20.09.", sectionTitle: "01 – Montréal | 17.–20.09.2027", page: "01-montreal.php", summary: "Anreise aus Wuppertal und zwei volle Tage in Montréal." },
  { id: "mauricie", label: "Nature Nature", dates: "20.–23.09.", sectionTitle: "02 – The Laurentians | 20.–23.09.2027", page: "02-the-laurentians.php", summary: "Anreise aus Montréal und zwei Naturtage rund um den Nationalpark La Mauricie." },
  { id: "sainte-rose", label: "Sainte-Rose-du-Nord", dates: "23.–27.09.", sectionTitle: "03 – Sainte-Rose-du-Nord | 23.–27.09.2027", page: "03-sainte-rose-du-nord.php", summary: "Anreise von Nature Nature und drei volle Tage am Saguenay." },
  { id: "quebec", label: "Québec City", dates: "27.–29.09.", sectionTitle: "04 – Québec City | 27.–29.09.2027", page: "04-quebec-city.php", summary: "Anreise über Tadoussac mit der gebuchten Walbeobachtung und ein voller Tag in Québec City." },
  { id: "orford", label: "Orford", dates: "29.09.–02.10.", sectionTitle: "05 – Orford | 29.09.–02.10.2027", page: "05-orford.php", summary: "Anreise aus Québec City, zwei volle Tage und anschließend die Heimreise." }
];

const route = [
  {
    id: "outbound", type: "transfer", destination: "montreal", date: "Freitag · 17. September", title: "Wuppertal → Frankfurt → Montréal",
    text: "Anreise, Flug und Transfer zum Uville Hotel. Flug und Zubringer sind noch nicht gebucht.", tags: ["noch offen", "ca. 20 km Transfer"],
    details: ["Anreise zum Flughafen Frankfurt festlegen", "Flug Frankfurt–Montréal buchen", "Einreise und Gepäck einplanen", "Transfer YUL–Uville Hotel: laut Reiseplanung ca. 20 km / 22 Min."]
  },
  {
    id: "montreal", type: "stay", destination: "montreal", date: "17.–20. September · 3 Nächte", title: "Montréal",
    text: "Ankunftstag sowie zwei volle Tage vor Ort. Unterkunft: Uville Hotel.", tags: ["2 volle Tage", "Uville Hotel"],
    details: ["Freitag: Ankunft und ruhiger Einstieg", "Samstag: voller Tag vor Ort", "Sonntag: voller Tag vor Ort", "Montag: Check-out und Mietwagenübernahme"]
  },
  {
    id: "to-mauricie", type: "transfer", destination: "mauricie", date: "Montag · 20. September", title: "Montréal → Nature Nature",
    text: "Drei Varianten machen den ersten Mietwagentag zum Erlebnis – vom direkten Plan B bis zum Stadtstopp in Trois-Rivières.", tags: ["3 Varianten", "Einkauf eingeplant", "Abstimmung offen"],
    details: ["A: direkt mit Großeinkauf und frühem Hüttenabend", "B: Bäckerei und Moulin seigneurial de Pointe-du-Lac – vorläufiger Favorit", "C: historisches Trois-Rivières mit Einkehr", "<a href=\"02-transfer-20-09.php\" class=\"primary-button inline-button\">Varianten vergleichen &amp; abstimmen →</a>"]
  },
  {
    id: "mauricie", type: "stay", destination: "mauricie", date: "20.–23. September · 3 Nächte", title: "Nature Nature · Mauricie",
    text: "Basis für zwei Naturtage im Nationalpark La Mauricie – mit einer größeren Wanderung am Dienstag und einem flexiblen Mittwoch.", tags: ["2 volle Tage", "Selbstversorger"],
    details: ["Unterkunft: Nature Nature", "Koordinaten: 46.7256101, -72.7707375", "Dienstag: Lac-Solitaire oder Ruisseau-Bouchard", "Mittwoch: kurze Wanderungen, Kanu-Einstieg oder besondere Wunschoption Waber Falls", "Donnerstag: längerer Wechsel nach Sainte-Rose-du-Nord"]
  },
  {
    id: "mauricie-tuesday", type: "stay", destination: "mauricie", level: "day", date: "Dienstag · 21. September", title: "Großer Wandertag",
    text: "Je nach Wetter und Tagesform: Lac-Solitaire als kompakte Runde oder Ruisseau-Bouchard mit mehr Strecke und Höhenmetern.", tags: ["6,1 oder 9,1 km", "396 oder 528 Hm", "2,5–3,5 Std."],
    details: ["Lac-Solitaire: 6,1 km Rundweg · 396 Hm · ca. 2,5 Std. · mittelschwer", "Ruisseau-Bouchard: 9,1 km Rundweg · 528 Hm · ca. 3,5 Std. · mittelschwer", "Beide starten am Rivière à la Pêche Service Centre", "<a href=\"https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails\" target=\"_blank\" rel=\"noopener\">Offizielle Wegbeschreibung von Parks Canada ↗</a>"]
  },
  {
    id: "mauricie-wednesday", type: "stay", destination: "mauricie", level: "day", date: "Mittwoch · 22. September", title: "Wasserfälle, Aussicht & Kanu",
    text: "Flexibler Tag: Les Cascades und Les Falaises kombinieren oder erstmals in ruhigem Rahmen Kanu fahren. Waber Falls nur als anspruchsvolle Wunschoption.", tags: ["2,4 + 4,0 km", "103 + 268 Hm", "Kanu 60–90 Min."],
    details: ["Les Cascades: 2,4 km · 103 Hm · ca. 1 Std. · leicht", "Les Falaises: 4,0 km · 268 Hm · ca. 1,5 Std. · mittelschwer", "Kanu: möglichst geführte Einführung; alternativ kurze Ufertour mit zwei Zweierkanus oder Doppelkajaks", "Waber Falls: 9,2 km paddeln + 7,2 km wandern · 349 Hm · 6–8 Std. · noch nicht eingeplant", "Sicherheit: Waber Falls nur mit Guide oder nach vorheriger Einführung, bei stabilem Wetter und ausdrücklicher Empfehlung vor Ort."]
  },
  {
    id: "to-sainte-rose", type: "transfer", destination: "sainte-rose", date: "Donnerstag · 23. September", title: "Nature Nature → Sainte-Rose-du-Nord",
    text: "Längster reiner Fahrtag der Rundreise. Stopps, Pausen und Verpflegung werden separat geplant.", tags: ["ca. 389 km", "ca. 4 Std. 47 Min."],
    details: ["Check-out bei Nature Nature", "Route und sinnvolle Pausen noch ausarbeiten", "Ankunft bei Exode en Nature", "Verpflegung und Einkauf für den Aufenthalt prüfen"]
  },
  {
    id: "sainte-rose", type: "stay", destination: "sainte-rose", date: "23.–27. September · 4 Nächte", title: "Sainte-Rose-du-Nord",
    text: "Ankunftstag und drei volle Tage am Saguenay. Unterkunft: Exode en Nature.", tags: ["3 volle Tage", "Exode en Nature"],
    details: ["Freitag, Samstag und Sonntag vollständig vor Ort", "Montag: frühe Weiterfahrt zur gebuchten Walbeobachtung", "Ausflüge und Schlechtwetteroptionen folgen"]
  },
  {
    id: "whales", type: "transfer", destination: "quebec", date: "Montag · 27. September", title: "Sainte-Rose → Tadoussac → Québec City",
    text: "Der einzige bereits fest gebuchte Aktivitätstag: Walbeobachtung per Schiff in Tadoussac.", tags: ["Walbeobachtung gebucht", "ca. 93 km + 215 km"], confirmed: true,
    details: ["Check-out bei Exode en Nature", "Fahrt nach Tadoussac: ca. 93 km", "Walbeobachtung per Schiff – fest gebucht", "Weiterfahrt nach Québec City: ca. 215 km", "Check-in im Hotel Port-Royal", "Abfahrtszeit und Anbieter später ergänzen"]
  },
  {
    id: "quebec", type: "stay", destination: "quebec", date: "27.–29. September · 2 Nächte", title: "Québec City",
    text: "Ankunft nach der Walbeobachtung und ein voller Tag in Québec City. Unterkunft: Hotel Port-Royal.", tags: ["1 voller Tag", "Hotel Port-Royal"],
    details: ["Montag: voraussichtlich spätere Ankunft", "Dienstag: voller Tag für Québec City", "Mittwoch: Weiterfahrt nach Orford"]
  },
  {
    id: "to-orford", type: "transfer", destination: "orford", date: "Mittwoch · 29. September", title: "Québec City → Orford",
    text: "Fahrt vom Hotel Port-Royal zum letzten Aufenthalt der Rundreise.", tags: ["ca. 259 km", "ca. 2 Std. 59 Min."],
    details: ["Check-out im Hotel Port-Royal", "Route, Pausen und mögliche Stopps noch planen", "Check-in im Espace 4 Saisons"]
  },
  {
    id: "orford", type: "stay", destination: "orford", date: "29. September–2. Oktober · 3 Nächte", title: "Orford",
    text: "Ankunftstag und zwei volle Tage. Unterkunft: Espace 4 Saisons.", tags: ["2 volle Tage", "Espace 4 Saisons"],
    details: ["Donnerstag und Freitag vollständig vor Ort", "Samstag: Rückreise und Mietwagenrückgabe", "Aktivitäten folgen"]
  },
  {
    id: "return", type: "transfer", destination: "orford", date: "Samstag · 2. Oktober", title: "Orford → Montréal → Frankfurt → Wuppertal",
    text: "Mietwagenrückgabe, Rückflug und Heimreise. Die Zeiten sind noch offen.", tags: ["ca. 133 km bis Montréal", "Flug offen"],
    details: ["Fahrt zum Flughafen Montréal", "Ford Expedition zurückgeben", "Rückflug nach Frankfurt buchen", "Weiterreise nach Wuppertal festlegen"]
  }
];

const ideas = [
  { id: "whale-tour", destination: "quebec", type: "booked", icon: "🐋", place: "Tadoussac · 27. September", title: "Walbeobachtung per Schiff", text: "Fester Bestandteil des Wechsels nach Québec City. Anbieter und genaue Abfahrtszeit werden ergänzt." },
  {
    id: "montreal-old-city", destination: "montreal", type: "idea", icon: "🏛️", place: "Cluster A · direkt am Hotel", title: "Vieux-Montréal & Alter Hafen",
    text: "Kopfsteinpflaster, Rue Saint-Paul, Place d’Armes, Place Jacques-Cartier und die Uferpromenade – der klassische Einstieg beginnt praktisch vor der Hoteltür.",
    facts: ["1 Block", "leicht–mittel", "vieles zu Fuß"],
    links: [{ label: "Tourisme Montréal", url: "https://www.mtl.org/en/city/about-montreal/neighbourhoods/old-montreal" }, { label: "Old Port offiziell", url: "https://www.oldportofmontreal.com/" }, { label: "Video · Old Port", url: "https://www.youtube.com/watch?v=8-KWazizDXM" }, { label: "Geführt · GetYourGuide", url: "https://www.getyourguide.com/montreal-l195/montreal-the-original-old-montreal-walking-tour-t6615/" }]
  },
  {
    id: "montreal-basilica", destination: "montreal", type: "idea", icon: "⛪", place: "Cluster A · gut kombinierbar", title: "Notre-Dame & Pointe-à-Callière",
    text: "Basilika und Montréal-Geschichte als Vertiefung der Altstadt. Beides lässt sich einzeln wählen oder zu einem historischen Schwerpunkt verbinden.",
    facts: ["½–1 Block", "indoor", "nahe Uville"],
    links: [{ label: "Notre-Dame-Basilika", url: "https://www.basiliquenotredame.ca/en" }, { label: "Pointe-à-Callière", url: "https://pacmusee.qc.ca/en/" }, { label: "Tourisme Montréal", url: "https://www.mtl.org/en/city/about-montreal/neighbourhoods/old-montreal" }]
  },
  {
    id: "montreal-mountain", destination: "montreal", type: "idea", icon: "🌄", place: "Cluster B · Aussicht & Viertel", title: "Mont Royal & Plateau",
    text: "Der Kondiaronk-Aussichtspunkt liefert das große Stadtpanorama. Danach zeigen Plateau und Boulevard Saint-Laurent das typische Montréal mit Treppenhäusern, Murals und Cafés.",
    facts: ["1–2 Blöcke", "mittel", "wetterabhängig"],
    links: [{ label: "Mont Royal", url: "https://www.mtl.org/en/what-to-do/activities/mount-royal-park" }, { label: "Plateau & Mile End", url: "https://www.mtl.org/en/city/about-montreal/neighbourhoods/plateau-and-mile-end" }, { label: "Video · Plateau & Mile End", url: "https://www.youtube.com/watch?v=1cKSOxaq1NA" }]
  },
  {
    id: "montreal-mile-end-food", destination: "montreal", type: "idea", icon: "🥯", place: "Cluster C · geführt oder individuell", title: "Mile End Food Tour",
    text: "Bagels, Poutine und weitere Kostproben verbinden das Viertel mit einem Mittagessen. Eine geführte Tour erklärt die kulinarischen und kulturellen Hintergründe.",
    facts: ["1 Block", "ca. 3 Std.", "ersetzt Mittagessen"],
    links: [{ label: "Mile End entdecken", url: "https://www.mtl.org/en/experience/mile-end" }, { label: "Touren bei GetYourGuide", url: "https://www.getyourguide.com/montreal-l195/" }, { label: "Video · Mile End", url: "https://www.youtube.com/watch?v=YoUNstkZovg" }]
  },
  {
    id: "montreal-jean-talon", destination: "montreal", type: "idea", icon: "🍎", place: "Cluster C · Markt & Little Italy", title: "Jean-Talon Market",
    text: "Einer der großen offenen Märkte Nordamerikas mit Produkten aus Québec und internationaler Küche. Little Italy liegt direkt darum herum.",
    facts: ["1 Block", "leicht", "teilweise überdacht"],
    links: [{ label: "Markt offiziell", url: "https://www.marchespublics-mtl.com/en/markets/jean-talon-market" }, { label: "Tourisme Montréal", url: "https://www.mtl.org/en/what-to-do/shopping/jean-talon-market-mtl" }, { label: "Geführte Touren", url: "https://www.getyourguide.com/jean-talon-market-l105091/" }, { label: "Video · Markt", url: "https://www.youtube.com/watch?v=69-9SvOtxTY" }]
  },
  {
    id: "montreal-bike", destination: "montreal", type: "idea", icon: "🚲", place: "Geführte Alternative · mehrere Cluster", title: "Plateau, Mile End & Markt per Rad",
    text: "Eine geführte Fahrrad- oder E-Bike-Tour verbindet in rund drei Stunden mehrere Viertel, Parks, Murals und den Jean-Talon Market. Zeitlich besonders effizient.",
    facts: ["1 Block", "ca. 3 Std.", "geführt"],
    links: [{ label: "Tour · GetYourGuide", url: "https://www.getyourguide.com/montreal-l195/bikee-bike-tour-plateaumileend-jean-talon-market-by-fitz-t102548/" }, { label: "Montréal On Wheels", url: "https://www.mtl.org/en/what-to-do/tours/montreal-on-wheels" }, { label: "Video · Fahrradtour", url: "https://www.youtube.com/watch?v=Z40_9B_xDt0" }]
  },
  {
    id: "montreal-downtown", destination: "montreal", type: "idea", icon: "🏙️", place: "Cluster D · Stadt & Schlechtwetter", title: "Downtown & Golden Square Mile",
    text: "McGill, elegante Architektur, Museen und das unterirdische RÉSO. Interessant, aber für einen ersten Besuch eher Ergänzung als unverzichtbares Hauptziel.",
    facts: ["1 Block", "leicht", "regenfest kombinierbar"],
    links: [{ label: "Golden Square Mile", url: "https://www.mtl.org/en/experience/golden-square-mile" }, { label: "Unterwegs in Montréal", url: "https://www.mtl.org/en/what-to-do/getting-around" }]
  },
  {
    id: "montreal-olympic", destination: "montreal", type: "idea", icon: "🌿", place: "Cluster E · eigener Schwerpunkt", title: "Olympiapark & Espace pour la vie",
    text: "Biodôme, Botanischer Garten und Olympiapark können einen halben bis ganzen Tag füllen. Nur sinnvoll, wenn dafür deutliches gemeinsames Interesse besteht.",
    facts: ["1–2 Blöcke", "leicht", "teilweise indoor"],
    links: [{ label: "Espace pour la vie", url: "https://espacepourlavie.ca/en" }, { label: "Olympiapark", url: "https://parcolympique.qc.ca/en/" }]
  },
  {
    id: "montreal-canal", destination: "montreal", type: "idea", icon: "🌊", place: "Cluster F · entspannte Alternative", title: "Lachine Canal & Atwater Market",
    text: "Wasser, Markt und ehemalige Industriearchitektur ergeben ein ruhigeres Montréal-Erlebnis – zu Fuß, per Rad oder mit einer längeren Pause am Kanal.",
    facts: ["1 Block", "leicht–mittel", "wetterabhängig"],
    links: [{ label: "Lachine Canal · Parks Canada", url: "https://parks.canada.ca/lhn-nhs/qc/canallachine" }, { label: "Atwater Market", url: "https://www.marchespublics-mtl.com/en/markets/atwater-market" }]
  },
  {
    id: "montreal-guided-old", destination: "montreal", type: "idea", icon: "🎙️", place: "Geführte Alternative · Altstadt", title: "Old Montréal Walking Tour",
    text: "Eine kompakte Führung liefert Geschichte, Architektur und Geschichten hinter den Fassaden. Danach bleiben Basilika, Museum oder Hafen individuell möglich.",
    facts: ["½ Block", "ca. 2 Std.", "kleine Gruppe möglich"],
    links: [{ label: "GetYourGuide · Original Tour", url: "https://www.getyourguide.com/montreal-l195/montreal-the-original-old-montreal-walking-tour-t6615/" }, { label: "Kleine Gruppe", url: "https://www.getyourguide.com/montreal-l195/explore-old-montreal-extra-small-group-walking-tour-t444539/" }]
  },
  {
    id: "montreal-evening", destination: "montreal", type: "idea", icon: "🌙", place: "Samstag oder Sonntag · Abend", title: "Geführter oder besonderer Abend",
    text: "Vier unterschiedliche Abendideen stehen zur Wahl: AURA, Twilight Walk, Night Tour oder Ghost Walk. Zuerst entscheiden wir, ob wir überhaupt einen besonderen Abend möchten – danach wählen wir unseren Favoriten.",
    facts: ["4 Varianten", "1–4 Std.", "Termine 2027 prüfen"],
    links: [{ label: "AURA", url: "https://www.aurabasiliquemontreal.com/en/" }, { label: "Twilight Walk", url: "https://www.getyourguide.com/montreal-l195/montreal-old-montreal-at-twilight-walking-tour-t763147/" }, { label: "Night Tour", url: "https://www.getyourguide.com/montreal-l195/montreal-small-group-night-sightseeing-tour-t152023/" }, { label: "Ghost Walk", url: "https://www.getyourguide.com/montreal-l195/traditional-ghost-walk-montreal-ghosts-t25171/" }]
  },
  {
    id: "montreal-dinner", destination: "montreal", type: "idea", icon: "🍽️", place: "Drei Abende · eigener Entscheid", title: "Welcher Dinner-Stil passt zu uns?",
    text: "Drei Abende, aber nicht dreimal dasselbe: Zuerst bewerten wir, wie wichtig uns mindestens ein bewusst geplantes besonderes Abendessen ist. Danach wählt jeder den Restaurantstil, den er in Montréal am liebsten erleben möchte. Aus den vier Stimmen stellen wir später eine passende Mischung für die drei Abende zusammen.",
    facts: ["3 Abendessen", "5 verständlich erklärte Stile", "1 persönlicher Favorit"],
    links: [{ label: "Monarque · Fine Dining", url: "https://restaurantmonarque.ca/en/" }, { label: "Gibbys · Steak & Seafood", url: "https://www.gibbys.com/en/" }, { label: "Québec-Küche erklärt", url: "https://www.mtl.org/en/experience/traditional-quebecois-cuisine" }, { label: "Montréal-Klassiker erklärt", url: "https://www.mtl.org/en/experience/musts-for-foodies-visiting-montreal" }, { label: "Restaurantübersicht · Tourisme Montréal", url: "https://www.mtl.org/en/what-to-do/food" }]
  },
  {
    id: "lac-solitaire", destination: "mauricie", type: "idea", icon: "🥾", place: "The Laurentians · Dienstag", title: "Lac-Solitaire",
    text: "Kompakter, aber höhenreicher Rundweg durch regenerierenden Wald und um den See – unsere bevorzugte kürzere Variante.",
    facts: ["6,1 km", "396 Hm", "ca. 2,5 Std.", "mittelschwer"],
    links: [{ label: "Parks Canada", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }, { label: "Touren-PDF", url: "file.php?name=01_Lac-Solitaire.pdf", pdf: true }]
  },
  {
    id: "ruisseau-bouchard", destination: "mauricie", type: "idea", icon: "⛰️", place: "The Laurentians · Dienstag", title: "Ruisseau-Bouchard",
    text: "Die längere Alternative mit Aussicht am Lac aux Chevaux und einem schönen Rückweg entlang des Bouchard Creek.",
    facts: ["9,1 km", "528 Hm", "ca. 3,5 Std.", "mittelschwer"],
    links: [{ label: "Parks Canada", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }, { label: "Touren-PDF", url: "file.php?name=02_Ruisseau-Bouchard.pdf", pdf: true }]
  },
  {
    id: "cascades-falaises", destination: "mauricie", type: "idea", icon: "💦", place: "The Laurentians · Mittwoch", title: "Les Cascades & Les Falaises",
    text: "Zwei kurze Wege, die sich flexibel verbinden lassen: Wasserfälle und schwimmende Brücke sowie Aussicht über den Lac Wapizagonke.",
    facts: ["2,4 km · 103 Hm", "4,0 km · 268 Hm", "ca. 2,5 Std. gesamt"],
    links: [{ label: "Wege", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }, { label: "Karte & Höhenprofil", url: "https://publications.gc.ca/collections/collection_2018/pc/R64-517-2017.pdf" }, { label: "Touren-PDF", url: "file.php?name=03_Cascades-und-Falaises.pdf", pdf: true }]
  },
  {
    id: "canoe-intro", destination: "mauricie", type: "idea", icon: "🛶", place: "The Laurentians · Mittwoch", title: "Kanu-Einführung",
    text: "Da wir noch nie Kanu gefahren sind, bevorzugen wir eine geführte Einführung. Alternativ 60–90 Minuten in Ufernähe mit zwei Zweierkanus oder Doppelkajaks.",
    facts: ["anfängergeeignet", "60–90 Min.", "Saison 2027 prüfen"],
    links: [{ label: "Paddeln & Verleih", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/nautique-nautical" }, { label: "Info-PDF", url: "file.php?name=04_Kanu-Einfuehrung.pdf", pdf: true }]
  },
  {
    id: "waber-falls", destination: "mauricie", type: "idea", icon: "🌊", place: "Besondere Wunschoption", title: "Waber Falls",
    text: "Eine komplette Tagesexpedition zu den 27 Meter hohen Wasserfällen – eindrucksvoll, aber noch nicht fest eingeplant.",
    facts: ["9,2 km paddeln", "7,2 km wandern", "349 Hm", "6–8 Std."],
    warning: "Die Waber-Tour ist keine Kanueinführung. Nur mit Guide oder nach vorheriger Einführung, bei stabiler Wetterlage und nach ausdrücklicher Empfehlung der Mitarbeiter vor Ort. Andernfalls bleibt es bei einer kurzen Kanutour in Ufernähe.",
    links: [{ label: "Parks Canada", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/nautique-nautical/waber" }, { label: "Höhenprofil & Wege", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }, { label: "Touren-PDF", url: "file.php?name=05_Chutes-Waber.pdf", pdf: true }]
  },
  {
    id: "shawinigan", destination: "mauricie", type: "idea", icon: "🏭", place: "Schlechtwetter-Option", title: "Shawinigan & Cité de l’énergie",
    text: "Eine flexible Kultur- und Technikoption für einen ruhigeren oder regnerischen Tag in der Region.",
    facts: ["Shawinigan", "Museum & Aussicht", "Öffnung 2027 prüfen"],
    links: [{ label: "Info-PDF", url: "file.php?name=06_Shawinigan-und-Cite-de-lEnergie.pdf", pdf: true }]
  },
  {
    id: "montagne-du-chapeau", destination: "sainte-rose", type: "idea", icon: "🥾", place: "Sainte-Rose-du-Nord · Freitag", title: "Wandertag: Waldtour oder Fjordrunde",
    text: "Für den 24. September wählen wir zwischen der langen Montagne du Chapeau und der kürzeren Rundtour Sentier de la Plate-forme mit drei Fjordblicken.",
    facts: ["12,3 oder 3,7 km", "lang oder kompakt", "2 Varianten", "gemeinsam abstimmen"],
    warning: "Vor der Tour Trailstatus und aktuelle Jagdhinweise prüfen; sichtbare Kleidung ist Ende September sinnvoll.",
    links: [{ label: "Tourenansicht · Rando Québec", url: "https://www.onyva.quebec/espace-decouverte/activites/randonnee-au-sentier-de-la-montagne-du-chapeau/" }, { label: "Offizielle Karte & GPS · Balise Québec", url: "https://baliseqc.ca/3S/explorer/saguenay-lac-saint-jean/sainte-rose-du-nord-LR0491" }, { label: "Anfahrt ab Exode", url: "https://www.google.com/maps/dir/?api=1&origin=1516%20Route%20de%20Tadoussac%2C%20Sainte-Rose-du-Nord%2C%20QC%20G0V%201T0%2C%20Canada&destination=48.3997%2C-70.4767&travelmode=driving" }, { label: "Touren-PDF · NEU", url: "file.php?name=03-01_Montagne-du-Chapeau_02-Standard_NEU.pdf", pdf: true }]
  },
  {
    id: "fjordtag-varianten", destination: "sainte-rose", type: "idea", icon: "🛶", place: "Sainte-Rose-du-Nord · Samstag", title: "Fjordtag – vier Varianten",
    text: "Je nach Wetter und Wind wählen wir zwischen Seekajak, La Majestueuse, Elektro-Side-by-Side und einem echten Regenprogramm.",
    facts: ["Kajak ca. 3 Std.", "Schiff ca. 4 Std.", "wetterflexibel"],
    links: [{ label: "Seekajak · Fotos & Anbieter", url: "https://aventurerosedesvents.com/index.php/todo/sortie-courte-en-kayak-de-mer/" }, { label: "La Majestueuse · Fotos & Fahrplan", url: "https://navettesdufjord.com/croisieres/croisiere-la-majestueuse-automne/" }, { label: "Elektro-Side-by-Side · Fotos & Anbieter", url: "https://www.nomadequad.com/service-page/d%C3%A9couvrez-le-fjord-du-saguenay-1" }, { label: "Varianten-PDF", url: "file.php?name=03-02_Fjordtag_25-09-2027_Varianten.pdf", pdf: true }]
  },
  {
    id: "pic-tete-de-chien", destination: "sainte-rose", type: "idea", icon: "⛰️", place: "Monts-Valin · Sonntag", title: "Pic-de-la-Tête-de-Chien",
    text: "Die zweite Hauptwanderung führt vom Besucherzentrum über den Lac des Pères zu weiten Aussichten im Parc national des Monts-Valin.",
    facts: ["8 km", "340 Hm", "3–4 Std.", "schwierig"],
    warning: "Bei tiefen Wolken, starkem Regen oder Wind nicht erzwingen; dann auf eine kürzere Fjordwanderung ausweichen.",
    links: [{ label: "Sépaq · Wegdaten", url: "https://www.sepaq.com/pq/mva/annexes/randonnee_pedestre.dot?language_id=1" }, { label: "Route, Fotos & Höhenprofil", url: "https://www.alltrails.com/fr/randonnee/canada/quebec/sentier-du-pic-de-la-tete-de-chien" }, { label: "Anfahrt ab Exode", url: "https://www.google.com/maps/dir/?api=1&origin=1516%20Route%20de%20Tadoussac%2C%20Sainte-Rose-du-Nord%2C%20QC%20G0V%201T0%2C%20Canada&destination=360%20Rang%20Saint-Louis%2C%20Saint-Fulgence%2C%20QC%20G0V%201S0%2C%20Canada&travelmode=driving" }, { label: "Touren-PDF · NEU", url: "file.php?name=03-03_Pic-de-la-Tete-de-Chien_02-Standard_NEU.pdf", pdf: true }]
  }
];

const ideaChoiceGroups = {
  "montagne-du-chapeau": {
    ratingTitle: "Möchten wir den Freitag als Wandertag nutzen?",
    ratingHint: "Bewertet zuerst die grundsätzliche Idee eines Wandertags. Welche der beiden Strecken ihr bevorzugt, wählt ihr anschließend getrennt.",
    title: "Welche Wanderung bevorzugst du für den 24. September?",
    hint: "Beide Varianten starten nahe Sainte-Rose-du-Nord. Die Auswahl kann später passend zu Wetter, Wegzustand und gemeinsamer Tagesform geändert werden.",
    options: [
      { id: "chapeau", label: "A · Montagne du Chapeau", text: "Langer, anspruchsvoller Waldtag zum Belvédère über der Rivière Sainte-Marguerite.", duration: "4–5 Std.", effort: "anspruchsvoll", weather: "nur bei stabilem Wetter", price: "kostenlos", example: "12,2–12,3 km · 459 Hm" },
      { id: "plateforme", label: "B · Sentier de la Plate-forme", text: "Kompakte Rundtour direkt am Dorf mit drei Aussichtspunkten über den Saguenay-Fjord.", duration: "ca. 1½–2 Std.", effort: "leicht bis mittel", weather: "flexibler und leichter abzukürzen", price: "kostenlos", example: "3,7 km · optional + 1,7 km Quaiweg" }
    ]
  },
  "montreal-evening": {
    ratingTitle: "Möchten wir so einen Abend?",
    ratingHint: "Bewertet hier nur die grundsätzliche Idee – noch nicht die einzelne Variante.",
    title: "Welche Abendidee bevorzugst du?",
    hint: "Wähle unabhängig von deiner Sternebewertung genau einen persönlichen Favoriten. Du kannst deine Auswahl später jederzeit ändern.",
    options: [
      { id: "aura", label: "AURA", text: "Immersive Licht- und Klangshow in der Notre-Dame-Basilika." },
      { id: "twilight", label: "Twilight Walk", text: "Geführter Rundgang durch die Altstadt in der Abendstimmung." },
      { id: "night-tour", label: "Night Tour", text: "Kleingruppen-Nachttour mit Aussicht von der Grande Roue." },
      { id: "ghost-walk", label: "Ghost Walk", text: "Unterhaltsame Geschichten und Legenden bei einem abendlichen Geisterrundgang." }
    ]
  },
  "montreal-dinner": {
    ratingTitle: "Wie wichtig ist uns ein besonderes Abendessen?",
    ratingHint: "Die Sterne sagen nur, ob mindestens einer der drei Abende bewusst als besonderes Essen geplant werden soll. Den bevorzugten Stil wählt ihr im zweiten Schritt.",
    title: "Welchen Dinner-Stil bevorzugst du?",
    hint: "Wähle deinen persönlichen Favoriten. Die Wahl legt nicht alle drei Abende fest: Aus euren Stimmen entsteht später eine abwechslungsreiche Mischung, passend zur jeweiligen Tagesroute.",
    options: [
      { id: "fine-dining", label: "Fine Dining", text: "Ein besonderer Genussabend mit kreativer Küche, sehr aufmerksamem Service und mehreren fein abgestimmten Gängen.", atmosphere: "ruhig, elegant, festlich", food: "Tasting-Menü oder moderne à-la-carte-Gerichte", price: "gehoben · $$$$", example: "Beispiel: Monarque" },
      { id: "quebec-cuisine", label: "Moderne Québec-Küche", text: "Regionale Zutaten aus Québec werden zeitgemäß gekocht – etwa Wild, Ente, Fisch, Käse, Pilze, Ahorn oder saisonales Gemüse.", atmosphere: "regional, kreativ, authentisch", food: "Québec-Produkte statt Folklore-Menü", price: "mittel bis gehoben · $$$", example: "Beispiel: moderne Terroir-Küche" },
      { id: "steak-seafood", label: "Steak & Seafood", text: "Ein klassischer nordamerikanischer Restaurantabend mit Steaks, Hummer, Fisch und kräftigen Beilagen – vertraut und feierlich.", atmosphere: "klassisch, gemütlich, großzügig", food: "Steak, Fisch, Meeresfrüchte", price: "gehoben · $$$–$$$$", example: "Beispiel: Gibbys" },
      { id: "brasserie", label: "Lebendige Brasserie", text: "Eine Brasserie ist ein ungezwungenes französisch geprägtes Restaurant: lebhaft, guter Service, breite Karte und längeres Sitzen ohne steife Fine-Dining-Atmosphäre.", atmosphere: "lebendig, französisch, gesellig", food: "Tatar, Austern, Ente, Steak frites, Fisch", price: "mittel bis gehoben · $$–$$$", example: "Beispiele: Holder oder L’Express" },
      { id: "montreal-classics", label: "Typisch Montréal & unkompliziert", text: "Keine einzelne Küche, sondern Montréals Mischung aus frankokanadischen, jüdischen und nordamerikanischen Einflüssen – bewusst locker statt festlich.", atmosphere: "casual, lokal, lebhaft", food: "Smoked Meat, Poutine, Bagels oder Deli-Klassiker", price: "günstig bis mittel · $–$$", example: "Beispiele: Schwartz’s oder Reuben’s" }
    ]
  },
  "fjordtag-varianten": {
    ratingTitle: "Möchten wir einen besonderen Fjord-Erlebnistag?",
    ratingHint: "Bewertet zuerst die grundsätzliche Idee. Die Sterne gelten für einen bewusst geplanten Fjordtag – unabhängig davon, welche Variante es am Ende wird.",
    title: "Welche Fjord-Variante bevorzugst du?",
    hint: "Wählt euren persönlichen Favoriten. Wetter, Wind und Verfügbarkeit entscheiden später, welche der vorbereiteten Varianten tatsächlich möglich ist.",
    options: [
      { id: "kayak", label: "A · Seekajak", text: "Drei Stunden direkt auf dem Saguenay-Fjord. Keine Vorerfahrung nötig; Tandemkajaks und Sicherheitsbriefing sind vorgesehen.", duration: "ca. 3 Std.", effort: "mittel · Oberkörper", weather: "nur bei ruhigem Wetter", price: "zuletzt 79 CAD p. P. + Steuer", example: "intimster Blick aus Wasserhöhe" },
      { id: "majestueuse", label: "B · La Majestueuse", text: "Entspannte vierstündige Schifffahrt mit großer Reichweite und Aufenthalt in L’Anse-Saint-Jean.", duration: "ca. 4 Std.", effort: "sehr leicht", weather: "auch bei mehr Wind interessant", price: "2026: 77 CAD p. P.", example: "Erholungsfavorit zwischen den Wanderungen" },
      { id: "side-by-side", label: "C · Elektro-Side-by-Side", text: "Geführte Fahrt mit elektrischem Polaris Ranger durch borealen Wald zu einem Aussichtspunkt über dem Fjord.", duration: "ca. 3 Std.", effort: "leicht", weather: "robuster bei Wind und Nässe", price: "ab 245 CAD · Bezugsgröße prüfen", example: "vollwertiger Wetter-Joker" },
      { id: "rain", label: "D · Echter Regenplan", text: "Musée de la Nature, Mittagessen im Dorf und kurze trockene Fenster am Quai oder auf dem Sentier de la Plate-forme.", duration: "flexibel", effort: "leicht", weather: "Dauerregen oder Sturm", price: "Museums- und Essenskosten", example: "ohne erzwungenen Outdoor-Tag" }
    ]
  }
};

const tabs = document.querySelector("#destination-tabs");
const routeList = document.querySelector("#route-list");
const ideaGrid = document.querySelector("#idea-grid");
const ideaTitle = document.querySelector("#ideas-title");
const dialog = document.querySelector("#details-dialog");
const dialogContent = document.querySelector("#dialog-content");
const activeDestination = document.body.dataset.destination || "all";
const activeData = destinations.find((item) => item.id === activeDestination) || destinations[0];
let currentUser = null;
let ideaSummaries = {};
let customIdeas = [];
const profileDirectory = {
  andrea: { name: "Andrea", avatar: "avatar-andrea" },
  lars: { name: "Lars", avatar: "avatar-lars" },
  christina: { name: "Christina", avatar: "avatar-christina" },
  manfred: { name: "Manfred", avatar: "avatar-manfred" }
};

async function loadCurrentUser() {
  if (currentUser) return currentUser;
  const response = await fetch("auth.php", { cache: "no-store" });
  if (response.status === 401) {
    window.location.href = `login.php?next=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    throw new Error("Anmeldung erforderlich");
  }
  if (!response.ok) throw new Error("Profil konnte nicht geladen werden");
  currentUser = await response.json();
  return currentUser;
}

function renderTabs() {
  if (!tabs) return;
  tabs.innerHTML = destinations.map((d) => `<a href="${d.page}" role="tab" aria-selected="${d.id === activeDestination}" class="${d.id === activeDestination ? "active" : ""}"><span>${d.label}</span>${d.dates ? `<small>${d.dates}</small>` : ""}</a>`).join("");
}

function renderRoute() {
  if (!routeList) return;
  const items = activeDestination === "all"
    ? route.filter((item) => item.level !== "day")
    : route.filter((item) => item.destination === activeDestination);
  routeList.innerHTML = items.map((item) => `
    <article class="route-card ${item.type}">
      <div class="date">${item.date}</div>
      <div>
        <h3>${item.title}</h3><p>${item.text}</p>
        <div class="meta">${item.tags.map((tag, index) => `<span class="chip ${item.confirmed && index === 0 ? "confirmed" : ""}">${tag}</span>`).join("")}</div>
      </div>
      <button class="open-details" data-details="${item.id}" aria-label="${activeDestination === "all" ? "Destination öffnen" : "Details öffnen"}: ${item.title}">→</button>
    </article>`).join("");
}

function renderIdeas(filter = "all") {
  if (!ideaGrid || !ideaTitle) return;
  const destinationIdeas = [...ideas, ...customIdeas].filter((idea) => idea.destination === activeDestination);
  const filtered = filter === "all" ? destinationIdeas : destinationIdeas.filter((idea) => idea.type === filter);
  ideaTitle.textContent = `Ideen für ${activeData.label}`;
  if (!filtered.length) {
    ideaGrid.innerHTML = `<div class="ideas-empty"><span>✦</span><div><strong>Noch keine ${filter === "booked" ? "Buchungen" : "Ideen"} für ${activeData.label}</strong><p>Neue Vorschläge aus dem zugehörigen Projektchat erscheinen später genau hier.</p></div></div>`;
    return;
  }
  ideaGrid.innerHTML = filtered.map((idea) => {
    if (idea.featured && idea.href) {
      return `<a class="transfer-decision-card" href="${idea.href}">
        <p class="eyebrow">${escapeHtml(idea.place)}</p>
        <h3>${escapeHtml(idea.title)}</h3>
        <span class="decision-badge">Gemeinsame Entscheidung</span>
        <p>${escapeHtml(idea.text)}</p>
        <span class="decision-cta"><b aria-hidden="true">↗</b> Transfervarianten vergleichen &amp; abstimmen</span>
      </a>`;
    }
    const facts = (idea.facts || []).slice(0, 2).map((fact) => `<span>${fact}</span>`).join("");
    const summary = ideaSummaries[idea.id] || {};
    const rating = summary.average ? `<span class="tile-rating"><b>★ ${String(summary.average).replace(".", ",")}</b><small>${summary.count} von 4</small></span>` : `<span class="tile-rating empty"><b>☆</b><small>Noch offen</small></span>`;
    const discussion = summary.comments ? `<span class="tile-comments">💬 ${summary.comments}</span>` : "";
    const author = idea.author && profileDirectory[idea.author] ? `<span class="tile-author"><i class="avatar ${profileDirectory[idea.author].avatar}"></i>Von ${escapeHtml(profileDirectory[idea.author].name)}</span>` : "";
    return `<article class="idea-tile ${idea.type}" data-idea="${idea.id}" tabindex="0" role="link" aria-label="${idea.title} öffnen">
      <div class="tile-top"><span class="idea-icon">${idea.icon}</span><span class="tile-more">Details →</span></div>
      <p class="idea-place">${idea.type === "booked" ? "Fest gebucht" : (idea.place || activeData.label)}</p><h3>${escapeHtml(idea.title)}</h3>${author}
      <div class="idea-facts">${facts}${idea.warning ? `<span class="warning-chip">Sicherheit</span>` : ""}</div>
      <div class="tile-community">${rating}${discussion}</div>
    </article>`;
  }).join("");
}

async function loadIdeaSummaries() {
  if (!ideaGrid) return;
  try {
    const response = await fetch("ideas.php?summary=1", { cache: "no-store" });
    if (!response.ok) return;
    const payload = await response.json();
    ideaSummaries = payload.ideas || {};
    customIdeas = Array.isArray(payload.customIdeas) ? payload.customIdeas : [];
    renderIdeas(document.querySelector(".filter.active")?.dataset.filter || "all");
  } catch {}
}

routeList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (!button) return;
  const item = route.find((entry) => entry.id === button.dataset.details);
  if (activeDestination === "all") {
    window.location.href = destinations.find((entry) => entry.id === item.destination).page;
    return;
  }
  dialogContent.innerHTML = `<p class="eyebrow">${item.date}</p><h2>${item.title}</h2><p>${item.text}</p><ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`;
  dialog.showModal();
});

document.querySelector(".close-dialog")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

document.querySelector(".filters")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]"); if (!button) return;
  document.querySelectorAll(".filter").forEach((el) => el.classList.toggle("active", el === button));
  renderIdeas(button.dataset.filter);
});

ideaGrid?.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-idea]");
  if (tile) window.location.href = `idea.php?id=${encodeURIComponent(tile.dataset.idea)}`;
});

ideaGrid?.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-idea]")) {
    event.preventDefault(); window.location.href = `idea.php?id=${encodeURIComponent(event.target.dataset.idea)}`;
  }
});

if (activeDestination !== "all") {
  document.title = `${activeData.sectionTitle} · Canada 2027`;
  const title = document.querySelector("#destination-title");
  const summary = document.querySelector("#destination-summary");
  if (title) title.textContent = activeData.sectionTitle;
  if (summary) summary.textContent = activeData.summary;
  const comparison = document.querySelector("#comparison-link");
  const comparisonPdfs = {
    "sainte-rose": { file: "03-00_Sainte-Rose-du-Nord_Uebersicht.pdf", label: "PDF · Übersicht Sainte-Rose-du-Nord ↗" }
  };
  if (comparison) {
    const pdf = comparisonPdfs[activeDestination];
    comparison.hidden = !pdf;
    if (pdf) {
      comparison.href = `file.php?name=${encodeURIComponent(pdf.file)}`;
      comparison.textContent = pdf.label;
    }
  }
}

function formatCommentDate(value) {
  try {
    return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
  } catch { return ""; }
}

function youtubeVideoId(links = []) {
  for (const link of links) {
    try {
      const url = new URL(link.url);
      if (url.hostname.includes("youtube.com") && url.searchParams.get("v")) return url.searchParams.get("v");
      if (url.hostname === "youtu.be") return url.pathname.slice(1);
    } catch {}
  }
  return "";
}

function renderStars(value, interactive, profileId) {
  return `<div class="stars" role="${interactive ? "radiogroup" : "img"}" aria-label="${value ? `${value} von 5 Sternen` : "Noch keine Bewertung"}">${[1,2,3,4,5].map((star) => interactive
    ? `<button type="button" data-rating="${star}" aria-label="${star} Stern${star === 1 ? "" : "e"}" aria-pressed="${value === star}" class="${star <= value ? "filled" : ""}">★</button>`
    : `<span class="${star <= value ? "filled" : ""}" aria-hidden="true">★</span>`).join("")}</div>`;
}

function renderIdeaChoiceGroup(ideaId, data, profiles) {
  const group = ideaChoiceGroups[ideaId];
  if (!group) return "";
  const choices = data.choices || {};
  const currentChoice = choices[data.currentProfile] || "";
  const optionLabels = Object.fromEntries(group.options.map((option) => [option.id, option.label]));
  const options = group.options.map((option) => {
    const voters = Object.entries(choices).filter(([, choice]) => choice === option.id).map(([profileId]) => profiles[profileId]).filter(Boolean);
    const voterText = voters.length ? voters.map((profile) => profile.name).join(", ") : "Noch keine Stimme";
    const details = [
      option.atmosphere ? `<span><b>Atmosphäre</b>${escapeHtml(option.atmosphere)}</span>` : "",
      option.food ? `<span><b>Typisch</b>${escapeHtml(option.food)}</span>` : "",
      option.duration ? `<span><b>Dauer</b>${escapeHtml(option.duration)}</span>` : "",
      option.effort ? `<span><b>Belastung</b>${escapeHtml(option.effort)}</span>` : "",
      option.weather ? `<span><b>Wetter</b>${escapeHtml(option.weather)}</span>` : "",
      option.price ? `<span><b>Preisniveau</b>${escapeHtml(option.price)}</span>` : "",
      option.example ? `<span><b>Orientierung</b>${escapeHtml(option.example)}</span>` : ""
    ].filter(Boolean).join("");
    return `<button type="button" class="choice-option ${currentChoice === option.id ? "selected" : ""}" data-choice="${option.id}" aria-pressed="${currentChoice === option.id}"><span class="choice-check">${currentChoice === option.id ? "✓" : ""}</span><strong>${escapeHtml(option.label)}</strong><small>${escapeHtml(option.text)}</small>${details ? `<span class="choice-option-meta">${details}</span>` : ""}<span class="choice-voters">${escapeHtml(voterText)}</span></button>`;
  }).join("");
  const roster = Object.entries(profiles).map(([profileId, profile]) => `<div class="choice-person ${profileId === data.currentProfile ? "current" : ""}"><i class="avatar ${profile.avatar}"></i><span><strong>${escapeHtml(profile.name)}${profileId === data.currentProfile ? " · du" : ""}</strong><small>${choices[profileId] ? escapeHtml(optionLabels[choices[profileId]] || choices[profileId]) : "noch offen"}</small></span></div>`).join("");
  return `<section class="choice-panel"><div class="choice-head"><p class="eyebrow">2 · Variantenentscheidung</p><h2>${escapeHtml(group.title)}</h2><p>${escapeHtml(group.hint)}</p></div><div class="choice-options" role="group" aria-label="${escapeHtml(group.title)}">${options}</div><div class="choice-roster" aria-label="Aktueller Stand">${roster}</div></section>`;
}

function renderIdeaCommunity(ideaId, data) {
  const profiles = data.profiles || {};
  const canDeleteIdea = data.idea?.author === data.currentProfile;
  const hasChoiceGroup = Boolean(ideaChoiceGroups[ideaId]);
  const ratingRows = Object.entries(profiles).map(([id, profile]) => {
    const rating = Number(data.ratings?.[id] || 0);
    const isCurrent = id === data.currentProfile;
    return `<div class="rating-row ${isCurrent ? "current" : ""}"><i class="avatar ${profile.avatar}"></i><div><strong>${escapeHtml(profile.name)}${isCurrent ? " · du" : ""}</strong>${renderStars(rating, isCurrent, id)}</div><span>${rating ? `${rating}/5` : "offen"}</span></div>`;
  }).join("");

  const allComments = Array.isArray(data.comments) ? data.comments : [];
  const roots = allComments.filter((comment) => !comment.parentId);
  const comments = roots.length ? roots.map((comment) => {
    const deleted = Boolean(comment.deleted);
    const author = deleted ? { name: "Gelöscht", avatar: "" } : (profiles[comment.profile] || { name: comment.profile, avatar: "" });
    const replies = allComments.filter((reply) => reply.parentId === comment.id).map((reply) => {
      const replyAuthor = profiles[reply.profile] || { name: reply.profile, avatar: "" };
      const canDeleteReply = reply.profile === data.currentProfile;
      return `<article class="comment reply"><i class="avatar ${replyAuthor.avatar}"></i><div><header><strong>${escapeHtml(replyAuthor.name)}</strong><span class="comment-meta"><time>${formatCommentDate(reply.createdAt)}</time>${canDeleteReply ? `<button class="delete-comment" type="button" data-delete-comment="${reply.id}">Löschen</button>` : ""}</span></header><p>${escapeHtml(reply.text)}</p></div></article>`;
    }).join("");
    const canDeleteRoot = !deleted && comment.profile === data.currentProfile;
    const rootMeta = `<span class="comment-meta"><time>${formatCommentDate(comment.createdAt)}</time>${canDeleteRoot ? `<button class="delete-comment" type="button" data-delete-comment="${comment.id}">Löschen</button>` : ""}</span>`;
    const rootBody = deleted
      ? `<p class="deleted-comment">Kommentar gelöscht</p>`
      : `<p>${escapeHtml(comment.text)}</p><details class="reply-box"><summary>Antworten</summary><form data-comment-form data-parent-id="${comment.id}"><textarea name="text" maxlength="1000" required placeholder="Antwort schreiben …"></textarea><button type="submit">Antwort senden</button></form></details>`;
    return `<article class="comment-thread"><div class="comment ${deleted ? "is-deleted" : ""}"><i class="avatar ${author.avatar}"></i><div><header><strong>${escapeHtml(author.name)}</strong>${rootMeta}</header>${rootBody}</div></div>${replies}</article>`;
  }).join("") : `<div class="comments-empty"><span>💬</span><p>Noch kein Kommentar. Startet eure Unterhaltung zu dieser Idee.</p></div>`;

  const choiceGroup = ideaChoiceGroups[ideaId];
  return `<section class="community-panel">
    <div class="community-head"><div><p class="eyebrow">${hasChoiceGroup ? "1 · Grundsatzentscheidung" : "Eure Einschätzung"}</p><h2>${hasChoiceGroup ? escapeHtml(choiceGroup.ratingTitle) : "Vier Stimmen, eine Entscheidung"}</h2>${hasChoiceGroup ? `<p class="decision-help">${escapeHtml(choiceGroup.ratingHint)}</p>` : ""}</div><div class="average-rating"><strong>${data.average ? `★ ${String(data.average).replace(".", ",")}` : "☆ –"}</strong><small>${data.ratingCount || 0} von 4 bewertet</small></div></div>
    <div class="rating-grid">${ratingRows}</div>
    ${renderIdeaChoiceGroup(ideaId, data, profiles)}
    <div class="discussion"><div class="discussion-head"><p class="eyebrow">Im Gespräch</p><h2>Kommentare</h2></div><form class="new-comment" data-comment-form><textarea name="text" maxlength="1000" required placeholder="Was denkst du über diese Idee?"></textarea><button type="submit">Als ${escapeHtml(profiles[data.currentProfile]?.name || "Profil")} kommentieren</button></form><div class="comments-list">${comments}</div></div>
    ${canDeleteIdea ? `<div class="idea-owner-actions"><button type="button" data-delete-idea>Eigene Idee löschen</button><small>Bewertungen, Kommentare und ein möglicher Anhang werden ebenfalls gelöscht.</small></div>` : ""}
  </section>`;
}

async function loadIdeaData(ideaId) {
  const response = await fetch(`ideas.php?idea=${encodeURIComponent(ideaId)}&t=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error("Beiträge konnten nicht geladen werden");
  return response.json();
}

async function saveIdeaAction(ideaId, body) {
  const user = await loadCurrentUser();
  const response = await fetch(`ideas.php?idea=${encodeURIComponent(ideaId)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRF-Token": user.csrf },
    body: JSON.stringify(body)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Speichern nicht möglich");
  return payload;
}

function renderMauricieEditorial(ideaId) {
  const plans = {
    "lac-solitaire": {
      kicker: "Dienstag · ausgewogene Wanderoption", title: "Kompakt, aussichtsreich und trotzdem ein echter Bergtag",
      intro: "Route #13 startet am Service Centre Rivière-à-la-Pêche. Die Runde führt durch regenerierenden Wald und bietet Blicke auf Lac Solitaire und Lac aux Chevaux. Trotz der kurzen Distanz sorgen viele An- und Abstiege für einen vollwertigen Wandertag.",
      pros: ["Kurze Anfahrt ab Nature Nature", "Passt gut in einen halben Tag", "Aussichten trotz kompakter Runde"],
      cons: ["396 Höhenmeter auf nur 6,1 Kilometern", "Wurzeln und Felsen", "Bei Nässe rutschig"],
      links: [["Route, Fotos & GPS", "https://www.wikiloc.com/hiking-trails/canada-n-p-la-mauricie-lac-solitaire-route-13-41081699", "Community-Aufzeichnung; verbindlich sind die aktuellen Parkdaten"], ["Parks Canada", "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails", "Aktuelle Daten zu Route #13"], ["Anfahrt", "https://www.google.com/maps/dir/?api=1&origin=46.7256101,-72.7707375&destination=Riviere-a-la-Peche+Service+Centre,+La+Mauricie+National+Park&travelmode=driving", "ca. 15–20 Minuten als Planungswert"]],
      addon: "Auf dem Rückweg passt L’Olivia für Gebäck oder Kaffee. Alternativ ist Saint-Jean-des-Piles ein kurzer Dorf- und Flussstopp ohne große Zusatzfahrt.", addonLink: ["L’Olivia öffnen", "https://www.loliviarestaurant.ca/"],
      checks: ["Öffnung, Wegzustand und Sperrungen", "Wetter und Niederschlag", "Parkplatz, Gebühr und Reservierung", "Offline-Karte, Wasser und Proviant"]
    },
    "ruisseau-bouchard": {
      kicker: "Dienstag · sportliche Wanderoption", title: "Mehr Bach, Fels und Aussicht – aber deutlich fordernder",
      intro: "Route #14 beginnt ebenfalls am Service Centre Rivière-à-la-Pêche. Sie führt über felsige Waldrücken, zu mehreren Aussichtspunkten und am Bouchard Creek entlang. Die 9,1 Kilometer unterschätzen die Belastung durch wiederholte Gegenanstiege.",
      pros: ["Landschaftlich vielseitiger", "Mehr Aussichtspunkte", "Bouchard Creek und kleine Kaskaden"],
      cons: ["528 Höhenmeter und Gegenanstiege", "Felsiger Untergrund", "Bei Nässe klar anspruchsvoller"],
      links: [["Route, Fotos & GPS", "https://www.wikiloc.com/hiking-trails/parc-national-de-la-mauricie-sentier-14-ruisseau-bouchard-113852713", "Community-Track; offiziell gelten 9,1 km und 528 Hm"], ["Foto-Tourbericht", "https://audeladupaysage.com/en/2024/07/06/ruisseau-bouchard-trail-en/", "Eindrücke vom Weg und Untergrund"], ["Anfahrt", "https://www.google.com/maps/dir/?api=1&origin=46.7256101,-72.7707375&destination=Riviere-a-la-Peche+Service+Centre,+La+Mauricie+National+Park&travelmode=driving", "ca. 15–20 Minuten als Planungswert"]],
      addon: "Nur wählen, wenn alle trittsicher und fit sind. Auf dem Rückweg bieten sich L’Olivia oder ein kurzer Halt in Saint-Jean-des-Piles an.", addonLink: ["Parks-Canada-Wegdaten", "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails"],
      checks: ["Aktuelle Markierung der Route #14", "Wegzustand und Sperrungen", "Wetter, Wasser und Proviant", "Offline-Karte und Parkzugang"]
    },
    "cascades-falaises": {
      kicker: "Mittwoch · flexibler Parktag", title: "Erst Wasser, dann Aussicht – und jederzeit kürzbar",
      intro: "Les Cascades und Les Falaises sind zwei getrennte Rundwege im westlichen Parkteil. Les Cascades bleibt nahe am Wasser; Les Falaises steigt zu Blicken über den Lac Wapizagonke an. So lässt sich der Tag bei Wetterwechsel oder müden Beinen gut dosieren.",
      pros: ["Kaskaden und Wasserpassagen", "Aussicht auf Lac Wapizagonke", "Zweiter Weg bleibt optional"],
      cons: ["Längere Anfahrt", "Zwei unterschiedliche Startbereiche", "Brücken- oder Wegsperrungen möglich"],
      links: [["Foto-Tourbericht", "https://audeladupaysage.com/en/2024/07/12/falaises-cascades-trails-en/", "Viele Eindrücke beider Wege"], ["Karte & aktuelle Wege", "https://parks.canada.ca/pn-np/qc/mauricie/visit/cartes-maps/rando-hiking", "Offizielle Parkinformationen"], ["Anfahrt", "https://www.google.com/maps/dir/?api=1&origin=46.7256101,-72.7707375&destination=Shewenegan+Picnic+Area,+La+Mauricie+National+Park&travelmode=driving", "ca. 60–80 Minuten als Planungswert"]],
      addon: "Plan: zuerst Les Cascades; Les Falaises nur ergänzen, wenn Zeit, Wetter und Beine passen. Picknick und Gebäck besser vorher mitnehmen.", addonLink: ["Videoeindruck öffnen", "https://www.youtube.com/watch?v=N5s8ygi9YUU"],
      checks: ["Zufahrt zum westlichen Parkteil", "Brücken- und Wegmeldungen", "Startpunkte beider Wege", "Picknick, Wasser und Offline-Karte"]
    },
    "canoe-intro": {
      kicker: "Mittwoch · Einsteigeroption", title: "Unser sicherer Einstieg ins kanadische Paddeln",
      intro: "Für vier Personen ohne Kanuerfahrung ist eine kurze geführte Einführung der richtige Anfang: Grundschläge, Ein- und Aussteigen, Verhalten bei Wind und eine ufernahe Runde in zwei Zweierkanus. See, Anbieter und Treffpunkt werden erst mit dem Programm 2027 festgelegt.",
      pros: ["Anleitung statt Versuch und Irrtum", "Kurze, kontrollierbare Runde", "Technik und Sicherheit auf ruhigem Wasser"],
      cons: ["Konkretes Angebot 2027 noch offen", "Wind- und temperaturabhängig", "Ende September kann das Wasser kalt sein"],
      links: [["Paddeln & Verleih", "https://parks.canada.ca/pn-np/qc/mauricie/activ/nautique-nautical", "Offizielle Übersicht von Parks Canada"], ["Parkkarten", "https://parks.canada.ca/pn-np/qc/mauricie/visit/cartes-maps", "Seen, Zugänge und Einrichtungen"], ["Videoeindrücke", "https://www.youtube.com/results?search_query=La+Mauricie+National+Park+canoe", "Kanu im Nationalpark ansehen"]],
      addon: "Bewusst keine erfundene Route: Die Strecke hängt von Guide, Wind und Treffpunkt ab. Im Ostsektor passt anschließend Saint-Jean-des-Piles, im Westsektor ein kurzer Aussichtsstopp.", addonLink: ["Allgemeine Anfahrt", "https://www.google.com/maps/dir/?api=1&origin=46.7256101,-72.7707375&destination=La+Mauricie+National+Park,+Quebec&travelmode=driving"],
      checks: ["Geführtes Angebot und Sprache 2027", "Treffpunkt, Startzeit und Preis", "Schwimmwesten und Ausrüstung", "Wind, Wassertemperatur und Stornoregel"]
    },
    "waber-falls": {
      kicker: "Besondere Wunschoption · nur unter Bedingungen", title: "Ein großer Expeditionstag – keine Einsteigertour",
      intro: "Über den Lac Wapizagonke paddeln und anschließend zu den 27 Meter hohen Waber Falls wandern: landschaftlich ein Höhepunkt, aber mit 9,2 Kilometern Paddeln, 7,2 Kilometern Wandern und fehlendem Mobilfunk ein langer, anspruchsvoller Tag.",
      pros: ["Einzigartiges Wasserfall-Erlebnis", "Kanu und Wanderung kombiniert", "Großes Naturhighlight"],
      cons: ["Für Anfänger ohne Guide ungeeignet", "Kein Mobilfunk und Hilfe unter Umständen weit entfernt", "Langer Tag plus lange Anfahrt"],
      links: [["Offizielle Tourdaten", "https://parks.canada.ca/pn-np/qc/mauricie/activ/nautique-nautical/waber", "Parks Canada zu Ablauf und Anforderungen"], ["Fotos & Erfahrungsbericht", "https://tourismemauricie.com/blogue/chutes-waber-comment-se-rendre-dans-ce-coin-paradisiaque-du-parc-national-de-la-mauricie", "So sieht der Expeditionstag aus"], ["Anfahrt", "https://www.google.com/maps/dir/?api=1&origin=46.7256101,-72.7707375&destination=Wapizagonke+Picnic+Area,+La+Mauricie+National+Park&travelmode=driving", "ca. 70–90 Minuten als Planungswert"]],
      addon: "Eigenes Picknick und Reserveverpflegung sind Pflicht. Danach höchstens ein kurzer Aussichtsstopp – keine weitere Wanderung anhängen.", addonLink: ["Videoeindruck öffnen", "https://www.youtube.com/watch?v=INFMAA3HvGQ"],
      checks: ["Guide oder erfolgreiche Einführung", "Ausdrückliche Empfehlung des Parkpersonals", "Ruhiges Wasser und stabiles Wetter", "Notfallplan, Schwimmwesten und Reserveverpflegung"]
    },
    "shawinigan": {
      kicker: "Mittwoch · Schlechtwetter- und Genussoption", title: "Ein starker Plan B mit Technik, Stadt und gutem Essen",
      intro: "Shawinigan ist der bewusste Kontrast zum Nationalpark: interaktive Energie- und Industriegeschichte, Aussichtsturm, das Ufer des Saint-Maurice sowie Restaurants und Mikrobrauereien. Der Umfang lässt sich von einem halben Tag bis zum Tagesprogramm dosieren.",
      pros: ["Gute Regenreserve", "Auch als halber Tag möglich", "Essen und Stadtspaziergang leicht kombinierbar"],
      cons: ["Weniger Natur als die anderen Optionen", "Saisonzeiten Ende September offen", "Rückfahrt am Abend einplanen"],
      links: [["Cité de l’énergie", "https://www.citedelenergie.com/", "Ausstellungen, Turm und aktuelle Öffnung"], ["Fotos & Aktivitäten", "https://www.tourismeshawinigan.com/en/", "Offizielle Inspiration für Shawinigan"], ["Anfahrt", "https://www.google.com/maps/dir/?api=1&origin=46.7256101,-72.7707375&destination=La+Cite+de+l'Energie,+Shawinigan,+QC&travelmode=driving", "ca. 25–35 Minuten als Planungswert"]],
      addon: "Als Genussstopp passt ROSE Boulangerie de village in Sainte-Flore. Bei gutem Wetter kann ein kurzer Aussichtspunkt aus dem Shawinigan-Roadtrip ergänzt werden.", addonLink: ["Roadtrip & Fotostopps", "https://www.tourismeshawinigan.com/road-trip-shawinigan/"],
      checks: ["Öffnungstage der Cité Ende September", "Führungs- und Turmzeiten", "Restaurantzeiten", "Wetter und gewünschter Tagesumfang"]
    }
  };
  const plan = plans[ideaId];
  if (!plan) return "";
  const pros = plan.pros.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const cons = plan.cons.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const links = plan.links.map(([label, url, note]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(note)}</small></a>`).join("");
  const checks = plan.checks.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `<section class="trip-editorial mauricie-editorial"><div class="editorial-intro"><p class="eyebrow">${escapeHtml(plan.kicker)}</p><h2>${escapeHtml(plan.title)}</h2><p>${escapeHtml(plan.intro)}</p></div><div class="editorial-columns"><article><h3>Dafür spricht</h3><ul>${pros}</ul></article><article><h3>Dagegen spricht</h3><ul>${cons}</ul></article></div><div class="route-actions">${links}</div><div class="day-addon"><strong>So passt es in unseren Tag</strong><p>${escapeHtml(plan.addon)}</p><a href="${escapeHtml(plan.addonLink[1])}" target="_blank" rel="noopener">${escapeHtml(plan.addonLink[0])} ↗</a></div><aside class="pretrip-check"><div><p class="eyebrow">Vor der Reise prüfen</p><h3>September 2027</h3></div><ul>${checks}</ul></aside></section>`;
}

function renderSainteRoseEditorial(ideaId) {
  if (ideaId === "fjordtag-varianten") return `
    <section class="trip-editorial fjord-editorial">
      <div class="editorial-intro"><p class="eyebrow">Samstag · 25. September</p><h2>Vier vorbereitete Wege zum Fjord</h2><p>Der Tag wird bewusst noch nicht fest gebucht. Statt vor Ort neu zu recherchieren, wählen wir aus vier vollständig vorbereiteten Varianten – passend zu Wetter, Wind und gemeinsamer Präferenz.</p></div>
      <div class="weather-matrix" aria-label="Entscheidung nach Wetter">
        <article><span>Trocken · wenig Wind</span><strong>A · Seekajak</strong><small>aktiv und intensiv</small></article>
        <article><span>Trocken oder bewölkt · mehr Wind</span><strong>B · La Majestueuse</strong><small>entspannt, große Reichweite</small></article>
        <article><span>Windig oder nass · Outdoor möglich</span><strong>C · Elektro-Side-by-Side</strong><small>wetterrobuster Joker</small></article>
        <article><span>Dauerregen oder stürmisch</span><strong>D · Dorf &amp; Museum</strong><small>echter Regenplan</small></article>
      </div>
      <div class="variant-detail-grid">
        <article><b class="variant-letter">A</b><h3>Seekajak</h3><p>Start direkt am Quai von Sainte-Rose-du-Nord. Die Tour „Découverte“ dauert nach aktuellem Anbieterstand drei Stunden. Tandemkajaks, Sicherheitsbriefing und Begleitung sind enthalten; Vorerfahrung ist nicht nötig.</p><ul><li>Treffpunkt: 136 Rue du Quai</li><li>Referenzstarts: 9:00 oder 13:00 Uhr</li><li>Saison laut Anbieter: Mai bis Oktober</li><li>Stärke: unmittelbares Fjorderlebnis aus Wasserhöhe</li></ul><a href="https://aventurerosedesvents.com/index.php/todo/sortie-courte-en-kayak-de-mer/" target="_blank" rel="noopener">Fotos, Ablauf &amp; Buchung ↗</a></article>
        <article><b class="variant-letter">B</b><h3>La Majestueuse</h3><p>Die entspannte Schiffsalternative zeigt eine deutlich größere Strecke des Fjords. Der veröffentlichte Herbstfahrplan 2026 sah eine Rundfahrt ab Sainte-Rose mit Aufenthalt in L’Anse-Saint-Jean vor.</p><ul><li>Referenz: 11:15–15:15 Uhr</li><li>L’Anse-Saint-Jean: 12:30–14:00 Uhr</li><li>Cap Liberté, Cap Trinité und Cap Éternité</li><li>Stärke: perfekter Erholungstag zwischen zwei Wanderungen</li></ul><a href="https://navettesdufjord.com/croisieres/croisiere-la-majestueuse-automne/" target="_blank" rel="noopener">Fotos, Route &amp; Fahrplan ↗</a></article>
        <article><b class="variant-letter">C</b><h3>Elektro-Side-by-Side</h3><p>Geführte Tour mit einem 100 % elektrischen Polaris Ranger Kinetic. Sie verbindet borealen Wald, einen Aussichtspunkt über den Fjord und lokale Erläuterungen.</p><ul><li>Start: Rang Sainte-Marie</li><li>Referenzstarts: 9:00 oder 13:00 Uhr</li><li>Helm, Handschuhe, Regenkleidung und Fahrtraining inklusive</li><li>Preisangabe „ab 245 CAD“ vor Buchung genau klären</li></ul><a href="https://www.nomadequad.com/service-page/d%C3%A9couvrez-le-fjord-du-saguenay-1" target="_blank" rel="noopener">Fotos, Ablauf &amp; Anbieter ↗</a></article>
        <article><b class="variant-letter">D</b><h3>Echter Regenplan</h3><p>Kein falscher „Regenheldentag“: Bei Dauerregen oder Sturm bleiben die Wege kurz und flexibel. Museum, Café und Unterkunft sind dann ein vollwertiger Plan – kein Notbehelf.</p><ul><li>Musée de la Nature · 199 Rue de la Montagne</li><li>Mittagessen oder Café im Dorf</li><li>Quai und Ortskern in kurzen trockenen Fenstern</li><li>Optional: Sentier de la Plate-forme · 3,7 km</li></ul><a href="https://museedelanature.com/tarifs-et-horaire/" target="_blank" rel="noopener">Museum &amp; Öffnungszeiten ↗</a><a href="https://www.ste-rosedunord.qc.ca/visiter-sainte-rose/attraits-touristique/lete-a-sainte-rose/sentiers-de-randonnee/" target="_blank" rel="noopener">Lokale Wege &amp; Fotos ↗</a></article>
      </div>
      <aside class="pretrip-check"><div><p class="eyebrow">Vor der Reise prüfen</p><h3>September 2027</h3></div><ul><li>Verfügbarkeit und genaue Startzeiten</li><li>Preise und Bezugsgröße beim Side-by-Side</li><li>Fahrplan der La Majestueuse</li><li>Stornierungs- und Wetterregeln</li><li>Wind, Niederschlag und Temperatur am Vortag</li></ul></aside>
    </section>`;

  if (ideaId === "montagne-du-chapeau") return `
    <section class="trip-editorial hike-editorial">
      <div class="editorial-intro"><p class="eyebrow">Freitag · 24. September</p><h2>Zwei sehr unterschiedliche Wanderungen zur Wahl</h2><p>Die Montagne du Chapeau bleibt die große Waldtour. Neu kommt mit dem Sentier de la Plate-forme eine echte, deutlich kürzere Rundtour direkt bei Sainte-Rose-du-Nord hinzu. So entscheiden wir nicht erst vor Ort zwischen „ganz oder gar nicht“.</p></div>
      <div class="variant-detail-grid">
        <article><b class="variant-letter">A</b><h3>Montagne du Chapeau</h3><p>Naturbelassene Hin-und-zurück-Wanderung zum Belvédère über der Vallée de la Rivière Sainte-Marguerite. Die Gemeinde nennt 12,2 Kilometer; unsere Tourenquelle 12,3 Kilometer und 459 Höhenmeter.</p><ul><li>12,2–12,3 km · 459 Hm</li><li>ca. 4–5 Stunden</li><li>anspruchsvoll und bei Nässe stellenweise rutschig</li><li>starker Tal- und Indian-Summer-Blick</li></ul><a href="https://www.onyva.quebec/espace-decouverte/activites/randonnee-au-sentier-de-la-montagne-du-chapeau/" target="_blank" rel="noopener">Beschreibung &amp; Bilder ↗</a><a href="https://baliseqc.ca/3S/explorer/saguenay-lac-saint-jean/sainte-rose-du-nord-LR0491" target="_blank" rel="noopener">Offizielle Karte &amp; GPS ↗</a></article>
        <article><b class="variant-letter">B</b><h3>Sentier de la Plate-forme</h3><p>Die kompakte Rundtour beginnt an der Rue de la Montagne und verbindet drei Aussichtspunkte über dem Saguenay-Fjord. Sie ist die bessere Wahl bei weniger Zeit, wechselhaftem Wetter oder dem Wunsch nach einem entspannteren Wandertag.</p><ul><li>3,7 km · Rundtour</li><li>ca. 1½–2 Stunden mit Fotostopps</li><li>leicht bis mittel</li><li>optional anschließend 1,7 km Sentiers du Quai</li></ul><a href="https://www.ste-rosedunord.qc.ca/visiter-sainte-rose/attraits-touristique/lete-a-sainte-rose/sentiers-de-randonnee/" target="_blank" rel="noopener">Beschreibung der Gemeinde ↗</a><a href="https://medias.baliseqc.ca/upload/cartes/LR0491_01.pdf?v=1731961430" target="_blank" rel="noopener">Offizielle Karte der Rundtour ↗</a></article>
      </div>
      <div class="route-actions"><a href="https://www.google.com/maps/dir/?api=1&origin=1516%20Route%20de%20Tadoussac%2C%20Sainte-Rose-du-Nord%2C%20QC%20G0V%201T0%2C%20Canada&destination=48.3997%2C-70.4767&travelmode=driving" target="_blank" rel="noopener"><strong>Anfahrt Montagne du Chapeau</strong><small>ca. 20–22 km · 20–25 Minuten als Planungswert</small></a><a href="https://www.google.com/maps/dir/?api=1&origin=1516%20Route%20de%20Tadoussac%2C%20Sainte-Rose-du-Nord%2C%20QC%20G0V%201T0%2C%20Canada&destination=Rue%20de%20la%20Montagne%2C%20Sainte-Rose-du-Nord%2C%20QC%2C%20Canada&travelmode=driving" target="_blank" rel="noopener"><strong>Anfahrt Sentier de la Plate-forme</strong><small>Parkplatz am Einstieg · Rue de la Montagne</small></a></div>
      <aside class="day-addon"><strong>So bleibt auch Variante B ein schöner Tag</strong><p>Nach der Fjordrunde können wir ohne Zeitdruck den Quaiweg ergänzen, im Dorf einkehren oder länger an den Aussichtspunkten bleiben. Die kurze Strecke ist damit kein Notprogramm, sondern ein bewusst entspannter Fjordtag.</p><a href="https://www.google.com/maps/search/?api=1&query=Rose+Caf%C3%A9+Sainte-Rose-du-Nord" target="_blank" rel="noopener">Rose Café auf Google Maps ↗</a></aside>
      <aside class="pretrip-check"><div><p class="eyebrow">Vor dem Start prüfen</p><h3>Sicher in den Wald</h3></div><ul><li>Öffnung, Wegzustand und Sperrungen</li><li>Aktuelle Jagdperiode und lokale Regeln</li><li>Wetter, Wind und Niederschlag</li><li>Offline-Karte, Wasser, Proviant und sichtbare Kleidung</li></ul></aside>
    </section>`;

  if (ideaId === "pic-tete-de-chien") return `
    <section class="trip-editorial hike-editorial">
      <div class="editorial-intro"><p class="eyebrow">Favorit für Sonntag · 26. September</p><h2>Kompakter, steiler und mit weitem Monts-Valin-Panorama</h2><p>Vom Centre de découverte führt die Nationalparkwanderung über Wald und Lac des Pères zum aussichtsreichen oberen Bereich. Sépaq nennt 8 Kilometer, 340 Höhenmeter und die Einstufung „schwierig“.</p></div>
      <div class="editorial-columns"><article><h3>Dafür spricht</h3><ul><li>Sehr starkes Herbst-, Berg- und Seenpanorama</li><li>Lac des Pères als schöner Zwischenstopp</li><li>Offizieller Sépaq-GPX und gute Parkinfrastruktur</li><li>Anderer Charakter als Montagne du Chapeau</li></ul></article><article><h3>Dagegen spricht</h3><ul><li>Etwa 34 Minuten Anfahrt ab Exode</li><li>Steilere Passagen trotz kürzerer Strecke</li><li>Oben stark von Wind, Wolken und Sicht abhängig</li></ul></article></div>
      <div class="route-actions"><a href="https://www.alltrails.com/fr/randonnee/canada/quebec/sentier-du-pic-de-la-tete-de-chien" target="_blank" rel="noopener"><strong>Route, Fotos &amp; Höhenprofil</strong><small>Interaktive Tourenansicht</small></a><a href="https://www.sepaq.com/resources/docs/pq/mva/gpx/mva_sentier_ete_pic-de-la-tete-de-chien.gpx" target="_blank" rel="noopener"><strong>Offiziellen GPX laden</strong><small>Sépaq-Routendatei</small></a><a href="https://www.google.com/maps/dir/?api=1&origin=1516%20Route%20de%20Tadoussac%2C%20Sainte-Rose-du-Nord%2C%20QC%20G0V%201T0%2C%20Canada&destination=360%20Rang%20Saint-Louis%2C%20Saint-Fulgence%2C%20QC%20G0V%201S0%2C%20Canada&travelmode=driving" target="_blank" rel="noopener"><strong>Anfahrt öffnen</strong><small>ca. 41,9 km · 34 Minuten als Planungswert</small></a></div>
      <aside class="day-addon"><strong>Rückweg ohne Zeitdruck</strong><p>Wenn Öffnungszeit und Energie passen, kurzer Bäckereistopp bei Chez Roger oder ein Halt am Saguenay in Saint-Fulgence. Keine weitere lange Wanderung anhängen.</p><a href="https://www.google.com/maps/search/?api=1&query=Chez+Roger+Boulangerie+Saint-Fulgence+Quebec" target="_blank" rel="noopener">Chez Roger auf Google Maps ↗</a></aside>
      <aside class="pretrip-check"><div><p class="eyebrow">Vor dem Start prüfen</p><h3>Nur bei sinnvoller Sicht</h3></div><ul><li>Öffnung, Wegzustand und Sperrungen</li><li>Sicht, Wind und Niederschlag in höheren Lagen</li><li>Parkzugang und mögliche Gebühr</li><li>Offline-Karte/GPX, Wasser und September-Kleidung</li></ul></aside>
    </section>`;
  return "";
}

async function initializeIdeaDetail() {
  const root = document.querySelector("#idea-detail");
  if (!root) return;
  const ideaId = new URLSearchParams(window.location.search).get("id") || "";
  try {
    await loadCurrentUser();
    let data = await loadIdeaData(ideaId);
    const idea = ideas.find((entry) => entry.id === ideaId) || data.idea;
    if (!idea) throw new Error("Diese Idee gibt es nicht.");
    const destination = destinations.find((entry) => entry.id === idea.destination);
    const back = document.querySelector("#idea-back");
    if (back && destination) back.href = `${destination.page}#ideas`;
    document.title = `${idea.title} · Canada 2027`;
    const facts = idea.facts?.length ? `<div class="dialog-facts">${idea.facts.map((fact) => `<span>${escapeHtml(fact)}</span>`).join("")}</div>` : "";
    const warning = idea.warning ? `<aside class="safety-note"><strong>Sicherheitshinweis</strong>${escapeHtml(idea.warning)}</aside>` : "";
    const links = idea.links?.length ? `<div class="source-links">${idea.links.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${link.pdf ? "PDF · " : ""}${escapeHtml(link.label)} ↗</a>`).join("")}</div>` : "";
    const videoId = youtubeVideoId(idea.links);
    const videoPreview = videoId ? `<a class="idea-video-preview" href="https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg" alt="Videoeindruck zu ${escapeHtml(idea.title)}" loading="lazy"><span class="play-mark">▶</span><strong>Videoeindruck öffnen</strong></a>` : "";
    const attachment = idea.attachment ? `<div class="source-links attachment-link"><a href="idea-file.php?idea=${encodeURIComponent(idea.id)}" target="_blank" rel="noopener">Anhang · ${escapeHtml(idea.attachment.name)} ↗</a></div>` : "";
    const author = idea.author && profileDirectory[idea.author] ? `<div class="idea-author"><i class="avatar ${profileDirectory[idea.author].avatar}"></i><span><small>Vorgeschlagen von</small><strong>${escapeHtml(profileDirectory[idea.author].name)}</strong></span></div>` : "";
    const editorial = renderMauricieEditorial(ideaId) || renderSainteRoseEditorial(ideaId);
    const editorialHero = editorial ? (destination?.id === "mauricie" ? "mauricie-detail-hero" : "sainte-detail-hero") : "";
    const interestHint = (destination?.id === "montreal" || ideaChoiceGroups[ideaId]) ? `<div class="detail-interest-hint"><strong>Interessenstufe:</strong> 5 = unbedingt · 4 = gerne · 3 = neutral · 2 = eher nicht · 1 = kann entfallen</div>` : "";
    root.innerHTML = `<article class="idea-detail-card ${editorialHero}"><div class="idea-detail-icon">${idea.icon}</div><p class="eyebrow">${escapeHtml(idea.place || destination?.sectionTitle || "Reiseidee")}</p><h1>${escapeHtml(idea.title)}</h1>${author}<p class="idea-detail-copy">${escapeHtml(idea.text)}</p>${facts}${videoPreview}${warning}${links}${attachment}${interestHint}</article>${editorial}<div id="idea-community" class="community-loading">Bewertungen und Kommentare werden geladen …</div>`;
    const community = document.querySelector("#idea-community");
    const redraw = () => { community.innerHTML = renderIdeaCommunity(ideaId, data); };
    redraw();
    community.addEventListener("click", async (event) => {
      const deleteIdea = event.target.closest("[data-delete-idea]");
      if (deleteIdea) {
        if (!window.confirm("Möchtest du deine Idee wirklich löschen? Bewertungen, Kommentare und Anhang werden ebenfalls gelöscht.")) return;
        community.classList.add("saving");
        try {
          await saveIdeaAction(ideaId, { action: "delete-idea" });
          window.location.href = `${destination?.page || "index.php"}#ideas`;
        } catch (error) { window.alert(error.message); community.classList.remove("saving"); }
        return;
      }
      const deleteButton = event.target.closest("[data-delete-comment]");
      if (deleteButton) {
        if (!window.confirm("Möchtest du deinen Kommentar wirklich löschen?")) return;
        community.classList.add("saving");
        try { data = await saveIdeaAction(ideaId, { action: "delete-comment", commentId: deleteButton.dataset.deleteComment }); redraw(); }
        catch (error) { window.alert(error.message); }
        community.classList.remove("saving");
        return;
      }
      const choiceButton = event.target.closest("[data-choice]");
      if (choiceButton) {
        community.classList.add("saving");
        try { data = await saveIdeaAction(ideaId, { action: "choice", choice: choiceButton.dataset.choice }); redraw(); }
        catch (error) { window.alert(error.message); }
        community.classList.remove("saving");
        return;
      }
      const button = event.target.closest("[data-rating]");
      if (!button) return;
      community.classList.add("saving");
      try { data = await saveIdeaAction(ideaId, { action: "rating", rating: Number(button.dataset.rating) }); redraw(); }
      catch (error) { window.alert(error.message); }
      community.classList.remove("saving");
    });
    community.addEventListener("submit", async (event) => {
      const form = event.target.closest("[data-comment-form]");
      if (!form) return;
      event.preventDefault();
      const text = form.elements.text.value.trim();
      if (!text) return;
      const submit = form.querySelector("button[type=submit]");
      submit.disabled = true;
      try { data = await saveIdeaAction(ideaId, { action: "comment", text, parentId: form.dataset.parentId || null }); redraw(); }
      catch (error) { window.alert(error.message); submit.disabled = false; }
    });
  } catch (error) {
    root.innerHTML = `<section class="idea-detail-card community-error"><strong>Nicht geladen</strong><p>${escapeHtml(error.message)}</p><a class="primary-button inline-button" href="index.php">Zur Reiseübersicht</a></section>`;
  }
}

async function initializeNewIdea() {
  const form = document.querySelector("#new-idea-form");
  if (!form) return;
  const destination = destinations.find((entry) => entry.id === document.body.dataset.destination) || destinations[1];
  const label = document.querySelector("#new-idea-destination");
  const back = document.querySelector("#new-idea-back");
  if (label) label.textContent = destination.sectionTitle;
  if (back) back.href = `${destination.page}#ideas`;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.querySelector("#new-idea-message");
    const submit = form.querySelector("button[type=submit]");
    const file = form.elements.attachment.files?.[0];
    if (file && file.size > 10485760) { message.textContent = "Die Datei darf höchstens 10 MB groß sein."; message.dataset.state = "error"; return; }
    submit.disabled = true;
    message.textContent = "Idee wird veröffentlicht …";
    message.dataset.state = "saving";
    try {
      const user = await loadCurrentUser();
      const response = await fetch("ideas.php", { method: "POST", headers: { "X-CSRF-Token": user.csrf }, body: new FormData(form) });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Die Idee konnte nicht gespeichert werden");
      window.location.href = `idea.php?id=${encodeURIComponent(payload.idea.id)}`;
    } catch (error) {
      message.textContent = error.message;
      message.dataset.state = "error";
      submit.disabled = false;
    }
  });
}

const checklistRoot = document.querySelector("#checklist-root");
const checklistDialog = document.querySelector("#checklist-dialog");
const checklistStorageKey = "canada-2027-checklists-v2";
const checklistSchemaVersion = 2;
const checklistDefaults = {
  all: {
    title: "Für uns vier",
    avatars: '<i class="avatar avatar-andrea"></i><i class="avatar avatar-lars"></i><i class="avatar avatar-christina"></i><i class="avatar avatar-manfred"></i>',
    lists: [
      { id: "all-bookings", title: "Buchungen & Reiseordner", icon: "🗂️", items: [
        { id: "all-master-plan", text: "Reiseplan mit Adressen und Buchungsnummern offline speichern", done: false },
        { id: "all-vouchers", text: "Flüge, Hotels, Mietwagen und Walbeobachtung: Voucher sammeln", done: false },
        { id: "all-whale-check", text: "Walbeobachtung: Abfahrt, Boarding und Treffpunkt final prüfen", done: false },
        { id: "all-emergency", text: "Notfallkontakte, Versicherungsnummern und Sperrnummern sammeln", done: false },
        { id: "all-copies", text: "Dokumentkopien verschlüsselt offline und getrennt vom Original sichern", done: false },
        { id: "all-sharing", text: "Reiseverlauf und Unterkünfte mit Kontaktperson zu Hause teilen", done: false }
      ]},
      { id: "all-roadtrip", title: "Mietwagen & Roadtrip", icon: "🚙", items: [
        { id: "all-drivers", text: "Fahrer, Führerscheine und internationale Führerscheine festlegen", done: false },
        { id: "all-rental", text: "Mietvertrag, Versicherungen, Selbstbehalt und Zusatzfahrer prüfen", done: false },
        { id: "all-card", text: "Kreditkarte des Hauptfahrers samt PIN und Limit prüfen", done: false },
        { id: "all-car-photos", text: "Bei Übernahme Schäden, Tankstand und Kilometerstand fotografieren", done: false },
        { id: "all-rules", text: "Québec-Verkehrsregeln, Parken und Maut vor Abfahrt ansehen", done: false },
        { id: "all-car-kit", text: "Handyhalterung, Ladekabel, USB-Adapter und Offline-Karten", done: false },
        { id: "all-return", text: "Rückgabeort, Uhrzeit und Tankregel notieren", done: false }
      ]},
      { id: "all-kitchen-box", title: "Unsere rollende Küchenbox", icon: "📦", items: [
        { id: "all-box", text: "Stabile Klappbox oder Kiste mit Deckel in Montréal besorgen", done: false },
        { id: "all-salt-pepper", text: "Salz und Pfeffer in kleinen, dichten Streuern", done: false },
        { id: "all-oil", text: "Kleine auslaufsichere Flasche Speiseöl", done: false },
        { id: "all-coffee", text: "Kaffee, Tee, Zucker oder Süßstoff", done: false },
        { id: "all-coffee-system", text: "Kaffeefilter oder Zubereiter erst nach Unterkunftscheck kaufen", done: false },
        { id: "all-breakfast", text: "Müsli oder Haferflocken als flexibler Frühstücksgrundstock", done: false },
        { id: "all-staples", text: "Reis, Pasta oder Couscous als schnell kochende Reserve", done: false },
        { id: "all-seasoning", text: "Brühwürfel und kleine Auswahl Kräuter oder Gewürze", done: false },
        { id: "all-condiments", text: "Senf, Ketchup oder Ahornsirup nur nach tatsächlichem Bedarf", done: false },
        { id: "all-cleaning", text: "Spülmittel, Schwamm, Geschirrtuch und Küchenrolle", done: false },
        { id: "all-bags", text: "Müllbeutel, Zip-Beutel, Clips und wiederverwendbare Dosen", done: false },
        { id: "all-cooler", text: "Kühltasche plus Kühlakkus für Fahrtage", done: false },
        { id: "all-bottles", text: "Trinkflaschen und Thermobecher für alle vier", done: false },
        { id: "all-tools", text: "Dosenöffner, Flaschenöffner, Messer und Brett in Unterkünften prüfen", done: false },
        { id: "all-buy-canada", text: "Lebensmittel möglichst in Kanada kaufen; Mitgebrachtes deklarieren", done: false }
      ]},
      { id: "all-first-shop", title: "Erster gemeinsamer Einkauf", icon: "🛒", items: [
        { id: "all-shop-place", text: "Supermarktstopp nach Mietwagenübernahme einplanen", done: false },
        { id: "all-water", text: "Wasser und Getränke für die ersten Fahrtage", done: false },
        { id: "all-milk", text: "Milch oder Pflanzendrink sowie Joghurt nach Bedarf", done: false },
        { id: "all-fruit", text: "Obst und haltbare Snacks für Auto und Wanderungen", done: false },
        { id: "all-bread", text: "Brot oder Wraps und einfacher Belag für flexible Pausen", done: false },
        { id: "all-emergency-meal", text: "Eine unkomplizierte Notfallmahlzeit für späte Ankunft", done: false },
        { id: "all-receipts", text: "Gemeinsame Einkäufe in der Kosten-App erfassen", done: false }
      ]},
      { id: "all-hiking", title: "Gemeinsame Wander-Ausrüstung", icon: "🥾", items: [
        { id: "all-first-aid", text: "Erste-Hilfe-Set, Blasenpflaster und Rettungsdecke", done: false },
        { id: "all-headlamps", text: "Stirnlampen oder Taschenlampen mit Ersatzakku", done: false },
        { id: "all-navigation", text: "Touren, Karten und Notfallnummern offline speichern", done: false },
        { id: "all-weather-gear", text: "Regenhüllen, Sitzunterlage und wasserdichte Packbeutel", done: false },
        { id: "all-sun-insects", text: "Sonnencreme und Insektenschutz gemeinsam einpacken", done: false },
        { id: "all-whistle", text: "Pfeife, Powerbank und kleines Reparaturset", done: false },
        { id: "all-trail-check", text: "Am Wandertag Wetter, Trailstatus und Jagdhinweise prüfen", done: false },
        { id: "all-route-share", text: "Route, Startzeit und Umkehrzeit gemeinsam festlegen", done: false }
      ]},
      { id: "all-final-check", title: "Kurz vor Abreise erneut prüfen", icon: "⏰", items: [
        { id: "all-entry-2027", text: "Einreise-, eTA- und Zollregeln mit Stand 2027 prüfen", done: false },
        { id: "all-flight-check", text: "Online-Check-in, Gepäckregeln und Sitzplätze prüfen", done: false },
        { id: "all-weather", text: "Wetter, Waldbrandlage, Luftqualität und Straßensperren prüfen", done: false },
        { id: "all-parks", text: "Parköffnungen, Trailstatus und Reservierungen prüfen", done: false },
        { id: "all-roaming", text: "eSIM oder Roaming aktivieren und Offline-Karten laden", done: false },
        { id: "all-money", text: "Zahlungskarten, Limits, PIN und kleine CAD-Reserve prüfen", done: false }
      ]}
    ]
  },
  al: {
    title: "Andrea & Lars",
    avatars: '<i class="avatar avatar-andrea"></i><i class="avatar avatar-lars"></i>',
    lists: [
      { id: "al-entry", title: "Einreise & Dokumente", icon: "🛂", items: [
        { id: "al-eta", text: "eTA nur auf der offiziellen Canada.ca-Seite beantragen", done: false },
        { id: "al-passports", text: "Reisepässe, Gültigkeit und Schreibweise auf Tickets prüfen", done: false },
        { id: "al-insurance", text: "Auslandsreisekrankenversicherung prüfen", done: false },
        { id: "al-licence", text: "Führerschein plus internationalen Führerschein vorbereiten", done: false },
        { id: "al-doc-copies", text: "Pass-, eTA- und Versicherungsdaten offline sichern", done: false }
      ]},
      { id: "al-flight", title: "Flüge & Anreise", icon: "✈️", items: [
        { id: "al-fra", text: "Anreise Wuppertal/Langen nach Frankfurt festlegen", done: false },
        { id: "al-flights", text: "Flüge Frankfurt–Montréal buchen", done: false },
        { id: "al-luggage", text: "Gepäck, Sitzplätze und Transfer prüfen", done: false }
      ]},
      { id: "al-pack", title: "Packliste Indian Summer", icon: "🎒", items: [
        { id: "al-layers", text: "Zwiebellook: Funktionsshirt, Fleece und warme Schicht", done: false },
        { id: "al-rain", text: "Wasserdichte Regenjacken und leichte Regenhosen", done: false },
        { id: "al-shoes", text: "Eingelaufene Wanderschuhe und bequeme Stadtschuhe", done: false },
        { id: "al-hat", text: "Mütze, Handschuhe, Sonnenbrille und Kappe", done: false },
        { id: "al-daypack", text: "Tagesrucksäcke, Trinkflaschen und Regenhüllen", done: false },
        { id: "al-adapter", text: "Adapter Typ A/B; Geräte auf 120 Volt prüfen", done: false }
      ]},
      { id: "al-health", title: "Gesundheit & Persönliches", icon: "🩹", items: [
        { id: "al-vaccines", text: "Standardimpfungen rechtzeitig ärztlich prüfen lassen", done: false },
        { id: "al-meds", text: "Persönliche Medikamente plus Reserve und Medikamentenplan", done: false },
        { id: "al-glasses", text: "Brille, Ersatzbrille oder Kontaktlinsen einpacken", done: false },
        { id: "al-pharmacy", text: "Persönliche Reiseapotheke und Blasenversorgung ergänzen", done: false }
      ]},
      { id: "al-tech", title: "Technik & Geld", icon: "🔌", items: [
        { id: "al-phones", text: "Handys, Ladegeräte und Powerbanks vorbereiten", done: false },
        { id: "al-offline", text: "Offline-Karten, Buchungen und wichtige Kontakte laden", done: false },
        { id: "al-cards", text: "Kreditkarten, PIN, Auslandslimit und Ersatzkarte prüfen", done: false },
        { id: "al-esim", text: "eSIM oder Roaming für Kanada auswählen", done: false }
      ]}
    ]
  },
  cm: {
    title: "Christina & Manfred",
    avatars: '<i class="avatar avatar-christina"></i><i class="avatar avatar-manfred"></i>',
    lists: [
      { id: "cm-entry", title: "Einreise & Dokumente", icon: "🛂", items: [
        { id: "cm-eta", text: "eTA nur auf der offiziellen Canada.ca-Seite beantragen", done: false },
        { id: "cm-passports", text: "Reisepässe, Gültigkeit und Schreibweise auf Tickets prüfen", done: false },
        { id: "cm-insurance", text: "Auslandsreisekrankenversicherung prüfen", done: false },
        { id: "cm-health", text: "Medikamente und ärztliche Unterlagen vorbereiten", done: false },
        { id: "cm-doc-copies", text: "Pass-, eTA- und Versicherungsdaten offline sichern", done: false }
      ]},
      { id: "cm-health-list", title: "Gesundheit & Reiseapotheke", icon: "🩹", items: [
        { id: "cm-vaccines", text: "Standardimpfungen rechtzeitig ärztlich prüfen lassen", done: false },
        { id: "cm-medicine", text: "Persönliche Medikamente plus Reserve und Medikamentenplan", done: false },
        { id: "cm-pharmacy", text: "Persönliche Reiseapotheke und Blasenversorgung ergänzen", done: false },
        { id: "cm-glasses", text: "Brille, Ersatzbrille oder Kontaktlinsen einpacken", done: false }
      ]},
      { id: "cm-pack", title: "Packliste Indian Summer", icon: "🧳", items: [
        { id: "cm-layers", text: "Zwiebellook: Funktionsshirt, Fleece und warme Schicht", done: false },
        { id: "cm-rain", text: "Wasserdichte Regenjacken und leichte Regenhosen", done: false },
        { id: "cm-shoes", text: "Eingelaufene Wanderschuhe und bequeme Stadtschuhe", done: false },
        { id: "cm-hat", text: "Mütze, Handschuhe, Sonnenbrille und Kappe", done: false },
        { id: "cm-daypack", text: "Tagesrucksäcke, Trinkflaschen und Regenhüllen", done: false },
        { id: "cm-adapter", text: "Adapter Typ A/B; Geräte auf 120 Volt prüfen", done: false }
      ]},
      { id: "cm-tech", title: "Technik & Geld", icon: "🔌", items: [
        { id: "cm-phones", text: "Handys, Ladegeräte und Powerbanks vorbereiten", done: false },
        { id: "cm-offline", text: "Offline-Karten, Buchungen und wichtige Kontakte laden", done: false },
        { id: "cm-cards", text: "Kreditkarten, PIN, Auslandslimit und Ersatzkarte prüfen", done: false },
        { id: "cm-esim", text: "eSIM oder Roaming für Kanada auswählen", done: false }
      ]}
    ]
  }
};

function newId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function cloneChecklistDefaults() {
  return JSON.parse(JSON.stringify(checklistDefaults));
}

function upgradeChecklistData(stored) {
  const upgraded = cloneChecklistDefaults();
  ["all", "al", "cm"].forEach((groupId) => {
    const storedGroup = stored?.[groupId];
    if (!storedGroup?.lists) return;
    const existingLists = new Map(storedGroup.lists.map((list) => [list.id, list]));
    upgraded[groupId].lists = upgraded[groupId].lists.map((defaultList) => {
      const existing = existingLists.get(defaultList.id);
      if (!existing) return defaultList;
      const existingItems = new Map(existing.items.map((item) => [item.id, item]));
      const items = defaultList.items.map((item) => existingItems.get(item.id) || item);
      existing.items.forEach((item) => { if (!defaultList.items.some((entry) => entry.id === item.id)) items.push(item); });
      existingLists.delete(defaultList.id);
      return { ...defaultList, ...existing, items };
    });
    upgraded[groupId].lists.push(...existingLists.values());
  });
  return upgraded;
}

let checklistData = checklistRoot ? cloneChecklistDefaults() : null;
let checklistUpdatedAt = null;
let activeChecklistCouple = null;

function setSyncStatus(text, state = "") {
  const status = document.querySelector("#sync-status");
  if (!status) return;
  status.textContent = text;
  status.dataset.state = state;
}

async function loadSharedChecklists(silent = false) {
  if (!checklistRoot) return;
  try {
    const response = await fetch(`checklists.php?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Checklist load failed");
    const payload = await response.json();
    if (payload.data?.al && payload.data?.cm) {
      const needsUpgrade = Number(payload.schemaVersion || 0) < checklistSchemaVersion || !payload.data.all;
      checklistData = needsUpgrade ? upgradeChecklistData(payload.data) : payload.data;
      checklistUpdatedAt = payload.updatedAt;
      localStorage.setItem(checklistStorageKey, JSON.stringify(checklistData));
      renderChecklists();
      if (needsUpgrade) await saveChecklists();
    } else {
      setSyncStatus("Vorlage bereit · beim ersten Ändern entsperren", "syncing");
    }
    if (!silent && payload.data?.al && payload.data?.cm) setSyncStatus("Gemeinsam synchronisiert", "ok");
  } catch {
    try {
      const backup = JSON.parse(localStorage.getItem(checklistStorageKey));
      if (backup?.al && backup?.cm) checklistData = backup.all ? backup : upgradeChecklistData(backup);
    } catch {}
    renderChecklists();
    setSyncStatus("Offline · später synchronisieren", "offline");
  }
}

async function saveChecklists() {
  if (!checklistData) return;
  localStorage.setItem(checklistStorageKey, JSON.stringify(checklistData));
  setSyncStatus("Wird synchronisiert …", "syncing");
  try {
    const user = await loadCurrentUser();
    const response = await fetch("checklists.php", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRF-Token": user.csrf },
      body: JSON.stringify({ data: checklistData })
    });
    if (response.status === 401) {
      setSyncStatus("Anmeldung abgelaufen", "offline");
      window.location.href = `login.php?next=${encodeURIComponent(window.location.pathname)}`;
      return;
    }
    if (!response.ok) throw new Error("Checklist save failed");
    const payload = await response.json();
    checklistData = payload.data;
    checklistUpdatedAt = payload.updatedAt;
    localStorage.setItem(checklistStorageKey, JSON.stringify(checklistData));
    renderChecklists();
    setSyncStatus("Gemeinsam synchronisiert", "ok");
  } catch {
    setSyncStatus("Offline gespeichert", "offline");
  }
}

function renderChecklists() {
  if (!checklistRoot || !checklistData) return;
  const choices = ["all", "al", "cm"].filter((groupId) => checklistData[groupId]).map((coupleId) => {
    const couple = checklistData[coupleId];
    const allItems = couple.lists.flatMap((list) => list.items);
    const done = allItems.filter((item) => item.done).length;
    const progress = allItems.length ? Math.round(done / allItems.length * 100) : 0;
    return `<button class="checklist-choice ${coupleId === "all" ? "shared" : ""} ${activeChecklistCouple === coupleId ? "active" : ""}" type="button" data-toggle-couple="${coupleId}" aria-expanded="${activeChecklistCouple === coupleId}">
      <span class="couple-avatars">${checklistDefaults[coupleId].avatars}</span>
      <span><strong>${escapeHtml(couple.title)}</strong><small>${done} von ${allItems.length} erledigt</small></span>
      <b>${progress}%</b>
    </button>`;
  }).join("");

  const coupleId = activeChecklistCouple;
  const couple = coupleId ? checklistData[coupleId] : null;
  let panel = "";
  if (couple) {
    const allItems = couple.lists.flatMap((list) => list.items);
    const done = allItems.filter((item) => item.done).length;
    const progress = allItems.length ? Math.round(done / allItems.length * 100) : 0;
    panel = `<section class="checklist-group" data-couple="${coupleId}">
      <header class="couple-head"><div class="couple-avatars">${checklistDefaults[coupleId].avatars}</div><div><p>${coupleId === "all" ? "Gemeinsam organisiert" : "Persönliche Vorbereitung"}</p><h3>${escapeHtml(couple.title)}</h3></div><span class="progress-number">${progress}%</span></header>
      <div class="progress-track"><i style="width:${progress}%"></i></div>
      <div class="topic-grid">${couple.lists.map((list) => `
        <article class="checklist-topic" data-list="${list.id}">
          <header><span>${list.icon || "🍁"}</span><h4>${escapeHtml(list.title)}</h4><button class="delete-list" data-delete-list="${list.id}" aria-label="Liste ${escapeHtml(list.title)} löschen">×</button></header>
          <div class="check-items">${list.items.map((item) => `<label class="check-item ${item.done ? "done" : ""}"><input type="checkbox" data-check-item="${item.id}" ${item.done ? "checked" : ""}><span>${escapeHtml(item.text)}</span><button type="button" data-delete-item="${item.id}" aria-label="Punkt löschen">×</button></label>`).join("")}</div>
          <form class="add-item-form" data-add-item="${list.id}"><input name="item" maxlength="100" required placeholder="Punkt hinzufügen …"><button aria-label="Punkt hinzufügen">+</button></form>
        </article>`).join("")}</div>
      <button class="add-list-button" data-add-list="${coupleId}"><span>＋</span> Neue Themenliste</button>
    </section>`;
  }
  checklistRoot.innerHTML = `<div class="checklist-choices">${choices}</div>${panel}`;
}

checklistRoot?.addEventListener("change", (event) => {
  const input = event.target.closest("[data-check-item]");
  if (!input) return;
  const couple = checklistData[event.target.closest("[data-couple]").dataset.couple];
  const item = couple.lists.flatMap((list) => list.items).find((entry) => entry.id === input.dataset.checkItem);
  if (item) item.done = input.checked;
  saveChecklists(); renderChecklists();
});

checklistRoot?.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-add-item]");
  if (!form) return;
  event.preventDefault();
  const couple = checklistData[form.closest("[data-couple]").dataset.couple];
  const list = couple.lists.find((entry) => entry.id === form.dataset.addItem);
  const input = form.elements.item;
  if (list && input.value.trim()) list.items.push({ id: newId("item"), text: input.value.trim(), done: false });
  saveChecklists(); renderChecklists();
});

checklistRoot?.addEventListener("click", (event) => {
  const toggleCouple = event.target.closest("[data-toggle-couple]");
  if (toggleCouple) {
    activeChecklistCouple = activeChecklistCouple === toggleCouple.dataset.toggleCouple ? null : toggleCouple.dataset.toggleCouple;
    renderChecklists();
    return;
  }
  const addList = event.target.closest("[data-add-list]");
  if (addList) {
    document.querySelector("#new-list-couple").value = addList.dataset.addList;
    document.querySelector("#new-list-title").value = "";
    checklistDialog.showModal();
    setTimeout(() => document.querySelector("#new-list-title").focus(), 50);
    return;
  }
  const coupleId = event.target.closest("[data-couple]")?.dataset.couple;
  if (!coupleId) return;
  const deleteList = event.target.closest("[data-delete-list]");
  if (deleteList) checklistData[coupleId].lists = checklistData[coupleId].lists.filter((list) => list.id !== deleteList.dataset.deleteList);
  const deleteItem = event.target.closest("[data-delete-item]");
  if (deleteItem) checklistData[coupleId].lists.forEach((list) => { list.items = list.items.filter((item) => item.id !== deleteItem.dataset.deleteItem); });
  if (deleteList || deleteItem) { saveChecklists(); renderChecklists(); }
});

document.querySelector("#new-list-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const coupleId = event.currentTarget.elements.couple.value;
  const title = event.currentTarget.elements.title.value.trim();
  if (checklistData?.[coupleId] && title) checklistData[coupleId].lists.push({ id: newId("list"), title, icon: "🍁", items: [] });
  saveChecklists(); renderChecklists(); checklistDialog.close();
});

document.querySelector(".close-checklist-dialog")?.addEventListener("click", () => checklistDialog.close());
checklistDialog?.addEventListener("click", (event) => { if (event.target === checklistDialog) checklistDialog.close(); });

function updateCountdown() {
  const days = document.querySelector("#countdown-days");
  if (!days) return;
  const remaining = Math.max(0, new Date("2027-09-17T00:00:00+02:00").getTime() - Date.now());
  document.querySelector("#countdown-days").textContent = Math.floor(remaining / 86400000);
  document.querySelector("#countdown-hours").textContent = String(Math.floor(remaining / 3600000) % 24).padStart(2, "0");
  document.querySelector("#countdown-minutes").textContent = String(Math.floor(remaining / 60000) % 60).padStart(2, "0");
}

renderTabs(); renderRoute(); renderIdeas(); renderChecklists(); updateCountdown(); initializeIdeaDetail();
initializeNewIdea();
loadIdeaSummaries();
if (checklistRoot) {
  loadSharedChecklists();
  setInterval(() => { if (!document.hidden) loadSharedChecklists(true); }, 15000);
  window.addEventListener("focus", () => loadSharedChecklists(true));
}
if (document.querySelector("#countdown")) setInterval(updateCountdown, 60000);
