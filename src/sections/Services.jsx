import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import Card from '../components/Card';

// One illustration per service. They carry their own colour, so the markup
// below only sizes them - there is no tinted tile behind these.
const illustrations = {
  app: '/service-app-development.webp',
  qa: '/service-qa-testing.webp',
  maintenance: '/service-bug-fixing.webp',
  release: '/service-release-cicd.webp',
  performance: '/service-performance.webp',
  backend: '/service-backend-ai.webp',
};

const Services = () => {
  const t = translations;
  const { title, subtitle, categories } = t.services;

  return (
    <section id="services" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12 text-balance">{subtitle}</p>}
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, i) => {
          const illustration = illustrations[category.icon];
          return (
            <ScrollReveal key={category.title} delay={i * 0.08}>
              <Card className="p-8 h-full hover:bg-surface-hover hover:border-accent/40 hover:-translate-y-1 group">
                {illustration && (
                  <img
                    src={illustration}
                    alt=""
                    width="256"
                    height="256"
                    loading="lazy"
                    className="h-20 w-20 shrink-0 mb-6 group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                {category.description && <p className="text-sm text-muted mb-5">{category.description}</p>}
                <ul className="space-y-2.5">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
