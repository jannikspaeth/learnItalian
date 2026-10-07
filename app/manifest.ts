import type { MetadataRoute } from 'next';

// Makes the app installable ("Add to Home Screen"): own icon, opens full screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sprachen lernen',
    short_name: 'Sprachen',
    description: 'Italian, Spanish and French vocabulary, verbs and grammar for German speakers',
    start_url: '/heute',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FBF6EE',
    theme_color: '#FBF6EE',
    lang: 'de',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
