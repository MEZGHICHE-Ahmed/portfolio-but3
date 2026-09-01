# Ce qu'il reste à fournir

Le site est complet et fonctionnel sans ces éléments : les emplacements d'illustration
affichent un cadre qui énonce l'image attendue. Rien n'est cassé tant qu'ils sont vides —
mais chaque image ajoutée est une preuve tangible de plus devant le jury.

---

## 1. Illustrations (4 emplacements posés)

Déposer les fichiers dans `public/figures/`, puis renseigner l'attribut `src` de la
figure correspondante.

| # | Fichier attendu | Emplacement | Contenu |
|---|---|---|---|
| 1 | `public/figures/mika-interfaces.png` | [Mika.jsx](src/pages/Mika.jsx) — section 02 | Capture composite : écran mobile de capture d'une carte (React Native) **et** écran web de relecture d'une fiche (Vue.js), côte à côte. Les 4 captures de `captures/` peuvent servir de base. |
| 2 | `public/figures/mika-architecture.png` | [Mika.jsx](src/pages/Mika.jsx) — section 03 | Schéma d'architecture : mobile + web → FastAPI → file Faktory et workers, PostgreSQL, MinIO, connecteur vers le logiciel client. **Disponible dans le rapport d'activité.** |
| 3 | `public/figures/coppelis-architecture.png` | [Coppelis.jsx](src/pages/Coppelis.jsx) — section 03 | Schéma d'architecture : LiveKit, chaîne STT / LLM / TTS, module de décision, PostgreSQL, transfert opérateur. **Disponible dans le rapport d'activité.** |
| 4 | `public/figures/coppelis-supervision.png` | [Coppelis.jsx](src/pages/Coppelis.jsx) — avant section 07 | Interface de supervision : liste des appels traités avec décision, et journal d'un appel. |

**Comment activer une image** — ajouter la ligne `src` :

```jsx
<Figure
  n="1"
  src="/figures/mika-interfaces.png"
  legende="…"
  attendu="…"
/>
```

Le cadre disparaît automatiquement et l'image prend sa place. La légende reste affichée
dans les deux cas.

> Anonymiser toute donnée client visible sur les captures (noms, téléphones, adresses,
> raisons sociales) — c'est la cohérence directe de la 2ᵉ conviction défendue sur le site.

---

## 2. Liens de dépôts à vérifier

Deux URL figurent dans le site sans que j'aie pu les vérifier :

- `https://github.com/RedOne777` — [src/data/site.js](src/data/site.js) et [src/data/competences.js](src/data/competences.js)
- `https://www.linkedin.com/in/ahmed-mezghiche/` — [src/data/site.js](src/data/site.js)

**À confirmer** : que ces adresses sont exactes, et que les dépôts pointés (Gateway IAM,
microservices) sont bien publics et présentables à un jury. Si un dépôt est privé ou
absent, remplacer le lien par `null` — le site masque alors proprement la mention.

Les preuves marquées `url: null` (rapports d'activité, documentations, travaux de
formation) s'affichent en texte sans lien : c'est volontaire. Si un document peut être
publié, l'ajouter dans `public/` et renseigner son URL.

---

## 3. Point à trancher

`livrables/Portfolio_Mohamed_Ridwan.pdf` est suivi par Git depuis le premier commit et
porte un autre nom que le vôtre. Il n'est référencé nulle part dans le site et ne part
pas dans le build — mais il reste dans l'historique du dépôt. À supprimer si c'était un
document de référence emprunté (`git rm livrables/Portfolio_Mohamed_Ridwan.pdf`).

---

## 4. Avant la soutenance

- `npm run build` doit passer — vérifié.
- Déployer sur Vercel : la configuration ([vercel.json](vercel.json)) est en place, les
  liens profonds sont réécrits vers `index.html` (testé).
- Node 20.19+ ou 22.12+ recommandé par Vite 8 (la version 20.15.1 installée produit un
  avertissement, sans bloquer le build).
