import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import Card from '../components/Card';
import { MediumIcon, LinkedInIcon } from '../icons';

const sourceIcons = { medium: MediumIcon, linkedin: LinkedInIcon };

const Articles = () => {
  const t = translations;
  const { title, subtitle, comingSoon, readLabel, items } = t.articles;

  return (
    <section id="articles" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>}
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((article) => {
          const SourceIcon = sourceIcons[article.source];
          // Every post lives on Medium or LinkedIn; nothing is hosted here.
          const href = article.href;

          const card = (
            <Card
              dimmed={!href}
              className={`group p-6 h-full flex flex-col ${href ? 'hover:border-accent/40 hover:-translate-y-1' : ''}`}
            >
              <div className="flex items-center gap-2 mb-4 text-xs text-muted">
                {SourceIcon && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-white/[0.03] px-2.5 py-1 font-medium transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
                    <SourceIcon className="h-[1.05em] w-[1.05em] shrink-0" />
                    {article.sourceLabel}
                  </span>
                )}
                <span>{article.date}</span>
              </div>

              <h3 className="text-base font-semibold mb-2 leading-snug line-clamp-3">{article.title}</h3>
              <p className="text-sm text-muted line-clamp-4 mb-5 flex-1">{article.excerpt}</p>

              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium">
                {href ? readLabel : comingSoon}
                {href && (
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                )}
              </span>
            </Card>
          );

          return (
            <ScrollReveal key={article.title} delay={items.indexOf(article) * 0.1}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${readLabel}: ${article.title}`}
                  className="block h-full no-underline text-inherit"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
