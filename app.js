const destinations = [
  { id: "all", label: "Gesamte Reise" },
  { id: "montreal", label: "Montréal", dates: "17.–20.09." },
  { id: "mauricie", label: "Nature Nature", dates: "20.–23.09." },
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
    text: "Ankunftstag und zwei volle Tage. In der bisherigen Buchungsübersicht als „The Laurentians“ bezeichnet.", tags: ["2 volle Tage", "Selbstversorger"],
    details: ["Unterkunft: Nature Nature", "Koordinaten: 46.7256101, -72.7707375", "Dienstag und Mittwoch für Aktivitäten vor Ort", "Donnerstag: längerer Wechsel nach Sainte-Rose-du-Nord"]
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
  { id: "transfer-stop", type: "idea", icon: "🛒", place: "Montréal → Nature Nature", title: "Fahrt mit Einkauf aufwerten", text: "Ein sinnvoller Stopp für Lebensmittel oder ein Abendessen soll ohne großen Umweg auf die Route passen." }
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
    return `<article class="idea-card ${idea.type}"><span class="idea-icon">${idea.icon}</span><h3>${idea.title}</h3><p>${idea.text}</p><footer><span class="status-label">${idea.type === "booked" ? "Fest gebucht" : idea.place}</span><button class="vote ${selected ? "selected" : ""}" data-vote="${idea.id}" aria-pressed="${selected}">${selected ? "♥ Interessiert" : "♡ Interesse"}</button></footer></article>`;
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
