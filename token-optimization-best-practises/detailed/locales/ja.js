/* Japanese (ja). Mirrors the English key set. */
window.TO = window.TO || {};
window.TO.i18n.register("ja", {
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · AI ワークロードのトークン最適化を理解して試算",
    tagline: "AI ワークロードのトークン最適化を理解、可視化、試算する。",
    homeAria: "{{name}} のホーム",
    toggleTheme: "テーマを切り替え",
    toggleNav: "ナビゲーションを切り替え",
    language: "言語",
    backToQuickGuide: "クイックガイドに戻る",
    primaryNav: "メインナビゲーション"
  },
  nav: {
    home: "ホーム",
    scenarios: "コンテキスト・ロットシナリオ",
    diagram: "フレームワーク",
    calculator: "計算機",
    playbook: "プレイブック",
    extensibility: "拡張性"
  },
  footer: {
    note: "Token-optimizer · 静的でデータ駆動のショーケース。数値は GitHub Copilot および Anthropic の引用元資料から合成した目安です。実数を引用する前に、ご自身のベースラインを計測してください。",
    disclaimer: "このコンテンツは Microsoft Asia Developer GBB によって作成され、一般公開されている GitHub Copilot のドキュメントに基づいています。サポートされるすべての構成で検証されたわけではありません。チームは最新のドキュメントとの整合を維持するよう継続的に努めていますが、意思決定を行う前に、公式の GitHub ドキュメントで詳細を確認することをお勧めします。"
  },
  hero: {
    kicker: "従量課金 · トークン時代",
    title: "すべてのトークンは請求項目。",
    titleAccent: "一つひとつに価値を持たせよう。",
    subtitle: "AI コーディングは席課金からトークン課金へ移行しました。Token-optimizer はその変化を、見て、比べて、対処できる形に変えます — シナリオ、インタラクティブなフレームワーク、価格計算機、モデル選定プレイブック。",
    cta: {
      scenarios: "シナリオを見る",
      calculator: "モデルコストを比較",
      playbook: "プレイブックを実行"
    }
  },
  home: {
    tokenEconomy: "トークン経済",
    tokenTypesTitle: "3 つのトークンタイプ、3 つのコスト挙動",
    tokenTypesLead: "課金されるすべてのターンには 3 つのレーンがあります。それぞれ別のレバーに反応するため、請求を支配するレーンを攻めましょう。",
    whatsInside: "何が含まれるか",
    waysTitle: "トークン最適化を学ぶ",
    pipelineAria: "アニメーション図: 多数の入力トークンが最適化装置を通って、より少なく明るい出力トークンに集約される",
    feature: {
      scenarios: { title: "シナリオエクスプローラー", body: "Context Rot シナリオ — 問題と要点を特定します。", open: "シナリオを開く →" },
      diagram:   { title: "フレームワーク",         body: "インタラクティブな地図: 6 つのコストドライバー、6 つのトークン規律の柱、計測可能な成果。", open: "フレームワークを開く →" },
      calculator:{ title: "コスト計算機",           body: "全モデルで 1 ターンを試算し、横並びで比較し、AI クレジットへの影響を確認。", open: "計算機を開く →" },
      playbook:  { title: "モデル プレイブック",     body: "6 つの質問に答えるとモデル戦略と、それに合う最適化手法が得られる。", open: "プレイブックを開く →" }
    }
  },
  stats: {
    label0: "完全導入時のトークン削減",
    note0:  "~37〜44%、計測可能な生産性低下なし",
    label1: "実効ライセンス倍率",
    note1:  "同じライセンスで、約 1.6〜1.8 倍の有用作業",
    label2: "出力 vs 入力 コスト比",
    note2:  "出力は高いレーン — 4〜8 倍",
    label3: "キャッシュ済みトークンは安い",
    note3:  "安定したプレフィックスは入力の約 10% で課金"
  },
  tokenTypes: {
    input:  { name: "入力",         cost: "標準料金",         behavior: "毎ターン課金 — ファイル、プロンプト、履歴、ツールスキーマ、システムプロンプト。", lever: "圧縮 · コンテキストを絞る" },
    cached: { name: "キャッシュ",   cost: "入力の約 10%",      behavior: "バイト単位で同じプレフィックスを呼び出し間で再利用すると約 90% 引き。", lever: "再利用 · プレフィックスを安定" },
    output: { name: "出力",         cost: "最高 — 入力の 4〜8 倍", behavior: "見える応答に加え、見えない推論の痕跡も含む。", lever: "制約 · 推論を適切に" }
  },
  leverWord: "レバー",
  diagram: {
    stage1Eyebrow: "ステージ 1 · 診断",
    stage1Title:   "実際にトークン支出を動かす要因",
    stage1Lead:    "影響順に並んだ 6 つのコストドライバー。6 つのうち 5 つはエンジニアリングの選択 — だからこそ勝てる問題です。",
    stage2Eyebrow: "ステージ 2 · フレームワーク",
    stage2Title:   "トークン規律の 6 つの柱",
    stage2Lead:    "柱を選ぶと、その原則、主要レバー、関連シナリオが見られます。柱は積み上げではなく、複利的に効きます。",
    stage3Eyebrow: "ステージ 3 · 成果",
    stage3Title:   "規律ある導入がもたらすもの",
    emptyPanel:    "マップ上の柱を選んで、その原則、レバー、シナリオを見てみよう。",
    primaryLever:  "主要レバー",
    contribution:  "総削減への寄与",
    scenariosHere: "この柱のシナリオ",
    hubAria:       "トークン規律の 6 つの柱のインタラクティブマップ"
  },
  scenarios: {
    eyebrow: "シナリオエクスプローラー",
    title:   "トークンが燃えてしまう場所 — そしてその止め方",
    lead:    "各シナリオは問題と最適化手法、ビフォー/アフターのトークン推移、そしてビジネス的示唆を組み合わせます。",
    search:  "シナリオを検索…",
    searchAria: "シナリオを検索",
    filterAria: "カテゴリでシナリオを絞り込み",
    all:     "すべて",
    empty:   "このフィルタに合うシナリオはありません。",
    back:    "← すべてのシナリオ",
    open:    "詳細 →",
    problem: "問題",
    whyHigh: "なぜトークン消費が大きいか",
    techniques: "最適化手法",
    impact:  "期待される効果",
    takeaway:"ビジネス的示唆",
    recommendation: "推奨事項",
    modelFit:"適合するモデル",
    pillars: "フレームワークの柱",
    before:  "ビフォー",
    after:   "アフター",
    expensive:"高コスト",
    efficient:"効率的"
  },
  calc: {
    eyebrow: "コスト & 価格計算機",
    title:   "1 ターンを試算。すべてのモデルを比較。",
    lead:    "トークンの内訳を入力し、比較するモデルを選ぶと、コスト、AI クレジット、1 セッションで月割当をどれだけ使うかが分かります。",
    tokenMix: "トークンの内訳",
    quickFill:"クイック入力",
    inputTokens: "入力トークン",
    cachedTokens:"キャッシュトークン",
    outputTokens:"出力トークン",
    sessionTurns:"セッションのターン数",
    reasoningEffort:"推論の強度",
    plan: "プラン",
    autoLabel:"Auto Mode 割引",
    autoHint: "トークン倍率に対して約 10% 割引",
    modelsToCompare:"比較するモデル",
    included:"含まれる",
    presets: {
      qa: "クイック Q&A",
      refactor: "日次リファクタ",
      agent: "エージェントタスク",
      session: "長時間セッション"
    }
  },
  playbook: {
    eyebrow: "トークン最適化プレイブック",
    title:   "有用なトークンあたりの支出を減らす 10 のレバー",
    intro:   "トークン最適化プレイブックから抽出した 10 のレバーで、すべてのトークンを有用な仕事へ。カードで要点を眺め、レバーを開けば深掘りと表、背景にあるワークフローパターンが見られます。",
    explore: "レバーを開く ↗",
    openAria:"レバー {{num}} を開く: {{name}}",
    backToLevers: "レバー一覧に戻る",
    backToTen:    "← 10 のレバーに戻る",
    counter: "レバー {{num}} / 10",
    heroAlt: "{{name}} — 出典プレイブックのビジュアル"
  },
  lever: {
    "prompt-compression": {
      name: "プロンプト圧縮",
      tagline: "情報を運ばない単語を削る。",
      summary: "技術用語はそのまま残す。丁寧な言い回しは削る。40 トークンの丁寧な依頼が 10 トークンの「原始人風」指示になる — 意味は同じで約 75% 安い。リスクに応じて圧縮レベルを選びます。",
      stat0: "最大の入力削減",
      stat1: "圧縮レベル数"
    },
    "choose-language": {
      name: "適切な言語を選ぶ",
      tagline: "ほぼ常に英語が最も安いトークナイザー。",
      summary: "中国語のほうが文字あたりの意味量で安く感じるが、Komatsuzaki が 6 大モデル × 9 言語で示したヒートマップでは、多くの場合英語が最安。トークナイザーの差は大きく、非英語では Gemini と Qwen が最も効率的、Anthropic と Kimi が最も高い。",
      stat0: "英語ベースライン",
      stat1: "中国語モデルでの中国語"
    },
    "manage-context": {
      name: "コンテキストを管理する",
      tagline: "ルールを 3 層に分け、安定したプレフィックスをキャッシュする。",
      summary: "巨大な copilot-instructions ファイルは毎ターン読み込まれます。3 層に分けましょう: 常時有効のスタイルや出力上限ルール; マッチするファイルだけに読み込まれる条件ルール (applyTo); 名前で呼び出すオンデマンドルール。キャッシュ可能なプレフィックスを安定に保ち、頻繁に新しいチャットを始めましょう。",
      stat0: "キャッシュ済みプレフィックスのコスト",
      stat1: "20 ターン後のトークン"
    },
    "output-control": {
      name: "出力制御",
      tagline: "短いルールを一度書けば、答えはずっと短い。",
      summary: "出力はモデルにより入力の 4〜8 倍。システム指示の 1 行で応答長を恒久的に抑えられます。ルールは短く、節約は大きい — そして一度書けばよい。",
      stat0: "出力 vs 入力 コスト",
      stat1: "ルール 1 つでの節約"
    },
    "choose-mode": {
      name: "適切なモードを選ぶ",
      tagline: "Ask、Plan、Agent — 質問に合わせて使い分ける。",
      summary: "Copilot には 3 つのモード。Ask は素早い参照のための単発呼び出し。Plan は構築前の設計のための単発呼び出し。Agent は 1 タスクで 5〜25 呼び出し — 大きな仕事のみに。最もコストがかかる失敗は曖昧なプロンプトで Agent を開始すること。",
      stat0: "Agent vs Ask コスト",
      stat1: "Agent タスク当たりトークン"
    },
    "phased-workflow": {
      name: "フェーズ、カスタムエージェント、スキル、サブエージェント",
      tagline: "仕事に合った容器を選ぶ。",
      summary: "フェーズ (調査 → 計画 → 実装) に分け、各間で新しいコンテキストウィンドウを使う。カスタムエージェントで役割とツールを固定。スキルで遅延ロードのコンテキストを。サブエージェントで主セッションを軽く保つ。",
      stat0: "機能あたりのフェーズ",
      stat1: "各フェーズのコンテキスト窓"
    },
    "choose-model": {
      name: "適切なモデルを選ぶ",
      tagline: "モデルを混ぜる。大きいので計画、小さいので構築。",
      summary: "GitHub Copilot では Opus は Sonnet の約 1.7 倍。30 ターンで Sonnet だけなら 30 単位、Opus だけなら 50、混合戦略は約 22.8。高価なモデルには考えさせ、安いモデルにタイプさせる。",
      stat0: "Opus vs Sonnet",
      stat1: "混合 vs Sonnet のみ"
    },
    "agents-file": {
      name: "AGENTS ファイルを管理する",
      tagline: "地雷であって百科事典ではない。",
      summary: "多くのチームは /init を実行し、自動生成された AGENTS ファイルをそのまま出します。ETH チューリヒの 47 プロジェクトの研究では逆効果が示されました: 正確性は 2% 低下、トークンコストは 20〜23% 増。コードから推測できないルールだけ残し、それ以外は削除。",
      stat0: "正確性 (LLM が書いた)",
      stat1: "トークンコスト (LLM が書いた)"
    },
    "clean-up-tools": {
      name: "ツールを整理する",
      tagline: "ツールのスキーマは毎ステップ同行する。",
      summary: "MCP により Copilot は外部ツールを使えますが、有効にした各ツールはそのスキーマをモデルに送ります。スキーマは Agent の各ステップで同行。188 ツールを有効にすると 30 ステップのタスクはスキーマだけで 330,000 トークンを消費。",
      stat0: "監査後のツール数",
      stat1: "節約トークン / 日"
    },
    "usage-limits": {
      name: "使用上限と超過",
      tagline: "請求が頭打ちになる前に、請求に上限を。",
      summary: "最後のレバーはトークンではなく、メーターの話です。超過上限を設定し、どの行動が割当を消費するかを理解し、生産的な仕事を抑えずに上限内に収まるパターンを予算シナリオで確認しましょう。",
      stat0: "健全な超過比率",
      stat1: "管理されていない基準"
    }
  },
  ext: {
    eyebrow: "拡張性のための設計",
    title:   "構造として将来対応",
    intro:   "Token-optimizer は設計上データ駆動です。シナリオ、価格、プレイブック、図表の内容は宣言的ファイルにあり、UI 層はそれを読み込むだけでハードコードしません。",
    archHead:"アーキテクチャ — 3 層",
    cfgHead: "設定とデータファイル",
    snippetTitle: "シナリオを追加する",
    snippetTag:   "ビューコードの変更は不要",
    principlesHead: "適用したエンジニアリング原則"
  }
});
