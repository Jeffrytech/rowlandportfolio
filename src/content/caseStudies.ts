import type { ProcessStep } from './types';

/**
 * ─────────────────────────────────────────────────────────────
 *  CASE-STUDY COPY — one entry per project slug
 * ─────────────────────────────────────────────────────────────
 *  Written from what is visible in each image series.
 *  Kept deliberately simple: short sentences, everyday words.
 *  No clients, results or awards are claimed here.
 *  Edit freely — anything you change here appears on the site.
 * ─────────────────────────────────────────────────────────────
 */

export interface CaseStudyCopy {
  standfirst: string;
  overview: string;
  challenge: string;
  insight: string;
  roleDetail: string;
  process: ProcessStep[];
  finalBody: string;
  /** Optional notice shown under the standfirst (e.g. brand disclaimers). */
  note?: string;
}

const QOVAI = 'Qovai, a fashion AI agent tool';

const role = (extra: string) =>
  `I was the Creative & Art Director. I came up with the idea and decided how everything should look: the clothes, the colours, the place and the props. ${extra} I wrote the directions for ${QOVAI}, chose the best images and made sure they all felt like one story.`;

const production = (what: string) => ({
  title: 'Production with Qovai',
  body: `The campaign was made using ${QOVAI}. ${what} Qovai made many versions of each picture. I compared them side by side, asked for changes, and kept going until every detail looked right.`,
});

const finishing = (what: string) => ({
  title: 'Selecting & Finishing',
  body: `I picked only the strongest pictures. ${what} Then I put them in an order that tells a small story, from the first look to the last.`,
});

export const caseStudies: Record<string, CaseStudyCopy> = {
  'project-01': {
    standfirst: 'A slow train, an open door and a warm, sleepy afternoon in the tropics.',
    overview:
      'Train Series is a travel fashion story. A woman in a soft blue linen shirt and beige trousers stands in the open door of an old train, with palm trees rushing past. It is made for people who love easy holiday clothes and slow, beautiful journeys.',
    challenge:
      'Linen clothes are simple. On a plain background they can look ordinary. The challenge was to make simple clothes feel like an adventure, without making them look fussy.',
    insight:
      'An open train door is a frame inside a frame. It makes you feel like you are travelling too, and it lets the clothes move in the wind.',
    roleDetail: role('I chose the train door as the main “stage” and the soft blue and sand colours.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I collected pictures of old trains, jungle journeys and warm film photography. I chose a calm colour palette: sky blue, sand and deep green.',
      },
      {
        title: 'Audience',
        body: 'This story is for women who love to travel and like comfortable, natural fabrics. They want clothes that look good on a long journey and still feel relaxed. Warm light, linen and a train ride speak to that “slow travel” feeling.',
      },
      {
        title: 'Planning the Look',
        body: 'I kept the outfit simple: a loose blue linen shirt and high-waisted beige trousers. I planned poses that use the brass rail and the door frame, like leaning, holding on and looking back.',
      },
      production(
        'I gave it clear directions: an open train door, a palm forest outside, warm afternoon light, a soft film-photo look and a relaxed model with curly hair.',
      ),
      finishing('I checked that the light, the hair and the clothes looked the same in every frame.'),
    ],
    finalBody:
      'The final story is three pictures: one looking out at the jungle, one leaning in the doorway looking back, and one close portrait. Together they feel like a single moment on one train ride.',
  },

  'project-02': {
    standfirst: 'White lace, a weathered wooden chair and the slow heat of a summer porch.',
    overview:
      'Porch Series is a summer story about rest. A woman in a white broderie anglaise dress and black boots relaxes in an old wooden chair on a sunny porch. It is made for people who love romantic, nostalgic summer clothes.',
    challenge:
      'White dresses are everywhere in summer. The challenge was to make this one feel personal and real, like a memory, not like a catalogue picture.',
    insight:
      'Hard sunlight makes stripes of shadow. Those shadows turn a simple porch into a picture full of texture, and they show off the tiny holes in the lace.',
    roleDetail: role('I chose the porch, the chair and the mix of soft white lace with tough black boots.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at old summer photographs, country houses and sun-bleached wood. The palette is warm white, honey and soft green.',
      },
      {
        title: 'Audience',
        body: 'This story is for women who like romantic clothes with a little edge. They enjoy slow summers, vintage pieces and natural beauty. Black boots under a white dress keep it from feeling too sweet.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned relaxed, honest poses: sitting cross-legged, leaning back lazily in the sun, hugging knees, shading the eyes and resting a chin on a hand. The chair is worn on purpose, so it feels lived-in.',
      },
      production(
        'I directed a sunny wooden porch, a weathered chair, strong summer light with stripy shadows, a white eyelet dress and black ankle boots.',
      ),
      finishing('I made sure the sunlight came from the same side and the lace looked crisp.'),
    ],
    finalBody:
      'The final story is four sunlit pictures on the same porch and chair. They move from a confident cross-legged pose to a sleepy lean back in the sun, with a playful and a thoughtful moment in between, like one lazy afternoon.',
  },

  'project-03': {
    standfirst: 'A living room left out in the hills: velvet, taffeta and a television full of static.',
    overview:
      'Field Series is a bold fashion editorial. A model with platinum hair and red lips wears a huge sculpted red and grey gown. She sits on a green velvet sofa in an empty field, next to an old red television. It is made for high-fashion readers who love surprising, art-like images.',
    challenge:
      'A big couture gown can easily look like a costume. The challenge was to make it feel modern and strange in a good way, so people stop scrolling and look twice.',
    insight:
      'Put indoor things in an outdoor world. A sofa and a TV in the middle of the hills feel like a dream, and the red gown, red boots and red TV tie the whole picture together.',
    roleDetail: role('I chose the “living room in a field” idea and the strong red-and-green colour story.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I gathered references from surreal art, 1970s design and dramatic couture shapes. The colour plan was simple: red against green, with grey hills as a quiet background.',
      },
      {
        title: 'Audience',
        body: 'This editorial is for fashion lovers who read magazines for ideas, not just clothes. They enjoy art, design and a little bit of drama. A surprising scene gives them something to talk about and share.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned three moods: strong and staring, relaxed and lying back, and sitting tall like a queen. Each pose shows the gown’s folds in a different way.',
      },
      production(
        'I directed rolling green hills, a tufted green velvet sofa, a red retro TV on a tulip stand, a sculptural red and charcoal taffeta gown, red patent boots and a platinum slicked-back hairstyle.',
      ),
      finishing('I checked that the reds matched in every frame and that the gown kept the same shape.'),
    ],
    finalBody:
      'The final story is three pictures: a close, intense look on the sofa, a wide view from above, and a full-length seated portrait with the hills behind. Together they read like pages from one magazine story.',
  },

  'project-04': {
    standfirst: 'A garden, a waltz and a laugh that belongs to another century.',
    overview:
      'Garden Series is a romantic period story. A couple in Regency-style clothes walk, laugh and dance in a lush garden and on a round stone terrace. It is made for people who love period dramas, love stories and soft, old-world romance.',
    challenge:
      'Period clothes can feel stiff and old. The challenge was to make them feel alive and fun, like real people falling in love, not a museum display.',
    insight:
      'Movement makes history feel real. A laugh, a spin and a blurred skirt tell you this is a happy moment happening right now.',
    roleDetail: role('I chose the garden setting, the warm golden colour and the dancing moment from above.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at period-drama films, old paintings of gardens and warm, golden film colours. The palette is champagne, deep green and soft stone.',
      },
      {
        title: 'Audience',
        body: 'This story is for people who love romance and history, from period-drama fans to brides looking for dreamy ideas. They want feeling and story, not just a dress on a hanger.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned an empire-line satin gown with puff sleeves for her and a dark tailcoat for him. I planned three kinds of moment: walking, laughing and dancing.',
      },
      production(
        'I directed a lush garden with big leaves and flowers, a round stone terrace seen from above, warm evening light, and a couple in Regency clothes moving naturally.',
      ),
      finishing('I kept the soft glow and the gentle blur, because they make the pictures feel like a memory.'),
    ],
    finalBody:
      'The final story is three pictures: the couple laughing in the garden, a detail of the gown as she walks, and the two of them spinning on the terrace from above.',
  },

  'project-05': {
    standfirst: 'Salt, sun and a cream cotton tank against water that will not stop sparkling.',
    overview:
      'Sea Series is a simple summer story. A woman with her hair in a loose bun, gold hoop earrings and a cream ribbed tank top stands above a bright turquoise sea. It is made for people who love easy basics, simple jewellery and summer days by the water.',
    challenge:
      'A plain tank top is one of the simplest pieces of clothing there is. The challenge was to make something so simple feel special and full of light.',
    insight:
      'Let the background do the shining. Thousands of tiny sparkles on the water make a simple outfit glow, and the gold hoops catch the same light.',
    roleDetail: role('I chose the high view over the sea, the sparkling light and the “just-off-the-beach” styling.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I collected film snapshots from summer holidays and bright, sunny beaches. The palette is turquoise, sand and cream.',
      },
      {
        title: 'Audience',
        body: 'This story is for young women who like simple, good-quality basics and everyday gold jewellery. They want to look natural, not over-styled. A real-feeling holiday moment speaks to them.',
      },
      {
        title: 'Planning the Look',
        body: 'I kept the styling very light: a cream tank, a messy bun and gold hoops. I planned natural moments like looking down, fixing her hair and looking straight at the camera.',
      },
      production(
        'I directed a high view over a turquoise sea with a sandy shore, strong sunlight sparkling on the water, a natural model in a cream ribbed tank and gold hoop earrings, and a soft film-photo feel.',
      ),
      finishing('I kept one picture slightly blurry and tilted on purpose, because it feels like a real snapshot.'),
    ],
    finalBody:
      'The final story is three pictures: a blurry moment looking down, a profile with her hand in her hair, and a calm portrait looking straight at you.',
  },

  'project-06': {
    standfirst: 'A sage coat, a black leather bag and an old TV humming quietly in the woods.',
    overview:
      'Forest Series is a fashion and accessories story. A woman in a long sage coat and white lace skirt carries a black leather handbag through a dark, sunlit forest. An old television showing static sits on a wooden stool beside her. It is made for people who love calm, grown-up style and beautiful bags.',
    challenge:
      'Accessories can disappear in a big scene. The challenge was to make the handbag the hero while still telling a mood-filled story around it.',
    insight:
      'An old TV in a forest is a quiet puzzle. It makes you stop and look, and the black bag matches the black TV, so your eye jumps straight to it.',
    roleDetail: role('I chose the forest, the static-filled TV and the idea of giving the bag its own still-life picture.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at quiet forest photography, film-camera colour and still-life art. The palette is sage, deep green, white lace and black leather.',
      },
      {
        title: 'Audience',
        body: 'This story is for women who like quiet luxury: well-made coats, soft colours and a good leather bag they will keep for years. They prefer calm and thoughtful images over loud ones.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned four pictures: the model resting in a chair, the bag alone on the TV, the model holding the bag, and the model standing alone in the shadows.',
      },
      production(
        'I directed a dark forest with patches of sunlight, a long double-breasted sage coat, a white lace skirt, a black structured handbag, an old TV with static and simple wooden furniture.',
      ),
      finishing('I made sure the leaf shadows felt natural and that the bag looked sharp in every frame.'),
    ],
    finalBody:
      'The final story is four pictures, from a relaxed seated portrait to a still life of the bag on the TV, and ending with the model standing quietly in the shadows of the trees.',
  },

  'project-07': {
    standfirst: 'Copper curls, an open back and nothing behind her but soft summer sky.',
    overview:
      'Sky Series is a light, airy summer story. A woman with copper curls wears a textured powder-blue halter dress with an open back, photographed from below against a pale sky. It is made for people who love natural beauty and simple, elegant summer dresses.',
    challenge:
      'The dress is the star, but its best detail is at the back. The challenge was to show the open back and the fabric texture while still showing the model’s face and feeling.',
    insight:
      'Shoot from below and use the sky as a clean wall. With nothing else in the frame, the blue dress, the copper hair and the warm skin are all you see.',
    roleDetail: role('I chose the low camera angle, the plain sky background and the over-the-shoulder poses.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I gathered pictures of golden-hour portraits, soft hazy skies and simple summer dresses. The palette is powder blue, copper and warm cream.',
      },
      {
        title: 'Audience',
        body: 'This story is for women looking for a special summer dress for holidays, weddings or warm evenings. They like natural hair, natural skin and pieces that feel effortless.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned a smiling look up to the sky, a walking shot with an arm raised, and two looks over the shoulder to show the open back.',
      },
      production(
        'I directed a low camera angle, a soft pale sky, warm golden light, a crinkled powder-blue halter dress with an open back, and a model with natural copper curls.',
      ),
      finishing('I kept the gentle film grain and checked that the dress colour stayed the same in every picture.'),
    ],
    finalBody:
      'The final story is four pictures: a happy look up to the sky, a full-length walk, a close portrait over the shoulder and a pose that shows the open back of the dress.',
  },

  'project-08': {
    standfirst: 'A black suit, bare feet and the edge of the sea, in black and white.',
    overview:
      'Shore Series is a black-and-white fashion story. A woman in an oversized dark suit jacket and long skirt stretches, walks and runs barefoot along the shore. It is made for people who love strong tailoring but want to feel free in it.',
    challenge:
      'Suits often look serious and stiff. The challenge was to show that a suit can feel joyful, soft and full of movement.',
    insight:
      'Take the suit to the beach and take off the shoes. Bare feet and big waves turn office clothes into a feeling of freedom.',
    roleDetail: role('I chose black and white, the beach setting and the movement-led poses.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at classic black-and-white fashion photography and soft, dreamy beach pictures. With no colour, the shapes and movement do all the talking.',
      },
      {
        title: 'Audience',
        body: 'This story is for modern women who wear tailoring every day and want it to feel relaxed, not strict. They like timeless clothes and simple, elegant images.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned three kinds of movement: reaching up to the sky, walking away into the distance and running with joy through the water.',
      },
      production(
        'I directed a wide sandy beach with gentle waves, soft black-and-white tones, an oversized dark jacket and long skirt, bare feet and lots of natural movement.',
      ),
      finishing('I kept a little softness and blur in some frames so the movement feels real.'),
    ],
    finalBody:
      'The final story is three black-and-white pictures: arms raised to the sky, a soft walk along the water and a laughing run across the wet sand.',
  },

  'project-09': {
    standfirst: 'A whole wardrobe’s mood, packed into one pink cardboard box.',
    overview:
      'Box Series is a playful studio story. A woman sits on a wooden folding chair inside a giant pink cardboard box. She wears a worn brown leather jacket, a champagne satin skirt, sheer black tights and black ankle boots. Old red sneakers and a pile of books sit outside the box. It is made for young, creative people who love vintage layering.',
    challenge:
      'In a plain studio, clothes can look flat. The challenge was to build a small world that feels personal and fun, using almost nothing.',
    insight:
      'A cardboard box is like a tiny room. It frames the model like a doll in a toy box, and the props outside it, like the sneakers and books, hint at who she is.',
    roleDetail: role('I chose the pink box set, the props and the mix of tough leather with soft satin.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at set-design photography, vintage shop styling and soft pastel studio colours. The palette is dusty pink, chocolate brown and champagne.',
      },
      {
        title: 'Audience',
        body: 'This story is for young city women who shop vintage, read books and mix old pieces with new ones. They like clothes with character and pictures with a sense of humour.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned four poses on the same chair: pushing against the wall, leaning over the chair back, sitting back in profile and curling up small.',
      },
      production(
        'I directed a giant pink cardboard box set, a wooden folding chair, a distressed leather jacket, a satin slip skirt, sheer black tights, ankle boots, old red sneakers, a stack of books and jeans hung over the chair.',
      ),
      finishing('I kept the box and props in the exact same place in every picture, so only the pose changes.'),
    ],
    finalBody:
      'The final story is four pictures of the same little world. Only the pose changes each time, from bold and stretched out to quiet and curled up.',
  },

  'project-10': {
    standfirst: 'An empty suit waiting at the water’s edge, and the woman who comes to wear it.',
    overview:
      'Coast Series is a minimal tailoring story. An oversized black blazer and long black skirt hang alone on a clothes rail in the shallow sea. Then a woman wears them on a chair in the surf and on white rocks by the water. It is made for people who love simple, strong black tailoring.',
    challenge:
      'Black clothes on a model can look flat in pictures. The challenge was to make a plain black suit feel calm, powerful and memorable.',
    insight:
      'Start with the suit on its own. An empty outfit on a rail in the sea feels like a quiet question, and the next pictures answer it.',
    roleDetail: role('I chose the clothes-rail-in-the-sea opening and the soft blue and sand colours around the black suit.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at minimalist fashion campaigns and calm coastal landscapes. The palette is soft sky blue, sand and black.',
      },
      {
        title: 'Audience',
        body: 'This story is for people who like clean, timeless clothes and buy fewer, better pieces. They enjoy calm, simple images with a strong idea.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned three steps: the empty suit on a rail, the model standing tall on a chair in the waves, and the model resting on the rocks.',
      },
      production(
        'I directed a quiet beach and rocky coast, a metal clothes rail in shallow water, an oversized black blazer and long skirt, a simple chair in the surf and soft evening light.',
      ),
      finishing('I checked that the black suit kept its shape and texture against the bright sky.'),
    ],
    finalBody:
      'The final story is three pictures: the empty suit at the shoreline, the model sitting on the white rocks and the model standing tall on a chair in the sea.',
  },

  'project-11': {
    standfirst: 'A puffer jacket alone in a snowstorm, then the street it was made for.',
    overview:
      'Snow Series is an outerwear and streetwear concept. A black puffer jacket hangs alone on a chrome clothes rail in the middle of a snowy city street. Then a young man wears it in the falling snow, with a black cap and a balaclava. It is made for young city people who love practical streetwear with attitude.',
    challenge:
      'Puffer jackets are everywhere in winter. The challenge was to make one jacket feel like the main character of a story.',
    insight:
      'Put the jacket on stage first. A clothes rail in an empty, snowy street feels like a spotlight, and the snow on the jacket proves it is made for real weather.',
    roleDetail: role('I chose the rail-in-the-street opening, the blue snowy light and the close, tough portraits.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at winter street photography, city snowstorms and moody blue evening light. The palette is cold blue, white snow and black.',
      },
      {
        title: 'Audience',
        body: 'This story is for young people in big cities who care about streetwear and need clothes that work in bad weather. They like images that feel real, cool and a little bit tough.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned the jacket alone on a rail first, then a front-facing portrait with hands in pockets, then a sharp look back over the shoulder.',
      },
      production(
        'I directed a snowy city street at dusk, heavy falling snow, a chrome clothes rail, a black puffer jacket, a black cap and balaclava, and blurry buildings in the background.',
      ),
      finishing('I made sure the snow on the jacket and on the face looked natural in every frame.'),
    ],
    finalBody:
      'The final story is three pictures: the jacket alone in the snowy street, a front-facing portrait and a close look over the shoulder.',
    note: 'Speculative concept created with Qovai. Not commissioned by, or affiliated with, any brand whose logo appears in the images.',
  },

  'project-12': {
    standfirst: 'One perfect black blazer, warm sunlight and shadows of palm leaves on a cream wall.',
    overview:
      'Tailoring Series is a simple story about one great jacket. It starts with a black wool blazer on a hanger against dark wood. Then a woman with long, wavy hair, freckles and big silver hoop earrings wears it against a sunny cream wall. It is made for women who want one blazer that works for every day.',
    challenge:
      'A black blazer is a basic piece, so it can feel boring in pictures. The challenge was to make it feel personal, warm and modern.',
    insight:
      'Show the jacket, then show the person. The empty blazer looks smart and serious. On a real person in warm sunlight, it suddenly feels relaxed and alive.',
    roleDetail: role('I chose the jacket-first opening, the warm sunlight and palm shadows, and the natural, freckled beauty look.'),
    process: [
      {
        title: 'Idea & References',
        body: 'I looked at clean tailoring campaigns and warm, sunny portrait photography. The palette is black, cream and chocolate brown.',
      },
      {
        title: 'Audience',
        body: 'This story is for working women who want a blazer they can wear to the office and at the weekend. They like natural beauty, simple jewellery and timeless clothes.',
      },
      {
        title: 'Planning the Look',
        body: 'I planned a still life of the blazer on a hanger, followed by three portraits: looking back, turning to the side and facing the camera.',
      },
      production(
        'I directed a black single-breasted wool blazer with peaked lapels, a dark wood background for the still life, a sunny cream wall with palm-leaf shadows, and a model with long wavy hair, freckles and silver hoops.',
      ),
      finishing('I made sure the sunlight and shadows came from the same direction in every portrait.'),
    ],
    finalBody:
      'The final story is four pictures: the blazer on its own, then three portraits that move from looking away to looking straight at you.',
  },
};
