# Rowland Jeff Igboanugo — Portfolio

Editorial portfolio for a Creative & Art Director. React 19 + TypeScript + Vite, with GSAP (ScrollTrigger), Lenis smooth scrolling and Motion for transitions. Deploys to Netlify.

```bash
npm install
npm run dev       # local development
npm run build     # type-check + production build into /dist
npm run preview   # serve the production build
```

## Deploying to Netlify

Connect the repository in Netlify. `netlify.toml` already sets the build command (`npm run build`), publish directory (`dist`), Node 22, the SPA redirect that makes `/work/<slug>` routes work on refresh, and long-term caching for hashed assets.

## Where to put your real content

All content lives in **`src/content/`**. You should not need to touch components to update the site.

| What | File | Notes |
| --- | --- | --- |
| Email, LinkedIn, CV, location, availability | `src/content/site.ts` → `contact`, `location`, `availability` | Empty values are hidden (or shown as a labelled placeholder for email), so there are never dead links. |
| Biography, lede, philosophy, portrait, key facts | `src/content/site.ts` → `about` | Portrait goes in `/public/media/` and is referenced as `/media/portrait.jpg`. |
| Capabilities | `src/content/site.ts` → `capabilities` | |
| Showreel | `src/content/site.ts` → `showreel.src` / `poster` | The Showreel section and nav link only appear once `src` is set. |
| Production URL (canonical / social cards) | `src/content/site.ts` → `url` | e.g. `https://yourdomain.com` |
| Projects & case studies | `src/content/projects.ts` | Replace the generated placeholder entries with real ones (see below). |
| Project images & video | `public/media/<project-slug>/` | See `public/media/README.md` for sizes. |
| Social share image | `public/og-image.png` | 1200×630. |
| Favicon | `public/favicon.svg` | |
| Default SEO description | `index.html` and `site.seo.description` | |

### Adding a real project

Each project in `projects.ts` follows the `Project` type in `src/content/types.ts`:

- `slug` — becomes the URL `/work/<slug>`
- `kind` — `'commissioned'` (client work) or `'independent'` (self-initiated / speculative). This drives the labels and the filter on the homepage.
- `client`, `year`, `role`, `disciplines`
- `cover` (homepage gallery), `hero` (case-study full-bleed)
- `overview`, `challenge`, `insight`, `roleDetail`, `process[]`
- `selectedVisuals[]`, `finalExecution { body, media[] }`
- `credits[]` — only confirmed collaborators
- `placeholder: false` — removes the "placeholder content" notice on the case study

Every media item needs `alt` (meaningful description) and `ratio` (width / height, e.g. `4 / 5`) to prevent layout shift. Add `src` to swap a placeholder frame for the real image. Videos (`type: 'video'`) load only when they scroll near the viewport.

The placeholder projects are clearly labelled. They do **not** describe real clients, campaigns, results or credits.

## Architecture

```
src/
  content/        site.ts, projects.ts, types.ts   ← edit these
  components/
    sections/     Hero, Interlude, Work (gallery + index), About, Capabilities, Showreel, Contact
    SmoothScroll  Lenis + GSAP ticker / ScrollTrigger integration
    SplitText     character / word reveal
    MediaFrame    image / lazy video / labelled placeholder
    Nav, Footer, Cursor, Intro, PageTransition, Reveal, Grain
  pages/          Home, CaseStudy (/work/:slug), NotFound
  hooks/          useReducedMotion, useMeta (per-route title, description, Open Graph)
  styles/         global.css (design tokens, layout, responsive, reduced-motion)
```

Accessibility & motion: with `prefers-reduced-motion`, Lenis, the intro, scroll-scrubbed effects, text reveals, the marquee and the grain animation are all disabled, and the page transition becomes a simple fade.
