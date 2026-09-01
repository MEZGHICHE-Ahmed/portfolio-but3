// ---------------------------------------------------------------------------
// COMPÉTENCES — BUT Informatique, parcours A « Réalisation d'applications :
// conception, développement, validation ». Libellés, niveaux, composantes
// essentielles et apprentissages critiques repris du référentiel national
// (ACD Informatique, V34A). En 3ᵉ année, parcours A, trois compétences
// atteignent le niveau 3 « Confirmé » : C1 Réaliser un développement
// d'application, C2 Optimiser des applications, C6 Collaborer en équipe.
// ---------------------------------------------------------------------------

const GITHUB = "https://github.com/RedOne777";

export const competences = [
  // =========================================================================
  // C1 — RÉALISER UN DÉVELOPPEMENT D'APPLICATION
  // =========================================================================
  {
    id: "c1",
    code: "C1",
    slug: "developper-une-application",
    color: "#2f6f9f",
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
    // Apprentissages critiques — niveau 3, parcours A (référentiel V34A)
    apprentissages: [
      "Choisir et implémenter les architectures adaptées",
      "Faire évoluer une application existante",
      "Intégrer des solutions dans un environnement de production",
    ],
    // Composantes essentielles — le cadre dans lequel la compétence s'exerce
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
        stack: ["FastAPI", "Vue.js", "React Native / Expo", "PostgreSQL", "Prisma", "MinIO", "Faktory", "Ollama", "Zitadel"],
        analyse:
          "Ma réalisation la plus complète, et celle qui porte le niveau 3 : un même produit décliné sur trois supports — une application mobile pour les commerciaux en salon, une interface web pour les responsables, un serveur qui porte tous les traitements. J'ai conçu l'architecture seul, puis je l'ai exploitée en production. Le découpage en éléments indépendants n'est pas un effet de mode : chaque frontière répond à une contrainte constatée. Les images ne vont pas en base mais dans MinIO, parce qu'une base qui grossit de photos jamais interrogées rend les sauvegardes lentes. L'analyse d'une carte prend dix à soixante secondes, donc elle part dans une file Faktory et le téléphone reçoit une réponse immédiate — sur un salon, cela change complètement l'usage. L'accès aux modèles passe par Ollama, dont l'interface est identique à celle des fournisseurs commerciaux : basculer vers un modèle hébergé chez le client ne demande qu'un paramètre. Cette indépendance n'était pas théorique — le modèle de vision a été retiré sans préavis par son fournisseur en cours de projet, et la correction a tenu en quelques lignes parce que le nom du modèle n'était pas figé dans le code. Ma piste : la file locale hors-ligne sur mobile, un salon étant précisément un lieu où le réseau sature.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/mika" }],
      },
      {
        titre: "Coppelis — rendre l'agent indépendant du canal d'appel",
        contexte: "Alternance Cloud Inspire — POC d'agent vocal téléphonique",
        type: "Expérience professionnelle",
        stack: ["LiveKit", "Python", "PostgreSQL", "STT / LLM / TTS"],
        analyse:
          "Une conversation téléphonique impose des contraintes qu'on ne rencontre pas dans une application classique : l'audio circule dans les deux sens sans latence perceptible, il faut détecter la fin de parole et gérer les interruptions. J'ai bâti le service sur LiveKit, ce qui rend l'agent indépendant du moyen par lequel l'appel arrive. Le POC a été validé depuis un navigateur, mais la même logique fonctionnera sur une ligne téléphonique classique sans réécrire le dialogue. C'est un choix d'architecture assumé au départ, pas une conséquence heureuse — et c'est exactement ce que vise l'apprentissage critique « choisir et implémenter les architectures adaptées » : décider tôt de ce qui devra pouvoir changer plus tard.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/coppelis" }],
      },
      {
        titre: "Gateway IAM — s'insérer dans une chaîne existante",
        contexte: "SAÉ de 3ᵉ année — provisionnement d'identités",
        type: "Projet universitaire",
        stack: ["FastAPI", "RabbitMQ", "Prisma", "Ansible", "Docker", "GitHub Actions", "MidPoint"],
        analyse:
          "Ici l'enjeu n'était pas de partir d'une page blanche mais de m'insérer dans une chaîne existante : MidPoint émet des demandes de provisionnement, elles transitent par RabbitMQ, ma passerelle les valide et les applique sur cinq types de cibles (MySQL, PostgreSQL, MongoDB, LDAP, Odoo). J'ai traité le projet comme s'il devait tenir en exploitation : reprise avec backoff et file d'échec, journal d'audit complet, points de contrôle « /health » et « /metrics ». La décision dont je suis le plus satisfait est le catalogue de cibles en YAML : ajouter une nouvelle base d'un type déjà supporté se fait en déclaratif, sans toucher au code. J'ai réécrit le projet dans ce sens après avoir constaté que chaque nouvelle base m'obligeait à modifier la logique — la modularité s'est imposée par l'usage, pas par principe.",
        preuves: [{ label: "Dépôt du projet", url: GITHUB }],
      },
      {
        titre: "SNCF Voyageurs — faire évoluer une application existante en équipe",
        contexte: "Alternance de 2ᵉ année — développement fullstack",
        type: "Expérience professionnelle",
        stack: ["Développement fullstack", "Git", "Applications internes"],
        analyse:
          "Ma première confrontation à du code que je n'avais pas écrit, dans une équipe constituée. J'y ai fait de la maintenance et des évolutions sur des applications internes — un exercice très différent du projet neuf : il faut comprendre l'intention d'origine avant de modifier quoi que ce soit, et accepter des conventions qui ne sont pas les siennes. Rétrospectivement, c'est l'étape qui manquait entre les SAÉ encadrées et l'autonomie complète de cette année : j'y ai appris à lire l'existant, ce qui m'a servi directement quand il a fallu reprendre et réécrire la configuration de Gateway IAM.",
        preuves: [{ label: "Rapport d'activité 2024-2025", url: null }],
      },
      {
        titre: "Site Hydrométrie — la première application web complète",
        contexte: "SAÉ de 1ʳᵉ année — IUT de Créteil-Vitry",
        type: "Projet universitaire",
        stack: ["Flask", "MVC", "SQLite", "SVG"],
        analyse:
          "Le point de départ, que je garde ici volontairement pour donner la mesure du chemin. Une application web mono-support, un découpage MVC appliqué parce qu'on me l'avait enseigné, une base SQLite, des cartes en SVG. Je savais faire fonctionner une application sur mon poste. Ce que je ne savais pas encore, et qui fait toute la différence avec Mika, c'est qu'une application n'a de valeur qu'une fois déployée, accessible et surveillée.",
        preuves: [{ label: "Travaux de formation", url: null }],
      },
    ],
    bilan:
      "Je suis passé d'une application web mono-support livrée sur mon poste à une architecture mobile + web + serveur que j'ai conçue seul, mise en production et maintenue face à de vrais utilisateurs. Le saut du niveau 2 au niveau 3 tient dans cette phrase : je ne choisis plus une architecture parce qu'elle est correcte, mais parce qu'elle rend possible ce qui devra changer.",
    pistes: [
      "Mettre en place la file locale hors-ligne de l'application mobile (usage en salon, réseau saturé).",
      "Basculer les modèles d'IA vers l'infrastructure du client pour tenir pleinement la promesse de souveraineté.",
      "Renforcer la couverture de tests d'intégration bout en bout avant chaque mise en production.",
    ],
  },

  // =========================================================================
  // C2 — OPTIMISER DES APPLICATIONS
  // =========================================================================
  {
    id: "c2",
    code: "C2",
    slug: "optimiser-des-applications",
    color: "#6b5aa0",
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
        titre: "Coppelis — reconnaître un nom mal transcrit : trois méthodes, une seule qui tient",
        contexte: "Alternance Cloud Inspire — agent vocal, recherche floue de noms",
        type: "Expérience professionnelle",
        stack: ["Python", "Similarité de chaînes", "Calibration sur données réelles"],
        analyse:
          "La difficulté la plus tenace du projet, et ma meilleure preuve sur cette compétence. Au téléphone, depuis un environnement bruyant, les noms propres se transcrivent mal, et j'ai observé trois modes d'erreur distincts en conditions réelles : des lettres perdues, des frontières entre mots déplacées, et des lettres déplacées à l'intérieur d'un mot. Une comparaison stricte échoue dans les trois cas. J'ai d'abord essayé une comparaison phonétique, puis une distance d'édition : les deux ont échoué sur le troisième cas, parce qu'elles reposent sur des séquences de caractères que le déplacement détruit. La méthode retenue compare le nom entendu au référentiel selon plusieurs angles simultanés, dont un qui trie les lettres par ordre alphabétique — ce qui rend la comparaison insensible à leur position. Le point que je défends le plus : le seuil de déclenchement a été calibré à partir de cas d'appels réels, pas fixé arbitrairement, et il est délibérément placé pour proposer un nom un peu trop souvent plutôt que pas assez. Proposer à tort coûte une question ; ne pas reconnaître un technicien légitime provoque un transfert évitable. Les deux erreurs ne se valent pas.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/coppelis" }],
      },
      {
        titre: "Coppelis — choisir une voix par la mesure, et prévoir sa panne",
        contexte: "Alternance Cloud Inspire — synthèse vocale",
        type: "Expérience professionnelle",
        stack: ["TTS", "Bancs d'écoute", "Mécanisme de secours"],
        analyse:
          "Le livrable d'un appel est un numéro de permis épelé qui doit être noté sans erreur : le choix de la voix engage donc directement le service. Trois solutions ont été écartées, chaque fois pour une raison constatée et non supposée. La première, retenue sur la foi d'un comparatif public, s'est révélée inaccessible depuis notre serveur — son dispositif anti-abus assimile les requêtes venant d'un centre de données à un contournement. La deuxième, séduisante parce qu'elle partageait la facturation du service de transcription, a été écartée après écoute d'un appel réel : le modèle ajoutait des hésitations de lui-même. La troisième, qu'une documentation présentait comme la seule à honorer le réglage de vitesse, ne produisait aucun son — un défaut qui aurait rendu l'agent totalement muet en production s'il n'avait pas été détecté avant la mise en service. La solution finale a été validée à l'écoute sur le texte réel de l'agent, parmi six voix candidates, et sa vitesse volontairement réduite. J'ai enfin ajouté un service de secours qui partage la facturation de la transcription : le filet ne coûte rien tant qu'il ne sert pas. C'est la démarche que je retiens de ce projet — trancher par la mesure, pas par la documentation.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/coppelis" }],
      },
      {
        titre: "Mika — anticiper la latence perçue plutôt que la subir",
        contexte: "Alternance Cloud Inspire — traitement asynchrone",
        type: "Expérience professionnelle",
        stack: ["Faktory", "FastAPI", "Traitement asynchrone", "Reprise sur échec"],
        analyse:
          "L'analyse d'une image par un modèle de vision demande entre dix et soixante secondes selon la charge. Garder la connexion du téléphone ouverte pendant ce temps posait deux problèmes que j'ai anticipés avant d'écrire la ligne : l'utilisateur reste immobilisé, et la moindre coupure de réseau mobile fait perdre le travail. Les traitements partent donc dans une file et sont exécutés par un programme séparé ; le serveur répond immédiatement et le commercial enchaîne la carte suivante. Le gain ne se mesure pas en temps de calcul — il est identique — mais en temps d'attente perçu, qui tombe à zéro. Le mécanisme apporte en prime une robustesse : un traitement qui échoue est relancé jusqu'à trois fois, et l'état de chaque travail est conservé en base pour que le mobile suive la progression.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/mika" }],
      },
      {
        titre: "Coppelis — attribuer un numéro unique sous appels concurrents",
        contexte: "Alternance Cloud Inspire — concurrence et intégrité",
        type: "Expérience professionnelle",
        stack: ["PostgreSQL", "Verrous de ligne", "Transactions"],
        analyse:
          "Le numéro de permis est tiré d'un compteur propre à chaque site. Avec deux cent cinquante appels par jour, deux appels simultanés lisant le même compteur attribueraient le même numéro à deux techniciens — inacceptable, puisque ce numéro est la preuve de l'autorisation. J'ai utilisé le verrouillage de ligne du moteur relationnel : la ligne du compteur concerné est verrouillée le temps de l'attribution, ce qui force les appels concurrents à attendre leur tour. Le point d'optimisation est que le verrou ne porte que sur la ligne du site concerné — les autres sites ne sont pas ralentis. L'attribution et l'écriture au journal sont par ailleurs dans une même transaction : sans cela, un numéro pourrait être communiqué sans qu'aucune trace n'en subsiste. C'est l'application directe de ce que le cours de bases de données appelle isolation, sur un cas où l'erreur aurait été visible depuis le terrain.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/coppelis" }],
      },
      {
        titre: "Vérifier une anonymisation par un second programme indépendant",
        contexte: "Alternance Cloud Inspire — protection des données personnelles",
        type: "Expérience professionnelle",
        stack: ["Python", "Pseudonymisation", "Vérification croisée"],
        analyse:
          "Déployer le POC sur un serveur exposé à Internet soulevait un problème que je n'avais pas anticipé : le référentiel contient des noms, téléphones et adresses de personnes réelles. J'ai produit des jeux pseudonymisés en conservant le format exact des fichiers d'origine, pour que les programmes d'import fonctionnent sans modification. Le point d'ingénierie qui compte : j'ai écrit deux programmes plutôt qu'un. Le premier génère, le second vérifie en sens inverse en cherchant les identités réelles dans l'intégralité des cellules produites. Cette vérification indépendante a détecté trois défauts du générateur. J'en ai tiré un principe que j'applique désormais partout : un programme qui affirme avoir anonymisé des données ne constitue pas une preuve — seule une vérification menée selon une logique différente apporte cette garantie.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/coppelis" }],
      },
      {
        titre: "Analyse de complexité en temps et en mémoire",
        contexte: "SAÉ de 1ʳᵉ année et ressource Qualité algorithmique de 3ᵉ année",
        type: "Projet universitaire",
        stack: ["C", "Python", "Tris & recherches", "Mesures comparées"],
        analyse:
          "Là où j'ai appris à mesurer. En première année, j'ai implémenté plusieurs tris en Python et en C, mesuré leurs temps sur des jeux de tailles croissantes dans le meilleur, le pire et le cas moyen, puis tracé les courbes pour les confronter aux complexités théoriques. La ressource Qualité algorithmique de cette année a repris l'exercice avec la mémoire en plus. Ces travaux paraissent scolaires à côté des traces précédentes, et ils le sont — mais c'est là que s'est ancré le réflexe qui structure tout le reste : une intuition de performance ne vaut rien tant qu'elle n'a pas été confrontée à une mesure.",
        preuves: [{ label: "Comptes rendus de TP", url: null }],
      },
    ],
    bilan:
      "Je suis passé de la mesure d'algorithmes de tri sur des jeux de test à l'optimisation de systèmes qui tournent devant de vrais utilisateurs. Ce qui a changé n'est pas la technique mais la discipline : je formule le critère avant de choisir, je mesure au lieu de supposer, et j'accepte qu'une méthode élégante soit écartée par un essai qui la contredit.",
    pistes: [
      "Évaluer finement le prototype à modèle audio unique de Coppelis, qui supprime deux étapes du pipeline.",
      "Systématiser le profilage avant optimisation plutôt que raisonner sur le code lu.",
      "Mesurer l'empreinte des traitements d'IA pour objectiver leur coût environnemental.",
    ],
  },

  // =========================================================================
  // C6 — COLLABORER AU SEIN D'UNE ÉQUIPE INFORMATIQUE
  // =========================================================================
  {
    id: "c6",
    code: "C6",
    slug: "collaborer-manager",
    color: "#2e8b6b",
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
      "Chez Cloud Inspire je porte mes projets seul : je ne peux pas démontrer cette compétence par l'encadrement d'une équipe, et je ne le prétends pas. Je la démontre par ce que le niveau 3 vise réellement — organiser une veille et la partager, comprendre les enjeux économiques du numérique, accompagner un changement dans une organisation, soutenir la conduite d'un projet — en m'appuyant aussi sur mon alternance de 2ᵉ année en équipe constituée.",
    traces: [
      {
        titre: "Coppelis — accompagner le remplacement d'un processus entièrement humain",
        contexte: "Alternance Cloud Inspire — conduite du changement",
        type: "Expérience professionnelle",
        stack: ["Conduite du changement", "Règle métier", "Transfert humain"],
        analyse:
          "Automatiser deux cent cinquante appels quotidiens, ce n'est pas un problème technique, c'est un changement qui touche des personnes : les opérateurs dont c'est le poste, et les techniciens qui dépendent de la réponse pour entrer sur un site. La règle qui structure tout le projet vient de là, et je l'ai posée avant d'écrire le code : l'agent ne refuse jamais un accès sur un doute, toute situation incertaine part vers un opérateur humain. Elle repose sur une asymétrie de coût que je trouve éclairante — un refus erroné immobilise un technicien devant un site où il avait le droit d'entrer, un transfert ne coûte qu'une minute de temps humain. Concevoir le système pour privilégier délibérément la seconde erreur, c'est accepter d'être moins performant sur le papier pour être adopté dans les faits. Sur Mika, la même logique m'a fait afficher un indice de confiance avec un code couleur et rendre chaque champ corrigeable : on ne demande pas à un commercial de faire confiance aveuglément à un modèle, on lui donne les moyens de le contredire.",
        preuves: [{ label: "Étude de cas complète", url: "/realisations/coppelis" }],
      },
      {
        titre: "SNCF Voyageurs — travailler dans une équipe constituée",
        contexte: "Alternance de 2ᵉ année — développement fullstack",
        type: "Expérience professionnelle",
        stack: ["Git", "Revues de code", "Organisation d'équipe"],
        analyse:
          "C'est ma trace la plus directe sur le volet collectif, et je l'assume comme telle : cette année chez Cloud Inspire je travaille seul, c'est en deuxième année que j'ai appris à m'insérer dans une équipe. J'y ai découvert ce que Git veut dire quand plusieurs personnes touchent au même code — branches, intégration, revues — et surtout qu'une contribution n'est pas terminée quand elle fonctionne, mais quand quelqu'un d'autre l'a comprise et acceptée. Ce que j'en retiens aujourd'hui structure ma manière de documenter : j'écris pour la personne qui reprendra le projet après moi, parce que j'ai été cette personne.",
        preuves: [{ label: "Rapport d'activité 2024-2025", url: null }],
      },
      {
        titre: "Une veille technique organisée et réinvestie dans les produits",
        contexte: "Alternance Cloud Inspire — démarche continue",
        type: "Veille",
        stack: ["Modèles hébergeables", "LiveKit", "STT / TTS", "Files de messages"],
        analyse:
          "Ma veille n'est pas un flux que je consomme, c'est une réponse à des questions que le produit me pose. Choisir un modèle d'IA hébergeable engageait la promesse de souveraineté de l'entreprise ; comparer les solutions de communication temps réel a décidé de l'architecture de Coppelis ; suivre les fournisseurs de synthèse vocale m'a permis de basculer quand l'un d'eux s'est révélé inutilisable. Le partage, lui, prend la forme d'une documentation de fond systématique : chaque projet a un document qui répond à « comment ça marche ? » sans ouvrir le code, avec le raisonnement derrière chaque décision et pas seulement son résultat. Ma piste assumée : ce partage est aujourd'hui écrit et passif ; il gagnerait à devenir une synthèse régulière et active auprès de l'équipe.",
        preuves: [{ label: "Documentations techniques des projets", url: null }],
      },
      {
        titre: "Souveraineté, conformité et enjeux économiques du numérique",
        contexte: "Alternance Cloud Inspire et ressources de 3ᵉ année",
        type: "Compétence transverse",
        stack: ["RGPD", "NIS2 / DORA", "Open source", "Droit du numérique"],
        analyse:
          "Travailler dans une entreprise dont le positionnement est la souveraineté numérique m'a obligé à comprendre l'économie qui l'entoure. L'enfermement propriétaire n'est pas un argument commercial abstrait : c'est ce qui fait qu'une entreprise ne peut plus changer de fournisseur sans réécrire ses applications, et c'est pourquoi je ne fige jamais dans le code une dépendance à un service extérieur. Le durcissement réglementaire européen — NIS2, DORA — déplace une exigence longtemps réservée aux grands comptes vers des entreprises qui n'ont pas de DSI pour y répondre : c'est exactement le segment de mon entreprise. Sur le plan juridique, j'ai travaillé avec la déléguée à la protection des données sur les traitements de données personnelles, ce qui a directement produit la pseudonymisation des jeux de données du POC. Les ressources Droit du numérique et Entrepreneuriat de cette année m'ont donné le vocabulaire de ce que je pratiquais déjà.",
        preuves: [{ label: "Rapport d'activité 2025-2026", url: null }],
      },
      {
        titre: "Accompagner la conduite d'un projet face au client",
        contexte: "Alternance Cloud Inspire — relation client et arbitrage",
        type: "Expérience professionnelle",
        stack: ["Recueil du besoin", "Arbitrage de priorités", "Communication non technique"],
        analyse:
          "Mon poste me place entre le besoin exprimé par un client et sa réalisation : les demandes me viennent de mon maître d'apprentissage après ses échanges commerciaux, et je dois les traduire en solution réalisable en identifiant les contraintes et les points à clarifier. J'ai appris deux choses que je ne soupçonnais pas. La première est que les blocages viennent bien plus souvent des dépendances extérieures — qualité des données transmises, disponibilité d'un service tiers, évolution d'un outil — que des difficultés de programmation. La seconde est qu'expliquer à un interlocuteur non informaticien pourquoi sa demande ne peut pas être satisfaite telle qu'elle est formulée est un exercice bien plus délicat que de l'exécuter, et bien plus utile. Sur le plan de l'organisation, je travaille sur un seul projet à la fois avec des points réguliers d'arbitrage — un choix pris après avoir constaté que le morcellement me coûtait plus que le changement de contexte.",
        preuves: [{ label: "Rapport d'activité 2025-2026", url: null }],
      },
    ],
    bilan:
      "Je suis passé du travail de groupe scolaire à une posture où le code n'est qu'une partie du travail : il faut qu'une évolution soit adoptée, qu'une décision soit comprise, qu'un cadre juridique soit respecté. Mon autonomie chez Cloud Inspire est réelle, et c'est aussi ma limite sur cette compétence — je l'assume et j'en fais une piste.",
    pistes: [
      "Formaliser ma veille en synthèses régulières partagées, plutôt qu'en documentation passive.",
      "Prendre un rôle de coordination affirmé sur un projet mené à plusieurs.",
      "Structurer l'accompagnement des utilisateurs (formation, support) au-delà de la documentation technique.",
    ],
  },
];

// Accès rapide par slug (utilisé par la page de détail)
export const competenceBySlug = (slug) => competences.find((c) => c.slug === slug);

// ---------------------------------------------------------------------------
// VUE D'ENSEMBLE — les 6 compétences du référentiel (parcours A).
// niveauNum : 2 = niveau atteint en fin de 2ᵉ année, 3 = niveau atteint en 3ᵉ.
// En parcours A, C1/C2/C6 sont poussées au niveau 3 (« cœur d'expertise »).
// ---------------------------------------------------------------------------
export const toutesLesCompetences = [
  {
    code: "C1",
    titre: "Réaliser un développement d'application",
    plain: "Niveau 3 — adapter des applications sur un ensemble de supports.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#2f6f9f",
    focus: true,
    slug: "developper-une-application",
  },
  {
    code: "C2",
    titre: "Optimiser des applications",
    plain: "Niveau 3 — analyser et optimiser des applications.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#6b5aa0",
    focus: true,
    slug: "optimiser-des-applications",
  },
  {
    code: "C3",
    titre: "Administrer des systèmes communicants",
    plain: "Niveau 2 — déployer des services dans une architecture réseau.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C4",
    titre: "Gérer des données de l'information",
    plain:
      "Niveau 2 — optimiser une base, interagir avec une application et mettre en œuvre la sécurité.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C5",
    titre: "Conduire un projet",
    plain:
      "Niveau 2 — appliquer une démarche de suivi de projet selon les besoins métiers.",
    niveau: "Intermédiaire",
    niveauNum: 2,
    color: "#94a3b8",
  },
  {
    code: "C6",
    titre: "Collaborer dans une équipe",
    plain: "Niveau 3 — manager une équipe informatique.",
    niveau: "Confirmé",
    niveauNum: 3,
    color: "#2e8b6b",
    focus: true,
    slug: "collaborer-manager",
  },
];

// ---------------------------------------------------------------------------
// Les compétences de niveau 2 — atteintes en 2ᵉ année, réinvesties cette année.
// Affichées en complément pour couvrir l'ensemble du référentiel.
// ---------------------------------------------------------------------------
export const competencesNiveau2 = [
  {
    code: "C3",
    titre: "Administrer des systèmes informatiques communicants complexes",
    niveauTitre: "Déployer des services dans une architecture réseau",
    reinvesti:
      "Conteneurisation et orchestration locale des services, déploiement automatisé par Ansible sur serveur distant, configuration réseau des services de Gateway IAM, intégration continue.",
    ressources: [
      "Programmation système",
      "Réseaux",
      "Virtualisation",
      "Automatisation",
    ],
  },
  {
    code: "C4",
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
    code: "C5",
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
