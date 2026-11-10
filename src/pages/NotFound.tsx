import { Link } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';

export default function NotFound() {
  useMeta({ title: 'Page not found' });
  return (
    <section className="notfound">
      <span className="eyebrow">Error 404</span>
      <h1 className="notfound__title">
        Out of <em>frame.</em>
      </h1>
      <p>This page doesn’t exist, or has moved.</p>
      <div className="hero__actions">
        <Link to="/" className="btn btn--solid">Back to home</Link>
        <Link to={{ pathname: '/', hash: 'work' }} className="btn">View selected work</Link>
      </div>
    </section>
  );
}
