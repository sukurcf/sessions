/**
 * playbook.js — Model Selection Playbook data.
 *
 * The playbook is a guided questionnaire. Each answer contributes weight toward a
 * capability tier (lightweight / versatile / powerful) and may carry `tags` that
 * trigger strategy patterns. The recommendation engine (js/views/playbook.js) sums
 * weights and matches tags — it contains NO hard-coded model names.
 *
 * TO ADD A QUESTION: append to `questions`. TO TUNE A RECOMMENDATION: adjust weights
 * or add a `strategy`. No view code changes are required.
 */
window.TO = window.TO || {};
window.TO.data = window.TO.data || {};

window.TO.data.playbook = {
  intro: "Answer six questions about your workload. The playbook scores capability tiers, recommends a model strategy, and links the optimization techniques that matter for your selection.",

  questions: [
    {
      id: "workload",
      header: "Workload",
      question: "What kind of work is this model mostly doing?",
      options: [
        { label: "Boilerplate & bulk edits", desc: "Formatting, renames, scaffolding, repetitive changes.", weights: { lightweight: 3, versatile: 1, powerful: 0 } },
        { label: "Day-to-day feature work", desc: "Implementing features, refactors, iterative coding.",   weights: { lightweight: 0, versatile: 3, powerful: 1 } },
        { label: "Architecture & hard debugging", desc: "System design, gnarly bugs, security review.",      weights: { lightweight: 0, versatile: 1, powerful: 3 }, tags: ["plan-first"] },
        { label: "Mixed — a bit of everything", desc: "A team workload that spans all of the above.",        weights: { lightweight: 1, versatile: 2, powerful: 1 }, tags: ["mixed-model", "auto-mode"] }
      ]
    },
    {
      id: "complexity",
      header: "Complexity",
      question: "How much reasoning does a typical task demand?",
      options: [
        { label: "Low — mechanical", desc: "The answer is obvious; little reasoning needed.", weights: { lightweight: 3, versatile: 1, powerful: 0 }, tags: ["effort-low"] },
        { label: "Medium — standard", desc: "Normal feature and bug-fix reasoning.",          weights: { lightweight: 1, versatile: 3, powerful: 1 }, tags: ["effort-medium"] },
        { label: "High — novel & cross-cutting", desc: "Hard problems, many interacting parts.", weights: { lightweight: 0, versatile: 1, powerful: 3 }, tags: ["effort-high", "decompose"] }
      ]
    },
    {
      id: "context",
      header: "Context size",
      question: "How large is the context each task needs?",
      options: [
        { label: "Small & well-scoped", desc: "A file or two, tightly referenced.",      weights: { lightweight: 2, versatile: 2, powerful: 0 } },
        { label: "Moderate", desc: "A feature area — several related files.",            weights: { lightweight: 0, versatile: 3, powerful: 1 }, tags: ["context-discipline"] },
        { label: "Large / long-running", desc: "Many files, long agent sessions.",       weights: { lightweight: 0, versatile: 1, powerful: 2 }, tags: ["subagents", "session-hygiene"] }
      ]
    },
    {
      id: "accuracy",
      header: "Accuracy",
      question: "How costly is a wrong answer here?",
      options: [
        { label: "Low stakes", desc: "Easy to spot and fix; a retry is cheap.",                weights: { lightweight: 3, versatile: 1, powerful: 0 } },
        { label: "Normal", desc: "Standard review catches mistakes.",                            weights: { lightweight: 1, versatile: 3, powerful: 1 } },
        { label: "High stakes", desc: "Security, data, or production-critical paths.",           weights: { lightweight: 0, versatile: 1, powerful: 3 }, tags: ["plan-first", "review-fanout"] }
      ]
    },
    {
      id: "style",
      header: "Response style",
      question: "What response shape do you want?",
      options: [
        { label: "Code only — terse", desc: "Implement; minimal or no prose.",          weights: { lightweight: 2, versatile: 2, powerful: 0 }, tags: ["output-control"] },
        { label: "Concise + brief rationale", desc: "Code plus a short why.",            weights: { lightweight: 1, versatile: 3, powerful: 1 }, tags: ["output-control"] },
        { label: "Full explanation", desc: "Teaching / unfamiliar area — explain fully.", weights: { lightweight: 0, versatile: 2, powerful: 2 } }
      ]
    },
    {
      id: "budget",
      header: "Budget",
      question: "How sensitive is this workload to cost?",
      options: [
        { label: "Very — squeeze every credit", desc: "High volume; cost dominates.",        weights: { lightweight: 3, versatile: 1, powerful: 0 }, tags: ["auto-mode", "concise-output"] },
        { label: "Balanced", desc: "Cost matters, but so does throughput.",                   weights: { lightweight: 1, versatile: 3, powerful: 1 }, tags: ["auto-mode"] },
        { label: "Quality first", desc: "Spend what it takes for the best outcome.",          weights: { lightweight: 0, versatile: 1, powerful: 3 }, tags: ["plan-first"] }
      ]
    }
  ],

  /**
   * Strategy patterns. A strategy is surfaced when ANY of its `triggerTags`
   * appears in the collected answer tags.
   */
  strategies: [
    {
      id: "auto-mode",
      name: "Default to Auto Mode",
      triggerTags: ["auto-mode", "mixed-model"],
      detail: "Let the model picker route each turn to the best-fit model. Auto Mode also applies a documented ~10% token-multiplier discount versus manually pinning the same model.",
      scenario: "model-routing"
    },
    {
      id: "plan-first",
      name: "Phased routing — plan high, execute low",
      triggerTags: ["plan-first", "decompose"],
      detail: "Plan with a Powerful reasoning model, then hand execution to a cheaper Versatile/Lightweight model. Frontier rates are paid once at planning; bulk work runs cheap.",
      scenario: "workflow-modes"
    },
    {
      id: "mixed-model",
      name: "Mixed-model strategy",
      triggerTags: ["mixed-model"],
      detail: "Cheap model for routine work, premium model for hard reasoning. Mixed routing typically saves 25–55% versus a single-model strategy.",
      scenario: "model-routing"
    },
    {
      id: "concise-output",
      name: "Concise-output strategy",
      triggerTags: ["output-control", "concise-output"],
      detail: "Constrain output once in copilot-instructions.md ('code only', 'one sentence', 'JSON'). Output is billed 4–8× input — one format rule is permanent leverage.",
      scenario: "output-control"
    },
    {
      id: "decompose",
      name: "Decompose deep reasoning",
      triggerTags: ["decompose", "effort-high"],
      detail: "Break one HIGH-effort task into 3–5 MEDIUM steps. Aggregate cost is usually lower and quality higher because each step is tightly scoped.",
      scenario: "reasoning-depth"
    },
    {
      id: "subagents",
      name: "Delegate discovery to subagents",
      triggerTags: ["subagents"],
      detail: "Run file scans and log parsing in an isolated Lightweight-tier subagent that returns a ~1k-token summary. Keeps the parent's per-turn input flat across long sessions.",
      scenario: "subagent-compression"
    },
    {
      id: "context-discipline",
      name: "Tighten context scope",
      triggerTags: ["context-discipline"],
      detail: "Reference specific files with #-mentions instead of #codebase. 30–50% context-token reduction with better recall.",
      scenario: "context-bloat"
    },
    {
      id: "session-hygiene",
      name: "Session hygiene",
      triggerTags: ["session-hygiene"],
      detail: "One task = one session. Compact proactively at ~70% window. By turn 30 an unmanaged session can be ~90% of the bill.",
      scenario: "session-lifecycle"
    },
    {
      id: "review-fanout",
      name: "Parallel review fan-out",
      triggerTags: ["review-fanout"],
      detail: "For high-stakes changes, run correctness / quality / security / architecture reviewers in parallel isolated subagents; merge only the findings.",
      scenario: "subagent-compression"
    }
  ],

  // Per-tier verdict copy. The recommendation view fills in a concrete model from pricing.js.
  tierVerdicts: {
    lightweight: {
      headline: "Lightweight tier is your default here",
      rationale: "Your workload is dominated by mechanical, low-stakes, cost-sensitive work. A Lightweight model matches it at a fraction of frontier output rates — escalate by exception, not by default.",
      effort: "low"
    },
    versatile: {
      headline: "Versatile tier is your daily driver",
      rationale: "Your workload is standard feature engineering — the best general capability per credit. Reserve Powerful-tier models for the genuinely hard slices and route the rest here.",
      effort: "medium"
    },
    powerful: {
      headline: "Powerful tier — but reserve it deliberately",
      rationale: "Your workload has real reasoning depth and high stakes. A Powerful model earns its rate on planning and review — but pair it with phased routing so execution runs on a cheaper tier.",
      effort: "high"
    }
  }
};
