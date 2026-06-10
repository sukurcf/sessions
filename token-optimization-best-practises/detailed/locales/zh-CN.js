/* Simplified Chinese (zh-CN). Mirrors the English key set. */
window.TO = window.TO || {};
window.TO.i18n.register("zh-CN", {
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · 理解和测算 AI 工作负载的 token 优化",
    tagline: "理解、可视化并测算 AI 工作负载的 token 优化。",
    homeAria: "{{name}} 首页",
    toggleTheme: "切换主题",
    toggleNav: "切换导航",
    language: "语言",
    backToQuickGuide: "返回快速指南",
    primaryNav: "主导航"
  },
  nav: {
    home: "首页",
    scenarios: "上下文腐蚀场景",
    diagram: "框架",
    calculator: "计算器",
    playbook: "策略手册",
    extensibility: "可扩展性"
  },
  footer: {
    note: "Token-optimizer · 一个静态、数据驱动的展示站。数据为示意,综合自所引用的 GitHub Copilot 与 Anthropic 资料。引用数字前,请测量你自己的基线。",
    disclaimer: "本内容由 Microsoft Asia Developer GBB 编写，基于公开可用的 GitHub Copilot 文档。尚未在所有受支持的配置中进行验证。尽管团队持续努力与最新文档保持一致，但建议用户在做出任何决定之前，对照 GitHub 官方文档核实细节。"
  },
  hero: {
    kicker: "按使用量计费 · token 时代",
    title: "每个 token 都是账单上的一行。",
    titleAccent: "让每一个都物有所值。",
    subtitle: "AI 编程已从按席位计费转向按 token 计费。Token-optimizer 把这个转变变成可见、可比较、可执行的内容 — 场景、可交互框架、价格计算器和模型选型手册。",
    cta: {
      scenarios: "浏览场景",
      calculator: "比较模型成本",
      playbook: "运行策略手册"
    }
  },
  home: {
    tokenEconomy: "Token 经济",
    tokenTypesTitle: "三种 token 类型,三种成本行为",
    tokenTypesLead: "每个计费回合都有三条赛道。每条对一个不同的杠杆响应 — 直击主导你账单的那条。",
    whatsInside: "内容概览",
    waysTitle: "探索 token 优化",
    pipelineAria: "动画图:大量输入 token 通过优化器汇聚为更少、更亮的输出 token",
    feature: {
      scenarios: { title: "场景浏览器", body: "Context Rot 场景 — 找出问题与要点。", open: "打开场景浏览器 →" },
      diagram:   { title: "框架",       body: "可交互地图:六个成本驱动因素、六根 token 纪律支柱、可量化结果。", open: "打开框架 →" },
      calculator:{ title: "成本计算器", body: "针对每个模型计算一个回合的成本,并排比较,看到 AI 额度的影响。", open: "打开计算器 →" },
      playbook:  { title: "模型策略手册", body: "回答六个问题;得到模型策略以及与之匹配的优化手段。", open: "打开策略手册 →" }
    }
  },
  stats: {
    label0: "完全采用时的 token 削减",
    note0:  "约 37–44%,且无可测量的生产力损失",
    label1: "有效许可证倍数",
    note1:  "同一许可证,约 1.6–1.8 倍的有用工作",
    label2: "输出与输入成本比",
    note2:  "输出是昂贵赛道 — 4–8 倍",
    label3: "缓存 token 更便宜",
    note3:  "稳定前缀按输入价格约 10% 计费"
  },
  tokenTypes: {
    input:  { name: "输入",   cost: "标准费率",         behavior: "每回合都计费 — 文件、提示、历史、工具 schema、系统提示。", lever: "压缩 · 限定上下文" },
    cached: { name: "缓存",   cost: "约为输入的 10%",    behavior: "字节相同的前缀在多次调用间复用可获约 90% 折扣。", lever: "复用 · 保持前缀稳定" },
    output: { name: "输出",   cost: "最高 — 输入的 4–8 倍", behavior: "可见的回复加上不可见的推理痕迹。", lever: "约束 · 推理量化" }
  },
  leverWord: "杠杆",
  diagram: {
    stage1Eyebrow: "阶段一 · 诊断",
    stage1Title:   "真正驱动你 token 支出的因素",
    stage1Lead:    "按影响排序的六个成本驱动。其中五个是工程选择 — 因此这是一个可以赢的问题。",
    stage2Eyebrow: "阶段二 · 框架",
    stage2Title:   "Token 纪律的六根支柱",
    stage2Lead:    "选择一根支柱,查看其原则、主要杠杆与覆盖的场景。支柱是复合的 — 而不仅是叠加。",
    stage3Eyebrow: "阶段三 · 成果",
    stage3Title:   "有纪律的采用带来什么",
    emptyPanel:    "在地图上选择一根支柱,了解其原则、杠杆与场景。",
    primaryLever:  "主要杠杆",
    contribution:  "对总削减的贡献",
    scenariosHere: "本支柱的场景",
    hubAria:       "Token 纪律六支柱的交互地图"
  },
  scenarios: {
    eyebrow: "场景浏览器",
    title:   "token 在哪里被烧掉 — 以及如何阻止",
    lead:    "每个场景把问题与优化手段、前后 token 模式以及业务结论联系起来。",
    search:  "搜索场景…",
    searchAria: "搜索场景",
    filterAria: "按类别筛选场景",
    all:     "全部",
    empty:   "没有符合该筛选的场景。",
    back:    "← 所有场景",
    open:    "详情 →",
    problem: "问题",
    whyHigh: "为什么 token 用量高",
    techniques: "优化手段",
    impact:  "预期影响",
    takeaway:"业务结论",
    recommendation: "建议",
    modelFit:"适用模型",
    pillars: "框架支柱",
    before:  "之前",
    after:   "之后",
    expensive:"昂贵",
    efficient:"高效"
  },
  calc: {
    eyebrow: "成本与价格计算器",
    title:   "测算一个回合。比较每一个模型。",
    lead:    "输入 token 配比,选择要比较的模型,查看成本、AI 额度以及一次会话消耗多少月度配额。",
    tokenMix: "Token 配比",
    quickFill:"快速填充",
    inputTokens: "输入 token",
    cachedTokens:"缓存 token",
    outputTokens:"输出 token",
    sessionTurns:"会话回合",
    reasoningEffort:"推理强度",
    plan: "套餐",
    autoLabel:"Auto Mode 折扣",
    autoHint: "对 token 倍率约 10% 折扣",
    modelsToCompare:"要比较的模型",
    included:"已包含",
    presets: {
      qa: "快速问答",
      refactor: "日常重构",
      agent: "Agent 任务",
      session: "长会话"
    }
  },
  playbook: {
    eyebrow: "Token 优化策略手册",
    title:   "十根杠杆,让每个有用 token 花得更少",
    intro:   "源自 Token 优化策略手册的十根杠杆,把每个 token 变成有用的工作。卡片浏览要点,打开杠杆获取深度内容、表格以及背后的工作流模式。",
    explore: "查看杠杆 ↗",
    openAria:"打开杠杆 {{num}}:{{name}}",
    backToLevers: "返回杠杆列表",
    backToTen:    "← 返回十根杠杆",
    counter: "杠杆 {{num}} / 10",
    heroAlt: "{{name}} — 来源策略手册中的图像"
  },
  lever: {
    "prompt-compression": {
      name: "提示压缩",
      tagline: "去掉不携带信息的词。",
      summary: "完全保留技术术语。删掉客套话。40 个 token 的礼貌请求变成 10 个 token 的“原始人式”指令 — 同样的意思,约 75% 更便宜。按风险选择压缩等级。",
      stat0: "最大输入节省",
      stat1: "压缩等级数"
    },
    "choose-language": {
      name: "选对语言",
      tagline: "英语几乎总是最便宜的分词器。",
      summary: "直觉上中文应该更便宜,因为每个字承载更多信息 — 但 Komatsuzaki 在 6 个大模型 × 9 种语言上的热力图显示:多数情况下英语最便宜。分词器差异巨大:非英语场景下 Gemini 和 Qwen 最高效,Anthropic 与 Kimi 最贵。",
      stat0: "英文基准",
      stat1: "中文模型上的中文"
    },
    "manage-context": {
      name: "管理你的上下文",
      tagline: "把规则分三层;缓存稳定的前缀。",
      summary: "一个巨大的 copilot-instructions 文件每回合都会加载。把它拆成三层:始终生效的样式与输出长度规则;只在匹配文件上加载的条件规则 (applyTo);按名字调用的按需规则。让可缓存前缀保持稳定,并经常开新对话。",
      stat0: "缓存前缀成本",
      stat1: "20 回合后的 token"
    },
    "output-control": {
      name: "输出控制",
      tagline: "一条短规则,写一次,永远短回复。",
      summary: "根据模型不同,输出比输入贵 4–8 倍。在系统指令里写一句话就能永久限定回复长度。规则短,节省大 — 只需写一次。",
      stat0: "输出 vs 输入成本",
      stat1: "一条规则带来的节省"
    },
    "choose-mode": {
      name: "选对模式",
      tagline: "Ask、Plan、Agent — 按问题选模式。",
      summary: "Copilot 有三种模式。Ask 是一次调用,适合快速查询。Plan 是一次调用,在构建前设计方案。Agent 是一项任务里 5–25 次调用 — 只用于大型工作。最贵的错误是用模糊提示启动 Agent。",
      stat0: "Agent vs Ask 成本",
      stat1: "Agent 每任务 token"
    },
    "phased-workflow": {
      name: "阶段、定制 agent、skills、子 agent",
      tagline: "按工作选合适的容器。",
      summary: "按阶段工作 (研究 → 计划 → 实施),阶段间使用全新的上下文窗口。用定制 agent 锁定角色并精简工具。用 skills 实现按需加载的上下文。用子 agent 让主会话保持轻量。",
      stat0: "每个特性的阶段数",
      stat1: "每阶段的上下文窗口"
    },
    "choose-model": {
      name: "选对模型",
      tagline: "混用模型。用大模型规划,用小模型构建。",
      summary: "在 GitHub Copilot 上 Opus 价格约为 Sonnet 的 1.7 倍。30 回合下:全 Sonnet 花 30 单位,全 Opus 花 50,而混合策略约 22.8。让贵的模型思考,让便宜的模型打字。",
      stat0: "Opus vs Sonnet",
      stat1: "混合 vs 全 Sonnet"
    },
    "agents-file": {
      name: "管理你的 AGENTS 文件",
      tagline: "做地雷,不做百科。",
      summary: "很多团队执行 /init 后把自动生成的 AGENTS 文件直接提交。ETH 苏黎世对 47 个项目的研究表明效果适得其反:正确率下降 2%,token 成本上升 20–23%。只保留 agent 无法从代码推断的规则,其它都删。",
      stat0: "正确性 (LLM 撰写)",
      stat1: "token 成本 (LLM 撰写)"
    },
    "clean-up-tools": {
      name: "清理你的工具",
      tagline: "每个工具的 schema 在每一步都跟着走。",
      summary: "MCP 让 Copilot 使用外部工具 — 但每个启用的工具都会把 schema 发给模型。schema 在 agent 的每一步都同行。启用 188 个工具时,30 步任务仅 schema 就消耗 33 万 token。",
      stat0: "审计后工具数",
      stat1: "每日节省 token"
    },
    "usage-limits": {
      name: "用量上限与超额",
      tagline: "在账单封顶你之前先封顶账单。",
      summary: "最后一根杠杆不是 token,而是计量表。设置超额上限,搞清哪些动作计入额度,审阅预算场景,找到既能让团队保持在上限内又不抑制生产力的模式。",
      stat0: "健康的超额比例",
      stat1: "未管理的基线"
    }
  },
  ext: {
    eyebrow: "为扩展而设计",
    title:   "结构上为未来准备",
    intro:   "Token-optimizer 在设计上是数据驱动的。场景、价格、策略手册、图表内容都存在声明式文件中 — UI 层只读取,从不硬编码。",
    archHead:"架构 — 三层",
    cfgHead: "配置与数据文件",
    snippetTitle: "添加一个场景",
    snippetTag:   "无需修改视图代码",
    principlesHead: "已应用的工程原则"
  }
});
