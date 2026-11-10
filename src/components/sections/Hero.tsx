import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../content/site';
import { projects } from '../../content/projects';
import { gsap } from '../../lib/gsap';
import { prefersReducedMotion } from '../../hooks/useReducedMotion';
import { MediaFrame } from '../MediaFrame';
import { SplitText } from '../SplitText';
import { useScrollTo } from '../SmoothScroll';

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();
  const lead = projects[0];

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-fade]', { autoAlpha: 0, y: 20, duration: 1.4, stagger: 0.08, delay: 0.9 });
      gsap.from('.hero__visual .frame__inner', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.8,
        ease: 'expo.inOut',
        delay: 0.3,
      });
      gsap.to('.hero__visual', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero__name', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero" aria-labelledby="hero-name">
      <div className="hero__meta" data-hero-fade>
        <span>Portfolio</span>
        <span>Fashion · Visual Storytelling · Applied AI</span>
        <span>7+ Years</span>
      </div>

      <Link to={`/work/${lead.slug}`} className="hero__visual" data-cursor="View" aria-label={`Featured work: ${lead.title}`}>
        <MediaFrame media={lead.cover} priority sizes="(max-width: 760px) 70vw, 28vw" />
        <span className="hero__visual-cap">
          <span>Featured — {lead.title}</span>
        </span>
      </Link>

      <h1 id="hero-name" className="hero__name">
        <SplitText text={site.firstName} className="hero__line" immediate delay={0.15} />
        <SplitText text={site.lastName} className="hero__line hero__line--italic" immediate delay={0.35} />
      </h1>

      <div className="hero__foot">
        <p className="hero__title" data-hero-fade>
          <span className="eyebrow">Currently</span>
          {site.title}
        </p>
        <div className="hero__actions" data-hero-fade>
          <button className="btn btn--solid" onClick={() => scrollTo('work')}>
            View selected work <span aria-hidden="true">↓</span>
          </button>
          <button className="btn" onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
