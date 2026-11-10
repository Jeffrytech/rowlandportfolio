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
const garden = (n: string, alt: string, opts?: Partial<MediaImage>) => photo(`/media/project-04/garden-${n}`, [800, 1600], alt, opts);
const sea = (n: string, alt: string, opts?: Partial<MediaImage>) => photo(`/media/project-05/sea-${n}`, [800, 1600], alt, opts);
const forest = (n: string, alt: string, opts?: Partial<MediaImage>) => photo(`/media/project-06/forest-${n}`, [800, 928], alt, opts);
const sky = (n: string, alt: string, opts?: Partial<MediaImage>) => {
  const w = n === '03' ? [800, 1600] : [800, 928];
  return photo(`/media/project-07/sky-${n}`, w, alt, opts);
};
const shore = (n: string, alt: string, opts?: Partial<MediaImage>) =>
  photo(`/media/project-08/shore-${n}`, n === '01' ? [800, 928] : [800, 1080], alt, opts);
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
  {
    slug: 'project-04',
    n: '04',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Period Editorial'],
    tone: ['#a07c5e', '#3e2e22', '#d9c0a4'],
    ratio: 4 / 5,
    real: {
      title: 'Garden Series', // working title — rename
      cover: garden('02', 'Seen from directly above, a couple in Regency-era dress spin hand in hand on a circular stone terrace, her empire-line gown blurred with movement.'),
      hero: garden('01', 'A laughing woman in a pale satin empire-line gown holds the hand of a man in a dark tailcoat as they walk through a lush garden.', { position: '50% 30%' }),
      selectedVisuals: [
        garden('03', 'Cropped detail of a woman in a flowing satin Regency gown walking across a lawn, hands clasped, a man’s dark sleeve at her back.'),
        garden('02', 'Overhead view of the couple turning together on the stone terrace, the gown’s hem swirling outward.'),
      ],
    },
  },
  {
    slug: 'project-05',
    n: '05',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion Editorial'],
    tone: ['#5f9a98', '#2a4a4a', '#cfe0d8'],
    ratio: 4 / 5,
    real: {
      title: 'Sea Series', // working title — rename
      cover: sea('03', 'A woman with loosely pinned fair hair and gold hoop earrings, in a cream ribbed tank top, looks into the camera with glittering turquoise sea and sand behind her.'),
      hero: sea('02', 'In profile, a woman in a cream tank top brushes her hair back from her forehead, sunlight sparkling on the turquoise water below.', { position: '50% 35%' }),
      selectedVisuals: [
        sea('01', 'Motion-blurred, off-kilter frame of a woman leaning forward, eyes lowered, hair in a loose bun, against bright, glinting sea.'),
        sea('03', 'Direct portrait of the model against the shimmering sea, the shoreline cutting diagonally across the top of the frame.'),
      ],
    },
  },
  {
    slug: 'project-06',
    n: '06',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion & Accessories'],
    tone: ['#4f5e44', '#1c2418', '#b9c2a8'],
    ratio: 4 / 5,
    real: {
      title: 'Forest Series', // working title — rename
      cover: forest('01', 'In a shaded forest clearing, a woman in a sage double-breasted coat and white lace skirt leans back in a wooden chair, eyes closed, a black leather handbag in her hand and an old television showing static beside her.'),
      hero: forest('04', 'A woman in a long sage coat stands against a tree trunk in a dark forest, her face in shadow and leaf shadows falling across the coat.', { position: '50% 45%' }),
      selectedVisuals: [
        forest('02', 'Still life in a forest: a black structured leather handbag resting on a small television showing static, set on a weathered wooden stool on moss.'),
        forest('03', 'A woman in a sage coat and lace skirt stands beneath the trees holding a black handbag in front of her, beside a television on a stool.'),
        forest('01', 'The model reclining in a wooden chair in dappled forest light, handbag at her side and a static-filled TV screen beside her.'),
      ],
    },
  },
  {
    slug: 'project-07',
    n: '07',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion Editorial'],
    tone: ['#9fb4bc', '#4a5a60', '#e8e4da'],
    ratio: 4 / 5,
    real: {
      title: 'Sky Series', // working title — rename
      cover: sky('04', 'Against a pale sky, a woman with curly copper hair in a textured powder-blue halter dress looks back over her bare shoulder, hand resting at her collarbone.'),
      hero: sky('03', 'Close portrait of a woman with sunlit copper curls glancing over her bare shoulder, a pale blue halter strap at her neck, soft hazy sky behind.', { position: '50% 30%' }),
      selectedVisuals: [
        sky('01', 'Low-angle shot of a smiling woman with curly copper hair in a blue crinkled halter dress, gazing up into a soft white sky.'),
        sky('02', 'From below, a barefoot woman in a fitted powder-blue halter dress steps forward along a ledge, one arm raised against the sky.'),
        sky('04', 'The model turns her open back to the camera, looking over her shoulder in the textured blue dress.'),
      ],
    },
  },
  {
    slug: 'project-08',
    n: '08',
    kind: 'tbc', // ← set to 'commissioned' or 'independent'
    discipline: ['Creative Direction', 'Fashion Editorial'],
    tone: ['#8a857c', '#3a3733', '#d8d3c8'],
    ratio: 4 / 5,
    real: {
      title: 'Shore Series', // working title — rename
      cover: shore('03', 'Black-and-white image of a laughing woman with long windswept hair, in a dark tailored blazer and long skirt, leaping barefoot across wet sand at the water’s edge.'),
      hero: shore('01', 'Black-and-white image of a barefoot woman in a dark oversized suit standing at the shoreline, arms stretched straight above her head, face turned to the sky.', { position: '50% 30%' }),
      selectedVisuals: [
        shore('02', 'Soft-focus black-and-white image of the woman walking away along the shoreline, blazer and long skirt moving, one arm swinging out.'),
        shore('03', 'The model mid-stride on wet sand, lifting her skirt as she runs and laughs beside the breaking waves.'),
      ],
    },
  },
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
