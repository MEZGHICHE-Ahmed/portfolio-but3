# Portfolio BUT3 — Ahmed Mezghiche

Portfolio de fin de parcours **BUT Informatique — parcours A** (Réalisation d'applications :
conception, développement, validation). Site web qui démontre, par une **analyse
auto-réflexive** appuyée sur des traces, l'acquisition du **niveau Confirmé** des 3 compétences
terminales du parcours :

- **C1 — Réaliser un développement d'application** → *Adapter des applications sur un ensemble de supports*
- **C2 — Optimiser des applications** → *Analyser et optimiser des applications*
- **C6 — Collaborer au sein d'une équipe informatique** → *Manager une équipe informatique*

Fil rouge : l'alternance chez **Cloud Inspire** — deux produits conçus, développés et mis en
service (Mika, agent vocal Coppelis).

> Référentiel : ACD Informatique, version V34A. En parcours A, C3/C4/C5 s'arrêtent au niveau 2 ;
> le site les couvre également, pour présenter l'ensemble des six compétences.

---

## 🛠️ Stack technique

- **React 19** + **Vite** — application web monopage (SPA)
- **React Router** — navigation entre les pages
- **Tailwind CSS v4** — système de design

Aucune autre dépendance d'exécution : les animations d'apparition et les repères
typographiques sont écrits à la main dans `src/index.css`, et le site n'utilise
aucune bibliothèque d'icônes.

## 🚀 Démarrage local

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production (dossier dist/)
npm run preview  # prévisualiser le build
npm run lint     # vérifier le code
```

> **Note macOS Apple Silicon** : si le build échoue sur `Cannot find module
> './rolldown-binding.darwin-universal.node'`, installer le binaire natif correspondant :
> `npm install --no-save @rolldown/binding-darwin-arm64@1.0.3`.
> Vite 8 recommande par ailleurs Node.js 20.19+ ou 22.12+.

## 📁 Structure

```
src/
├── data/              ← TOUT LE CONTENU ÉDITABLE EST ICI
│   ├── site.js        ← identité, bio, compétences techniques, contact
│   ├── competences.js ← les 3 compétences : CE, AC, traces analysées, bilan, pistes
│   ├── projets.js     ← réalisations (pro + universitaires)
│   └── parcours.js    ← formation, expériences, frise des 3 années
├── components/        ← composants réutilisables (Navbar, cartes, …)
└── pages/
    ├── Home.jsx            ← accueil : hero, compétences, fil rouge, convictions
    ├── Competences.jsx     ← vue d'ensemble des 6 + les 3 de niveau 3 + les 3 de niveau 2
    ├── CompetenceDetail.jsx← une page par compétence (route /competences/:slug)
    ├── Realisations.jsx    ← toutes les réalisations
    ├── Mika.jsx            ← étude de cas (route /realisations/mika)
    ├── Coppelis.jsx        ← étude de cas (route /realisations/coppelis)
    ├── Parcours.jsx        ← timeline + frise de formation
    ├── Profil.jsx  Contact.jsx  NotFound.jsx
livrables/
├── Soutenance_10min.md           ← trame minutée de la soutenance
└── generate_pdf.py (scripts/)    ← PDF à rendre (URL + QR code)
```

## ☁️ Déploiement (Vercel)

1. Créer un dépôt GitHub et l'ajouter en remote :
   `git remote add origin https://github.com/<vous>/<depot>.git && git push -u origin main`
2. Sur [vercel.com](https://vercel.com) → **Add New… → Project** → importer le dépôt.
3. Vercel détecte Vite automatiquement (`vite.config.js` + `vercel.json` sont fournis).
   - Build Command : `npm run build` · Output Directory : `dist`
4. **Deploy**, puis renommer le projet dans les *Settings* pour une URL propre.

> **Netlify** : build `npm run build`, publish `dist`, et ajouter un `_redirects` contenant
> `/* /index.html 200` (le `vercel.json` gère déjà la réécriture SPA côté Vercel).

## 📄 Régénérer le PDF à rendre

```bash
pip install fpdf2 qrcode pillow
python3 scripts/generate_pdf.py https://votre-vraie-url.vercel.app
```

## ✏️ Reste à personnaliser

- [ ] **Déployer** puis régénérer le PDF avec l'URL réelle.
- [ ] **Liens des preuves** dans `src/data/competences.js` et `projets.js` : remplacer les
      `url: null` et les liens GitHub génériques par les URL réelles (dépôts, rapports, captures).
- [ ] **Captures d'écran** : les interfaces de Mika et Coppelis rendraient les études de cas
      nettement plus démonstratives (dossier `public/`, puis les intégrer dans les pages).
- [ ] **Schémas d'architecture** de Mika et Coppelis (les figures du rapport d'activité).
- [ ] **LinkedIn** dans `src/data/site.js` : vérifier l'URL du profil.
- [ ] **Photo de profil** (optionnel) : déposer une image dans `public/` et l'intégrer dans
      `src/pages/Profil.jsx` à la place du bloc « AM ».
