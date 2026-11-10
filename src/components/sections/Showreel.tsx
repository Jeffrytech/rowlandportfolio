import { useRef, useState } from 'react';
import { site } from '../../content/site';
import { SplitText } from '../SplitText';

/** Renders only when a showreel video has been supplied in site.ts. */
export function Showreel() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reel = site.showreel;
  if (!reel.src) return null;

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      if (!v.src) v.src = reel.src!;
      v.muted = false;
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="showreel" className="reel" aria-labelledby="reel-title">
      <header className="section-head">
        <span className="eyebrow">(04) Showreel</span>
        <h2 id="reel-title" className="section-head__title">
          <SplitText text="Show" /> <em><SplitText text="reel" delay={0.1} /></em>
        </h2>
      </header>
      <div className="reel__frame" style={{ aspectRatio: String(reel.ratio) }}>
        <video ref={video} poster={reel.poster || undefined} preload="none" playsInline controls={playing} aria-label={reel.alt} onEnded={() => setPlaying(false)} />
        {!playing && (
          <button className="reel__play" onClick={toggle} aria-label="Play showreel">
            <span>Play</span>
          </button>
        )}
      </div>
    </section>
  );
}
