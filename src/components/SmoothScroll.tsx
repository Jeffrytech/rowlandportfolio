import Lenis from 'lenis';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

/** Smooth scrolling (Lenis) wired into GSAP's ticker and ScrollTrigger. Disabled for reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const raf = useRef<(t: number) => void>(null);

  useEffect(() => {
    if (reduced) return;
    const instance = new Lenis({ lerp: 0.09, wheelMultiplier: 1, anchors: false });
    instance.on('scroll', ScrollTrigger.update);
    raf.current = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf.current);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);
    return () => {
      if (raf.current) gsap.ticker.remove(raf.current);
      instance.destroy();
      setLenis(null);
    };
  }, [reduced]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

/** Scroll to an element id, using Lenis when available. */
export function useScrollTo() {
  const lenis = useLenis();
  return (target: string | number, immediate = false) => {
    if (lenis) {
      lenis.scrollTo(typeof target === 'string' ? `#${target}` : target, {
        offset: 0,
        immediate,
        duration: 1.6,
      });
      return;
    }
    if (typeof target === 'number') window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
    else document.getElementById(target)?.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' });
  };
}
