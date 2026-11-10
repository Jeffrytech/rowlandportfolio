import { useLayoutEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../hooks/useReducedMotion';

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
}

/** Quiet fade-and-rise as content enters the viewport. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, y = 32 }: Props) {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        autoAlpha: 0,
        y,
        duration: 1.4,
        delay,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
    return () => ctx.revert();
  }, [delay, y]);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
