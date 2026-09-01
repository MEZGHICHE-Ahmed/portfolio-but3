import {
  Section, Corps, P, Encadre, Definitions, Etapes, Incidents, Rattachement, EnTete, Suite, Figure,
} from '../components/EtudeDeCas'

const SECTIONS = [
  { id: 'appel', titre: 'Deux cent cinquante fois le même appel' },
  { id: 'regle', titre: 'L’agent ne refuse jamais sur un doute' },
  { id: 'decision', titre: 'La décision reste dans le code' },
  { id: 'noms', titre: 'Reconnaître un nom mal transcrit' },
  { id: 'voix', titre: 'Trancher par la mesure' },
  { id: 'concurrence', titre: 'Un numéro unique sous appels simultanés' },
  { id: 'donnees', titre: 'Prouver une anonymisation' },
  { id: 'competences', titre: 'Ce que cette étude démontre' },
]

const ETAPES = [
  ['L’accueil', 'L’agent prend la parole et demande pour laquelle des deux marques du client on appelle — les deux ont des procédures distinctes.'],
  ['La dictée', 'L’appelant énonce d’un trait son nom, son entreprise, le site et la nature de l’intervention. Une seule question plutôt que quatre : la durée de l’appel s’en trouve nettement réduite.'],
  ['La transcription', 'La parole devient du texte. L’étape la plus délicate de la chaîne : les noms propres se transcrivent mal au téléphone, depuis un environnement bruyant.'],
  ['La normalisation', 'Les lettres épelées par l’appelant sont reconstituées en mots, et les corrections qu’il apporte en cours de phrase sont prises en compte.'],
  ['L’extraction', 'Un modèle de langage extrait les quatre informations recherchées. Son rôle s’arrête strictement là : il ne prend aucune décision.'],
  ['La décision', 'Le nom est recherché dans le référentiel, les deux conditions d’accès sont examinées. Trois issues possibles : autorisation, refus, transfert.'],
  ['La restitution', 'En cas d’autorisation, un numéro de permis est attribué, épelé caractère par caractère, puis répété pour être noté sans erreur.'],
  ['La clôture', 'L’agent raccroche de lui-même après un court délai, et l’ensemble de la conversation est enregistré dans un journal.'],
]

const ERREURS = [
  ['Lettres perdues ou altérées', 'La transcription mange ou déforme des caractères du nom.'],
  ['Frontières entre mots déplacées', 'Le découpage en mots ne correspond plus au nom réel.'],
  ['Lettres déplacées dans le mot', 'Une lettre migre, souvent vers le début. C’est le cas qui a mis en échec les deux premières méthodes que j’avais essayées.'],
]

const VOIX = [
  [
    'La première solution, retenue sur la foi d’un comparatif public',
    'Inaccessible depuis notre serveur.',
    'Son dispositif de lutte contre les abus assimile les requêtes venant d’un centre de données à une tentative de contournement. Écartée.',
  ],
  [
    'La deuxième, séduisante car elle partageait la facturation de la transcription',
    'Écartée après écoute d’un appel réel.',
    'Le modèle ajoutait des hésitations de son propre chef, et le ton repartait à zéro à chaque groupe de mots.',
  ],
  [
    'La troisième, présentée par sa documentation comme la seule à honorer le réglage de vitesse',
    'Ne produisait aucun son.',
    'Ce défaut aurait rendu l’agent totalement muet en appel s’il n’avait pas été détecté avant la mise en service. C’est l’essai qui justifie à lui seul la démarche.',
  ],
]

const COMPETENCES = [
  {
    code: 'C2', titre: 'Optimiser des applications', slug: 'optimiser-des-applications',
    points: [
      'AC2 — Profiler, analyser et justifier : seuil de recherche floue calibré sur des appels réels, voix tranchée par l’écoute plutôt que par la documentation.',
      'AC3 — Méthodes dédiées au domaine : similarité de chaînes multi-angles, verrouillage de ligne, transactions.',
      'AC1 — Anticiper les métriques : contraintes de latence d’un dialogue temps réel, prototype à modèle audio unique mesuré.',
    ],
  },
  {
    code: 'C1', titre: 'Réaliser un développement d’application', slug: 'developper-une-application',
    points: [
      'AC1 — Choisir et implémenter les architectures adaptées : indépendance au canal d’appel, décidée dès la conception et non subie.',
      'AC3 — Intégrer dans un environnement de production : déploiement sur serveur exposé, journalisation intégrale des appels.',
    ],
  },
  {
    code: 'C6', titre: 'Collaborer au sein d’une équipe informatique', slug: 'collaborer-manager',
    points: [
      'AC3 — Guider la conduite du changement : remplacer un processus entièrement humain, avec le transfert vers un opérateur comme filet.',
      'CE3 — Respect des contraintes juridiques : pseudonymisation des données personnelles du référentiel, vérifiée indépendamment.',
    ],
  },
]

export default function Coppelis() {
  return (
    <article className="sheet pb-8">
      <EnTete
        ariane={[['Accueil', '/'], ['Réalisations', '/realisations'], ['Agent vocal Coppelis', null]]}
        accent="var(--color-c2)"
        kicker="Étude de cas — Alternance Cloud Inspire"
        titre="L’agent vocal Coppelis"
        lead="Un programme qui répond au téléphone, comprend son interlocuteur et décide d’autoriser ou non l’accès à un site industriel — à la place d’un opérateur qui traite le même appel deux cent cinquante fois par jour."
        meta={[
          ['Période', '2026'],
          ['Nature', 'Preuve de concept, éprouvée sur appels réels'],
          ['Client final', 'Secteur énergie et infrastructures'],
          ['Compétences', 'C2 · C1 · C6'],
        ]}
      />

      <Corps sections={SECTIONS} accent="var(--color-c2)">
      <Section id="appel" n="1 / 08" titre="Deux cent cinquante fois le même appel">
        <P>
          Un technicien qui intervient sur un site industriel doit vérifier, avant d’entrer, qu’il
          dispose des autorisations nécessaires. Deux conditions sont examinées : son habilitation
          électrique doit être en cours de validité — une habilitation expirée interdit l’accès sans
          exception possible — et son plan de prévention doit être en règle. Si les deux conditions
          sont remplies, un numéro de permis lui est communiqué oralement ; il devra le présenter à
          l’entrée du site.
        </P>
        <P>
          Ce contrôle se fait par téléphone. Les équipes du client traitent entre deux cents et deux
          cent cinquante appels par jour, vingt-quatre heures sur vingt-quatre, et la très grande
          majorité suit exactement le même déroulement : écouter un nom, consulter un référentiel,
          vérifier deux dates, communiquer un numéro. Un processus entièrement procédural, dont la
          réponse est intégralement déterminée par le contenu d’une base de données.
        </P>
        <P>
          L’objectif du projet était une preuve de concept — non pas livrer un service définitif,
          mais démontrer la faisabilité technique et valider le comportement sur des appels réels,
          pour que le client puisse décider en connaissance de cause d’un déploiement à grande
          échelle.
        </P>
      </Section>

      <Section id="regle" n="2 / 08" titre="L’agent ne refuse jamais sur un doute">
        <P>
          C’est la règle qui a guidé l’ensemble des choix de conception, et je l’ai posée avant
          d’écrire le code. Un agent automatique confronté à une situation ambiguë peut trancher
          malgré l’incertitude, ou passer la main à un humain. Ici, toute situation qui n’est pas
          traitable avec certitude est transférée à un opérateur.
        </P>
        <Encadre accent="var(--color-c2)" titre="L’asymétrie de coût qui fonde la règle">
          Un refus erroné immobilise un technicien devant un site auquel il avait légitimement le
          droit d’accéder, avec les conséquences que cela implique sur le déroulement de son
          intervention et sur le planning de son entreprise. Un transfert, à l’inverse, ne coûte
          qu’une minute de temps humain. Les deux erreurs ne se valent pas : le système est
          délibérément conçu pour privilégier la seconde, quitte à paraître moins performant.
        </Encadre>
        <Definitions
          items={[
            ['Le transfert', 'Nom introuvable dans le référentiel, plusieurs personnes au nom similaire, plan de prévention dans un état indéterminé, modèle indisponible, interlocuteur silencieux, numéro de permis impossible à attribuer.'],
            ['Le refus', 'Un seul cas : quand le référentiel établit sans ambiguïté que la personne n’a pas le droit d’accéder au site. Il est alors accompagné d’un motif précis et daté.'],
          ]}
        />
      </Section>

      <Section id="decision" n="3 / 08" titre="La décision reste dans le code">
        <P>
          Le modèle de langage aurait pu se voir confier la conduite complète du dialogue, ce qui
          aurait considérablement simplifié le développement. Ce choix a été écarté délibérément. Le
          modèle intervient uniquement pour extraire quatre informations d’une phrase prononcée ;
          toutes les décisions — quelle question poser ensuite, comment interpréter une réponse
          ambiguë, et surtout accorder ou refuser un accès — sont prises par du code déterministe,
          dont le comportement est reproductible et vérifiable.
        </P>
        <P>
          La raison tient à la nature même de la décision. Un modèle de langage produit une réponse
          plausible, non une réponse certaine — et il peut se tromper différemment d’un appel à
          l’autre sur une même question. Confier à un tel système l’autorisation d’accès à un site
          industriel n’aurait été acceptable ni sur le plan de la sécurité, ni sur celui de la
          traçabilité.
        </P>
        <Etapes items={ETAPES} accent="var(--color-c2)" />
        <Figure
          n="1"
          ratio="16 / 9"
          legende="Le déroulement d’un appel : la transcription et le modèle ne font qu’extraire ; la vérification et la décision restent dans du code déterministe."
          attendu="Schéma d’architecture de l’agent vocal — LiveKit, la chaîne STT / LLM / TTS, le module de décision, PostgreSQL et le transfert vers un opérateur."
        />
        <Encadre accent="var(--color-c2)" titre="Vérifier que le modèle n’invente pas">
          Le même principe m’a conduit à contrôler les informations extraites : chaque valeur
          produite par le modèle doit se retrouver effectivement dans ce que l’appelant a prononcé,
          faute de quoi elle est rejetée. Cette vérification empêche le modèle d’inventer une
          information vraisemblable mais absente de la conversation — ce qu’aucune consigne de
          rédaction ne parvient à garantir de manière fiable.
        </Encadre>
      </Section>

      <Section id="noms" n="4 / 08" titre="Reconnaître un nom mal transcrit">
        <P>
          La difficulté la plus tenace du projet, et ma meilleure preuve sur la compétence
          d’optimisation. J’ai observé trois modes d’erreur distincts en conditions réelles — une
          comparaison stricte du nom transcrit avec le référentiel échoue dans les trois cas.
        </P>
        <Definitions items={ERREURS} />
        <P>
          J’ai d’abord essayé une comparaison fondée sur la ressemblance phonétique, puis une autre
          sur le nombre de modifications nécessaires pour passer d’un mot à l’autre. Les deux ont
          échoué sur le troisième cas, parce qu’elles reposent sur des séquences de caractères que le
          déplacement d’une lettre détruit.
        </P>
        <P>
          La méthode retenue compare le nom entendu à ceux du référentiel selon plusieurs angles
          simultanément : le nom complet, le nom de famille seul, les deux ordres possibles sans les
          espaces, et enfin les lettres triées par ordre alphabétique. Cette dernière approche rend
          la comparaison insensible à la position des lettres, et permet de rapprocher deux formes
          que l’on aurait autrement jugées sans rapport.
        </P>
        <Encadre accent="var(--color-c2)" titre="Le point que je défends le plus">
          Le seuil de déclenchement a été calibré à partir de cas d’appels réels, et non fixé
          arbitrairement. Il est délibérément placé de manière à proposer un nom un peu trop souvent
          plutôt que pas assez — en application de la règle du projet : proposer à tort ne coûte
          qu’une question à laquelle l’appelant répond par la négative, tandis que ne pas reconnaître
          un technicien légitime provoque un transfert évitable.
        </Encadre>
      </Section>

      <Section id="voix" n="5 / 08" titre="Trancher par la mesure">
        <P>
          Le livrable d’un appel est un numéro de permis épelé qui doit être compris sans erreur : le
          choix de la voix engage donc directement le service. Trois solutions ont été écartées
          successivement, chaque fois pour une raison constatée et non supposée.
        </P>
        <Incidents items={VOIX} accent="var(--color-c2)" />
        <P>
          La solution finalement retenue a été validée à l’écoute sur le texte réel de l’agent, parmi
          six voix candidates, et sa vitesse a été volontairement réduite : à vitesse nominale, elle
          était trop rapide pour dicter un numéro de permis au téléphone.
        </P>
        <Encadre accent="var(--color-c2)" titre="Ce que j’en retiens">
          Une documentation décrit une intention, pas un comportement. Un comparatif public décrit un
          contexte qui n’est pas le vôtre. La seule chose qui tranche, c’est l’essai mené dans les
          conditions réelles d’usage. J’ai par ailleurs ajouté un service de secours qui partage la
          facturation de la transcription : le filet ne coûte rien tant qu’il ne sert pas. Le
          compromis est assumé — la voix change en cours d’appel lors d’une bascule, ce qui reste
          préférable à un silence complet.
        </Encadre>
      </Section>

      <Section id="concurrence" n="6 / 08" titre="Un numéro unique sous appels simultanés">
        <P>
          Le numéro de permis est attribué à partir d’un compteur propre à chaque site. Avec deux
          cent cinquante appels quotidiens, deux appels simultanés lisant le même compteur
          attribueraient inévitablement le même numéro à deux techniciens différents — ce qui serait
          inacceptable, puisque ce numéro constitue la preuve de l’autorisation.
        </P>
        <P>
          La base de données relationnelle répond à ce problème par un mécanisme de verrouillage : la
          ligne du compteur concerné est verrouillée le temps de l’attribution, ce qui contraint les
          appels concurrents à attendre leur tour. Le point d’optimisation est que le verrou ne porte
          que sur la ligne du site concerné — les autres sites ne sont pas ralentis.
        </P>
        <P>
          L’attribution du numéro et l’enregistrement de l’accès au journal sont par ailleurs
          réalisés dans une même transaction, ce qui garantit que les deux opérations aboutissent
          ensemble ou échouent ensemble. Sans cette précaution, un numéro pourrait être communiqué à
          un technicien sans qu’aucune trace n’en subsiste.
        </P>
      </Section>

      <Figure
        n="2"
        legende="L’interface de supervision : chaque appel y laisse une trace horodatée — informations extraites, décision prise et son motif."
        attendu="Capture de l’interface de supervision de Coppelis — liste des appels traités avec leur décision et le journal d’un appel."
      />

      <Section id="donnees" n="7 / 08" titre="Prouver une anonymisation">
        <P>
          Déployer le service sur un serveur accessible depuis Internet a soulevé une question que je
          n’avais pas anticipée au démarrage : les données du référentiel comportent des noms, des
          numéros de téléphone et des adresses électroniques de personnes réelles, et elles se
          retrouvaient hébergées sur une machine exposée.
        </P>
        <P>
          La réponse a consisté à produire des jeux de données pseudonymisés — les identités réelles
          remplacées par des identités fictives — en conservant le format exact des fichiers
          d’origine, afin que les programmes d’importation fonctionnent sans modification.
        </P>
        <Encadre accent="var(--color-c2)" titre="Deux programmes plutôt qu’un">
          Le premier produit les fichiers pseudonymisés ; le second vérifie le résultat en sens
          inverse, en recherchant les identités réelles dans l’intégralité des cellules produites.
          Cette vérification indépendante a permis de détecter trois défauts du programme de
          génération. J’en retiens un principe que j’applique désormais partout : un programme qui
          affirme avoir anonymisé des données ne constitue pas une preuve. Seule une vérification
          menée indépendamment, selon une logique différente, apporte cette garantie.
        </Encadre>
      </Section>

      <Rattachement id="competences" n="8 / 08" competences={COMPETENCES} />

      <Suite
        liens={[
          {
            to: '/competences/optimiser-des-applications',
            code: 'Compétence C2',
            titre: 'Optimiser des applications',
            texte: 'La compétence que cette étude porte principalement, avec ses autres traces.',
            action: 'Lire la compétence',
          },
          {
            to: '/realisations/mika',
            code: 'Étude de cas',
            titre: 'Mika',
            texte: 'Une architecture mobile, web et serveur conçue seul et tenue en production.',
            action: 'Lire l’étude',
          },
          {
            to: '/competences',
            code: 'Vue d’ensemble',
            titre: 'Mes trois compétences',
            texte: 'Le référentiel, les niveaux atteints et la démonstration complète.',
            action: 'Parcourir',
          },
        ]}
      />
      </Corps>
    </article>
  )
}
