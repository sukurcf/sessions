window.TO = window.TO || {};
window.TO.i18n = window.TO.i18n || { register: function () {} };

function registerQuick(lng, quick) {
  window.TO.i18n.register(lng, { quick: quick });
}

window.TO.i18n.register("en", {
  quick: {
    languageLabel: "Language",
    docTitle: "Token Optimization Best Practises - Visual Guide",
    hero: {
      tag: "",
      titleHtml: "Token Optimization Best Practises - Visual Guide",
      sub: "Six scenes, sixty seconds. The full playbook — calculator, real workflows, pricing — is one click away.",
      cta: "Start scrolling for Quick Guide",
      ctaDetailed: "Get the detailed playbook",
      ctaDetailedBadge: "LEVEL 2"
    },
    scene1: {
      tag: "Scene 1 · What rides every prompt",
      title: "Your question is the smallest piece.",
      ledeHtml: "Each turn, Copilot quietly assembles a packet and sends it to the model. The thing you typed is the thin slice on the right. Everything else is automatic &mdash; but you pay for all of it.",
      bar: {
        systemTitle: "System prompt",
        systemLabel: "SYSTEM",
        instructionsTitle: "copilot-instructions.md",
        instructionsLabel: "INSTRUCTIONS",
        toolsTitle: "MCP & tool schemas",
        toolsLabel: "TOOLS · MCP",
        historyTitle: "Past turns in this chat",
        historyLabel: "HISTORY",
        retrievedTitle: "Files, #codebase results, search hits",
        retrievedLabel: "RETRIEVED CONTEXT",
        youTitle: "What you actually typed",
        youLabel: "YOU"
      },
      legend: {
        systemHtml: "<span class=\"sw\" style=\"background:var(--p2)\"></span>System prompt (fixed)",
        instructionsHtml: "<span class=\"sw\" style=\"background:var(--p3)\"></span><code>copilot-instructions.md</code>",
        toolsHtml: "<span class=\"sw\" style=\"background:var(--p5)\"></span>Tool &amp; MCP schemas",
        historyHtml: "<span class=\"sw\" style=\"background:var(--p6)\"></span>Chat history",
        retrievedHtml: "<span class=\"sw\" style=\"background:var(--p1)\"></span>Retrieved files",
        youHtml: "<span class=\"sw\" style=\"background:var(--p4)\"></span>Your message"
      },
      punchHtml: "<strong>Implication:</strong> shrinking your own message saves almost nothing. The leverage is in the other five segments."
    },
    scene2: {
      tag: "Scene 2 · Try the toggles",
      title: "Six habits. Turn them on, see where the leverage is.",
      ledeHtml: "Each switch is one habit. Flip it on and its <strong style=\"color:var(--text)\">impact</strong> rolls up into your <strong style=\"color:var(--text)\">ESTIMATED BENEFITS</strong> on the right. <strong style=\"color:var(--text)\">Try the first switch</strong> &mdash; benefits climb as you stack habits.",
      noteHtml: "<strong>Heads up — these are estimates, not guarantees.</strong> The <em>High / Medium / Low</em> labels are <strong>directional only</strong>: a qualitative ranking of each habit's <em>relative</em> leverage, based on patterns commonly seen across engineering teams. They are <strong>not benchmarks, not measurements, and not a promised cost reduction</strong> for your project. Actual impact depends on your model, workload, codebase size, caching behaviour, and team workflow — and may be higher, lower, or negligible. Always measure on your own usage.<br/><br/><strong>Further reading:</strong> <a href=\"https://wellarchitected.github.com/library/governance/recommendations/managing-ai-credits/\" target=\"_blank\" rel=\"noopener\">GitHub Well-Architected — Managing AI credits</a> &middot; <a href=\"https://github.blog/ai-and-ml/github-copilot/improving-token-efficiency-in-github-agentic-workflows/\" target=\"_blank\" rel=\"noopener\">Improving token efficiency in agentic workflows</a> &middot; <a href=\"https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/manage-and-track-spending/prepare-for-usage-based-billing#take-action-before-the-transition\" target=\"_blank\" rel=\"noopener\">Prepare for usage-based billing — take action before the transition</a>.",
      groupAria: "Six habits you can adopt",
      impact: {
        high: "High impact",
        medium: "Medium impact",
        low: "Low impact",
        none: "None"
      },
      levers: {
        1: { name: "Point at the file you're working on", sub: "Send one file or your selection instead of the whole repo." },
        2: { name: "Use Auto Mode (recommended)", subHtml: "Let Copilot route each turn to the best-fit model &mdash; Auto Mode is becoming the default policy across orgs and applies a documented ~10% token-multiplier discount. <a href=\"https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat\" target=\"_blank\" rel=\"noopener\">Learn more</a>." },
        3: { name: "Keep your custom instructions short and steady", sub: "If they don't change between turns, they get cached — input cost drops a lot." },
        4: { name: "Don't crank reasoning effort to max", sub: "Low or medium is fine for most work. Save high for genuinely ambiguous tasks." },
        5: { name: "Turn off tools you're not using on this project", sub: "Every enabled tool's description gets sent on every message — even when unused." },
        6: { name: "Start a new chat when you switch tasks", sub: "Old turns ride along on every new message until you reset." }
      },
      meter: {
        label: "ESTIMATED BENEFITS",
        saveSuffix: "relative leverage",
        countHtml: "Habits on: <strong id=\"save-count\">0</strong> of 6",
        tryAll: "Try all 6",
        reset: "Reset",
        noHabitsTier: "No habits yet",
        noHabitsVerdictHtml: "Flip a switch to see which habits typically carry the most leverage. Labels are <em>directional</em>, not guarantees.",
        startTier: "A start",
        startVerdictHtml: "<strong>“{{name}}”</strong> is rated <strong>{{level}}</strong> leverage. Stack a few more to compound the effect — measure your own usage to confirm.",
        solidTier: "Solid",
        solidTail: "This is the daily zone — most teams stop here.",
        tightTier: "Tight loop",
        tightTail: "Lighter, faster turns. Measure to see what it’s worth on your workload.",
        allSixTier: "All six",
        allSixTail: "Diminishing returns kick in — pick the two or three that fit your day.",
        multiVerdictHtml: "<strong>{{count}} habits on:</strong> {{sum}} &rarr; overall <strong>{{overall}}</strong> leverage. {{tail}}"
      },
      punchHtml: "<strong>The takeaway:</strong> you don't need all six. Adopt two or three that fit your workflow — each habit pulls a <em>different</em> lever, so the leverage compounds. Confirm the win by measuring your own usage."
    },
    scene3: {
      tag: "Scene 4 · One habit, two outcomes",
      title: "Same task. Different framing.",
      lede: "The single highest-leverage habit is also the easiest: attach the narrowest scope that lets the model answer.",
      badLabel: "✗ WASTEFUL",
      goodLabel: "✓ TIGHT",
      badPromptHtml: "\"Why is the checkout broken?<br/>Look at <span class=\"scope\">#codebase</span>\"",
      goodPromptHtml: "\"Why is this assertion failing?<br/><span class=\"scope\">#file:cart.test.ts</span> <span class=\"scope\">#selection</span>\"",
      tokensSent: "Tokens sent",
      punchHtml: "<strong>Same answer quality, ~7× smaller bill, faster turn.</strong> Reach for <code>#codebase</code> only when narrower scopes have actually failed."
    },
    scene4: {
      tagHtml: "Scene 3 &middot; The wider map",
      title: "Zoom out: every customization has a price.",
      ledeHtml: "The chat habits in Scene 2 are the half you control by hand. The other half is the customization system itself &mdash; <code>instructions</code>, <code>prompts</code>, <code>skills</code>, <code>agents</code>, <code>hooks</code>. They sort into <strong style=\"color:var(--text)\">six tiers</strong> by <em>when</em> they load &mdash; i.e. <em>how often</em> they get sent to the model. Top tier rides along on <strong style=\"color:var(--text)\">every request</strong>; bottom tier may never be sent at all.",
      primer: {
        summaryHtml: "New to these? &nbsp;<span class=\"primer-hint\">show a 1-line primer for each</span>",
        instructions: {
          bodyHtml: "Markdown files Copilot reads as <em>standing rules</em>. <code>copilot-instructions.md</code> loads every turn; <code>*.instructions.md</code> with <code>applyTo:</code> loads only when matching files are in context.",
          exampleHtml: "e.g. \"Always use TypeScript strict mode. Prefer functional components.\""
        },
        prompts: {
          bodyHtml: "Reusable prompt templates you trigger with <code>/name</code> in chat. Think saved macros for recurring tasks &mdash; loaded only when <em>you</em> call them.",
          exampleHtml: "e.g. <code>/review-pr</code>, <code>/write-test</code>, <code>/refactor-to-hooks</code>"
        },
        skills: {
          bodyHtml: "Bundled know-how (a short description + a longer body). The model reads the description on every turn and pulls in the body only when it decides the skill is relevant.",
          exampleHtml: "e.g. a \"deploy-to-azure\" skill that knows your stack's exact CLI sequence."
        },
        agents: {
          bodyHtml: "Custom chat personas with their own system prompt + tool set, invoked via <code>@name</code>. Subagents are spawned by the model; only their summary returns &mdash; cheap context-wise.",
          exampleHtml: "e.g. <code>@security-reviewer</code>, <code>@db-migration-expert</code>"
        },
        hooks: {
          bodyHtml: "Scripts that run on editor <em>events</em> (save, commit, edit) &mdash; <strong>outside</strong> the model. Never sent to the model; great for lint, format, or auto-running tests.",
          exampleHtml: "e.g. run <code>prettier</code> on save, <code>pytest</code> on commit."
        },
        mcp: {
          bodyHtml: "External tools (servers) the model can call mid-conversation &mdash; databases, GitHub, browsers, your own APIs. Like skills but they <em>do</em> things instead of just adding context.",
          exampleHtml: "e.g. query your prod DB, open a PR, fetch a Jira ticket."
        }
      },
      ladder: {
        headLabelHtml: "<strong>When it loads</strong>",
        headExample: "What lives here",
        headCostHtml: "Likelihood of being sent to the model &rarr;",
        rows: {
          everyRequest: {
            labelHtml: "<span class=\"tier-dot hi\"></span><strong>Every request</strong>",
            exampleHtml: "<code>copilot-instructions.md</code>, skill descriptions"
          },
          glob: {
            labelHtml: "<span class=\"tier-dot med\"></span><strong>On glob match</strong>",
            exampleHtml: "<code>*.instructions.md</code> with <code>applyTo:</code>"
          },
          invoke: {
            labelHtml: "<span class=\"tier-dot low\"></span><strong>You invoke</strong>",
            exampleHtml: "Prompts (<code>/name</code>), custom agents (<code>@name</code>)"
          },
          model: {
            labelHtml: "<span class=\"tier-dot low\"></span><strong>Model decides</strong>",
            example: "Skill bodies, MCP tool calls"
          },
          event: {
            labelHtml: "<span class=\"tier-dot zero\"></span><strong>On event</strong>",
            example: "Hooks (run outside the model)"
          },
          spawns: {
            labelHtml: "<span class=\"tier-dot low\"></span><strong>Agent spawns</strong>",
            example: "Subagents (only a summary returns)"
          }
        }
      },
      ladderNoteHtml: "<strong>Read the bar as <em>frequency</em>, not size.</strong> It shows how <em>often</em> each kind of customization is sent to the model &mdash; not how many tokens it adds. Actual token usage depends on the <em>content size</em> of the file or tool description too. A short <code>copilot-instructions.md</code> sent every turn can easily cost less than a giant skill body the model pulls in occasionally. Use this ladder to decide <em>where</em> to put something; measure your own usage to know <em>what it costs</em>.",
      punchHtml: "<strong>Not sure which one to use?</strong> Ask <em>who turns it on</em>:<ul class=\"who-list\"><li><strong>Always on</strong> &rarr; <code>copilot-instructions.md</code> (or <code>*.instructions.md</code> for specific files)</li><li><strong>You turn it on</strong> &rarr; prompt (<code>/name</code>) or custom agent (<code>@name</code>)</li><li><strong>The model turns it on</strong> &rarr; skill or MCP tool</li><li><strong>An event turns it on</strong> (save, commit, edit) &rarr; hook</li></ul>"
    },
    scene5: {
      tag: "Scene 6 · Monday morning",
      title: "If you take four things away, take these.",
      lede: "Don't memorise rules — internalise principles. These four cover the bulk of token waste; everything else is a refinement.",
      habits: {
        1: {
          title: "Turn on Auto Mode.",
          body: "One toggle, set once. Copilot routes each turn to the best-fit model and applies a documented ~10% token-multiplier discount — the single highest-leverage thing you can do.",
          tag: "MODEL"
        },
        2: {
          title: "Send the smallest slice.",
          body: "Attach the file or selection that matters, not the whole repo. Less for the model to read = fewer input tokens, less reasoning effort, tighter answers.",
          tag: "CONTEXT"
        },
        3: {
          title: "Keep instructions short & stable.",
          body: "A sub-200-line copilot-instructions.md that doesn't change between turns gets cached — you stop paying full price for the same prefix every message.",
          tag: "CACHE"
        },
        4: {
          title: "Reset chats on task switch.",
          bodyHtml: "History compounds — every old turn rides along on the new one. Start a new chat when the task changes, or run <code>/compact</code> to summarise and shed tokens without losing the thread.",
          tag: "SESSION"
        }
      }
    },
    scene6: {
      tagHtml: "Scene 5 · Copy &amp; paste",
      title: "Two snippets. Drop into any repo.",
      ledeHtml: "Both snippets do the same job: <strong style=\"color:var(--text)\">give the model less to read, and keep it the same each turn</strong>. <strong style=\"color:var(--text)\">Save one as a file</strong> so it gets cached and reused. <strong style=\"color:var(--text)\">Paste the other into chat</strong> to point the model at just this task. Steal them.",
      copy: "COPY",
      copied: "COPIED ✓",
      pressCtrlC: "PRESS CTRL+C",
      templates: {
        instructions: {
          nameHtml: ".github/copilot-instructions.md<small>Stable, sub-200 lines — the prefix that gets cached on every turn.</small>"
        },
        kickoff: {
          nameHtml: "Task kickoff &mdash; paste into chat<small>Scopes context to just the files and constraints this task needs.</small>",
          exampleSummary: "Show a filled-in example"
        }
      },
      punchHtml: "<strong>How this saves tokens:</strong> the instructions file is identical on every turn, so the provider serves it from cache &mdash; you stop paying full price for the same prefix over and over. The kickoff snippet replaces “here&rsquo;s the whole repo, figure it out” with a narrow, named slice &mdash; fewer input tokens, less reasoning effort, tighter answers. Together they hit the two biggest levers: <em>cache the stable stuff, scope the changing stuff</em>.",
      appendix: {
        summaryHtml: "Want more? &nbsp;<span class=\"primer-hint\">scoped instructions, reusable prompts, and where to read more</span>",
        rules: {
          titleHtml: "Scoped per-language rules &mdash; <code>.github/instructions/typescript.instructions.md</code>",
          subHtml: "Frontmatter-scoped via <code>applyTo</code>. Only loaded when matching files are in context, so it doesn&rsquo;t ride every turn.",
          noteHtml: "You can have several: <code>python.instructions.md</code> (<code>applyTo: \"**/*.py\"</code>), <code>sql.instructions.md</code> (<code>applyTo: \"**/migrations/**/*.sql\"</code>). Narrow globs &gt; broad ones."
        },
        recipe: {
          titleHtml: "On-demand recipe &mdash; <code>.github/prompts/review-pr.prompt.md</code>",
          subHtml: "For bulky reusable how-tos. You invoke it deliberately with <code>/review-pr</code>, so it doesn&rsquo;t ride every turn."
        },
        snippets: {
          title: "Four prompt snippets worth memorizing",
          targeted: "Targeted bug fix",
          refactor: "Bounded refactor",
          review: "Diff review (cheap mode)",
          restart: "Summarize-and-restart"
        },
        docs: {
          title: "Where to read more",
          sub: "Official docs. Behavior changes; these stay current.",
          items: {
            1: "<a href=\"https://docs.github.com/en/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses\" target=\"_blank\" rel=\"noopener\">Customizing Copilot Chat responses</a> &mdash; overview of all customization surfaces.",
            2: "<a href=\"https://code.visualstudio.com/docs/copilot/copilot-customization\" target=\"_blank\" rel=\"noopener\">VS Code &middot; Copilot customization</a> &mdash; <code>copilot-instructions.md</code>, <code>*.instructions.md</code>, <code>.prompt.md</code>.",
            3: "<a href=\"https://code.visualstudio.com/docs/copilot/chat/chat-modes\" target=\"_blank\" rel=\"noopener\">VS Code &middot; Custom chat modes</a> &mdash; defining custom agents.",
            4: "<a href=\"https://code.visualstudio.com/docs/copilot/customization/mcp-servers\" target=\"_blank\" rel=\"noopener\">VS Code &middot; MCP servers</a> &mdash; enabling and scoping MCP."
          }
        }
      }
    },
    learn: {
      kicker: "KEEP LEARNING",
      title: "Go from habits to mastery.",
      lede: "You've seen the levers. Now build the muscle. Start with the official GitHub course — it walks you through the same patterns hands-on, in a real repo, in about an hour.",
      primaryCta: "Start the GitHub Skills course",
      meta: "Free · ~1 hour · self-paced",
      deeperLabel: "Deeper resources",
      links: {
        docs: {
          title: "GitHub Copilot docs hub",
          sub: "Reference for every customization surface."
        },
        vscode: {
          title: "VS Code · Copilot customization",
          sub: "Hands-on guide to instructions, prompts, and chat modes."
        }
      }
    },
    level2: {
      kicker: "LEVEL 2 · CORE CONTENT",
      title: "Go deeper: the full playbook awaits.",
      ledeHtml: "This page is the <strong>quick guide</strong>. The advanced scenarios walk through real workflows, an interactive token calculator, the full lever playbook, pricing comparisons, and a live diagram of how context flows. <strong>This is not optional reading.</strong>",
      cta: "Open advanced scenarios",
      meta: "Interactive · calculator · playbook · pricing · diagram"
    },
    footer: {
      done: "You're done. <strong style=\"color:var(--text)\">Now go save some tokens.</strong>",
      deeper: "Open Detailed Scenario and Guide",
      disclaimer: "This content has been authored by Microsoft Asia Developer GBB and is based on publicly available GitHub Copilot documentation. It has not been validated across all supported configurations. While the team makes continuous efforts to stay aligned with the latest documentation, users are advised to verify details against official GitHub documentation before making any decisions."
    }
  }
});

window.TO.i18n.register("es", {
  quick: {
    languageLabel: "Idioma",
    docTitle: "Tokens y contexto — una guía visual de campo",
    hero: {
      tag: "Contexto de GitHub Copilot, en cinco escenas",
      titleHtml: "Cada turno de GitHub Copilot envía <span class=\"accent\">un paquete invisible</span><br/>de contexto. Esto es lo que contiene.",
      sub: "Una guía para recorrer desplazándote. Tres ideas clave, sin muros de texto.",
      cta: "Empieza a desplazarte por la guía rápida",
      ctaDetailed: "Escenarios y guía detallada"
    },
    scene1: {
      tag: "Escena 1 · Qué viaja en cada prompt",
      title: "Tu pregunta es la parte más pequeña.",
      ledeHtml: "En cada turno, Copilot arma en silencio un paquete y lo envía al modelo. Lo que escribiste es la franja fina de la derecha. Todo lo demás es automático &mdash; pero pagas por todo.",
      bar: {
        systemTitle: "Prompt del sistema",
        instructionsTitle: "copilot-instructions.md",
        toolsTitle: "MCP y esquemas de herramientas",
        historyTitle: "Turnos anteriores de este chat",
        retrievedTitle: "Archivos, resultados de #codebase y búsquedas",
        youTitle: "Lo que realmente escribiste",
        instructionsLabel: "INSTRUCCIONES",
        historyLabel: "HISTORIAL",
        retrievedLabel: "CONTEXTO RECUPERADO"
      },
      legend: {
        systemHtml: "<span class=\"sw\" style=\"background:var(--p2)\"></span>Prompt del sistema (fijo)",
        toolsHtml: "<span class=\"sw\" style=\"background:var(--p5)\"></span>Esquemas de herramientas y MCP",
        historyHtml: "<span class=\"sw\" style=\"background:var(--p6)\"></span>Historial del chat",
        retrievedHtml: "<span class=\"sw\" style=\"background:var(--p1)\"></span>Archivos recuperados",
        youHtml: "<span class=\"sw\" style=\"background:var(--p4)\"></span>Tu mensaje"
      },
      punchHtml: "<strong>Implicación:</strong> reducir tu propio mensaje ahorra casi nada. La palanca está en los otros cinco segmentos."
    },
    scene2: {
      tag: "Escena 2 · Prueba los interruptores",
      title: "Seis hábitos. Actívalos y mira cómo baja la factura.",
      ledeHtml: "Cada interruptor es un hábito. Al activarlo, su <code>≈%</code> se suma a tu <strong style=\"color:var(--text)\">AHORRO ESTIMADO</strong> a la derecha. <strong style=\"color:var(--text)\">Prueba el primero</strong> &mdash; el ahorro sube a <code>≈22%</code>. Activa otro y los ahorros se acumulan.",
      noteHtml: "<strong>Sobre los números:</strong> el <code>≈%</code> de cada fila es una cifra <em>aproximada</em> basada en rangos típicos que ven los equipos cuando adoptan ese hábito en una base de código real. Muestran qué hábitos mueven más la aguja, no una promesa para tu proyecto.",
      groupAria: "Seis hábitos que puedes adoptar",
      levers: {
        1: { name: "Apunta al archivo en el que trabajas", sub: "Envía un archivo o tu selección en lugar de todo el repositorio." },
        2: { name: "Usa un modelo más pequeño para tareas fáciles", sub: "Reserva el modelo grande para los problemas realmente difíciles." },
        3: { name: "Mantén tus instrucciones personalizadas breves y estables", sub: "Si no cambian entre turnos, se cachean y el costo de entrada baja mucho." },
        4: { name: "No lleves el razonamiento al máximo", sub: "Bajo o medio basta para la mayor parte del trabajo. Guarda el alto para tareas de verdad ambiguas." },
        5: { name: "Desactiva herramientas que no usas en este proyecto", sub: "La descripción de cada herramienta habilitada se envía en cada mensaje, aunque no se use." },
        6: { name: "Empieza un chat nuevo cuando cambies de tarea", sub: "Los turnos antiguos siguen viajando con cada mensaje nuevo hasta que reinicias." }
      },
      meter: {
        label: "AHORRO ESTIMADO",
        saveSuffix: "ahorrado",
        countHtml: "Hábitos activos: <strong id=\"save-count\">0</strong> de 6",
        tryAll: "Probar los 6",
        reset: "Restablecer",
        noHabitsTier: "Aún sin hábitos",
        noHabitsVerdictHtml: "Activa un interruptor y mira cómo sube el ahorro. Cada uno añade su propio <code>≈%</code>.",
        startTier: "Buen comienzo",
        startVerdictHtml: "<strong>“{{name}}”</strong> por sí solo &rarr; <strong>≈{{pct}}%</strong> ahorrado. Activa otro y se suma.",
        solidTier: "Sólido",
        solidTail: "Esta es la zona diaria: la mayoría de los equipos se queda aquí y les alcanza.",
        tightTier: "Bucle ajustado",
        tightTail: "Turnos más ligeros, más rápidos y más baratos. Estás en un buen punto.",
        allSixTier: "Los seis",
        allSixTail: "Aquí aparecen rendimientos decrecientes: quédate con dos o tres que encajen con tu día.",
        multiVerdictHtml: "<strong>{{count}} hábitos activos:</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
      },
      punchHtml: "<strong>La idea clave:</strong> no necesitas los seis. Adopta dos o tres que encajen con tu flujo y los números se mueven rápido, porque cada hábito recorta un factor <em>distinto</em>."
    },
    scene3: {
      tag: "Escena 3 · Un hábito, dos resultados",
      title: "La misma tarea. Distinto encuadre.",
      lede: "El hábito con más palanca también es el más fácil: adjunta el alcance más estrecho que permita responder al modelo.",
      badLabel: "✗ DERROCHADOR",
      goodLabel: "✓ AJUSTADO",
      tokensSent: "Tokens enviados",
      punchHtml: "<strong>La misma calidad de respuesta, una factura ~7× menor y un turno más rápido.</strong> Usa <code>#codebase</code> solo cuando los alcances más estrechos de verdad hayan fallado."
    },
    scene4: {
      tagHtml: "Escena 4 &middot; El mapa más amplio",
      title: "Mira el panorama: cada personalización tiene un precio.",
      ledeHtml: "Los hábitos del chat de la escena 2 son la mitad que controlas a mano. La otra mitad es el propio sistema de personalización &mdash; <code>instructions</code>, <code>prompts</code>, <code>skills</code>, <code>agents</code>, <code>hooks</code>. Se ordenan en <strong style=\"color:var(--text)\">seis niveles</strong> según <em>cuándo</em> cargan.",
      primer: {
        summaryHtml: "¿Eres nuevo en esto? &nbsp;<span class=\"primer-hint\">muestra una explicación de una línea para cada uno</span>"
      },
      ladder: {
        headLabelHtml: "<strong>Cuándo carga</strong>",
        headExample: "Qué vive aquí",
        headCostHtml: "Costo en tokens por turno &rarr;",
        rows: {
          everyRequest: { labelHtml: "<span class=\"tier-dot hi\"></span><strong>Cada solicitud</strong>" },
          glob: { labelHtml: "<span class=\"tier-dot med\"></span><strong>Cuando coincide el glob</strong>" },
          invoke: { labelHtml: "<span class=\"tier-dot low\"></span><strong>Tú lo invocas</strong>" },
          model: { labelHtml: "<span class=\"tier-dot low\"></span><strong>El modelo decide</strong>", example: "Cuerpos de skills y llamadas a herramientas MCP" },
          event: { labelHtml: "<span class=\"tier-dot zero\"></span><strong>En evento</strong>", example: "Hooks (fuera del modelo)" },
          spawns: { labelHtml: "<span class=\"tier-dot low\"></span><strong>Spawns de agentes</strong>", example: "Subagentes (solo vuelve un resumen)" }
        }
      },
      punchHtml: "<strong>¿No sabes cuál usar?</strong> Pregunta <em>quién lo activa</em>:<ul class=\"who-list\"><li><strong>Siempre activo</strong> &rarr; <code>copilot-instructions.md</code> (o <code>*.instructions.md</code> para archivos específicos)</li><li><strong>Tú lo activas</strong> &rarr; prompt (<code>/name</code>) o agente personalizado (<code>@name</code>)</li><li><strong>Lo activa el modelo</strong> &rarr; skill o herramienta MCP</li><li><strong>Lo activa un evento</strong> (guardar, commit, edición) &rarr; hook</li></ul>"
    },
    scene5: {
      tag: "Escena 5 · Lunes por la mañana",
      title: "Si te llevas tres cosas, que sean estas.",
      lede: "No necesitas los seis pilares mañana. Elige tres hábitos. Vuélvelos automáticos. Añade el resto después.",
      habits: {
        1: { title: "Escribe primero el archivo y luego el codebase.", tag: "ALCANCE" },
        2: { title: "Ajusta el modelo a cada turno.", body: "Empieza con una capa ligera. Sube a un modelo frontier para diseño ambiguo o depuración realmente difícil. Luego vuelve a bajar para el seguimiento.", tag: "MODELO" },
        3: { title: "Nueva tarea, nuevo chat.", body: "El historial se acumula: pagas cada turno viejo en cada turno nuevo. Cuando cambia la tarea, reinicia.", tag: "SESIÓN" }
      }
    },
    scene6: {
      tagHtml: "Escena 6 · Copiar y pegar",
      title: "Dos fragmentos. Úsalos en cualquier repo.",
      ledeHtml: "Los dos fragmentos hacen lo mismo: <strong style=\"color:var(--text)\">darle al modelo menos que leer y mantenerlo igual en cada turno</strong>. <strong style=\"color:var(--text)\">Guarda uno como archivo</strong> para que se cachee y se reutilice. <strong style=\"color:var(--text)\">Pega el otro en el chat</strong> para acotar el modelo a esta tarea.",
      copy: "COPIAR",
      copied: "COPIADO ✓",
      pressCtrlC: "PULSA CTRL+C",
      templates: {
        instructions: { nameHtml: ".github/copilot-instructions.md<small>Estable, por debajo de 200 líneas: el prefijo que se cachea en cada turno.</small>" },
        kickoff: { nameHtml: "Inicio de tarea &mdash; pegar en el chat<small>Acota el contexto a los archivos y restricciones que esta tarea necesita.</small>", exampleSummary: "Mostrar un ejemplo completo" }
      },
      punchHtml: "<strong>Cómo ahorra tokens:</strong> el archivo de instrucciones es idéntico en cada turno, así que el proveedor lo sirve desde caché. El fragmento de arranque reemplaza “aquí está todo el repo” por una porción estrecha y nombrada &mdash; menos tokens de entrada, menos razonamiento y respuestas más precisas.",
      appendix: {
        summaryHtml: "¿Quieres más? &nbsp;<span class=\"primer-hint\">instrucciones acotadas, prompts reutilizables y dónde leer más</span>",
        rules: {
          titleHtml: "Reglas acotadas por lenguaje &mdash; <code>.github/instructions/typescript.instructions.md</code>",
          subHtml: "Con frontmatter vía <code>applyTo</code>. Solo cargan cuando hay archivos coincidentes en contexto.",
          noteHtml: "Puedes tener varias: <code>python.instructions.md</code>, <code>sql.instructions.md</code>. Globs estrechos &gt; globs amplios."
        },
        recipe: {
          titleHtml: "Receta bajo demanda &mdash; <code>.github/prompts/review-pr.prompt.md</code>",
          subHtml: "Para instrucciones reutilizables y voluminosas. La invocas a propósito con <code>/review-pr</code>, así que no viaja en cada turno."
        },
        snippets: {
          title: "Cuatro fragmentos de prompt que vale la pena memorizar",
          targeted: "Corrección puntual de bug",
          refactor: "Refactor acotado",
          review: "Revisión del diff (modo barato)",
          restart: "Resumir y reiniciar"
        },
        docs: {
          title: "Dónde leer más",
          sub: "Documentación oficial. El comportamiento cambia; estas referencias se mantienen al día."
        }
      }
    },
    footer: {
      done: "Ya terminaste. <strong style=\"color:var(--text)\">Ahora ve a ahorrar tokens.</strong>",
      deeper: "Abrir escenarios y guía detallada",
      disclaimer: "Este contenido ha sido elaborado por Microsoft Asia Developer GBB y se basa en la documentación públicamente disponible de GitHub Copilot. No ha sido validado en todas las configuraciones admitidas. Aunque el equipo se esfuerza continuamente por mantenerse alineado con la documentación más reciente, se recomienda a los usuarios verificar los detalles con la documentación oficial de GitHub antes de tomar cualquier decisión."
    }
  }
});

window.TO.i18n.register("fr", {
  quick: {
    languageLabel: "Langue",
    docTitle: "Jetons et contexte — guide visuel",
    hero: {
      tag: "Le contexte GitHub Copilot, en cinq scènes",
      titleHtml: "Chaque tour GitHub Copilot envoie <span class=\"accent\">un paquet invisible</span><br/>de contexte. Voici ce qu'il contient.",
      sub: "Un guide à faire défiler. Trois idées clés, sans pavé de texte.",
      cta: "Commencer le guide rapide",
      ctaDetailed: "Scénarios et guide détaillé"
    },
    scene1: {
      tag: "Scène 1 · Ce qui part avec chaque prompt",
      title: "Votre question est la plus petite partie.",
      ledeHtml: "À chaque tour, Copilot assemble discrètement un paquet et l'envoie au modèle. Ce que vous tapez n'est que la fine tranche de droite. Tout le reste est automatique &mdash; mais vous payez pour l'ensemble.",
      punchHtml: "<strong>Conséquence :</strong> raccourcir votre seul message ne change presque rien. Le levier est dans les cinq autres segments."
    },
    scene2: {
      tag: "Scène 2 · Essayez les interrupteurs",
      title: "Six habitudes. Activez-les et regardez la facture baisser.",
      groupAria: "Six habitudes à adopter",
      levers: {
        1: { name: "Pointez le fichier sur lequel vous travaillez", sub: "Envoyez un fichier ou votre sélection au lieu du dépôt entier." },
        2: { name: "Utilisez un plus petit modèle pour les tâches simples", sub: "Gardez le grand modèle pour les vrais problèmes difficiles." },
        3: { name: "Gardez vos instructions courtes et stables", sub: "Si elles ne changent pas, elles sont mises en cache et le coût d'entrée chute." },
        4: { name: "Ne poussez pas l'effort de raisonnement au maximum", sub: "Faible ou moyen suffit pour la plupart des tâches." },
        5: { name: "Désactivez les outils inutiles sur ce projet", sub: "La description de chaque outil activé est envoyée à chaque message, même sans usage." },
        6: { name: "Ouvrez un nouveau chat quand la tâche change", sub: "Les anciens tours restent attachés à chaque nouveau message jusqu'à réinitialisation." }
      },
      meter: {
        label: "ÉCONOMIES ESTIMÉES",
        saveSuffix: "économisés",
        countHtml: "Habitudes actives : <strong id=\"save-count\">0</strong> sur 6",
        tryAll: "Tester les 6",
        reset: "Réinitialiser",
        noHabitsTier: "Aucune habitude",
        noHabitsVerdictHtml: "Activez un interrupteur et voyez vos économies monter. Chacun ajoute son propre <code>≈%</code>.",
        startTier: "Bon départ",
        startVerdictHtml: "<strong>“{{name}}”</strong> seul &rarr; <strong>≈{{pct}}%</strong> économisés. Activez-en un autre et cela s'additionne.",
        solidTier: "Solide",
        solidTail: "C'est la zone du quotidien — la plupart des équipes s'arrêtent là et c'est suffisant.",
        tightTier: "Boucle serrée",
        tightTail: "Des tours plus légers, plus rapides et moins chers. Vous êtes bien placé.",
        allSixTier: "Les six",
        allSixTail: "Les rendements décroissants apparaissent ici : gardez les deux ou trois qui collent à votre journée.",
        multiVerdictHtml: "<strong>{{count}} habitudes actives :</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
      },
      punchHtml: "<strong>L'idée clé :</strong> vous n'avez pas besoin des six. Adoptez-en deux ou trois qui s'intègrent à votre flux : chacune coupe un facteur <em>différent</em>."
    },
    scene3: {
      tag: "Scène 3 · Une habitude, deux résultats",
      title: "Même tâche. Formulation différente.",
      lede: "L'habitude la plus rentable est aussi la plus simple : joindre le périmètre le plus étroit qui permette au modèle de répondre.",
      badLabel: "✗ GASPILLÉ",
      goodLabel: "✓ PRÉCIS",
      tokensSent: "Jetons envoyés"
    },
    scene4: {
      tagHtml: "Scène 4 &middot; La carte d'ensemble",
      title: "Prenez du recul : chaque personnalisation a un prix.",
      primer: { summaryHtml: "Nouveau sur ces notions ? &nbsp;<span class=\"primer-hint\">afficher une explication d'une ligne pour chacune</span>" },
      ladder: {
        headLabelHtml: "<strong>Moment du chargement</strong>",
        headExample: "Ce qu'on y trouve",
        headCostHtml: "Coût en jetons par tour &rarr;"
      }
    },
    scene5: {
      tag: "Scène 5 · Lundi matin",
      title: "S'il faut retenir trois choses, retenez celles-ci.",
      lede: "Vous n'avez pas besoin des six piliers demain. Choisissez trois habitudes. Rendez-les automatiques. Ajoutez le reste plus tard.",
      habits: {
        1: { title: "Citez le fichier avant le codebase.", tag: "PORTÉE" },
        2: { title: "Ajustez le modèle à chaque tour.", tag: "MODÈLE" },
        3: { title: "Nouvelle tâche, nouveau chat.", tag: "SESSION" }
      }
    },
    scene6: {
      tagHtml: "Scène 6 · Copier-coller",
      title: "Deux extraits. À déposer dans n'importe quel dépôt.",
      copy: "COPIER",
      copied: "COPIÉ ✓",
      pressCtrlC: "APPUYEZ SUR CTRL+C",
      templates: {
        instructions: { nameHtml: ".github/copilot-instructions.md<small>Stable, moins de 200 lignes — le préfixe mis en cache à chaque tour.</small>" },
        kickoff: { nameHtml: "Démarrage de tâche &mdash; à coller dans le chat<small>Réduit le contexte aux fichiers et contraintes utiles pour cette tâche.</small>", exampleSummary: "Afficher un exemple rempli" }
      },
      appendix: {
        summaryHtml: "En savoir plus ? &nbsp;<span class=\"primer-hint\">instructions ciblées, prompts réutilisables et ressources utiles</span>",
        snippets: {
          title: "Quatre prompts utiles à mémoriser",
          targeted: "Correction ciblée",
          refactor: "Refactor borné",
          review: "Revue du diff (mode économique)",
          restart: "Résumer et repartir"
        },
        docs: {
          title: "Pour aller plus loin",
          sub: "Documentation officielle. Le comportement change ; ces liens restent à jour."
        }
      }
    },
    footer: {
      done: "C'est terminé. <strong style=\"color:var(--text)\">Maintenant, allez économiser des jetons.</strong>",
      deeper: "Ouvrir les scénarios et le guide détaillé",
      disclaimer: "Ce contenu a été rédigé par Microsoft Asia Developer GBB et s'appuie sur la documentation GitHub Copilot publiquement disponible. Il n'a pas été validé pour toutes les configurations prises en charge. Bien que l'équipe s'efforce en permanence de rester alignée sur la dernière documentation, il est conseillé aux utilisateurs de vérifier les détails par rapport à la documentation officielle de GitHub avant de prendre toute décision."
    }
  }
});

window.TO.i18n.register("de", {
  quick: {
    languageLabel: "Sprache",
    docTitle: "Tokens und Kontext — ein visueller Leitfaden",
    hero: {
      tag: "GitHub-Copilot-Kontext in fünf Szenen",
      titleHtml: "Jeder GitHub-Copilot-Zug sendet <span class=\"accent\">ein unsichtbares Paket</span><br/>aus Kontext. Das steckt darin.",
      sub: "Ein Guide zum Durchscrollen. Drei Kernaussagen, keine Textwände.",
      cta: "Schnellguide starten",
      ctaDetailed: "Detaillierte Szenarien und Anleitung"
    },
    scene2: {
      tag: "Szene 2 · Schalter ausprobieren",
      title: "Sechs Gewohnheiten. Einschalten und die Kosten sinken sehen.",
      meter: {
        label: "GESCHÄTZTE ERSPARNIS",
        saveSuffix: "gespart",
        countHtml: "Aktive Gewohnheiten: <strong id=\"save-count\">0</strong> von 6",
        tryAll: "Alle 6 testen",
        reset: "Zurücksetzen",
        noHabitsTier: "Noch keine Gewohnheiten",
        startTier: "Ein Anfang",
        solidTier: "Solide",
        tightTier: "Straffe Schleife",
        allSixTier: "Alle sechs"
      },
      levers: {
        1: { name: "Zeige auf die Datei, an der du arbeitest", sub: "Sende eine Datei oder deine Auswahl statt des ganzen Repos." },
        2: { name: "Nutze ein kleineres Modell für einfache Aufgaben", sub: "Heb dir das große Modell für wirklich schwere Probleme auf." },
        6: { name: "Starte einen neuen Chat beim Aufgabenwechsel", sub: "Alte Turns fahren sonst bei jeder neuen Nachricht mit." }
      }
    },
    scene3: {
      tag: "Szene 3 · Eine Gewohnheit, zwei Ergebnisse",
      title: "Gleiche Aufgabe. Anderer Rahmen.",
      badLabel: "✗ VERSCHWENDERISCH",
      goodLabel: "✓ PRÄZISE",
      tokensSent: "Gesendete Tokens"
    },
    scene5: {
      tag: "Szene 5 · Montagmorgen",
      title: "Wenn du drei Dinge mitnimmst, dann diese.",
      habits: {
        1: { title: "Nenne zuerst die Datei, dann das Codebase.", tag: "UMFANG" },
        2: { title: "Passe das Modell pro Turn an.", tag: "MODELL" },
        3: { title: "Neue Aufgabe, neuer Chat.", tag: "SITZUNG" }
      }
    },
    scene6: {
      tagHtml: "Szene 6 · Kopieren &amp; Einfügen",
      title: "Zwei Snippets. Für jedes Repo.",
      copy: "KOPIEREN",
      copied: "KOPIERT ✓",
      pressCtrlC: "STRG+C DRÜCKEN"
    },
    footer: {
      deeper: "Detaillierte Szenarien und Anleitung öffnen",
      disclaimer: "Dieser Inhalt wurde von Microsoft Asia Developer GBB erstellt und basiert auf der öffentlich verfügbaren GitHub-Copilot-Dokumentation. Er wurde nicht für alle unterstützten Konfigurationen validiert. Obwohl sich das Team kontinuierlich bemüht, mit der neuesten Dokumentation übereinzustimmen, wird Benutzern empfohlen, die Details vor jeder Entscheidung anhand der offiziellen GitHub-Dokumentation zu überprüfen."
    }
  }
});

window.TO.i18n.register("ja", {
  quick: {
    languageLabel: "言語",
    docTitle: "トークンとコンテキスト — ビジュアルガイド",
    hero: {
      tag: "GitHub Copilot のコンテキストを5つの場面で見る",
      titleHtml: "GitHub Copilot の各ターンでは <span class=\"accent\">見えないパケット</span><br/>としてコンテキストが送られます。その中身です。",
      sub: "スクロールで読むガイド。要点は3つ、長い文章はなし。",
      cta: "クイックガイドを始める",
      ctaDetailed: "詳細シナリオとガイド"
    },
    scene1: {
      tag: "シーン1 · 毎回のプロンプトに乗るもの",
      title: "あなたの質問は一番小さい部分です。",
      punchHtml: "<strong>重要な点:</strong> 自分のメッセージだけを短くしても、節約できる量はほとんどありません。効くのは残りの5区画です。"
    },
    scene2: {
      tag: "シーン2 · トグルを試す",
      title: "6つの習慣。オンにして、コストが下がるのを見てください。",
      meter: {
        label: "推定削減率",
        saveSuffix: "削減",
        countHtml: "有効な習慣: <strong id=\"save-count\">0</strong> / 6",
        tryAll: "6つすべて試す",
        reset: "リセット",
        noHabitsTier: "まだ習慣なし",
        startTier: "まずは一歩",
        solidTier: "十分",
        tightTier: "引き締まった運用",
        allSixTier: "6つすべて"
      },
      levers: {
        1: { name: "作業中のファイルを明示する", sub: "リポジトリ全体ではなく、1ファイルか選択範囲だけを送ります。" },
        2: { name: "簡単な作業には小さいモデルを使う", sub: "大きいモデルは本当に難しい問題に取っておきます。" },
        5: { name: "このプロジェクトで使わないツールはオフにする", sub: "有効なツールの説明は、使わなくても毎回送信されます。" },
        6: { name: "タスクが変わったら新しいチャットを始める", sub: "古いターンはリセットするまで新しいメッセージに付き続けます。" }
      }
    },
    scene3: {
      tag: "シーン3 · 1つの習慣、2つの結果",
      title: "同じタスクでも、切り取り方で変わる。",
      badLabel: "✗ 無駄が多い",
      goodLabel: "✓ 絞れている",
      tokensSent: "送信トークン数"
    },
    scene5: {
      tag: "シーン5 · 月曜の朝",
      title: "3つだけ持ち帰るなら、これです。",
      habits: {
        1: { title: "まずファイル、次に codebase。", tag: "スコープ" },
        2: { title: "ターンごとにモデルを合わせる。", tag: "モデル" },
        3: { title: "新しいタスクなら新しいチャット。", tag: "セッション" }
      }
    },
    scene6: {
      tagHtml: "シーン6 · コピーして使う",
      title: "2つのスニペット。どのリポジトリにも。",
      copy: "コピー",
      copied: "コピー済み ✓",
      pressCtrlC: "CTRL+C を押す"
    },
    footer: {
      deeper: "詳細シナリオとガイドを開く",
      disclaimer: "このコンテンツは Microsoft Asia Developer GBB によって作成され、一般公開されている GitHub Copilot のドキュメントに基づいています。サポートされるすべての構成で検証されたわけではありません。チームは最新のドキュメントとの整合を維持するよう継続的に努めていますが、意思決定を行う前に、公式の GitHub ドキュメントで詳細を確認することをお勧めします。"
    }
  }
});

window.TO.i18n.register("zh-CN", {
  quick: {
    languageLabel: "语言",
    docTitle: "Token 与上下文：可视化指南",
    hero: {
      tag: "用五个场景理解 GitHub Copilot 上下文",
      titleHtml: "每一次 GitHub Copilot 交互，都会发送<span class=\"accent\">一个看不见的数据包</span><br/>作为上下文。这就是它的内容。",
      sub: "一份滚动浏览指南。三个结论，没有大段说明。",
      cta: "开始快速指南",
      ctaDetailed: "详细场景与指南"
    },
    scene2: {
      tag: "场景 2 · 试试这些开关",
      title: "六个习惯。打开它们，看成本下降。",
      meter: {
        label: "预计节省",
        saveSuffix: "已节省",
        countHtml: "已启用习惯：<strong id=\"save-count\">0</strong>/6",
        tryAll: "试试全部 6 个",
        reset: "重置",
        noHabitsTier: "还没有启用",
        startTier: "起步不错",
        solidTier: "稳妥",
        tightTier: "紧凑循环",
        allSixTier: "全部六项"
      },
      levers: {
        1: { name: "明确指出你正在处理的文件", sub: "发送单个文件或选区，而不是整个仓库。" },
        2: { name: "简单任务使用更小的模型", sub: "把大模型留给真正困难的问题。" },
        3: { name: "让自定义说明保持简短且稳定", sub: "如果每轮都不变，它们就会被缓存，输入成本会明显下降。" },
        6: { name: "切换任务时开启新对话", sub: "旧轮次会一直随着新消息发送，直到你重置。" }
      }
    },
    scene3: {
      tag: "场景 3 · 一个习惯，两种结果",
      title: "同一任务，不同表达。",
      badLabel: "✗ 浪费",
      goodLabel: "✓ 精准",
      tokensSent: "发送的 Token"
    },
    scene6: {
      tagHtml: "场景 6 · 复制粘贴",
      title: "两个片段，放进任何仓库都能用。",
      copy: "复制",
      copied: "已复制 ✓",
      pressCtrlC: "按 CTRL+C"
    },
    footer: {
      deeper: "打开详细场景与指南",
      disclaimer: "本内容由 Microsoft Asia Developer GBB 编写，基于公开可用的 GitHub Copilot 文档。尚未在所有受支持的配置中进行验证。尽管团队持续努力与最新文档保持一致，但建议用户在做出任何决定之前，对照 GitHub 官方文档核实细节。"
    }
  }
});

window.TO.i18n.register("pt-BR", {
  quick: {
    languageLabel: "Idioma",
    docTitle: "Tokens e contexto — guia visual",
    hero: {
      tag: "O contexto do GitHub Copilot, em cinco cenas",
      titleHtml: "Cada turno do GitHub Copilot envia <span class=\"accent\">um pacote invisível</span><br/>de contexto. É isso que vai dentro dele.",
      sub: "Um guia para rolar a página. Três conclusões, sem blocos enormes de texto.",
      cta: "Começar o guia rápido",
      ctaDetailed: "Cenários e guia detalhado"
    },
    scene2: {
      tag: "Cena 2 · Teste as chaves",
      title: "Seis hábitos. Ligue-os e veja a conta cair.",
      meter: {
        label: "ECONOMIA ESTIMADA",
        saveSuffix: "economizado",
        countHtml: "Hábitos ligados: <strong id=\"save-count\">0</strong> de 6",
        tryAll: "Testar os 6",
        reset: "Redefinir"
      },
      levers: {
        1: { name: "Aponte para o arquivo em que você está trabalhando", sub: "Envie um arquivo ou sua seleção em vez do repositório inteiro." },
        2: { name: "Use um modelo menor para tarefas fáceis", sub: "Guarde o modelo grande para os problemas realmente difíceis." },
        5: { name: "Desative ferramentas que você não usa neste projeto", sub: "A descrição de cada ferramenta ativa é enviada em toda mensagem, mesmo quando não é usada." },
        6: { name: "Abra um novo chat ao trocar de tarefa", sub: "Os turnos antigos continuam vindo em toda nova mensagem até você reiniciar." }
      }
    },
    scene3: {
      tag: "Cena 3 · Um hábito, dois resultados",
      title: "A mesma tarefa. Outro enquadramento.",
      badLabel: "✗ DESPERDÍCIO",
      goodLabel: "✓ ENXUTO",
      tokensSent: "Tokens enviados"
    },
    scene6: {
      tagHtml: "Cena 6 · Copiar e colar",
      title: "Dois trechos. Use em qualquer repositório.",
      copy: "COPIAR",
      copied: "COPIADO ✓",
      pressCtrlC: "PRESSIONE CTRL+C"
    },
    footer: {
      deeper: "Abrir cenários e guia detalhado",
      disclaimer: "Este conteúdo foi elaborado pela Microsoft Asia Developer GBB e baseia-se na documentação publicamente disponível do GitHub Copilot. Não foi validado em todas as configurações suportadas. Embora a equipe se esforce continuamente para se manter alinhada com a documentação mais recente, recomenda-se que os usuários verifiquem os detalhes na documentação oficial do GitHub antes de tomar qualquer decisão."
    }
  }
});

window.TO.i18n.register("ar", {
  quick: {
    languageLabel: "اللغة",
    docTitle: "الرموز والسياق — دليل بصري",
    hero: {
      tag: "سياق GitHub Copilot في خمس لقطات",
      titleHtml: "كل دورة من GitHub Copilot ترسل <span class=\"accent\">حزمة غير مرئية</span><br/>من السياق. هذا ما بداخلها.",
      sub: "دليل تمرير سريع. ثلاث خلاصات، بلا جدران من النص.",
      cta: "ابدأ الدليل السريع",
      ctaDetailed: "السيناريوهات والدليل التفصيلي"
    },
    scene1: {
      tag: "المشهد 1 · ما الذي يرافق كل مطالبة",
      title: "سؤالك هو أصغر جزء.",
      punchHtml: "<strong>النتيجة:</strong> تقصير رسالتك وحدها لا يوفر تقريبًا شيئًا. التأثير الحقيقي في الأجزاء الخمسة الأخرى."
    },
    scene2: {
      tag: "المشهد 2 · جرّب المفاتيح",
      title: "ست عادات. فعّلها وشاهد التكلفة تنخفض.",
      meter: {
        label: "التوفير التقديري",
        saveSuffix: "تم توفيره",
        countHtml: "العادات المفعلة: <strong id=\"save-count\">0</strong> من 6",
        tryAll: "جرّب الست كلها",
        reset: "إعادة تعيين",
        noHabitsTier: "لا عادات بعد"
      },
      levers: {
        1: { name: "حدّد الملف الذي تعمل عليه", sub: "أرسل ملفًا واحدًا أو التحديد بدلًا من المستودع كله." },
        2: { name: "استخدم نموذجًا أصغر للمهام السهلة", sub: "وفّر النموذج الأكبر للمشكلات الصعبة فعلًا." },
        6: { name: "ابدأ محادثة جديدة عند تغيير المهمة", sub: "الرسائل القديمة تستمر مع كل رسالة جديدة حتى تعيد الضبط." }
      }
    },
    scene3: {
      tag: "المشهد 3 · عادة واحدة، نتيجتان",
      title: "المهمة نفسها، لكن بصياغة مختلفة.",
      badLabel: "✗ مُهدر",
      goodLabel: "✓ مُحكم",
      tokensSent: "الرموز المرسلة"
    },
    scene6: {
      tagHtml: "المشهد 6 · نسخ ولصق",
      title: "مقتطفان. يصلحان لأي مستودع.",
      copy: "نسخ",
      copied: "تم النسخ ✓",
      pressCtrlC: "اضغط CTRL+C"
    },
    footer: {
      deeper: "افتح السيناريوهات والدليل التفصيلي",
      disclaimer: "تم إعداد هذا المحتوى بواسطة Microsoft Asia Developer GBB ويستند إلى وثائق GitHub Copilot المتاحة للعموم. لم يتم التحقق منه عبر جميع التكوينات المدعومة. وبينما يبذل الفريق جهودًا مستمرة للبقاء متوافقًا مع أحدث الوثائق، يُنصح المستخدمون بالتحقق من التفاصيل مقابل وثائق GitHub الرسمية قبل اتخاذ أي قرارات."
    }
  }
});

registerQuick("es", {
  languageLabel: "Idioma",
  docTitle: "Tokens y contexto — una guía visual",
  hero: {
    tag: "Contexto de GitHub Copilot, en cinco escenas",
    titleHtml: "Cada turno de GitHub Copilot envía <span class=\"accent\">un paquete invisible</span><br/>de contexto. Esto es lo que lleva.",
    sub: "Una guía para recorrer con scroll. Tres ideas clave, sin muros de texto.",
    cta: "Empezar la guía rápida",
    ctaDetailed: "Escenarios y guía detallada"
  },
  scene1: {
    tag: "Escena 1 · Qué viaja en cada prompt",
    title: "Tu pregunta es la parte más pequeña.",
    ledeHtml: "En cada turno, Copilot arma en silencio un paquete y se lo envía al modelo. Lo que escribiste es la franja fina de la derecha. Todo lo demás es automático &mdash; pero pagas por todo.",
    punchHtml: "<strong>Implicación:</strong> reducir tu propio mensaje casi no ahorra nada. La palanca real está en los otros cinco segmentos."
  },
  scene2: {
    tag: "Escena 2 · Prueba los interruptores",
    title: "Seis hábitos. Actívalos y mira cómo baja la factura.",
    ledeHtml: "Cada interruptor es un hábito. Al activarlo, su <code>≈%</code> se suma a tu <strong style=\"color:var(--text)\">AHORRO ESTIMADO</strong> a la derecha. <strong style=\"color:var(--text)\">Prueba el primero</strong> &mdash; el ahorro sube a <code>≈22%</code>. Activa otro y los ahorros se acumulan.",
    noteHtml: "<strong>Sobre los números:</strong> el <code>≈%</code> de cada fila es una cifra <em>aproximada</em> basada en rangos típicos que ven los equipos al adoptar ese hábito en un código real. Muestran qué hábitos mueven más la aguja; no son una promesa para tu proyecto.",
    groupAria: "Seis hábitos que puedes adoptar",
    levers: {
      1: { name: "Señala el archivo en el que estás trabajando", sub: "Envía un archivo o tu selección en lugar de todo el repositorio." },
      2: { name: "Usa un modelo más pequeño para tareas fáciles", sub: "Reserva el modelo grande para los problemas realmente difíciles." },
      3: { name: "Mantén tus instrucciones personalizadas cortas y estables", sub: "Si no cambian entre turnos, se almacenan en caché y el costo de entrada baja mucho." },
      4: { name: "No lleves el esfuerzo de razonamiento al máximo", sub: "Bajo o medio alcanza para la mayoría del trabajo. Guarda el nivel alto para tareas realmente ambiguas." },
      5: { name: "Desactiva las herramientas que no usas en este proyecto", sub: "La descripción de cada herramienta habilitada se envía en cada mensaje, incluso cuando no se usa." },
      6: { name: "Empieza un chat nuevo cuando cambies de tarea", sub: "Los turnos anteriores viajan en cada mensaje nuevo hasta que reinicias." }
    },
    meter: {
      label: "AHORRO ESTIMADO",
      saveSuffix: "ahorrado",
      countHtml: "Hábitos activos: <strong id=\"save-count\">0</strong> de 6",
      tryAll: "Probar los 6",
      reset: "Restablecer",
      noHabitsTier: "Todavía sin hábitos",
      noHabitsVerdictHtml: "Activa un interruptor y mira cómo sube el ahorro. Cada uno aporta su propio <code>≈%</code>.",
      startTier: "Buen comienzo",
      startVerdictHtml: "<strong>“{{name}}”</strong> por sí solo &rarr; <strong>≈{{pct}}%</strong> ahorrado. Activa otro y se suma a esto.",
      solidTier: "Sólido",
      solidTail: "Esta es la zona diaria: la mayoría de los equipos se queda aquí y les alcanza.",
      tightTier: "Bucle ajustado",
      tightTail: "Turnos más livianos, rápidos y baratos. Estás en una buena zona.",
      allSixTier: "Los seis",
      allSixTail: "Aparecen rendimientos decrecientes; elige los dos o tres que encajan con tu día.",
      multiVerdictHtml: "<strong>{{count}} hábitos activos:</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
    },
    punchHtml: "<strong>La idea clave:</strong> no necesitas los seis. Adopta dos o tres que encajen con tu flujo y los números se moverán rápido, porque cada hábito corta un factor <em>distinto</em>."
  },
  scene3: {
    tag: "Escena 3 · Un hábito, dos resultados",
    title: "La misma tarea. Distinta formulación.",
    lede: "El hábito de mayor impacto también es el más fácil: adjunta el alcance más estrecho que permita al modelo responder.",
    badLabel: "✗ DERROCHADOR",
    goodLabel: "✓ AJUSTADO",
    tokensSent: "Tokens enviados",
    punchHtml: "<strong>La misma calidad de respuesta, una factura ~7× menor y un turno más rápido.</strong> Recurre a <code>#codebase</code> solo cuando los alcances más acotados ya fallaron."
  },
  scene4: {
    tagHtml: "Escena 4 &middot; El mapa completo",
    title: "Amplía el zoom: toda personalización tiene un precio.",
    ledeHtml: "Los hábitos del chat de la escena 2 son la mitad que controlas a mano. La otra mitad es el sistema de personalización &mdash; <code>instructions</code>, <code>prompts</code>, <code>skills</code>, <code>agents</code>, <code>hooks</code>. Se ordenan en <strong style=\"color:var(--text)\">seis niveles</strong> según <em>cuándo</em> se cargan. El nivel superior se paga en cada solicitud.",
    primer: {
      summaryHtml: "¿No conoces esto? &nbsp;<span class=\"primer-hint\">muestra una explicación de una línea para cada elemento</span>"
    }
  },
  scene5: {
    tag: "Escena 5 · Lunes por la mañana",
    title: "Si te llevas tres cosas, que sean estas.",
    lede: "No necesitas los seis pilares mañana. Elige tres hábitos. Hazlos automáticos. Añade el resto después.",
    habits: {
      1: { title: "Escribe el archivo antes que el codebase.", tag: "ALCANCE" },
      2: { title: "Ajusta el modelo en cada turno.", body: "Empieza con un nivel ligero. Sube a un modelo frontier para diseño ambiguo o depuración realmente difícil. Luego vuelve a bajar para los seguimientos.", tag: "MODELO" },
      3: { title: "Nueva tarea, nuevo chat.", body: "El historial se acumula: pagas cada turno viejo en cada turno nuevo. Cuando cambia la tarea, reinicia. El turno más barato es el que no haces.", tag: "SESIÓN" }
    }
  },
  scene6: {
    tagHtml: "Escena 6 · Copiar y pegar",
    title: "Dos fragmentos. Ponlos en cualquier repo.",
    ledeHtml: "Ambos fragmentos hacen lo mismo: <strong style=\"color:var(--text)\">darle al modelo menos para leer y mantenerlo igual en cada turno</strong>. <strong style=\"color:var(--text)\">Guarda uno como archivo</strong> para que se almacene en caché y se reutilice. <strong style=\"color:var(--text)\">Pega el otro en el chat</strong> para acotar el modelo a esta tarea. Róbalos.",
    copy: "COPIAR",
    copied: "COPIADO ✓",
    pressCtrlC: "PULSA CTRL+C",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>Estable, menos de 200 líneas: el prefijo que se cachea en cada turno.</small>" },
      kickoff: { nameHtml: "Inicio de tarea &mdash; pegar en el chat<small>Limita el contexto a los archivos y restricciones que esta tarea necesita.</small>", exampleSummary: "Mostrar un ejemplo completo" }
    },
    appendix: {
      summaryHtml: "¿Quieres más? &nbsp;<span class=\"primer-hint\">instrucciones acotadas, prompts reutilizables y dónde leer más</span>",
      snippets: { title: "Cuatro fragmentos de prompt para memorizar", targeted: "Arreglo de bug acotado", refactor: "Refactor acotado", review: "Revisión del diff (modo barato)", restart: "Resumir y reiniciar" },
      docs: { title: "Dónde leer más", sub: "Documentación oficial. El comportamiento cambia; estas fuentes se mantienen al día." }
    }
  },
  footer: {
    done: "Has terminado. <strong style=\"color:var(--text)\">Ahora ve a ahorrar tokens.</strong>",
    deeper: "Abrir escenarios y guía detallada"
  }
});

registerQuick("fr", {
  languageLabel: "Langue",
  docTitle: "Tokens et contexte — guide visuel",
  hero: {
    tag: "Le contexte de GitHub Copilot en cinq scènes",
    titleHtml: "Chaque tour GitHub Copilot envoie <span class=\"accent\">un paquet invisible</span><br/>de contexte. Voici ce qu'il contient.",
    sub: "Un guide à faire défiler. Trois idées clés, sans mur de texte.",
    cta: "Commencer le guide rapide",
    ctaDetailed: "Scénarios et guide détaillé"
  },
  scene1: {
    tag: "Scène 1 · Ce qui accompagne chaque prompt",
    title: "Votre question est la plus petite partie.",
    ledeHtml: "À chaque tour, Copilot assemble discrètement un paquet et l'envoie au modèle. Ce que vous tapez n'est que la mince tranche à droite. Tout le reste est automatique &mdash; mais vous le payez quand même.",
    punchHtml: "<strong>Conséquence :</strong> raccourcir votre propre message n'économise presque rien. Le vrai levier se trouve dans les cinq autres segments."
  },
  scene2: {
    tag: "Scène 2 · Essayez les interrupteurs",
    title: "Six habitudes. Activez-les et regardez la facture baisser.",
    ledeHtml: "Chaque interrupteur représente une habitude. Activez-le et son <code>≈%</code> s'ajoute à vos <strong style=\"color:var(--text)\">ÉCONOMIES ESTIMÉES</strong> à droite. <strong style=\"color:var(--text)\">Essayez le premier</strong> &mdash; les économies montent à <code>≈22%</code>. Activez-en un autre et elles s'additionnent.",
    noteHtml: "<strong>À propos des chiffres :</strong> le <code>≈%</code> de chaque ligne est une valeur <em>approximative</em> issue des fourchettes que les équipes observent le plus souvent lorsqu'elles adoptent cette habitude sur un vrai codebase. Cela indique quels leviers comptent le plus ; ce n'est pas une promesse pour votre projet.",
    groupAria: "Six habitudes que vous pouvez adopter",
    levers: {
      1: { name: "Pointez le fichier sur lequel vous travaillez", sub: "Envoyez un seul fichier ou votre sélection au lieu du dépôt entier." },
      2: { name: "Utilisez un modèle plus petit pour les tâches simples", sub: "Gardez le grand modèle pour les vrais problèmes difficiles." },
      3: { name: "Gardez vos instructions personnalisées courtes et stables", sub: "Si elles ne changent pas d'un tour à l'autre, elles sont mises en cache et le coût d'entrée chute fortement." },
      4: { name: "Ne poussez pas l'effort de raisonnement au maximum", sub: "Faible ou moyen suffit pour la plupart des tâches. Réservez le niveau élevé aux cas vraiment ambigus." },
      5: { name: "Désactivez les outils inutiles sur ce projet", sub: "La description de chaque outil activé est envoyée à chaque message, même s'il n'est pas utilisé." },
      6: { name: "Commencez un nouveau chat quand vous changez de tâche", sub: "Les anciens tours accompagnent chaque nouveau message jusqu'à réinitialisation." }
    },
    meter: {
      label: "ÉCONOMIES ESTIMÉES",
      saveSuffix: "économisés",
      countHtml: "Habitudes actives : <strong id=\"save-count\">0</strong> sur 6",
      tryAll: "Essayer les 6",
      reset: "Réinitialiser",
      noHabitsTier: "Aucune habitude",
      noHabitsVerdictHtml: "Activez un interrupteur et regardez les économies monter. Chaque interrupteur ajoute son propre <code>≈%</code>.",
      startTier: "Un début",
      startVerdictHtml: "<strong>“{{name}}”</strong> à lui seul &rarr; <strong>≈{{pct}}%</strong> d'économies. Activez-en un autre et cela s'ajoute.",
      solidTier: "Solide",
      solidTail: "C'est la zone du quotidien — la plupart des équipes s'arrêtent ici et cela suffit.",
      tightTier: "Boucle serrée",
      tightTail: "Des tours plus légers, plus rapides et moins chers. Vous êtes bien placé.",
      allSixTier: "Les six",
      allSixTail: "Les rendements décroissants apparaissent ; choisissez les deux ou trois qui collent à votre journée.",
      multiVerdictHtml: "<strong>{{count}} habitudes actives :</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
    },
    punchHtml: "<strong>À retenir :</strong> vous n'avez pas besoin des six. Adoptez-en deux ou trois qui s'intègrent à votre façon de travailler, et les chiffres bougent vite — parce que chaque habitude coupe un facteur <em>différent</em>."
  },
  scene3: {
    tag: "Scène 3 · Une habitude, deux résultats",
    title: "Même tâche. Formulation différente.",
    lede: "L'habitude la plus rentable est aussi la plus simple : joignez le périmètre le plus étroit qui permette au modèle de répondre.",
    badLabel: "✗ GASPILLAGE",
    goodLabel: "✓ CIBLÉ",
    tokensSent: "Tokens envoyés",
    punchHtml: "<strong>Même qualité de réponse, facture ~7× plus petite, tour plus rapide.</strong> N'utilisez <code>#codebase</code> que lorsque les portées plus étroites ont réellement échoué."
  },
  scene4: {
    tagHtml: "Scène 4 &middot; La carte d'ensemble",
    title: "Prenez du recul : chaque personnalisation a un prix.",
    ledeHtml: "Les habitudes de chat de la scène 2 sont la moitié que vous contrôlez à la main. L'autre moitié, c'est le système de personnalisation lui-même &mdash; <code>instructions</code>, <code>prompts</code>, <code>skills</code>, <code>agents</code>, <code>hooks</code>. Ils se répartissent en <strong style=\"color:var(--text)\">six niveaux</strong> selon <em>quand</em> ils se chargent. Le niveau supérieur est payé à chaque requête.",
    primer: { summaryHtml: "Nouveau pour vous ? &nbsp;<span class=\"primer-hint\">afficher une définition d'une ligne pour chaque élément</span>" }
  },
  scene5: {
    tag: "Scène 5 · Lundi matin",
    title: "Si vous ne gardez que trois idées, gardez celles-ci.",
    lede: "Vous n'avez pas besoin des six piliers demain. Choisissez trois habitudes. Rendez-les automatiques. Ajoutez le reste plus tard.",
    habits: {
      1: { title: "Tapez le fichier avant le codebase.", tag: "PÉRIMÈTRE" },
      2: { title: "Adaptez le modèle à chaque tour.", body: "Commencez avec un niveau léger. Passez à un modèle frontier pour les conceptions ambiguës ou les débogages vraiment difficiles. Redescendez ensuite pour les suites.", tag: "MODÈLE" },
      3: { title: "Nouvelle tâche, nouveau chat.", body: "L'historique s'accumule — vous payez chaque ancien tour à chaque nouveau. Quand la tâche change, réinitialisez. Le tour le moins cher est celui que vous n'envoyez pas.", tag: "SESSION" }
    }
  },
  scene6: {
    tagHtml: "Scène 6 · Copier-coller",
    title: "Deux extraits. Glissez-les dans n'importe quel dépôt.",
    ledeHtml: "Ces deux extraits font la même chose : <strong style=\"color:var(--text)\">donner moins à lire au modèle et garder ce contenu identique à chaque tour</strong>. <strong style=\"color:var(--text)\">Enregistrez-en un comme fichier</strong> pour le mettre en cache et le réutiliser. <strong style=\"color:var(--text)\">Collez l'autre dans le chat</strong> pour limiter le modèle à cette tâche. Servez-vous.",
    copy: "COPIER",
    copied: "COPIÉ ✓",
    pressCtrlC: "APPUYEZ SUR CTRL+C",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>Stable, moins de 200 lignes — le préfixe mis en cache à chaque tour.</small>" },
      kickoff: { nameHtml: "Lancement de tâche &mdash; coller dans le chat<small>Limite le contexte aux fichiers et contraintes dont cette tâche a besoin.</small>", exampleSummary: "Afficher un exemple rempli" }
    },
    appendix: {
      summaryHtml: "Vous en voulez plus ? &nbsp;<span class=\"primer-hint\">instructions ciblées, prompts réutilisables et lectures utiles</span>",
      snippets: { title: "Quatre prompts à retenir", targeted: "Correction de bug ciblée", refactor: "Refactor borné", review: "Revue du diff (mode économique)", restart: "Résumer et repartir" },
      docs: { title: "Pour aller plus loin", sub: "Documentation officielle. Le comportement évolue ; ces sources restent à jour." }
    }
  },
  footer: {
    done: "C'est terminé. <strong style=\"color:var(--text)\">Allez maintenant économiser des tokens.</strong>",
    deeper: "Ouvrir les scénarios et le guide détaillé"
  }
});

registerQuick("de", {
  languageLabel: "Sprache",
  docTitle: "Tokens und Kontext — ein visueller Leitfaden",
  hero: {
    tag: "GitHub-Copilot-Kontext in fünf Szenen",
    titleHtml: "Jeder GitHub-Copilot-Turn sendet <span class=\"accent\">ein unsichtbares Paket</span><br/>an Kontext. Das steckt darin.",
    sub: "Ein Guide zum Durchscrollen. Drei Kernaussagen, keine Textwände.",
    cta: "Kurzanleitung starten",
    ctaDetailed: "Detaillierte Szenarien und Anleitung"
  },
  scene1: {
    tag: "Szene 1 · Was bei jedem Prompt mitfährt",
    title: "Deine Frage ist der kleinste Teil.",
    ledeHtml: "Bei jedem Turn baut Copilot im Hintergrund ein Paket und sendet es an das Modell. Das, was du tippst, ist nur der schmale Streifen rechts. Alles andere passiert automatisch &mdash; bezahlt wird trotzdem alles.",
    punchHtml: "<strong>Folge:</strong> den eigenen Text zu kürzen spart fast nichts. Die eigentlichen Hebel liegen in den anderen fünf Segmenten."
  },
  scene2: {
    tag: "Szene 2 · Schalter ausprobieren",
    title: "Sechs Gewohnheiten. Einschalten und die Rechnung sinken sehen.",
    ledeHtml: "Jeder Schalter steht für eine Gewohnheit. Wenn du ihn aktivierst, wird sein <code>≈%</code> zu deinen <strong style=\"color:var(--text)\">GESCHÄTZTEN ERSPARNISSEN</strong> rechts addiert. <strong style=\"color:var(--text)\">Probiere den ersten</strong> &mdash; die Ersparnis steigt auf <code>≈22%</code>. Noch einen dazu, und die Wirkung stapelt sich.",
    noteHtml: "<strong>Zu den Zahlen:</strong> Das <code>≈%</code> pro Zeile ist ein <em>grober</em> Richtwert aus typischen Bereichen, die Teams bei echter Codebasis sehen. Es zeigt, welche Hebel am meisten bewegen — keine Zusage für dein Projekt.",
    groupAria: "Sechs Gewohnheiten, die du übernehmen kannst",
    levers: {
      1: { name: "Zeige auf die Datei, an der du arbeitest", sub: "Sende eine Datei oder deine Auswahl statt des ganzen Repos." },
      2: { name: "Nutze für einfache Aufgaben ein kleineres Modell", sub: "Heb dir das große Modell für wirklich schwierige Probleme auf." },
      3: { name: "Halte deine benutzerdefinierten Anweisungen kurz und stabil", sub: "Wenn sie zwischen Turns gleich bleiben, werden sie gecacht — die Input-Kosten sinken deutlich." },
      4: { name: "Dreh den Reasoning-Aufwand nicht auf Maximum", sub: "Niedrig oder mittel reicht für die meiste Arbeit. Hoch nur für wirklich mehrdeutige Aufgaben." },
      5: { name: "Schalte Tools aus, die du in diesem Projekt nicht nutzt", sub: "Die Beschreibung jedes aktivierten Tools wird bei jeder Nachricht mitgeschickt — auch wenn es ungenutzt bleibt." },
      6: { name: "Starte einen neuen Chat, wenn du die Aufgabe wechselst", sub: "Alte Turns fahren in jeder neuen Nachricht mit, bis du zurücksetzt." }
    },
    meter: {
      label: "GESCHÄTZTE ERSPARNIS",
      saveSuffix: "gespart",
      countHtml: "Aktive Gewohnheiten: <strong id=\"save-count\">0</strong> von 6",
      tryAll: "Alle 6 testen",
      reset: "Zurücksetzen",
      noHabitsTier: "Noch keine Gewohnheiten",
      noHabitsVerdictHtml: "Schalte einen Schalter um und beobachte, wie die Ersparnis steigt. Jeder bringt sein eigenes <code>≈%</code> mit.",
      startTier: "Ein Anfang",
      startVerdictHtml: "<strong>“{{name}}”</strong> allein &rarr; <strong>≈{{pct}}%</strong> gespart. Schalte einen weiteren dazu und es addiert sich.",
      solidTier: "Solide",
      solidTail: "Das ist die Alltagszone — die meisten Teams bleiben hier und das reicht aus.",
      tightTier: "Straffer Loop",
      tightTail: "Leichtere, schnellere, günstigere Turns. Du bist gut aufgestellt.",
      allSixTier: "Alle sechs",
      allSixTail: "Ab hier greifen abnehmende Erträge — nimm die zwei oder drei, die zu deinem Alltag passen.",
      multiVerdictHtml: "<strong>{{count}} Gewohnheiten aktiv:</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
    },
    punchHtml: "<strong>Die Kernaussage:</strong> Du brauchst nicht alle sechs. Übernimm zwei oder drei, die zu deinem Workflow passen — und die Zahlen bewegen sich schnell, weil jede Gewohnheit einen <em>anderen</em> Faktor reduziert."
  },
  scene3: {
    tag: "Szene 3 · Eine Gewohnheit, zwei Ergebnisse",
    title: "Gleiche Aufgabe. Andere Formulierung.",
    lede: "Die wirkungsvollste Gewohnheit ist zugleich die einfachste: Gib nur den engsten Scope mit, der dem Modell zum Antworten reicht.",
    badLabel: "✗ VERSCHWENDUNG",
    goodLabel: "✓ PRÄZISE",
    tokensSent: "Gesendete Tokens",
    punchHtml: "<strong>Gleiche Antwortqualität, ~7× kleinere Rechnung, schnellerer Turn.</strong> Greife erst zu <code>#codebase</code>, wenn engere Scopes wirklich gescheitert sind."
  },
  scene4: {
    tagHtml: "Szene 4 &middot; Die größere Karte",
    title: "Zoome heraus: Jede Anpassung hat ihren Preis.",
    ledeHtml: "Die Chat-Gewohnheiten aus Szene 2 sind die Hälfte, die du von Hand steuerst. Die andere Hälfte ist das Anpassungssystem selbst &mdash; <code>instructions</code>, <code>prompts</code>, <code>skills</code>, <code>agents</code>, <code>hooks</code>. Sie fallen in <strong style=\"color:var(--text)\">sechs Stufen</strong>, je nachdem, <em>wann</em> sie laden. Die oberste Stufe wird bei jeder Anfrage bezahlt.",
    primer: { summaryHtml: "Neu dabei? &nbsp;<span class=\"primer-hint\">zeige eine Ein-Zeilen-Erklärung für jede Fläche</span>" }
  },
  scene5: {
    tag: "Szene 5 · Montagmorgen",
    title: "Wenn du drei Dinge mitnimmst, dann diese.",
    lede: "Du brauchst morgen nicht alle sechs Säulen. Nimm drei Gewohnheiten. Mach sie automatisch. Den Rest später.",
    habits: {
      1: { title: "Erst die Datei, dann die Codebasis.", tag: "SCOPE" },
      2: { title: "Passe das Modell pro Turn an.", body: "Starte mit einer leichten Stufe. Wechsle für mehrdeutiges Design oder wirklich schweres Debugging zu einem Frontier-Modell. Danach wieder herunter für die Folgearbeit.", tag: "MODELL" },
      3: { title: "Neue Aufgabe, neuer Chat.", body: "Verlauf summiert sich — du bezahlst jeden alten Turn bei jedem neuen mit. Wenn sich die Aufgabe ändert, setze zurück. Der günstigste Turn ist der, den du nicht sendest.", tag: "SITZUNG" }
    }
  },
  scene6: {
    tagHtml: "Szene 6 · Kopieren &amp; Einfügen",
    title: "Zwei Snippets. In jedes Repo einsetzbar.",
    ledeHtml: "Beide Snippets machen dasselbe: <strong style=\"color:var(--text)\">dem Modell weniger zum Lesen geben und diesen Teil in jedem Turn gleich halten</strong>. <strong style=\"color:var(--text)\">Speichere eines als Datei</strong>, damit es gecacht und wiederverwendet wird. <strong style=\"color:var(--text)\">Füge das andere in den Chat ein</strong>, um das Modell nur auf diese Aufgabe zu lenken. Nimm sie dir.",
    copy: "KOPIEREN",
    copied: "KOPIERT ✓",
    pressCtrlC: "STRG+C DRÜCKEN",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>Stabil, unter 200 Zeilen — das Präfix, das in jedem Turn gecacht wird.</small>" },
      kickoff: { nameHtml: "Task-Start &mdash; in den Chat einfügen<small>Begrenzt den Kontext auf genau die Dateien und Randbedingungen, die diese Aufgabe braucht.</small>", exampleSummary: "Ausgefülltes Beispiel anzeigen" }
    },
    appendix: {
      summaryHtml: "Mehr dazu? &nbsp;<span class=\"primer-hint\">eingrenzende Anweisungen, wiederverwendbare Prompts und weiterführende Links</span>",
      snippets: { title: "Vier Prompt-Snippets, die man kennen sollte", targeted: "Gezielter Bugfix", refactor: "Begrenztes Refactoring", review: "Diff-Review (sparsam)", restart: "Zusammenfassen und neu starten" },
      docs: { title: "Weiterlesen", sub: "Offizielle Doku. Verhalten ändert sich; diese Quellen bleiben aktuell." }
    }
  },
  footer: {
    done: "Fertig. <strong style=\"color:var(--text)\">Jetzt geh Tokens sparen.</strong>",
    deeper: "Detaillierte Szenarien und Anleitung öffnen"
  }
});

registerQuick("ja", {
  languageLabel: "言語",
  docTitle: "トークンとコンテキスト — ビジュアルガイド",
  hero: {
    tag: "GitHub Copilot のコンテキストを5つの場面で見る",
    titleHtml: "GitHub Copilot の各ターンでは <span class=\"accent\">見えないパケット</span><br/>としてコンテキストが送られます。中身はこうです。",
    sub: "スクロールで読むガイド。要点は3つ、長い文章はありません。",
    cta: "クイックガイドを始める",
    ctaDetailed: "詳細シナリオとガイド"
  },
  scene1: {
    tag: "シーン1 · 各プロンプトに何が載るのか",
    title: "あなたの質問は、いちばん小さな要素です。",
    ledeHtml: "各ターンで、Copilot は静かにパケットを組み立ててモデルに送ります。あなたが入力したものは右端の細い一片にすぎません。それ以外は自動ですが &mdash; そのすべてにコストがかかります。",
    punchHtml: "<strong>重要点:</strong> 自分のメッセージを短くしても節約効果はほとんどありません。本当のレバーは残り5つのセグメントにあります。"
  },
  scene2: {
    tag: "シーン2 · トグルを試す",
    title: "6つの習慣。オンにするとコストが下がります。",
    ledeHtml: "各スイッチは1つの習慣です。オンにすると、その <code>≈%</code> が右側の <strong style=\"color:var(--text)\">推定削減率</strong> に加算されます。<strong style=\"color:var(--text)\">最初のスイッチを試してください</strong> &mdash; 削減率は <code>≈22%</code> まで上がります。さらに切り替えると効果が積み上がります。",
    noteHtml: "<strong>数値について:</strong> 各行の <code>≈%</code> は、実際のコードベースでその習慣を採用したチームがよく見る範囲をもとにした <em>概算</em> です。どの習慣が効くかを示すものであり、あなたのプロジェクトでの保証ではありません。",
    groupAria: "採用できる6つの習慣",
    levers: {
      1: { name: "作業中のファイルを明示する", sub: "リポジトリ全体ではなく、1ファイルまたは選択範囲だけを送ります。" },
      2: { name: "簡単なタスクには小さなモデルを使う", sub: "大きなモデルは本当に難しい問題にだけ使います。" },
      3: { name: "カスタム指示は短く、安定させる", sub: "ターンごとに変わらなければキャッシュされ、入力コストが大きく下がります。" },
      4: { name: "推論強度を最大にしない", sub: "多くの作業は low か medium で十分です。高い設定は本当に曖昧なタスクだけに使います。" },
      5: { name: "このプロジェクトで使わないツールは切る", sub: "有効なツールの説明は、使わなくても毎回送信されます。" },
      6: { name: "タスクを切り替えたら新しいチャットを始める", sub: "リセットするまで、古いターンが新しいメッセージすべてに付いてきます。" }
    },
    meter: {
      label: "推定削減率",
      saveSuffix: "削減",
      countHtml: "有効な習慣: <strong id=\"save-count\">0</strong> / 6",
      tryAll: "6つすべて試す",
      reset: "リセット",
      noHabitsTier: "まだ未設定",
      noHabitsVerdictHtml: "スイッチを1つ入れると削減率が上がります。各スイッチは独自の <code>≈%</code> を追加します。",
      startTier: "まずは一歩",
      startVerdictHtml: "<strong>「{{name}}」</strong> だけで <strong>≈{{pct}}%</strong> 削減です。さらに1つ加えると、ここに上乗せされます。",
      solidTier: "堅実",
      solidTail: "日常運用の中心です。多くのチームはここで十分です。",
      tightTier: "引き締まったループ",
      tightTail: "より軽く、速く、安いターンになります。良い状態です。",
      allSixTier: "6つ全部",
      allSixTail: "ここからは逓減効果が出ます。日々に合う2つか3つを選びましょう。",
      multiVerdictHtml: "<strong>{{count}} 個の習慣が有効:</strong> {{sum}} &rarr; <strong>{{total}}</strong>。{{tail}}"
    },
    punchHtml: "<strong>ポイント:</strong> 6つ全部は不要です。自分の流れに合う2つか3つを採用するだけで、数字はすぐに動きます。各習慣が削る要因が <em>異なる</em> からです。"
  },
  scene3: {
    tag: "シーン3 · 1つの習慣、2つの結果",
    title: "同じタスクでも、切り出し方で変わる。",
    lede: "もっとも効果の高い習慣は、もっとも簡単でもあります。モデルが答えられる最小のスコープだけを添えることです。",
    badLabel: "✗ ムダが多い",
    goodLabel: "✓ 引き締まっている",
    tokensSent: "送信トークン数",
    punchHtml: "<strong>回答品質は同じで、コストは約7分の1、応答も速くなります。</strong> <code>#codebase</code> は、より狭いスコープで本当に失敗したときだけ使ってください。"
  },
  scene4: {
    tagHtml: "シーン4 &middot; 全体図",
    title: "引いて見る: どのカスタマイズにもコストがある。",
    ledeHtml: "シーン2のチャット習慣は、自分で手動制御できる半分です。もう半分はカスタマイズの仕組みそのもの &mdash; <code>instructions</code>、<code>prompts</code>、<code>skills</code>、<code>agents</code>、<code>hooks</code> です。これらは <em>いつ</em> 読み込まれるかで <strong style=\"color:var(--text)\">6つの階層</strong> に分かれます。最上位は毎回課金されます。",
    primer: { summaryHtml: "初めてですか? &nbsp;<span class=\"primer-hint\">各項目の1行説明を表示</span>" }
  },
  scene5: {
    tag: "シーン5 · 月曜の朝",
    title: "3つだけ持ち帰るなら、これです。",
    lede: "明日から6本柱すべては要りません。3つの習慣を選び、自動化し、残りは後で追加しましょう。",
    habits: {
      1: { title: "まずファイル、その後で codebase。", tag: "スコープ" },
      2: { title: "ターンごとにモデルを適正化する。", body: "まずは軽いモデルから。曖昧な設計や本当に難しいデバッグだけ frontier モデルに上げ、追作業ではまた下げます。", tag: "モデル" },
      3: { title: "新しいタスク、新しいチャット。", body: "履歴は積み上がります。新しいターンごとに古いターンにも支払います。タスクが変わったらリセットしましょう。最も安いターンは送らないターンです。", tag: "セッション" }
    }
  },
  scene6: {
    tagHtml: "シーン6 · コピーして使う",
    title: "2つのスニペット。どのリポジトリにも入れられます。",
    ledeHtml: "この2つのスニペットは同じ仕事をします。<strong style=\"color:var(--text)\">モデルが読む量を減らし、その部分を毎ターン同じに保つ</strong> ことです。<strong style=\"color:var(--text)\">1つはファイルとして保存</strong> してキャッシュと再利用を効かせ、<strong style=\"color:var(--text)\">もう1つはチャットに貼り付け</strong> てタスクを狭く定義します。使ってください。",
    copy: "コピー",
    copied: "コピー済み ✓",
    pressCtrlC: "CTRL+C を押す",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>安定した 200 行未満のプレフィックス。毎ターンでキャッシュされます。</small>" },
      kickoff: { nameHtml: "タスク開始用 &mdash; チャットに貼り付け<small>このタスクに必要なファイルと制約だけにコンテキストを絞ります。</small>", exampleSummary: "入力済み例を表示" }
    },
    appendix: {
      summaryHtml: "もっと見る? &nbsp;<span class=\"primer-hint\">スコープ付き instructions、再利用 prompt、参考資料</span>",
      snippets: { title: "覚えておきたい4つの prompt 断片", targeted: "狙いを絞ったバグ修正", refactor: "範囲を限定したリファクタ", review: "差分レビュー（低コスト）", restart: "要約して再開" },
      docs: { title: "さらに読む", sub: "公式ドキュメント。挙動は変わりますが、これらは最新です。" }
    }
  },
  footer: {
    done: "これで完了です。<strong style=\"color:var(--text)\">では、トークンを節約しにいきましょう。</strong>",
    deeper: "詳細シナリオとガイドを開く"
  }
});

registerQuick("zh-CN", {
  languageLabel: "语言",
  docTitle: "Token 与上下文：可视化指南",
  hero: {
    tag: "用五个场景看懂 GitHub Copilot 上下文",
    titleHtml: "GitHub Copilot 的每一次对话都会发送<span class=\"accent\">一个不可见的数据包</span><br/>作为上下文。里面到底有什么？",
    sub: "一份滚动式指南。三个结论，没有大段废话。",
    cta: "开始快速指南",
    ctaDetailed: "详细场景与指南"
  },
  scene1: {
    tag: "场景 1 · 每个提示里都带了什么",
    title: "你的问题其实只是最小的一部分。",
    ledeHtml: "每一轮中，Copilot 都会悄悄组装一个数据包并发给模型。你输入的内容只是右侧那一小条。其他部分都是自动加上的 &mdash; 但你要为全部内容付费。",
    punchHtml: "<strong>含义：</strong>只压缩你自己写的消息，几乎省不了多少钱。真正的杠杆在另外五个区段。"
  },
  scene2: {
    tag: "场景 2 · 试试这些开关",
    title: "六个习惯。打开它们，看账单往下掉。",
    ledeHtml: "每个开关代表一个习惯。打开后，它对应的 <code>≈%</code> 会加到右侧的<strong style=\"color:var(--text)\">预计节省</strong>上。<strong style=\"color:var(--text)\">先试第一个</strong> &mdash; 节省会升到 <code>≈22%</code>。再开一个，收益继续叠加。",
    noteHtml: "<strong>关于这些数字：</strong>每一行的 <code>≈%</code> 都只是一个<em>粗略</em>估计，来自团队在真实代码库中采用这些习惯时常见的范围。它们说明哪个习惯更有效，但不是对你项目的承诺。",
    groupAria: "你可以采用的六个习惯",
    levers: {
      1: { name: "明确指出你正在处理的文件", sub: "只发送一个文件或你的选区，而不是整个仓库。" },
      2: { name: "简单任务用更小的模型", sub: "把大模型留给真正困难的问题。" },
      3: { name: "让自定义指令保持简短且稳定", sub: "如果每轮都不变，它们就能被缓存，输入成本会大幅下降。" },
      4: { name: "不要把推理强度拉满", sub: "大多数工作用低或中就够了。高强度留给真正含糊复杂的任务。" },
      5: { name: "关闭这个项目里用不到的工具", sub: "每个启用工具的说明都会在每条消息里发送一次，即使根本没用上。" },
      6: { name: "切换任务时开启新聊天", sub: "不重置的话，旧对话会跟着每一条新消息一起发送。" }
    },
    meter: {
      label: "预计节省",
      saveSuffix: "已节省",
      countHtml: "已开启习惯：<strong id=\"save-count\">0</strong>/6",
      tryAll: "试试全部 6 个",
      reset: "重置",
      noHabitsTier: "还没开启",
      noHabitsVerdictHtml: "打开一个开关，看看节省如何上升。每个开关都会带来自己的 <code>≈%</code>。",
      startTier: "起步不错",
      startVerdictHtml: "仅仅<strong>“{{name}}”</strong>这一项，就能节省 <strong>≈{{pct}}%</strong>。再打开一个，收益会继续叠加。",
      solidTier: "稳健",
      solidTail: "这是日常最常见的区间，大多数团队到这里就已经足够了。",
      tightTier: "紧凑回路",
      tightTail: "更轻、更快、更便宜的每一轮。你已经处在不错的位置。",
      allSixTier: "全部六项",
      allSixTail: "接下来会出现边际收益递减，只保留最适合你日常工作的两三项即可。",
      multiVerdictHtml: "<strong>已开启 {{count}} 个习惯：</strong>{{sum}} &rarr; <strong>{{total}}</strong>。{{tail}}"
    },
    punchHtml: "<strong>结论：</strong>你不需要六个全上。只要选两三个适合自己流程的习惯，数字就会很快变化，因为每个习惯削减的是<em>不同</em>的因素。"
  },
  scene3: {
    tag: "场景 3 · 一个习惯，两种结果",
    title: "同样的任务，不同的表达方式。",
    lede: "最有杠杆的习惯，也是最容易做的一件事：只附加模型回答所需的最小范围。",
    badLabel: "✗ 浪费",
    goodLabel: "✓ 紧凑",
    tokensSent: "发送的 Token",
    punchHtml: "<strong>回答质量不变，成本缩小约 7 倍，速度也更快。</strong> 只有在更窄范围真的失败之后，再去用 <code>#codebase</code>。"
  },
  scene4: {
    tagHtml: "场景 4 &middot; 更大的地图",
    title: "放大视角：每一种定制都有价格。",
    ledeHtml: "场景 2 里的聊天习惯，是你手动能控制的一半。另一半来自定制系统本身 &mdash; <code>instructions</code>、<code>prompts</code>、<code>skills</code>、<code>agents</code>、<code>hooks</code>。它们会按照<em>何时</em>加载被分成 <strong style=\"color:var(--text)\">六个层级</strong>。最上层的成本会出现在每一次请求里。",
    primer: { summaryHtml: "第一次接触这些？&nbsp;<span class=\"primer-hint\">显示每项的一行说明</span>" }
  },
  scene5: {
    tag: "场景 5 · 周一早晨",
    title: "如果你只带走三件事，就带走这三件。",
    lede: "你明天不需要六个支柱全上。先选三个习惯，让它们自动化，其他的以后再加。",
    habits: {
      1: { title: "先写文件，再写 codebase。", tag: "范围" },
      2: { title: "按每轮任务匹配模型。", body: "默认用轻量模型。只有在设计模糊或调试确实困难时，才升级到 frontier 模型。后续跟进再切回去。", tag: "模型" },
      3: { title: "新任务，新聊天。", body: "历史会不断累积——每一轮新对话都在为旧轮次付费。任务一变，就重置。最便宜的一轮，是你根本没发出去的那一轮。", tag: "会话" }
    }
  },
  scene6: {
    tagHtml: "场景 6 · 复制粘贴",
    title: "两段模板，放进任何仓库都能用。",
    ledeHtml: "这两段模板做的是同一件事：<strong style=\"color:var(--text)\">让模型少读一些，并且每轮都读同样的内容</strong>。<strong style=\"color:var(--text)\">把其中一段保存成文件</strong>，这样它会被缓存和复用。<strong style=\"color:var(--text)\">把另一段贴进聊天</strong>，把模型收窄到当前任务。拿去直接用。",
    copy: "复制",
    copied: "已复制 ✓",
    pressCtrlC: "按 CTRL+C",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>稳定、少于 200 行 —— 每轮都能缓存的前缀。</small>" },
      kickoff: { nameHtml: "任务启动模板 &mdash; 粘贴到聊天中<small>把上下文限制到当前任务真正需要的文件和约束。</small>", exampleSummary: "显示完整示例" }
    },
    appendix: {
      summaryHtml: "想看更多？&nbsp;<span class=\"primer-hint\">按范围加载的 instructions、可复用 prompts，以及更多资料</span>",
      snippets: { title: "值得记住的四段 prompt 模板", targeted: "定向修 bug", refactor: "有边界的重构", review: "Diff 审查（低成本模式）", restart: "总结并重开" },
      docs: { title: "延伸阅读", sub: "官方文档。行为会变化，这些链接会保持最新。" }
    }
  },
  footer: {
    done: "看完了。<strong style=\"color:var(--text)\">现在去省点 token 吧。</strong>",
    deeper: "打开详细场景与指南"
  }
});

registerQuick("pt-BR", {
  languageLabel: "Idioma",
  docTitle: "Tokens e contexto — um guia visual",
  hero: {
    tag: "Contexto do GitHub Copilot em cinco cenas",
    titleHtml: "Cada turno do GitHub Copilot envia <span class=\"accent\">um pacote invisível</span><br/>de contexto. Eis o que vem dentro.",
    sub: "Um guia para rolar. Três conclusões, sem muralhas de texto.",
    cta: "Começar o guia rápido",
    ctaDetailed: "Cenários e guia detalhado"
  },
  scene1: {
    tag: "Cena 1 · O que vai em todo prompt",
    title: "Sua pergunta é a menor parte.",
    ledeHtml: "Em cada turno, o Copilot monta silenciosamente um pacote e o envia ao modelo. O que você digitou é só a fatia fina à direita. Todo o resto é automático &mdash; e você paga por tudo isso.",
    punchHtml: "<strong>Implicação:</strong> encurtar sua própria mensagem quase não economiza nada. A alavanca real está nos outros cinco segmentos."
  },
  scene2: {
    tag: "Cena 2 · Teste os controles",
    title: "Seis hábitos. Ligue e veja a conta cair.",
    ledeHtml: "Cada interruptor representa um hábito. Ao ligá-lo, seu <code>≈%</code> é somado à sua <strong style=\"color:var(--text)\">ECONOMIA ESTIMADA</strong> à direita. <strong style=\"color:var(--text)\">Teste o primeiro</strong> &mdash; a economia sobe para <code>≈22%</code>. Ligue outro e os ganhos se acumulam.",
    noteHtml: "<strong>Sobre os números:</strong> o <code>≈%</code> de cada linha é um valor <em>aproximado</em>, baseado em faixas típicas que equipes observam quando adotam esse hábito em uma base real. Eles mostram quais hábitos movem mais a agulha; não são promessa para o seu projeto.",
    groupAria: "Seis hábitos que você pode adotar",
    levers: {
      1: { name: "Aponte para o arquivo em que você está trabalhando", sub: "Envie um arquivo ou sua seleção em vez do repositório inteiro." },
      2: { name: "Use um modelo menor para tarefas simples", sub: "Guarde o modelo grande para os problemas realmente difíceis." },
      3: { name: "Mantenha suas instruções personalizadas curtas e estáveis", sub: "Se elas não mudam entre turnos, entram em cache e o custo de entrada cai bastante." },
      4: { name: "Não leve o esforço de raciocínio ao máximo", sub: "Baixo ou médio serve para a maior parte do trabalho. Deixe o alto para tarefas realmente ambíguas." },
      5: { name: "Desligue as ferramentas que você não usa neste projeto", sub: "A descrição de cada ferramenta habilitada é enviada em toda mensagem, mesmo quando não é usada." },
      6: { name: "Abra um chat novo quando mudar de tarefa", sub: "Os turnos antigos acompanham cada nova mensagem até você reiniciar." }
    },
    meter: {
      label: "ECONOMIA ESTIMADA",
      saveSuffix: "economizado",
      countHtml: "Hábitos ligados: <strong id=\"save-count\">0</strong> de 6",
      tryAll: "Testar os 6",
      reset: "Redefinir",
      noHabitsTier: "Nenhum hábito ainda",
      noHabitsVerdictHtml: "Ligue um interruptor e veja sua economia subir. Cada um adiciona seu próprio <code>≈%</code>.",
      startTier: "Um começo",
      startVerdictHtml: "Só <strong>“{{name}}”</strong> já entrega <strong>≈{{pct}}%</strong> de economia. Ligue outro e isso se soma.",
      solidTier: "Sólido",
      solidTail: "Esta é a zona do dia a dia — a maioria das equipes para aqui e já basta.",
      tightTier: "Loop enxuto",
      tightTail: "Turnos mais leves, rápidos e baratos. Você está em um bom ponto.",
      allSixTier: "Todos os seis",
      allSixTail: "Os retornos passam a diminuir; escolha os dois ou três que se encaixam no seu dia.",
      multiVerdictHtml: "<strong>{{count}} hábitos ligados:</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
    },
    punchHtml: "<strong>Resumo:</strong> você não precisa dos seis. Adote dois ou três que combinem com o seu fluxo e os números mudam rápido — porque cada hábito reduz um fator <em>diferente</em>."
  },
  scene3: {
    tag: "Cena 3 · Um hábito, dois resultados",
    title: "A mesma tarefa. Enquadramento diferente.",
    lede: "O hábito de maior alavancagem também é o mais fácil: anexe o menor escopo que ainda permita ao modelo responder.",
    badLabel: "✗ DESPERDÍCIO",
    goodLabel: "✓ ENXUTO",
    tokensSent: "Tokens enviados",
    punchHtml: "<strong>Mesma qualidade de resposta, conta ~7× menor e turno mais rápido.</strong> Só use <code>#codebase</code> quando escopos mais estreitos realmente falharem."
  },
  scene4: {
    tagHtml: "Cena 4 &middot; O mapa mais amplo",
    title: "Afaste o zoom: toda customização tem um preço.",
    ledeHtml: "Os hábitos de chat da Cena 2 são a metade que você controla manualmente. A outra metade é o próprio sistema de customização &mdash; <code>instructions</code>, <code>prompts</code>, <code>skills</code>, <code>agents</code>, <code>hooks</code>. Eles se distribuem em <strong style=\"color:var(--text)\">seis níveis</strong> conforme <em>quando</em> são carregados. O topo custa em toda requisição.",
    primer: { summaryHtml: "É novo nisso? &nbsp;<span class=\"primer-hint\">mostre uma explicação de uma linha para cada item</span>" }
  },
  scene5: {
    tag: "Cena 5 · Segunda de manhã",
    title: "Se você levar três coisas, leve estas.",
    lede: "Você não precisa dos seis pilares amanhã. Escolha três hábitos. Torne-os automáticos. Adicione o resto depois.",
    habits: {
      1: { title: "Digite o arquivo antes do codebase.", tag: "ESCOPO" },
      2: { title: "Ajuste o modelo a cada turno.", body: "Comece com uma camada leve. Suba para um modelo frontier em design ambíguo ou debugging realmente difícil. Depois volte para baixo nos acompanhamentos.", tag: "MODELO" },
      3: { title: "Nova tarefa, novo chat.", body: "O histórico se acumula — você paga por cada turno antigo em cada novo. Quando a tarefa muda, reinicie. O turno mais barato é o que você não envia.", tag: "SESSÃO" }
    }
  },
  scene6: {
    tagHtml: "Cena 6 · Copiar e colar",
    title: "Dois trechos. Solte em qualquer repositório.",
    ledeHtml: "Os dois trechos fazem a mesma coisa: <strong style=\"color:var(--text)\">dar menos para o modelo ler e manter isso igual em todo turno</strong>. <strong style=\"color:var(--text)\">Salve um como arquivo</strong> para entrar em cache e ser reutilizado. <strong style=\"color:var(--text)\">Cole o outro no chat</strong> para restringir o modelo a esta tarefa. Pode usar.",
    copy: "COPIAR",
    copied: "COPIADO ✓",
    pressCtrlC: "PRESSIONE CTRL+C",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>Estável, menos de 200 linhas — o prefixo que entra em cache em todo turno.</small>" },
      kickoff: { nameHtml: "Início da tarefa &mdash; cole no chat<small>Limita o contexto só aos arquivos e restrições que esta tarefa precisa.</small>", exampleSummary: "Mostrar exemplo preenchido" }
    },
    appendix: {
      summaryHtml: "Quer mais? &nbsp;<span class=\"primer-hint\">instruções com escopo, prompts reutilizáveis e onde ler mais</span>",
      snippets: { title: "Quatro trechos de prompt que valem decorar", targeted: "Correção de bug direcionada", refactor: "Refatoração limitada", review: "Revisão de diff (modo barato)", restart: "Resumir e reiniciar" },
      docs: { title: "Onde ler mais", sub: "Documentação oficial. O comportamento muda; estas fontes se mantêm atuais." }
    }
  },
  footer: {
    done: "Pronto. <strong style=\"color:var(--text)\">Agora vá economizar alguns tokens.</strong>",
    deeper: "Abrir cenários e guia detalhado"
  }
});

registerQuick("ar", {
  languageLabel: "اللغة",
  docTitle: "الرموز والسياق — دليل بصري",
  hero: {
    tag: "سياق GitHub Copilot في خمسة مشاهد",
    titleHtml: "كل دورة في GitHub Copilot ترسل <span class=\"accent\">حزمة غير مرئية</span><br/>من السياق. هذا ما يوجد بداخلها.",
    sub: "دليل سريع بالتمرير. ثلاث خلاصات، من دون جدران من النص.",
    cta: "ابدأ الدليل السريع",
    ctaDetailed: "السيناريوهات والدليل التفصيلي"
  },
  scene1: {
    tag: "المشهد 1 · ما الذي يرافق كل Prompt",
    title: "سؤالك هو أصغر جزء.",
    ledeHtml: "في كل دورة، يجمع Copilot بهدوء حزمة ويرسلها إلى النموذج. ما كتبته أنت ليس سوى الشريحة الرفيعة على اليمين. كل ما عدا ذلك يتم تلقائيًا &mdash; لكنك تدفع ثمنه كله.",
    punchHtml: "<strong>الخلاصة:</strong> تقليص رسالتك أنت لا يوفّر تقريبًا شيئًا يُذكر. الرافعة الحقيقية موجودة في الأجزاء الخمسة الأخرى."
  },
  scene2: {
    tag: "المشهد 2 · جرّب المفاتيح",
    title: "ست عادات. فعّلها وشاهد الفاتورة تنخفض.",
    ledeHtml: "كل مفتاح يمثل عادة واحدة. عند تشغيله، تُضاف قيمة <code>≈%</code> الخاصة به إلى <strong style=\"color:var(--text)\">التوفير التقديري</strong> على اليمين. <strong style=\"color:var(--text)\">جرّب المفتاح الأول</strong> &mdash; سيصل التوفير إلى <code>≈22%</code>. ثم فعّل مفتاحًا آخر لتتراكم الفوائد.",
    noteHtml: "<strong>حول الأرقام:</strong> قيمة <code>≈%</code> في كل سطر هي تقدير <em>تقريبي</em> مستند إلى النطاقات التي تراها الفرق عادةً عند اعتماد هذه العادة على قاعدة كود حقيقية. هي توضّح أي العادات تؤثر أكثر، وليست وعدًا لما سيحدث في مشروعك.",
    groupAria: "ست عادات يمكنك اعتمادها",
    levers: {
      1: { name: "أشر إلى الملف الذي تعمل عليه", sub: "أرسل ملفًا واحدًا أو التحديد الحالي بدلًا من المستودع كله." },
      2: { name: "استخدم نموذجًا أصغر للمهام السهلة", sub: "اترك النموذج الكبير للمشكلات الصعبة فعلًا." },
      3: { name: "اجعل تعليماتك المخصّصة قصيرة وثابتة", sub: "إذا لم تتغير بين الدورات فسيتم تخزينها مؤقتًا، ما يخفض تكلفة الإدخال كثيرًا." },
      4: { name: "لا ترفع جهد الاستدلال إلى الحد الأقصى", sub: "المستوى المنخفض أو المتوسط يكفي لمعظم العمل. استخدم العالي فقط للمهام الملتبسة فعلًا." },
      5: { name: "أوقف الأدوات التي لا تستخدمها في هذا المشروع", sub: "وصف كل أداة مفعلة يُرسل مع كل رسالة حتى إن لم تُستخدم." },
      6: { name: "ابدأ محادثة جديدة عندما تغيّر المهمة", sub: "الرسائل القديمة تظل مرفقة مع كل رسالة جديدة حتى تعيد الضبط." }
    },
    meter: {
      label: "التوفير التقديري",
      saveSuffix: "تم توفيره",
      countHtml: "العادات المفعلة: <strong id=\"save-count\">0</strong> من 6",
      tryAll: "جرّب الست كلها",
      reset: "إعادة ضبط",
      noHabitsTier: "لا توجد عادات بعد",
      noHabitsVerdictHtml: "فعّل مفتاحًا وشاهد التوفير يرتفع. كل مفتاح يضيف نسبة <code>≈%</code> الخاصة به.",
      startTier: "بداية جيدة",
      startVerdictHtml: "<strong>«{{name}}»</strong> وحدها تعني <strong>≈{{pct}}%</strong> توفيرًا. فعّل واحدة أخرى لتُضاف إليها.",
      solidTier: "متين",
      solidTail: "هذه هي منطقة العمل اليومي — معظم الفرق تتوقف هنا وهذا يكفيها.",
      tightTier: "حلقة محكمة",
      tightTail: "دورات أخف وأسرع وأرخص. أنت في وضع جيد.",
      allSixTier: "الست كلها",
      allSixTail: "هنا يبدأ تناقص العائد؛ اختر اثنتين أو ثلاثًا تناسب يومك.",
      multiVerdictHtml: "<strong>{{count}} عادات مفعلة:</strong> {{sum}} &rarr; <strong>{{total}}</strong>. {{tail}}"
    },
    punchHtml: "<strong>الخلاصة العملية:</strong> لا تحتاج إلى الست كلها. اعتمد اثنتين أو ثلاثًا تناسب سير عملك، وستتحرك الأرقام بسرعة لأن كل عادة تقلّص عاملًا <em>مختلفًا</em>."
  },
  scene3: {
    tag: "المشهد 3 · عادة واحدة ونتيجتان",
    title: "المهمة نفسها، لكن بصياغة مختلفة.",
    lede: "أعلى عادة من حيث الأثر هي أيضًا الأسهل: أرفق أضيق نطاق يسمح للنموذج بالإجابة.",
    badLabel: "✗ مُهدِر",
    goodLabel: "✓ محكم",
    tokensSent: "الرموز المرسلة",
    punchHtml: "<strong>جودة الإجابة نفسها تقريبًا، لكن بتكلفة أقل بنحو 7× وباستجابة أسرع.</strong> لا تلجأ إلى <code>#codebase</code> إلا عندما تكون النطاقات الأضيق قد فشلت فعلًا."
  },
  scene4: {
    tagHtml: "المشهد 4 &middot; الخريطة الأوسع",
    title: "ابتعد قليلًا: كل تخصيص له ثمن.",
    ledeHtml: "عادات الدردشة في المشهد 2 هي النصف الذي تتحكم فيه يدويًا. أما النصف الآخر فهو نظام التخصيص نفسه &mdash; <code>instructions</code> و<code>prompts</code> و<code>skills</code> و<code>agents</code> و<code>hooks</code>. هذه الأسطح تقع ضمن <strong style=\"color:var(--text)\">ست طبقات</strong> بحسب <em>متى</em> يتم تحميلها. الطبقة العليا تُدفع كلفتها في كل طلب.",
    primer: { summaryHtml: "هل هذه جديدة عليك؟ &nbsp;<span class=\"primer-hint\">اعرض سطرًا تمهيديًا واحدًا لكل عنصر</span>" }
  },
  scene5: {
    tag: "المشهد 5 · صباح الاثنين",
    title: "إذا خرجت بثلاث نقاط فقط، فلتكن هذه.",
    lede: "لا تحتاج إلى الأعمدة الستة غدًا. اختر ثلاث عادات. اجعلها تلقائية. أضف البقية لاحقًا.",
    habits: {
      1: { title: "اكتب الملف قبل codebase.", tag: "النطاق" },
      2: { title: "اضبط النموذج لكل دورة.", body: "ابدأ بطبقة خفيفة. صعّد إلى نموذج frontier للتصميم الملتبس أو التصحيح الصعب فعلًا، ثم انزل مرة أخرى في المتابعات.", tag: "النموذج" },
      3: { title: "مهمة جديدة، محادثة جديدة.", body: "السجل يتراكم — فأنت تدفع ثمن كل دورة قديمة مع كل دورة جديدة. عندما تتغير المهمة، أعد الضبط. أرخص دورة هي التي لا ترسلها أصلًا.", tag: "الجلسة" }
    }
  },
  scene6: {
    tagHtml: "المشهد 6 · انسخ والصق",
    title: "مقتطفان. ألقِ بهما في أي مستودع.",
    ledeHtml: "المقتطفان يؤديان المهمة نفسها: <strong style=\"color:var(--text)\">إعطاء النموذج قدرًا أقل ليقرأه، والحفاظ عليه ثابتًا في كل دورة</strong>. <strong style=\"color:var(--text)\">احفظ أحدهما كملف</strong> ليُخزَّن مؤقتًا ويُعاد استخدامه. <strong style=\"color:var(--text)\">وألصق الآخر في الدردشة</strong> لحصر النموذج في هذه المهمة فقط. خذهما كما هما.",
    copy: "نسخ",
    copied: "تم النسخ ✓",
    pressCtrlC: "اضغط CTRL+C",
    templates: {
      instructions: { nameHtml: ".github/copilot-instructions.md<small>مستقر وأقل من 200 سطر — هذا هو البادئة التي تُخزَّن مؤقتًا في كل دورة.</small>" },
      kickoff: { nameHtml: "بداية المهمة &mdash; الصقها في الدردشة<small>تحصر السياق في الملفات والقيود التي تحتاجها هذه المهمة فقط.</small>", exampleSummary: "اعرض مثالًا مكتملًا" }
    },
    appendix: {
      summaryHtml: "هل تريد المزيد؟ &nbsp;<span class=\"primer-hint\">تعليمات مقيّدة بالنطاق، وprompts قابلة لإعادة الاستخدام، ومراجع للقراءة</span>",
      snippets: { title: "أربعة مقتطفات Prompt تستحق الحفظ", targeted: "إصلاح موجّه لخطأ", refactor: "إعادة هيكلة محدودة", review: "مراجعة الفرق (وضع منخفض التكلفة)", restart: "لخّص ثم ابدأ من جديد" },
      docs: { title: "للمزيد من القراءة", sub: "الوثائق الرسمية. السلوك يتغير، وهذه الروابط تبقى محدّثة." }
    }
  },
  footer: {
    done: "انتهيت. <strong style=\"color:var(--text)\">والآن اذهب لتوفّر بعض الرموز.</strong>",
    deeper: "افتح السيناريوهات والدليل التفصيلي"
  }
});