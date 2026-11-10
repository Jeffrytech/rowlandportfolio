import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '../content/site';
import { prefersReducedMotion } from '../hooks/useReducedMotion';

const KEY = 'rji-intro-seen';

const seen = () => {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

/** Brief title-card intro, shown once per session. Skipped for reduced motion. */
export function Intro() {
  const [show, setShow] = useState(() => !prefersReducedMotion() && !seen());

  useEffect(() => {
    if (!show) return;
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* storage unavailable */
    }
    const t = window.setTimeout(() => setShow(false), 1700);
    return () => window.clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          aria-hidden="true"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="intro__name"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {site.name}
          </motion.span>
          <motion.span
            className="intro__title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {site.title}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
