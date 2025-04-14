const fs = require('fs');
const path = require('path');

// Importe tes données
const creations = require('../data/creation.json');

// Ton domaine (local ou prod)
const BASE_URL = 'https://jsnakare.dev'; // Change pour ton domaine

// Routes statiques
const staticRoutes = [
    '/',
    '/contact',
];

// Routes dynamiques
const dynamicRoutes = creations.map(item => `/closeup/${item.title}`);

// Combine le tout
const allRoutes = [...staticRoutes, ...dynamicRoutes];

// Génère le XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
        route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`
    )
    .join('')}
</urlset>`;

// Écrit le fichier
fs.writeFileSync(path.resolve(__dirname, '../../public/sitemap.xml'), sitemapXml);

console.log('✅ sitemap.xml généré avec succès 🎉');
