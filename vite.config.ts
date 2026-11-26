import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { projects } from './src/content/projects';

declare const process: { env: Record<string, string | undefined> };

/**
 * Social platforms (WhatsApp, LinkedIn, Facebook…) need absolute image URLs in link previews.
 * Netlify sets `URL` and Vercel sets `VERCEL_PROJECT_PRODUCTION_URL` during builds, so we rewrite
 * root-relative preview URLs to absolute ones automatically. Locally nothing changes.
 */
const absoluteSocialUrls = (): Plugin => ({
  name: 'absolute-social-urls',
  transformIndexHtml(html) {
    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    const base = (process.env.SITE_URL || process.env.URL || (vercel ? `https://${vercel}` : '')).replace(/\/$/, '');
    if (!base) return html;
    return html
      .replace(/(<meta (?:property|name)="(?:og:image|twitter:image)" content=")\//g, `$1${base}/`)
      .replace('<meta property="og:type"', `<meta property="og:url" content="${base}/" />\n    <meta property="og:type"`);
  },
});

/**
 * Writes a real HTML file for every route (e.g. /projectresult/index.html, /work/project-01/index.html)
 * so direct links work on any static host, even without rewrite rules.
 * The unlisted /projectresult page also gets its own title and a noindex tag.
 */
const staticRoutes = (): Plugin => ({
  name: 'static-routes',
  enforce: 'post',
  generateBundle(_opts, bundle) {
    const index = bundle['index.html'];
    if (!index || index.type !== 'asset') return;
    const html = String(index.source);
    for (const slug of projects.map((p) => p.slug)) {
      this.emitFile({ type: 'asset', fileName: `work/${slug}/index.html`, source: html });
    }
    const unlisted = html
      .replace(/<title>[^<]*<\/title>/, '<title>Luxury Beach Island | Rowland Jeff Igboanugo</title>')
      .replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <meta name="robots" content="noindex, nofollow" />');
    this.emitFile({ type: 'asset', fileName: 'projectresult/index.html', source: unlisted });
  },
});

export default defineConfig({
  plugins: [react(), absoluteSocialUrls(), staticRoutes()],
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
