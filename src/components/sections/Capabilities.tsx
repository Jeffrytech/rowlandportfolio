import { site } from '../../content/site';
import { Reveal } from '../Reveal';
import { SplitText } from '../SplitText';

export function Capabilities() {
  const items = site.capabilities;
  return (
    <section id="capabilities" className="caps" aria-labelledby="caps-title">
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <span key={k}>
              {items.map((c) => (
                <span key={c.title} className="marquee__item">
                  {c.title} <i>✳</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <header className="section-head">
        <span className="eyebrow">(03) Capabilities</span>
        <h2 id="caps-title" className="section-head__title">
          <SplitText text="What I" /> <em><SplitText text="direct" delay={0.1} /></em>
        </h2>
      </header>

      <ol className="caps__list">
        {items.map((c, i) => (
          <Reveal as="li" key={c.title} className="caps__item">
            <span className="caps__n">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="caps__title">{c.title}</h3>
            <p className="caps__body">{c.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
