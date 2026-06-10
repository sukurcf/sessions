/* Supplemental calculator/pricing localization shared by the detailed SPA. */
(function (TO) {
  "use strict";
  if (!TO || !TO.i18n) return;

  TO.i18n.register("en", {
    calc: {
      sourceLabel: "Source",
      exactAria: "{{label}} (exact)",
      planOption: "{{name}} ({{credits}} credits/mo)",
      outputRate: "{{rate}} out / 1M",
      emptyModels: "Select one or more models to see a cost comparison.",
      lowestCost: "Lowest cost / session",
      aiCredits: "AI credits",
      spreadLabel: "cheapest -> priciest spread",
      monthlyAllowance: "of monthly {{plan}} allowance",
      bestValue: "best value",
      sessionCost: "Session cost - {{count}} turn(s)",
      inputShort: "Input",
      cachedShort: "Cached",
      outputShort: "Output",
      perTurn: "Per turn",
      costBreakdown: "Cost breakdown",
      recommendation: "Recommendation",
      guidedRecommendation: "Get a guided recommendation ->",
      recommend: {
        lowest: "For this token mix, {{model}} is the lowest-cost option at {{total}} per session - {{delta}} less than {{priciest}}.",
        outputDominates: "Output dominates ({{percent}} of cost). Constrain output with a format rule and consider lowering reasoning effort - see the Output control scenario.",
        cachedHealthy: "Your cached share is healthy - a stable instruction prefix is doing real work. Keep that prefix byte-identical to hold the discount.",
        inputDrives: "Input drives most of this cost. Tighten context scope with #-mentions before reaching for a cheaper model.",
        highEffort: "Reasoning effort is set to {{effort}} - that multiplies billed output heavily. Reserve it for genuinely hard tasks; decompose where you can.",
        autoOff: "Auto Mode is off. Enabling it applies a documented ~10% token-multiplier discount across the board."
      }
    },
    pricing: {
      meta: {
        source: "GitHub Copilot - Models and pricing",
        effective: "Usage-Based Billing rates - effective 1 June 2026",
        note: "Illustrative rates synthesised from the cited GitHub Copilot reference. Verify against your org's live pricing page before quoting."
      },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "Lightweight", blurb: "Boilerplate, formatting, simple Q&A, bulk edits" },
        versatile: { name: "Versatile", blurb: "Daily-driver coding, refactors, iterative work" },
        powerful: { name: "Powerful", blurb: "Architectural reasoning, hard debugging, plan steps" }
      },
      effort: {
        low: { name: "Low", blurb: "Typos, rename, format, simple lookups" },
        medium: { name: "Medium", blurb: "Standard feature work, bug fixes (recommended default)" },
        high: { name: "High", blurb: "Architecture decisions, gnarly debugging" },
        max: { name: "Max", blurb: "Novel algorithms, research-grade analysis" }
      }
    },
    scenarios: { close: "Close" }
  });

  TO.i18n.register("es", {
    calc: {
      sourceLabel: "Fuente",
      exactAria: "{{label}} (exacto)",
      planOption: "{{name}} ({{credits}} créditos/mes)",
      outputRate: "{{rate}} salida / 1M",
      emptyModels: "Selecciona uno o más modelos para ver una comparación de coste.",
      lowestCost: "Menor coste / sesión",
      aiCredits: "Créditos de IA",
      spreadLabel: "diferencia del más barato al más caro",
      monthlyAllowance: "de la cuota mensual de {{plan}}",
      bestValue: "mejor valor",
      sessionCost: "Coste de sesión - {{count}} turno(s)",
      inputShort: "Entrada",
      cachedShort: "Caché",
      outputShort: "Salida",
      perTurn: "Por turno",
      costBreakdown: "Desglose de coste",
      recommendation: "Recomendación",
      guidedRecommendation: "Obtener una recomendación guiada ->",
      recommend: {
        lowest: "Para esta mezcla de tokens, {{model}} es la opción de menor coste con {{total}} por sesión: {{delta}} menos que {{priciest}}.",
        outputDominates: "La salida domina ({{percent}} del coste). Limita la salida con una regla de formato y considera reducir el esfuerzo de razonamiento; consulta el escenario de control de salida.",
        cachedHealthy: "Tu proporción en caché es saludable: un prefijo de instrucciones estable está aportando valor. Mantén ese prefijo idéntico byte a byte para conservar el descuento.",
        inputDrives: "La entrada impulsa la mayor parte de este coste. Ajusta el alcance del contexto con #-mentions antes de buscar un modelo más barato.",
        highEffort: "El esfuerzo de razonamiento está en {{effort}}; eso multiplica mucho la salida facturada. Resérvalo para tareas realmente difíciles y descompón cuando puedas.",
        autoOff: "Auto Mode está desactivado. Activarlo aplica un descuento documentado de ~10% en el multiplicador de tokens."
      }
    },
    pricing: {
      meta: {
        source: "GitHub Copilot - Modelos y precios",
        effective: "Tarifas de facturación por uso - vigentes desde el 1 de junio de 2026",
        note: "Tarifas ilustrativas sintetizadas a partir de la referencia citada de GitHub Copilot. Verifica la página de precios activa de tu organización antes de citar números."
      },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "Ligero", blurb: "Código repetitivo, formato, preguntas simples y ediciones masivas" },
        versatile: { name: "Versátil", blurb: "Programación diaria, refactors y trabajo iterativo" },
        powerful: { name: "Potente", blurb: "Razonamiento arquitectónico, depuración difícil y pasos de planificación" }
      },
      effort: {
        low: { name: "Bajo", blurb: "Erratas, cambios de nombre, formato y consultas simples" },
        medium: { name: "Medio", blurb: "Trabajo estándar de features y corrección de errores (valor predeterminado recomendado)" },
        high: { name: "Alto", blurb: "Decisiones de arquitectura y depuración compleja" },
        max: { name: "Máximo", blurb: "Algoritmos nuevos y análisis de nivel investigación" }
      }
    },
    scenarios: { close: "Cerrar" }
  });

  TO.i18n.register("fr", {
    calc: {
      sourceLabel: "Source",
      exactAria: "{{label}} (exact)",
      planOption: "{{name}} ({{credits}} crédits/mois)",
      outputRate: "{{rate}} sortie / 1M",
      emptyModels: "Sélectionnez un ou plusieurs modèles pour voir une comparaison des coûts.",
      lowestCost: "Coût le plus bas / session",
      aiCredits: "Crédits IA",
      spreadLabel: "écart du moins cher au plus cher",
      monthlyAllowance: "de l'allocation mensuelle {{plan}}",
      bestValue: "meilleur rapport valeur/prix",
      sessionCost: "Coût de session - {{count}} tour(s)",
      inputShort: "Entrée",
      cachedShort: "Cache",
      outputShort: "Sortie",
      perTurn: "Par tour",
      costBreakdown: "Répartition du coût",
      recommendation: "Recommandation",
      guidedRecommendation: "Obtenir une recommandation guidée ->",
      recommend: {
        lowest: "Pour ce mélange de tokens, {{model}} est l'option la moins chère à {{total}} par session, soit {{delta}} de moins que {{priciest}}.",
        outputDominates: "La sortie domine ({{percent}} du coût). Contraignez la sortie avec une règle de format et envisagez de réduire l'effort de raisonnement.",
        cachedHealthy: "Votre part en cache est saine : un préfixe d'instructions stable fait réellement son travail. Gardez-le identique octet par octet pour conserver la remise.",
        inputDrives: "L'entrée porte l'essentiel de ce coût. Resserrez le contexte avec des #-mentions avant de chercher un modèle moins cher.",
        highEffort: "L'effort de raisonnement est réglé sur {{effort}} : cela multiplie fortement la sortie facturée. Réservez-le aux tâches vraiment difficiles.",
        autoOff: "Auto Mode est désactivé. L'activer applique une remise documentée d'environ 10% sur le multiplicateur de tokens."
      }
    },
    pricing: {
      meta: { source: "GitHub Copilot - Modèles et tarifs", effective: "Tarifs de facturation à l'usage - en vigueur le 1er juin 2026", note: "Tarifs illustratifs synthétisés à partir de la référence GitHub Copilot citée. Vérifiez la page de tarification active de votre organisation avant de citer des chiffres." },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "Léger", blurb: "Boilerplate, formatage, questions simples, modifications en masse" },
        versatile: { name: "Polyvalent", blurb: "Développement quotidien, refactors, travail itératif" },
        powerful: { name: "Puissant", blurb: "Raisonnement d'architecture, débogage difficile, étapes de planification" }
      },
      effort: {
        low: { name: "Faible", blurb: "Coquilles, renommage, formatage, recherches simples" },
        medium: { name: "Moyen", blurb: "Travail standard de fonctionnalité et correction de bugs (défaut recommandé)" },
        high: { name: "Élevé", blurb: "Décisions d'architecture, débogage complexe" },
        max: { name: "Max", blurb: "Algorithmes nouveaux, analyse de niveau recherche" }
      }
    },
    scenarios: { close: "Fermer" }
  });

  TO.i18n.register("de", {
    calc: {
      sourceLabel: "Quelle",
      exactAria: "{{label}} (exakt)",
      planOption: "{{name}} ({{credits}} Credits/Monat)",
      outputRate: "{{rate}} Ausgabe / 1M",
      emptyModels: "Wählen Sie ein oder mehrere Modelle aus, um Kosten zu vergleichen.",
      lowestCost: "Niedrigste Kosten / Sitzung",
      aiCredits: "KI-Credits",
      spreadLabel: "Spanne vom günstigsten zum teuersten",
      monthlyAllowance: "des monatlichen {{plan}}-Kontingents",
      bestValue: "bester Wert",
      sessionCost: "Sitzungskosten - {{count}} Turn(s)",
      inputShort: "Eingabe",
      cachedShort: "Cache",
      outputShort: "Ausgabe",
      perTurn: "Pro Turn",
      costBreakdown: "Kostenaufschlüsselung",
      recommendation: "Empfehlung",
      guidedRecommendation: "Geführte Empfehlung abrufen ->",
      recommend: {
        lowest: "Für diesen Token-Mix ist {{model}} mit {{total}} pro Sitzung die günstigste Option - {{delta}} weniger als {{priciest}}.",
        outputDominates: "Die Ausgabe dominiert ({{percent}} der Kosten). Begrenzen Sie die Ausgabe mit einer Formatregel und reduzieren Sie ggf. den Reasoning-Aufwand.",
        cachedHealthy: "Ihr Cache-Anteil ist gesund: Ein stabiler Instruktionspräfix wirkt. Halten Sie ihn byte-identisch, um den Rabatt zu behalten.",
        inputDrives: "Die Eingabe treibt den Großteil dieser Kosten. Begrenzen Sie den Kontext mit #-Mentions, bevor Sie zu einem günstigeren Modell wechseln.",
        highEffort: "Der Reasoning-Aufwand steht auf {{effort}} - das vervielfacht die abgerechnete Ausgabe. Nur für wirklich schwierige Aufgaben nutzen.",
        autoOff: "Auto Mode ist aus. Das Aktivieren wendet einen dokumentierten Rabatt von ca. 10% auf den Token-Multiplikator an."
      }
    },
    pricing: {
      meta: { source: "GitHub Copilot - Modelle und Preise", effective: "Nutzungsbasierte Tarife - gültig ab 1. Juni 2026", note: "Illustrative Tarife aus der zitierten GitHub-Copilot-Referenz. Prüfen Sie vor dem Zitieren die Live-Preisseite Ihrer Organisation." },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "Leichtgewichtig", blurb: "Boilerplate, Formatierung, einfache Fragen, Massenänderungen" },
        versatile: { name: "Vielseitig", blurb: "Tägliches Coding, Refactorings, iterative Arbeit" },
        powerful: { name: "Leistungsstark", blurb: "Architektur-Reasoning, schwieriges Debugging, Planungsschritte" }
      },
      effort: {
        low: { name: "Niedrig", blurb: "Tippfehler, Umbenennen, Formatieren, einfache Nachschlagen" },
        medium: { name: "Mittel", blurb: "Standard-Featurearbeit und Bugfixes (empfohlener Standard)" },
        high: { name: "Hoch", blurb: "Architekturentscheidungen, kniffliges Debugging" },
        max: { name: "Max", blurb: "Neue Algorithmen, Analyse auf Forschungsniveau" }
      }
    },
    scenarios: { close: "Schließen" }
  });

  TO.i18n.register("ja", {
    calc: {
      sourceLabel: "出典",
      exactAria: "{{label}} (正確な値)",
      planOption: "{{name}} ({{credits}} クレジット/月)",
      outputRate: "{{rate}} 出力 / 100万",
      emptyModels: "コスト比較を見るには、1つ以上のモデルを選択してください。",
      lowestCost: "最小コスト / セッション",
      aiCredits: "AI クレジット",
      spreadLabel: "最安から最高価格までの差",
      monthlyAllowance: "{{plan}} の月間枠に対する割合",
      bestValue: "最良値",
      sessionCost: "セッションコスト - {{count}} ターン",
      inputShort: "入力",
      cachedShort: "キャッシュ",
      outputShort: "出力",
      perTurn: "1ターンあたり",
      costBreakdown: "コスト内訳",
      recommendation: "推奨",
      guidedRecommendation: "ガイド付き推奨を見る ->",
      recommend: {
        lowest: "このトークン構成では、{{model}} が {{total}}/セッションで最小コストです。{{priciest}} より {{delta}} 低くなります。",
        outputDominates: "出力がコストの大半を占めています ({{percent}})。形式ルールで出力を制限し、推論 effort を下げることを検討してください。",
        cachedHealthy: "キャッシュ比率は健全です。安定した instructions prefix が効いています。割引を維持するため byte 単位で同一に保ってください。",
        inputDrives: "このコストの大半は入力です。安いモデルに変える前に、#-mentions でコンテキスト範囲を絞ってください。",
        highEffort: "推論 effort は {{effort}} です。請求対象の出力が大きく増えます。本当に難しいタスクだけに使ってください。",
        autoOff: "Auto Mode はオフです。オンにすると、文書化された約10%のトークン倍率割引が適用されます。"
      }
    },
    pricing: {
      meta: { source: "GitHub Copilot - モデルと価格", effective: "従量課金レート - 2026年6月1日有効", note: "表示レートは、引用した GitHub Copilot リファレンスに基づく例示です。数値を引用する前に、組織の実際の価格ページを確認してください。" },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "軽量", blurb: "定型コード、整形、簡単なQ&A、一括編集" },
        versatile: { name: "汎用", blurb: "日常的なコーディング、リファクタリング、反復作業" },
        powerful: { name: "高性能", blurb: "アーキテクチャ推論、難しいデバッグ、計画ステップ" }
      },
      effort: {
        low: { name: "低", blurb: "タイプミス、リネーム、整形、簡単な確認" },
        medium: { name: "中", blurb: "標準的な機能開発とバグ修正 (推奨既定値)" },
        high: { name: "高", blurb: "アーキテクチャ判断、難しいデバッグ" },
        max: { name: "最大", blurb: "新規アルゴリズム、研究レベルの分析" }
      }
    },
    scenarios: { close: "閉じる" }
  });

  TO.i18n.register("zh-CN", {
    calc: {
      sourceLabel: "来源",
      exactAria: "{{label}}（精确值）",
      planOption: "{{name}}（{{credits}} 点/月）",
      outputRate: "{{rate}} 输出 / 100万",
      emptyModels: "请选择一个或多个模型以查看成本对比。",
      lowestCost: "最低成本 / 会话",
      aiCredits: "AI 点数",
      spreadLabel: "最低到最高成本差距",
      monthlyAllowance: "占 {{plan}} 月度额度",
      bestValue: "最佳价值",
      sessionCost: "会话成本 - {{count}} 轮",
      inputShort: "输入",
      cachedShort: "缓存",
      outputShort: "输出",
      perTurn: "每轮",
      costBreakdown: "成本明细",
      recommendation: "建议",
      guidedRecommendation: "获取引导式建议 ->",
      recommend: {
        lowest: "在此 token 组合下，{{model}} 是最低成本选项，每个会话 {{total}}，比 {{priciest}} 低 {{delta}}。",
        outputDominates: "输出占主要成本（{{percent}}）。请用格式规则限制输出，并考虑降低推理强度。",
        cachedHealthy: "你的缓存占比很健康：稳定的指令前缀正在发挥作用。保持字节级一致以保留折扣。",
        inputDrives: "输入驱动了大部分成本。先用 #-mentions 缩小上下文范围，再考虑更便宜的模型。",
        highEffort: "推理强度设为 {{effort}}，会大幅增加计费输出。仅保留给真正困难的任务。",
        autoOff: "Auto Mode 已关闭。开启后会应用有文档说明的约 10% token 倍率折扣。"
      }
    },
    pricing: {
      meta: { source: "GitHub Copilot - 模型与定价", effective: "按用量计费费率 - 2026 年 6 月 1 日生效", note: "示例费率基于所引用的 GitHub Copilot 参考资料整理。引用数字前请核对组织的实时定价页面。" },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "轻量", blurb: "样板代码、格式化、简单问答、批量编辑" },
        versatile: { name: "通用", blurb: "日常编码、重构、迭代工作" },
        powerful: { name: "强力", blurb: "架构推理、困难调试、规划步骤" }
      },
      effort: {
        low: { name: "低", blurb: "错别字、重命名、格式化、简单查询" },
        medium: { name: "中", blurb: "标准功能开发和缺陷修复（推荐默认值）" },
        high: { name: "高", blurb: "架构决策、复杂调试" },
        max: { name: "最大", blurb: "新算法、研究级分析" }
      }
    },
    scenarios: { close: "关闭" }
  });

  TO.i18n.register("pt-BR", {
    calc: {
      sourceLabel: "Fonte",
      exactAria: "{{label}} (exato)",
      planOption: "{{name}} ({{credits}} créditos/mês)",
      outputRate: "{{rate}} saída / 1M",
      emptyModels: "Selecione um ou mais modelos para ver uma comparação de custo.",
      lowestCost: "Menor custo / sessão",
      aiCredits: "Créditos de IA",
      spreadLabel: "diferença do mais barato ao mais caro",
      monthlyAllowance: "da cota mensal do {{plan}}",
      bestValue: "melhor valor",
      sessionCost: "Custo da sessão - {{count}} turno(s)",
      inputShort: "Entrada",
      cachedShort: "Cache",
      outputShort: "Saída",
      perTurn: "Por turno",
      costBreakdown: "Detalhamento do custo",
      recommendation: "Recomendação",
      guidedRecommendation: "Obter recomendação guiada ->",
      recommend: {
        lowest: "Para essa mistura de tokens, {{model}} é a opção de menor custo a {{total}} por sessão - {{delta}} menos que {{priciest}}.",
        outputDominates: "A saída domina ({{percent}} do custo). Limite a saída com uma regra de formato e considere reduzir o esforço de raciocínio.",
        cachedHealthy: "Sua parcela em cache está saudável: um prefixo de instruções estável está funcionando. Mantenha-o idêntico byte a byte para preservar o desconto.",
        inputDrives: "A entrada impulsiona a maior parte deste custo. Restrinja o contexto com #-mentions antes de buscar um modelo mais barato.",
        highEffort: "O esforço de raciocínio está em {{effort}}; isso multiplica bastante a saída cobrada. Reserve para tarefas realmente difíceis.",
        autoOff: "Auto Mode está desativado. Ativá-lo aplica um desconto documentado de ~10% no multiplicador de tokens."
      }
    },
    pricing: {
      meta: { source: "GitHub Copilot - Modelos e preços", effective: "Tarifas de cobrança por uso - vigentes em 1 de junho de 2026", note: "Tarifas ilustrativas sintetizadas a partir da referência citada do GitHub Copilot. Verifique a página de preços ativa da sua organização antes de citar números." },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "Leve", blurb: "Boilerplate, formatação, perguntas simples e edições em massa" },
        versatile: { name: "Versátil", blurb: "Codificação diária, refactors e trabalho iterativo" },
        powerful: { name: "Poderoso", blurb: "Raciocínio arquitetural, depuração difícil e etapas de planejamento" }
      },
      effort: {
        low: { name: "Baixo", blurb: "Typos, renomeações, formatação e consultas simples" },
        medium: { name: "Médio", blurb: "Trabalho padrão de features e correções (padrão recomendado)" },
        high: { name: "Alto", blurb: "Decisões de arquitetura e depuração difícil" },
        max: { name: "Máximo", blurb: "Novos algoritmos e análise em nível de pesquisa" }
      }
    },
    scenarios: { close: "Fechar" }
  });

  TO.i18n.register("ar", {
    calc: {
      sourceLabel: "المصدر",
      exactAria: "{{label}} (دقيق)",
      planOption: "{{name}} ({{credits}} رصيد/شهر)",
      outputRate: "{{rate}} إخراج / 1M",
      emptyModels: "حدد نموذجًا واحدًا أو أكثر لعرض مقارنة التكلفة.",
      lowestCost: "أقل تكلفة / جلسة",
      aiCredits: "أرصدة الذكاء الاصطناعي",
      spreadLabel: "الفارق بين الأرخص والأغلى",
      monthlyAllowance: "من الحصة الشهرية لخطة {{plan}}",
      bestValue: "أفضل قيمة",
      sessionCost: "تكلفة الجلسة - {{count}} دور",
      inputShort: "الإدخال",
      cachedShort: "المخزن مؤقتًا",
      outputShort: "الإخراج",
      perTurn: "لكل دور",
      costBreakdown: "تفصيل التكلفة",
      recommendation: "التوصية",
      guidedRecommendation: "احصل على توصية موجهة ->",
      recommend: {
        lowest: "لهذا المزيج من الرموز، يعد {{model}} الخيار الأقل تكلفة عند {{total}} لكل جلسة، أي أقل بـ {{delta}} من {{priciest}}.",
        outputDominates: "الإخراج يهيمن على التكلفة ({{percent}}). قيّد الإخراج بقاعدة تنسيق وفكر في خفض جهد الاستدلال.",
        cachedHealthy: "حصة التخزين المؤقت لديك صحية: بادئة تعليمات مستقرة تعمل جيدًا. أبقها مطابقة بايتًا ببايت للحفاظ على الخصم.",
        inputDrives: "الإدخال هو ما يدفع معظم هذه التكلفة. ضيّق نطاق السياق باستخدام #-mentions قبل الانتقال إلى نموذج أرخص.",
        highEffort: "جهد الاستدلال مضبوط على {{effort}}، وهذا يضاعف الإخراج المفوتر بدرجة كبيرة. استخدمه فقط للمهام الصعبة فعلًا.",
        autoOff: "Auto Mode متوقف. تشغيله يطبق خصمًا موثقًا بحوالي 10% على مضاعف الرموز."
      }
    },
    pricing: {
      meta: { source: "GitHub Copilot - النماذج والأسعار", effective: "أسعار الفوترة حسب الاستخدام - سارية في 1 يونيو 2026", note: "هذه أسعار توضيحية مستخلصة من مرجع GitHub Copilot المذكور. تحقق من صفحة الأسعار الحية لمؤسستك قبل اقتباس الأرقام." },
      plans: { business: "Copilot Business", enterprise: "Copilot Enterprise" },
      tiers: {
        lightweight: { name: "خفيف", blurb: "قوالب، تنسيق، أسئلة بسيطة، تعديلات جماعية" },
        versatile: { name: "متعدد الاستخدام", blurb: "برمجة يومية، إعادة هيكلة، عمل تكراري" },
        powerful: { name: "قوي", blurb: "استدلال معماري، تصحيح صعب، خطوات تخطيط" }
      },
      effort: {
        low: { name: "منخفض", blurb: "أخطاء مطبعية، إعادة تسمية، تنسيق، استعلامات بسيطة" },
        medium: { name: "متوسط", blurb: "عمل ميزات وإصلاحات قياسية (الخيار الافتراضي الموصى به)" },
        high: { name: "مرتفع", blurb: "قرارات معمارية وتصحيح أخطاء معقد" },
        max: { name: "أقصى", blurb: "خوارزميات جديدة وتحليل بمستوى بحثي" }
      }
    },
    scenarios: { close: "إغلاق" }
  });
})(window.TO = window.TO || {});
