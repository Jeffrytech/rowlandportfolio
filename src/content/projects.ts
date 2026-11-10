import type { Media, MediaImage, Project, ProjectKind } from './types';

/**
 * ─────────────────────────────────────────────────────────────
 *  SELECTED WORK — REPLACE EVERYTHING MARKED "PLACEHOLDER"
 * ─────────────────────────────────────────────────────────────
 *  None of the entries below describe real clients, campaigns,
 *  results or credits. They exist so the layout can be reviewed.
 *
 *  To add a real project:
 *   1. Put images/videos in /public/media/<slug>/
 *   2. Copy one entry, change the slug, fill in the fields,
 *      add `src` to each media item and set `placeholder: false`.
 *   3. Set `kind` to 'commissioned' (client work) or
 *      'independent' (self-initiated / speculative work).
 *  Order in this array = order on the homepage.
 * ─────────────────────────────────────────────────────────────
 */

const PH = 'Placeholder —';

/** Helper for placeholder frames until real media is supplied. */
const frame = (alt: string, ratio: number, tone: string, caption?: string): MediaImage => ({
  type: 'image',
  alt,
  ratio,
  tone,
  caption,
});

interface Seed {
  slug: string;
  n: string;
  kind: ProjectKind;
  discipline: string[];
  tone: [string, string, string];
  ratio: number;
}

const seeds: Seed[] = [
  { slug: 'project-01', n: '01', kind: 'commissioned', discipline: ['Fashion Campaign', 'Creative Direction'], tone: ['#8a7a6a', '#4a3f36', '#c8b9a6'], ratio: 4 / 5 },
  { slug: 'project-02', n: '02', kind: 'commissioned', discipline: ['Art Direction', 'Editorial'], tone: ['#5d6660', '#2d3330', '#a9b0a6'], ratio: 3 / 4 },
  { slug: 'project-03', n: '03', kind: 'independent', discipline: ['AI-Assisted Production', 'Visual Storytelling'], tone: ['#6e5f72', '#2f2733', '#b8aabb'], ratio: 1 },
  { slug: 'project-04', n: '04', kind: 'commissioned', discipline: ['Fashion Campaign', 'Art Direction'], tone: ['#9a6d52', '#4b3022', '#d6b49a'], ratio: 4 / 5 },
  { slug: 'project-05', n: '05', kind: 'independent', discipline: ['Creative Direction', 'Film'], tone: ['#4f5a68', '#1f252d', '#9ea8b5'], ratio: 16 / 10 },
  { slug: 'project-06', n: '06', kind: 'commissioned', discipline: ['Visual Storytelling', 'Brand World'], tone: ['#7d7a5c', '#3a382a', '#c1bea0'], ratio: 3 / 4 },
  { slug: 'project-07', n: '07', kind: 'independent', discipline: ['AI-Assisted Production', 'Fashion Concept'], tone: ['#6a4f4f', '#2e2121', '#b99c9c'], ratio: 4 / 5 },
  { slug: 'project-08', n: '08', kind: 'commissioned', discipline: ['Art Direction', 'Lookbook'], tone: ['#5a5a58', '#262625', '#b0afab'], ratio: 1 },
];

const build = (s: Seed): Project => {
  const [mid, deep, light] = s.tone;
  const label = (what: string) => `${PH} ${what} for project ${s.n}`;
  const visuals: Media[] = [
    frame(label('detail image'), 4 / 5, mid, 'Placeholder caption — describe the frame'),
    frame(label('wide image'), 3 / 2, deep),
    frame(label('portrait image'), 3 / 4, light),
    frame(label('detail image'), 1, mid),
  ];
  return {
    slug: s.slug,
    placeholder: true,
    title: `Project Title ${s.n}`,
    standfirst: `${PH} a one-line editorial summary of the idea behind project ${s.n}.`,
    kind: s.kind,
    client: s.kind === 'commissioned' ? 'Client name (placeholder)' : undefined,
    year: 'Year',
    disciplines: s.discipline,
    role: ['Role (placeholder)'],
    cover: frame(label('cover image'), s.ratio, mid),
    hero: frame(label('full-bleed hero image'), 16 / 9, deep),
    overview: `${PH} two or three sentences introducing the project: what it was, who it was for and where it lived (print, digital, out-of-home, film).`,
    challenge: `${PH} the brief and the tension inside it. What problem had to be solved, and what made it difficult?`,
    insight: `${PH} the creative idea that unlocked the work — the observation, reference or cultural truth that shaped every decision.`,
    roleDetail: `${PH} exactly what you were responsible for: e.g. concept, moodboards, casting direction, set and styling direction, on-set art direction, AI image pipeline, retouch direction, final selects. Only list what you personally did.`,
    process: [
      { title: 'Research & Reference', body: `${PH} how the visual language was researched and assembled.` },
      { title: 'Concept & Treatment', body: `${PH} how the idea was developed and presented.` },
      { title: 'Production', body: `${PH} the shoot, build or generation process and the team you directed.` },
      { title: 'Post & Delivery', body: `${PH} edit, grade, retouch and roll-out across channels.` },
    ],
    selectedVisuals: visuals,
    finalExecution: {
      body: `${PH} describe the final campaign or deliverables and where they appeared. Do not include results unless you can verify them.`,
      media: [frame(label('final campaign image'), 16 / 9, deep), frame(label('final campaign image'), 4 / 5, light)],
    },
    credits: [],
  };
};

export const projects: Project[] = seeds.map(build);

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
