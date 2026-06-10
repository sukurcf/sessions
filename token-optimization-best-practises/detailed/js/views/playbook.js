/**
 * playbook.js — Token-Optimization Playbook (lever view).
 *
 * Renders the 11 levers as an animated card grid. Selecting a card opens a
 * scrollable detail panel with the lever's deep-dive sections (paragraphs,
 * tables, images, callouts, external links). All external links open in a new
 * tab via target="_blank" rel="noopener noreferrer".
 *
 * Animations: cards reveal via TO.utils.observeReveals; detail panel uses
 * a CSS keyframe (`viewIn`); table rows stagger via inline transition delays.
 * Reduced-motion preferences are honored by Section 12 of main.css.
 */
(function (TO) {
  "use strict";

  var el = TO.utils.el;
  var t  = function (k, vars) { return TO.i18n ? TO.i18n.t(k, vars) : k; };
  var tryT = function (k, vars) { return TO.i18n ? TO.i18n.tryT(k, vars) : undefined; };

  // Resolve lever copy with fallback to the literal in data/playbook-levers.js.
  function leverField(lever, field) {
    return tryT("lever." + lever.id + "." + field) || lever[field];
  }
  function leverStatLabel(lever, idx, fallback) {
    return tryT("lever." + lever.id + ".stat" + idx) || fallback;
  }

  /* ---------- CUSTOM VISUALS ----------
   * Pure DOM/CSS animations that replace docx-extracted images for selected
   * levers. Each entry is `function ({ lever, section, variant }) -> Node`.
   * `variant` is one of "tile" | "hero" | "section".
   */
  var visuals = {
    "prompt-compression-tile": function () {
      function chip(word, role, delayMs) {
        var c = el("span", { class: "pbv-chip pbv-chip--" + role, text: word });
        if (role === "filler") c.style.animationDelay = delayMs + "ms";
        return c;
      }
      return el("div", { class: "pbv pbv--compression-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv__row pbv__row--before" }, [
          el("span", { class: "pbv__label", text: "Verbose prompt" }),
          el("span", { class: "pbv__count pbv__count--before", text: "40 tok" })
        ]),
        el("div", { class: "pbv__phrase" }, [
          chip("Could",       "filler", 0),
          chip("you",         "filler", 120),
          chip("please",      "filler", 240),
          chip("kindly",      "filler", 360),
          chip("refactor",    "keep",   0),
          chip("this",        "filler", 480),
          chip("function",    "keep",   0),
          chip("to",          "filler", 600),
          chip("use",         "filler", 720),
          chip("async/await", "keep",   0)
        ]),
        el("div", { class: "pbv__meter" }, [
          el("span", { class: "pbv__meter-bar" }, [
            el("span", { class: "pbv__meter-fill" })
          ]),
          el("span", { class: "pbv__save", text: "−75%" })
        ]),
        el("div", { class: "pbv__row pbv__row--after" }, [
          el("span", { class: "pbv__label pbv__label--after", text: "Caveman speak" }),
          el("span", { class: "pbv__count pbv__count--after", text: "10 tok" })
        ])
      ]);
    },

    "prompt-compression-hero": function () {
      function rowChip(word, role) {
        return el("span", { class: "pbv-chip pbv-chip--" + role, text: word });
      }
      function row(level, label, savings, chips, delayMs) {
        var r = el("div", { class: "pbv-hero__row pbv-hero__row--" + level }, [
          el("div", { class: "pbv-hero__meta" }, [
            el("span", { class: "pbv-hero__level", text: label }),
            el("span", { class: "pbv-hero__savings", text: savings })
          ]),
          el("div", { class: "pbv-hero__phrase" }, chips)
        ]);
        r.style.animationDelay = delayMs + "ms";
        return r;
      }
      return el("div", { class: "pbv pbv--compression-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-hero__title" }, [
          el("span", { class: "pbv-hero__title-eyebrow", text: "Same meaning · fewer tokens" }),
          el("span", { class: "pbv-hero__title-headline", text: "Three levels of prompt compression" })
        ]),
        row("lite", "Lite", "≈ 22% off", [
          rowChip("please", "filler"),
          rowChip("refactor", "keep"),
          rowChip("the", "filler"),
          rowChip("function", "keep"),
          rowChip("to", "filler"),
          rowChip("async/await", "keep")
        ], 250),
        row("full", "Full", "≈ 50% off", [
          rowChip("refactor", "keep"),
          rowChip("function", "keep"),
          rowChip("→", "arrow"),
          rowChip("async/await", "keep")
        ], 900),
        row("ultra", "Ultra", "max savings", [
          rowChip("refactor()", "keep"),
          rowChip("⇒", "arrow"),
          rowChip("async", "keep")
        ], 1550),
        el("div", { class: "pbv-hero__pulse" }, [
          el("span", { class: "pbv-hero__pulse-num", text: "−75%" }),
          el("span", { class: "pbv-hero__pulse-label", text: "input tokens" })
        ])
      ]);
    },

    "structured-input": function () {
      function pane(kind, label, count, body) {
        return el("div", { class: "pbv-struct__pane pbv-struct__pane--" + kind }, [
          el("div", { class: "pbv-struct__pane-head" }, [
            el("span", { class: "pbv-struct__pane-label", text: label }),
            el("span", { class: "pbv-struct__pane-count", text: count + " tok" })
          ]),
          body,
          el("div", { class: "pbv-struct__bar" }, [
            el("span", { class: "pbv-struct__bar-fill pbv-struct__bar-fill--" + kind })
          ])
        ]);
      }
      var prose = el("p", { class: "pbv-struct__prose", text:
        "The endpoint accepts a user's email address and a password in the request body, validates them against the user store, and returns a signed JWT token along with its expiry."
      });
      var structured = el("pre", { class: "pbv-struct__code" }, [
        el("span", { class: "pbv-struct__line", text: "POST /login" }),
        el("span", { class: "pbv-struct__line", text: "  body:    { email, password }" }),
        el("span", { class: "pbv-struct__line", text: "  returns: { token, expiresAt }" }),
        el("span", { class: "pbv-struct__line", text: "  errors:  401 invalid_credentials" })
      ]);
      return el("div", { class: "pbv pbv--structured", "aria-hidden": "true" }, [
        pane("prose", "Prose", 55, prose),
        el("div", { class: "pbv-struct__arrow" }, [
          el("span", { class: "pbv-struct__arrow-mark", text: "→" }),
          el("span", { class: "pbv-struct__arrow-label", text: "compress" })
        ]),
        pane("structured", "Structured", 35, structured)
      ]);
    },

    /* ===================== LEVER 2 · Choose the right language ===================== */
    "language-tile": function () {
      function lang(code, label, ratio, tone, delay) {
        var bar = el("span", { class: "pbv-lang__bar pbv-lang__bar--" + tone }, [
          el("span", { class: "pbv-lang__fill", style: "--w:" + Math.round(ratio * 53) + "%" })
        ]);
        var row = el("div", { class: "pbv-lang__row" }, [
          el("span", { class: "pbv-lang__code", text: code }),
          el("span", { class: "pbv-lang__name", text: label }),
          bar,
          el("span", { class: "pbv-lang__ratio", text: ratio.toFixed(2) + "×" })
        ]);
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--language-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-lang__head" }, [
          el("span", { class: "pbv-lang__title", text: "Tokens per word" }),
          el("span", { class: "pbv-lang__pin", text: "EN cheapest" })
        ]),
        el("div", { class: "pbv-lang__list" }, [
          lang("EN", "English",   1.00, "best",  120),
          lang("ZH", "中文",       1.42, "warn",  280),
          lang("JA", "日本語",      1.55, "warn",  440),
          lang("AR", "العربية",   1.88, "bad",   600)
        ])
      ]);
    },

    "language-hero": function () {
      var langs = ["EN", "ES", "FR", "DE", "ZH", "JA", "AR", "KO", "RU"];
      var models = [
        { name: "Gemini",    row: [1.00, 1.12, 1.14, 1.18, 1.05, 1.10, 1.30, 1.20, 1.16] },
        { name: "Qwen",      row: [1.00, 1.10, 1.12, 1.16, 1.02, 1.08, 1.28, 1.18, 1.14] },
        { name: "GPT",       row: [1.00, 1.18, 1.20, 1.22, 1.40, 1.45, 1.70, 1.50, 1.38] },
        { name: "Sonnet",    row: [1.00, 1.22, 1.24, 1.26, 1.55, 1.62, 1.88, 1.60, 1.46] },
        { name: "Kimi",      row: [1.00, 1.30, 1.32, 1.35, 1.62, 1.70, 1.95, 1.68, 1.55] }
      ];
      function heatCell(v, idx) {
        var intensity = Math.max(0, Math.min(1, (v - 1) / 0.95));
        var cell = el("span", { class: "pbv-heat__cell", text: v.toFixed(2) });
        cell.style.setProperty("--heat", intensity.toFixed(2));
        cell.style.animationDelay = (idx * 35) + "ms";
        return cell;
      }
      var children = [el("div", { class: "pbv-heat__corner" })];
      langs.forEach(function (l, i) {
        var h = el("span", { class: "pbv-heat__head", text: l });
        if (i === 0) h.classList.add("is-best");
        children.push(h);
      });
      models.forEach(function (m, r) {
        children.push(el("span", { class: "pbv-heat__row-label", text: m.name }));
        m.row.forEach(function (v, c) { children.push(heatCell(v, r * 9 + c)); });
      });
      return el("div", { class: "pbv pbv--language-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-heat__title" }, [
          el("span", { class: "pbv-heat__eyebrow", text: "6 models · 9 languages" }),
          el("span", { class: "pbv-heat__headline", text: "English is the cheapest column" })
        ]),
        el("div", { class: "pbv-heat__grid" }, children),
        el("div", { class: "pbv-heat__legend" }, [
          el("span", { class: "pbv-heat__legend-label", text: "cheap" }),
          el("span", { class: "pbv-heat__legend-bar" }),
          el("span", { class: "pbv-heat__legend-label", text: "expensive" })
        ])
      ]);
    },

    /* ===================== LEVER 3 · Manage your context ===================== */
    "context-tile": function () {
      function layer(name, when, cls, delay) {
        var row = el("div", { class: "pbv-ctx__layer pbv-ctx__layer--" + cls }, [
          el("span", { class: "pbv-ctx__layer-name", text: name }),
          el("span", { class: "pbv-ctx__layer-when", text: when })
        ]);
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--context-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-ctx__head" }, [
          el("span", { class: "pbv-ctx__title", text: "copilot-instructions" }),
          el("span", { class: "pbv-ctx__cache" }, [
            el("span", { class: "pbv-ctx__cache-dot" }),
            el("span", { text: "cached × 10%" })
          ])
        ]),
        el("div", { class: "pbv-ctx__stack" }, [
          layer("Always-on",   "every turn",     "always", 100),
          layer("Conditional", "matching files", "cond",   350),
          layer("On-demand",   "by name",        "demand", 600)
        ])
      ]);
    },

    "context-hero": function () {
      function layer(name, when, example, cls, delay) {
        var row = el("div", { class: "pbv-ctx-hero__layer pbv-ctx-hero__layer--" + cls }, [
          el("div", { class: "pbv-ctx-hero__layer-head" }, [
            el("span", { class: "pbv-ctx-hero__layer-name", text: name }),
            el("span", { class: "pbv-ctx-hero__layer-when", text: when })
          ]),
          el("div", { class: "pbv-ctx-hero__example", text: example })
        ]);
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--context-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-ctx-hero__title" }, [
          el("span", { class: "pbv-ctx-hero__eyebrow", text: "Three layers, one cacheable prefix" }),
          el("span", { class: "pbv-ctx-hero__headline", text: "Load only what the turn needs" })
        ]),
        el("div", { class: "pbv-ctx-hero__cache-band" }, [
          el("span", { class: "pbv-ctx-hero__cache-label", text: "⚑ Stable cached prefix" }),
          el("span", { class: "pbv-ctx-hero__cache-cost", text: "× 10% cost" })
        ]),
        layer("Always-on",   "loaded every turn",            "style · output limits",                "always",  220),
        layer("Conditional", "applyTo: 'api/**'",            "API rules skip React turns",           "cond",    700),
        layer("On-demand",   "invoked by name",              "reusable skills, called deliberately", "demand", 1180)
      ]);
    },

    "token-loop": function () {
      function loop(n, tokens, delay) {
        var row = el("div", { class: "pbv-loop__row" }, [
          el("span", { class: "pbv-loop__num", text: "Loop " + n }),
          el("span", { class: "pbv-loop__bar" }, [
            el("span", { class: "pbv-loop__bar-fill", style: "--w:" + Math.min(100, tokens / 500) + "%" })
          ]),
          el("span", { class: "pbv-loop__tok", text: tokens.toLocaleString() + " tok" })
        ]);
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--token-loop", "aria-hidden": "true" }, [
        el("div", { class: "pbv-loop__title", text: "Every loop re-sends the whole conversation" }),
        loop(1,   1200,   100),
        loop(2,   3400,   400),
        loop(3,   8200,   700),
        loop("…", 28000, 1000),
        loop(20,  50000, 1300),
        el("div", { class: "pbv-loop__note", text: "→ ~50,000 tokens after 20 turns. Start fresh chats often." })
      ]);
    },

    "compounding-error": function () {
      var pts95 = [];
      var pts99 = [];
      for (var i = 0; i <= 50; i++) {
        pts95.push((i * 2) + "," + (60 - Math.pow(0.95, i) * 60).toFixed(1));
        pts99.push((i * 2) + "," + (60 - Math.pow(0.99, i) * 60).toFixed(1));
      }
      var ns = "http://www.w3.org/2000/svg";
      function svgEl(tag, attrs) {
        var n = document.createElementNS(ns, tag);
        for (var k in attrs) n.setAttribute(k, attrs[k]);
        return n;
      }
      var svg = svgEl("svg", { viewBox: "0 0 100 64", preserveAspectRatio: "none", class: "pbv-decay__svg" });
      svg.appendChild(svgEl("polyline", { points: pts99.join(" "), class: "pbv-decay__line pbv-decay__line--good" }));
      svg.appendChild(svgEl("polyline", { points: pts95.join(" "), class: "pbv-decay__line pbv-decay__line--bad"  }));
      return el("div", { class: "pbv pbv--decay", "aria-hidden": "true" }, [
        el("div", { class: "pbv-decay__head" }, [
          el("span", { class: "pbv-decay__title", text: "Error compounds across steps" }),
          el("span", { class: "pbv-decay__legend" }, [
            el("span", { class: "pbv-decay__sw pbv-decay__sw--good" }),
            el("span", { text: "99%/step" }),
            el("span", { class: "pbv-decay__sw pbv-decay__sw--bad" }),
            el("span", { text: "95%/step" })
          ])
        ]),
        el("div", { class: "pbv-decay__chart" }, [
          svg,
          el("span", { class: "pbv-decay__anno pbv-decay__anno--good", text: "99% \u2192 \u224861% after 50 steps" }),
          el("span", { class: "pbv-decay__anno pbv-decay__anno--bad",  text: "95% \u2192 \u22488% after 50 steps" }),
          el("span", { class: "pbv-decay__hover-hint", "aria-hidden": "true", text: "\u24d8 hover for the math" })
        ]),
        el("div", { class: "pbv-decay__axis-x" }, [
          el("span", { text: "1 step" }),
          el("span", { text: "25" }),
          el("span", { text: "50 steps" })
        ]),
        el("div", { class: "pbv-decay__tooltip" }, [
          el("p", { class: "pbv-decay__tip-p", html:
            "Large language models are non-deterministic. They have an error margin and will never be 100% accurate. In multi-step agentic workflows, this creates compounding errors."
          }),
          el("p", { class: "pbv-decay__tip-p", html:
            "Here\u2019s the math: At 99% accuracy per step (which is optimistic), 50 steps reduces your overall accuracy to just 61%. Drop to 95% per step\u2014still sounds good, right?\u2014and you end up at 8% accuracy over 50 steps."
          }),
          el("p", { class: "pbv-decay__tip-p", html:
            "This doesn\u2019t mean every agent will fail. But it means every quality improvement dramatically increases your chances of success. And consider the cost: every agent miss wastes those tokens, requiring bug fixes, reviews, and additional agent runs."
          }),
          el("p", { class: "pbv-decay__tip-p", html:
            "You might even have incidents caused by low-quality agent output. In classical software development, we addressed this kind of problem with the <strong>shift-left movement</strong> \u2014 shift-left quality, testing, security. All of that becomes even more true in agentic systems."
          })
        ])
      ]);
    },

    "applyto-cache": function () {
      function bullet(text, delay) {
        var row = el("li", { class: "pbv-ac__bullet" }, [
          el("span", { class: "pbv-ac__bullet-mark" }),
          el("span", { class: "pbv-ac__bullet-text", text: text })
        ]);
        row.style.animationDelay = delay + "ms";
        return row;
      }
      function codeLine(text, cls, delay) {
        var row = el("span", { class: "pbv-ac__code-line" + (cls ? " " + cls : ""), text: text });
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--applyto-cache", "aria-hidden": "true" }, [
        el("div", { class: "pbv-ac__col pbv-ac__col--code" }, [
          el("div", { class: "pbv-ac__col-head", text: "Scope rules with applyTo" }),
          el("pre", { class: "pbv-ac__code" }, [
            codeLine("# .github/instructions/api.instructions.md", "is-comment", 100),
            codeLine("---", "is-divider", 200),
            codeLine("applyTo: \"src/api/**/*.ts\"", "is-key", 320),
            codeLine("---", "is-divider", 440),
            codeLine("API conventions:", "", 560),
            codeLine("  - Routes in src/api/routes/. Handlers thin.", "", 660),
            codeLine("  - Validate with zod. Errors via Result<T,E>.", "", 760),
            codeLine("  - Return { data, error } envelope.", "", 860)
          ])
        ]),
        el("div", { class: "pbv-ac__col pbv-ac__col--hygiene" }, [
          el("div", { class: "pbv-ac__col-head", text: "Caching & new-chat hygiene" }),
          el("ul", { class: "pbv-ac__list" }, [
            bullet("Put stable prefixes (system instructions, long docs) at the TOP. Cached prefixes bill at ~10%, but rearranging breaks the cache.", 200),
            bullet("Start a new chat when the topic shifts, after answers received, or when context is near-full. After 20 turns, history can carry 50K+ tokens — summarize and restart.", 600)
          ])
        ])
      ]);
    },

    "context-ladder": function () {
      function row(mention, useWhen, avoid, avoidTone, delay) {
        var r = el("div", { class: "pbv-cl__row" }, [
          el("span", { class: "pbv-cl__cell pbv-cl__cell--mention", text: mention }),
          el("span", { class: "pbv-cl__cell pbv-cl__cell--use", text: useWhen }),
          el("span", { class: "pbv-cl__cell pbv-cl__cell--avoid pbv-cl__cell--avoid-" + avoidTone, text: avoid })
        ]);
        r.style.animationDelay = delay + "ms";
        return r;
      }
      return el("div", { class: "pbv pbv--context-ladder", "aria-hidden": "true" }, [
        el("div", { class: "pbv-cl__head" }, [
          el("span", { class: "pbv-cl__head-cell", text: "Mention" }),
          el("span", { class: "pbv-cl__head-cell", text: "Use when" }),
          el("span", { class: "pbv-cl__head-cell", text: "Avoid when" })
        ]),
        row("#selection",            "Refactor / explain a few highlighted lines", "Question spans the whole file",        "good",  120),
        row("#file:Lx-Ly",           "Specific function or block in a known file",  "You don't know the line range",        "good",  260),
        row("#file",                 "Whole file is small and clearly relevant",    "File > 500 lines or only partly relevant", "good", 400),
        row("#codebase",             "Cross-file architecture / refactor questions","Question is local — wastes 10×–50× tokens", "warn", 540),
        row("#terminalSelection",    "Debugging the exact error you just saw",      "Generic \"why did this break\"",        "warn",  680),
        row("#problems / #testFailure", "Fixing diagnostics or failed tests",       "Speculative debugging without an error", "good", 820)
      ]);
    },

    "session-disposal": function () {
      function row(action, when, impact, tone, delay) {
        var r = el("div", { class: "pbv-sd__row" }, [
          el("span", { class: "pbv-sd__cell pbv-sd__cell--action", text: action }),
          el("span", { class: "pbv-sd__cell pbv-sd__cell--when",   text: when }),
          el("span", { class: "pbv-sd__cell pbv-sd__cell--impact pbv-sd__cell--impact-" + tone, text: impact })
        ]);
        r.style.animationDelay = delay + "ms";
        return r;
      }
      return el("div", { class: "pbv pbv--session-disposal", "aria-hidden": "true" }, [
        el("div", { class: "pbv-sd__intro", text: "By turn 30, conversation history is ≈90% of the bill. Treat sessions as disposable." }),
        el("div", { class: "pbv-sd__head" }, [
          el("span", { class: "pbv-sd__head-cell", text: "Action" }),
          el("span", { class: "pbv-sd__head-cell", text: "When to use" }),
          el("span", { class: "pbv-sd__head-cell", text: "Token impact" })
        ]),
        row("/compact",         "Long thread, still on the same task",         "70–85% off",      "good",  120),
        row("/fork",            "Branching to a side question, want to return", "Keeps parent clean", "good",  260),
        row("/clear or new chat","Topic shift, no need for prior context",      "100% reset",      "good",  400),
        row("Archive + restart","Daily — even successful sessions",             "Prevents creep",  "warn",  540),
        row("Pin key facts",    "Save decisions to AGENTS.md, not chat history","Permanent, cheap","warn",  680),
        row("Avoid",            "30+ turn sessions across unrelated tasks",     "10× cost growth", "good",  820)
      ]);
    },

    /* ===================== LEVER 4 · Output control ===================== */
    "output-tile": function () {
      return el("div", { class: "pbv pbv--output-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-out__rule" }, [
          el("span", { class: "pbv-out__rule-mark", text: "⚑" }),
          el("span", { class: "pbv-out__rule-text", text: "Code only, no explanation." })
        ]),
        el("div", { class: "pbv-out__lane" }, [
          el("span", { class: "pbv-out__lane-label", text: "Output" }),
          el("span", { class: "pbv-out__lane-track" }, [
            el("span", { class: "pbv-out__lane-fill" })
          ]),
          el("span", { class: "pbv-out__cost", text: "4–8× input" })
        ]),
        el("div", { class: "pbv-out__save" }, [
          el("span", { class: "pbv-out__save-num", text: "−70%" }),
          el("span", { class: "pbv-out__save-label", text: "output cost, paid once" })
        ])
      ]);
    },

    "output-hero": function () {
      function lane(label, fillPct, cls, savings, delay) {
        var bar = el("span", { class: "pbv-outh__bar" }, [
          el("span", { class: "pbv-outh__bar-fill pbv-outh__bar-fill--" + cls, style: "--w:" + fillPct + "%" })
        ]);
        var row = el("div", { class: "pbv-outh__lane" }, [
          el("span", { class: "pbv-outh__lane-label", text: label }),
          bar,
          el("span", { class: "pbv-outh__lane-save", text: savings })
        ]);
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--output-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-outh__title" }, [
          el("span", { class: "pbv-outh__eyebrow", text: "One sentence, paid once" }),
          el("span", { class: "pbv-outh__headline", text: "Short replies forever" })
        ]),
        lane("Default",                       100, "loud", "— baseline",  250),
        lane("'Answer in one sentence.'",      32, "calm", "~68% off",    900),
        lane("'Code only, no prose.'",         22, "calm", "~78% off",   1500),
        el("div", { class: "pbv-outh__pulse" }, [
          el("span", { class: "pbv-outh__pulse-num", text: "4–8×" }),
          el("span", { class: "pbv-outh__pulse-label", text: "output : input" })
        ])
      ]);
    },

    /* ===================== LEVER 5 · Choose the right mode ===================== */
    "mode-tile": function () {
      function mode(name, calls, cls, fill, delay) {
        var card = el("div", { class: "pbv-mode__card pbv-mode__card--" + cls }, [
          el("div", { class: "pbv-mode__name", text: name }),
          el("div", { class: "pbv-mode__calls", text: calls }),
          el("div", { class: "pbv-mode__meter" }, [
            el("span", { class: "pbv-mode__meter-fill", style: "--w:" + fill + "%" })
          ])
        ]);
        card.style.animationDelay = delay + "ms";
        return card;
      }
      return el("div", { class: "pbv pbv--mode-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-mode__title", text: "Match the mode to the question" }),
        el("div", { class: "pbv-mode__row" }, [
          mode("Ask",   "1 call",     "ask",   12, 150),
          mode("Plan",  "1 call",     "plan",  22, 400),
          mode("Agent", "5–25 calls", "agent", 96, 650)
        ])
      ]);
    },

    "mode-hero": function () {
      function row(name, useFor, calls, tokens, fill, cls, delay) {
        var r = el("div", { class: "pbv-modeh__row pbv-modeh__row--" + cls }, [
          el("div", { class: "pbv-modeh__head" }, [
            el("span", { class: "pbv-modeh__name", text: name }),
            el("span", { class: "pbv-modeh__use", text: useFor })
          ]),
          el("div", { class: "pbv-modeh__meter" }, [
            el("span", { class: "pbv-modeh__meter-fill", style: "--w:" + fill + "%" })
          ]),
          el("div", { class: "pbv-modeh__stats" }, [
            el("span", { class: "pbv-modeh__calls", text: calls }),
            el("span", { class: "pbv-modeh__tok", text: tokens })
          ])
        ]);
        r.style.animationDelay = delay + "ms";
        return r;
      }
      return el("div", { class: "pbv pbv--mode-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-modeh__title" }, [
          el("span", { class: "pbv-modeh__eyebrow", text: "Three modes, three budgets" }),
          el("span", { class: "pbv-modeh__headline", text: "Ask · Plan · Agent" })
        ]),
        row("Ask",   "questions · lookups",              "1 call",     "0.5–2k tok",  10,  "ask",   250),
        row("Plan",  "design before you build",          "1 call",     "1–4k tok",    22,  "plan",  900),
        row("Agent", "multi-file refactor · full feature","5–25 calls", "15–50k tok", 100,  "agent", 1550),
        el("div", { class: "pbv-modeh__pulse" }, [
          el("span", { class: "pbv-modeh__pulse-num", text: "5–25×" }),
          el("span", { class: "pbv-modeh__pulse-label", text: "Agent vs Ask" })
        ])
      ]);
    },

    /* ===================== LEVER 6 · Phases, agents, skills, sub-agents ===================== */
    "custom-agent-tile": function () {
      function node(cls, label) {
        return el("div", { class: "pbv-ca__node pbv-ca__node--" + cls }, [
          el("span", { class: "pbv-ca__node-label", text: label })
        ]);
      }
      function arrow(cls) {
        return el("span", { class: "pbv-ca__arrow pbv-ca__arrow--" + cls, "aria-hidden": "true" });
      }
      return el("div", { class: "pbv pbv--custom-agent-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-ca__cmd" }, [
          el("span", { class: "pbv-ca__cmd-prompt", text: "›" }),
          el("span", { class: "pbv-ca__cmd-text", text: "/tdd-red add api endpoint" }),
          el("span", { class: "pbv-ca__caret" })
        ]),
        el("div", { class: "pbv-ca__row pbv-ca__row--top" }, [
          node("agent", "custom agent"),
          arrow("h1"),
          node("prompt", "prompt")
        ]),
        el("div", { class: "pbv-ca__trunk" }, [
          arrow("v"),
          node("harness", "harness · retrieves agent file")
        ]),
        el("div", { class: "pbv-ca__fan" }, [
          el("div", { class: "pbv-ca__fan-line" }, [
            el("span", { class: "pbv-ca__fan-stem pbv-ca__fan-stem--a" })
          ]),
          el("div", { class: "pbv-ca__fan-pills" }, [
            node("tools",  "adjust tools"),
            node("def",    "inject definition"),
            node("append", "append prompt")
          ])
        ])
      ]);
    },

    "custom-agent-hero": function () {
      function node(cls, eyebrow, label, delayMs) {
        var n = el("div", { class: "pbv-cah__node pbv-cah__node--" + cls }, [
          el("span", { class: "pbv-cah__eyebrow", text: eyebrow }),
          el("span", { class: "pbv-cah__label",   text: label })
        ]);
        if (delayMs != null) n.style.animationDelay = delayMs + "ms";
        return n;
      }
      function pill(cls, eyebrow, label, delayMs) {
        var p = el("div", { class: "pbv-cah__pill pbv-cah__pill--" + cls }, [
          el("span", { class: "pbv-cah__pill-eyebrow", text: eyebrow }),
          el("span", { class: "pbv-cah__pill-label",   text: label })
        ]);
        p.style.animationDelay = delayMs + "ms";
        return p;
      }
      return el("div", { class: "pbv pbv--custom-agent-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-cah__title" }, [
          el("span", { class: "pbv-cah__title-eyebrow", text: "Anatomy of a custom-agent run" }),
          el("span", { class: "pbv-cah__title-headline", text: "User invokes → harness assembles → agent runs" })
        ]),

        /* Row 1: USER → CUSTOM AGENT → PROMPT */
        el("div", { class: "pbv-cah__row pbv-cah__row--invoke" }, [
          el("div", { class: "pbv-cah__user", style: "animation-delay: 0ms" }, [
            el("span", { class: "pbv-cah__user-eyebrow", text: "USER" }),
            el("span", { class: "pbv-cah__user-cmd" }, [
              el("span", { class: "pbv-cah__user-slash", text: "/" }),
              el("span", { class: "pbv-cah__user-text",  text: "tdd-red add api endpoint" }),
              el("span", { class: "pbv-cah__user-caret" })
            ])
          ]),
          el("span", { class: "pbv-cah__connect pbv-cah__connect--h pbv-cah__connect--c1" }),
          node("agent",  "CUSTOM AGENT", "tdd-red", 360),
          el("span", { class: "pbv-cah__connect pbv-cah__connect--h pbv-cah__connect--c2" }),
          node("prompt", "PROMPT", "user request", 720)
        ]),

        /* Row 2: trunk down to harness */
        el("div", { class: "pbv-cah__trunk" }, [
          el("span", { class: "pbv-cah__connect pbv-cah__connect--v" }),
          node("harness", "HARNESS", "retrieves the agent file", 1080)
        ]),

        /* Row 3: branched harness steps */
        el("div", { class: "pbv-cah__branch" }, [
          el("div", { class: "pbv-cah__branch-rails", "aria-hidden": "true" }, [
            el("span", { class: "pbv-cah__rail pbv-cah__rail--a" }),
            el("span", { class: "pbv-cah__rail pbv-cah__rail--b" }),
            el("span", { class: "pbv-cah__rail pbv-cah__rail--c" })
          ]),
          el("div", { class: "pbv-cah__branch-pills" }, [
            pill("tools",  "HARNESS", "adjusts available tools",         1440),
            pill("def",    "HARNESS", "injects custom-agent definition", 1640),
            pill("append", "HARNESS", "appends user prompt",             1840)
          ])
        ])
      ]);
    },

    /* ===================== LEVER 6 · Phases, agents, skills, sub-agents ===================== */
    "phases-tile": function () {
      function phase(num, name, delay) {
        var p = el("div", { class: "pbv-ph__phase" }, [
          el("span", { class: "pbv-ph__phase-num", text: "0" + num }),
          el("span", { class: "pbv-ph__phase-name", text: name })
        ]);
        p.style.animationDelay = delay + "ms";
        return p;
      }
      function gap(delay) {
        var g = el("div", { class: "pbv-ph__gap" }, [
          el("span", { class: "pbv-ph__gap-mark", text: "│" }),
          el("span", { class: "pbv-ph__gap-label", text: "fresh ctx" })
        ]);
        g.style.animationDelay = delay + "ms";
        return g;
      }
      return el("div", { class: "pbv pbv--phases-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-ph__title", text: "Three phases · three context windows" }),
        el("div", { class: "pbv-ph__pipe" }, [
          phase(1, "Research",  100),
          gap(350),
          phase(2, "Plan",      550),
          gap(800),
          phase(3, "Implement", 1000)
        ])
      ]);
    },

    "phases-hero": function () {
      function phase(num, name, gathers, drops, cls, delay) {
        var p = el("div", { class: "pbv-phh__phase pbv-phh__phase--" + cls }, [
          el("div", { class: "pbv-phh__phase-head" }, [
            el("span", { class: "pbv-phh__phase-num", text: "0" + num }),
            el("span", { class: "pbv-phh__phase-name", text: name })
          ]),
          el("div", { class: "pbv-phh__phase-gather", text: gathers }),
          el("div", { class: "pbv-phh__phase-drop",   text: drops })
        ]);
        p.style.animationDelay = delay + "ms";
        return p;
      }
      return el("div", { class: "pbv pbv--phases-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-phh__title" }, [
          el("span", { class: "pbv-phh__eyebrow", text: "Reset context between phases" }),
          el("span", { class: "pbv-phh__headline", text: "Research → Plan → Implement" })
        ]),
        el("div", { class: "pbv-phh__grid" }, [
          phase(1, "Research",  "loads many files",     "drops irrelevant",       "research",  220),
          phase(2, "Plan",      "reasoning model",      "writes precise spec",    "plan",      700),
          phase(3, "Implement", "cheap model executes", "context stays lean",     "implement", 1180)
        ])
      ]);
    },

    "parallel-agents": function () {
      function lane(label, color, delay) {
        var l = el("div", { class: "pbv-par__lane pbv-par__lane--" + color }, [
          el("span", { class: "pbv-par__lane-label", text: label }),
          el("div", { class: "pbv-par__track" }, [
            el("span", { class: "pbv-par__shuttle" })
          ])
        ]);
        l.style.animationDelay = delay + "ms";
        return l;
      }
      return el("div", { class: "pbv pbv--parallel", "aria-hidden": "true" }, [
        el("div", { class: "pbv-par__spec", text: "§ spec.md — contracts upfront" }),
        el("div", { class: "pbv-par__split" }, [
          lane("agent · frontend", "a", 150),
          lane("agent · backend",  "b", 350),
          lane("agent · database", "c", 550)
        ]),
        el("div", { class: "pbv-par__merge", text: "→ merged feature" })
      ]);
    },

    "sub-agents": function () {
      return el("div", { class: "pbv pbv--subagents", "aria-hidden": "true" }, [
        el("div", { class: "pbv-sub__main" }, [
          el("div", { class: "pbv-sub__head", text: "main session" }),
          el("div", { class: "pbv-sub__body", text: "… stays lean" })
        ]),
        el("div", { class: "pbv-sub__bridge" }, [
          el("span", { class: "pbv-sub__bridge-out", text: "research →" }),
          el("span", { class: "pbv-sub__bridge-in",  text: "← summary" })
        ]),
        el("div", { class: "pbv-sub__child" }, [
          el("div", { class: "pbv-sub__head", text: "sub-agent" }),
          el("div", { class: "pbv-sub__body" }, [
            el("span", { class: "pbv-sub__doc" }),
            el("span", { class: "pbv-sub__doc" }),
            el("span", { class: "pbv-sub__doc" }),
            el("span", { class: "pbv-sub__doc" })
          ])
        ])
      ]);
    },

    /* ===================== LEVER 5 · Divide and conquer (section) ===================== */
    "divide-conquer": function () {
      function block(cls, label, delay) {
        var b = el("div", { class: "pbv-dac__blk pbv-dac__blk--" + cls, text: label });
        b.style.animationDelay = delay + "ms";
        return b;
      }
      function lane(tag, model, blocks, delay) {
        var l = el("div", { class: "pbv-dac__lane" }, [
          el("div", { class: "pbv-dac__tag" }, [
            el("span", { class: "pbv-dac__tag-name", text: tag }),
            el("span", { class: "pbv-dac__tag-model", text: model })
          ]),
          el("div", { class: "pbv-dac__strip" }, blocks)
        ]);
        l.style.animationDelay = delay + "ms";
        return l;
      }
      return el("div", { class: "pbv pbv--divide-conquer", "aria-hidden": "true" }, [
        el("div", { class: "pbv-dac__title" }, [
          el("span", { class: "pbv-dac__eyebrow", text: "Divide and conquer" }),
          el("span", { class: "pbv-dac__headline", text: "Research → Plan → Implement" })
        ]),
        el("div", { class: "pbv-dac__bubble" }, [
          el("span", { text: "“I want to change X. Which files are relevant?”" })
        ]),
        lane("/research", "reasoning model", [
          block("sys",    "system",  150),
          block("prompt", "prompt",  280),
          block("file bad",  "file ✗", 420),
          block("file bad",  "file ✗", 540),
          block("file good", "file ✓", 660),
          block("file bad",  "file ✗", 780),
          block("file bad",  "file ✗", 900),
          block("file good", "file ✓", 1020),
          block("handoff",   "plan input →", 1180)
        ], 0),
        lane("/plan", "reasoning model", [
          block("sys",    "system",  1400),
          block("prompt", "prompt",  1520),
          block("handoff in", "← plan input", 1650),
          block("file good", "file ✓", 1780),
          block("file good", "file ✓", 1900),
          block("reason", "reason",  2040),
          block("spec",   "precise spec →", 2200)
        ], 1300),
        lane("/fleet", "cheap model", [
          block("sys",    "system",  2420),
          block("prompt", "prompt",  2540),
          block("spec in", "← spec", 2660),
          block("file good", "file ✓", 2780),
          block("file good", "file ✓", 2900),
          block("change", "change calls", 3040)
        ], 2350)
      ]);
    },

    /* ===================== LEVER 5 · Deterministic controls (section) ===================== */
    "deterministic-controls": function () {
      function block(cls, label, delay) {
        var b = el("div", { class: "pbv-det__blk pbv-det__blk--" + cls, text: label });
        b.style.animationDelay = delay + "ms";
        return b;
      }
      function lane(label, blocks, mod, delay) {
        var l = el("div", { class: "pbv-det__lane pbv-det__lane--" + mod }, [
          el("div", { class: "pbv-det__label", text: label }),
          el("div", { class: "pbv-det__strip" }, blocks)
        ]);
        l.style.animationDelay = delay + "ms";
        return l;
      }
      return el("div", { class: "pbv pbv--det-controls", "aria-hidden": "true" }, [
        el("div", { class: "pbv-det__title" }, [
          el("span", { class: "pbv-det__eyebrow", text: "Avoid compounding errors" }),
          el("span", { class: "pbv-det__headline", text: "Tests are a deterministic control" })
        ]),
        lane("With unit tests", [
          block("sys",      "system & tools",   200),
          block("prompt",   "prompt",           340),
          block("bad",      "buggy change",     480),
          block("bad",      "failing tests",    620),
          block("good",     "correction",       780),
          block("good",     "change 2",         920),
          block("good",     "succeeding tests", 1080)
        ], "with", 0),
        lane("Without unit tests", [
          block("sys",      "system & tools",   1400),
          block("prompt",   "prompt",           1540),
          block("bad",      "buggy change",     1680),
          block("bad",      "buggy change 2",   1820),
          block("bad",      "buggy change 3",   1960),
          block("bad",      "buggy change 4",   2100)
        ], "without", 1300),
        el("div", { class: "pbv-det__incident" }, [
          el("span", { class: "pbv-det__incident-dot" }),
          el("span", { class: "pbv-det__incident-text", text: "→ wasted CI minutes, review cycles, human time" })
        ]),
        lane("Debugging session", [
          block("sys",      "system & tools",   2400),
          block("prompt",   "prompt",           2540),
          block("bad wide", "buggy research",   2680),
          block("good",     "bug fix",          2900)
        ], "debug", 2350)
      ]);
    },

    /* ===================== LEVER 7 · Choose the right model ===================== */
    "model-tile": function () {
      function bar(name, cls, cost, fill, delay) {
        var b = el("div", { class: "pbv-mdl__bar pbv-mdl__bar--" + cls }, [
          el("span", { class: "pbv-mdl__bar-name", text: name }),
          el("span", { class: "pbv-mdl__bar-track" }, [
            el("span", { class: "pbv-mdl__bar-fill", style: "--w:" + fill + "%" })
          ]),
          el("span", { class: "pbv-mdl__bar-cost", text: cost })
        ]);
        b.style.animationDelay = delay + "ms";
        return b;
      }
      return el("div", { class: "pbv pbv--model-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-mdl__title", text: "30 turns of work" }),
        bar("All Opus",   "opus",   "50 u",   100, 100),
        bar("All Sonnet", "sonnet", "30 u",    60, 350),
        bar("Mixed",      "mixed",  "22.8 u",  46, 600),
        el("div", { class: "pbv-mdl__win", text: "↓ −24% vs all-Sonnet" })
      ]);
    },

    "model-hero": function () {
      function stage(num, model, task, cls, delay) {
        var s = el("div", { class: "pbv-mdlh__stage pbv-mdlh__stage--" + cls }, [
          el("div", { class: "pbv-mdlh__stage-head" }, [
            el("span", { class: "pbv-mdlh__stage-num", text: "Stage " + num }),
            el("span", { class: "pbv-mdlh__stage-model", text: model })
          ]),
          el("div", { class: "pbv-mdlh__stage-task", text: task })
        ]);
        s.style.animationDelay = delay + "ms";
        return s;
      }
      function cmpRow(label, fill, val, cls) {
        return el("div", { class: "pbv-mdlh__compare-row" + (cls ? " pbv-mdlh__compare-row--" + cls : "") }, [
          el("span", { class: "pbv-mdlh__compare-label", text: label }),
          el("span", { class: "pbv-mdlh__compare-bar" }, [
            el("span", { class: "pbv-mdlh__compare-bar-fill", style: "--w:" + fill + "%" })
          ]),
          el("span", { class: "pbv-mdlh__compare-val", text: val })
        ]);
      }
      return el("div", { class: "pbv pbv--model-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-mdlh__title" }, [
          el("span", { class: "pbv-mdlh__eyebrow", text: "Two-stage workflow" }),
          el("span", { class: "pbv-mdlh__headline", text: "Big model thinks. Small model types." })
        ]),
        el("div", { class: "pbv-mdlh__flow" }, [
          stage(1, "Opus 4.7",   "plan the change", "big",   250),
          el("span", { class: "pbv-mdlh__arrow", text: "→" }),
          stage(2, "Sonnet 4.6", "do the typing",   "small", 900)
        ]),
        el("div", { class: "pbv-mdlh__compare" }, [
          cmpRow("All Opus",   100, "50 u",   null),
          cmpRow("All Sonnet",  60, "30 u",   "sonnet"),
          cmpRow("Mixed",       46, "22.8 u", "win")
        ])
      ]);
    },

    /* ===================== LEVER 8 · Manage your AGENTS file ===================== */
    "agents-tile": function () {
      function line(kind, text, delay) {
        var l = el("div", { class: "pbv-ag__line pbv-ag__line--" + kind }, [
          el("span", { class: "pbv-ag__line-mark", text: kind === "keep" ? "+" : "–" }),
          el("span", { class: "pbv-ag__line-text", text: text })
        ]);
        l.style.animationDelay = delay + "ms";
        return l;
      }
      return el("div", { class: "pbv pbv--agents-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-ag__head" }, [
          el("span", { class: "pbv-ag__dot" }),
          el("span", { class: "pbv-ag__dot" }),
          el("span", { class: "pbv-ag__dot" }),
          el("span", { class: "pbv-ag__name", text: "AGENTS.md" })
        ]),
        el("div", { class: "pbv-ag__body" }, [
          line("keep", "Use uv, not pip.",            150),
          line("drop", "This is a Python project.",   320),
          line("keep", "Deploy needs VPN.",           490),
          line("drop", "src/ holds the source code.", 660),
          line("keep", "Don't touch auth right now.", 830)
        ])
      ]);
    },

    "agents-hero": function () {
      function side(label, lines, kind) {
        return el("div", { class: "pbv-agh__pane pbv-agh__pane--" + kind }, [
          el("div", { class: "pbv-agh__pane-head" }, [
            el("span", { class: "pbv-agh__pane-label", text: label }),
            el("span", { class: "pbv-agh__pane-tok", text: kind === "after" ? "3 landmines" : "42 trivia lines" })
          ]),
          el("div", { class: "pbv-agh__pane-body" },
            lines.map(function (txt, i) {
              var ln = el("div", { class: "pbv-agh__row pbv-agh__row--" + (kind === "after" ? "keep" : "noise") }, [
                el("span", { class: "pbv-agh__row-mark", text: kind === "after" ? "⚑" : "×" }),
                el("span", { class: "pbv-agh__row-text", text: txt })
              ]);
              ln.style.animationDelay = (i * 130) + "ms";
              return ln;
            })
          )
        ]);
      }
      return el("div", { class: "pbv pbv--agents-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-agh__title" }, [
          el("span", { class: "pbv-agh__eyebrow", text: "Landmines, not encyclopedias" }),
          el("span", { class: "pbv-agh__headline", text: "Keep what the agent can't guess" })
        ]),
        el("div", { class: "pbv-agh__compare" }, [
          side("/init output", [
            "This is a Python project.",
            "src/ holds the source code.",
            "Tests live in tests/.",
            "Use the README to learn more.",
            "… 38 more lines of repo trivia."
          ], "before"),
          el("div", { class: "pbv-agh__arrow", text: "→" }),
          side("curated", [
            "Use uv, not pip.",
            "Deploy needs VPN.",
            "Don't touch auth right now."
          ], "after")
        ]),
        el("div", { class: "pbv-agh__metric" }, [
          el("span", { class: "pbv-agh__metric-bad", text: "+20–23% tokens" }),
          el("span", { class: "pbv-agh__metric-dot", text: "·" }),
          el("span", { class: "pbv-agh__metric-bad", text: "−2% correctness" }),
          el("span", { class: "pbv-agh__metric-note", text: "— unedited /init" })
        ])
      ]);
    },

    /* ===================== LEVER 9 · Clean up your tools ===================== */
    "tools-tile": function () {
      var cells = [];
      for (var i = 0; i < 48; i++) {
        var d = el("span", { class: "pbv-tl__cell" });
        d.style.animationDelay = (i * 45) + "ms";
        if (i >= 18) d.classList.add("is-off");
        cells.push(d);
      }
      return el("div", { class: "pbv pbv--tools-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-tl__head" }, [
          el("span", { class: "pbv-tl__title", text: "MCP tools enabled" }),
          el("span", { class: "pbv-tl__count" }, [
            el("span", { class: "pbv-tl__count-old", text: "188" }),
            el("span", { class: "pbv-tl__count-arrow", text: "→" }),
            el("span", { class: "pbv-tl__count-new", text: "52" })
          ])
        ]),
        el("div", { class: "pbv-tl__grid" }, cells),
        el("div", { class: "pbv-tl__foot" }, [
          el("span", { class: "pbv-tl__foot-num", text: "−650k" }),
          el("span", { class: "pbv-tl__foot-label", text: "tokens / day" })
        ])
      ]);
    },

    "tools-hero": function () {
      function step(n, schemaSize, delay) {
        var s = el("div", { class: "pbv-tlh__step" }, [
          el("span", { class: "pbv-tlh__step-n", text: "step " + n }),
          el("span", { class: "pbv-tlh__schema-188", style: "--h:" + schemaSize + "px" }),
          el("span", { class: "pbv-tlh__schema-52",  style: "--h:" + Math.round(schemaSize * 0.28) + "px" })
        ]);
        s.style.animationDelay = delay + "ms";
        return s;
      }
      return el("div", { class: "pbv pbv--tools-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-tlh__title" }, [
          el("span", { class: "pbv-tlh__eyebrow", text: "Schema rides along every step" }),
          el("span", { class: "pbv-tlh__headline", text: "Audit your tool drawer" })
        ]),
        el("div", { class: "pbv-tlh__legend" }, [
          el("span", { class: "pbv-tlh__sw pbv-tlh__sw--188" }),
          el("span", { class: "pbv-tlh__sw-label", text: "188 tools" }),
          el("span", { class: "pbv-tlh__sw pbv-tlh__sw--52" }),
          el("span", { class: "pbv-tlh__sw-label", text: "52 tools (post-audit)" })
        ]),
        el("div", { class: "pbv-tlh__chart" }, [
          step(5,   60, 200),
          step(15, 110, 450),
          step(30, 160, 700)
        ]),
        el("div", { class: "pbv-tlh__numbers" }, [
          el("span", { class: "pbv-tlh__num pbv-tlh__num--bad",  text: "330k tok @ 188 tools" }),
          el("span", { class: "pbv-tlh__num pbv-tlh__num--good", text: "~92k tok @ 52 tools" })
        ])
      ]);
    },

    /* ===================== LEVER 10 · Usage limits & overages ===================== */
    "limits-tile": function () {
      return el("div", { class: "pbv pbv--limits-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-lim__head" }, [
          el("span", { class: "pbv-lim__title", text: "Monthly usage" }),
          el("span", { class: "pbv-lim__cap", text: "cap" })
        ]),
        el("div", { class: "pbv-lim__gauge" }, [
          el("span", { class: "pbv-lim__gauge-fill" }),
          el("span", { class: "pbv-lim__cap-mark", text: "100%" })
        ]),
        el("div", { class: "pbv-lim__legend" }, [
          el("span", { class: "pbv-lim__sw pbv-lim__sw--ok" }),
          el("span", { class: "pbv-lim__sw-label", text: "entitlement" }),
          el("span", { class: "pbv-lim__sw pbv-lim__sw--warn" }),
          el("span", { class: "pbv-lim__sw-label", text: "overage 10–15%" })
        ])
      ]);
    },

    "limits-hero": function () {
      function team(name, fill, over, cls, delay) {
        var t = el("div", { class: "pbv-limh__team pbv-limh__team--" + cls }, [
          el("div", { class: "pbv-limh__team-name", text: name }),
          el("div", { class: "pbv-limh__track" }, [
            el("span", { class: "pbv-limh__track-fill", style: "--w:" + fill + "%" }),
            el("span", { class: "pbv-limh__track-over", style: "--w:" + over + "%; --x:" + fill + "%" }),
            el("span", { class: "pbv-limh__cap" })
          ]),
          el("div", { class: "pbv-limh__team-tag", text: cls === "healthy" ? "healthy • " + over + "% overage" : "uncontrolled • " + over + "% overage" })
        ]);
        t.style.animationDelay = delay + "ms";
        return t;
      }
      return el("div", { class: "pbv pbv--limits-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-limh__title" }, [
          el("span", { class: "pbv-limh__eyebrow", text: "Cap the bill" }),
          el("span", { class: "pbv-limh__headline", text: "Set the meter — before it sets you" })
        ]),
        team("Team A", 82, 12, "healthy",      250),
        team("Team B", 74, 14, "healthy",      750),
        team("Team C", 88, 34, "uncontrolled", 1250),
        el("div", { class: "pbv-limh__rule" }, [
          el("span", { class: "pbv-limh__rule-num", text: "10–15%" }),
          el("span", { class: "pbv-limh__rule-label", text: "healthy overage ratio" })
        ])
      ]);
    },

    /* ===================== LEVER 11 · Power user guidance ===================== */
    "power-user-tile": function () {
      function tip(text, delay) {
        var row = el("div", { class: "pbv-pu__tip", text: text });
        row.style.animationDelay = delay + "ms";
        return row;
      }
      return el("div", { class: "pbv pbv--power-tile", "aria-hidden": "true" }, [
        el("div", { class: "pbv-pu__left" }, [
          el("span", { class: "pbv-pu__kicker", text: "METRICS" }),
          el("span", { class: "pbv-pu__title", text: "Power User Guidance" })
        ]),
        el("div", { class: "pbv-pu__right" }, [
          tip("Think in code", 120),
          tip("Consider CLIs vs MCPs", 300),
          tip("Collapse tool calls", 480)
        ])
      ]);
    },

    "power-user-hero": function () {
      function row(title, body, delay, link) {
        var textChildren = [
          el("div", { class: "pbv-puh__row-title", text: title }),
          el("div", { class: "pbv-puh__row-body", text: body })
        ];
        if (link) {
          textChildren.push(el("a", {
            class: "pbv-puh__row-link",
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            text: link.label
          }));
        }
        var rowEl = el("div", { class: "pbv-puh__row" }, textChildren);
        rowEl.style.animationDelay = delay + "ms";
        return rowEl;
      }
      return el("div", { class: "pbv pbv--power-hero", "aria-hidden": "true" }, [
        el("div", { class: "pbv-puh__panel" }, [
          el("div", { class: "pbv-puh__left" }, [
            el("div", { class: "pbv-puh__left-kicker", text: "METRICS" }),
            el("div", { class: "pbv-puh__left-title", text: "Power User Guidance" }),
            el("div", { class: "pbv-puh__left-note", text: "These tips require good knowledge and time-invest, as they are conditional and / or come with trade-offs." })
          ]),
          el("div", { class: "pbv-puh__right" }, [
            row("Think in Code", "Prefer creating scripts to analyze files over feeding everything to AI.", 120),
            row("Consider CLIs vs. MCPs", "CLI tools can be more optimal in certain scenarios due to less static tokens.", 260),
            row("Improve Shell Outputs", "Trim shell output before sending it to the model.", 400, {
              label: "https://github.com/rtk-ai/rtk",
              url: "https://github.com/rtk-ai/rtk"
            }),
            row("Run \"/chronicle tip\" regularly", "Analyze your usage in Copilot CLI to find improvement areas.", 540),
            row("Collapse Tool Calls", "Bundle repeated calls where possible.", 680, {
              label: "https://github.com/jsturtevant/copilot-codeact-plugin",
              url: "https://github.com/jsturtevant/copilot-codeact-plugin"
            }),
            row("Model Specific Context Optimization", "Models behave differently and can be tuned.", 820)
          ])
        ])
      ]);
    },

    "power-user-metrics": function () {
      return visuals["power-user-hero"]();
    }
  };

  var view = {
    id: "playbook",
    activeLeverId: null,

    mount: function (root) {
      var data = TO.data.playbookLevers;
      var grid = el("div", { class: "pb-lever-grid", id: "pb-lever-grid" },
        data.levers.map(function (lever, i) {
          return view.renderLeverCard(lever, i);
        })
      );

      var detail = el("div", { class: "pb-lever-detail", id: "pb-lever-detail", "aria-live": "polite" });

      root.appendChild(el("section", { class: "section" }, [
        el("div", { class: "container" }, [
          el("div", { class: "section-head reveal" }, [
            el("span", { class: "eyebrow", text: t("playbook.eyebrow") }),
            el("h2", { text: t("playbook.title") }),
            el("p", { class: "section-lead", text: tryT("playbook.intro") || data.intro })
          ]),
          grid,
          detail
        ])
      ]));
    },

    /* ---------- LEVER CARD ---------- */
    renderLeverCard: function (lever, index) {
      var name    = leverField(lever, "name");
      var tagline = leverField(lever, "tagline");
      var summary = leverField(lever, "summary");
      var tileVisual = lever.customVisual && visuals[lever.customVisual]
        ? visuals[lever.customVisual]({ lever: lever, variant: "tile" })
        : el("img", { class: "pb-lever-image", src: lever.heroImage, alt: "", loading: "lazy" });
      var wrapClass = "pb-lever-image-wrap" + (lever.customVisual ? " pb-lever-image-wrap--custom" : "");
      var card = el("button", {
        type: "button",
        class: "pb-lever-card reveal",
        "data-lever-id": lever.id,
        "aria-label": t("playbook.openAria", { num: lever.num, name: name }),
        onclick: function () { view.openLever(lever.id); }
      }, [
        el("div", { class: wrapClass }, [tileVisual]),
        el("div", { class: "pb-lever-body" }, [
          el("div", { class: "pb-lever-head" }, [
            el("span", { class: "pb-lever-num", text: padNum(lever.num) }),
            el("h3", { class: "pb-lever-name", text: name })
          ]),
          el("p", { class: "pb-lever-tagline", text: tagline }),
          el("p", { class: "pb-lever-summary", text: summary }),
          lever.stats && lever.stats.length ? el("div", { class: "pb-lever-stats" }, lever.stats.map(function (s, i) {
            return el("div", { class: "pb-lever-stat" }, [
              el("span", { class: "pb-lever-stat-value", text: s.value }),
              el("span", { class: "pb-lever-stat-label", text: leverStatLabel(lever, i, s.label) })
            ]);
          })) : null,
          el("span", { class: "pb-lever-cta", text: t("playbook.explore") })
        ])
      ]);
      card.style.setProperty("--lever-color", lever.color);
      card.style.transitionDelay = Math.min(index * 60, 540) + "ms";
      return card;
    },

    /* ---------- OPEN / CLOSE ---------- */
    openLever: function (id) {
      var lever = findLever(id);
      if (!lever) return;
      view.activeLeverId = id;
      var grid = document.getElementById("pb-lever-grid");
      var detail = document.getElementById("pb-lever-detail");
      if (!grid || !detail) return;

      grid.classList.add("is-hidden");
      TO.utils.clear(detail);
      detail.appendChild(view.renderLeverDetail(lever));
      detail.classList.add("is-open");
      // Re-attach reveal observer to newly inserted nodes.
      TO.utils.observeReveals(detail);

      // Smooth scroll to top of detail.
      requestAnimationFrame(function () {
        var top = detail.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    },

    closeLever: function () {
      var grid = document.getElementById("pb-lever-grid");
      var detail = document.getElementById("pb-lever-detail");
      if (!grid || !detail) return;
      detail.classList.remove("is-open");
      grid.classList.remove("is-hidden");
      TO.utils.clear(detail);
      view.activeLeverId = null;
      requestAnimationFrame(function () {
        var top = grid.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    },

    /* ---------- DETAIL PANEL ---------- */
    renderLeverDetail: function (lever) {
      var name    = leverField(lever, "name");
      var tagline = leverField(lever, "tagline");
      var summary = leverField(lever, "summary");
      var panel = el("article", { class: "pb-lever-extended" }, [
        el("div", { class: "pb-extended-bar" }, [
          el("button", {
            type: "button", class: "btn btn--ghost btn--sm pb-extended-back",
            onclick: function () { view.closeLever(); }
          }, [
            el("span", { class: "pb-extended-back-mark", text: "←" }),
            el("span", { text: t("playbook.backToLevers") })
          ]),
          el("span", { class: "pb-extended-counter",
            text: t("playbook.counter", { num: padNum(lever.num) }) })
        ]),

        el("header", { class: "pb-extended-head reveal" }, [
          el("div", { class: "pb-extended-head-text" }, [
            el("span", { class: "pb-extended-num", text: padNum(lever.num) }),
            el("h2", { class: "pb-extended-title", text: name }),
            el("p", { class: "pb-extended-tagline", text: tagline }),
            el("p", { class: "pb-extended-summary", text: summary })
          ]),
          el("div", { class: "pb-extended-hero" + (lever.customHero || lever.customVisual ? " pb-extended-hero--custom" : "") }, [
            (lever.customHero && visuals[lever.customHero])
              ? visuals[lever.customHero]({ lever: lever, variant: "hero" })
              : (lever.customVisual && visuals[lever.customVisual])
                ? visuals[lever.customVisual]({ lever: lever, variant: "hero" })
                : el("img", { src: lever.heroImage,
                    alt: t("playbook.heroAlt", { name: name }), loading: "lazy" })
          ])
        ]),

        el("div", { class: "pb-extended-sections" },
          (lever.extended || []).map(function (section, i) {
            return view.renderSection(section, i);
          })
        ),

        el("div", { class: "pb-extended-foot" }, [
          el("button", {
            type: "button", class: "btn btn--primary pb-extended-back",
            onclick: function () { view.closeLever(); }
          }, [el("span", { text: t("playbook.backToTen") })])
        ])
      ]);
      panel.style.setProperty("--lever-color", lever.color);
      return panel;
    },

    renderSection: function (section, index) {
      var children = [];
      var bodyChildren = [];
      if (section.heading) {
        children.push(el("h3", { class: "pb-extended-section-heading", text: section.heading }));
      }
      if (section.customVisual && visuals[section.customVisual]) {
        bodyChildren.push(el("figure", { class: "pb-extended-figure pb-extended-figure--custom" }, [
          visuals[section.customVisual]({ section: section, variant: "section" })
        ]));
      } else if (section.image) {
        bodyChildren.push(el("figure", { class: "pb-extended-figure" }, [
          el("img", { src: section.image, alt: "", loading: "lazy" })
        ]));
      }
      if (section.paragraphs && section.paragraphs.length) {
        section.paragraphs.forEach(function (p) {
          bodyChildren.push(el("p", { class: "pb-extended-paragraph", text: p }));
        });
      }
      if (section.table && section.table.rows && section.table.rows.length) {
        bodyChildren.push(view.renderTable(section.table));
      }
      if (section.callout) {
        bodyChildren.push(view.renderCallout(section.callout));
      }
      if (section.links && section.links.length) {
        bodyChildren.push(view.renderLinks(section.links));
      }

      if (section.collapsible) {
        children.push(el("details", { class: "pb-extended-collapsible" }, [
          el("summary", { class: "pb-extended-collapsible__summary" }, [
            el("span", { class: "pb-extended-collapsible__marker", text: "▸" }),
            el("span", { class: "pb-extended-collapsible__label", text: section.collapsible })
          ]),
          el("div", { class: "pb-extended-collapsible__body" }, bodyChildren)
        ]));
      } else {
        bodyChildren.forEach(function (child) { children.push(child); });
      }

      var wrap = el("section", { class: "pb-extended-section reveal" }, children);
      wrap.style.transitionDelay = Math.min(index * 90, 540) + "ms";
      return wrap;
    },

    renderTable: function (table) {
      var thead = table.headers ? el("thead", {}, [
        el("tr", {}, table.headers.map(function (h) {
          return el("th", { text: h });
        }))
      ]) : null;

      var tbody = el("tbody", {}, table.rows.map(function (row) {
        var cls = "pb-extended-row";
        if (row.tone === "positive") cls += " is-positive";
        else if (row.tone === "negative") cls += " is-negative";
        return el("tr", { class: cls }, row.cells.map(function (cell, i) {
          return el("td", {
            class: i === 0 ? "pb-extended-cell pb-extended-cell--lead" : "pb-extended-cell",
            text: cell
          });
        }));
      }));

      return el("div", { class: "pb-extended-table-wrap" }, [
        el("table", { class: "pb-extended-table" }, thead ? [thead, tbody] : [tbody])
      ]);
    },

    renderCallout: function (callout) {
      var cls = "pb-extended-callout";
      if (callout.tone === "positive") cls += " is-positive";
      else if (callout.tone === "negative") cls += " is-negative";
      return el("div", { class: cls }, [
        el("span", { class: "pb-extended-callout-mark", text: callout.tone === "negative" ? "⚠" : callout.tone === "positive" ? "✓" : "ⓘ" }),
        el("p", { class: "pb-extended-callout-text", text: callout.text })
      ]);
    },

    renderLinks: function (links) {
      return el("div", { class: "pb-extended-links" }, links.map(function (link) {
        return el("a", {
          class: "pb-extended-link",
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer"
        }, [
          el("span", { text: link.label }),
          el("span", { class: "pb-extended-link-arrow", text: "↗" })
        ]);
      }));
    },

    show: function () {
      TO.utils.observeReveals(document.getElementById("view-playbook"));
    }
  };

  function padNum(n) {
    var s = String(n);
    return s.length === 1 ? "0" + s : s;
  }

  function findLever(id) {
    var arr = TO.data.playbookLevers.levers;
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
    return null;
  }

  TO.views = TO.views || {};
  TO.views.playbook = view;
})(window.TO = window.TO || {});
