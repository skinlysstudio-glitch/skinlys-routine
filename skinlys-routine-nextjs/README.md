# Skinlys – Routine personnalisée (Next.js + Tailwind)

Projet prêt à déployer sur **Vercel** avec ta charte couleur.

## 1) Pré-requis
- Créer un compte GitHub (gratuit)
- Créer un compte Vercel (gratuit) et le connecter à GitHub
- (Optionnel) Acheter un nom de domaine (~9–12 €/an) chez OVH, Cloudflare Registrar, Porkbun, etc.

## 2) Lancer en local
```bash
npm install
npm run dev
# ouvre http://localhost:3000
```

## 3) Déployer sur Vercel
- Pousse ce dossier dans un repo GitHub (ou importe-le via le dashboard Vercel)
- Sur Vercel : New Project -> sélectionne le repo -> Deploy (rien à configurer)

## 4) Formulaire Tally + Airtable
- Crée ton formulaire sur https://tally.so avec les champs nécessaires
- Active : Notifications -> email vers skinlys.studio@gmail.com
- Intégrations -> Airtable -> mappe les champs vers ta base
- Dans Tally : Share -> Embed -> copie l'URL d'intégration
- Remplace `YOUR_TALLY_FORM_URL` dans `app/page.tsx` **ou** crée `.env.local` et définis `NEXT_PUBLIC_TALLY_FORM_URL`

## 5) Connecter ton domaine
- Sur Vercel: Settings -> Domains -> ajoute `votredomaine.fr`
- Chez ton registrar: crée les entrées DNS suggérées par Vercel (A/AAAA ou CNAME)
- Attends la propagation DNS (quelques minutes en général)

## 6) Personnaliser
- Couleurs : `tailwind.config.js` (skinlysRose, skinlysOrange, skinlysBrique)
- Textes/sections : `app/page.tsx`
- Styles globaux : `styles/globals.css`

Bon déploiement !
