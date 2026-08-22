import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import Card from '../components/Card';
import { AppleIcon, BluetoothIcon, FilmIcon, LockIcon } from '../icons';
import { AndroidMark, AwsMark, DesignMark, FirebaseMark, IOSMark, PythonMark, SupabaseMark } from '../techIcons';

const caseIcons = { bluetooth: BluetoothIcon, lock: LockIcon, film: FilmIcon };

const techMarks = {
  ios: IOSMark,
  android: AndroidMark,
  python: PythonMark,
  firebase: FirebaseMark,
  supabase: SupabaseMark,
  aws: AwsMark,
  design: DesignMark,
};

const ProofBand = () => {
  const t = translations;
  const { title, subtitle, cases, footerPoints, linkLabel } = t.proofBand;

  return (
    <section id="proof" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((c, i) => {
          const Icon = caseIcons[c.icon];
          return (
            <ScrollReveal key={c.client} delay={i * 0.1}>
              <Card className="group relative overflow-hidden p-7 h-full flex flex-col hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.65)]">
                {/* Accent wash that blooms in on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Hairline that lights up along the top edge */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* Icon and numeral share a row, so neither can collide with the tag. */}
                <div className="relative flex items-center justify-between mb-4">
                  {Icon && (
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25 transition-colors duration-300 group-hover:bg-accent/20 group-hover:ring-accent/45">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  <span
                    aria-hidden="true"
                    className="select-none text-5xl font-bold leading-none text-text/[0.06] transition-colors duration-500 group-hover:text-accent/15"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* min-height reserves two lines so every card's title starts on the same baseline */}
                <p className="relative text-[0.7rem] font-semibold text-accent uppercase tracking-[0.12em] leading-snug mb-3 min-h-[2.2em]">
                  {c.tag}
                </p>

                <h3 className="relative text-lg font-semibold mb-3 leading-snug">{c.client}</h3>
                <p className="relative text-sm text-muted leading-relaxed mb-6 flex-1">{c.text}</p>

                <ul className="relative flex flex-wrap gap-1.5 list-none p-0 pt-5 border-t border-line">
                  {c.stack.map(({ icon, label }) => {
                    const Mark = techMarks[icon];
                    return (
                      <li
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-md border border-line/60 bg-white/[0.03] px-2 py-1 text-[0.7rem] font-medium text-muted transition-colors duration-300 group-hover:border-accent/25 group-hover:text-text/80"
                      >
                        {Mark && <Mark className="h-4 w-4 shrink-0" />}
                        {label}
                      </li>
                    );
                  })}
                </ul>

                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${linkLabel}: ${c.client}`}
                    className="relative mt-5 inline-flex items-center gap-2 self-start rounded-full border border-line/70 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-muted no-underline transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.08] hover:text-accent"
                  >
                    <AppleIcon className="h-[1.15em] w-[1.15em] shrink-0" />
                    {linkLabel}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </a>
                )}
              </Card>
            </ScrollReveal>
          );
        })}
      </div>

      {footerPoints?.length > 0 && (
        <ScrollReveal delay={0.3}>
          <ul className="flex flex-wrap justify-center gap-2 mt-12 list-none p-0">
            {footerPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-text/90 max-[480px]:px-3 max-[480px]:py-1 max-[480px]:text-xs"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      )}
    </section>
  );
};

export default ProofBand;
