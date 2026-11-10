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
      'Rowland Jeff Igboanugo — Creative Director, founder, Gen AI educator and AI researcher in the fashion industry, with 7+ years in the creative industry. Guest lecturer who has taught 360 students how to use AI in fashion.',
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
    lede: 'Creative Director, founder and Gen AI educator — making fashion images for over seven years, and teaching the fashion industry how to create with AI.',
    /** Biography paragraphs. */
    bio: [
      'I am a Creative Director and founder with more than seven years in the creative industry. My work lives where fashion and technology meet. I decide how a campaign should look and feel, from the very first idea to the final picture.',
      'I am also a Gen AI educator and AI researcher who has collaborated with PhD lecturers at Manchester Metropolitan University on research into AI in the fashion industry. As a guest lecturer, I have taught 360 fashion students at Manchester Metropolitan University, UK, how to use AI in fashion and how it can help them explore ideas faster.',
    ],
    /** Creative philosophy, as short statements. */
    philosophy: [
      { title: 'Idea first, tool second', body: 'AI is a powerful tool, but the idea and the taste always come from a person.' },
      { title: 'Know who it is for', body: 'Every image starts with its audience. When you know who you are talking to, you know what to show them.' },
      { title: 'Share what you learn', body: 'Teaching others makes the whole industry stronger, and it keeps me learning too.' },
    ],
    /** Portrait in /public, e.g. "/media/portrait.jpg". Empty = placeholder frame. */
    portrait: '',
    portraitAlt: 'Portrait of Rowland Jeff Igboanugo',
    facts: [
      { label: 'Experience', value: '7+ years in the creative industry' },
      { label: 'Roles', value: 'Founder · Creative Director · AI Researcher' },
      { label: 'Teaching', value: 'Guest lecturer — 360 fashion students, Manchester Metropolitan University, UK' },
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
