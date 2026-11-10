import { useEffect } from 'react';
import { site } from '../content/site';

interface Meta {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

const setTag = (attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
};

/** Per-route document title, description, Open Graph and canonical URL. */
export function useMeta({ title, description, image, path = '' }: Meta) {
  useEffect(() => {
    const full = title ? `${title} — ${site.name}` : `${site.name} — ${site.title}`;
    const desc = description ?? site.seo.description;
    const img = image ?? site.seo.ogImage;
    const abs = (p: string) => (site.url ? new URL(p, site.url).toString() : p);
    document.title = full;
    setTag('name', 'description', desc);
    setTag('property', 'og:title', full);
    setTag('property', 'og:description', desc);
    setTag('property', 'og:image', abs(img));
    setTag('property', 'og:url', abs(path || '/'));
    setTag('name', 'twitter:title', full);
    setTag('name', 'twitter:description', desc);
    setTag('name', 'twitter:image', abs(img));
    if (site.url) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = abs(path || '/');
    }
  }, [title, description, image, path]);
}
