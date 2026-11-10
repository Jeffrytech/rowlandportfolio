import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

declare const process: { env: Record<string, string | undefined> };

/**
 * Social platforms (WhatsApp, LinkedIn, Facebook…) need absolute image URLs in link previews.
 * Netlify sets `URL` to the site's main address during builds, so we rewrite
 * root-relative preview URLs to absolute ones automatically. Locally nothing changes.
 */
const absoluteSocialUrls = (): Plugin => ({
  name: 'absolute-social-urls',
  transformIndexHtml(html) {
    const base = (process.env.SITE_URL || process.env.URL || '').replace(/\/$/, '');
    if (!base) return html;
    return html
      .replace(/(<meta (?:property|name)="(?:og:image|twitter:image)" content=")\//g, `$1${base}/`)
      .replace('<meta property="og:type"', `<meta property="og:url" content="${base}/" />\n    <meta property="og:type"`);
  },
});

export default defineConfig({
  plugins: [react(), absoluteSocialUrls()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['gsap', 'lenis', 'motion'],
        },
      },
    },
  },
});
