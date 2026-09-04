import { useCallback, useRef, useState } from 'react';
import { PlayIcon } from '../icons';

// Hosts the player pulls from once playback starts. Preconnecting on hover
// buys back the TLS handshake before the click actually lands.
const WARM_HOSTS = ['https://www.youtube-nocookie.com', 'https://i.ytimg.com'];

// Click-to-load YouTube embed. The page ships a self-hosted poster and swaps
// in the real iframe on first interaction: the player costs roughly a megabyte
// of JavaScript, far too much to pay on every page load for a video most
// visitors never start - and nothing reaches YouTube until they choose to.
const VideoFacade = ({ videoId, poster, width, height, title, playLabel, duration, className = '' }) => {
  const [playing, setPlaying] = useState(false);
  const warmed = useRef(false);

  const warm = useCallback(() => {
    if (warmed.current) return;
    warmed.current = true;
    for (const href of WARM_HOSTS) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`relative overflow-hidden rounded-xl border border-line bg-black ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          onPointerEnter={warm}
          onFocus={warm}
          aria-label={playLabel}
          className="group absolute inset-0 h-full w-full cursor-pointer border-0 bg-transparent p-0"
        >
          <img
            src={poster}
            alt=""
            width={width}
            height={height}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
            aria-hidden="true"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-black shadow-[0_8px_30px_rgba(255,139,95,0.35)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110"
          >
            {/* No nudge: the glyph's triangle already has its centroid on the
                24x24 centre, so shifting it right threw it off the circle. */}
            <PlayIcon className="h-6 w-6" />
          </span>
          {duration && (
            <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-1.5 py-0.5 text-[0.7rem] font-semibold tabular-nums text-white">
              {duration}
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
