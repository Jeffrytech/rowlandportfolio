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
  crumb: 'Part 1 & Part 2',
  standfirst:
    'Taking an existing beach key visual that felt flat and artificial, making it feel real, warm and alive, and then exploring new cinematic moments around it.',

  before: {
    src: `${M}/before-1600.webp`,
    srcSet: `${M}/before-1000.webp 1000w, ${M}/before-1600.webp 1600w`,
    alt: 'Original key visual: a smooth, bright beach in front of curved white apartment towers, with a couple on a lounger, a man walking, a girl building a sandcastle and a golden dog by the water under a flat blue sky.',
  },
  after: {
    src: `${M}/after-v3-2000.webp`,
    srcSet: `${M}/after-v3-1000.webp 1000w, ${M}/after-v3-1600.webp 1600w, ${M}/after-v3-2000.webp 2000w`,
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
        after: `${M}/detail-sand-after-v3.webp`,
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
        after: `${M}/detail-sky-after-v3.webp`,
        ratio: 1000 / 480,
        beforeAlt: 'Before: a flat, bright blue sky.',
        afterAlt: 'After: a soft sky with thin, layered clouds.',
      },
    },
    {
      title: 'Natural water',
      body: 'The sea was a strong, saturated turquoise. I made it softer and calmer to match the cloudy sky, with gentle ripples, a line of white foam where the water meets the sand, and wet sand that reflects the people standing on it.',
      detail: {
        title: 'Water',
        before: `${M}/detail-sea-before-v2.webp`,
        after: `${M}/detail-sea-after-v2.webp`,
        ratio: 360 / 280,
        beforeAlt: 'Before: strong turquoise water with sharp ripples running onto smooth sand.',
        afterAlt: 'After: calmer, softer sea with gentle ripples and a line of white foam on the sand.',
      },
    },
    {
      title: 'Realism and depth in the little girl',
      body: 'In the original, the girl looked pasted on. Her edges were soft, her skin looked smooth like plastic, and her sandcastle looked like clay. I rebuilt her so she truly belongs in the scene:',
      points: [
        'Light: she has the same soft, even light from the cloudy sky as everyone else on the beach, so she no longer stands out.',
        'Grounding: her bare feet sink slightly into the sand, so she sits on the beach instead of floating above it.',
        'Touch: her hands press into the sand, and the sand clumps and piles up around them.',
        'Details: her ponytail, the folds in her clothes and her skin tone match the rest of the picture.',
        'Size and focus: she is the right size for how far she is from the camera, and as sharp as the people near her.',
      ],
      detail: {
        title: 'The little girl',
        before: `${M}/detail-girl-before.webp`,
        after: `${M}/detail-girl-after-v3.webp`,
        ratio: 400 / 260,
        beforeAlt: 'Before: a soft-edged girl kneeling beside a clay-like sandcastle.',
        afterAlt: 'After: a girl crouching with her hands pressed into the sand, in soft natural light with real sand texture.',
      },
    },
    {
      title: 'Life at the water’s edge',
      body: 'I added two boys throwing a beach ball in the shallow water, with a dog jumping between them. This brings movement and joy, so the beach feels lived in, not staged, and tells a small visual story. Their laughter, the water washing around their feet and their reflections in the wet sand make it feel like a real moment caught on camera.',
      detail: {
        title: 'Water, boys and dog',
        before: `${M}/detail-water-before.webp`,
        after: `${M}/detail-water-after-v3.webp`,
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
    // Rowland's own explanation, lightly edited for clarity.
    paragraphs: [
      'AI editing of an existing image is not perfect, especially when you make more than two edits on the same image. Each extra edit makes the image more blurry, and the people in it can start to lose a finger or have their face fade out.',
      'To get the details accurate, I had to upscale and enhance the visual so the fine details were clearly visible.',
      'In conclusion, I would say it is much better to edit an existing image only two to three times, to avoid heavy blur, lost fingers and fading faces. The other option is to write a prompt from scratch. This gives a much better image, and it can be edited more than five times.',
    ],
  },

  part2: {
    title: 'Part 2 · Creative Exploration',
    brief: [
      'Starting from the same key visual, this part allowed more creative freedom: new camera angles and compositions, while keeping the architecture, the beach and the sense of depth clear in every frame.',
      'The aim was a contemporary, aspirational beach lifestyle with cinematic light and real moments, while staying culturally sensitive in wardrobe and relevant to the Middle East.',
    ],
    frames: [
      {
        title: 'Catch',
        body: 'A wider frame on the sand. The ball is in the air, the dog jumps for it and the boys laugh. Kite surfers in the sky and the line of umbrellas and towers give the scene depth.',
        alt: 'Two boys throw a beach ball on the sand while a curly brown dog leaps for it, with kite surfers in the sky and towers and umbrellas along the beach.',
        base: `${M}/p2-frame-2`,
      },
      {
        title: 'Family time',
        body: 'A mother on the lounger, her daughter pouring sand into her hand, and the boys playing ball behind them. Three layers, front, middle and back, tell one family story in a single frame.',
        alt: 'A mother in a long pink dress and sun hat reclines on a lounger as her young daughter pours sand into her hand, while two boys play with a beach ball by the water.',
        base: `${M}/p2-frame-4`,
      },
      {
        title: 'A quiet moment',
        body: 'A close, calm frame of a couple on a lounger in soft late-afternoon light. Linen, long sleeves and a long dress keep the wardrobe elegant and modest. The beach curves away behind them.',
        alt: 'A couple relax together on a beach lounger, he in a light blue linen shirt and she in a long pink dress, sun hat and sunglasses, with kite surfers over the sea.',
        base: `${M}/p2-frame-3`,
      },
    ],
  },
};

