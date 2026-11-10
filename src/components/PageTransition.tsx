import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ease = [0.76, 0, 0.24, 1] as const;

/** Film-like curtain wipe between routes. Falls back to a simple fade for reduced motion. */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <motion.div
        className="curtain"
        aria-hidden="true"
        variants={{
          initial: { scaleY: 1, transformOrigin: '50% 0%' },
          enter: { scaleY: 0, transformOrigin: '50% 0%', transition: { duration: 0.9, ease, delay: 0.05 } },
          exit: { scaleY: 1, transformOrigin: '50% 100%', transition: { duration: 0.7, ease } },
        }}
      />
      <motion.div
        variants={{
          initial: { opacity: 0 },
          enter: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } },
          exit: { opacity: 1, transition: { duration: 0.7, ease } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
