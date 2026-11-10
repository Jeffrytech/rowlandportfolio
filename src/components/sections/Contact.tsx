import { site } from '../../content/site';
import { SplitText } from '../SplitText';

export function Contact() {
  const { email, linkedin, cv, other } = site.contact;
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <span className="eyebrow">({site.showreel.src ? '05' : '04'}) Contact</span>
      <h2 id="contact-title" className="contact__title">
        <SplitText text="Let’s make" /> <em><SplitText text="something" delay={0.1} /></em>{' '}
        <SplitText text="considered." delay={0.2} />
      </h2>

      {email ? (
        <a href={`mailto:${email}`} className="contact__email" data-cursor="Write">
          {email}
          <span aria-hidden="true"> ↗</span>
        </a>
      ) : (
        <p className="contact__email contact__email--placeholder">
          your@email.com <small>Placeholder — add your email in src/content/site.ts</small>
        </p>
      )}

      <ul className="contact__links">
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </li>
        )}
        {cv && (
          <li>
            <a href={cv} download>Download CV (PDF) ↓</a>
          </li>
        )}
        {other.map((o) => (
          <li key={o.href}>
            <a href={o.href} target="_blank" rel="noopener noreferrer">{o.label} ↗</a>
          </li>
        ))}
        {site.location && <li className="contact__plain">{site.location}</li>}
        {site.availability && <li className="contact__plain">{site.availability}</li>}
      </ul>
    </section>
  );
}
