// ---------------------------------------------------------------------------
// Parcours — formation et expériences professionnelles (ordre antéchronologique).
// ---------------------------------------------------------------------------

export const formation = [
  {
    periode: "2023 – 2026",
    titre: "BUT Informatique — parcours Réalisation d'applications",
    lieu: "IUT de Créteil-Vitry",
    description:
      "Parcours A : conception, développement, validation. Architecture logicielle, développement multi-supports, qualité et optimisation, bases de données, virtualisation et automatisation.",
    actuel: true,
  },
  {
    periode: "2020 – 2023",
    titre: "Baccalauréat général",
    lieu: "Île-de-France",
    description:
      "Spécialités scientifiques, avec une orientation numérique qui a conduit au choix de l'informatique.",
  },
];

export const experiences = [
  {
    periode: "Sept. 2025 – Présent",
    titre: "Assistant du directeur technique — Alternance",
    lieu: "Cloud Inspire",
    type: "Alternance",
    actuel: true,
    points: [
      "Conception et mise en production de Mika, plateforme commerciale augmentée par l'IA (mobile, web, serveur)",
      "Réalisation d'un agent vocal téléphonique d'autorisation d'accès, éprouvé sur appels réels",
      "Développement d'une passerelle de provisionnement d'identités vers cinq types de services cibles",
      "Prise en charge complète du cycle : analyse du besoin, architecture, développement, déploiement, suivi",
    ],
  },
  {
    periode: "Sept. 2024 – Août 2025",
    titre: "Développeur fullstack — Alternance",
    lieu: "SNCF Voyageurs",
    type: "Alternance",
    points: [
      "Maintenance et évolutions d'applications internes au sein d'une équipe constituée",
      "Travail sur un existant : conventions, revues de code, intégration",
      "Première expérience du travail collectif outillé (branches, intégration continue)",
    ],
  },
];

// ---------------------------------------------------------------------------
// Frise de formation — les ressources et SAÉ marquantes, semestre par semestre,
// rattachées aux compétences qu'elles ont nourries.
// ---------------------------------------------------------------------------
export const frise = [
  {
    annee: "1ʳᵉ année",
    semestres: "S1 – S2",
    titre: "Les fondations",
    contenu:
      "Algorithmique et complexité, programmation objet, premières bases de données, première application web complète en architecture MVC.",
    marquants: [
      "SAÉ Comparaison d'approches algorithmiques — tris mesurés en Python et en C",
      "SAÉ Site Hydrométrie — application web Flask complète",
      "SAÉ Création d'une base de données à partir de données ouvertes",
    ],
    competences: ["C1", "C2", "C4"],
  },
  {
    annee: "2ᵉ année",
    semestres: "S3 – S4",
    titre: "L'élargissement",
    contenu:
      "Conception UML, programmation système, réseaux, cryptographie, architecture logicielle et patrons de conception, développement mobile et jeu vidéo, optimisation. En parallèle, première alternance chez SNCF Voyageurs.",
    marquants: [
      "Architecture logicielle — patrons de conception appliqués",
      "Programmation système — processus, exécution concurrente",
      "Réseaux — maquette d'infrastructure d'entreprise",
      "Alternance SNCF Voyageurs — faire évoluer un existant en équipe",
    ],
    competences: ["C1", "C2", "C3", "C5", "C6"],
  },
  {
    annee: "3ᵉ année",
    semestres: "S5 – S6",
    titre: "La spécialisation",
    contenu:
      "Qualité algorithmique et de développement, programmation avancée et multimédia, automatisation et virtualisation avancée, bases de données nouvelle génération, aide à la décision, management, droit du numérique. En parallèle, alternance chez Cloud Inspire.",
    marquants: [
      "Automatisation — conteneurisation et chaîne d'intégration continue",
      "Nouvelles bases de données — documentaire, clé-valeur, graphe",
      "Développement avancé — API REST et microservices",
      "Maintenance applicative — faire vivre une application livrée",
      "Alternance Cloud Inspire — deux produits conçus et mis en service",
    ],
    competences: ["C1", "C2", "C6"],
  },
];
