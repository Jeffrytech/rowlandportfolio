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

export const kindLabel = (k: ProjectKind, long = false) =>
  k === 'commissioned' ? 'Commissioned' : k === 'independent' ? (long ? 'Independent / Speculative' : 'Independent') : 'Type TBC';

/** Real image helper. `base` is the path without the width suffix, e.g. "/media/project-01/train-01". */
const photo = (base: string, widths: number[], alt: string, opts: Partial<MediaImage> = {}): MediaImage => ({
  type: 'image',
  src: `${base}-${widths[widths.length - 1]}.webp`,
  srcSet: widths.map((w) => `${base}-${w}.webp ${w}w`).join(', '),
  alt,
  ratio: 4 / 5,
  ...opts,
});

const train = (n: string, alt: string, opts?: Partial<MediaImage>) => photo(`/media/project-01/train-${n}`, [800, 928], alt, opts);
const field = (n: string, alt: string, opts?: Partial<MediaImage>) => photo(`/media/project-03/field-${n}`, [800, 1600], alt, opts);
const porch = (n: string, alt: string, opts?: Partial<MediaImage>) => photo(`/media/project-02/porch-${n}`, [800, 1600], alt, opts);

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
  /** Real content overrides — anything set here replaces the generated placeholder. */
  real?: Partial<Project>;
}

const seeds: Seed[] = [
  {
    slug: 'project-01',
    n: '01',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion Editorial'],
    tone: ['#7d8a6e', '#3d4636', '#b9c2ad'],
    ratio: 4 / 5,
    real: {
      title: 'Train Series', // working title — rename
      cover: train('02', 'A woman with curly auburn hair in a pale blue linen shirt and beige trousers leans against an open train door, palm trees behind her, looking back at the camera.'),
      hero: train('01', 'Seen from behind, a woman in a blue linen shirt holds a brass rail in an open train doorway, one hand in her hair, facing a dense palm forest.', { position: '50% 35%' }),
      selectedVisuals: [
        train('03', 'Close portrait of a woman with sunlit curly hair in a blue linen shirt, glancing over her shoulder against blurred palms.'),
        train('02', 'A woman in linen leans against the train door frame, one hand on the rail and one in her pocket, palms filling the doorway.'),
      ],
    },
  },
  {
    slug: 'project-02',
    n: '02',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion Editorial'],
    tone: ['#a08f78', '#4a4034', '#d8ccba'],
    ratio: 4 / 5,
    real: {
      title: 'Porch Series', // working title — rename
      cover: porch('01', 'A woman with dark curly hair in a white broderie anglaise dress and black ankle boots sits in a weathered wooden chair on a sunlit porch, chin resting on her hand.'),
      hero: porch('02', 'On a sunlit porch, a woman in a white eyelet dress hugs her knees in a wooden chair, shading her eyes from the light with one hand.', { position: '50% 30%' }),
      selectedVisuals: [
        porch('01', 'A woman in a white eyelet dress sits forward in a wooden porch chair, chin on her hand, striped shadows across the deck.'),
      ],
    },
  },
  {
    slug: 'project-03',
    n: '03',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion Editorial'],
    tone: ['#5e6b52', '#2c3326', '#a8b39a'],
    ratio: 4 / 5,
    real: {
      title: 'Field Series', // working title — rename
      cover: field('01', 'A platinum-haired model with red lips, in a sculptural crimson and charcoal taffeta gown and red patent boots, leans forward on a green velvet sofa in an open grass field beside a red retro television.'),
      hero: field('03', 'Rolling green hills frame a model seated cross-legged on a green velvet sofa in a field, wearing a voluminous red and grey taffeta gown and red boots, a red vintage TV on a tulip stand beside her.', { position: '50% 40%' }),
      selectedVisuals: [
        field('02', 'From above, a model in a draped red and charcoal gown reclines against a green velvet sofa on dry grass, hands at her shoulders, beside a red television showing static.'),
        field('01', 'Close framing of the model perched on the sofa arm, staring into the lens, the red television and its antennae in the foreground.'),
      ],
    },
  },
  { slug: 'project-04', n: '04', kind: 'tbc', discipline: ['Fashion Campaign', 'Art Direction'], tone: ['#9a6d52', '#4b3022', '#d6b49a'], ratio: 4 / 5 },
  { slug: 'project-05', n: '05', kind: 'tbc', discipline: ['Creative Direction', 'Film'], tone: ['#4f5a68', '#1f252d', '#9ea8b5'], ratio: 16 / 10 },
  { slug: 'project-06', n: '06', kind: 'tbc', discipline: ['Visual Storytelling', 'Brand World'], tone: ['#7d7a5c', '#3a382a', '#c1bea0'], ratio: 3 / 4 },
  { slug: 'project-07', n: '07', kind: 'tbc', discipline: ['AI-Assisted Production', 'Fashion Concept'], tone: ['#6a4f4f', '#2e2121', '#b99c9c'], ratio: 4 / 5 },
  { slug: 'project-08', n: '08', kind: 'tbc', discipline: ['Art Direction', 'Lookbook'], tone: ['#5a5a58', '#262625', '#b0afab'], ratio: 1 },
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
    ...s.real,
  };
};

export const projects: Project[] = seeds.map(build);

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
