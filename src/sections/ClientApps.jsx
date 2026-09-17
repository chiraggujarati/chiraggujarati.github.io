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

// A colour per store category, so the tag reads as a label at a glance instead
// of as grey small print. Orange is the page accent; the green and violet are
// the same two the hero eyebrow already uses.
//
// Literal class strings - Tailwind only emits class names it can find in the
// source, so these cannot be built from a variable.
const categoryStyles = {
  Productivity: 'text-accent border-accent/35 bg-accent/10',
  Entertainment: 'text-[#A78BFA] border-[#A78BFA]/35 bg-[#A78BFA]/10',
  'Health & Fitness': 'text-[#34D399] border-[#34D399]/35 bg-[#34D399]/10',
  Education: 'text-[#60A5FA] border-[#60A5FA]/35 bg-[#60A5FA]/10',
  Business: 'text-[#FBBF24] border-[#FBBF24]/35 bg-[#FBBF24]/10',
  Lifestyle: 'text-[#22D3EE] border-[#22D3EE]/35 bg-[#22D3EE]/10',
  Communication: 'text-[#F472B6] border-[#F472B6]/35 bg-[#F472B6]/10',
};

const categoryFallback = 'text-muted border-line/60 bg-white/[0.03]';

const ClientApps = () => {
  const t = translations;
  const { title, subtitle, items, appStoreLabel, googlePlayLabel } = t.clientApps;

  return (
    <section id="apps" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12 text-balance">{subtitle}</p>}
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
                  {/* The store category as a pill, so it reads as a label on the
                      card rather than a second line of the app's name. */}
                  <span
                    className={`mt-1.5 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.07em] ${
                      categoryStyles[app.category] ?? categoryFallback
                    }`}
                  >
                    {app.category}
                  </span>
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
