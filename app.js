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
    text: "Transfer zurück zum Flughafen, Übernahme des Ford Expedition und Fahrt zur Unterkunft.", tags: ["ca. 195 km", "ca. 2 Std. 27 Min.", "Einkauf einplanen"],
    details: ["Uville Hotel–Flughafen: ca. 19 km / 19 Min.", "Ford Expedition am Flughafen übernehmen", "Fahrt zu Nature Nature", "Check-in voraussichtlich gegen 16 Uhr", "Als Selbstversorger Einkauf oder Abendessen berücksichtigen"]
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
  { id: "montreal-ideas", destination: "montreal", type: "idea", icon: "🏙️", place: "Montréal", title: "Zwei volle Tage gestalten", text: "Stadtviertel, Kulinarik und mögliche Tageskombinationen sammeln wir im Montréal-Chat." },
  { id: "transfer-stop", destination: "mauricie", type: "idea", icon: "🛒", place: "Montréal → Nature Nature", title: "Fahrt mit Einkauf aufwerten", text: "Ein sinnvoller Stopp für Lebensmittel oder ein Abendessen soll ohne großen Umweg auf die Route passen." },
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
  }
];

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
  if (comparison) comparison.hidden = activeDestination !== "mauricie";
}

function formatCommentDate(value) {
  try {
    return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
  } catch { return ""; }
}

function renderStars(value, interactive, profileId) {
  return `<div class="stars" role="${interactive ? "radiogroup" : "img"}" aria-label="${value ? `${value} von 5 Sternen` : "Noch keine Bewertung"}">${[1,2,3,4,5].map((star) => interactive
    ? `<button type="button" data-rating="${star}" aria-label="${star} Stern${star === 1 ? "" : "e"}" aria-pressed="${value === star}" class="${star <= value ? "filled" : ""}">★</button>`
    : `<span class="${star <= value ? "filled" : ""}" aria-hidden="true">★</span>`).join("")}</div>`;
}

function renderIdeaCommunity(ideaId, data) {
  const profiles = data.profiles || {};
  const canDeleteIdea = data.idea?.author === data.currentProfile;
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

  return `<section class="community-panel">
    <div class="community-head"><div><p class="eyebrow">Eure Einschätzung</p><h2>Vier Stimmen, eine Entscheidung</h2></div><div class="average-rating"><strong>${data.average ? `★ ${String(data.average).replace(".", ",")}` : "☆ –"}</strong><small>${data.ratingCount || 0} von 4 bewertet</small></div></div>
    <div class="rating-grid">${ratingRows}</div>
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
    const attachment = idea.attachment ? `<div class="source-links attachment-link"><a href="idea-file.php?idea=${encodeURIComponent(idea.id)}" target="_blank" rel="noopener">Anhang · ${escapeHtml(idea.attachment.name)} ↗</a></div>` : "";
    const author = idea.author && profileDirectory[idea.author] ? `<div class="idea-author"><i class="avatar ${profileDirectory[idea.author].avatar}"></i><span><small>Vorgeschlagen von</small><strong>${escapeHtml(profileDirectory[idea.author].name)}</strong></span></div>` : "";
    root.innerHTML = `<article class="idea-detail-card"><div class="idea-detail-icon">${idea.icon}</div><p class="eyebrow">${escapeHtml(idea.place || destination?.sectionTitle || "Reiseidee")}</p><h1>${escapeHtml(idea.title)}</h1>${author}<p class="idea-detail-copy">${escapeHtml(idea.text)}</p>${facts}${warning}${links}${attachment}</article><div id="idea-community" class="community-loading">Bewertungen und Kommentare werden geladen …</div>`;
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
const checklistStorageKey = "canada-2027-checklists-v1";
const checklistDefaults = {
  al: {
    title: "Andrea & Lars",
    avatars: '<i class="avatar avatar-andrea"></i><i class="avatar avatar-lars"></i>',
    lists: [
      { id: "al-entry", title: "Einreise & Dokumente", icon: "🛂", items: [
        { id: "al-eta", text: "eTA für beide beantragen", done: false },
        { id: "al-passports", text: "Reisepässe und Gültigkeit prüfen", done: false },
        { id: "al-insurance", text: "Auslandsreisekrankenversicherung prüfen", done: false },
        { id: "al-licence", text: "Führerschein und Mietwagenunterlagen klären", done: false }
      ]},
      { id: "al-flight", title: "Flüge & Anreise", icon: "✈️", items: [
        { id: "al-fra", text: "Anreise Wuppertal/Langen nach Frankfurt festlegen", done: false },
        { id: "al-flights", text: "Flüge Frankfurt–Montréal buchen", done: false },
        { id: "al-luggage", text: "Gepäck, Sitzplätze und Transfer prüfen", done: false }
      ]},
      { id: "al-pack", title: "Packliste Indian Summer", icon: "🎒", items: [
        { id: "al-layers", text: "Wärmende Schichten und Regenjacken", done: false },
        { id: "al-shoes", text: "Wanderschuhe und Tagesrucksäcke", done: false },
        { id: "al-adapter", text: "Kanada-Adapter und Ladegeräte", done: false }
      ]}
    ]
  },
  cm: {
    title: "Christina & Manfred",
    avatars: '<i class="avatar avatar-christina"></i><i class="avatar avatar-manfred"></i>',
    lists: [
      { id: "cm-entry", title: "Einreise & Dokumente", icon: "🛂", items: [
        { id: "cm-eta", text: "eTA für beide beantragen", done: false },
        { id: "cm-passports", text: "Reisepässe und Gültigkeit prüfen", done: false },
        { id: "cm-insurance", text: "Auslandsreisekrankenversicherung prüfen", done: false },
        { id: "cm-health", text: "Medikamente und ärztliche Unterlagen vorbereiten", done: false }
      ]},
      { id: "cm-health-list", title: "Gesundheit & Reiseapotheke", icon: "🩹", items: [
        { id: "cm-vaccines", text: "Standardimpfungen prüfen", done: false },
        { id: "cm-medicine", text: "Persönliche Medikamente ausreichend einpacken", done: false },
        { id: "cm-pharmacy", text: "Kleine Reiseapotheke zusammenstellen", done: false }
      ]},
      { id: "cm-pack", title: "Packliste Indian Summer", icon: "🧳", items: [
        { id: "cm-layers", text: "Zwiebellook für kühle Morgen und Abende", done: false },
        { id: "cm-shoes", text: "Wanderschuhe und bequeme Stadtschuhe", done: false },
        { id: "cm-adapter", text: "Kanada-Adapter und Ladegeräte", done: false }
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
      checklistData = payload.data;
      checklistUpdatedAt = payload.updatedAt;
      localStorage.setItem(checklistStorageKey, JSON.stringify(checklistData));
      renderChecklists();
    } else {
      setSyncStatus("Vorlage bereit · beim ersten Ändern entsperren", "syncing");
    }
    if (!silent && payload.data?.al && payload.data?.cm) setSyncStatus("Gemeinsam synchronisiert", "ok");
  } catch {
    try {
      const backup = JSON.parse(localStorage.getItem(checklistStorageKey));
      if (backup?.al && backup?.cm) checklistData = backup;
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
  const choices = Object.entries(checklistData).map(([coupleId, couple]) => {
    const allItems = couple.lists.flatMap((list) => list.items);
    const done = allItems.filter((item) => item.done).length;
    const progress = allItems.length ? Math.round(done / allItems.length * 100) : 0;
    return `<button class="checklist-choice ${activeChecklistCouple === coupleId ? "active" : ""}" type="button" data-toggle-couple="${coupleId}" aria-expanded="${activeChecklistCouple === coupleId}">
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
      <header class="couple-head"><div class="couple-avatars">${checklistDefaults[coupleId].avatars}</div><div><p>Unsere Vorbereitung</p><h3>${escapeHtml(couple.title)}</h3></div><span class="progress-number">${progress}%</span></header>
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
