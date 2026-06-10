/* German (de). Mirrors the English key set. */
window.TO = window.TO || {};
window.TO.i18n.register("de", {
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · Token-Optimierung für KI-Workloads verstehen und kalkulieren",
    tagline: "Token-Optimierung für KI-Workloads verstehen, visualisieren und kalkulieren.",
    homeAria: "{{name}} – Startseite",
    toggleTheme: "Farbschema umschalten",
    toggleNav: "Navigation ein/ausblenden",
    language: "Sprache",
    backToQuickGuide: "Zurück zum Schnellüberblick",
    primaryNav: "Hauptnavigation"
  },
  nav: {
    home: "Start",
    scenarios: "Context-Rot-Szenarien",
    diagram: "Framework",
    calculator: "Rechner",
    playbook: "Playbook",
    extensibility: "Erweiterbarkeit"
  },
  footer: {
    note: "Token-optimizer · eine statische, datengetriebene Demo. Die Zahlen sind illustrativ – synthetisiert aus dem zitierten Material von GitHub Copilot und Anthropic. Messen Sie Ihre eigene Basis, bevor Sie Zahlen zitieren.",
    disclaimer: "Dieser Inhalt wurde von Microsoft Asia Developer GBB erstellt und basiert auf der öffentlich verfügbaren GitHub-Copilot-Dokumentation. Er wurde nicht für alle unterstützten Konfigurationen validiert. Obwohl sich das Team kontinuierlich bemüht, mit der neuesten Dokumentation übereinzustimmen, wird Benutzern empfohlen, die Details vor jeder Entscheidung anhand der offiziellen GitHub-Dokumentation zu überprüfen."
  },
  hero: {
    kicker: "Nutzungsbasierte Abrechnung · die Token-Ära",
    title: "Jedes Token ist ein Posten auf der Rechnung.",
    titleAccent: "Sorgen Sie dafür, dass sich jedes lohnt.",
    subtitle: "KI-Coding ist von Lizenz- auf Token-Abrechnung umgestiegen. Token-optimizer macht diesen Wandel sichtbar, vergleichbar und handhabbar – Szenarien, ein interaktives Framework, ein Preisrechner und ein Playbook zur Modellwahl.",
    cta: {
      scenarios: "Szenarien erkunden",
      calculator: "Modellkosten vergleichen",
      playbook: "Playbook starten"
    }
  },
  home: {
    tokenEconomy: "Token-Ökonomie",
    tokenTypesTitle: "Drei Token-Typen, drei Kostenmuster",
    tokenTypesLead: "Jede abgerechnete Runde hat drei Spuren. Jede reagiert auf einen anderen Hebel – greifen Sie die Spur an, die Ihre Rechnung dominiert.",
    whatsInside: "Was drin ist",
    waysTitle: "Token-Optimierung erkunden",
    pipelineAria: "Animiertes Diagramm: viele Eingabe-Tokens fließen durch einen Optimierer in weniger, hellere Ausgabe-Tokens",
    feature: {
      scenarios: { title: "Szenario-Explorer", body: "Context-Rot-Szenarien – Probleme und Erkenntnisse identifizieren.", open: "Szenario-Explorer öffnen →" },
      diagram:   { title: "Das Framework",     body: "Eine interaktive Karte: sechs Kostentreiber, sechs Säulen der Token-Disziplin, messbare Ergebnisse.", open: "Framework öffnen →" },
      calculator:{ title: "Kostenrechner",     body: "Bewerten Sie eine Runde über jedes Modell, vergleichen Sie nebeneinander und sehen Sie den Effekt auf KI-Credits.", open: "Rechner öffnen →" },
      playbook:  { title: "Modell-Playbook",   body: "Beantworten Sie sechs Fragen; erhalten Sie eine Modellstrategie und die passenden Optimierungstechniken.", open: "Playbook öffnen →" }
    }
  },
  stats: {
    label0: "Token-Reduktion bei voller Einführung",
    note0:  "~37–44 % ohne messbaren Produktivitätsverlust",
    label1: "Effektiver Lizenz-Multiplikator",
    note1:  "Gleiche Lizenz, ~1,6–1,8× nützliche Arbeit",
    label2: "Verhältnis Ausgabe- zu Eingabekosten",
    note2:  "Die Ausgabe ist die teure Spur – 4–8×",
    label3: "Günstiger für gecachte Tokens",
    note3:  "Ein stabiler Prefix wird mit ~10 % des Inputs abgerechnet"
  },
  tokenTypes: {
    input:  { name: "Eingabe", cost: "Standardrate",          behavior: "Jede Runde abgerechnet – Dateien, Prompt, Verlauf, Tool-Schemas, System-Prompt.", lever: "Komprimieren · Kontext eingrenzen" },
    cached: { name: "Cache",   cost: "~10 % der Eingabe",      behavior: "Ein byte-identischer Prefix, der über Aufrufe wiederverwendet wird, erhält ~90 % Rabatt.", lever: "Wiederverwenden · Prefix stabil halten" },
    output: { name: "Ausgabe", cost: "Am höchsten – 4–8× Eingabe", behavior: "Sichtbare Antwort plus unsichtbare Denk-Spur.", lever: "Beschränken · Reasoning richtig dosieren" }
  },
  leverWord: "Hebel",
  diagram: {
    stage1Eyebrow: "Stufe 1 · Diagnose",
    stage1Title:   "Was Ihre Token-Ausgaben wirklich treibt",
    stage1Lead:    "Sechs Kostentreiber, nach Wirkung sortiert. Fünf von sechs sind Engineering-Entscheidungen – deshalb ist dies ein lösbares Problem.",
    stage2Eyebrow: "Stufe 2 · Das Framework",
    stage2Title:   "Sechs Säulen der Token-Disziplin",
    stage2Lead:    "Wählen Sie eine Säule, um Prinzip, Hebel und Szenarien zu sehen. Die Säulen wirken zusammen – sie addieren sich nicht einfach.",
    stage3Eyebrow: "Stufe 3 · Ergebnisse",
    stage3Title:   "Was eine disziplinierte Einführung liefert",
    emptyPanel:    "Wählen Sie eine Säule auf der Karte, um Prinzip, Hebel und Szenarien zu erkunden.",
    primaryLever:  "Primärer Hebel",
    contribution:  "Beitrag zur Gesamtreduktion",
    scenariosHere: "Szenarien dieser Säule",
    hubAria:       "Interaktive Karte der sechs Säulen der Token-Disziplin"
  },
  scenarios: {
    eyebrow: "Szenario-Explorer",
    title:   "Wo Tokens verbrannt werden – und wie man es stoppt",
    lead:    "Jedes Szenario verbindet das Problem mit der Optimierungstechnik, einem Vorher/Nachher-Muster und der Business-Erkenntnis.",
    search:  "Szenarien suchen…",
    searchAria: "Szenarien suchen",
    filterAria: "Szenarien nach Kategorie filtern",
    all:     "Alle",
    empty:   "Keine Szenarien passen zu diesem Filter.",
    back:    "← Alle Szenarien",
    open:    "Details →",
    problem: "Das Problem",
    whyHigh: "Warum der Token-Verbrauch hoch ist",
    techniques: "Optimierungstechniken",
    impact:  "Erwartete Wirkung",
    takeaway:"Business-Erkenntnis",
    recommendation: "Empfehlung",
    modelFit:"Passendes Modell",
    pillars: "Framework-Säulen",
    before:  "Vorher",
    after:   "Nachher",
    expensive:"Teuer",
    efficient:"Effizient"
  },
  calc: {
    eyebrow: "Kosten- und Preisrechner",
    title:   "Eine Runde bewerten. Jedes Modell vergleichen.",
    lead:    "Geben Sie eine Token-Mischung ein, wählen Sie zu vergleichende Modelle und sehen Sie Kosten, KI-Credits und wieviel des Monatsbudgets eine Session verbraucht.",
    tokenMix: "Token-Mischung",
    quickFill:"Schnellauswahl",
    inputTokens: "Eingabe-Tokens",
    cachedTokens:"Cache-Tokens",
    outputTokens:"Ausgabe-Tokens",
    sessionTurns:"Runden der Session",
    reasoningEffort:"Reasoning-Aufwand",
    plan: "Plan",
    autoLabel:"Auto-Mode-Rabatt",
    autoHint: "~10 % Rabatt auf den Token-Multiplikator",
    modelsToCompare:"Modelle zum Vergleich",
    included:"enthalten",
    presets: {
      qa: "Schnelle Frage",
      refactor: "Tägliches Refactoring",
      agent: "Agent-Aufgabe",
      session: "Lange Session"
    }
  },
  playbook: {
    eyebrow: "Token-Optimierungs-Playbook",
    title:   "Zehn Hebel, um pro nützlichem Token weniger auszugeben",
    intro:   "Zehn Hebel aus dem Token-Optimierungs-Playbook, um jedes Token in nützliche Arbeit zu verwandeln. Durchstöbern Sie die Karten für die Kernidee; öffnen Sie einen Hebel für die Tiefenanalyse, Tabellen und Workflow-Muster.",
    explore: "Hebel erkunden ↗",
    openAria:"Hebel {{num}} öffnen: {{name}}",
    backToLevers: "Zurück zu den Hebeln",
    backToTen:    "← Zurück zu den zehn Hebeln",
    counter: "Hebel {{num}} von 10",
    heroAlt: "{{name}} – Bild aus dem Quell-Playbook"
  },
  lever: {
    "prompt-compression": {
      name: "Prompt-Kompression",
      tagline: "Entfernen Sie Worte ohne Informationsgehalt.",
      summary: "Technische Begriffe exakt beibehalten. Höflichkeitsfüller streichen. Eine höfliche 40-Token-Anfrage wird zu einer 10-Token-Anweisung im 'Caveman'-Stil – gleiche Bedeutung, ~75 % weniger Kosten. Wählen Sie die Kompressionsstufe je nach Risiko.",
      stat0: "max. Eingabe-Ersparnis",
      stat1: "Kompressionsstufen"
    },
    "choose-language": {
      name: "Die richtige Sprache wählen",
      tagline: "Englisch ist fast immer der günstigste Tokenizer.",
      summary: "Intuitiv wäre Chinesisch günstiger, weil jedes Zeichen mehr Bedeutung trägt – aber Komatsuzakis Heatmap mit 6 großen Modellen × 9 Sprachen zeigt: Englisch ist in den meisten Fällen am günstigsten. Tokenizer schwanken stark: Gemini und Qwen sind am effizientesten für Nicht-Englisch; Anthropic und Kimi sind am teuersten.",
      stat0: "Englisch-Basis",
      stat1: "Chinesisch auf chinesischen Modellen"
    },
    "manage-context": {
      name: "Kontext managen",
      tagline: "Regeln in drei Schichten teilen; den stabilen Prefix cachen.",
      summary: "Eine riesige copilot-instructions-Datei wird jede Runde geladen. Teilen Sie sie in drei Schichten: immer aktive Regeln für Stil und Ausgabelimits; bedingte Regeln, die nur für passende Dateien laden (über applyTo); und bedarfsgesteuerte Regeln, die per Name aufgerufen werden. Halten Sie den cachefähigen Prefix stabil und starten Sie oft frische Chats.",
      stat0: "Kosten für gecachten Prefix",
      stat1: "Tokens nach 20 Runden"
    },
    "output-control": {
      name: "Ausgabesteuerung",
      tagline: "Eine kurze Regel, einmal bezahlt – für immer kurze Antworten.",
      summary: "Ausgabe kostet 4–8× mehr als Eingabe, je nach Modell. Ein einziger Satz in den System-Anweisungen begrenzt die Antwortlänge dauerhaft. Die Regeln sind kurz, die Ersparnis groß – und Sie schreiben sie nur einmal.",
      stat0: "Ausgabe vs Eingabe Kosten",
      stat1: "Ersparnis durch eine Regel"
    },
    "choose-mode": {
      name: "Den richtigen Modus wählen",
      tagline: "Ask, Plan, Agent – passen Sie den Modus an die Frage an.",
      summary: "Copilot hat drei Modi. Ask ist ein einzelner Aufruf für schnelle Recherchen. Plan ist ein einzelner Aufruf, um vor dem Bauen eine Lösung zu entwerfen. Agent sind 5–25 Aufrufe pro Aufgabe – nur für große Jobs. Der teuerste Fehler ist, Agent mit einem vagen Prompt zu starten.",
      stat0: "Agent vs Ask Kosten",
      stat1: "Agent-Tokens / Aufgabe"
    },
    "phased-workflow": {
      name: "Phasen, eigene Agents, Skills, Sub-Agents",
      tagline: "Wählen Sie den richtigen Container für die Arbeit.",
      summary: "Arbeiten Sie in Phasen (Recherche → Plan → Umsetzung) mit frischen Kontextfenstern dazwischen. Nutzen Sie eigene Agents, um eine Rolle festzulegen und Tools auszudünnen. Nutzen Sie Skills für lazy geladenen Kontext. Nutzen Sie Sub-Agents, um die Hauptsession schlank zu halten.",
      stat0: "Phasen pro Feature",
      stat1: "Kontextfenster je Phase"
    },
    "choose-model": {
      name: "Das richtige Modell wählen",
      tagline: "Modelle mischen. Mit dem großen planen, mit dem kleinen bauen.",
      summary: "Opus kostet auf GitHub Copilot ~1,7× so viel wie Sonnet. Über 30 Runden: nur Sonnet kostet 30 Einheiten, nur Opus 50, eine Mischstrategie landet bei ~22,8. Lassen Sie das teure Modell denken. Lassen Sie das günstige Modell tippen.",
      stat0: "Opus vs Sonnet",
      stat1: "Mix vs nur Sonnet"
    },
    "agents-file": {
      name: "Die AGENTS-Datei pflegen",
      tagline: "Tretminen, keine Enzyklopädien.",
      summary: "Viele Teams führen /init aus und committen die auto-generierte AGENTS-Datei. Eine ETH-Zürich-Studie über 47 Projekte zeigte das Gegenteil von Hilfe: Korrektheit fiel um 2 %, Token-Kosten stiegen um 20–23 %. Behalten Sie die Regeln, die der Agent nicht aus dem Code erraten kann; löschen Sie den Rest.",
      stat0: "Korrektheit (LLM-geschrieben)",
      stat1: "Token-Kosten (LLM-geschrieben)"
    },
    "clean-up-tools": {
      name: "Tools aufräumen",
      tagline: "Das Schema jedes Tools reist bei jedem Schritt mit.",
      summary: "MCP erlaubt Copilot, externe Tools zu nutzen – aber jedes aktivierte Tool schickt sein Schema an das Modell. Das Schema reist bei jedem Agent-Schritt mit. Mit 188 aktiven Tools verbrennt eine 30-Schritt-Aufgabe allein 330.000 Tokens für Schemas.",
      stat0: "Tools nach Audit",
      stat1: "Tokens gespart / Tag"
    },
    "usage-limits": {
      name: "Nutzungslimits & Überschreitungen",
      tagline: "Deckeln Sie die Rechnung, bevor die Rechnung Sie deckelt.",
      summary: "Der letzte Hebel betrifft keine Tokens – er betrifft den Zähler. Setzen Sie Überschreitungslimits, verstehen Sie, welche Aktionen aufs Kontingent zählen, und durchforsten Sie die Budget-Szenarien nach Mustern, die Teams unter der Grenze halten, ohne produktive Arbeit zu bremsen.",
      stat0: "gesundes Überschreitungs-Verhältnis",
      stat1: "ungeregelte Basis"
    }
  },
  ext: {
    eyebrow: "Auf Erweiterung ausgelegt",
    title:   "Zukunftsfähig per Konstruktion",
    intro:   "Token-optimizer ist von Haus aus datengetrieben. Szenarien, Preise, Playbook und Diagramminhalte leben in deklarativen Dateien – die UI-Schicht liest sie, sie codiert nichts hart.",
    archHead:"Die Architektur – drei Schichten",
    cfgHead: "Konfigurations- und Datendateien",
    snippetTitle: "Ein Szenario hinzufügen",
    snippetTag:   "keine Änderungen am View-Code",
    principlesHead: "Angewandte Engineering-Prinzipien"
  }
});
