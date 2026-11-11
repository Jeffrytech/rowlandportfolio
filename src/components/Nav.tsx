import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '../content/site';
import { useLenis } from './SmoothScroll';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  ...(site.showreel.src ? [{ id: 'showreel', label: 'Showreel' }] : []),
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.classList.toggle('is-locked', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, lenis]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`nav ${open ? 'nav--open' : ''}`}>
        <Link to="/" className="nav__brand" aria-label={`${site.name}, home`}>
          <span className="nav__mono">R·J·I</span>
          <span className="nav__name">{site.name}</span>
        </Link>
        <span className="nav__title" aria-hidden="true">{site.title}</span>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.id} to={{ pathname: '/', hash: l.id }} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              <ol className="menu__list">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link to={{ pathname: '/', hash: l.id }} className="menu__link" onClick={() => setOpen(false)}>
                      <sup>{String(i + 1).padStart(2, '0')}</sup>
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ol>
            </nav>
            <p className="menu__foot">{site.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
