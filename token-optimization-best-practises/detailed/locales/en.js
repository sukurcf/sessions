/* English (base) catalog. Other languages mirror this key set.
   Missing keys fall back to English; if a key is missing in English too,
   the key itself is shown. */
window.TO = window.TO || {};
window.TO.i18n.register("en", {

  /* ---- Site chrome ---- */
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · Understand & cost token optimization for AI workloads",
    tagline: "Understand, visualize, and cost token optimization for AI workloads.",
    homeAria: "{{name}} home",
    toggleTheme: "Toggle color theme",
    toggleNav: "Toggle navigation",
    language: "Language",
    backToQuickGuide: "Back to quick guide",
    primaryNav: "Primary"
  },
  nav: {
    home: "Home",
    scenarios: "Context Rot Scenarios",
    diagram: "Framework",
    calculator: "Calculator",
    playbook: "Playbook",
    extensibility: "Extensibility"
  },
  footer: {
    note: "Token-optimizer · a static, data-driven showcase. Figures are illustrative — synthesised from the cited GitHub Copilot and Anthropic source material. Measure your own baseline before quoting numbers.",
    disclaimer: "This content has been authored by Microsoft Asia Developer GBB and is based on publicly available GitHub Copilot documentation. It has not been validated across all supported configurations. While the team makes continuous efforts to stay aligned with the latest documentation, users are advised to verify details against official GitHub documentation before making any decisions."
  },

  /* ---- Home / hero ---- */
  hero: {
    kicker: "Usage-Based Billing · the token era",
    title: "Every token is a line item.",
    titleAccent: "Make each one earn its place.",
    subtitle: "AI coding moved from per-seat to per-token billing. Token-optimizer turns that shift into something you can see, compare, and act on — scenarios, an interactive framework, a pricing calculator, and a model-selection playbook.",
    cta: {
      scenarios: "Explore scenarios",
      calculator: "Compare model cost",
      playbook: "Run the playbook"
    }
  },
  home: {
    tokenEconomy: "Token economy",
    tokenTypesTitle: "Three token types, three cost behaviors",
    tokenTypesLead: "Every billed turn is composed of three lanes. Each responds to a different lever — attack the lane that dominates your bill.",
    whatsInside: "What's inside",
    waysTitle: "Explore token optimization",
    pipelineAria: "Animated diagram: many input tokens converging through an optimizer into fewer, brighter output tokens",
    feature: {
      scenarios: { title: "Context Rot Scenarios", body: "Context Rot scenarios — identify the problems and takeaways.", open: "Open context rot scenarios →" },
      diagram:   { title: "The Framework",     body: "An interactive map: six cost drivers, six pillars of token discipline, measurable outcomes.", open: "Open the framework →" },
      calculator:{ title: "Cost Calculator",   body: "Price a turn across every model, compare side by side, and see the AI-credit impact.", open: "Open the calculator →" },
      playbook:  { title: "Model Playbook",    body: "Answer six questions; get a model strategy and the optimization techniques that fit it.", open: "Open the playbook →" }
    }
  },
  stats: {
    label0: "Token reduction at full adoption",
    note0:  "~37–44% with no measured productivity loss",
    label1: "Effective entitlement multiplier",
    note1:  "Same license, ~1.6–1.8× useful work",
    label2: "Output vs input cost ratio",
    note2:  "Output is the expensive lane — 4–8×",
    label3: "Cheaper for cached tokens",
    note3:  "A stable prefix bills at ~10% of input"
  },
  tokenTypes: {
    input:  { name: "Input",  cost: "Standard rate",        behavior: "Billed every turn — files, prompt, history, tool schemas, system prompt.", lever: "Compress · scope context" },
    cached: { name: "Cached", cost: "~10% of input",        behavior: "A byte-identical prefix reused across calls earns a ~90% discount.", lever: "Reuse · keep the prefix stable" },
    output: { name: "Output", cost: "Highest — 4–8× input", behavior: "Visible reply plus the invisible reasoning trace.", lever: "Constrain · right-size reasoning" }
  },
  leverWord: "Lever",

  /* ---- Diagram view ---- */
  diagram: {
    stage1Eyebrow: "Stage 1 · Diagnosis",
    stage1Title:   "What actually drives your token spend",
    stage1Lead:    "Six cost drivers, ranked by impact. Five of the six are engineering choices — which is what makes this a winnable problem.",
    stage2Eyebrow: "Stage 2 · The framework",
    stage2Title:   "Six pillars of token discipline",
    stage2Lead:    "Select a pillar to see its principle, primary lever, and the scenarios it covers. The pillars compound — they do not simply stack.",
    stage3Eyebrow: "Stage 3 · Outcomes",
    stage3Title:   "What disciplined adoption delivers",
    emptyPanel:    "Select a pillar on the map to explore its principle, lever, and scenarios.",
    primaryLever:  "Primary lever",
    contribution:  "Contribution to total reduction",
    scenariosHere: "Scenarios in this pillar",
    hubAria:       "Interactive map of the six pillars of token discipline"
  },

  /* ---- Scenarios view ---- */
  scenarios: {
    diagnosisEyebrow: "Stage 1 · Diagnosis",
    diagnosisTitle:   "What actually drives your token spend",
    diagnosisLead:    "Six cost drivers, ranked by impact. Tap a driver to open the scenarios that address it.",
    driverViewCta:    "View scenarios →",
    driverAria:       "Open scenarios for {{name}}",
    relatedHeading:   "Scenarios that address this driver",
    eyebrow: "Scenario Explorer",
    title:   "Context Rot Scenarios",
    lead:    "Search every scenario, or filter by category. Tap any card to read the full breakdown.",
    search:  "Search scenarios…",
    searchAria: "Search scenarios",
    filterAria: "Filter scenarios by category",
    all:     "All",
    empty:   "No scenarios match that filter.",
    back:    "← All scenarios",
    open:    "Detail →",
    close:   "Close",
    problem: "The problem",
    whyHigh: "Why token usage is high",
    techniques: "Optimization techniques",
    impact:  "Expected impact",
    takeaway:"Business takeaway",
    recommendation: "Recommendation",
    modelFit:"Model fit",
    pillars: "Framework pillars",
    before:  "Before",
    after:   "After",
    expensive:"Expensive",
    efficient:"Efficient"
  },

  /* ---- Calculator view ---- */
  calc: {
    eyebrow: "Cost & Pricing Calculator",
    title:   "Price a turn. Compare every model.",
    lead:    "Enter a token mix, pick the models to compare, and see cost, AI credits, and how much of a monthly allowance one session consumes.",
    tokenMix: "Token mix",
    quickFill:"Quick fill",
    inputTokens: "Input tokens",
    cachedTokens:"Cached tokens",
    outputTokens:"Output tokens",
    sessionTurns:"Session turns",
    reasoningEffort:"Reasoning effort",
    plan: "Plan",
    autoLabel:"Auto Mode discount",
    autoHint: "~10% token-multiplier discount",
    modelsToCompare:"Models to compare",
    included:"included",
    presets: {
      qa: "Quick Q&A",
      refactor: "Daily refactor",
      agent: "Agent task",
      session: "Long session"
    }
  },

  /* ---- Playbook (levers) view ---- */
  playbook: {
    eyebrow: "Token-Optimization Playbook",
    title:   "Eleven levers for spending less per useful token",
    intro:   "Eleven levers, derived from the Token-Optimization Playbook, for turning every token into useful work. Browse the cards for the headline idea; open a lever for the deep dive, tables, and the workflow patterns behind it.",
    explore: "Explore lever ↗",
    openAria:"Open lever {{num}}: {{name}}",
    backToLevers: "Back to levers",
    backToTen:    "← Back to the eleven levers",
    counter: "Lever {{num}} of 11",
    heroAlt: "{{name}} — visual from the source playbook"
  },

  /* ---- Lever cards (10) — name / tagline / summary + two stats per card. */
  lever: {
    "prompt-compression": {
      name: "Prompt compression",
      tagline: "Remove the words that don't carry information.",
      summary: "Keep technical terms exactly the same. Drop the polite filler. A 40-token polite request becomes a 10-token 'caveman speak' instruction — same meaning, ~75% less cost. Choose the compression level that matches the risk.",
      stat0: "max input savings",
      stat1: "compression levels"
    },
    "choose-language": {
      name: "Choose the right language",
      tagline: "English is almost always the cheapest tokenizer.",
      summary: "Intuition says Chinese is cheaper because each character carries more meaning — but Komatsuzaki's heatmap of 6 big models × 9 languages shows English is the cheapest in most cases. Tokenizers vary widely: Gemini and Qwen are most efficient for non-English; Anthropic and Kimi are the most expensive.",
      stat0: "English baseline",
      stat1: "Chinese on Chinese models"
    },
    "manage-context": {
      name: "Manage your context",
      tagline: "Split rules into three layers; cache the stable prefix.",
      summary: "One giant copilot-instructions file is loaded every turn. Split it into three layers: always-on rules for style and output limits; conditional rules that only load for matching files (via applyTo); and on-demand rules invoked by name. Keep the cacheable prefix stable and start fresh chats often.",
      stat0: "cached-prefix cost",
      stat1: "tokens after 20 turns"
    },
    "output-control": {
      name: "Output control",
      tagline: "One short rule, paid once — short replies forever.",
      summary: "Output costs 4–8× input depending on the model. A single sentence in your system instructions caps reply length permanently. The rules are short, the savings are large — and you only have to write them once.",
      stat0: "output vs input cost",
      stat1: "savings from one rule"
    },
    "choose-mode": {
      name: "Choose the right mode",
      tagline: "Ask, Plan, Agent — match the mode to the question.",
      summary: "Copilot has three modes. Ask is a single call for quick lookups. Plan is a single call for designing a solution before you build. Agent is 5–25 calls in one task — for big jobs only. The most expensive mistake is starting Agent mode with a vague prompt.",
      stat0: "Agent vs Ask cost",
      stat1: "Agent tokens / task"
    },
    "phased-workflow": {
      name: "Phases, custom agents, skills, sub-agents",
      tagline: "Pick the right container for the work.",
      summary: "Work in phases (Research → Plan → Implement) with fresh context windows between them. Use custom agents to lock in a role and trim tools. Use skills for lazy-loaded context. Use sub-agents to keep the main session lean.",
      stat0: "phases per feature",
      stat1: "context window each"
    },
    "choose-model": {
      name: "Choose the right model",
      tagline: "Mix models. Plan with the big one, build with the small one.",
      summary: "Opus is ~1.7× the price of Sonnet on GitHub Copilot. Across 30 turns: all-Sonnet costs 30 units, all-Opus costs 50, but a mixed strategy lands at ~22.8. Let the expensive model think. Let the cheap model type.",
      stat0: "Opus vs Sonnet",
      stat1: "mixed vs all-Sonnet"
    },
    "agents-file": {
      name: "Manage your AGENTS file",
      tagline: "Landmines, not encyclopedias.",
      summary: "Many teams run /init and ship the auto-generated AGENTS file. An ETH-Zurich study of 47 projects showed the opposite of help: correctness fell 2%, token cost climbed 20–23%. Keep the rules the agent cannot guess from the code; delete everything else.",
      stat0: "correctness (LLM-written)",
      stat1: "token cost (LLM-written)"
    },
    "clean-up-tools": {
      name: "Clean up your tools",
      tagline: "Every tool's schema rides along on every step.",
      summary: "MCP lets Copilot use external tools — but every tool you turn on sends its schema to the model. The schema rides along on every single agent step. With 188 tools turned on, a 30-step task burns 330,000 tokens just on schemas.",
      stat0: "tools after audit",
      stat1: "tokens saved / day"
    },
    "usage-limits": {
      name: "Usage limits & overages",
      tagline: "Cap the bill before the bill caps you.",
      summary: "The last lever isn't about tokens — it's about the meter. Set overage caps, understand which actions count against entitlement, and review the budgeting scenarios for the patterns that keep teams below their cap without throttling productive work.",
      stat0: "healthy overage ratio",
      stat1: "uncontrolled baseline"
    }
  },

  /* ---- Extensibility view ---- */
  ext: {
    eyebrow: "Design for extensibility",
    title:   "Future-ready by construction",
    intro:   "Token-optimizer is data-driven by design. Scenarios, pricing, the playbook, and diagram content all live in plain declarative files — the UI layer reads them, it never hard-codes them.",
    archHead:"The architecture — three layers",
    cfgHead: "Configuration & data files",
    snippetTitle: "Adding a scenario",
    snippetTag:   "no view code changes",
    principlesHead: "Engineering principles applied"
  },

  /* ---- Quick Guide page (root index.html) ---- */
  quick: {
    docTitle: "Token & Context — A Visual Field Guide",
    hero: {
      tag:         "GitHub Copilot context, in five scenes",
      titleHtml:   "Every GitHub Copilot turn ships <span class=\"accent\">an invisible packet</span><br/>of context. Here's what's in it.",
      sub:         "A scroll-through guide. Three takeaways, no walls of text.",
      cta:         "Start scrolling for Quick Guide",
      ctaDetailed: "Detailed Scenario and Guide"
    },
    footer: {
      done:   "You're done. <strong style=\"color:var(--text)\">Now go save some tokens.</strong>",
      deeper: "Open Detailed Scenario and Guide"
    }
  }
});
