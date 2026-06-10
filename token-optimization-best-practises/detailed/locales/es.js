/* Spanish (es). Mirrors the English key set in detailed/locales/en.js. */
window.TO = window.TO || {};
window.TO.i18n.register("es", {
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · Entiende y calcula la optimización de tokens para cargas de IA",
    tagline: "Entiende, visualiza y calcula la optimización de tokens para cargas de trabajo de IA.",
    homeAria: "Inicio de {{name}}",
    toggleTheme: "Cambiar tema de color",
    toggleNav: "Mostrar/ocultar navegación",
    language: "Idioma",
    backToQuickGuide: "Volver a la guía rápida",
    primaryNav: "Principal"
  },
  nav: {
    home: "Inicio",
    scenarios: "Escenarios de “Context Rot”",
    diagram: "Marco",
    calculator: "Calculadora",
    playbook: "Playbook",
    extensibility: "Extensibilidad"
  },
  footer: {
    note: "Token-optimizer · una demostración estática y basada en datos. Las cifras son ilustrativas, sintetizadas a partir del material original de GitHub Copilot y Anthropic. Mide tu propia base antes de citar números.",
    disclaimer: "Este contenido ha sido elaborado por Microsoft Asia Developer GBB y se basa en la documentación públicamente disponible de GitHub Copilot. No ha sido validado en todas las configuraciones admitidas. Aunque el equipo se esfuerza continuamente por mantenerse alineado con la documentación más reciente, se recomienda a los usuarios verificar los detalles con la documentación oficial de GitHub antes de tomar cualquier decisión."
  },
  hero: {
    kicker: "Facturación por uso · la era del token",
    title: "Cada token es una partida del recibo.",
    titleAccent: "Haz que cada uno se gane su lugar.",
    subtitle: "La programación con IA pasó de cobrarse por usuario a cobrarse por token. Token-optimizer convierte ese cambio en algo que puedes ver, comparar y accionar — escenarios, un marco interactivo, una calculadora de precios y un playbook para elegir modelo.",
    cta: {
      scenarios: "Explorar escenarios",
      calculator: "Comparar coste de modelos",
      playbook: "Ejecutar el playbook"
    }
  },
  home: {
    tokenEconomy: "Economía del token",
    tokenTypesTitle: "Tres tipos de token, tres comportamientos de coste",
    tokenTypesLead: "Cada turno facturado tiene tres carriles. Cada uno responde a una palanca distinta — ataca el carril que domina tu factura.",
    whatsInside: "Qué hay dentro",
    waysTitle: "Explora la optimización de tokens",
    pipelineAria: "Diagrama animado: muchos tokens de entrada convergen a través de un optimizador en menos tokens de salida más brillantes",
    feature: {
      scenarios: { title: "Explorador de escenarios", body: "Escenarios de Context Rot — identifica los problemas y las conclusiones.", open: "Abrir el explorador de escenarios →" },
      diagram:   { title: "El marco",                 body: "Un mapa interactivo: seis impulsores de coste, seis pilares de disciplina del token, resultados medibles.", open: "Abrir el marco →" },
      calculator:{ title: "Calculadora de coste",     body: "Calcula el coste de un turno en cada modelo, compáralos y ve el impacto en créditos de IA.", open: "Abrir la calculadora →" },
      playbook:  { title: "Playbook de modelos",      body: "Responde seis preguntas; obtén una estrategia de modelo y las técnicas de optimización que encajan.", open: "Abrir el playbook →" }
    }
  },
  stats: {
    label0: "Reducción de tokens con adopción total",
    note0:  "~37–44% sin pérdida medible de productividad",
    label1: "Multiplicador efectivo de licencia",
    note1:  "Misma licencia, ~1,6–1,8× trabajo útil",
    label2: "Ratio coste salida vs entrada",
    note2:  "La salida es el carril caro — 4–8×",
    label3: "Más barato para tokens en caché",
    note3:  "Un prefijo estable se factura al ~10% del coste de entrada"
  },
  tokenTypes: {
    input:  { name: "Entrada", cost: "Tarifa estándar",        behavior: "Se factura cada turno — archivos, prompt, historial, esquemas de herramientas, system prompt.", lever: "Comprimir · acotar contexto" },
    cached: { name: "Caché",   cost: "~10% de la entrada",      behavior: "Un prefijo idéntico byte a byte reutilizado entre llamadas obtiene ~90% de descuento.", lever: "Reutilizar · prefijo estable" },
    output: { name: "Salida",  cost: "Más alto — 4–8× entrada", behavior: "La respuesta visible más la cadena de razonamiento invisible.", lever: "Restringir · razonamiento ajustado" }
  },
  leverWord: "Palanca",
  diagram: {
    stage1Eyebrow: "Etapa 1 · Diagnóstico",
    stage1Title:   "Qué impulsa realmente tu gasto en tokens",
    stage1Lead:    "Seis impulsores de coste, ordenados por impacto. Cinco de los seis son decisiones de ingeniería — por eso es un problema ganable.",
    stage2Eyebrow: "Etapa 2 · El marco",
    stage2Title:   "Seis pilares de disciplina del token",
    stage2Lead:    "Elige un pilar para ver su principio, su palanca principal y los escenarios que cubre. Los pilares se componen — no solo se suman.",
    stage3Eyebrow: "Etapa 3 · Resultados",
    stage3Title:   "Lo que ofrece una adopción disciplinada",
    emptyPanel:    "Selecciona un pilar en el mapa para explorar su principio, palanca y escenarios.",
    primaryLever:  "Palanca principal",
    contribution:  "Contribución a la reducción total",
    scenariosHere: "Escenarios de este pilar",
    hubAria:       "Mapa interactivo de los seis pilares de disciplina del token"
  },
  scenarios: {
    eyebrow: "Explorador de escenarios",
    title:   "Dónde se queman los tokens — y cómo evitarlo",
    lead:    "Cada escenario empareja el problema con la técnica de optimización, un patrón antes/después y la conclusión de negocio.",
    search:  "Buscar escenarios…",
    searchAria: "Buscar escenarios",
    filterAria: "Filtrar escenarios por categoría",
    all:     "Todos",
    empty:   "Ningún escenario coincide con ese filtro.",
    back:    "← Todos los escenarios",
    open:    "Detalle →",
    problem: "El problema",
    whyHigh: "Por qué el consumo es alto",
    techniques: "Técnicas de optimización",
    impact:  "Impacto esperado",
    takeaway:"Conclusión de negocio",
    recommendation: "Recomendación",
    modelFit:"Modelo recomendado",
    pillars: "Pilares del marco",
    before:  "Antes",
    after:   "Después",
    expensive:"Caro",
    efficient:"Eficiente"
  },
  calc: {
    eyebrow: "Calculadora de coste y precios",
    title:   "Calcula un turno. Compara cada modelo.",
    lead:    "Introduce una mezcla de tokens, elige los modelos a comparar y mira el coste, los créditos de IA y cuánto consume una sesión de tu cuota mensual.",
    tokenMix: "Mezcla de tokens",
    quickFill:"Relleno rápido",
    inputTokens: "Tokens de entrada",
    cachedTokens:"Tokens en caché",
    outputTokens:"Tokens de salida",
    sessionTurns:"Turnos de la sesión",
    reasoningEffort:"Esfuerzo de razonamiento",
    plan: "Plan",
    autoLabel:"Descuento Auto Mode",
    autoHint: "Descuento ~10% sobre el multiplicador de tokens",
    modelsToCompare:"Modelos a comparar",
    included:"incluido",
    presets: {
      qa: "Preguntas rápidas",
      refactor: "Refactor diario",
      agent: "Tarea de agente",
      session: "Sesión larga"
    }
  },
  playbook: {
    eyebrow: "Playbook de optimización de tokens",
    title:   "Diez palancas para gastar menos por token útil",
    intro:   "Diez palancas, extraídas del Playbook de Optimización de Tokens, para convertir cada token en trabajo útil. Recorre las tarjetas para la idea principal; abre una palanca para el detalle, las tablas y los patrones de flujo que hay detrás.",
    explore: "Explorar palanca ↗",
    openAria:"Abrir palanca {{num}}: {{name}}",
    backToLevers: "Volver a las palancas",
    backToTen:    "← Volver a las diez palancas",
    counter: "Palanca {{num}} de 10",
    heroAlt: "{{name}} — imagen del playbook original"
  },
  lever: {
    "prompt-compression": {
      name: "Compresión de prompts",
      tagline: "Quita las palabras que no llevan información.",
      summary: "Conserva los términos técnicos exactos. Elimina el relleno cortés. Una petición educada de 40 tokens se convierte en una instrucción tipo 'caveman' de 10 tokens — mismo significado, ~75% menos coste. Elige el nivel de compresión que se ajusta al riesgo.",
      stat0: "ahorro máximo de entrada",
      stat1: "niveles de compresión"
    },
    "choose-language": {
      name: "Elige el idioma correcto",
      tagline: "El inglés es casi siempre el tokenizador más barato.",
      summary: "La intuición dice que el chino es más barato porque cada carácter lleva más significado — pero el heatmap de Komatsuzaki de 6 modelos × 9 idiomas muestra que el inglés es el más barato en la mayoría de casos. Los tokenizadores varían: Gemini y Qwen son los más eficientes en idiomas no ingleses; Anthropic y Kimi son los más caros.",
      stat0: "base en inglés",
      stat1: "chino en modelos chinos"
    },
    "manage-context": {
      name: "Gestiona tu contexto",
      tagline: "Divide las reglas en tres capas; cachea el prefijo estable.",
      summary: "Un archivo copilot-instructions gigante se carga en cada turno. Divídelo en tres capas: reglas siempre activas para estilo y límites de salida; reglas condicionales que solo se cargan en archivos coincidentes (vía applyTo); y reglas bajo demanda invocadas por nombre. Mantén estable el prefijo cacheable y empieza chats nuevos a menudo.",
      stat0: "coste de prefijo cacheado",
      stat1: "tokens tras 20 turnos"
    },
    "output-control": {
      name: "Control de la salida",
      tagline: "Una regla corta, pagada una vez — respuestas breves siempre.",
      summary: "La salida cuesta 4–8× más que la entrada según el modelo. Una sola frase en tus instrucciones de sistema limita la longitud de respuesta para siempre. Las reglas son cortas, el ahorro es grande — y solo hay que escribirlas una vez.",
      stat0: "coste salida vs entrada",
      stat1: "ahorro con una sola regla"
    },
    "choose-mode": {
      name: "Elige el modo adecuado",
      tagline: "Ask, Plan, Agent — ajusta el modo a la pregunta.",
      summary: "Copilot tiene tres modos. Ask es una sola llamada para consultas rápidas. Plan es una sola llamada para diseñar una solución antes de construir. Agent son 5–25 llamadas en una tarea — solo para trabajos grandes. El error más caro es arrancar Agent con un prompt vago.",
      stat0: "coste Agent vs Ask",
      stat1: "tokens Agent / tarea"
    },
    "phased-workflow": {
      name: "Fases, agentes personalizados, skills, sub-agentes",
      tagline: "Elige el contenedor adecuado para cada trabajo.",
      summary: "Trabaja por fases (Investigar → Planificar → Implementar) con ventanas de contexto nuevas entre ellas. Usa agentes personalizados para fijar un rol y reducir herramientas. Usa skills para contexto cargado bajo demanda. Usa sub-agentes para mantener ligera la sesión principal.",
      stat0: "fases por feature",
      stat1: "ventana de contexto por fase"
    },
    "choose-model": {
      name: "Elige el modelo correcto",
      tagline: "Mezcla modelos. Planifica con el grande, construye con el pequeño.",
      summary: "Opus cuesta ~1,7× más que Sonnet en GitHub Copilot. En 30 turnos: solo Sonnet cuesta 30 unidades, solo Opus 50, pero una estrategia mixta queda en ~22,8. Deja pensar al modelo caro. Deja teclear al modelo barato.",
      stat0: "Opus vs Sonnet",
      stat1: "mixto vs solo Sonnet"
    },
    "agents-file": {
      name: "Gestiona tu archivo AGENTS",
      tagline: "Minas, no enciclopedias.",
      summary: "Muchos equipos ejecutan /init y publican el archivo AGENTS auto-generado. Un estudio de ETH-Zurich con 47 proyectos mostró el efecto contrario: la corrección bajó un 2% y el coste en tokens subió un 20–23%. Conserva las reglas que el agente no puede inferir del código; borra todo lo demás.",
      stat0: "corrección (escrito por LLM)",
      stat1: "coste en tokens (escrito por LLM)"
    },
    "clean-up-tools": {
      name: "Limpia tus herramientas",
      tagline: "El esquema de cada herramienta viaja en cada paso.",
      summary: "MCP permite a Copilot usar herramientas externas — pero cada herramienta activada envía su esquema al modelo. El esquema viaja en cada paso del agente. Con 188 herramientas activadas, una tarea de 30 pasos quema 330.000 tokens solo en esquemas.",
      stat0: "herramientas tras auditoría",
      stat1: "tokens ahorrados / día"
    },
    "usage-limits": {
      name: "Límites y excedentes de uso",
      tagline: "Limita la factura antes de que la factura te limite.",
      summary: "La última palanca no va de tokens — va del contador. Configura topes de excedentes, entiende qué acciones consumen cuota y revisa los escenarios de presupuesto para encontrar patrones que mantengan al equipo por debajo del tope sin frenar el trabajo productivo.",
      stat0: "ratio sano de excedentes",
      stat1: "base sin control"
    }
  },
  ext: {
    eyebrow: "Diseñado para extender",
    title:   "Preparado para el futuro por construcción",
    intro:   "Token-optimizer es data-driven por diseño. Escenarios, precios, el playbook y el contenido del diagrama viven en archivos declarativos — la capa de UI los lee, nunca los codifica.",
    archHead:"La arquitectura — tres capas",
    cfgHead: "Archivos de configuración y datos",
    snippetTitle: "Añadir un escenario",
    snippetTag:   "sin cambios en el código de vistas",
    principlesHead: "Principios de ingeniería aplicados"
  }
});
