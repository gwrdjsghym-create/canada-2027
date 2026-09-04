const destinations = [
  { id: "all", label: "Gesamte Reise" },
  { id: "montreal", label: "Montréal", dates: "17.–20.09." },
  { id: "mauricie", label: "The Laurentians", dates: "20.–23.09." },
  { id: "sainte-rose", label: "Sainte-Rose-du-Nord", dates: "23.–27.09." },
  { id: "quebec", label: "Québec City", dates: "27.–29.09." },
  { id: "orford", label: "Orford", dates: "29.09.–02.10." }
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
    text: "Transfer zurück zum Flughafen, Übernahme des Ford Expedition und Fahrt zur Unterkunft.", tags: ["ca. 195 km", "ca. 2 Std. 27 Min.", "Einkauf einplanen"],
    details: ["Uville Hotel–Flughafen: ca. 19 km / 19 Min.", "Ford Expedition am Flughafen übernehmen", "Fahrt zu Nature Nature", "Check-in voraussichtlich gegen 16 Uhr", "Als Selbstversorger Einkauf oder Abendessen berücksichtigen"]
  },
  {
    id: "mauricie", type: "stay", destination: "mauricie", date: "20.–23. September · 3 Nächte", title: "Nature Nature · Mauricie",
    text: "Basis für zwei Naturtage im Nationalpark La Mauricie – mit einer größeren Wanderung am Dienstag und einem flexiblen Mittwoch.", tags: ["2 volle Tage", "Selbstversorger"],
    details: ["Unterkunft: Nature Nature", "Koordinaten: 46.7256101, -72.7707375", "Dienstag: Lac-Solitaire oder Ruisseau-Bouchard", "Mittwoch: kurze Wanderungen, Kanu-Einstieg oder besondere Wunschoption Waber Falls", "Donnerstag: längerer Wechsel nach Sainte-Rose-du-Nord"]
  },
  {
    id: "mauricie-tuesday", type: "stay", destination: "mauricie", date: "Dienstag · 21. September", title: "Großer Wandertag",
    text: "Je nach Wetter und Tagesform: Lac-Solitaire als kompakte Runde oder Ruisseau-Bouchard mit mehr Strecke und Höhenmetern.", tags: ["6,1 oder 9,1 km", "396 oder 528 Hm", "2,5–3,5 Std."],
    details: ["Lac-Solitaire: 6,1 km Rundweg · 396 Hm · ca. 2,5 Std. · mittelschwer", "Ruisseau-Bouchard: 9,1 km Rundweg · 528 Hm · ca. 3,5 Std. · mittelschwer", "Beide starten am Rivière à la Pêche Service Centre", "<a href=\"https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails\" target=\"_blank\" rel=\"noopener\">Offizielle Wegbeschreibung von Parks Canada ↗</a>"]
  },
  {
    id: "mauricie-wednesday", type: "stay", destination: "mauricie", date: "Mittwoch · 22. September", title: "Wasserfälle, Aussicht & Kanu",
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
  { id: "whale-tour", type: "booked", icon: "🐋", place: "Tadoussac · 27. September", title: "Walbeobachtung per Schiff", text: "Fester Bestandteil des Wechsels nach Québec City. Anbieter und genaue Abfahrtszeit werden ergänzt." },
  { id: "montreal-ideas", type: "idea", icon: "🏙️", place: "Montréal", title: "Zwei volle Tage gestalten", text: "Stadtviertel, Kulinarik und mögliche Tageskombinationen sammeln wir im Montréal-Chat." },
  { id: "transfer-stop", type: "idea", icon: "🛒", place: "Montréal → Nature Nature", title: "Fahrt mit Einkauf aufwerten", text: "Ein sinnvoller Stopp für Lebensmittel oder ein Abendessen soll ohne großen Umweg auf die Route passen." },
  {
    id: "lac-solitaire", type: "idea", icon: "🥾", place: "The Laurentians · Dienstag", title: "Lac-Solitaire",
    text: "Kompakter, aber höhenreicher Rundweg durch regenerierenden Wald und um den See – unsere bevorzugte kürzere Variante.",
    facts: ["6,1 km", "396 Hm", "ca. 2,5 Std.", "mittelschwer"],
    links: [{ label: "Parks Canada", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }]
  },
  {
    id: "ruisseau-bouchard", type: "idea", icon: "⛰️", place: "The Laurentians · Dienstag", title: "Ruisseau-Bouchard",
    text: "Die längere Alternative mit Aussicht am Lac aux Chevaux und einem schönen Rückweg entlang des Bouchard Creek.",
    facts: ["9,1 km", "528 Hm", "ca. 3,5 Std.", "mittelschwer"],
    links: [{ label: "Parks Canada", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }]
  },
  {
    id: "cascades-falaises", type: "idea", icon: "💦", place: "The Laurentians · Mittwoch", title: "Les Cascades & Les Falaises",
    text: "Zwei kurze Wege, die sich flexibel verbinden lassen: Wasserfälle und schwimmende Brücke sowie Aussicht über den Lac Wapizagonke.",
    facts: ["2,4 km · 103 Hm", "4,0 km · 268 Hm", "ca. 2,5 Std. gesamt"],
    links: [{ label: "Wege", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }, { label: "Karte & Höhenprofil", url: "https://publications.gc.ca/collections/collection_2018/pc/R64-517-2017.pdf" }]
  },
  {
    id: "canoe-intro", type: "idea", icon: "🛶", place: "The Laurentians · Mittwoch", title: "Kanu-Einführung",
    text: "Da wir noch nie Kanu gefahren sind, bevorzugen wir eine geführte Einführung. Alternativ 60–90 Minuten in Ufernähe mit zwei Zweierkanus oder Doppelkajaks.",
    facts: ["anfängergeeignet", "60–90 Min.", "Saison 2027 prüfen"],
    links: [{ label: "Paddeln & Verleih", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/nautique-nautical" }]
  },
  {
    id: "waber-falls", type: "idea", icon: "🌊", place: "Besondere Wunschoption", title: "Waber Falls",
    text: "Eine komplette Tagesexpedition zu den 27 Meter hohen Wasserfällen – eindrucksvoll, aber noch nicht fest eingeplant.",
    facts: ["9,2 km paddeln", "7,2 km wandern", "349 Hm", "6–8 Std."],
    warning: "Die Waber-Tour ist keine Kanueinführung. Nur mit Guide oder nach vorheriger Einführung, bei stabiler Wetterlage und nach ausdrücklicher Empfehlung der Mitarbeiter vor Ort. Andernfalls bleibt es bei einer kurzen Kanutour in Ufernähe.",
    links: [{ label: "Parks Canada", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/nautique-nautical/waber" }, { label: "Höhenprofil & Wege", url: "https://parks.canada.ca/pn-np/qc/mauricie/activ/sentiers-trails" }]
  }
];

const tabs = document.querySelector("#destination-tabs");
const routeList = document.querySelector("#route-list");
const ideaGrid = document.querySelector("#idea-grid");
const dialog = document.querySelector("#details-dialog");
const dialogContent = document.querySelector("#dialog-content");
let activeDestination = "all";

function renderTabs() {
  tabs.innerHTML = destinations.map((d) => `<button role="tab" aria-selected="${d.id === activeDestination}" class="${d.id === activeDestination ? "active" : ""}" data-destination="${d.id}">${d.label}${d.dates ? `<small> · ${d.dates}</small>` : ""}</button>`).join("");
}

function renderRoute() {
  const items = activeDestination === "all" ? route : route.filter((item) => item.destination === activeDestination);
  routeList.innerHTML = items.map((item) => `
    <article class="route-card ${item.type}">
      <div class="date">${item.date}</div>
      <div>
        <h3>${item.title}</h3><p>${item.text}</p>
        <div class="meta">${item.tags.map((tag, index) => `<span class="chip ${item.confirmed && index === 0 ? "confirmed" : ""}">${tag}</span>`).join("")}</div>
      </div>
      <button class="open-details" data-details="${item.id}" aria-label="Details zu ${item.title}">→</button>
    </article>`).join("");
}

function renderIdeas(filter = "all") {
  const filtered = filter === "all" ? ideas : ideas.filter((idea) => idea.type === filter);
  ideaGrid.innerHTML = filtered.map((idea) => {
    const selected = localStorage.getItem(`canada-vote-${idea.id}`) === "1";
    const facts = idea.facts ? `<div class="idea-facts">${idea.facts.map((fact) => `<span>${fact}</span>`).join("")}</div>` : "";
    const warning = idea.warning ? `<aside class="safety-note"><strong>Sicherheitshinweis</strong>${idea.warning}</aside>` : "";
    const links = idea.links ? `<div class="source-links">${idea.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>`).join("")}</div>` : "";
    return `<article class="idea-card ${idea.type} ${idea.warning ? "featured-option" : ""}"><span class="idea-icon">${idea.icon}</span><h3>${idea.title}</h3><p>${idea.text}</p>${facts}${warning}${links}<footer><span class="status-label">${idea.type === "booked" ? "Fest gebucht" : idea.place}</span><button class="vote ${selected ? "selected" : ""}" data-vote="${idea.id}" aria-pressed="${selected}">${selected ? "♥ Interessiert" : "♡ Interesse"}</button></footer></article>`;
  }).join("");
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-destination]");
  if (!button) return;
  activeDestination = button.dataset.destination;
  renderTabs(); renderRoute();
});

routeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (!button) return;
  const item = route.find((entry) => entry.id === button.dataset.details);
  dialogContent.innerHTML = `<p class="eyebrow">${item.date}</p><h2>${item.title}</h2><p>${item.text}</p><ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`;
  dialog.showModal();
});

document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]"); if (!button) return;
  document.querySelectorAll(".filter").forEach((el) => el.classList.toggle("active", el === button));
  renderIdeas(button.dataset.filter);
});

ideaGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-vote]"); if (!button) return;
  const key = `canada-vote-${button.dataset.vote}`;
  const selected = localStorage.getItem(key) === "1";
  localStorage.setItem(key, selected ? "0" : "1");
  renderIdeas(document.querySelector(".filter.active").dataset.filter);
});

renderTabs(); renderRoute(); renderIdeas();
