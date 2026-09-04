import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  AwsMark,
  FigmaMark,
  FirebaseMark,
  IOSMark,
  JiraMark,
  NotionMark,
  PostmanMark,
  PythonMark,
  ReactNativeMark,
  SupabaseMark,
  TrelloMark,
  VSCodeMark,
  XcodeMark,
} from '../techIcons';

const toolMarks = {
  ios: IOSMark,
  xcode: XcodeMark,
  reactnative: ReactNativeMark,
  python: PythonMark,
  firebase: FirebaseMark,
  supabase: SupabaseMark,
  aws: AwsMark,
  vscode: VSCodeMark,
  postman: PostmanMark,
  figma: FigmaMark,
  jira: JiraMark,
  trello: TrelloMark,
  notion: NotionMark,
};

const About = () => {
  const t = translations;
  const { title, subtitle, paragraphs, timeline, method, stats, toolbox, education } = t.about;

  return (
    <section id="about" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>}
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.72fr] gap-12 items-start">
        {/* ---------------- Left: story, career, method ---------------- */}
        <ScrollReveal>
          <div>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base text-muted leading-relaxed mb-6">
                {p}
              </p>
            ))}

            {/* Career timeline - a logo per company, joined by a rule */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-[0.12em] mb-6">{timeline.title}</h3>
              <ol className="list-none p-0 m-0 space-y-8">
                {timeline.items.map((job, i) => (
                  <li
                    key={job.company + job.period}
                    className="group relative flex items-start gap-5 max-[480px]:gap-4"
                  >
                    {/* The rule is drawn per item rather than once down the whole
                        list: it runs from this logo to the next one, so it never
                        overshoots above the first or below the last. */}
                    {i < timeline.items.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.125rem] top-9 -bottom-8 w-px -translate-x-1/2 bg-line max-[480px]:left-4 max-[480px]:top-8"
                      />
                    )}

                    {/* All three marks are drawn for light backgrounds, so they
                        sit on a white tile rather than straight on the page. */}
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white transition-transform duration-300 group-hover:scale-105 max-[480px]:h-8 max-[480px]:w-8"
                    >
                      <img
                        src={job.logo}
                        alt=""
                        width="128"
                        height="128"
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-0.5">
                        <h4 className="text-base font-semibold text-text">{job.company}</h4>
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-text/80">{job.role}</p>
                      <p className="text-xs text-muted/80 mt-0.5 mb-2">{job.period}</p>
                      <p className="text-sm text-muted leading-relaxed">{job.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Method */}
            <div className="mt-10 pt-8 border-t border-line">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-[0.12em] mb-4">{method.title}</h3>
              <ul className="space-y-3 list-none p-0">
                {method.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted leading-relaxed">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ---------------- Right: stats, toolbox, credentials ---------------- */}
        <ScrollReveal delay={0.15}>
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Stats */}
            <div className="bg-surface border border-line rounded-2xl p-7">
              {stats.map((stat, i) => (
                <div key={stat.label} className={i > 0 ? 'mt-5 pt-5 border-t border-line' : ''}>
                  <span className="text-3xl font-bold text-accent block mb-1 leading-none">{stat.value}</span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Toolbox: brand marks first, then supporting frameworks */}
            <div className="bg-surface border border-line rounded-2xl p-7">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-[0.12em] mb-4">{toolbox.title}</h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 mb-4">
                {toolbox.primary.map(({ icon, label }) => {
                  const Mark = toolMarks[icon];
                  return (
                    <li
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-line/70 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-text/85"
                    >
                      {Mark && <Mark className="h-4 w-4 shrink-0" />}
                      {label}
                    </li>
                  );
                })}
              </ul>
              <ul className="flex flex-wrap gap-1.5 list-none p-0">
                {toolbox.secondary.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line/50 px-2 py-1 text-[0.7rem] font-medium text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & awards */}
            <div className="bg-surface border border-line rounded-2xl p-7">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-[0.12em] mb-4">{education.title}</h3>
              <ul className="space-y-4 list-none p-0">
                {education.items.map((item) => (
                  <li key={item.label}>
                    <span className="block text-sm font-semibold text-text/90">{item.label}</span>
                    <span className="block text-xs text-muted mt-0.5">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
