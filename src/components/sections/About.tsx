import { site } from '../../content/site';
import { MediaFrame } from '../MediaFrame';
import { Reveal } from '../Reveal';
import { SplitText } from '../SplitText';

export function About() {
  const { about } = site;
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <header className="section-head">
        <span className="eyebrow">(02) About</span>
        <h2 id="about-title" className="visually-hidden">About {site.name}</h2>
      </header>

      <div className={`about__grid ${about.portrait ? '' : 'about__grid--solo'}`}>
        {about.portrait && (
          <div className="about__portrait">
            <MediaFrame
              media={{ type: 'image', src: about.portrait, alt: about.portraitAlt, ratio: 3 / 4 }}
              sizes="(max-width: 760px) 80vw, 30vw"
            />
            <p className="about__portrait-cap">{site.name}<br />{site.title}</p>
          </div>
        )}

        <div className="about__body">
          <SplitText as="p" text={about.lede} by="words" className="about__lede" />

          <div className="about__cols">
            {about.bio.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 0.1} className="about__para">
                {para}
              </Reveal>
            ))}
          </div>

          <dl className="about__facts">
            {about.facts.map((f) => (
              <Reveal key={f.label} className="about__fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </Reveal>
            ))}
          </dl>

          <div className="philosophy">
            <h3 className="eyebrow">Creative philosophy</h3>
            <ol>
              {about.philosophy.map((p, i) => (
                <Reveal as="li" key={i} delay={i * 0.08}>
                  <span className="philosophy__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="philosophy__t">{p.title}</span>
                  <span className="philosophy__b">{p.body}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
