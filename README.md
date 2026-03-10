# KOALAND — Portail Pilotage Sécurité 2026

Application web de pilotage sécurité pour SAS Parc KOALAND — Menton.
Cabinet SECURE — David MUSEUR.

---

## Déploiement Vercel (5 minutes)

### Option 1 — Vercel Drop (le plus rapide, sans code)

1. Aller sur https://vercel.com/new
2. Glisser-déposer le dossier `koaland-app/` directement sur la page
3. L'URL est générée automatiquement (ex: koaland-securite.vercel.app)

### Option 2 — Via GitHub

```bash
# Dans le dossier koaland-app/
git init
git add .
git commit -m "KOALAND Portail Sécurité 2026 - v1.0"
git remote add origin https://github.com/VOTRE_COMPTE/koaland-securite.git
git push -u origin main
```

Puis sur vercel.com → Import → choisir le repo → Deploy.

**Paramètres Vercel :**
- Framework : Other (pas de framework)
- Build Command : (laisser vide)
- Output Directory : (laisser vide — il prend l'index.html à la racine)

---

## Ce que contient l'application

| Page | Description |
|------|-------------|
| Tableau de bord | KPIs, résumé actions, pièces bloquantes, intervenants |
| Plan d'action | 20 actions DUERP — filtres, modification statuts, notes terrain |
| Pièces manquantes | 6 pièces critiques avec statuts modifiables |
| Documents | Index 23 documents avec statuts |
| Zones du parc | Carte des 8 zones (statuts ouvert/restreint/interdit/projet) |
| Relances & Emails | 7 modèles d'emails pré-remplis (mailto:) |

---

## Personnalisation

### Email de Loris
Ouvrir `index.html` et remplacer `loris@koaland.fr` par le vrai email.

### Mise à jour des statuts
Loris peut modifier directement les statuts depuis son téléphone.
Les données sont sauvegardées en localStorage (persistent sur l'appareil).

---

## Accès

L'application est accessible sur tout navigateur, mobile et desktop.
Aucune installation, aucun compte requis.

---

*KOALAND Portail Sécurité 2026 — Cabinet SECURE — Mars 2026*
