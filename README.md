# Portfolio de Loïc Vidal‑Ferrasse

Ce dépôt contient la base d'un portfolio de compétences développé avec
[Vite](https://vitejs.dev/), [React](https://react.dev/) et
[Tailwind CSS](https://tailwindcss.com/). Il est conçu pour être
hébergé sur GitHub Pages et servir de vitrine professionnelle pour
présenter vos projets, compétences, expériences et certifications.

## Structure

Les fichiers importants sont :

- `index.html` : point d'entrée de l'application Vite.
- `vite.config.js` : configuration Vite avec intégration de React et
  Tailwind.
- `tailwind.config.js` : configuration Tailwind minimaliste.
- `package.json` : dépendances et scripts npm.
- `src/main.jsx` : initialisation de React.
- `src/App.jsx` : composition du layout général.
- `src/pages/*` : pages du site (Accueil, Projets, Détails, Cyber, Contact).
- `src/components/layout/*` : composants réutilisables comme la barre
  de navigation et le pied de page.
- `src/data/*` : contenus et liste des projets permettant de séparer
  données et présentation.
- `src/styles/globals.css` : styles globaux et import de Tailwind.
- `public/favicon.svg` : icône du site.

Pour lancer le projet en développement :

```bash
npm install
npm run dev
```

Pour générer la version statique à publier sur GitHub Pages :

```bash
npm run build
```

Le dossier `dist/` généré peut alors être déployé. La configuration
`base` dans `vite.config.js` est déjà ajustée pour un dépôt nommé
`portfolio-loic`.