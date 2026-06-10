/* French (fr). Mirrors the English key set. */
window.TO = window.TO || {};
window.TO.i18n.register("fr", {
  app: {
    name: "Token-optimizer",
    title: "Token-optimizer · Comprendre et chiffrer l'optimisation de tokens pour les charges IA",
    tagline: "Comprendre, visualiser et chiffrer l'optimisation des tokens pour les charges de travail IA.",
    homeAria: "Accueil de {{name}}",
    toggleTheme: "Changer le thème",
    toggleNav: "Afficher/masquer la navigation",
    language: "Langue",
    backToQuickGuide: "Retour au guide rapide",
    primaryNav: "Principale"
  },
  nav: {
    home: "Accueil",
    scenarios: "Scénarios Context Rot",
    diagram: "Cadre",
    calculator: "Calculateur",
    playbook: "Playbook",
    extensibility: "Extensibilité"
  },
  footer: {
    note: "Token-optimizer · une démonstration statique, pilotée par les données. Les chiffres sont indicatifs, synthétisés à partir des sources citées GitHub Copilot et Anthropic. Mesurez votre propre référence avant de citer des chiffres.",
    disclaimer: "Ce contenu a été rédigé par Microsoft Asia Developer GBB et s'appuie sur la documentation GitHub Copilot publiquement disponible. Il n'a pas été validé pour toutes les configurations prises en charge. Bien que l'équipe s'efforce en permanence de rester alignée sur la dernière documentation, il est conseillé aux utilisateurs de vérifier les détails par rapport à la documentation officielle de GitHub avant de prendre toute décision."
  },
  hero: {
    kicker: "Facturation à l'usage · l'ère du token",
    title: "Chaque token est une ligne sur la facture.",
    titleAccent: "Faites-en sorte que chacun le mérite.",
    subtitle: "Le codage avec IA est passé d'une facturation par siège à une facturation par token. Token-optimizer transforme ce changement en quelque chose de visible, comparable et actionnable — scénarios, cadre interactif, calculateur de prix et playbook de choix de modèle.",
    cta: {
      scenarios: "Explorer les scénarios",
      calculator: "Comparer les modèles",
      playbook: "Lancer le playbook"
    }
  },
  home: {
    tokenEconomy: "Économie du token",
    tokenTypesTitle: "Trois types de token, trois comportements de coût",
    tokenTypesLead: "Chaque tour facturé comporte trois couloirs. Chacun répond à un levier différent — attaquez celui qui domine votre facture.",
    whatsInside: "Au programme",
    waysTitle: "Explorez l'optimisation de tokens",
    pipelineAria: "Diagramme animé : de nombreux tokens d'entrée convergent via un optimiseur vers moins de tokens de sortie plus lumineux",
    feature: {
      scenarios: { title: "Explorateur de scénarios", body: "Scénarios de Context Rot — identifiez les problèmes et les enseignements.", open: "Ouvrir l'explorateur →" },
      diagram:   { title: "Le cadre",                 body: "Une carte interactive : six moteurs de coût, six piliers de discipline, des résultats mesurables.", open: "Ouvrir le cadre →" },
      calculator:{ title: "Calculateur de coût",      body: "Chiffrez un tour sur chaque modèle, comparez côte à côte et voyez l'impact en crédits IA.", open: "Ouvrir le calculateur →" },
      playbook:  { title: "Playbook de modèles",      body: "Répondez à six questions ; obtenez une stratégie de modèle et les techniques d'optimisation adaptées.", open: "Ouvrir le playbook →" }
    }
  },
  stats: {
    label0: "Réduction de tokens à pleine adoption",
    note0:  "~37–44 % sans perte mesurable de productivité",
    label1: "Multiplicateur effectif de licence",
    note1:  "Même licence, ~1,6–1,8× de travail utile",
    label2: "Ratio coût sortie vs entrée",
    note2:  "La sortie est le couloir cher — 4–8×",
    label3: "Moins cher pour les tokens en cache",
    note3:  "Un préfixe stable est facturé à ~10 % de l'entrée"
  },
  tokenTypes: {
    input:  { name: "Entrée", cost: "Tarif standard",         behavior: "Facturé à chaque tour — fichiers, prompt, historique, schémas d'outils, system prompt.", lever: "Compresser · cadrer le contexte" },
    cached: { name: "Cache",  cost: "~10 % de l'entrée",       behavior: "Un préfixe identique octet à octet réutilisé entre appels obtient ~90 % de remise.", lever: "Réutiliser · préfixe stable" },
    output: { name: "Sortie", cost: "Le plus élevé — 4–8× entrée", behavior: "La réponse visible plus la trace de raisonnement invisible.", lever: "Restreindre · raisonnement ajusté" }
  },
  leverWord: "Levier",
  diagram: {
    stage1Eyebrow: "Étape 1 · Diagnostic",
    stage1Title:   "Ce qui pilote réellement vos dépenses en tokens",
    stage1Lead:    "Six moteurs de coût, classés par impact. Cinq sur six sont des choix d'ingénierie — c'est ce qui rend ce problème gagnable.",
    stage2Eyebrow: "Étape 2 · Le cadre",
    stage2Title:   "Six piliers de discipline du token",
    stage2Lead:    "Sélectionnez un pilier pour voir son principe, son levier principal et les scénarios couverts. Les piliers se composent — ils ne s'additionnent pas.",
    stage3Eyebrow: "Étape 3 · Résultats",
    stage3Title:   "Ce qu'apporte une adoption disciplinée",
    emptyPanel:    "Sélectionnez un pilier sur la carte pour explorer son principe, son levier et ses scénarios.",
    primaryLever:  "Levier principal",
    contribution:  "Contribution à la réduction totale",
    scenariosHere: "Scénarios de ce pilier",
    hubAria:       "Carte interactive des six piliers de discipline du token"
  },
  scenarios: {
    eyebrow: "Explorateur de scénarios",
    title:   "Où les tokens partent en fumée — et comment l'arrêter",
    lead:    "Chaque scénario associe le problème à la technique d'optimisation, un schéma avant/après et l'enseignement business.",
    search:  "Rechercher des scénarios…",
    searchAria: "Rechercher des scénarios",
    filterAria: "Filtrer les scénarios par catégorie",
    all:     "Tous",
    empty:   "Aucun scénario ne correspond à ce filtre.",
    back:    "← Tous les scénarios",
    open:    "Détail →",
    problem: "Le problème",
    whyHigh: "Pourquoi la consommation est élevée",
    techniques: "Techniques d'optimisation",
    impact:  "Impact attendu",
    takeaway:"Enseignement business",
    recommendation: "Recommandation",
    modelFit:"Modèle adapté",
    pillars: "Piliers du cadre",
    before:  "Avant",
    after:   "Après",
    expensive:"Cher",
    efficient:"Efficace"
  },
  calc: {
    eyebrow: "Calculateur de coût et de prix",
    title:   "Chiffrez un tour. Comparez tous les modèles.",
    lead:    "Saisissez un mélange de tokens, choisissez les modèles à comparer, et voyez le coût, les crédits IA et la part d'enveloppe mensuelle consommée par une session.",
    tokenMix: "Mélange de tokens",
    quickFill:"Préréglages",
    inputTokens: "Tokens d'entrée",
    cachedTokens:"Tokens en cache",
    outputTokens:"Tokens de sortie",
    sessionTurns:"Tours de la session",
    reasoningEffort:"Effort de raisonnement",
    plan: "Plan",
    autoLabel:"Remise Auto Mode",
    autoHint: "Remise ~10 % sur le multiplicateur de tokens",
    modelsToCompare:"Modèles à comparer",
    included:"inclus",
    presets: {
      qa: "Q&R rapide",
      refactor: "Refactor quotidien",
      agent: "Tâche d'agent",
      session: "Longue session"
    }
  },
  playbook: {
    eyebrow: "Playbook d'optimisation des tokens",
    title:   "Dix leviers pour dépenser moins par token utile",
    intro:   "Dix leviers, tirés du Playbook d'optimisation des tokens, pour transformer chaque token en travail utile. Parcourez les cartes pour l'idée principale ; ouvrez un levier pour le détail, les tableaux et les motifs de flux derrière.",
    explore: "Explorer le levier ↗",
    openAria:"Ouvrir le levier {{num}} : {{name}}",
    backToLevers: "Retour aux leviers",
    backToTen:    "← Retour aux dix leviers",
    counter: "Levier {{num}} sur 10",
    heroAlt: "{{name}} — visuel du playbook source"
  },
  lever: {
    "prompt-compression": {
      name: "Compression du prompt",
      tagline: "Retirez les mots qui ne portent pas d'information.",
      summary: "Conservez les termes techniques exacts. Supprimez le remplissage poli. Une requête polie de 40 tokens devient une instruction « caveman » de 10 tokens — même sens, ~75 % de coût en moins. Choisissez le niveau de compression adapté au risque.",
      stat0: "économie max d'entrée",
      stat1: "niveaux de compression"
    },
    "choose-language": {
      name: "Choisir la bonne langue",
      tagline: "L'anglais est presque toujours le tokeniseur le moins cher.",
      summary: "L'intuition dit que le chinois est moins cher car chaque caractère porte plus de sens — mais la heatmap de Komatsuzaki sur 6 grands modèles × 9 langues montre que l'anglais est le moins cher dans la plupart des cas. Les tokeniseurs varient : Gemini et Qwen sont les plus efficaces en non-anglais ; Anthropic et Kimi sont les plus chers.",
      stat0: "référence anglaise",
      stat1: "chinois sur modèles chinois"
    },
    "manage-context": {
      name: "Gérez votre contexte",
      tagline: "Divisez les règles en trois couches ; mettez en cache le préfixe stable.",
      summary: "Un fichier copilot-instructions géant est chargé à chaque tour. Divisez-le en trois couches : règles toujours actives pour le style et les limites de sortie ; règles conditionnelles chargées uniquement pour les fichiers correspondants (via applyTo) ; et règles à la demande invoquées par leur nom. Gardez le préfixe stable et démarrez souvent de nouveaux chats.",
      stat0: "coût du préfixe en cache",
      stat1: "tokens après 20 tours"
    },
    "output-control": {
      name: "Contrôle de la sortie",
      tagline: "Une courte règle, payée une fois — des réponses courtes pour toujours.",
      summary: "La sortie coûte 4–8× plus que l'entrée selon le modèle. Une seule phrase dans vos instructions système plafonne la longueur de la réponse pour toujours. Les règles sont courtes, les économies sont grandes — et il ne faut les écrire qu'une fois.",
      stat0: "coût sortie vs entrée",
      stat1: "économies d'une seule règle"
    },
    "choose-mode": {
      name: "Choisir le bon mode",
      tagline: "Ask, Plan, Agent — adaptez le mode à la question.",
      summary: "Copilot a trois modes. Ask est un appel unique pour des recherches rapides. Plan est un appel unique pour concevoir une solution avant de coder. Agent est 5–25 appels en une tâche — pour les gros travaux uniquement. L'erreur la plus chère est de lancer Agent avec un prompt vague.",
      stat0: "coût Agent vs Ask",
      stat1: "tokens Agent / tâche"
    },
    "phased-workflow": {
      name: "Phases, agents personnalisés, skills, sous-agents",
      tagline: "Choisissez le bon conteneur pour le travail.",
      summary: "Travaillez par phases (Rechercher → Planifier → Implémenter) avec des fenêtres de contexte fraîches entre elles. Utilisez des agents personnalisés pour verrouiller un rôle et réduire les outils. Utilisez des skills pour un contexte chargé à la demande. Utilisez des sous-agents pour garder la session principale légère.",
      stat0: "phases par fonctionnalité",
      stat1: "fenêtre de contexte par phase"
    },
    "choose-model": {
      name: "Choisir le bon modèle",
      tagline: "Mixez les modèles. Planifiez avec le grand, codez avec le petit.",
      summary: "Opus coûte ~1,7× le prix de Sonnet sur GitHub Copilot. Sur 30 tours : tout Sonnet coûte 30 unités, tout Opus 50, mais une stratégie mixte atterrit à ~22,8. Laissez le modèle cher réfléchir. Laissez le modèle bon marché taper.",
      stat0: "Opus vs Sonnet",
      stat1: "mixte vs tout Sonnet"
    },
    "agents-file": {
      name: "Gérez votre fichier AGENTS",
      tagline: "Des mines, pas des encyclopédies.",
      summary: "Beaucoup d'équipes lancent /init et livrent le fichier AGENTS auto-généré. Une étude de l'ETH-Zurich sur 47 projets a montré l'effet inverse : la justesse a baissé de 2 %, le coût en tokens a grimpé de 20–23 %. Gardez les règles que l'agent ne peut pas déduire du code ; supprimez tout le reste.",
      stat0: "justesse (écrit par LLM)",
      stat1: "coût en tokens (écrit par LLM)"
    },
    "clean-up-tools": {
      name: "Nettoyez vos outils",
      tagline: "Le schéma de chaque outil voyage à chaque étape.",
      summary: "MCP permet à Copilot d'utiliser des outils externes — mais chaque outil activé envoie son schéma au modèle. Le schéma voyage à chaque étape d'agent. Avec 188 outils activés, une tâche de 30 étapes brûle 330 000 tokens rien qu'en schémas.",
      stat0: "outils après audit",
      stat1: "tokens économisés / jour"
    },
    "usage-limits": {
      name: "Limites d'usage et dépassements",
      tagline: "Plafonnez la facture avant qu'elle ne vous plafonne.",
      summary: "Le dernier levier ne porte pas sur les tokens — il porte sur le compteur. Réglez des plafonds de dépassement, comprenez quelles actions comptent contre l'enveloppe, et passez en revue les scénarios budgétaires pour les motifs qui maintiennent les équipes sous leur plafond sans étouffer le travail productif.",
      stat0: "ratio de dépassement sain",
      stat1: "référence non contrôlée"
    }
  },
  ext: {
    eyebrow: "Conçu pour s'étendre",
    title:   "Prêt pour l'avenir par construction",
    intro:   "Token-optimizer est piloté par les données par conception. Scénarios, tarifs, playbook et contenu du diagramme vivent dans des fichiers déclaratifs — la couche UI les lit, elle ne les code jamais en dur.",
    archHead:"L'architecture — trois couches",
    cfgHead: "Fichiers de configuration et de données",
    snippetTitle: "Ajouter un scénario",
    snippetTag:   "aucun changement de code de vue",
    principlesHead: "Principes d'ingénierie appliqués"
  }
});
