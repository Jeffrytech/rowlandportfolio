import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** A small text cursor ("View") that appears over elements with data-cursor. Fine pointers only. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const el = ref.current;
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
      setLabel(t?.dataset.cursor ?? '');
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={ref} className={`cursor ${label ? 'cursor--on' : ''}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
