import { useLayoutEffect, useRef } from 'react';
import { projects } from '../../content/projects';
import { gsap } from '../../lib/gsap';
import { prefersReducedMotion } from '../../hooks/useReducedMotion';
import { MediaFrame } from '../MediaFrame';

/**
 * Scroll-driven layout transition (after Codrops' scroll-based layout studies):
 * an inset frame opens to full bleed as you scroll, while the statement drifts across it.
 */
export function Interlude() {
  const root = useRef<HTMLElement>(null);
  const media = projects[1]?.hero ?? projects[0].hero;

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top 80%', end: 'bottom bottom', scrub: 1 },
      });
      tl.fromTo('.interlude__frame', { clipPath: 'inset(18% 30% 18% 30%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' }, 0)
        .fromTo('.interlude__frame .frame__inner', { scale: 1.35 }, { scale: 1, ease: 'none' }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="interlude" aria-label="Featured image">
      <div className="interlude__sticky">
        <div className="interlude__frame">
          <MediaFrame media={media} fill />
        </div>
      </div>
    </section>
  );
}
