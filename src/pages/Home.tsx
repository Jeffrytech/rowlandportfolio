import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { useScrollTo } from '../components/SmoothScroll';
import { ScrollTrigger } from '../lib/gsap';
import { Hero } from '../components/sections/Hero';
import { Interlude } from '../components/sections/Interlude';
import { Work } from '../components/sections/Work';
import { About } from '../components/sections/About';
import { Capabilities } from '../components/sections/Capabilities';
import { Showreel } from '../components/sections/Showreel';
import { Contact } from '../components/sections/Contact';

export default function Home() {
  useMeta({ path: '/' });
  const { hash } = useLocation();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    // Wait a frame for layout + ScrollTrigger pin spacing before jumping.
    const t = window.setTimeout(() => {
      ScrollTrigger.refresh();
      scrollTo(id);
    }, 120);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  return (
    <>
      <Hero />
      <Interlude />
      <Work />
      <About />
      <Capabilities />
      <Showreel />
      <Contact />
    </>
  );
}
