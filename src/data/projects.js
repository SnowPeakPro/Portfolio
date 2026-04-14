/*
 * Project definitions for the portfolio.
 *
 * Each project entry contains a unique slug, a human‑readable title, a
 * category, a short description and a list of technologies used. This
 * data drives the projects section and can be extended without
 * modifying the UI components.
 */
export const projects = [
  {
    slug: 'sae-reseau-multi-site',
    title: 'SAE réseau multi-site',
    category: 'SAE',
    shortDescription: "Conception et mise en place d'une infrastructure multi‑site.",
    technologies: ['Réseaux', 'VLAN', 'Routage', 'Sécurité'],
  },
  {
    slug: 'scripts-powershell-atera',
    title: 'Scripts PowerShell Atera',
    category: 'Scripts',
    shortDescription:
      "Automatisation de tâches d'administration et de supervision Windows.",
    technologies: ['PowerShell', 'Windows', 'Atera'],
  },
];