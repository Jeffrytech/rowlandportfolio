import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getNextProject, getProject, kindLabel, projects } from '../content/projects';
import type { Media } from '../content/types';
import { useMeta } from '../hooks/useMeta';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../hooks/useReducedMotion';
import { MediaFrame } from '../components/MediaFrame';
import { Reveal } from '../components/Reveal';
import { SplitText } from '../components/SplitText';
import NotFound from './NotFound';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  return <CaseStudyView key={project.slug} slug={project.slug} />;
}

function CaseStudyView({ slug }: { slug: string }) {
  const p = getProject(slug)!;
  const next = getNextProject(slug);
  const index = projects.indexOf(p) + 1;
  const root = useRef<HTMLElement>(null);

  useMeta({
    title: p.title,
    description: p.standfirst,
    image: p.hero.type === 'image' ? p.hero.src : p.hero.poster,
    path: `/work/${p.slug}`,
  });

  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-cs-fade]', { autoAlpha: 0, y: 24, duration: 1.4, stagger: 0.08, delay: 0.6 });
      gsap.fromTo(
        '.cs__hero .frame__inner',
        { clipPath: 'inset(12% 8% 0% 8%)', scale: 1.15 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.cs__hero', start: 'top bottom', end: 'top 15%', scrub: true },
        },
      );
      gsap.utils.toArray<HTMLElement>('.cs__visuals .frame__inner, .cs__final .frame__inner').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: el, start: 'top 85%', once: true } },
        );
      });
    }, root);
    return () => ctx.revert();
  }, [slug]);

  // Type is only shown once it is confirmed (commissioned or independent).
  const kind = p.kind === 'tbc' ? null : kindLabel(p.kind, true);

  return (
    <article ref={root} className="cs">
      <header className="cs__head">
        <div className="cs__crumbs" data-cs-fade>
          <Link to={{ pathname: '/', hash: 'work' }} className="cs__back">← All work</Link>
          <span>Project {String(index).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          {kind && <span className={`tag tag--${p.kind}`}>{kind}</span>}
        </div>

        <h1 className="cs__title">
          <SplitText text={p.title} immediate delay={0.25} />
        </h1>
        <p className="cs__standfirst" data-cs-fade>{p.standfirst}</p>

        <dl className="cs__meta" data-cs-fade>
          {p.client && <div><dt>Client</dt><dd>{p.client}</dd></div>}
          {p.year && <div><dt>Year</dt><dd>{p.year}</dd></div>}
          <div><dt>Production</dt><dd>Qovai, a fashion AI agent tool</dd></div>
          <div><dt>Role</dt><dd>{p.role.join(', ')}</dd></div>
          <div><dt>Discipline</dt><dd>{p.disciplines.join(', ')}</dd></div>
          {kind && <div><dt>Type</dt><dd>{kind}</dd></div>}
        </dl>

        {p.note && (
          <p className="cs__notice" role="note" data-cs-fade>
            {p.note}
          </p>
        )}

        {p.placeholder && (
          <p className="cs__notice" role="note" data-cs-fade>
            This case study uses placeholder copy and imagery. Replace it in <code>src/content/projects.ts</code>.
          </p>
        )}
      </header>

      <div className={`cs__hero ${p.hero.ratio < 1 ? 'cs__hero--portrait' : ''}`}>
        <MediaFrame media={p.hero} priority />
      </div>

      <Chapter n="01" title="Overview"><p className="cs__lead">{p.overview}</p></Chapter>
      <Chapter n="02" title="Challenge"><p>{p.challenge}</p></Chapter>
      <Chapter n="03" title="Creative Insight">
        <blockquote className="cs__quote">
          <SplitText text={p.insight} by="words" />
        </blockquote>
      </Chapter>
      <Chapter n="04" title="My Role"><p>{p.roleDetail}</p></Chapter>
      <Chapter n="05" title="Process">
        <ol className="cs__process">
          {p.process.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06}>
              <span className="cs__process-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {p.selectedVisuals.length > 0 && (
      <section className="cs__visuals" aria-labelledby="visuals-title">
        <ChapterLabel n="06" title="Selected Visuals" id="visuals-title" />
        <div className="cs__visual-grid">
          {p.selectedVisuals.map((m, i) => (
            <VisualItem key={i} media={m} i={i} />
          ))}
        </div>
      </section>
      )}

      <section className="cs__final" aria-labelledby="final-title">
        <div className="cs__chapter">
          <ChapterLabel n="07" title="Final Execution" id="final-title" />
          <div className="cs__chapter-body"><p>{p.finalExecution.body}</p></div>
        </div>
        <div className="cs__final-media">
          {p.finalExecution.media.map((m, i) => (
            <MediaFrame key={i} media={m} showCaption className={m.ratio < 1 ? 'is-portrait' : i === 0 ? 'is-bleed' : 'is-inset'} />
          ))}
        </div>
      </section>

      {p.credits && p.credits.length > 0 && (
        <Chapter n="08" title="Credits">
          <dl className="cs__credits">
            {p.credits.map((c) => (
              <div key={c.label + c.name}><dt>{c.label}</dt><dd>{c.name}</dd></div>
            ))}
          </dl>
        </Chapter>
      )}

      <Link to={`/work/${next.slug}`} className="cs__next" data-cursor="Next">
        <span className="eyebrow">Next project</span>
        <span className="cs__next-title">{next.title}</span>
        <span className="cs__next-media" aria-hidden="true">
          <MediaFrame media={{ ...next.cover, ratio: 4 / 5 }} />
        </span>
      </Link>
    </article>
  );
}

function ChapterLabel({ n, title, id }: { n: string; title: string; id?: string }) {
  return (
    <h2 className="cs__label" id={id}>
      <span>{n}</span> {title}
    </h2>
  );
}

function Chapter({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="cs__chapter">
      <ChapterLabel n={n} title={title} />
      <Reveal className="cs__chapter-body">{children}</Reveal>
    </section>
  );
}

function VisualItem({ media, i }: { media: Media; i: number }) {
  return <MediaFrame media={media} showCaption className={`v-${i % 4}`} sizes="(max-width: 760px) 92vw, 50vw" />;
}
