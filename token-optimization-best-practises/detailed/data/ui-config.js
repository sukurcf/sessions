/**
 * ui-config.js — Application configuration & narrative content.
 *
 * Drives navigation, the landing page, the interactive diagram, and the
 * extensibility section. Keeping this declarative means the app's structure
 * and copy can change without touching view logic.
 */
window.TO = window.TO || {};
window.TO.data = window.TO.data || {};

window.TO.data.uiConfig = {
  app: {
    name: "Token-optimizer",
    tagline: "Understand, visualize, and cost token optimization for AI workloads.",
    defaultTheme: "light",          // 'dark' | 'light' — user toggle persists to localStorage
    defaultView: "home"
  },

  // Primary navigation. `view` maps to a registered view module.
  nav: [
    { view: "home",          label: "Home" },
    { view: "scenarios",     label: "Context Rot Scenarios" },
    { view: "calculator",    label: "Calculator" },
    { view: "playbook",      label: "Playbook" }
  ],

  hero: {
    kicker: "Usage-Based Billing · the token era",
    title: "Every token is a line item.",
    titleAccent: "Make each one earn its place.",
    subtitle: "AI coding moved from per-seat to per-token billing. Token-optimizer turns that shift into something you can see, compare, and act on — scenarios, an interactive framework, a pricing calculator, and a model-selection playbook.",
    ctas: [
      { label: "Explore scenarios",  view: "scenarios",  primary: true },
      { label: "Compare model cost", view: "calculator", primary: false },
      { label: "Run the playbook",   view: "playbook",   primary: false }
    ]
  },

  // Headline outcome metrics — animated count-up on the landing page.
  stats: [
    { value: 44,  suffix: "%",  label: "Token reduction at full adoption", note: "~37–44% with no measured productivity loss" },
    { value: 1.79, suffix: "×", label: "Effective entitlement multiplier", note: "Same license, ~1.6–1.8× useful work", decimals: 2 },
    { value: 8,   suffix: "×",  label: "Output vs input cost ratio",       note: "Output is the expensive lane — 4–8×" },
    { value: 90,  suffix: "%",  label: "Cheaper for cached tokens",        note: "A stable prefix bills at ~10% of input" }
  ],

  // The three token types — used by the landing explainer.
  tokenTypes: [
    { id: "input",  name: "Input",  cost: "Standard rate",          behavior: "Billed every turn — files, prompt, history, tool schemas, system prompt.", lever: "Compress · scope context" },
    { id: "cached", name: "Cached", cost: "~10% of input",          behavior: "A byte-identical prefix reused across calls earns a ~90% discount.",        lever: "Reuse · keep the prefix stable" },
    { id: "output", name: "Output", cost: "Highest — 4–8× input",   behavior: "Visible reply plus the invisible reasoning trace.",                          lever: "Constrain · right-size reasoning" }
  ],

  // Scenario filter categories. `all` is implicit and added by the view.
  categories: [
    "Context", "Prompt", "Output", "Model", "Caching", "Sessions", "Reasoning", "Tools & Agents", "Governance"
  ],

  // Stage 1: diagnosis — the six cost drivers, ranked by impact.
  // `scenarios` cross-links into the scenario library — click a driver to see
  // the scenarios that address it.
  costDrivers: [
    { rank: 1, name: "Context size",     impact: "30–50% of spend", detail: "Open files, indexing, and history are sent as input every turn.",
      scenarios: ["context-bloat", "prompt-compression", "structured-phrasing", "language-tax", "instruction-caching", "agents-md-hygiene"] },
    { rank: 2, name: "Model selection",  impact: "5–8× spread",     detail: "Frontier models cost 10×+ per output token vs lightweight tiers.",
      scenarios: ["model-routing", "workflow-modes"] },
    { rank: 3, name: "Reasoning effort", impact: "3–5× output",     detail: "Reasoning models bill the invisible thinking trace as output.",
      scenarios: ["reasoning-depth", "output-control"] },
    { rank: 4, name: "Agent-mode loops", impact: "10–40× multiplier", detail: "A multi-step agent run makes 10–40 model calls per request.",
      scenarios: ["subagent-compression", "workflow-modes", "governance-budgets"] },
    { rank: 5, name: "MCP tool overhead", impact: "Material",       detail: "Tool schemas re-inject on every call; cost compounds past ~20 tools.",
      scenarios: ["mcp-schema-tax", "governance-budgets"] },
    { rank: 6, name: "Session length",   impact: "2–5× by turn 30", detail: "History grows linearly; uncached portions compound.",
      scenarios: ["session-lifecycle", "workflow-modes"] }
  ],

  // Stage 2: the six pillars. `scenarios` cross-links into the scenario library.
  pillars: [
    {
      id: "context", num: "01", name: "Context discipline", color: "#22d3ee",
      principle: "Send only what matters.",
      lever: "Files, mentions, indexing scope",
      contribution: "10–14%",
      detail: "Find the smallest set of high-signal tokens that maximize the likelihood of the desired outcome. Just-in-time retrieval beats blanket retrieval — and beats context rot.",
      scenarios: ["context-bloat", "prompt-compression", "structured-phrasing", "language-tax"]
    },
    {
      id: "routing", num: "02", name: "Intelligent model routing", color: "#818cf8",
      principle: "Match capability to task.",
      lever: "Auto Mode, model-picker policy",
      contribution: "10–14%",
      detail: "Default to Auto Mode org-wide; manual frontier selection requires justification. Manual frontier-only spend runs 5–8× higher than necessary.",
      scenarios: ["model-routing", "workflow-modes"]
    },
    {
      id: "instructions", num: "03", name: "Instruction engineering", color: "#34d399",
      principle: "Pay once for what you'd otherwise pay every turn.",
      lever: "Instructions, Skills, cache stability",
      contribution: "7–10%",
      detail: "Centralize recurring context so a stable prefix earns the ~90% cached-token discount. Volatile, ad-hoc context never caches and is paid in full every turn.",
      scenarios: ["instruction-caching", "agents-md-hygiene", "structured-phrasing"]
    },
    {
      id: "reasoning", num: "04", name: "Reasoning depth control", color: "#fbbf24",
      principle: "Don't pay for thinking the task doesn't need.",
      lever: "Effort picker, decomposition",
      contribution: "5–8%",
      detail: "Reasoning models bill the thinking trace as output — the most expensive token type. Default to MEDIUM; reserve HIGH/MAX for genuinely hard work.",
      scenarios: ["reasoning-depth", "output-control"]
    },
    {
      id: "tools", num: "05", name: "Agent & tool governance", color: "#f472b6",
      principle: "Enable, don't accumulate.",
      lever: "Agent scope, MCP audit, subagents",
      contribution: "3–5%",
      detail: "Agentic workflows multiply consumption 15–40×. Trim unused tools, scope agent mode to genuine multi-step work, and use subagents as a compression boundary.",
      scenarios: ["mcp-schema-tax", "subagent-compression", "governance-budgets"]
    },
    {
      id: "sessions", num: "06", name: "Session lifecycle", color: "#fb923c",
      principle: "Reset, don't compound.",
      lever: "Compaction, fresh threads, archiving",
      contribution: "5–8%",
      detail: "Context compounds across turns. Even with caching the uncached tail grows linearly — by turn 30 an unmanaged session can be 5× the input cost of a fresh one.",
      scenarios: ["session-lifecycle", "workflow-modes"]
    }
  ],

  // Stage 3: outcomes.
  outcomes: [
    { metric: "~37–44%", label: "Total token reduction", note: "No measurable productivity loss" },
    { metric: "10–15%",  label: "Overage ratio",          note: "Down from 30%+ uncontrolled baselines" },
    { metric: "1.58–1.79×", label: "Entitlement multiplier", note: "Same license, more useful work" }
  ],

  // ---- Extensibility section ---------------------------------------------
  extensibility: {
    intro: "Token-optimizer is data-driven by design. Scenarios, pricing, the playbook, and diagram content all live in plain declarative files — the UI layer reads them, it never hard-codes them.",
    dataFiles: [
      { file: "data/scenarios.js", purpose: "Scenario library", howTo: "Append a scenario object. It appears in the gallery, becomes filterable, and links into any pillars it declares." },
      { file: "data/pricing.js",   purpose: "Model rate card",  howTo: "Edit a rate, or append a model object. The calculator and playbook pick it up with zero code changes." },
      { file: "data/playbook.js",  purpose: "Guided questions", howTo: "Add a question or tune answer weights and strategy tags. The recommendation engine re-scores automatically." },
      { file: "data/ui-config.js", purpose: "Structure & copy", howTo: "Change navigation, landing copy, categories, or the framework's pillars and cost drivers." }
    ],
    principles: [
      { name: "Separation of concerns", detail: "Data files hold content; core/ holds plumbing; views/ holds rendering. Each layer changes independently." },
      { name: "Single responsibility",  detail: "Every view module renders exactly one section and owns nothing else." },
      { name: "Open for extension",     detail: "New scenarios, models, and questions are added by appending data — existing code is not modified." },
      { name: "Data-driven UI",         detail: "The interface is a pure function of the data files. No content is hard-coded in markup or logic." },
      { name: "No build step",          detail: "Plain HTML, CSS, and ES5-compatible JS. Open index.html or host the folder as-is — nothing to compile." }
    ]
  },

  footer: {
    note: "Token-optimizer · a static, data-driven showcase. Figures are illustrative — synthesised from the cited GitHub Copilot and Anthropic source material. Measure your own baseline before quoting numbers.",
    inspiredBy: { label: "ashy-dune-0b4215a0f.7.azurestaticapps.net", url: "https://ashy-dune-0b4215a0f.7.azurestaticapps.net/" },
    sources: [
      { label: "GitHub Copilot — Models & pricing", url: "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing" }
    ]
  }
};
