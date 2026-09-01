// ---------------------------------------------------------------------------
// Réalisations — missions professionnelles et projets universitaires.
// Le champ `competences` renvoie aux pages détaillées (c1, c2, c6).
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const projets = [
  {
    id: "mika",
    type: "pro",
    titre: "Mika",
    sousTitre: "Cloud Inspire — plateforme commerciale augmentée par l'IA",
    categorie: "Alternance · 3ᵉ année",
    periode: "2025 – 2026",
    vedette: true,
    enProduction: true,
    description:
      "Un commercial photographie une carte de visite sur un salon ; les informations en sont extraites automatiquement, enrichies, puis poussées dans le logiciel de gestion commerciale du client. Une application mobile, une interface web et un serveur, en production et utilisés.",
    points: [
      "Trois supports pour un même produit : mobile (React Native / Expo), web (Vue.js) et serveur (FastAPI)",
      "Traitement asynchrone par file : le téléphone n'attend jamais les dix à soixante secondes d'analyse",
      "Modèles d'IA accédés via une interface standard — basculer vers un modèle hébergé chez le client ne change qu'un paramètre",
      "Multi-organisations : cloisonnement des données à quatre niveaux, vérifié en base et non déclaré par le client",
      "Images hors base dans un stockage objet, secrets chiffrés, mots de passe hachés, authentification déléguée",
    ],
    stack: ["FastAPI", "Vue.js", "React Native", "PostgreSQL", "Prisma", "MinIO", "Faktory", "Ollama", "Zitadel"],
    competences: ["c1", "c2", "c6"],
    etudeDeCas: "/realisations/mika",
    lien: null,
  },
  {
    id: "agent-vocal",
    type: "pro",
    titre: "Agent vocal téléphonique",
    sousTitre: "Cloud Inspire — contrôle d'accès de sites industriels",
    categorie: "Alternance · 3ᵉ année",
    periode: "2026",
    vedette: true,
    confidentiel: true,
    description:
      "Une preuve de concept d'agent téléphonique qui répond, comprend son interlocuteur et décide d'autoriser ou non l'accès à un site industriel — à la place d'un opérateur qui traite deux cent cinquante appels identiques par jour.",
    points: [
      "La décision reste dans le code, jamais dans le modèle : le LLM extrait quatre informations, il ne tranche rien",
      "Une règle métier posée avant le code : l'agent ne refuse jamais sur un doute, il transfère à un humain",
      "Recherche floue de noms calibrée sur des appels réels, après l'échec constaté de deux autres méthodes",
      "Attribution concurrente de numéros de permis garantie par verrouillage de ligne et transaction",
      "Jeux de données pseudonymisés, vérifiés par un second programme indépendant du générateur",
    ],
    stack: ["Python", "LiveKit", "PostgreSQL", "STT / LLM / TTS", "Similarité de chaînes"],
    competences: ["c1", "c2", "c6"],
    etudeDeCas: "/realisations/agent-vocal",
    lien: null,
  },
  {
    id: "anssi",
    type: "pro",
    titre: "Plateforme d'hébergement souveraine",
    sousTitre: "Cloud Inspire — agence nationale de cybersécurité d'un État étranger",
    categorie: "Alternance · 3ᵉ année",
    periode: "2026",
    vedette: true,
    confidentiel: true,
    enProduction: true,
    description:
      "Migration du site institutionnel et de la messagerie d'une agence gouvernementale de cybersécurité depuis un hébergement mutualisé vers une plateforme cloud souveraine, construite puis exploitée de bout en bout : hébergement web, messagerie, chaîne de livraison logicielle, supervision et sauvegardes.",
    points: [
      "Sept machines virtuelles, un rôle chacune : site (préproduction et production), messagerie, forge logicielle, registre d'images, supervision",
      "Un pare-feu applicatif sur chaque machine plutôt qu'un boîtier central : chaque service porte sa propre protection et se déploie indépendamment",
      "Supervision centralisée des journaux et métriques de toute la plateforme, tableaux de bord et alertes",
      "Sauvegardes quotidiennes avec trente jours de rétention, et instantané automatique avant chaque déploiement",
      "Migration progressive — le site d'abord, la messagerie ensuite — avec indicateurs, validateurs et retour arrière documenté à chaque phase",
    ],
    stack: ["Docker Compose", "Caddy + WAF", "CrowdSec", "GitLab CI", "Harbor", "Grafana + Loki", "Restic", "Ansible"],
    competences: ["c1", "c6"],
    lien: null,
  },
  {
    id: "mas",
    type: "pro",
    titre: "Transcription & audiodescription par IA",
    sousTitre: "Cloud Inspire — société de production audiovisuelle",
    categorie: "Alternance · 3ᵉ année",
    periode: "2026",
    vedette: true,
    confidentiel: true,
    description:
      "Une plateforme qui reçoit une vidéo et produit sa transcription horodatée ainsi qu'une audiodescription générée automatiquement, pour des contenus destinés à des diffuseurs nationaux. Trois traitements lourds orchestrés en parallèle, avec synthèse vocale optionnelle du résultat.",
    points: [
      "Pipeline en trois étapes : transcription de l'audio, analyse visuelle scène par scène, consolidation par un second modèle de langage",
      "Découpage par détection de scènes : trois images par scène et un appel groupé au modèle de vision — pas un appel par image",
      "Transcription et analyse visuelle exécutées en parallèle, la consolidation ne démarrant qu'une fois les deux terminées",
      "Workers séparés selon leur ressource critique (GPU, traitements légers, synthèse vocale), chacun avec sa file dédiée",
      "Vidéos et livrables dans un stockage objet, interface web de suivi, intégration continue GitLab",
    ],
    stack: ["FastAPI", "Celery + Redis", "Whisper", "Modèles de vision", "LangChain", "PostgreSQL", "MinIO", "React", "GitLab CI"],
    competences: ["c1", "c2"],
    lien: null,
  },
  {
    id: "gateway-iam",
    type: "uni",
    titre: "Gateway IAM",
    sousTitre: "IUT de Créteil-Vitry — provisionnement d'identités",
    categorie: "SAÉ · 3ᵉ année",
    periode: "2026",
    description:
      "Une passerelle qui reçoit les demandes de provisionnement émises par un référentiel d'identités et les applique sur cinq types de services cibles, avec validation, reprise sur échec et journal d'audit complet.",
    points: [
      "Chaîne asynchrone : file de messages, orchestrateur, connecteurs par type de cible",
      "Cinq cibles supportées : MySQL, PostgreSQL, MongoDB, LDAP et Odoo",
      "Catalogue de cibles déclaratif en YAML — ajouter une base ne demande plus de modifier le code",
      "Reprise avec backoff, file d'échec, journal d'audit et points de contrôle d'exploitation",
      "Déploiement automatisé par Ansible, intégration continue et tests unitaires",
    ],
    stack: ["FastAPI", "RabbitMQ", "Prisma", "PostgreSQL", "Ansible", "Docker", "GitHub Actions"],
    competences: ["c1", "c2"],
    lien: { github: GITHUB },
  },
  {
    id: "sncf",
    type: "pro",
    titre: "Applications internes",
    sousTitre: "SNCF Voyageurs — développement fullstack",
    categorie: "Alternance · 2ᵉ année",
    periode: "2024 – 2025",
    confidentiel: true,
    description:
      "Maintenance et développement de nouvelles fonctionnalités sur des applications internes, au sein d'une équipe constituée. Ma première confrontation à du code que je n'avais pas écrit.",
    points: [
      "Évolutions et corrections sur un existant, avec ses conventions et son intention d'origine",
      "Travail en équipe : branches, intégration, revues de code",
      "Découverte de ce qui sépare une contribution qui fonctionne d'une contribution acceptée",
    ],
    stack: ["Développement fullstack", "Git", "Travail en équipe"],
    competences: ["c1", "c6"],
    lien: null,
  },
];
