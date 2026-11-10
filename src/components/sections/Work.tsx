import { useLayoutEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { kindLabel, projects } from '../../content/projects';
import type { Project, ProjectKind } from '../../content/types';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { prefersReducedMotion } from '../../hooks/useReducedMotion';
import { MediaFrame } from '../MediaFrame';
import { SplitText } from '../SplitText';

type View = 'gallery' | 'index';
type Filter = 'all' | Exclude<ProjectKind, 'tbc'>;


/** Asymmetric editorial placements for the 12-column gallery, cycled per project. */
const layout = ['g-a', 'g-b', 'g-c', 'g-d', 'g-e', 'g-f', 'g-g', 'g-h'];

export function Work() {
  const [view, setView] = useState<View>('gallery');
  const [filter, setFilter] = useState<Filter>('all');
  const list = useMemo(() => (filter === 'all' ? projects : projects.filter((p) => p.kind === filter)), [filter]);
  const count = (f: Filter) => (f === 'all' ? projects.length : projects.filter((p) => p.kind === f).length);

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <header className="section-head">
        <span className="eyebrow">(01) Selected Work</span>
        <h2 id="work-title" className="section-head__title">
          <SplitText text="Selected" by="chars" /> <em><SplitText text="Work" by="chars" delay={0.15} /></em>
          <sup className="section-head__count">({String(list.length).padStart(2, '0')})</sup>
        </h2>
      </header>

      <div className="work__controls">
        <div className="segmented" role="group" aria-label="Filter projects">
          {(['all', 'commissioned', 'independent'] as Filter[]).map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : kindLabel(f)} <span>{count(f)}</span>
            </button>
          ))}
        </div>
        <div className="segmented" role="group" aria-label="Layout">
          {(['gallery', 'index'] as View[]).map((v) => (
            <button key={v} aria-pressed={view === v} onClick={() => setView(v)}>
              {v === 'gallery' ? 'Gallery' : 'Index'}
            </button>
          ))}
        </div>
      </div>

      {view === 'gallery' ? <Gallery list={list} /> : <Index list={list} />}

      <p className="work__note">
        <span className="tag tag--commissioned">Commissioned</span> client work &nbsp;·&nbsp;
        <span className="tag tag--independent">Independent</span> self-initiated or speculative work
      </p>
    </section>
  );
}

function Gallery({ list }: { list: Project[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.card').forEach((card, i) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 80,
          duration: 1.6,
          scrollTrigger: { trigger: card, start: 'top 92%', once: true },
        });
        const img = card.querySelector('.frame__inner');
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
        gsap.to(card.querySelector('.card__link'), {
          y: i % 2 ? -60 : -20,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [list]);

  return (
    <div ref={root} className="gallery">
      {list.map((p, i) => (
        <article key={p.slug} className={`card ${layout[i % layout.length]}`}>
          <Link to={`/work/${p.slug}`} className="card__link" data-cursor="View">
            <div className="card__media">
              <MediaFrame media={p.cover} sizes="(max-width: 760px) 92vw, 45vw" />
            </div>
            <div className="card__meta">
              <span className="card__num">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
              <h3 className="card__title">{p.title}</h3>
              <span className={`tag tag--${p.kind}`}>{kindLabel(p.kind)}</span>
            </div>
            <p className="card__sub">
              {p.disciplines.join(' · ')}{p.year ? <span> — {p.year}</span> : null}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}

/** Index view: rows with a cursor-following image reveal (after Codrops' lookbook hover effects). */
function Index({ list }: { list: Project[] }) {
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const movers = useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);

  useLayoutEffect(() => {
    if (!preview.current) return;
    movers.current = {
      x: gsap.quickTo(preview.current, 'x', { duration: 0.7, ease: 'power3' }),
      y: gsap.quickTo(preview.current, 'y', { duration: 0.7, ease: 'power3' }),
    };
  }, []);

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    movers.current?.x(e.clientX);
    movers.current?.y(e.clientY);
  };

  return (
    <div className="index" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
      <div className="index__head" aria-hidden="true">
        <span>No.</span>
        <span>Project</span>
        <span>Type</span>
        <span>Discipline</span>
        <span>Year</span>
      </div>
      <ol>
        {list.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/work/${p.slug}`}
              className={`index__row ${active && active !== p ? 'is-dim' : ''}`}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(p)}
              onFocus={() => setActive(null)}
            >
              <span className="index__num">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
              <span className="index__title">{p.title}</span>
              <span className={`tag tag--${p.kind}`}>{kindLabel(p.kind)}</span>
              <span className="index__disc">{p.disciplines.join(', ')}</span>
              <span className="index__year">{p.year ?? ''}</span>
              <span className="index__thumb" aria-hidden="true">
                <MediaFrame media={{ ...p.cover, ratio: 4 / 5 }} />
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <div ref={preview} className={`index__preview ${active ? 'is-on' : ''}`} aria-hidden="true">
        {list.map((p) => (
          <div key={p.slug} className={`index__preview-item ${active === p ? 'is-active' : ''}`}>
            <MediaFrame media={{ ...p.cover, ratio: 4 / 5 }} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
