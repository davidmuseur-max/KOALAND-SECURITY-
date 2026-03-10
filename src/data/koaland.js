// ============================================================
// KOALAND — Données centrales de l'application
// Mise à jour : Mars 2026 — Cabinet SECURE
// ============================================================

export const CONFIG = {
  client: {
    raisonSociale: "SAS PARC KOALAND",
    nomCommercial: "Parc KOALAND — Parc de loisirs de la Madone",
    adresse: "5 Avenue de la Madone — 06500 Menton",
    typeERP: "PA (Plein Air) — 5ème catégorie",
    jauge: 299,
    superficie: "15 000 m²",
  },
  intervenants: {
    directeur: { nom: "John NAISSE", role: "Directeur / Responsable légal", niveau: "Décisionnel" },
    responsableSite: { nom: "Loris CARDARELLI", role: "Responsable de Site", email: "loris@koaland.fr", tel: "" },
    consultant: { nom: "David MUSEUR", role: "Expert Sécurité — Cabinet SECURE", email: "David.museur@riskattitude.net", tel: "07.88.96.55.28" },
  },
  datesDerniereVisite: "12–13 février 2026",
  version: "V1.0 — Mars 2026",
};

export const ACTIONS = [
  { id: "A01", titre: "Dépôt Mairie — Dossier CERFA 13824 + Notices", source: "Planning", responsable: "J. NAISSE", echeance: "20/02/2026", criticite: 20, niveauTexte: "CRITIQUE", delaiTexte: "Immédiat", zone: "Admin / Urbanisme", statut: "A faire", note: "" },
  { id: "A02", titre: "Chaises Volantes — Anti-arrachement charnière store", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "27/02/2026", criticite: 20, niveauTexte: "URGENTE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A03", titre: "Chaises Volantes — Clapets anti-retour vérins hydrauliques", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "27/02/2026", criticite: 20, niveauTexte: "URGENTE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A04", titre: "Chaises Volantes — Différentiel 30mA + mise à la terre électrique", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "27/02/2026", criticite: 20, niveauTexte: "URGENTE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A05", titre: "Chaises Volantes — Protection tubes néons (vibrations / projectiles)", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "27/02/2026", criticite: 20, niveauTexte: "URGENTE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A06", titre: "Chaises Volantes — Blocs de secours type Lumen (panne électrique)", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "27/02/2026", criticite: 20, niveauTexte: "URGENTE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A07", titre: "Carrousel — Pose ceintures de sécurité sujets / voitures", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "06/03/2026", criticite: 14, niveauTexte: "IMPORTANTE", delaiTexte: "J+14", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A08", titre: "Carrousel — Barriérage type K1 à K5 (périmètre)", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "06/03/2026", criticite: 14, niveauTexte: "IMPORTANTE", delaiTexte: "J+14", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A09", titre: "Carrousel — Affichage pupitre de commande en français", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "06/03/2026", criticite: 14, niveauTexte: "IMPORTANTE", delaiTexte: "J+14", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A10", titre: "Carrousel — Application antidérapant sur les planchers", source: "Audit CEEV", responsable: "L. CARDARELLI", echeance: "06/03/2026", criticite: 14, niveauTexte: "IMPORTANTE", delaiTexte: "J+14", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A11", titre: "Pêche aux Canards — Différentiel 30mA amont boutique", source: "Audit CEEV", responsable: "Électricien", echeance: "21/03/2026", criticite: 9, niveauTexte: "MODÉRÉE", delaiTexte: "J+30", zone: "Zone Jeux Eau", statut: "A faire", note: "" },
  { id: "A12", titre: "Dépôt CERFA 13824 — Dossier complet urbanisme + ERP", source: "Risques", responsable: "J. NAISSE", echeance: "Immédiat", criticite: 20, niveauTexte: "CRITIQUE", delaiTexte: "Immédiat", zone: "Admin", statut: "A faire", note: "" },
  { id: "A13", titre: "Notice de dérogation SPR / ABF — Patrimoine et accessibilité", source: "Risques", responsable: "Expert SECURE", echeance: "Mars 2026", criticite: 16, niveauTexte: "ÉLEVÉE", delaiTexte: "J+30", zone: "Admin / Urbanisme", statut: "A faire", note: "" },
  { id: "A14", titre: "Audit électrique Q18 — Bureau de contrôle agréé (APAVE / SOCOTEC)", source: "Risques", responsable: "J. NAISSE", echeance: "24/02/2026", criticite: 25, niveauTexte: "CRITIQUE", delaiTexte: "Immédiat", zone: "Locaux Techniques", statut: "En attente", note: "" },
  { id: "A15", titre: "Chaises Volantes — Clapets & Store (synthèse CEEV)", source: "Risques", responsable: "L. CARDARELLI", echeance: "27/02/2026", criticite: 15, niveauTexte: "ÉLEVÉE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A16", titre: "Carrousel — Ceintures & Barriérage K (synthèse CEEV)", source: "Risques", responsable: "L. CARDARELLI", echeance: "06/03/2026", criticite: 12, niveauTexte: "MODÉRÉE", delaiTexte: "J+14", zone: "Zone Manèges", statut: "A faire", note: "" },
  { id: "A17", titre: "Hygiène sanitaires — Protocole nettoyage toutes les 2h + fiche émargement", source: "Risques", responsable: "Personnel", echeance: "Immédiat", criticite: 9, niveauTexte: "MODÉRÉE", delaiTexte: "Immédiat", zone: "Sanitaires", statut: "A faire", note: "" },
  { id: "A18", titre: "Balisage Zone Nord (Padel) — Maintien bâches opaques Heras", source: "Planning", responsable: "L. CARDARELLI", echeance: "20/02/2026", criticite: 16, niveauTexte: "ÉLEVÉE", delaiTexte: "J+7", zone: "Zone Nord", statut: "Commandé", note: "" },
  { id: "A19", titre: "Protections moteurs Chenille — Pose grillages / carters périmétriques", source: "Planning", responsable: "Tech Site", echeance: "20/02/2026", criticite: 15, niveauTexte: "ÉLEVÉE", delaiTexte: "J+7", zone: "Zone Manèges", statut: "En cours", note: "" },
  { id: "A20", titre: "Lestage structures gonflables — Béton 50 kg par point d'ancrage", source: "Planning", responsable: "L. CARDARELLI", echeance: "21/02/2026", criticite: 10, niveauTexte: "ÉLEVÉE", delaiTexte: "J+7", zone: "Zone Gonflables", statut: "Validé", note: "" },
];

export const PIECES_MANQUANTES = [
  { id: "PM-1", titre: "Plan masse \"As-Built\" annoté", detail: "Zones ouvertes (vert) / fermées (rouge), accès secours, extincteurs, point rassemblement", delai: "J+0 — BLOQUANT", statut: "Manquant", responsable: "John NAISSE / Architecte" },
  { id: "PM-2", titre: "Rapport Q18 électrique", detail: "Vérification périodique par organisme agréé (APAVE ou SOCOTEC)", delai: "J+7 — 24/02/2026", statut: "En attente", responsable: "John NAISSE" },
  { id: "PM-3", titre: "Attestations d'assurance", detail: "RC exploitation + multirisque + clause renonciation recours contre la commune (Art. 16 convention)", delai: "J+0 — BLOQUANT", statut: "Partiel", responsable: "John NAISSE" },
  { id: "PM-4", titre: "Rapport technique manèges CEEV", detail: "Certificats de conformité — Chaises Volantes et Carrousel (NF EN 13814)", delai: "J+7", statut: "Partiel", responsable: "L. CARDARELLI / Expert SECURE" },
  { id: "PM-5", titre: "CERFA 13824*04 signé", detail: "Formulaire complet avec signature du représentant légal (John NAISSE)", delai: "J+0 — BLOQUANT", statut: "Signature manquante", responsable: "John NAISSE" },
  { id: "PM-6", titre: "Notice d'accessibilité PMR", detail: "Demande de dérogation topographique (pente terrain naturel)", delai: "J+15", statut: "En cours", responsable: "David MUSEUR" },
];

export const DOCUMENTS = [
  { id: "D01", nom: "Rapport Conformité v1.3", categorie: "Rapport technique", statut: "VALIDE", date: "11/02/2026" },
  { id: "D02", nom: "Pilotage KOALAND V54", categorie: "Pilotage / SMI", statut: "VALIDE", date: "19/02/2026" },
  { id: "D03", nom: "SMIS Blueprint V44", categorie: "Pilotage / SMI", statut: "VALIDE", date: "21/02/2026" },
  { id: "D05", nom: "Tableau Action Général Loris", categorie: "Pilotage / Actions", statut: "VALIDE", date: "Fév 2026" },
  { id: "D06", nom: "Rapport Audit Manèges CEEV", categorie: "Audit technique", statut: "VALIDE", date: "19/02/2026" },
  { id: "D07", nom: "Rapport Expertise Stratégique V3", categorie: "Rapport stratégique", statut: "VALIDE", date: "13/02/2026" },
  { id: "D11", nom: "CERFA 13824*04 (draft)", categorie: "Administratif / Réglementaire", statut: "EN ATTENTE SIGNATURE", date: "Fév 2026" },
  { id: "D14", nom: "Convention d'Occupation — Mairie Menton", categorie: "Juridique", statut: "VALIDE", date: "2026" },
  { id: "D16", nom: "Avis Favorable Sous-Commission Sécurité", categorie: "Réglementaire", statut: "VALIDE", date: "Fév 2026" },
  { id: "D32", nom: "Facture SECURE Phase 1 — 13/02/2026", categorie: "Facturation", statut: "VALIDE", date: "13/02/2026" },
  { id: "D34", nom: "Facture SECURE Phase 2 — 17/02/2026", categorie: "Facturation", statut: "VALIDE", date: "17/02/2026" },
  { id: "D42", nom: "Tableau de Pilotage Opérationnel", categorie: "Livrable SECURE", statut: "VALIDE", date: "Fév 2026" },
  { id: "D43", nom: "Affiche Consignes Sécurité", categorie: "Livrable SECURE", statut: "VALIDE", date: "Fév 2026" },
  { id: "D44", nom: "Rapport Synthèse Manèges — John", categorie: "Rapport", statut: "VALIDE", date: "Fév 2026" },
  { id: "D46", nom: "Koaland Book Commercial", categorie: "Commercial", statut: "VALIDE", date: "Nov 2026" },
  { id: "D47", nom: "Spécifications eKoaland", categorie: "Projet", statut: "VALIDE", date: "2026" },
];

export const ZONES = [
  { nom: "Accueil / Entrée", zone: "Zone Sud", statut: "OUVERTE", couleur: "green", equipements: "Caisse, comptage jauge, affichages obligatoires" },
  { nom: "Allées / Manèges", zone: "Zone Sud", statut: "OUVERTE", couleur: "green", equipements: "Carrousel 1900, Chaises Volantes, Trampolines, Mini-Golf" },
  { nom: "Jeux d'eau", zone: "Zone Sud", statut: "OUVERTE", couleur: "green", equipements: "Pêche aux Canards" },
  { nom: "Restauration / Snack", zone: "Zone Sud", statut: "OUVERTE", couleur: "green", equipements: "Snack Burger, hotte, gaz" },
  { nom: "Locaux Techniques", zone: "Zone Sud", statut: "ACCÈS RESTREINT", couleur: "orange", equipements: "Tableaux électriques, stockage" },
  { nom: "Padel", zone: "Zone Nord", statut: "INTERDITE AU PUBLIC", couleur: "red", equipements: "Balisage Heras opaque obligatoire" },
  { nom: "eKoaland", zone: "Zone Nord", statut: "EN PROJET", couleur: "blue", equipements: "Livraison matériel prévue juin 2026" },
  { nom: "Gonflables", zone: "Zone Nord", statut: "SUSPENDUE", couleur: "orange", equipements: "Lestage béton en cours" },
];

export const KPI = [
  { label: "Levée de réserves", objectif: "100%", valeur: "15%", tendance: "up", unite: "%", score: 15 },
  { label: "Score risque moyen", objectif: "< 10/25", valeur: "18/25", tendance: "down", unite: "/25", score: 18, inverted: true },
  { label: "Conformité évacuation", objectif: "> 300%", valeur: "334%", tendance: "stable", unite: "%", score: 334 },
  { label: "Confiance Mairie", objectif: "5/5", valeur: "2/5", tendance: "up", unite: "/5", score: 2 },
  { label: "Budget sécurité consommé", objectif: "8 300 €", valeur: "2 500 €", tendance: "up", unite: "€", score: 2500 },
];

export const STATUTS_ACTIONS = ["A faire", "En cours", "Commandé", "En attente", "Validé", "Terminé", "Bloqué"];

export const STATUTS_PIECES = ["Manquant", "En attente", "Partiel", "Signature manquante", "En cours", "Reçu", "Validé"];
