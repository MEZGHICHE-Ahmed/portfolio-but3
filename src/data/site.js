// ---------------------------------------------------------------------------
// Données d'identité, profil, compétences techniques et contact.
// Centralisé ici pour être édité facilement sans toucher aux composants.
// ---------------------------------------------------------------------------

export const profil = {
  prenom: "Ahmed",
  nom: "Mezghiche",
  nomComplet: "Ahmed Mezghiche",
  initiales: "AM",
  titre: "Étudiant en informatique",
  sousTitre: "Assistant du directeur technique chez Cloud Inspire",
  localisation: "Île-de-France",
  accroche:
    "Je porte des produits logiciels de bout en bout : comprendre le besoin, concevoir l'architecture, développer, déployer, puis suivre le service une fois qu'il tourne devant de vrais utilisateurs. En alternance chez Cloud Inspire, sur des applications d'intelligence artificielle hébergées chez le client.",
  // Présentation longue (page Profil)
  bio: [
    "Je suis en dernière année de BUT Informatique (Bac+3) à l'IUT de Créteil-Vitry, dans le parcours « Réalisation d'applications : conception, développement, validation », que je suis en apprentissage chez Cloud Inspire — une entreprise qui déploie des infrastructures cloud privées et des agents d'intelligence artificielle chez ses clients, en s'appuyant exclusivement sur des technologies open source.",
    "Mon poste s'intitule assistant du directeur technique. Dans une grande entreprise, cela recouvrirait de la coordination ; dans une structure de cette taille, cela veut dire prendre en charge la réalisation effective des produits — l'analyse du besoin, l'architecture, le développement serveur et les interfaces, le déploiement, puis le suivi des incidents et des évolutions. Cette année, ce périmètre a couvert quatre missions : une plateforme commerciale augmentée par l'IA aujourd'hui en production, un agent vocal téléphonique éprouvé sur des appels réels, la migration d'une agence nationale de cybersécurité vers une plateforme d'hébergement souveraine que nous exploitons, et une plateforme de transcription et d'audiodescription automatique pour l'audiovisuel.",
    "Ce que cette autonomie m'a appris tient en deux convictions. La première : on n'accorde jamais à un modèle d'intelligence artificielle une confiance qu'il ne mérite pas — on expose son degré de certitude à l'utilisateur et on lui donne les moyens de corriger. La seconde : un programme qui affirme avoir anonymisé des données ne constitue pas une preuve ; seule une vérification indépendante, menée selon une autre logique, apporte cette garantie. Ce site est la démonstration, traces à l'appui, du niveau Confirmé sur les trois compétences terminales de mon parcours.",
  ],
  objectif:
    "Poursuivre en Master Informatique — parcours Réseaux, Cybersécurité, Cloud et Automatisation — en alternance, pour approfondir la sécurité applicative et les architectures distribuées.",
};

export const contact = {
  email: "ahmedmez94320@gmail.com",
  telephone: "",
  afficherTelephone: false,
  linkedin: "https://www.linkedin.com/in/ahmed-mezghiche/",
  github: "https://github.com/RedOne777",
};

// Compétences techniques regroupées par familles
export const competencesTechniques = [
  {
    famille: "Langages",
    items: ["Python", "JavaScript", "Java", "C", "SQL"],
  },
  {
    famille: "Back-end & API",
    items: ["FastAPI", "Flask", "NestJS", "Spring Boot", "Prisma", "Celery", "RabbitMQ"],
  },
  {
    famille: "Front-end & mobile",
    items: ["Vue.js", "React", "React Native / Expo", "Tailwind CSS"],
  },
  {
    famille: "Données",
    items: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "MinIO"],
  },
  {
    famille: "Intelligence artificielle",
    items: ["Ollama", "Whisper", "LiveKit", "STT / TTS", "Modèles de vision", "LangChain"],
  },
  {
    famille: "Infrastructure & exploitation",
    items: ["Docker", "Ansible", "GitLab CI", "GitHub Actions", "Grafana + Loki", "Caddy / WAF", "Restic", "pytest"],
  },
];

export const atouts = [
  "Autonomie complète sur un produit, du besoin à la production",
  "Conception d'architectures distribuées et résilientes",
  "Intégration raisonnée de modèles d'IA, avec garde-fous explicites",
  "Sécurité applicative : cloisonnement, chiffrement, données personnelles",
  "Exploitation d'infrastructures : supervision, sauvegardes, migration sans interruption de service",
  "Communication avec des interlocuteurs non informaticiens",
];

// Pas de valeur chiffrée : un niveau de langue s'énonce, il ne se quantifie pas
// en pourcentage — et le portfolio proscrit les barres de compétence.
export const langues = [
  { langue: "Français", niveau: "Langue maternelle" },
  { langue: "Anglais", niveau: "Courant" },
  { langue: "Arabe", niveau: "Intermédiaire" },
];

// Navigation principale
export const navLinks = [
  { to: "/profil", label: "Profil" },
  { to: "/competences", label: "Compétences" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/parcours", label: "Parcours" },
];

// Repères chiffrés affichés sur la page d'accueil
export const chiffresCles = [
  { valeur: "2 ans", label: "d'alternance en entreprise" },
  { valeur: "5", label: "missions en entreprise" },
  { valeur: "2", label: "produits en production" },
  { valeur: "Bac+3", label: "BUT Informatique · 2026" },
];
