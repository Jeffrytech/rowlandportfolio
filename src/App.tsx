import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { SmoothScroll, useLenis } from './components/SmoothScroll';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Grain } from './components/Grain';
import { Cursor } from './components/Cursor';
import { Intro } from './components/Intro';
import { PageTransition } from './components/PageTransition';
import { ScrollTrigger } from './lib/gsap';
import Home from './pages/Home';

const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  const lenis = useLenis();

  const onExitComplete = () => {
    if (!location.hash) {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      <PageTransition key={location.pathname}>
        <main id="main" tabIndex={-1}>
          <Suspense fallback={<div className="route-fallback" />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <Intro />
      <Nav />
      <AnimatedRoutes />
      <Cursor />
      <Grain />
    </SmoothScroll>
  );
}
