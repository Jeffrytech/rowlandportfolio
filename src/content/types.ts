/**
 * Content model for the portfolio.
 * Every piece of copy, every image and every link lives in /src/content.
 * Components only render what is described here.
 */

/** Commissioned = paid client work. Independent = self-initiated, personal or speculative work. */
export type ProjectKind = 'commissioned' | 'independent';

export interface MediaImage {
  type: 'image';
  /** Path inside /public, e.g. "/media/project-slug/hero.jpg". Leave undefined to show a labelled placeholder frame. */
  src?: string;
  /** Optional responsive sources, e.g. "/media/x-800.webp 800w, /media/x-1600.webp 1600w" */
  srcSet?: string;
  /** Meaningful description of the image for screen readers and SEO. Required. */
  alt: string;
  /** Intrinsic ratio, width / height. Prevents layout shift. */
  ratio: number;
  /** Optional short caption shown under the image. */
  caption?: string;
  /** Placeholder tone used until a real image is supplied (any CSS colour). */
  tone?: string;
}

export interface MediaVideo {
  type: 'video';
  /** Path inside /public or a full URL to an .mp4 / .webm file. */
  src?: string;
  /** Poster frame shown before the video loads. */
  poster?: string;
  alt: string;
  ratio: number;
  caption?: string;
  tone?: string;
}

export type Media = MediaImage | MediaVideo;

export interface ProcessStep {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  /** Set to false once all placeholder copy and media have been replaced. */
  placeholder: boolean;
  title: string;
  /** One-line editorial standfirst shown in the gallery and case-study hero. */
  standfirst: string;
  kind: ProjectKind;
  /** Client / brand. Leave empty for independent work. */
  client?: string;
  year: string;
  /** Discipline tags, e.g. "Fashion Campaign", "Art Direction". */
  disciplines: string[];
  /** Your exact role(s) on the project. */
  role: string[];
  cover: MediaImage;
  hero: Media;
  overview: string;
  challenge: string;
  insight: string;
  /** A precise description of what you personally did. */
  roleDetail: string;
  process: ProcessStep[];
  selectedVisuals: Media[];
  finalExecution: {
    body: string;
    media: Media[];
  };
  /** Real collaborators only. Leave empty until confirmed. */
  credits?: { label: string; name: string }[];
}
