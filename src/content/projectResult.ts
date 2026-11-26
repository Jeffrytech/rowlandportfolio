/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECT RESULT (unlisted page at /projectresult)
 * ─────────────────────────────────────────────────────────────
 *  This page is NOT linked from the homepage and asks search
 *  engines not to list it. Only people you send the link to will
 *  find it. Anyone who has the link can still open it.
 * ─────────────────────────────────────────────────────────────
 */

const M = '/media/project-result';

export interface DetailPair {
  title: string;
  before: string;
  after: string;
  ratio: number;
  beforeAlt: string;
  afterAlt: string;
}

export interface Edit {
  title: string;
  body: string;
  points?: string[];
  detail?: DetailPair;
}

export const projectResult = {
  title: 'Luxury Beach Island',
  part: 'Part 1 · Key Visual Enhancement',
  standfirst:
    'Taking an existing beach key visual that felt flat and artificial, and making it feel real, warm and alive, without moving the architecture.',

  before: {
    src: `${M}/before-1600.webp`,
    srcSet: `${M}/before-1000.webp 1000w, ${M}/before-1600.webp 1600w`,
    alt: 'Original key visual: a smooth, bright beach in front of curved white apartment towers, with a couple on a lounger, a man walking, a girl building a sandcastle and a golden dog by the water under a flat blue sky.',
  },
  after: {
    src: `${M}/after-2000.webp`,
    srcSet: `${M}/after-1000.webp 1000w, ${M}/after-1600.webp 1600w, ${M}/after-2000.webp 2000w`,
    alt: 'Enhanced key visual: the same curved white towers above a textured, lived-in beach under a soft cloudy sky, with a couple on loungers, a girl digging in the sand, a man walking, and two boys throwing a beach ball in the shallow water while a dog jumps between them.',
  },
  ratio: 2000 / 1116,

  brief: [
    'The goal was to improve an existing key visual for a luxury beach island, giving it more realism, authenticity and depth.',
    'The architecture, composition and camera angle had to stay the same. The work was about the lighting, time of day, atmosphere, textures and overall photorealism.',
    'The original image felt artificial and flat. The aim was to make it feel natural, believable and inviting, like a real moment on a real beach.',
  ],

  edits: [
    {
      title: 'Sand with real texture',
      body: 'The original sand was too smooth and too clean, like a computer render. I added the small imperfections a real beach has: footprints, ridges, dips and rake marks. Now it looks like a beach people walk on every day.',
      detail: {
        title: 'Sand',
        before: `${M}/detail-sand-before.webp`,
        after: `${M}/detail-sand-after.webp`,
        ratio: 1000 / 356,
        beforeAlt: 'Before: smooth, even sand with a blurred plant in the foreground.',
        afterAlt: 'After: sand full of footprints, ridges and tracks.',
      },
    },
    {
      title: 'A believable sky',
      body: 'The sky was a flat, perfect blue gradient. I replaced it with a soft sky with thin, layered clouds. This also softened the light across the whole picture, so the shadows and colours feel like a real day by the sea.',
      detail: {
        title: 'Sky',
        before: `${M}/detail-sky-before.webp`,
        after: `${M}/detail-sky-after.webp`,
        ratio: 1000 / 480,
        beforeAlt: 'Before: a flat, bright blue sky.',
        afterAlt: 'After: a soft sky with thin, layered clouds.',
      },
    },
    {
      title: 'Natural water',
      body: 'The sea was one strong, flat blue. I made it calmer and more natural: lighter colour near the shore, small waves, white foam where the water meets the sand, and wet sand that reflects the people standing on it.',
    },
    {
      title: 'Realism and depth in the little girl',
      body: 'In the original, the girl looked pasted on. Her edges were soft, the light on her was flat, and her sandcastle looked like clay. I rebuilt her so she truly belongs in the scene:',
      points: [
        'Light: the sun falls on her from the same direction as on everyone else.',
        'Shadow: a soft shadow sits right under her feet and hands, so she is on the ground, not floating above it.',
        'Touch: her hands press into the sand, and the sand clumps and piles up around them.',
        'Details: her ponytail, the folds in her clothes and her skin tone match the rest of the picture.',
        'Size and focus: she is the right size for how far she is from the camera, and as sharp as the people near her.',
      ],
      detail: {
        title: 'The little girl',
        before: `${M}/detail-girl-before.webp`,
        after: `${M}/detail-girl-after.webp`,
        ratio: 400 / 260,
        beforeAlt: 'Before: a soft, flatly lit girl kneeling beside a clay-like sandcastle.',
        afterAlt: 'After: a girl crouching with her hands pressed into the sand, with natural light, shadow and texture.',
      },
    },
    {
      title: 'Life at the water’s edge',
      body: 'I added two boys throwing a beach ball in the shallow water, with a dog jumping between them. This brings movement and joy, so the beach feels lived in, not staged. Their reflections in the wet sand help them sit naturally in the scene.',
      detail: {
        title: 'Water, boys and dog',
        before: `${M}/detail-water-before.webp`,
        after: `${M}/detail-water-after.webp`,
        ratio: 900 / 520,
        beforeAlt: 'Before: a saturated blue sea with a golden dog walking along the shore.',
        afterAlt: 'After: a softer, natural sea with foam and reflections, two boys throwing a beach ball and a dog jumping between them.',
      },
    },
    {
      title: 'One natural colour grade',
      body: 'Finally, I colour graded the whole image: softer blues, warmer sand and natural skin tones. This ties every change together, so it feels like one photo taken in one moment.',
    },
  ] as Edit[],

  challenge: {
    body: 'AI editing of an existing image is not perfect. After more than two edits on the same image, the quality starts to drop: the picture gets blurry, faces can fade, and hands can lose fingers.',
    learnings: [
      'Edit an existing image no more than twice, then start again from the best version.',
      'For bigger changes, write a new prompt from scratch. It gives a sharper base that can take five or more edits without breaking down.',
      'Zoom in after every edit to check faces, hands and fingers before moving on.',
    ],
  },
};
