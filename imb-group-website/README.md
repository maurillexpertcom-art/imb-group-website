# IMB GROUP – Site Vite + React + Tailwind

## Démarrer en local
```bash
npm install
npm run dev
```
Ouvrez http://localhost:5173

## Déployer
### Vercel
- New Project → Importer ce dossier → Framework: Vite (auto)
- Build Command: `npm run build`
- Output: `dist`

### Netlify
- New site from Git → Build: `npm run build` → Publish directory: `dist`

### Domaines
- Ajoutez `imb.ci` sur votre hébergeur, pointez les DNS vers Vercel/Netlify.
- Mettez à jour `BRAND.logoUrl`, `BRAND.phone`, `BRAND.email`, etc. dans `src/App.jsx`.

## Identité légale
- NCC : 2504286M
- RCCM : CI-ABJ-03-2025-B13-05816
- Adresse : Cocody Riviera Ephrata, Abidjan – Côte d’Ivoire

## Logo
Remplacez `public/assets/logo-imb.png` par votre logo officiel (même nom de fichier pour éviter de modifier le code).
