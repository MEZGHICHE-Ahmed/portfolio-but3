// ---------------------------------------------------------------------------
// COMPÉTENCES — BUT Informatique, spécialité « Réalisation d'applications :
// conception, développement, validation ».
//
// Trois compétences sont approfondies jusqu'au niveau le plus avancé en
// dernière année : développer une application, optimiser des applications,
// collaborer en équipe. Les trois autres s'arrêtent au niveau intermédiaire.
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const competences = [
  // =========================================================================
  // C1 — RÉALISER UN DÉVELOPPEMENT D'APPLICATION
  // =========================================================================
  {
    id: "c1",
    slug: "developper-une-application",
    color: "#6fa7d4",
    colorClass: "c1",
    verbe: "Réaliser",
    titre: "Développer une application",
    titreOfficiel: "Réaliser un développement d'application",
    niveauNum: 3,
    niveau: "Confirmé",
    niveauTitre:
      "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)",
    tagline:
      "Concevoir une architecture qui tient sur plusieurs supports, la livrer en production et la faire vivre.",
    definition:
      "Développer — concevoir, coder, tester et intégrer — une solution informatique pour un client, du besoin exprimé jusqu'au service utilisé.",
    casUsage: [
      "Élaborer une application informatique",
      "Faire évoluer une application informatique",
      "Maintenir en conditions opérationnelles une application",
    ],
    // Les savoir-faire visés par cette compétence en dernière année.
    apprentissages: [
      "Choisir et implémenter les architectures adaptées",
      "Faire évoluer une application existante",
      "Intégrer des solutions dans un environnement de production",
    ],
    // Le cadre dans lequel la compétence s'exerce.
    composantes: [
      "En respectant les besoins décrits par le client",
      "En appliquant les principes algorithmiques",
      "En veillant à la qualité du code et à sa documentation",
      "En choisissant les ressources techniques appropriées",
    ],
    traces: [
      {
        titre: "Mika — une architecture mobile + web + serveur, en production",
        contexte: "Alternance Cloud Inspire — plateforme commerciale augmentée par l'IA",
        type: "Expérience professionnelle",
        stack: ["FastAPI", "Vue.js", "React Native / Expo", "PostgreSQL", "Faktory", "MinIO"],
        points: [
          "Une architecture choisie pour ses contraintes : mobile pour les commerciaux en salon, web pour les responsables, serveur pour tous les traitements",
          "Intégrée en production réelle : déployée, surveillée et corrigée face à de vrais utilisateurs",
          "Un choix d'architecture validé par les faits : le modèle de vision a été retiré par son fournisseur en cours de projet, la correction a tenu en quelques lignes",
        ],
        preuves: [{ label: "Étude de cas complète", url: "/realisations/mika" }],
      },
      {
        titre: "Gateway IAM — faire évoluer une chaîne de provisionnement",
        contexte: "SAÉ de 3ᵉ année — provisionnement d'identités vers cinq types de cibles",
        type: "Projet universitaire",
        stack: ["FastAPI", "RabbitMQ", "Ansible", "Docker", "GitHub Actions"],
        points: [
          "Une chaîne asynchrone conçue d'après les contraintes : file de messages, orchestrateur, connecteurs par type de cible",
          "Le projet a évolué par l'usage : catalogue de cibles réécrit en déclaratif quand chaque ajout obligeait à modifier le code",
          "Traité comme un service d'exploitation : reprise sur échec, journal d'audit, déploiement automatisé",
        ],
        preuves: [{ label: "Dépôt du projet", url: GITHUB }],
      },
      {
        titre: "Plateforme souveraine — intégrer et exploiter en production",
        contexte: "Alternance Cloud Inspire — hébergement pour une agence nationale de cybersécurité",
        type: "Expérience professionnelle",
        stack: ["Docker Compose", "Caddy + WAF", "GitLab CI", "Grafana + Loki", "Restic"],
        points: [
          "Sept machines virtuelles exploitées pour un client gouvernemental : site, messagerie, forge logicielle, supervision, sauvegardes",
          "Chaque service embarque sa protection et sa supervision : il se déploie et se retire indépendamment des autres",
          "Migration progressive — le site d'abord, la messagerie ensuite — avec retour arrière documenté à chaque phase",
        ],
        preuves: [{ label: "Documentation d'architecture (confidentielle)", url: null }],
      },
    ],
    bilan:
      "Je suis passé d'une application web mono-support livrée sur mon poste à une architecture mobile + web + serveur que j'ai conçue seul, mise en production et maintenue face à de vrais utilisateurs. Le saut du niveau 2 au niveau 3 tient dans cette phrase : je ne choisis plus une architecture parce qu'elle est correcte, mais parce qu'elle rend possible ce qui devra changer.",
    pistes: [
      "Approfondir la conception d'architectures logicielles.",
      "Renforcer la qualité et les tests avant mise en production.",
      "Élargir ma pratique du développement multi-supports.",
    ],
  },

  // =========================================================================
  // C2 — OPTIMISER DES APPLICATIONS
  // =========================================================================
  {
    id: "c2",
    slug: "optimiser-des-applications",
    color: "#d2a24c",
    colorClass: "c2",
    verbe: "Optimiser",
    titre: "Optimiser des applications",
    titreOfficiel: "Optimiser des applications",
    niveauNum: 3,
    niveau: "Confirmé",
    niveauTitre: "Analyser et optimiser des applications",
    tagline:
      "Trancher par la mesure plutôt que par la documentation ou l'intuition.",
    definition:
      "Proposer des applications optimisées selon des critères explicites — temps d'exécution, précision, consommation de ressources — et justifier chaque arbitrage.",
    casUsage: [
      "Améliorer les performances des programmes dans des contextes contraints",
      "Limiter l'impact environnemental d'une application",
      "Mettre en place des applications adaptées et innovantes",
    ],
    apprentissages: [
      "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire…)",
      "Profiler, analyser et justifier le comportement d'un code existant",
      "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéo, parallélisme, calcul formel…)",
    ],
    composantes: [
      "En formalisant et modélisant des situations complexes",
      "En recensant les algorithmes et les structures de données usuels",
      "En s'appuyant sur des schémas de raisonnement",
      "En justifiant les choix et validant les résultats",
    ],
    traces: [
      {
        titre: "Agent vocal — reconnaître un nom mal transcrit",
        contexte: "Alternance Cloud Inspire — agent vocal, recherche floue de noms",
        type: "Expérience professionnelle",
        stack: ["Python", "Similarité de chaînes", "Calibration sur données réelles"],
        points: [
          "Trois modes d'erreur observés sur des appels réels, trois méthodes essayées : seule la comparaison multi-angles a résisté aux trois",
          "Méthode et bibliothèque choisies puis calibrées sur des cas réels — pas d'après la documentation",
          "Le seuil est un arbitrage justifié : proposer un nom à tort coûte une question, ne pas reconnaître un technicien coûte un transfert",
        ],
        preuves: [{ label: "Étude de cas complète", url: "/realisations/agent-vocal" }],
      },
      {
        titre: "Audiodescription — réduire le coût d'un pipeline de modèles lourds",
        contexte: "Alternance Cloud Inspire — transcription et audiodescription pour l'audiovisuel",
        type: "Expérience professionnelle",
        stack: ["Celery", "Whisper", "Modèles de vision", "Détection de scènes"],
        points: [
          "Coût anticipé avant d'écrire le code : décrire chaque image d'une heure de vidéo était inabordable",
          "Détection de scènes puis trois images par scène : le nombre d'appels au modèle dépend du contenu, pas de la durée",
          "Transcription et analyse visuelle en parallèle, workers séparés par ressource critique (GPU, léger, synthèse vocale)",
        ],
        preuves: [{ label: "Documentation technique (confidentielle)", url: null }],
      },
      {
        titre: "Mika — anticiper la latence perçue plutôt que la subir",
        contexte: "Alternance Cloud Inspire — traitement asynchrone",
        type: "Expérience professionnelle",
        stack: ["Faktory", "FastAPI", "Traitement asynchrone"],
        points: [
          "Dix à soixante secondes d'analyse par carte : l'attente perçue a été anticipée avant la première ligne de code",
          "Traitement en file asynchrone : le téléphone reçoit une réponse immédiate, le commercial enchaîne la carte suivante",
          "La file apporte la robustesse en prime : trois relances automatiques, état de chaque travail suivi en base",
        ],
        preuves: [{ label: "Étude de cas complète", url: "/realisations/mika" }],
      },
    ],
    bilan:
      "Je suis passé de la mesure d'algorithmes sur des jeux de test, en formation, à l'optimisation de systèmes qui tournent devant de vrais utilisateurs. Ce qui a changé n'est pas la technique mais la discipline : je formule le critère avant de choisir, je mesure au lieu de supposer, et j'accepte qu'une méthode élégante soit écartée par un essai qui la contredit.",
    pistes: [
      "Approfondir les méthodes de mesure de performance.",
      "Élargir ma connaissance des structures de données et des algorithmes.",
      "Intégrer le coût des ressources aux critères de choix.",
    ],
  },

  // =========================================================================
  // C6 — COLLABORER AU SEIN D'UNE ÉQUIPE INFORMATIQUE
  // =========================================================================
  {
    id: "c6",
    slug: "collaborer-manager",
    color: "#63b189",
    colorClass: "c6",
    verbe: "Collaborer",
    titre: "Collaborer en équipe",
    titreOfficiel: "Collaborer au sein d'une équipe informatique",
    niveauNum: 3,
    niveau: "Confirmé",
    niveauTitre: "Manager une équipe informatique",
    tagline:
      "Veille, conduite du changement et communication : ce qui entoure le code et le rend adoptable.",
    definition:
      "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique pluridisciplinaire.",
    casUsage: [
      "Lancer un nouveau projet en équipe",
      "Organiser son travail en relation avec celui de son équipe",
      "Élaborer, gérer et transmettre de l'information",
    ],
    apprentissages: [
      "Organiser et partager une veille numérique",
      "Identifier les enjeux de l'économie de l'innovation numérique",
      "Guider la conduite du changement informatique au sein d'une organisation",
      "Accompagner le management de projet informatique",
    ],
    composantes: [
      "En inscrivant sa démarche au sein d'une équipe pluridisciplinaire",
      "En accompagnant la mise en œuvre des évolutions informatiques",
      "En veillant au respect des contraintes juridiques",
      "En développant une communication efficace et collaborative",
    ],
    // Cadrage assumé : je porte mes projets seul, je démontre donc ce que le
    // niveau 3 vise réellement — veille, innovation, changement, management.
    cadrage:
      "Chez Cloud Inspire, je porte mes projets en autonomie, au contact direct du client. Je démontre donc cette compétence par ce que le niveau 3 vise précisément — organiser une veille et la partager, comprendre les enjeux économiques du numérique, accompagner un changement dans une organisation, soutenir la conduite d'un projet — en m'appuyant également sur mon alternance de 2ᵉ année, menée au sein d'une équipe constituée.",
    traces: [
      {
        titre: "Une veille technique organisée et réinvestie dans les produits",
        contexte: "Alternance Cloud Inspire — démarche continue",
        type: "Veille",
        stack: ["Modèles hébergeables", "LiveKit", "STT / TTS"],
        points: [
          "Une veille organisée par les questions que le produit pose : modèles hébergeables, communication temps réel, synthèse vocale",
          "Réinvestie directement : elle a décidé de l'architecture de l'agent vocal et permis de changer de fournisseur quand l'un a fait défaut",
          "Partagée par une documentation de fond systématique : le raisonnement derrière chaque décision, pas seulement son résultat",
        ],
        preuves: [{ label: "Documentations techniques des projets", url: null }],
      },
      {
        titre: "Souveraineté, conformité et enjeux économiques du numérique",
        contexte: "Alternance Cloud Inspire et ressources de 3ᵉ année",
        type: "Compétence transverse",
        stack: ["RGPD", "NIS2 / DORA", "Open source"],
        points: [
          "Les enjeux économiques vécus de l'intérieur : l'enfermement propriétaire est ce qui empêche un client de changer de fournisseur",
          "Le durcissement réglementaire européen (NIS2, DORA) compris comme le marché même de mon entreprise",
          "Travail avec la déléguée à la protection des données — la pseudonymisation des jeux de données du POC en est le résultat concret",
        ],
        preuves: [{ label: "Rapport d'activité 2025-2026", url: null }],
      },
      {
        titre: "Plateforme souveraine — conduire une migration pour un client institutionnel",
        contexte: "Alternance Cloud Inspire — gouvernance et conduite du changement",
        type: "Expérience professionnelle",
        stack: ["Plan de travail", "Comité de pilotage", "Runbooks"],
        points: [
          "Chaque décision technique présentée et validée en comité de pilotage, dans un plan de travail écrit pour des décideurs",
          "Une migration conduite sans big-bang — le site d'abord, la messagerie ensuite — parce que la confiance se perd plus vite qu'elle ne se gagne",
          "Des runbooks d'exploitation pour que d'autres fassent fonctionner la plateforme sans moi",
        ],
        preuves: [{ label: "Plan de travail de la mission (confidentiel)", url: null }],
      },
    ],
    bilan:
      "Je suis passé du travail de groupe scolaire à une posture où le code n'est qu'une partie du travail : il faut qu'une évolution soit adoptée, qu'une décision soit comprise, qu'un cadre juridique soit respecté. L'autonomie complète dont je dispose chez Cloud Inspire m'a placé au contact direct du client et des enjeux de l'entreprise.",
    pistes: [
      "Développer ma pratique du travail en équipe.",
      "Approfondir la conduite de projet et la relation client.",
      "Renforcer le partage de connaissances et la documentation.",
    ],
  },
];

// Accès rapide par slug (utilisé par la page de détail)
export const competenceBySlug = (slug) => competences.find((c) => c.slug === slug);

// ---------------------------------------------------------------------------
// VUE D'ENSEMBLE — les six compétences du diplôme.
// niveauNum : 2 = niveau atteint en fin de 2ᵉ année, 3 = niveau atteint en 3ᵉ.
// Trois d'entre elles atteignent le niveau 3 : c'est le cœur de ma spécialisation.
// ---------------------------------------------------------------------------
export const toutesLesCompetences = [
  {
    titre: "Réaliser un développement d'application",
    plain: "Adapter des applications sur un ensemble de supports.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#6fa7d4",
    focus: true,
    id: "c1",
    slug: "developper-une-application",
  },
  {
    titre: "Optimiser des applications",
    plain: "Analyser et optimiser des applications.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#d2a24c",
    focus: true,
    id: "c2",
    slug: "optimiser-des-applications",
  },
  {
    titre: "Administrer des systèmes communicants",
    plain: "Déployer des services dans une architecture réseau.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#9a9280",
  },
  {
    titre: "Gérer des données de l'information",
    plain: "Optimiser une base, interagir avec une application et mettre en œuvre la sécurité.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#9a9280",
  },
  {
    titre: "Conduire un projet",
    plain: "Appliquer une démarche de suivi de projet selon les besoins métiers.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#9a9280",
  },
  {
    titre: "Collaborer dans une équipe",
    plain: "Manager une équipe informatique.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#63b189",
    focus: true,
    id: "c6",
    slug: "collaborer-manager",
  },
];

// ---------------------------------------------------------------------------
// Les compétences de niveau 2 — atteintes en 2ᵉ année, réinvesties cette année.
// Affichées en complément, pour présenter l'ensemble du diplôme.
// ---------------------------------------------------------------------------
export const competencesNiveau2 = [
  {
    titre: "Administrer des systèmes informatiques communicants complexes",
    niveauTitre: "Déployer des services dans une architecture réseau",
    reinvesti:
      "Construction et exploitation d'une plateforme d'hébergement souveraine — sept machines virtuelles, pare-feu applicatif par service, supervision centralisée des journaux et métriques, sauvegardes avec rétention —, conteneurisation, déploiement automatisé par Ansible, intégration continue.",
    ressources: [
      "Programmation système",
      "Réseaux",
      "Virtualisation",
      "Automatisation",
    ],
  },
  {
    titre: "Gérer des données de l'information",
    niveauTitre:
      "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
    reinvesti:
      "Modélisation et migrations PostgreSQL via Prisma, cloisonnement multi-organisations à quatre niveaux, chiffrement des secrets applicatifs, hachage des mots de passe, bases documentaires et clé-valeur.",
    ressources: [
      "Bases de données",
      "SQL avancé",
      "Nouvelles bases de données",
      "Cryptographie",
    ],
  },
  {
    titre: "Conduire un projet",
    niveauTitre:
      "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
    reinvesti:
      "Traduction de besoins métiers en spécifications techniques, arbitrage des priorités avec le maître d'apprentissage, suivi des incidents en conditions réelles et gestion du risque de dépendance externe.",
    ressources: [
      "Analyse et conception (UML)",
      "Gestion de projet",
      "Droit du numérique",
      "Communication professionnelle",
    ],
  },
];
