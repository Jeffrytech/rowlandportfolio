import type { MediaVideo } from './types';

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE-WIDE DETAILS — biography, contact, showreel, SEO
 * ─────────────────────────────────────────────────────────────
 *  Fields left as empty strings are hidden or shown as clearly
 *  labelled placeholders, so the site never shows a dead link.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Rowland Jeff Igboanugo',
  firstName: 'Rowland Jeff',
  lastName: 'Igboanugo',
  title: 'Creative & Art Director',
  /** Production domain, used for canonical URLs and social cards. e.g. "https://rowlandjeff.com" */
  url: '',
  location: '', // e.g. "Lagos / London" — leave empty to hide
  availability: '', // e.g. "Available for select projects from 2027" — leave empty to hide

  seo: {
    description:
      'Rowland Jeff Igboanugo — Creative & Art Director with 7+ years in the creative industry, working across fashion creative direction, art direction, visual storytelling and AI-assisted creative production.',
    /** 1200×630 image in /public used for link previews. */
    ogImage: '/og-image.png',
  },

  contact: {
    /** e.g. "hello@yourname.com". Empty = labelled placeholder (no broken mailto link). */
    email: 'rowlandjeffry@gmail.com',
    /** Full LinkedIn profile URL. Empty = hidden. */
    linkedin: 'https://www.linkedin.com/in/rowland-jeffry-6008a3198/',
    /** Path to a PDF in /public, e.g. "/Rowland-Jeff-Igboanugo-CV.pdf". Empty = hidden. */
    cv: '',
    /** Optional extra profiles. Only add real, working URLs. */
    other: [] as { label: string; href: string }[],
  },

  /** Showreel — the section and nav link only appear once `src` is set. */
  showreel: {
    src: '',
    poster: '',
    alt: 'Showreel of selected creative direction work by Rowland Jeff Igboanugo',
    ratio: 16 / 9,
  } as Omit<MediaVideo, 'type'>,

  about: {
    /** Short line shown large at the top of the About section. */
    lede: 'Creative & Art Director with over seven years shaping images, campaigns and visual worlds — rooted in fashion, extended by applied AI.',
    /** Longer biography paragraphs. Replace with your own words. */
    bio: [
      'Placeholder — your professional background: where you started, the disciplines you moved through, and how fashion creative direction became the centre of your practice.',
      'Placeholder — how you use applied AI inside a creative process: as a tool for ideation, pre-visualisation and production, always directed by taste and intent.',
    ],
    /** Your creative philosophy, as short statements. */
    philosophy: [
      { title: 'Placeholder principle', body: 'Placeholder — one sentence on how you think about images.' },
      { title: 'Placeholder principle', body: 'Placeholder — one sentence on craft, restraint or collaboration.' },
      { title: 'Placeholder principle', body: 'Placeholder — one sentence on technology serving the idea.' },
    ],
    /** Portrait in /public, e.g. "/media/portrait.jpg". Empty = placeholder frame. */
    portrait: '',
    portraitAlt: 'Portrait of Rowland Jeff Igboanugo',
    facts: [
      { label: 'Experience', value: '7+ years' },
      { label: 'Focus', value: 'Fashion & Visual Culture' },
      { label: 'Practice', value: 'Creative Direction · Art Direction · Applied AI' },
    ],
  },

  capabilities: [
    {
      title: 'Creative Direction',
      body: 'Setting the idea, the tone and the standard — from first reference to final frame — and leading teams to deliver it.',
    },
    {
      title: 'Art Direction',
      body: 'Composition, styling, set, light and type: the visual decisions that make an image unmistakable.',
    },
    {
      title: 'Fashion Campaigns',
      body: 'Campaign concepts, shoot direction and roll-out for fashion and lifestyle brands across print, digital and film.',
    },
    {
      title: 'Visual Storytelling',
      body: 'Building narrative across sequences of images and moving image so a collection or brand is felt, not just seen.',
    },
    {
      title: 'AI-Assisted Creative Production',
      body: 'Directing generative and AI-assisted workflows for ideation, pre-visualisation and production — guided by taste, with transparency about method.',
    },
  ],
};

export type Site = typeof site;
