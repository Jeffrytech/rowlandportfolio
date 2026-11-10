import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Media } from '../content/types';

interface Props {
  media: Media;
  className?: string;
  /** Load eagerly with high priority — use for the single above-the-fold image. */
  priority?: boolean;
  sizes?: string;
  /** Show the caption under the frame. */
  showCaption?: boolean;
  /** Fill parent instead of using intrinsic ratio. */
  fill?: boolean;
}

/**
 * Renders a project image or video. Until real media is supplied it renders an
 * art-directed placeholder frame that is clearly labelled as such.
 * Videos are deferred: nothing is downloaded until the frame nears the viewport.
 */
export function MediaFrame({ media, className = '', priority = false, sizes = '100vw', showCaption = false, fill = false }: Props) {
  const style = { '--ratio': media.ratio, '--tone': media.tone ?? '#7a746c' } as CSSProperties;
  const cls = `frame ${fill ? 'frame--fill' : ''} ${className}`;

  const body = !media.src ? (
    <Placeholder alt={media.alt} />
  ) : media.type === 'image' ? (
    <img
      src={media.src}
      srcSet={media.srcSet}
      sizes={media.srcSet ? sizes : undefined}
      alt={media.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  ) : (
    <LazyVideo src={media.src} poster={media.poster} alt={media.alt} />
  );

  return (
    <figure className={cls} style={style}>
      <div className="frame__inner">{body}</div>
      {showCaption && media.caption ? <figcaption className="frame__caption">{media.caption}</figcaption> : null}
    </figure>
  );
}

function Placeholder({ alt }: { alt: string }) {
  return (
    <div className="placeholder" role="img" aria-label={alt}>
      <span className="placeholder__label" aria-hidden="true">
        Placeholder<br />
        <em>replace with your image</em>
      </span>
      <span className="placeholder__cross" aria-hidden="true" />
    </div>
  );
}

function LazyVideo({ src, poster, alt }: { src: string; poster?: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          if (!reduced) el.play().catch(() => undefined);
        } else {
          el.pause();
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      aria-label={alt}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
