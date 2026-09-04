import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import Card from '../components/Card';
import VideoFacade from '../components/VideoFacade';
import { StarIcon, VerifiedIcon } from '../icons';
import { UpworkMark, YouTubeMark } from '../techIcons';

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-accent/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const Rating = ({ value }) => (
  <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} className={`h-3.5 w-3.5 ${i < value ? 'text-accent' : 'text-line'}`} />
    ))}
  </div>
);

const Testimonials = () => {
  const t = translations;
  const { title, subtitle, items, video, pendingLabel, verifiedLabel, sourceLabel, appStoreLabel, ctaLabel, ctaHref } =
    t.testimonials;

  return (
    <section id="testimonials" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>}
      </ScrollReveal>

      {video && (
        <ScrollReveal>
          <Card className="mb-6 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,15rem)_1fr] gap-8 md:gap-10 items-center">
              <VideoFacade
                videoId={video.videoId}
                poster={video.poster}
                width={video.posterWidth}
                height={video.posterHeight}
                title={video.videoTitle}
                playLabel={video.playLabel}
                duration={video.duration}
                className="w-full max-w-[15rem] mx-auto md:mx-0"
              />

              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted">
                  <YouTubeMark className="h-3.5 w-3.5" />
                  {video.label}
                </span>
                <h3 className="mt-4 text-xl md:text-2xl font-bold tracking-tight">{video.heading}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{video.body}</p>

                <div className="mt-6 pt-6 border-t border-line">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="font-semibold text-sm">{video.name}</p>
                    <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-accent">
                      <VerifiedIcon className="h-3.5 w-3.5" />
                      {verifiedLabel}
                    </span>
                  </div>
                  <p className="text-xs text-muted">{video.role}</p>
                  {video.date && <p className="text-xs text-muted/60 mt-1">{video.date}</p>}
                </div>

                <a
                  href={video.watchHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-muted no-underline transition-colors duration-300 hover:text-accent"
                >
                  <YouTubeMark className="h-4 w-4" />
                  {video.watchLabel}
                </a>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.name || i} delay={i * 0.1}>
            <Card
              dimmed={item.pending}
              className={`group p-8 h-full flex flex-col justify-between ${
                item.pending ? '' : 'hover:border-accent/40'
              }`}
            >
              {item.pending ? (
                <div className="flex flex-col h-full">
                  <QuoteIcon />
                  <p className="mt-4 text-sm text-muted/70 flex-1">{item.project}</p>
                  <div className="mt-6 pt-6 border-t border-line">
                    <p className="font-semibold text-sm text-text/80">{item.name}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-line/70 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted/70">
                      {pendingLabel}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <QuoteIcon />
                      {item.rating && <Rating value={item.rating} />}
                    </div>
                    <blockquote className="text-sm text-muted leading-relaxed">{item.quote}</blockquote>
                  </div>

                  <div className="mt-6 pt-6 border-t border-line">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <p className="font-semibold text-sm">{item.name}</p>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-accent">
                          <VerifiedIcon className="h-3.5 w-3.5" />
                          {verifiedLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted">{item.role}</p>
                    {item.project && <p className="text-xs text-muted/70 italic mt-2">{item.project}</p>}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted/80">
                        <UpworkMark className="h-3.5 w-3.5" />
                        {sourceLabel}
                      </span>
                      {item.date && <span className="text-xs text-muted/60">· {item.date}</span>}
                    </div>
                    {item.appStoreHref && (
                      <a
                        href={item.appStoreHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.appStoreApp} - ${appStoreLabel}`}
                        className="mt-4 inline-block transition-opacity duration-300 hover:opacity-75"
                      >
                        <img
                          src="/app-store-badge.svg"
                          alt={`${item.appStoreApp} - ${appStoreLabel}`}
                          width="120"
                          height="40"
                          loading="lazy"
                          className="h-9 w-auto"
                        />
                      </a>
                    )}
                  </div>
                </>
              )}
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {ctaHref && (
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-10">
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-text/20 bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-muted no-underline transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.06] hover:text-accent"
            >
              <UpworkMark className="h-4 w-4" />
              {ctaLabel}
            </a>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
};

export default Testimonials;
