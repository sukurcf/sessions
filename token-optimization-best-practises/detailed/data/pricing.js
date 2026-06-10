/**
 * pricing.js — Model rate card & billing constants.
 *
 * SINGLE SOURCE OF TRUTH for the Cost & Pricing Calculator and the
 * Model Selection Playbook. UI logic never hard-codes a price — it reads here.
 *
 * Source: GitHub Copilot "Models and pricing" reference
 *   https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing
 * Rates are USD per 1,000,000 tokens, aligned to Usage-Based Billing.
 *
 * TO UPDATE PRICING: edit the `models` array below. No code changes required.
 * TO ADD A MODEL:    append an object with the same shape. It appears everywhere automatically.
 */
window.TO = window.TO || {};
window.TO.data = window.TO.data || {};

window.TO.data.pricing = {
  meta: {
    source: "GitHub Copilot — Models and pricing",
    sourceUrl: "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing",
    effective: "Usage-Based Billing rates · effective 1 June 2026",
    rateUnit: 1000000,            // rates are quoted per 1M tokens
    creditValueUsd: 0.01,         // 1 GitHub AI credit = $0.01 USD
    autoModeDiscount: 0.10,       // Auto Mode applies a documented ~10% token-multiplier discount
    note: "Illustrative rates synthesised from the cited GitHub Copilot reference. Verify against your org's live pricing page before quoting."
  },

  // Subscription plans — used by the calculator to translate spend into "allowance consumed".
  plans: [
    { id: "business",   name: "Copilot Business",   seatUsd: 19, includedCredits: 1900, promoCredits: 3000 },
    { id: "enterprise", name: "Copilot Enterprise", seatUsd: 39, includedCredits: 3900, promoCredits: 7000 }
  ],

  // Capability tiers — drive colour-coding and playbook recommendations.
  tiers: [
    { id: "lightweight", name: "Lightweight", blurb: "Boilerplate, formatting, simple Q&A, bulk edits",      color: "#34d399" },
    { id: "versatile",   name: "Versatile",   blurb: "Daily-driver coding, refactors, iterative work",        color: "#818cf8" },
    { id: "powerful",    name: "Powerful",    blurb: "Architectural reasoning, hard debugging, plan steps",   color: "#f472b6" }
  ],

  // Model rate card. input/cached/output are USD per 1M tokens.
  // cacheWrite is the first-write premium (Anthropic models); null where equal to input.
  models: [
    // ── OpenAI — Lightweight ─────────────────────────────────────────────
    { id: "gpt-5-4-nano",    name: "GPT-5.4 nano",   vendor: "OpenAI",    tier: "lightweight", included: false, input: 0.20, cached: 0.02,  output: 1.25,  cacheWrite: null, note: "Cheapest output rate on the platform." },
    { id: "gpt-5-mini",      name: "GPT-5 mini",     vendor: "OpenAI",    tier: "lightweight", included: true,  input: 0.25, cached: 0.025, output: 2.00,  cacheWrite: null, note: "Included on every paid plan." },
    { id: "gpt-5-4-mini",    name: "GPT-5.4 mini",   vendor: "OpenAI",    tier: "lightweight", included: false, input: 0.75, cached: 0.075, output: 4.50,  cacheWrite: null, note: "Fast mid-light tier." },
    // ── OpenAI — Versatile ───────────────────────────────────────────────
    { id: "gpt-5-4",         name: "GPT-5.4",        vendor: "OpenAI",    tier: "versatile",   included: false, input: 2.50, cached: 0.25,  output: 15.00, cacheWrite: null, note: "Versatile up to 272K context window." },
    { id: "gpt-5-4-long",    name: "GPT-5.4 (Long)", vendor: "OpenAI",    tier: "versatile",   included: false, input: 5.00, cached: 0.50,  output: 22.50, cacheWrite: null, note: "Long context tier (>272K)." },
    // ── OpenAI — Powerful ────────────────────────────────────────────────
    { id: "gpt-5-3-codex",   name: "GPT-5.3-Codex",  vendor: "OpenAI",    tier: "powerful",    included: false, input: 1.75, cached: 0.175, output: 14.00, cacheWrite: null, note: "Code-specialised powerful tier." },
    { id: "gpt-5-5",         name: "GPT-5.5",        vendor: "OpenAI",    tier: "powerful",    included: false, input: 5.00, cached: 0.50,  output: 30.00, cacheWrite: null, note: "Powerful tier up to 272K context." },
    { id: "gpt-5-5-long",    name: "GPT-5.5 (Long)", vendor: "OpenAI",    tier: "powerful",    included: false, input: 10.00, cached: 1.00, output: 45.00, cacheWrite: null, note: "Long context tier (>272K). Highest output cost." },

    // ── Anthropic — Versatile ────────────────────────────────────────────
    { id: "claude-haiku-4-5",  name: "Claude Haiku 4.5",  vendor: "Anthropic", tier: "versatile", included: false, input: 1.00, cached: 0.10, output: 5.00,  cacheWrite: 1.25, note: "Frontier-family quality at a fraction of Opus cost." },
    { id: "claude-sonnet-4",   name: "Claude Sonnet 4",   vendor: "Anthropic", tier: "versatile", included: false, input: 3.00, cached: 0.30, output: 15.00, cacheWrite: 3.75, note: "General-purpose versatile model." },
    { id: "claude-sonnet-4-5", name: "Claude Sonnet 4.5", vendor: "Anthropic", tier: "versatile", included: false, input: 3.00, cached: 0.30, output: 15.00, cacheWrite: 3.75, note: "Improved Sonnet — same pricing as Sonnet 4." },
    { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6", vendor: "Anthropic", tier: "versatile", included: false, input: 3.00, cached: 0.30, output: 15.00, cacheWrite: 3.75, note: "Latest Sonnet — daily driver for coding." },
    // ── Anthropic — Powerful ─────────────────────────────────────────────
    { id: "claude-opus-4-5",   name: "Claude Opus 4.5",   vendor: "Anthropic", tier: "powerful", included: false, input: 5.00, cached: 0.50, output: 25.00, cacheWrite: 6.25, note: "Frontier reasoning model." },
    { id: "claude-opus-4-6",   name: "Claude Opus 4.6",   vendor: "Anthropic", tier: "powerful", included: false, input: 5.00, cached: 0.50, output: 25.00, cacheWrite: 6.25, note: "Strong planning and architectural reasoning." },
    { id: "claude-opus-4-7",   name: "Claude Opus 4.7",   vendor: "Anthropic", tier: "powerful", included: false, input: 5.00, cached: 0.50, output: 25.00, cacheWrite: 6.25, note: "Reserve for planning and review steps." },
    { id: "claude-opus-4-8",   name: "Claude Opus 4.8",   vendor: "Anthropic", tier: "powerful", included: false, input: 5.00, cached: 0.50, output: 25.00, cacheWrite: 6.25, note: "Latest Opus — frontier reasoning." },

    // ── Google — Lightweight ─────────────────────────────────────────────
    { id: "gemini-3-flash",    name: "Gemini 3 Flash",    vendor: "Google", tier: "lightweight", included: false, input: 0.50, cached: 0.05,  output: 3.00,  cacheWrite: null, note: "Preview. Strong quality at a light-tier price." },
    { id: "gemini-3-5-flash",  name: "Gemini 3.5 Flash",  vendor: "Google", tier: "lightweight", included: false, input: 1.50, cached: 0.15,  output: 9.00,  cacheWrite: null, note: "GA. Higher-quality lightweight tier." },
    // ── Google — Powerful ────────────────────────────────────────────────
    { id: "gemini-2-5-pro",    name: "Gemini 2.5 Pro",    vendor: "Google", tier: "powerful",    included: false, input: 1.25, cached: 0.125, output: 10.00, cacheWrite: null, note: "Strong reasoning at a low powerful-tier rate." },
    { id: "gemini-3-1-pro",    name: "Gemini 3.1 Pro",    vendor: "Google", tier: "powerful",    included: false, input: 2.00, cached: 0.20,  output: 12.00, cacheWrite: null, note: "Preview. Balanced powerful tier (≤200K)." },
    { id: "gemini-3-1-pro-long", name: "Gemini 3.1 Pro (Long)", vendor: "Google", tier: "powerful", included: false, input: 4.00, cached: 0.40, output: 18.00, cacheWrite: null, note: "Preview. Long context tier (>200K)." },

    // ── Fine-tuned (GitHub) ──────────────────────────────────────────────
    { id: "raptor-mini",       name: "Raptor mini",       vendor: "GitHub",    tier: "versatile",   included: false, input: 0.25, cached: 0.025, output: 2.00,  cacheWrite: null, note: "Preview. GitHub fine-tuned model." },

    // ── Microsoft ────────────────────────────────────────────────────────
    { id: "mai-code-1-flash",  name: "MAI-Code-1-Flash",  vendor: "Microsoft", tier: "lightweight", included: false, input: 0.75, cached: 0.075, output: 4.50,  cacheWrite: null, note: "Microsoft AI lightweight coding model." }
  ],

  // Reasoning-effort multipliers — applied to OUTPUT volume in the calculator.
  // Reasoning models bill the invisible thinking trace as output tokens.
  effortLevels: [
    { id: "low",    name: "Low",    multiplier: 1,  blurb: "Typos, rename, format, simple lookups" },
    { id: "medium", name: "Medium", multiplier: 3,  blurb: "Standard feature work, bug fixes (recommended default)" },
    { id: "high",   name: "High",   multiplier: 14, blurb: "Architecture decisions, gnarly debugging" },
    { id: "max",    name: "Max",    multiplier: 60, blurb: "Novel algorithms, research-grade analysis" }
  ]
};
