import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import Card from '../components/Card';

// The store badges are the official artwork, at a shared height so the two sit
// level. Apple's and Google's assets have different aspect ratios and their own
// clear space baked in, so matching the height is the only way to pair them.
const StoreBadge = ({ href, src, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-block transition-opacity duration-300 hover:opacity-75"
  >
    <img src={src} alt={label} width="120" height="40" loading="lazy" className="h-9 w-auto" />
  </a>
);

const ClientApps = () => {
  const t = translations;
  const { title, subtitle, items, appStoreLabel, googlePlayLabel } = t.clientApps;

  return (
    <section id="apps" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>}
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((app, i) => (
          <ScrollReveal key={app.name} delay={(i % 3) * 0.1}>
            <Card className="group p-6 h-full flex flex-col hover:border-accent/40">
              <div className="flex items-center gap-4 mb-4">
                {/* 22.5% is the corner radius Apple uses for an app icon, so the
                    square artwork reads as it does on a home screen. */}
                <img
                  src={app.icon}
                  alt=""
                  width="192"
                  height="192"
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-[22.5%] ring-1 ring-line"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold break-words">{app.name}</h3>
                  <p className="text-xs text-muted/70">{app.category}</p>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{app.description}</p>

              <div className="flex flex-wrap items-center gap-2">
                {app.appStore && (
                  <StoreBadge href={app.appStore} src="/app-store-badge.svg" label={`${app.name} - ${appStoreLabel}`} />
                )}
                {app.googlePlay && (
                  <StoreBadge
                    href={app.googlePlay}
                    src="/google-play-badge.svg"
                    label={`${app.name} - ${googlePlayLabel}`}
                  />
                )}
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ClientApps;
