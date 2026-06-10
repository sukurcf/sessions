/**
 * playbook-levers.js — Token-optimization playbook content.
 *
 * Faithfully sourced from `token-optimization-playbook.docx`. Each lever
 * contains a hero visual (extracted from the source doc), the narrative
 * summary, and an `extended` array of deeper-detail sections used to power
 * the scrollable "Lever extended" panel.
 *
 * Color convention (per the playbook author):
 *   tone: "positive"  → green   — keep / do this
 *   tone: "negative"  → orange  — avoid / costly
 *   tone: "neutral"   → null/omit
 */
window.TO = window.TO || {};
window.TO.data = window.TO.data || {};

window.TO.data.playbookLevers = {
  intro:
    "Eleven levers, derived from the Token-Optimization Playbook, for turning every token into useful work. Browse the cards for the headline idea; open a lever for the deep dive, tables, and the workflow patterns behind it.",

  levers: [
    /* ---------------- Lever 1 ---------------- */
    {
      id: "prompt-compression",
      num: 1,
      name: "Prompt compression",
      color: "#22d3ee",
      tagline: "Remove the words that don't carry information.",
      heroImage: "assets/playbook/image2.png",
      customVisual: "prompt-compression-tile",
      customHero: "prompt-compression-hero",
      summary:
        "Keep technical terms exactly the same. Drop the polite filler. A 40-token polite request becomes a 10-token 'caveman speak' instruction — same meaning, ~75% less cost. Choose the compression level that matches the risk.",
      stats: [
        { value: "75%", label: "max input savings" },
        { value: "3", label: "compression levels" }
      ],
      extended: [
        {
          heading: "Three levels of compression",
          paragraphs: [
            "Pick the level that matches the audience and the risk. The cheapest level isn't always the safest — Ultra trades clarity for tokens."
          ],
          table: {
            headers: ["Level", "Savings", "When to use"],
            rows: [
              { tone: "positive", cells: ["Lite", "15–25%", "Still professional — safe default for outward-facing prompts."] },
              { tone: "positive", cells: ["Full", "up to 50%", "Classic caveman speak. The recommended default."] },
              { tone: "negative", cells: ["Ultra", "max", "Maximum compression — big savings, but real risk of confusion."] }
            ]
          },
          callout: {
            tone: "neutral",
            text: "Your short prompt saves INPUT tokens. To save OUTPUT tokens you must use system instructions — they are two different things."
          }
        },
        {
          heading: "Structured input beats long sentences",
          customVisual: "structured-input",
          paragraphs: [
            "The model reads structured input much faster than long sentences. The same API description written as 55 tokens of prose compresses to ~35 tokens of structure — 36% fewer tokens, identical meaning."
          ]
        },
        {
          heading: "Four ways to describe one coding task",
          paragraphs: [
            "The model understands all four the same way — so choose the cheapest form."
          ],
          table: {
            headers: ["Form", "Cost"],
            rows: [
              { tone: "negative", cells: ["Natural language", "Most expensive"] },
              { tone: "positive", cells: ["Pseudo-code", "Much shorter"] },
              { tone: "positive", cells: ["Type signature", "Much shorter"] },
              { tone: "positive", cells: ["Like-X-but-Y style", "Much shorter"] }
            ]
          }
        },
        {
          heading: "Write rules, not steps",
          paragraphs: [
            "Say what must be true, not what to do step by step. Rules stack cleanly. Steps may fight each other."
          ]
        }
      ]
    },

    /* ---------------- Lever 2 ---------------- */
    {
      id: "choose-language",
      num: 2,
      name: "Choose the right language",
      color: "#818cf8",
      tagline: "English is almost always the cheapest tokenizer.",
      heroImage: "assets/playbook/image4.png",
      customVisual: "language-tile",
      customHero: "language-hero",
      summary:
        "Intuition says Chinese is cheaper because each character carries more meaning — but Komatsuzaki's heatmap of 6 big models × 9 languages shows English is the cheapest in most cases. Tokenizers vary widely: Gemini and Qwen are most efficient for non-English; Anthropic and Kimi are the most expensive.",
      stats: [
        { value: "1.0×", label: "English baseline" },
        { value: "~1.02×", label: "Chinese on Chinese models" }
      ],
      extended: [
        {
          heading: "Practical rule for Copilot users",
          paragraphs: [
            "Always write your prompts in English if you can. Code output is in English anyway. Don't translate prompts to save tokens — it usually costs more, because the surrounding tokenizer overhead outweighs any per-word advantage."
          ],
          callout: {
            tone: "positive",
            text: "Default prompt language: English. Even if the team's spoken language is different — write the prompt in English."
          }
        },
        {
          heading: "Tokenizer efficiency varies by provider",
          table: {
            headers: ["Provider family", "Non-English efficiency"],
            rows: [
              { tone: "positive", cells: ["Gemini, Qwen", "Most efficient on non-English text"] },
              { tone: "negative", cells: ["Anthropic, Kimi", "Most expensive on non-English text"] }
            ]
          }
        }
      ]
    },

    /* ---------------- Lever 3 ---------------- */
    {
      id: "manage-context",
      num: 3,
      name: "Manage your context",
      color: "#34d399",
      tagline: "Split rules into three layers; cache the stable prefix.",
      heroImage: "assets/playbook/image6.png",
      customVisual: "context-tile",
      customHero: "context-hero",
      summary:
        "One giant copilot-instructions file is loaded every turn. Split it into three layers: always-on rules for style and output limits; conditional rules that only load for matching files (via applyTo); and on-demand rules invoked by name. Keep the cacheable prefix stable and start fresh chats often.",
      stats: [
        { value: "10%", label: "cached-prefix cost" },
        { value: "~50k", label: "tokens after 20 turns" }
      ],
      extended: [
        {
          heading: "Understanding token consumption",
          customVisual: "token-loop",
          paragraphs: [
            "On every loop the agent re-sends the entire conversation to the LLM.",
            "Loop 1: system prompt + tool descriptions + your prompt + file references = INPUT tokens. The LLM's response = OUTPUT tokens.",
            "Loop 2 and beyond: everything in Loop 1 + previous responses + new input = more tokens."
          ],
          table: {
            headers: ["Basics", "Detail"],
            rows: [
              { tone: null, cells: ["1 token", "≈ 3/4 of an English word"] },
              { tone: null, cells: ["Small models", "50–200K-token context"] },
              { tone: null, cells: ["Large models (Opus / GPT-5.5 class)", "1M-token context"] },
              { tone: null, cells: ["1M tokens", "≈ Lord of the Rings trilogy + The Hobbit"] }
            ]
          },
          callout: {
            tone: "neutral",
            text: "Don't get caught up in tokenization details — you don't control them. Think higher level: prompts, files, responses all consume tokens, and they compound with every loop."
          }
        },
        {
          heading: "Three layers of rules",
          paragraphs: [
            "Many teams put every rule, convention, and snippet into one giant copilot-instructions file. That file is loaded every single turn — even when most of the rules don't apply to the current task.",
            "The fix is to split rules into three layers so the agent only pays for what the current turn actually needs."
          ],
          table: {
            headers: ["Layer", "Loaded when", "Example"],
            rows: [
              { tone: "positive", cells: ["Always-on", "Every turn", "Style and output limits."] },
              { tone: "positive", cells: ["Conditional", "Only for matching files (applyTo)", "API-only rules don't load on React files."] },
              { tone: "positive", cells: ["On-demand", "Only when called by name", "Reusable skills invoked deliberately."] }
            ]
          },
          callout: {
            tone: "positive",
            text: "If a rule applies only to API files, an applyTo: 'api/**' clause keeps it out of every React-file turn — and out of your bill."
          }
        },
        {
          heading: "See it in code",
          collapsible: "Click to reveal the applyTo snippet & caching hygiene",
          customVisual: "applyto-cache"
        },
        {
          heading: "VS Code context mentions — the escalation ladder",
          paragraphs: [
            "Start narrow, widen only when needed. The wrong mention is the #1 hidden cost in VS Code Copilot Chat."
          ],
          customVisual: "context-ladder",
          callout: {
            tone: "positive",
            text: "The 80/20 rule: 80% of prompts only need #selection or #file:Lx-Ly. #codebase belongs to architecture work — not to \"add a button.\""
          }
        },
        {
          heading: "Sessions as disposable",
          paragraphs: [
            "By turn 30, conversation history is ≈90% of the bill. Treat sessions as disposable — not as keepsakes. Don't let session creep eat your budget."
          ],
          customVisual: "session-disposal"
        },
        {
          heading: "The compound error problem",
          paragraphs: [
            "LLMs are non-deterministic. In multi-step agentic workflows this creates compounding accuracy drift. Every quality improvement you make dramatically increases your overall chances of success."
          ],
          customVisual: "compounding-error"
        }
      ]
    },

    /* ---------------- Lever 4 ---------------- */
    {
      id: "output-control",
      num: 4,
      name: "Output control",
      color: "#fbbf24",
      tagline: "One short rule, paid once — short replies forever.",
      heroImage: "assets/playbook/image9.png",
      customVisual: "output-tile",
      customHero: "output-hero",
      summary:
        "Output costs 4–8× input depending on the model. A single sentence in your system instructions caps reply length permanently. The rules are short, the savings are large — and you only have to write them once.",
      stats: [
        { value: "4–8×", label: "output vs input cost" },
        { value: "60–80%", label: "savings from one rule" }
      ],
      extended: [
        {
          heading: "Rules that cap output, ranked",
          table: {
            headers: ["Rule", "Effect"],
            rows: [
              { tone: "positive", cells: ["Code only, no explanation.", "60–80% savings."] },
              { tone: "positive", cells: ["Answer in one sentence.", "Same big savings."] },
              { tone: "positive", cells: ["3 bullet points max.", "Caps reply length."] },
              { tone: "positive", cells: ["Reply as JSON, no extra words.", "Cuts all prose."] },
              { tone: "positive", cells: ["Yes or no, then one line why.", "Cheapest of all."] }
            ]
          },
          callout: {
            tone: "positive",
            text: "Write the rule once in your instructions file. Then every reply is short, forever."
          }
        },
        {
          heading: "The one trade-off",
          paragraphs: [
            "When you're learning something new, you need the model to explain. In that case, ask explicitly — 'explain why this is better than X' — instead of letting the model explain by default."
          ]
        }
      ]
    },

    /* ---------------- Lever 5 ---------------- */
    {
      id: "choose-mode",
      num: 5,
      name: "Choose the right mode",
      color: "#f472b6",
      tagline: "Ask, Plan, Agent — match the mode, then divide & conquer.",
      heroImage: "assets/playbook/image10.png",
      customVisual: "mode-tile",
      customHero: "mode-hero",
      summary:
        "Copilot has three modes. Ask is one call for quick lookups. Plan is one call for designing before you build. Agent is 5–25 calls for big jobs. The cheapest workflow on top: divide the work into Research → Plan → Implement phases, and let deterministic controls (tests, linters) keep the agent on track.",
      stats: [
        { value: "5–25×", label: "Agent vs Ask cost" },
        { value: "3", label: "phases per feature" }
      ],
      extended: [
        {
          heading: "Mode budget at a glance",
          table: {
            headers: ["Mode", "Calls", "Tokens", "Use it for"],
            rows: [
              { tone: "positive", cells: ["Ask", "1", "0.5k – 2k", "Questions, explanations, quick lookups."] },
              { tone: "positive", cells: ["Plan", "1", "1k – 4k", "Designing a solution before you build."] },
              { tone: "negative", cells: ["Agent", "5 – 25", "15k – 50k", "Big jobs: multi-file refactor, full feature."] }
            ]
          }
        },
        {
          heading: "The most expensive mistake",
          callout: {
            tone: "negative",
            text: "You start Agent mode with a vague prompt. Agent explores 20 steps. Then it understands the task wrong and starts over. This can cost 5–25× a focused Ask call."
          },
          paragraphs: [
            "Simple rule: if you cannot say the success criteria in one sentence, do not use Agent yet. First use Ask or Plan to make the task clear — then switch to Agent to do the work."
          ]
        },
        {
          heading: "Divide and conquer: Research → Plan → Implement",
          customVisual: "divide-conquer",
          paragraphs: [
            "Research (optional, e.g. /research in Copilot CLI) loads many files — most won't be relevant for implementation. If you do all phases in one session, you carry irrelevant context through every turn, degrading quality and wasting tokens (even cached ones).",
            "Better approach: create a new context window between phases. Yes, some duplication, but improved quality and token efficiency.",
            "For planning, use a model with reasoning capability — it doesn't always need to be Opus 4.7, but pick something that can view the plan from every angle and identify gaps."
          ],
          table: {
            headers: ["Phase", "Hand-off", "Goal"],
            rows: [
              { tone: "positive", cells: ["/research", "→ plan input", "Read widely, decide which files are relevant, drop the rest."] },
              { tone: "positive", cells: ["/plan", "→ precise spec", "Reason over the plan input, produce a detailed to-do list."] },
              { tone: "positive", cells: ["/fleet (implement)", "→ change calls", "Execute the spec with cheaper models in fresh context."] }
            ]
          }
        },
        {
          heading: "Planning mode for complex features",
          paragraphs: [
            "For sophisticated features, use planning mode with reasoning models — they excel at viewing plans from every angle and identifying gaps.",
            "The goal: create a precise specification — a detailed to-do list that covers all thinking upfront."
          ]
        },
        {
          heading: "Parallel agent implementation",
          customVisual: "parallel-agents",
          paragraphs: [
            "With a clear spec, you can deploy multiple agents in parallel:"
          ],
          table: {
            headers: ["Split by", "Why"],
            rows: [
              { tone: "positive", cells: ["Architecture layer (frontend, backend, database)", "Each agent works with only the relevant context."] },
              { tone: "positive", cells: ["Contracts between components", "Defined upfront in the spec."] },
              { tone: "positive", cells: ["Per-task agents", "Carry no unnecessary knowledge."] }
            ]
          }
        },
        {
          heading: "Avoid compounding errors: deterministic controls",
          customVisual: "deterministic-controls",
          paragraphs: [
            "Not strictly a context optimization, but a context-engineering tool that counters non-deterministic LLM behavior. The Copilot CLI team ships 500 PRs a week and their #1 practice is tests — 53% of their codebase is tests. A test is a deterministic control: it either fails or it doesn't.",
            "If after 10 steps the agent has drifted to 50% accuracy, a failing test brings it back to ~99% on the next try. You restart the accuracy budget by having tests.",
            "Beyond tests: linters, security scanners, and any guard rail you can architect as code work the same way. Whatever deterministic control you can hand the agent, hand it over."
          ],
          table: {
            headers: ["With tests", "Without tests"],
            rows: [
              { tone: "positive", cells: ["Buggy change → failing test stops the agent → correction → succeeding tests.", "Buggy change → buggy change 2 → buggy change 3 → buggy change 4."] },
              { tone: "positive", cells: ["Stable working base before the next change builds on top.", "Wasted CI/CD minutes, Copilot review cycles, human time."] },
              { tone: "positive", cells: ["Restarts the accuracy budget on every red→green cycle.", "Quicker and cheaper to ship — but ships compounding bugs."] }
            ]
          },
          callout: {
            tone: "neutral",
            text: "Without tests, the agent will build a buggy change on top of a buggy change on top of a buggy change. Yes, it might be done quicker and with fewer tokens — but you're shipping bugs."
          }
        }
      ]
    },

    /* ---------------- Lever 6 ---------------- */
    {
      id: "phased-workflow",
      num: 6,
      name: "Custom agents, skills, sub-agents",
      color: "#fb923c",
      tagline: "Pick the right container for the work.",
      heroImage: "assets/playbook/image11.png",
      customVisual: "custom-agent-tile",
      customHero: "custom-agent-hero",
      summary:
        "Use custom agents to lock in a role and trim tools. Use skills for lazy-loaded context the agent doesn't already have. Use sub-agents to keep the main session lean. (For the Research → Plan → Implement phasing itself, see Lever 5.)",
      stats: [
        { value: "1", label: "context window each" },
        { value: "0", label: "tools you don't need" }
      ],
      extended: [
        {
          heading: "Persistent instructions",
          paragraphs: [
            "Persistent instructions are in the context window for every agent session, every interaction. They must be very concise — don't put entire documentation or human-readable guides here. Think of them as your 'human-in-the-loop' proactive guidance for every agent."
          ],
          table: {
            headers: ["What belongs", "Why"],
            rows: [
              { tone: "positive", cells: ["Non-negotiables — project guard rails", "Every agent must follow them."] },
              { tone: "positive", cells: ["Agent-miss prevention — wrong test framework, wrong build command", "Corrects recurring errors."] },
              { tone: "positive", cells: ["Output trimming — 'be concise', 'only return code'", "Output tokens are the most expensive."] }
            ]
          },
          callout: {
            tone: "neutral",
            text: "Research shows 'be concise' yields almost the same results as a 50-line caveman skill."
          }
        },
        {
          heading: "Best practices for instructions",
          table: {
            headers: ["#", "Practice"],
            rows: [
              { tone: "negative", cells: ["1", "Don't use AI to generate instructions — they end up speaky and imprecise."] },
              { tone: "positive", cells: ["2", "Write them yourself, based on real agent behavior in your project."] },
              { tone: "positive", cells: ["3", "Iterate — add corrections as you observe misses."] },
              { tone: "positive", cells: ["4", "Recreate them often. Models and projects change constantly. Treat instructions as a living document."] }
            ]
          },
          callout: {
            tone: "neutral",
            text: "The Copilot CLI team throws away their entire instructions every three months — they may be outdated, no longer relevant, or compound useless information."
          }
        },
        {
          heading: "Custom agents",
          paragraphs: [
            "Custom agents force an agent into a specific role. Best considered as something manually invoked by you — when you want to orchestrate a workflow and have an agent behave a very specific way.",
            "Example: a test-driven-development agent scoped to only implement failing (red) tests. The harness pulls the custom agent file and adjusts the available tools accordingly.",
            "The real benefit isn't token reduction — input tokens get cached anyway. The benefit is preventing your agent from going down a path you don't intend. If you only want it to read a GitHub issue (not write or update one), don't give it the write tool."
          ]
        },
        {
          heading: "Skills — lazy-loaded context",
          paragraphs: [
            "A skill is markdown that's offered to the agent based on the task — and loaded dynamically. Not always-on. The harness presents the skill description; when the LLM detects a matching task, it asks the harness to load it."
          ],
          table: {
            headers: ["Best practice", "Detail"],
            rows: [
              { tone: "negative", cells: ["Don't overdo it", "You don't need hundreds of skills."] },
              { tone: "negative", cells: ["Beware redundant skills", "Does the LLM really need a 'React skill' when it's already proficient?"] },
              { tone: "positive", cells: ["Only for capabilities the agent wouldn't otherwise have", "The point of a skill is to add what's missing."] },
              { tone: "positive", cells: ["Maintain them", "As LLMs evolve, some skills become unnecessary."] }
            ]
          }
        },
        {
          heading: "Sub-agents — a second context window",
          customVisual: "sub-agents",
          paragraphs: [
            "Sub-agents open a second context window for specific tasks (like research), preventing the main session from filling with irrelevant information. The sub-agent processes documents, creates a summary, and returns only the relevant information.",
            "This improves main-session quality at the cost of tokens spent in the sub-agent — a conditional optimization."
          ],
          table: {
            headers: ["When", "How"],
            rows: [
              { tone: "positive", cells: ["The agent often decides automatically", "Implicit invocation."] },
              { tone: "positive", cells: ["You can invoke them explicitly for research", "Use the platform's sub-agent command."] },
              { tone: "negative", cells: ["Use cautiously", "It's a conditional optimization."] }
            ]
          }
        }
      ]
    },

    /* ---------------- Lever 7 ---------------- */
    {
      id: "choose-model",
      num: 7,
      name: "Choose the right model",
      color: "#22d3ee",
      tagline: "Mix models. Plan with the big one, build with the small one.",
      heroImage: "assets/playbook/image18.png",
      customVisual: "model-tile",
      customHero: "model-hero",
      summary:
        "Opus is ~1.7× the price of Sonnet on GitHub Copilot. Across 30 turns: all-Sonnet costs 30 units, all-Opus costs 50, but a mixed strategy lands at ~22.8. Let the expensive model think. Let the cheap model type.",
      stats: [
        { value: "1.7×", label: "Opus vs Sonnet" },
        { value: "−24%", label: "mixed vs all-Sonnet" }
      ],
      extended: [
        {
          heading: "30 turns of work — three strategies",
          table: {
            headers: ["Strategy", "Cost"],
            rows: [
              { tone: "negative", cells: ["All Opus", "50 units (1.7× of Sonnet rate)"] },
              { tone: null,       cells: ["All Sonnet", "30 units"] },
              { tone: "positive", cells: ["Mixed (Opus for planning, Sonnet for work, mini for trivia)", "22.8 units"] }
            ]
          }
        },
        {
          heading: "Rough model-selection guide",
          table: {
            headers: ["Model", "Use it for"],
            rows: [
              { tone: "positive", cells: ["GPT mini / Auto", "Syntax, simple questions, API lookups."] },
              { tone: "positive", cells: ["Sonnet 4.6", "Normal coding work and refactors."] },
              { tone: "negative", cells: ["Opus 4.7", "Only for hard problems where you really need the best model."] }
            ]
          }
        },
        {
          heading: "Two-stage workflow",
          paragraphs: [
            "Stage 1 — use the big model to make a plan.",
            "Stage 2 — use a cheaper model to do the work.",
            "Let the expensive model only think. Let the cheap model do the typing."
          ]
        }
      ]
    },

    /* ---------------- Lever 8 ---------------- */
    {
      id: "agents-file",
      num: 8,
      name: "Manage your AGENTS file",
      color: "#34d399",
      tagline: "Landmines, not encyclopedias.",
      heroImage: "assets/playbook/image21.png",
      customVisual: "agents-tile",
      customHero: "agents-hero",
      summary:
        "Many teams run /init and ship the auto-generated AGENTS file. An ETH-Zurich study of 47 projects showed the opposite of help: correctness fell 2%, token cost climbed 20–23%. Keep the rules the agent cannot guess from the code; delete everything else.",
      stats: [
        { value: "−2%", label: "correctness (LLM-written)" },
        { value: "+20–23%", label: "token cost (LLM-written)" }
      ],
      extended: [
        {
          heading: "Keep the landmines — delete the noise",
          paragraphs: [
            "Manage the AGENTS file like a bug tracker, not a wiki."
          ],
          table: {
            headers: ["Keep (green box)", "Delete (red box)"],
            rows: [
              { tone: "positive", cells: ["Use uv, not pip.", "Agent can read the code — it already knows you use Python."] },
              { tone: "positive", cells: ["Deploy needs VPN.", "Project description / 'this is a Python app'."] },
              { tone: "positive", cells: ["Don't touch auth right now.", "Anything the agent can find in the repo."] }
            ]
          }
        },
        {
          heading: "Four simple ways to control the agent loop",
          table: {
            headers: ["#", "Lever"],
            rows: [
              { tone: "positive", cells: ["1", "Set a max-turn limit."] },
              { tone: "positive", cells: ["2", "Write the success rule."] },
              { tone: "positive", cells: ["3", "Make a plan file."] },
              { tone: "positive", cells: ["4", "Tell the agent which tools to use."] }
            ]
          }
        }
      ]
    },

    /* ---------------- Lever 9 ---------------- */
    {
      id: "clean-up-tools",
      num: 9,
      name: "Clean up your tools",
      color: "#fb923c",
      tagline: "Every tool's schema rides along on every step.",
      heroImage: "assets/playbook/image22.png",
      customVisual: "tools-tile",
      customHero: "tools-hero",
      summary:
        "MCP lets Copilot use external tools — but every tool you turn on sends its schema to the model. The schema rides along on every single agent step. With 188 tools turned on, a 30-step task burns 330,000 tokens just on schemas.",
      stats: [
        { value: "188 → 52", label: "tools after audit" },
        { value: "650k", label: "tokens saved / day" }
      ],
      extended: [
        {
          heading: "Schema cost grows with steps",
          table: {
            headers: ["Tools on", "Steps", "Tokens spent on schemas"],
            rows: [
              { tone: "negative", cells: ["188", "5", "55,000"] },
              { tone: "negative", cells: ["188", "15", "165,000"] },
              { tone: "negative", cells: ["188", "30", "330,000"] }
            ]
          }
        },
        {
          heading: "A real audit (green box)",
          callout: {
            tone: "positive",
            text: "One team had 188 tools turned on. They checked which tools they actually used last month. Slack — only 8%. Dropped. Jira — only 2% (they had moved to Linear). Dropped. Database tools across five environments — kept only production."
          },
          table: {
            headers: ["Metric", "Result"],
            rows: [
              { tone: "positive", cells: ["Tools enabled", "188 → 52"] },
              { tone: "positive", cells: ["Reduction", "72% fewer tools"] },
              { tone: "positive", cells: ["Tokens saved per agent task", "~13,000"] },
              { tone: "positive", cells: ["At 50 tasks/day", "~650,000 tokens saved every day"] }
            ]
          }
        },
        {
          heading: "Simple rule",
          paragraphs: [
            "Turn off tools you do not need for this workspace."
          ]
        }
      ]
    },

    /* ---------------- Lever 10 ---------------- */
    {
      id: "usage-limits",
      num: 10,
      name: "Usage limits & overages",
      color: "#a9b2ff",
      tagline: "Cap the bill before the bill caps you.",
      heroImage: "assets/playbook/image23.png",
      customVisual: "limits-tile",
      customHero: "limits-hero",
      summary:
        "The last lever isn't about tokens — it's about the meter. Set overage caps, understand which actions count against entitlement, and review the budgeting scenarios for the patterns that keep teams below their cap without throttling productive work.",
      stats: [
        { value: "10–15%", label: "healthy overage ratio" },
        { value: "30%+", label: "uncontrolled baseline" }
      ],
      extended: [
        {
          heading: "Best-practice references",
          paragraphs: [
            "Refer to the budgeting scenarios below for cap configurations, overage handling, and the patterns each team archetype uses to stay within entitlement."
          ],
          links: [
            {
              label: "Budgeting scenarios — interactive diagram",
              url: "https://white-cliff-095e8700f.7.azurestaticapps.net/ubb-scenarios-v2-diagram.html"
            }
          ]
        }
      ]
    },

    /* ---------------- Lever 11 ---------------- */
    {
      id: "power-user-guidance",
      num: 11,
      name: "Power user guidance",
      color: "#51d67f",
      tagline: "Advanced optimization patterns for teams already running the fundamentals.",
      heroImage: "assets/playbook/image24.png",
      customVisual: "power-user-tile",
      customHero: "power-user-hero",
      summary:
        "These guidance points are conditional and come with trade-offs. Use them when your team already has solid context discipline, model routing, and output control in place.",
      stats: [
        { value: "6", label: "advanced patterns" },
        { value: "high", label: "knowledge + time invest" }
      ],
      extended: [
        {
          heading: "Power user guidance",
          customVisual: "power-user-metrics",
          paragraphs: [
            "This level is for power users who want to optimize at the margin after the core eleven levers are already operational.",
            "These techniques can improve token efficiency and control, but they are more context dependent than baseline levers."
          ],
          table: {
            headers: ["Guidance", "Why it helps"],
            rows: [
              { tone: "positive", cells: ["Think in code", "Prefer creating scripts to analyze files instead of feeding large raw context into AI."] },
              { tone: "positive", cells: ["Consider CLIs vs MCPs", "In some scenarios, CLI tools reduce static schema overhead versus broad MCP catalogs."] },
              { tone: "positive", cells: ["Improve shell outputs", "Trim long command output before sending to the model so each turn carries less input payload."] },
              { tone: "positive", cells: ["Run /chronicle tip regularly", "Use usage diagnostics to identify where spend and context are drifting."] },
              { tone: "positive", cells: ["Collapse tool calls", "Bundle repeated tool interactions to reduce orchestration overhead and repetitive context."] },
              { tone: "positive", cells: ["Model-specific context optimization", "Different models respond better to different context formats and constraints."] }
            ]
          },
          links: [
            {
              label: "rtk-ai/rtk for shell output reduction",
              url: "https://github.com/rtk-ai/rtk"
            },
            {
              label: "copilot-codeact-plugin for tool-call collapsing",
              url: "https://github.com/jsturtevant/copilot-codeact-plugin"
            }
          ],
          callout: {
            tone: "neutral",
            text: "These tactics are not mandatory. Adopt them selectively where telemetry shows recurring high-cost patterns."
          }
        }
      ]
    }
  ]
};
