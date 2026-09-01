import {
  Section, Corps, P, Encadre, Definitions, Incidents, Rattachement, EnTete, Suite, Figure,
} from '../components/EtudeDeCas'

const SECTIONS = [
  { id: 'besoin', titre: 'Le besoin métier' },
  { id: 'supports', titre: 'Un produit, trois supports' },
  { id: 'asynchrone', titre: 'Le traitement différé' },
  { id: 'modele', titre: 'Un modèle qu’on peut remplacer' },
  { id: 'cloisonnement', titre: 'Cloisonner plusieurs entreprises' },
  { id: 'production', titre: 'Du poste de travail à la production' },
  { id: 'competences', titre: 'Ce que cette étude démontre' },
]

const SUPPORTS = [
  ['Application mobile', 'React Native / Expo — le commercial sur le terrain : capture de la carte, contexte de la rencontre, suivi de la progression.'],
  ['Interface web', 'Vue.js — le responsable : relecture des fiches, correction champ par champ, configuration de l’organisation.'],
  ['Serveur', 'FastAPI — tous les traitements : API, orchestration des modèles, intégration au logiciel de gestion commerciale du client.'],
  ['Traitements différés', 'Workers Faktory — analyse des images et enrichissement, hors du cycle de requête.'],
]

const ISOLATION = [
  ['En base', 'Chaque enregistrement porte l’identifiant de l’organisation à laquelle il appartient.'],
  ['À la requête', 'Chaque appel vérifie en base que l’utilisateur est bien membre de l’organisation demandée. La valeur transmise par le client n’est jamais crue sur parole : sans cette vérification, il suffirait de modifier une valeur envoyée par le téléphone pour lire les données d’un autre client.'],
  ['Au stockage', 'Les fichiers sont rangés dans des répertoires distincts par organisation.'],
  ['À la configuration', 'Chaque organisation a ses propres identifiants vers son logiciel de gestion, chiffrés en base.'],
]

const INCIDENTS = [
  [
    'Les modèles de vision ne garantissent pas le format de leur réponse',
    'Le mécanisme de sortie structurée existe pour le texte, mais pas pour les modèles qui analysent une image : la consigne est la seule garantie, et elle ne suffit pas. En pratique le modèle renvoie tantôt la structure attendue, tantôt cette structure entourée de texte, tantôt un format légèrement différent.',
    'Une lecture défensive en trois tentatives : lecture directe, puis extraction si la structure est entourée de texte, puis recherche par motif. En cas d’échec complet, le système ne lève pas d’erreur mais retourne un résultat vide assorti d’un indice de confiance nul — ce qui signale à l’utilisateur que la carte est à saisir manuellement.',
  ],
  [
    'Le modèle de vision retiré sans préavis par son fournisseur',
    'L’extraction des cartes s’est interrompue du jour au lendemain, en production.',
    'Rendre le nom du modèle configurable au lieu de l’inscrire dans le code — quelques lignes. C’est l’incident qui a confirmé la règle que j’applique depuis : ne jamais figer dans le code une dépendance à un service extérieur.',
  ],
  [
    'Les images alourdissaient la base de données',
    'Le stockage initial des photographies en base faisait grossir les sauvegardes, les ralentissait, et occupait la mémoire du serveur avec des données qui ne sont jamais interrogées.',
    'Bascule vers un stockage objet auto-hébergé. Il respecte une interface standardisée, ce qui rend le code portable vers un autre service sans modification — et il reste hébergeable par l’entreprise, conformément à son positionnement.',
  ],
]

const COMPETENCES = [
  {
    code: 'C1', titre: 'Réaliser un développement d’application', slug: 'developper-une-application',
    points: [
      'AC1 — Choisir et implémenter les architectures adaptées : trois supports, et un découpage en services dont chaque frontière répond à une contrainte constatée.',
      'AC2 — Faire évoluer une application existante : incident du modèle retiré, migration du stockage des images.',
      'AC3 — Intégrer des solutions dans un environnement de production : mise en service réelle, intégration continue, déploiement automatisé, suivi des incidents.',
    ],
  },
  {
    code: 'C2', titre: 'Optimiser des applications', slug: 'optimiser-des-applications',
    points: [
      'AC1 — Anticiper les résultats de diverses métriques : latence perçue ramenée à zéro par le traitement différé, alors que le temps de calcul est inchangé.',
      'AC3 — Choisir des bibliothèques et méthodes dédiées au domaine : modèles de vision et de langage, file de travaux, stockage objet.',
    ],
  },
  {
    code: 'C6', titre: 'Collaborer au sein d’une équipe informatique', slug: 'collaborer-manager',
    points: [
      'AC3 — Guider la conduite du changement : indice de confiance affiché et correction manuelle, pour que l’outil soit adopté plutôt que subi.',
      'AC2 — Identifier les enjeux de l’économie du numérique : souveraineté des données, indépendance vis-à-vis des fournisseurs de modèles.',
    ],
  },
]

export default function Mika() {
  return (
    <article className="sheet pb-8">
      <EnTete
        ariane={[['Accueil', '/'], ['Réalisations', '/realisations'], ['Mika', null]]}
        accent="var(--color-c1)"
        kicker="Étude de cas — Alternance Cloud Inspire"
        titre="Mika"
        lead="Photographier une carte de visite sur un salon, et retrouver le contact qualifié dans son logiciel de gestion commerciale, sans une seule saisie au clavier. Une application mobile, une interface web, un serveur — conçus, développés et mis en production seul."
        meta={[
          ['Période', '2025 – 2026'],
          ['État', 'En production'],
          ['Rôle', 'Conception, développement, exploitation'],
          ['Compétences', 'C1 · C2 · C6'],
        ]}
      />

      <Corps sections={SECTIONS} accent="var(--color-c1)">
      <Section id="besoin" n="1 / 07" titre="Le besoin métier">
        <P>
          Sur un salon professionnel, un commercial repart avec une pile de cartes de visite. Ces
          cartes ne valent quelque chose que si elles finissent dans le logiciel de gestion
          commerciale de l’entreprise, rattachées à un contexte : où la personne a-t-elle été
          rencontrée, de quoi a-t-on parlé, y a-t-il une opportunité derrière.
        </P>
        <P>
          En pratique, cette ressaisie est faite manuellement, souvent des jours plus tard, parfois
          jamais. Une carte représente environ deux minutes de saisie si l’on renseigne correctement
          le contact, l’entreprise, la fonction et le téléphone, puis que l’on crée l’opportunité
          associée. Sur un salon à cent contacts, c’est plus de trois heures sans valeur ajoutée —
          et le contexte de la rencontre, lui, est définitivement perdu.
        </P>
        <P>
          Mika répond à ce problème : le commercial photographie la carte, ajoute une phrase de
          contexte, indique s’il s’agit d’une opportunité réelle ou d’un contact froid. Le reste est
          automatique — extraction des champs, génération du libellé et de la description de
          l’opportunité, création du contact puis de l’opportunité dans le logiciel du client.
        </P>
      </Section>

      <Section id="supports" n="2 / 07" titre="Un produit, trois supports">
        <P>
          C’est ce qui fait de ce projet ma preuve principale sur le niveau Confirmé de la
          compétence « adapter des applications sur un ensemble de supports » : un même produit
          décliné sur trois cibles, avec des usages et des contraintes différents.
        </P>
        <Definitions items={SUPPORTS} />
        <Figure
          n="1"
          legende="Les trois supports du produit : l’application mobile utilisée en salon, l’interface web de relecture, et le serveur qui porte les traitements."
          attendu="Capture composite des interfaces Mika — écran mobile de capture d’une carte (React Native) et écran web de relecture d’une fiche (Vue.js), côte à côte."
        />
        <Encadre accent="var(--color-c1)" titre="Pourquoi un cadre multiplateforme pour le mobile">
          Produire une application qui fonctionne sur Android et sur iPhone à partir d’un code
          unique représente une économie de temps décisive pour un développeur travaillant seul. Ce
          n’est pas un choix de confort : c’est ce qui rend le projet réalisable dans le périmètre
          qui est le mien.
        </Encadre>
      </Section>

      <Section id="asynchrone" n="3 / 07" titre="Le traitement différé">
        <P>
          L’analyse d’une image par un modèle de vision demande entre dix et soixante secondes selon
          la charge du serveur. Garder la connexion du téléphone ouverte pendant toute cette durée
          posait deux problèmes que j’ai identifiés avant d’écrire la première ligne : l’utilisateur
          reste immobilisé devant son écran, et la moindre coupure de réseau mobile fait perdre le
          travail en cours.
        </P>
        <P>
          Les traitements sont donc déposés dans une file et exécutés par un programme séparé. Le
          serveur répond immédiatement au téléphone, qui peut enchaîner la capture suivante pendant
          que la précédente est encore analysée. Sur un salon où les cartes s’accumulent, ce
          fonctionnement change complètement l’expérience d’utilisation.
        </P>
        <Figure
          n="2"
          ratio="16 / 9"
          legende="Le chemin d’une carte : capture depuis le mobile, dépôt en file, analyse par un programme séparé, puis écriture dans le logiciel de gestion du client."
          attendu="Schéma d’architecture de Mika — mobile et web vers le serveur FastAPI, la file Faktory et ses workers, PostgreSQL, MinIO et le connecteur vers le logiciel client."
        />
        <Encadre accent="var(--color-c1)" titre="Ce que la mesure dit vraiment">
          Le temps de calcul est identique. Ce qui tombe à zéro, c’est le temps d’attente perçu — la
          seule métrique qui compte pour l’utilisateur en situation. Le mécanisme apporte en prime
          une robustesse : un traitement qui échoue est relancé jusqu’à trois fois, et l’état de
          chaque travail est conservé en base, ce qui permet au mobile d’afficher la progression
          sans maintenir de connexion.
        </Encadre>
      </Section>

      <Section id="modele" n="4 / 07" titre="Un modèle qu’on peut remplacer">
        <P>
          Le choix du modèle est celui qui engage le plus le produit, car il détermine si les
          données du client sortent ou non de son périmètre. L’accès passe par un outil libre
          permettant d’exécuter des modèles sur sa propre infrastructure, dont l’interface de
          programmation est identique à celle des principaux fournisseurs commerciaux.
        </P>
        <P>
          Concrètement : le code ne dépend d’aucun fournisseur, et le passage d’un modèle hébergé à
          l’extérieur vers un modèle installé chez le client ne demande que la modification d’un
          paramètre de configuration. Cette indépendance n’est pas restée théorique — elle a été
          mise à l’épreuve trois fois.
        </P>
        <Incidents items={INCIDENTS} accent="var(--color-c1)" />
        <Encadre accent="var(--color-c1)" titre="La conviction que ce projet m’a forgée">
          On ne fait pas confiance aveuglément à un modèle. On expose son degré de certitude à
          l’utilisateur — un indice de confiance avec un code couleur, affiché sur chaque fiche — et
          on lui donne les moyens de corriger, champ par champ. Une extraction incertaine n’est pas
          une erreur du système : c’est une information que l’utilisateur doit avoir.
        </Encadre>
      </Section>

      <Section id="cloisonnement" n="5 / 07" titre="Cloisonner plusieurs entreprises">
        <P>
          Le produit sert plusieurs entreprises clientes sur une même installation. Un client ne
          doit en aucun cas accéder aux contacts d’un autre : le cloisonnement est assuré à quatre
          niveaux.
        </P>
        <Definitions items={ISOLATION} />
        <P>
          L’authentification s’appuie par ailleurs sur un service d’identité libre hébergé par
          l’entreprise, ce qui évite d’implémenter soi-même la gestion des mots de passe — un
          exercice réputé pour être une source fréquente de failles. Le secret d’échange des jetons
          ne quitte jamais le serveur : ni le navigateur ni l’application mobile ne le connaissent.
        </P>
        <Encadre accent="var(--color-c1)" titre="Chiffrer, ou hacher">
          Les clés d’accès aux logiciels des clients sont chiffrées, avec deux clés distinctes selon
          la nature des données : si l’une est compromise, seul le domaine qu’elle protège est
          affecté. Les mots de passe, eux, ne sont pas chiffrés mais hachés. La distinction est
          essentielle — un mot de passe ne doit jamais pouvoir être retrouvé, même par
          l’administrateur du système.
        </Encadre>
      </Section>

      <Section id="production" n="6 / 07" titre="Du poste de travail à la production">
        <P>
          C’est l’apprentissage qui distingue le plus cette année des précédentes. Avant cette
          alternance, mon travail s’arrêtait généralement au moment où l’application fonctionnait
          sur mon poste. J’ai appris qu’un service n’a de valeur qu’une fois accessible, surveillé
          et maintenu.
        </P>
        <P>
          Concrètement : conteneurisation des services, chaîne d’intégration continue, déploiement
          automatisé sur les serveurs de l’entreprise, et suivi des incidents une fois le produit
          entre les mains de véritables utilisateurs — des anomalies apparaissent inévitablement, et
          de nouveaux besoins s’expriment.
        </P>
        <Encadre accent="var(--color-c1)" titre="Ce que je ferais autrement">
          La file locale hors-ligne du mobile aurait dû venir plus tôt : un salon professionnel est
          précisément un lieu où la couverture réseau est saturée par l’affluence. Je l’ai
          identifiée comme l’évolution la plus utile à court terme, mais elle aurait pu être une
          contrainte de conception dès le départ plutôt qu’un rattrapage.
        </Encadre>
      </Section>

      <Rattachement id="competences" n="7 / 07" competences={COMPETENCES} />

      <Suite
        liens={[
          {
            to: '/realisations/coppelis',
            code: 'Étude de cas suivante',
            titre: 'L’agent vocal Coppelis',
            texte: 'Trancher par la mesure, et laisser la décision dans le code plutôt que dans le modèle.',
            action: 'Lire l’étude',
          },
          {
            to: '/competences/developper-une-application',
            code: 'Compétence C1',
            titre: 'Réaliser un développement d’application',
            texte: 'La compétence que cette étude porte principalement, avec ses autres traces.',
            action: 'Lire la compétence',
          },
          {
            to: '/realisations',
            code: 'Vue d’ensemble',
            titre: 'Toutes les réalisations',
            texte: 'Les projets menés en entreprise et en formation.',
            action: 'Parcourir',
          },
        ]}
      />
      </Corps>
    </article>
  )
}
