import { Fragment, useLayoutEffect, useRef, type ElementType } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../hooks/useReducedMotion';

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  /** 'chars' rises letter by letter, 'words' word by word. */
  by?: 'chars' | 'words';
  /** Play on mount instead of when scrolled into view. */
  immediate?: boolean;
  delay?: number;
  stagger?: number;
}

/**
 * Character / word reveal inspired by Codrops' text-animation studies.
 * The readable string is exposed once via aria-label; split pieces are aria-hidden.
 */
export function SplitText({ text, as: Tag = 'span', className = '', by = 'chars', immediate = false, delay = 0, stagger }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const pieces = el.querySelectorAll<HTMLElement>('[data-piece]');
    const ctx = gsap.context(() => {
      gsap.set(pieces, { yPercent: 110, rotate: by === 'chars' ? 6 : 0 });
      gsap.to(pieces, {
        yPercent: 0,
        rotate: 0,
        duration: 1.4,
        ease: 'expo.out',
        delay,
        stagger: stagger ?? (by === 'chars' ? 0.028 : 0.07),
        scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 88%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [text, by, immediate, delay, stagger]);

  const words = text.split(' ');
  return (
    <Tag ref={ref} className={`split ${className}`} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
        <span className="split__word" aria-hidden="true">
          {by === 'words' ? (
            <span className="split__mask">
              <span data-piece className="split__piece">{word}</span>
            </span>
          ) : (
            [...word].map((ch, ci) => (
              <span className="split__mask" key={ci}>
                <span data-piece className="split__piece">{ch}</span>
              </span>
            ))
          )}
        </span>
        {wi < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}
