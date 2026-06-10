/**
 * scenarios.js — Token optimization scenario library.
 *
 * Each scenario is a self-contained, declarative record. The Scenario Explorer,
 * the interactive Diagram, and cross-links all render straight from this array.
 *
 * TO ADD A SCENARIO: append an object with the same shape. It will appear in the
 * gallery, be filterable by `category`, and link into any `pillars` it declares.
 *
 * Field reference:
 *   id            unique slug
 *   title         short scenario name
 *   category      one filter bucket (see TO.data.uiConfig.categories)
 *   pillars       array of pillar ids this scenario supports (see diagram)
 *   tagline       one-line hook
 *   problem       the situation in plain language
 *   whyHigh       array — why token usage is high here
 *   techniques    array of { name, detail } optimization levers
 *   impact        { headline, metricLabel, before, after, unit } — before/after drives the bar chart
 *   example       { type:'prompt'|'code'|'diff', label, before, after }
 *   recommendation practical guidance
 *   takeaway      business-facing one-liner
 *   modelFit      which model tier suits this scenario
 *   source        provenance label
 */
window.TO = window.TO || {};
window.TO.data = window.TO.data || {};

window.TO.data.scenarios = [
  {
    id: "context-bloat",
    title: "Context bloat from whole-file reads",
    category: "Context",
    pillars: ["context"],
    tagline: "“Look at src/” loads thousands of tokens to answer a one-function question.",
    problem: "Asking Copilot to scan a directory — or leaning on #codebase — pulls entire files into context. A single large file can consume 20k+ tokens, and every one of them is re-sent on every following turn.",
    whyHigh: [
      "Blanket retrieval loads everything that might be relevant, not what is.",
      "Every token loaded is paid again on every subsequent turn of the session.",
      "Context rot: oversized context lowers recall, so the model spends more output correcting course."
    ],
    techniques: [
      { name: "Just-in-time retrieval", detail: "Reference specific files with #-mentions instead of #codebase blanket search." },
      { name: "Scope to the symbol", detail: "Use #symbol or a line range (#file:Lx-Ly) when only one function matters." },
      { name: "Search, don't dump", detail: "Grep for a pattern and return only the file:line list — not the file bodies." }
    ],
    impact: { headline: "30–50% context-token reduction", metricLabel: "Context tokens / turn", before: 22000, after: 9000, unit: "tokens" },
    example: {
      type: "diff",
      label: "Scoping a refactor request",
      before: "Refactor the authentication flow #codebase",
      after: "Refactor the authentication flow #login.ts #session.ts #validateToken"
    },
    recommendation: "Adopt the escalation ladder: #selection → #file:Lx-Ly → #file → #codebase. 80% of prompts only need the first two.",
    takeaway: "The cheapest token is the one you never send — and it was probably hurting answer quality too.",
    modelFit: "Any tier. Disciplined scoping makes a Versatile model perform like a Powerful one.",
    source: "Pillar 01 · Context discipline"
  },
  {
    id: "prompt-compression",
    title: "Prompt compaction — drop the scaffolding",
    category: "Prompt",
    pillars: ["context"],
    tagline: "Polite filler carries zero information but is billed at full rate.",
    problem: "Conversational scaffolding — “Hey, could you please help me…”, “I think it might…” — inflates every prompt. The technical substance is a fraction of what you actually send.",
    whyHigh: [
      "Soft language adds tokens without adding instruction signal.",
      "Verbose prompts invite verbose answers — and output is billed 4–8× input.",
      "Input savings come from your prompts; output savings from system instructions — two separate dials."
    ],
    techniques: [
      { name: "Caveman-speak", detail: "Strip zero-information language; keep technical terms exact. 30–50% input saved with negligible quality impact." },
      { name: "Three compression tiers", detail: "Lite (15–25%), Full (30–50%, the default), Ultra (55–70%, risk of ambiguity)." },
      { name: "One task per prompt", detail: "Break big asks into steps so the model doesn't over-explore." }
    ],
    impact: { headline: "~75% fewer prompt tokens", metricLabel: "Prompt tokens", before: 40, after: 10, unit: "tokens" },
    example: {
      type: "prompt",
      label: "Same request, compressed",
      before: "Hey, could you please help me refactor this function? I think it might have some issues with how it handles authentication...",
      after: "Refactor function. Fix auth handling. Make efficient."
    },
    recommendation: "Default to the 'Full' tier for routine work. Reserve 'Ultra' for prompts where ambiguity is impossible.",
    takeaway: "Short is not the same as cheap — density is what counts. Spend tokens on substance, not courtesy.",
    modelFit: "All tiers benefit. Compression compounds with cheaper models.",
    source: "GBB Lever 1 · Prompt compression"
  },
  {
    id: "structured-phrasing",
    title: "Structured & code-native phrasing",
    category: "Prompt",
    pillars: ["context", "instructions"],
    tagline: "A type signature says in 12 tokens what prose takes 30 to say.",
    problem: "Describing a task in flowing natural language is the most expensive phrasing. The model understands a pseudo-code spec or type signature equally well — for a fraction of the tokens.",
    whyHigh: [
      "Prose repeats structure the model can infer from a schema.",
      "Imperative step-by-step instructions interfere; declarative rules stack cleanly.",
      "Loose phrasing forces the model to ask clarifying questions — extra round-trips."
    ],
    techniques: [
      { name: "Use structured input", detail: "Bullet specs, type signatures, pseudo-code — same meaning, ~36% fewer tokens." },
      { name: "Declarative over imperative", detail: "'All exported functions: JSDoc required' beats a list of steps." },
      { name: "'Like X but Y'", detail: "Anchor to an existing pattern instead of re-specifying from scratch." }
    ],
    impact: { headline: "~36% fewer tokens, same task", metricLabel: "Spec tokens", before: 55, after: 35, unit: "tokens" },
    example: {
      type: "code",
      label: "Describing an API endpoint",
      before: "I need you to create a REST API endpoint that accepts POST requests at /api/users. It should validate that the request body contains a name field and a valid email...",
      after: "POST /api/users\nValidate:\n  - name: string, required\n  - email: string, required, valid format\n400 on validation fail (include errors)\n201 on success (return created user)"
    },
    recommendation: "Pick the cheapest phrasing the model still understands perfectly — usually a type signature or a bullet spec.",
    takeaway: "Structure forces clearer thinking and costs less. It is a quality lever as much as a cost lever.",
    modelFit: "All tiers. Structured prompts especially lift Lightweight-tier accuracy.",
    source: "GBB Lever 1 · Code-native phrasing"
  },
  {
    id: "output-control",
    title: "Output control — the highest-ROI instruction",
    category: "Output",
    pillars: ["reasoning", "instructions"],
    tagline: "Output is billed 4–8× input. One format rule cuts it permanently.",
    problem: "Teams polish prompts to save pennies on input, then pay 4–8× for a verbose reply they never needed. Output volume is the most under-managed line item on the bill.",
    whyHigh: [
      "Every major provider prices output 4–8× higher than input.",
      "Models default to explanatory prose unless told otherwise.",
      "Output bloat repeats every turn — it is not a one-time cost."
    ],
    techniques: [
      { name: "'Code only, no explanation'", detail: "For known tasks — 60–80% output saved." },
      { name: "Cap the shape", detail: "'Answer in one sentence', '3 bullets max', 'reply as JSON', 'table format'." },
      { name: "Set it once", detail: "Put the constraint in copilot-instructions.md — permanent leverage on every turn." }
    ],
    impact: { headline: "40–80% output-cost cut", metricLabel: "Output tokens / task", before: 1800, after: 500, unit: "tokens" },
    example: {
      type: "prompt",
      label: "An output cap in the prompt tail",
      before: "Explain how to add the endpoint, then implement it with full commentary.",
      after: "Add the endpoint. Code only, no explanation."
    },
    recommendation: "Add an output cap to your prompt tail or instructions file. Ask for explanation explicitly only when learning a new area.",
    takeaway: "Constraining output once is permanent leverage — it is the single highest-ROI move in token optimization.",
    modelFit: "Critical on Powerful-tier models where output rates peak at $25–30 / 1M.",
    source: "GBB Lever 4 · Output control"
  },
  {
    id: "model-routing",
    title: "Intelligent model routing",
    category: "Model",
    pillars: ["routing"],
    tagline: "Using a frontier model for routine edits costs 5–8× more than necessary.",
    problem: "Manually pinning a Powerful-tier model for everything — formatting, simple Q&A, boilerplate — burns frontier rates on work a Lightweight model handles identically.",
    whyHigh: [
      "Powerful-tier output rates run 10×+ a Lightweight model.",
      "Most coding work is routine and does not need frontier reasoning.",
      "Manual model pinning skips the documented ~10% Auto Mode discount."
    ],
    techniques: [
      { name: "Default to Auto Mode", detail: "Each turn routes to the best-fit model and earns a ~10% token-multiplier discount." },
      { name: "Match tier to task", detail: "Lightweight for bulk edits, Versatile for daily coding, Powerful only for hard reasoning." },
      { name: "Hide expensive models", detail: "Restrict frontier models in the picker for general developers; require justification." }
    ],
    impact: { headline: "25–55% saved vs single-model strategy", metricLabel: "Cost units / 30 turns", before: 50, after: 23, unit: "units" },
    example: {
      type: "prompt",
      label: "Mixed routing over a 30-turn workflow",
      before: "All Opus 4.7 — 30 turns × 1.67× = 50 cost units.",
      after: "2 plan turns (Opus) + 18 build turns (Sonnet) + 10 lookups (mini) = 22.8 units."
    },
    recommendation: "Set Auto Mode as the org default. Promote to a Powerful model by hand, only when the task is worth ~1.7× the daily driver.",
    takeaway: "Right model, right job. The model picker is a cost lever, not a quality ritual.",
    modelFit: "This scenario IS model fit — see the Playbook for a guided recommendation.",
    source: "Pillar 02 · Model routing"
  },
  {
    id: "reasoning-depth",
    title: "Reasoning-depth control",
    category: "Reasoning",
    pillars: ["reasoning"],
    tagline: "MAX reasoning on a typo costs up to 80× a LOW call.",
    problem: "Reasoning models emit an invisible chain-of-thought before the visible answer — billed as output tokens at the highest rate. Leaving effort on HIGH 'just in case' quietly drains credits on trivial tasks.",
    whyHigh: [
      "The thinking trace is metered as output — the most expensive token type.",
      "HIGH effort produces 5k–20k thinking tokens; MAX up to 64k.",
      "A single Powerful-tier HIGH turn can burn $2–$5 before a visible token appears."
    ],
    techniques: [
      { name: "Default to MEDIUM", detail: "Set the floor at MEDIUM org-wide; escalate explicitly for genuinely hard tasks." },
      { name: "Decompose", detail: "Break one HIGH task into 3–5 MEDIUM steps — lower total cost, higher quality." },
      { name: "Cap with a phrase", detail: "'Think briefly' / 'no deep reasoning' saves 60–90% on routine work." }
    ],
    impact: { headline: "50–80% output-token reduction", metricLabel: "Thinking tokens / turn", before: 12000, after: 2500, unit: "tokens" },
    example: {
      type: "prompt",
      label: "Decomposition beats single-shot",
      before: "/effort high  'Refactor the entire auth module to support OAuth2 + SAML + WebAuthn'  → ~$5–7",
      after: "/effort medium 'Plan it' → /effort low 'Implement step 1…2…3' → /effort medium 'Review'"
    },
    recommendation: "Let adaptive reasoning choose by default. Reserve HIGH/MAX for architecture, hard debugging, and security review.",
    takeaway: "Most coding work does not need maximum reasoning depth. Pay for thinking the task actually needs.",
    modelFit: "Powerful-tier reasoning models — the effort dial matters most where output rates are highest.",
    source: "Pillar 04 · Reasoning depth control"
  },
  {
    id: "instruction-caching",
    title: "Instruction engineering & the cache discount",
    category: "Caching",
    pillars: ["instructions"],
    tagline: "A stable prefix is billed once, then at ~10% forever.",
    problem: "copilot-instructions.md is re-sent on every turn. Paid at full rate it is a recurring tax — but a byte-identical prefix earns the ~90% cached-token discount on every subsequent turn.",
    whyHigh: [
      "Always-on instruction files re-enter context on every single turn.",
      "Volatile, ad-hoc context never gets cached and is paid in full each time.",
      "Reordering a section or adding a timestamp invalidates the whole cache."
    ],
    techniques: [
      { name: "Centralize stable context", detail: "Global standards in copilot-instructions.md — paid once, reused all session." },
      { name: "Keep the prefix byte-stable", detail: "Don't reorder sections; put dates and ticket IDs at the end, never the top." },
      { name: "Tier the instructions", detail: "Always-on · path-scoped (.instructions.md with applyTo:) · on-demand skills." }
    ],
    impact: { headline: "70–80% input-cost cut on cache hits", metricLabel: "Instruction cost / turn", before: 100, after: 12, unit: "rel. units" },
    example: {
      type: "code",
      label: "Path-scoped instructions only load when matched",
      before: "# copilot-instructions.md — 1,500 lines, everything, every turn",
      after: "---\napplyTo: \"src/api/**/*.ts\"\n---\nAPI conventions load only when API files are touched."
    },
    recommendation: "Keep the always-on file under ~200 lines. Split area-specific rules into applyTo-scoped files. Promote multi-step procedures to Skills.",
    takeaway: "Instructions are paid once; prompts are paid every turn. Engineer the prefix for cache stability.",
    modelFit: "All tiers. Cached tokens cost ~10% of input on every model.",
    source: "Pillar 03 · Instruction engineering"
  },
  {
    id: "session-lifecycle",
    title: "Session lifecycle & compaction",
    category: "Sessions",
    pillars: ["sessions"],
    tagline: "By turn 30, conversation history can be ~90% of the bill.",
    problem: "Conversation history is re-sent every turn and grows linearly. A 50k-token session that runs 40 turns sends ~2M input tokens — even if the last prompt was 20 words.",
    whyHigh: [
      "Every turn re-sends the entire conversation history.",
      "Even with caching, the uncached tail still grows linearly.",
      "Auto-compaction fires late (~80–95% of window) and itself costs tokens."
    ],
    techniques: [
      { name: "One task = one session", detail: "Start a fresh thread per unrelated task — the cheapest habit on the platform." },
      { name: "Compact proactively", detail: "/compact <focus> before switching focus, not after context is already full." },
      { name: "Resume, don't re-explain", detail: "Reopen a prior session with its saved summary instead of pasting context back." }
    ],
    impact: { headline: "30–50% reduction on long workflows", metricLabel: "Input tokens / turn (turn 30)", before: 50000, after: 12000, unit: "tokens" },
    example: {
      type: "prompt",
      label: "The session-hygiene routine",
      before: "One 40-turn session spanning four unrelated tasks — history compounds 10×.",
      after: "/clear between tasks · /compact at 70% window · /usage at end of task"
    },
    recommendation: "If you can't summarize the session in one sentence, /compact or /fork — don't keep paying to carry the noise.",
    takeaway: "Treat sessions as disposable, not as long-lived diaries. Reset, don't compound.",
    modelFit: "Any tier. Bigger context windows do not make long sessions cheaper — tokens meter linearly.",
    source: "Pillar 06 · Session lifecycle"
  },
  {
    id: "mcp-schema-tax",
    title: "The MCP schema tax",
    category: "Tools & Agents",
    pillars: ["tools"],
    tagline: "Every enabled tool's schema is re-sent on every agent step.",
    problem: "Each registered MCP server injects its tool schemas into context — and they are re-sent on every autonomous turn. With 188 tools enabled, a 30-step agent run carries ~330k tokens of schema overhead alone.",
    whyHigh: [
      "Tool schemas are re-injected on every step, not just at session start.",
      "Stdio MCP servers load at startup, inflating the catalog before first use.",
      "Once past ~20 active tools, schema injection becomes a material per-turn cost."
    ],
    techniques: [
      { name: "Audit quarterly", detail: "Run MCP: List Servers; disable anything unused. One real audit cut 188 tools → 52 (−72%)." },
      { name: "Prefer CLI & HTTP", detail: "CLI tools cost one listing; HTTP MCP servers only consume context when invoked." },
      { name: "Enable virtual tools", detail: "Defer tool definitions until needed once you near the catalog limit." }
    ],
    impact: { headline: "−72% tool catalog in a real audit", metricLabel: "Active MCP tools", before: 188, after: 52, unit: "tools" },
    example: {
      type: "prompt",
      label: "A real MCP audit",
      before: "188 tools enabled globally — Slack (8% used), Jira (2% used), DB across 5 environments.",
      after: "52 tools, per-workspace — drop Slack/Jira, keep prod DB only. ~13k tokens saved per task."
    },
    recommendation: "Configure MCP per workspace, never globally. If a task doesn't need a server, disable it.",
    takeaway: "Tools should be enabled, not accumulated. Every schema is a recurring per-turn tax.",
    modelFit: "Matters most in Agent mode, where schemas re-send 10–40× per request.",
    source: "GBB Lever 8 · MCP tools"
  },
  {
    id: "subagent-compression",
    title: "Subagents — the compression boundary",
    category: "Tools & Agents",
    pillars: ["tools", "reasoning"],
    tagline: "A subagent reads five files; the parent only ever sees the summary.",
    problem: "In a flat session, discovery work (reading 20 files, parsing logs) lands in the parent context and is re-billed on every subsequent turn — quadratic growth. A subagent does that work in isolation and returns a small digest.",
    whyHigh: [
      "Verbose discovery is inherently large but only needed once.",
      "In a flat session, every loaded byte is paid again on every later turn.",
      "Parent context grows quadratically as discovery accumulates."
    ],
    techniques: [
      { name: "Research before implementation", detail: "Subagent reads N files, returns a ~1k-token summary; parent input drops 10×." },
      { name: "Parallel review fan-out", detail: "3–4 reviewers run in isolation; parent merges findings, not the diff ×4." },
      { name: "Coordinator–worker handoff", detail: "Planner (Powerful) → Implementer (Haiku) → Reviewer (Sonnet)." }
    ],
    impact: { headline: "~10× input-token reduction", metricLabel: "Parent input over 4 turns", before: 84000, after: 8500, unit: "tokens" },
    example: {
      type: "prompt",
      label: "Delegating discovery",
      before: "Parent reads 20 files (~20k tokens) — re-billed every refinement turn.",
      after: "Subagent reads them in isolation, returns a 1k-token summary; parent reasons over 1k."
    },
    recommendation: "Hint delegation in the parent prompt ('…in a subagent first…'). Run the subagent on a Lightweight model and cap its return at ~1k tokens.",
    takeaway: "Other controls prevent waste; subagents prevent growth. They keep per-turn input flat across a long session.",
    modelFit: "Lightweight model for the subagent's discovery; Powerful/Versatile for the parent's reasoning.",
    source: "Pillar 05 · Subagent isolation"
  },
  {
    id: "agents-md-hygiene",
    title: "AGENTS.md — landmines, not noise",
    category: "Governance",
    pillars: ["instructions", "tools"],
    tagline: "An LLM-generated instructions file made the agent worse and cost 20% more.",
    problem: "Auto-generated AGENTS.md files pile in everything the model can already infer from the code. An ETH Zurich study across 47 repos found this dropped correctness ~2% while raising token cost 20–23%.",
    whyHigh: [
      "Generated files restate facts derivable from package files and folder structure.",
      "More context is not better context — it triggers context rot.",
      "The whole file re-enters context on every turn."
    ],
    techniques: [
      { name: "Keep landmines", detail: "'Use uv, not pip', 'deploy needs VPN', 'do not refactor auth, pending audit'." },
      { name: "Delete noise", detail: "Anything the agent can derive — 'this is a Python project', 'we use JWT'." },
      { name: "Treat it like a bug tracker", detail: "Not a wiki. Ask: can the agent figure this out by reading the code?" }
    ],
    impact: { headline: "20–23% token cost removed", metricLabel: "Instruction tokens", before: 100, after: 78, unit: "rel. units" },
    example: {
      type: "diff",
      label: "Landmine vs noise",
      before: "This is a Python project. Tests live in tests/. We use PostgreSQL and JWT for auth.",
      after: "Use uv, not pip. Migrations must run in order. Do not refactor auth — pending audit."
    },
    recommendation: "Run /init, then prune hard. If a rule is derivable from the code, delete it. Aim for ~150–200 lines.",
    takeaway: "Every line in an always-on file is a recurring tax. Keep only what the agent genuinely cannot infer.",
    modelFit: "All tiers — a lean instructions file improves accuracy everywhere.",
    source: "GBB Lever 7 · AGENTS.md"
  },
  {
    id: "workflow-modes",
    title: "Workflow modes — Ask, Plan, Agent",
    category: "Model",
    pillars: ["routing", "sessions"],
    tagline: "Agent mode on a vague prompt costs 5–25× a focused Ask call.",
    problem: "Agent mode makes 5–25 model calls per request. Launched on an under-specified prompt, it explores 20 steps, misreads the task, and starts over — the most expensive anti-pattern on the platform.",
    whyHigh: [
      "Agent mode re-sends all history and all tool schemas on every step.",
      "A vague prompt triggers wasteful exploration before the task narrows.",
      "Ask is 1 call (~0.5–2k tokens); Agent is 5–25 calls (~15–50k)."
    ],
    techniques: [
      { name: "Pick the cheapest fitting mode", detail: "Ask for questions, Plan for design, Agent only for genuine multi-file work." },
      { name: "Research → Plan → Implement", detail: "Fresh context per phase; plan with a reasoning model, execute with a cheaper one." },
      { name: "Bound the agent loop", detail: "Cap maxTurns, state acceptance criteria, pin the allowed tools." }
    ],
    impact: { headline: "5–25× swing between modes", metricLabel: "Tokens / run", before: 50000, after: 2000, unit: "tokens" },
    example: {
      type: "prompt",
      label: "The rule of thumb",
      before: "Agent run on 'fix the login bug somewhere' → 20 exploration steps → wrong fix.",
      after: "If you can't state the acceptance criteria in one sentence, use Ask or Plan first."
    },
    recommendation: "Two-stage workflow: plan with a heavy model, execute with a cheaper one. Switch to Agent only with a clear spec.",
    takeaway: "Match the mode to the task. The cheapest mode that fits is almost always the right one.",
    modelFit: "Plan with a Powerful reasoning model; implement with Versatile/Lightweight.",
    source: "GBB Lever 5 · Workflow modes"
  },
  {
    id: "governance-budgets",
    title: "Governance — the three-layer budget",
    category: "Governance",
    pillars: ["tools"],
    tagline: "Individual levers stop runaway spend per developer; governance stops it per org.",
    problem: "Under usage-based billing there is no automatic fallback to a cheaper model when a budget is exhausted. Without guardrails, a single unattended autonomous loop can drain a meaningful slice of the monthly pool overnight.",
    whyHigh: [
      "A $0 user budget means no Copilot access — no graceful degradation.",
      "Early uncontrolled baselines run 30%+ overage.",
      "Autonomous agent loops self-prompt and can burn hundreds of credits per hour."
    ],
    techniques: [
      { name: "User Limit Budget at 150%", detail: "Mandatory. High enough to never false-halt, low enough to bound abuse." },
      { name: "Cost centers", detail: "Ring-fence experimental teams and pilots without affecting steady-state engineering." },
      { name: "Enterprise cap + alerts", detail: "Alert at 80%; decide allowed-vs-blocked overage policy deliberately." }
    ],
    impact: { headline: "Overage 30%+ → predictable 10–15%", metricLabel: "Overage ratio", before: 30, after: 12, unit: "%" },
    example: {
      type: "prompt",
      label: "The Day-0 setup (~2 hours)",
      before: "No budgets — one bad overnight loop drains the shared pool.",
      after: "ULB 150% · cost centers per BU · enterprise cap with 80% alert · Auto Mode default."
    },
    recommendation: "Set ULB 150% first — highest-ROI control on the platform. Review monthly, not daily; focus on top-10 outliers.",
    takeaway: "Govern the choices, not the developers. Configure once, benefit continuously.",
    modelFit: "Org-level — applies across every model and surface.",
    source: "§05 · Governance architecture"
  },
  {
    id: "language-tax",
    title: "The language tax — English wins",
    category: "Prompt",
    pillars: ["context"],
    tagline: "The same prompt in Korean or Arabic can cost ~2× the English version.",
    problem: "Tokenizers are trained mostly on English. The same instruction in another language can take 1.2–2.0× the tokens — and the model produces code in English regardless.",
    whyHigh: [
      "BPE vocabularies are English-dominated; non-English words fragment into more subwords.",
      "Anthropic's tokenizer is the most expensive for non-English (~2.07× average).",
      "Translating prompts to 'save tokens' usually costs more, not less."
    ],
    techniques: [
      { name: "Write prompts in English", detail: "Cheapest input language for almost every Copilot model." },
      { name: "Know the outliers", detail: "Hindi, Arabic, Korean cost the most (1.6–2.0×); Chinese is surprisingly close to English." },
      { name: "Don't translate to save", detail: "Density, not language, is the lever — keep prompts in English." }
    ],
    impact: { headline: "Up to 2× cost in some languages", metricLabel: "Tokens per word (rel. to EN)", before: 207, after: 100, unit: "%" },
    example: {
      type: "prompt",
      label: "Language overhead is real overhead",
      before: "Non-English prompt on an Anthropic model → ~2.07× tokens per word.",
      after: "Same prompt in English → baseline 1.0× — and the code output is English either way."
    },
    recommendation: "Default to English for prompts and instructions. The model's code output is English-native anyway.",
    takeaway: "Language choice is a quiet, recurring cost lever — English is the efficient default.",
    modelFit: "All tiers — tokenizer overhead is model-family specific, not tier specific.",
    source: "GBB Lever 2 · The language tax"
  }
];
