import { site } from '../content/site';
import { useScrollTo } from './SmoothScroll';

export function Footer() {
  const scrollTo = useScrollTo();
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span className="footer__mid">{site.title}</span>
      <button className="footer__top" onClick={() => scrollTo(0)}>
        Back to top ↑
      </button>
    </footer>
  );
}
