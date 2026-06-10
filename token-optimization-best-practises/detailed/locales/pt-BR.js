/* Brazilian Portuguese (pt-BR). Mirrors the English key set. */
window.TO = window.TO || {};
window.TO.i18n.register("pt-BR", {
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · Entenda e calcule a otimização de tokens para cargas de IA",
    tagline: "Entenda, visualize e calcule a otimização de tokens para cargas de IA.",
    homeAria: "Início de {{name}}",
    toggleTheme: "Alternar tema",
    toggleNav: "Alternar navegação",
    language: "Idioma",
    backToQuickGuide: "Voltar ao guia rápido",
    primaryNav: "Principal"
  },
  nav: {
    home: "Início",
    scenarios: "Cenários de Context Rot",
    diagram: "Framework",
    calculator: "Calculadora",
    playbook: "Playbook",
    extensibility: "Extensibilidade"
  },
  footer: {
    note: "Token-optimizer · uma demonstração estática e orientada a dados. Os números são ilustrativos, sintetizados a partir do material original da GitHub Copilot e da Anthropic. Meça sua própria base antes de citar números.",
    disclaimer: "Este conteúdo foi elaborado pela Microsoft Asia Developer GBB e baseia-se na documentação publicamente disponível do GitHub Copilot. Não foi validado em todas as configurações suportadas. Embora a equipe se esforce continuamente para se manter alinhada com a documentação mais recente, recomenda-se que os usuários verifiquem os detalhes na documentação oficial do GitHub antes de tomar qualquer decisão."
  },
  hero: {
    kicker: "Cobrança por uso · a era do token",
    title: "Cada token é uma linha na fatura.",
    titleAccent: "Faça com que cada um valha o lugar.",
    subtitle: "A programação com IA passou de cobrança por assento para cobrança por token. O Token-optimizer transforma essa mudança em algo visível, comparável e acionável — cenários, um framework interativo, uma calculadora de preços e um playbook de escolha de modelo.",
    cta: {
      scenarios: "Explorar cenários",
      calculator: "Comparar custo dos modelos",
      playbook: "Rodar o playbook"
    }
  },
  home: {
    tokenEconomy: "Economia do token",
    tokenTypesTitle: "Três tipos de token, três comportamentos de custo",
    tokenTypesLead: "Cada turno cobrado tem três pistas. Cada uma responde a uma alavanca diferente — ataque a que domina sua fatura.",
    whatsInside: "O que tem aqui",
    waysTitle: "Explore a otimização de tokens",
    pipelineAria: "Diagrama animado: muitos tokens de entrada convergem por um otimizador para menos tokens de saída mais brilhantes",
    feature: {
      scenarios: { title: "Explorador de cenários", body: "Cenários de Context Rot — identifique os problemas e os aprendizados.", open: "Abrir explorador de cenários →" },
      diagram:   { title: "O framework",            body: "Um mapa interativo: seis impulsionadores de custo, seis pilares de disciplina de token, resultados mensuráveis.", open: "Abrir o framework →" },
      calculator:{ title: "Calculadora de custo",   body: "Precifique um turno em cada modelo, compare lado a lado e veja o impacto em créditos de IA.", open: "Abrir a calculadora →" },
      playbook:  { title: "Playbook de modelos",    body: "Responda seis perguntas; obtenha uma estratégia de modelo e as técnicas de otimização que se encaixam.", open: "Abrir o playbook →" }
    }
  },
  stats: {
    label0: "Redução de tokens em adoção total",
    note0:  "~37–44% sem perda mensurável de produtividade",
    label1: "Multiplicador efetivo de licença",
    note1:  "Mesma licença, ~1,6–1,8× de trabalho útil",
    label2: "Razão custo de saída vs entrada",
    note2:  "A saída é a pista cara — 4–8×",
    label3: "Mais barato para tokens em cache",
    note3:  "Um prefixo estável é cobrado a ~10% da entrada"
  },
  tokenTypes: {
    input:  { name: "Entrada", cost: "Tarifa padrão",        behavior: "Cobrado todo turno — arquivos, prompt, histórico, esquemas de ferramentas, system prompt.", lever: "Comprimir · escopo do contexto" },
    cached: { name: "Cache",   cost: "~10% da entrada",       behavior: "Um prefixo byte a byte idêntico reusado entre chamadas ganha ~90% de desconto.", lever: "Reutilizar · prefixo estável" },
    output: { name: "Saída",   cost: "Mais alto — 4–8× entrada", behavior: "A resposta visível mais o rastro invisível de raciocínio.", lever: "Restringir · raciocínio ajustado" }
  },
  leverWord: "Alavanca",
  diagram: {
    stage1Eyebrow: "Etapa 1 · Diagnóstico",
    stage1Title:   "O que realmente impulsiona seu gasto com tokens",
    stage1Lead:    "Seis impulsionadores de custo, ordenados por impacto. Cinco dos seis são decisões de engenharia — por isso é um problema vencível.",
    stage2Eyebrow: "Etapa 2 · O framework",
    stage2Title:   "Seis pilares de disciplina de token",
    stage2Lead:    "Selecione um pilar para ver seu princípio, alavanca principal e cenários cobertos. Os pilares se compõem — não somente se somam.",
    stage3Eyebrow: "Etapa 3 · Resultados",
    stage3Title:   "O que uma adoção disciplinada entrega",
    emptyPanel:    "Selecione um pilar no mapa para explorar seu princípio, alavanca e cenários.",
    primaryLever:  "Alavanca principal",
    contribution:  "Contribuição para a redução total",
    scenariosHere: "Cenários deste pilar",
    hubAria:       "Mapa interativo dos seis pilares da disciplina de token"
  },
  scenarios: {
    eyebrow: "Explorador de cenários",
    title:   "Onde os tokens são queimados — e como parar",
    lead:    "Cada cenário associa o problema à técnica de otimização, um padrão de antes/depois e a conclusão de negócio.",
    search:  "Buscar cenários…",
    searchAria: "Buscar cenários",
    filterAria: "Filtrar cenários por categoria",
    all:     "Todos",
    empty:   "Nenhum cenário corresponde a esse filtro.",
    back:    "← Todos os cenários",
    open:    "Detalhe →",
    problem: "O problema",
    whyHigh: "Por que o consumo é alto",
    techniques: "Técnicas de otimização",
    impact:  "Impacto esperado",
    takeaway:"Conclusão de negócio",
    recommendation: "Recomendação",
    modelFit:"Modelo recomendado",
    pillars: "Pilares do framework",
    before:  "Antes",
    after:   "Depois",
    expensive:"Caro",
    efficient:"Eficiente"
  },
  calc: {
    eyebrow: "Calculadora de custo e preço",
    title:   "Precifique um turno. Compare todos os modelos.",
    lead:    "Informe uma mistura de tokens, escolha os modelos a comparar e veja custo, créditos de IA e quanto uma sessão consome da cota mensal.",
    tokenMix: "Mistura de tokens",
    quickFill:"Preenchimento rápido",
    inputTokens: "Tokens de entrada",
    cachedTokens:"Tokens em cache",
    outputTokens:"Tokens de saída",
    sessionTurns:"Turnos da sessão",
    reasoningEffort:"Esforço de raciocínio",
    plan: "Plano",
    autoLabel:"Desconto Auto Mode",
    autoHint: "Desconto ~10% sobre o multiplicador de tokens",
    modelsToCompare:"Modelos a comparar",
    included:"incluído",
    presets: {
      qa: "Perguntas rápidas",
      refactor: "Refactor diário",
      agent: "Tarefa de agente",
      session: "Sessão longa"
    }
  },
  playbook: {
    eyebrow: "Playbook de otimização de tokens",
    title:   "Dez alavancas para gastar menos por token útil",
    intro:   "Dez alavancas do Playbook de Otimização de Tokens para transformar cada token em trabalho útil. Folheie os cards para ver a ideia principal; abra uma alavanca para o aprofundamento, tabelas e padrões de fluxo por trás.",
    explore: "Explorar alavanca ↗",
    openAria:"Abrir alavanca {{num}}: {{name}}",
    backToLevers: "Voltar para as alavancas",
    backToTen:    "← Voltar para as dez alavancas",
    counter: "Alavanca {{num}} de 10",
    heroAlt: "{{name}} — imagem do playbook original"
  },
  lever: {
    "prompt-compression": {
      name: "Compressão de prompt",
      tagline: "Remova as palavras que não carregam informação.",
      summary: "Mantenha os termos técnicos exatos. Corte o enchimento educado. Um pedido cordial de 40 tokens vira uma instrução estilo 'caveman' de 10 tokens — mesmo significado, ~75% mais barato. Escolha o nível de compressão pelo risco.",
      stat0: "economia máxima de entrada",
      stat1: "níveis de compressão"
    },
    "choose-language": {
      name: "Escolha a língua certa",
      tagline: "Inglês quase sempre é o tokenizador mais barato.",
      summary: "A intuição diz que chinês é mais barato porque cada caractere carrega mais significado — mas o heatmap de Komatsuzaki com 6 grandes modelos × 9 línguas mostra que inglês é o mais barato na maioria dos casos. Os tokenizadores variam muito: Gemini e Qwen são mais eficientes em não-inglês; Anthropic e Kimi são os mais caros.",
      stat0: "base em inglês",
      stat1: "chinês em modelos chineses"
    },
    "manage-context": {
      name: "Gerencie seu contexto",
      tagline: "Divida as regras em três camadas; coloque o prefixo estável em cache.",
      summary: "Um arquivo copilot-instructions gigante é carregado todo turno. Divida em três camadas: regras sempre ativas para estilo e limites de saída; regras condicionais que carregam só para arquivos correspondentes (via applyTo); e regras sob demanda invocadas por nome. Mantenha o prefixo cacheável estável e comece novos chats com frequência.",
      stat0: "custo do prefixo em cache",
      stat1: "tokens após 20 turnos"
    },
    "output-control": {
      name: "Controle da saída",
      tagline: "Uma regra curta, paga uma vez — respostas curtas para sempre.",
      summary: "A saída custa 4–8× a entrada dependendo do modelo. Uma única frase nas suas instruções de sistema limita o tamanho da resposta para sempre. As regras são curtas, a economia é grande — e você só precisa escrever uma vez.",
      stat0: "custo saída vs entrada",
      stat1: "economia de uma regra"
    },
    "choose-mode": {
      name: "Escolha o modo certo",
      tagline: "Ask, Plan, Agent — combine o modo com a pergunta.",
      summary: "O Copilot tem três modos. Ask é uma chamada única para consultas rápidas. Plan é uma chamada única para desenhar uma solução antes de construir. Agent são 5–25 chamadas em uma tarefa — apenas para trabalhos grandes. O erro mais caro é iniciar o Agent com um prompt vago.",
      stat0: "custo Agent vs Ask",
      stat1: "tokens do Agent / tarefa"
    },
    "phased-workflow": {
      name: "Fases, agentes customizados, skills, sub-agentes",
      tagline: "Escolha o recipiente certo para o trabalho.",
      summary: "Trabalhe em fases (Pesquisar → Planejar → Implementar) com janelas de contexto novas entre elas. Use agentes customizados para travar um papel e enxugar ferramentas. Use skills para contexto carregado sob demanda. Use sub-agentes para manter a sessão principal enxuta.",
      stat0: "fases por feature",
      stat1: "janela de contexto por fase"
    },
    "choose-model": {
      name: "Escolha o modelo certo",
      tagline: "Misture modelos. Planeje com o grande, construa com o pequeno.",
      summary: "Opus custa ~1,7× o preço de Sonnet no GitHub Copilot. Em 30 turnos: só Sonnet custa 30 unidades, só Opus 50, mas uma estratégia mista fica em ~22,8. Deixe o modelo caro pensar. Deixe o modelo barato digitar.",
      stat0: "Opus vs Sonnet",
      stat1: "misto vs só Sonnet"
    },
    "agents-file": {
      name: "Cuide do arquivo AGENTS",
      tagline: "Minas, não enciclopédias.",
      summary: "Muitos times rodam /init e dão commit no arquivo AGENTS gerado. Um estudo da ETH-Zurich em 47 projetos mostrou o oposto da ajuda: a correção caiu 2% e o custo de tokens subiu 20–23%. Mantenha apenas as regras que o agente não pode inferir do código; apague o resto.",
      stat0: "correção (escrito por LLM)",
      stat1: "custo de tokens (escrito por LLM)"
    },
    "clean-up-tools": {
      name: "Limpe suas ferramentas",
      tagline: "O schema de cada ferramenta viaja em cada passo.",
      summary: "O MCP deixa o Copilot usar ferramentas externas — mas cada ferramenta ativada envia seu schema ao modelo. O schema viaja em todo passo do agente. Com 188 ferramentas ativadas, uma tarefa de 30 passos queima 330.000 tokens só com schemas.",
      stat0: "ferramentas após auditoria",
      stat1: "tokens economizados / dia"
    },
    "usage-limits": {
      name: "Limites de uso e excedente",
      tagline: "Limite a conta antes que a conta limite você.",
      summary: "A última alavanca não é sobre tokens — é sobre o medidor. Configure limites de excedente, entenda quais ações contam contra a cota e revise os cenários de orçamento para encontrar padrões que mantêm o time abaixo do teto sem estrangular o trabalho produtivo.",
      stat0: "razão de excedente saudável",
      stat1: "base não controlada"
    }
  },
  ext: {
    eyebrow: "Projetado para extensão",
    title:   "Pronto para o futuro por construção",
    intro:   "O Token-optimizer é orientado a dados por design. Cenários, preços, playbook e conteúdo do diagrama vivem em arquivos declarativos — a camada de UI os lê, nunca os codifica.",
    archHead:"A arquitetura — três camadas",
    cfgHead: "Arquivos de configuração e dados",
    snippetTitle: "Adicionar um cenário",
    snippetTag:   "sem mudanças no código das views",
    principlesHead: "Princípios de engenharia aplicados"
  }
});
