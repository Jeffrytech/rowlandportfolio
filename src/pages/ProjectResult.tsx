import { Link } from 'react-router-dom';
import { projectResult as P, type DetailPair } from '../content/projectResult';
import { useMeta } from '../hooks/useMeta';
import { Reveal } from '../components/Reveal';
import { SplitText } from '../components/SplitText';

/** Unlisted results page. Reachable only by direct link: /projectresult */
export default function ProjectResult() {
  useMeta({
    title: `${P.title}, ${P.part}`,
    description: P.standfirst,
    image: P.after.src,
    path: '/projectresult',
    noindex: true,
  });

  return (
    <article className="cs pr">
      <header className="cs__head">
        <div className="cs__crumbs">
          <Link to="/" className="cs__back">← Portfolio</Link>
          <span>{P.part}</span>
        </div>
        <h1 className="cs__title">
          <SplitText text={P.title} immediate delay={0.2} />
        </h1>
        <p className="cs__standfirst">{P.standfirst}</p>
      </header>

      <section className="pr__compare" aria-label="Before and after">
        <figure>
          <div className="pr__img" style={{ aspectRatio: String(P.ratio) }}>
            <img src={P.before.src} srcSet={P.before.srcSet} sizes="(max-width: 860px) 100vw, 50vw" alt={P.before.alt} fetchPriority="high" />
          </div>
          <figcaption><span>Before</span> Original key visual</figcaption>
        </figure>
        <figure>
          <div className="pr__img" style={{ aspectRatio: String(P.ratio) }}>
            <img src={P.after.src} srcSet={P.after.srcSet} sizes="(max-width: 860px) 100vw, 50vw" alt={P.after.alt} fetchPriority="high" />
          </div>
          <figcaption><span>After</span> Enhanced key visual</figcaption>
        </figure>
      </section>

      <section className="cs__chapter">
        <h2 className="cs__label"><span>01</span> The Brief</h2>
        <Reveal className="cs__chapter-body">
          {P.brief.map((p, i) => (
            <p key={i} className={i === 0 ? 'cs__lead' : undefined}>{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="cs__chapter">
        <h2 className="cs__label"><span>02</span> What I Changed</h2>
        <div className="cs__chapter-body pr__edits">
          {P.edits.map((e, i) => (
            <Reveal key={e.title} className="pr__edit">
              <span className="cs__process-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              {e.points && (
                <ul className="pr__points">
                  {e.points.map((pt) => {
                    const [k, ...rest] = pt.split(': ');
                    return (
                      <li key={pt}>
                        <strong>{k}:</strong> {rest.join(': ')}
                      </li>
                    );
                  })}
                </ul>
              )}
              {e.detail && <Detail d={e.detail} />}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cs__chapter">
        <h2 className="cs__label"><span>03</span> Challenges & Learnings</h2>
        <Reveal className="cs__chapter-body">
          <p className="cs__lead">{P.challenge.body}</p>
          <h3 className="pr__sub">What I learned</h3>
          <ol className="pr__learn">
            {P.challenge.learnings.map((l, i) => (
              <li key={i}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {l}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="pr__final" aria-labelledby="final-title">
        <h2 className="cs__label" id="final-title"><span>04</span> Final Result</h2>
        <div className="pr__img" style={{ aspectRatio: String(P.ratio) }}>
          <img src={P.after.src} srcSet={P.after.srcSet} sizes="100vw" alt={P.after.alt} loading="lazy" decoding="async" />
        </div>
      </section>
    </article>
  );
}

function Detail({ d }: { d: DetailPair }) {
  return (
    <div className="pr__detail">
      {[
        ['Before', d.before, d.beforeAlt],
        ['After', d.after, d.afterAlt],
      ].map(([label, src, alt]) => (
        <figure key={label}>
          <div className="pr__img" style={{ aspectRatio: String(d.ratio) }}>
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </div>
          <figcaption><span>{label}</span> {d.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
