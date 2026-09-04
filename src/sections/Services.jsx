import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import { ChecklistIcon, GaugeIcon, RocketIcon, ServerIcon, SmartphoneIcon, WrenchIcon } from '../icons';
import Card from '../components/Card';

const icons = {
  app: SmartphoneIcon,
  qa: ChecklistIcon,
  maintenance: WrenchIcon,
  release: RocketIcon,
  performance: GaugeIcon,
  backend: ServerIcon,
};

const Services = () => {
  const t = translations;
  const { title, subtitle, categories } = t.services;

  return (
    <section id="services" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>}
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, i) => {
          const Icon = icons[category.icon] || SmartphoneIcon;
          return (
            <ScrollReveal key={category.title} delay={i * 0.08}>
              <Card className="p-8 h-full hover:bg-surface-hover hover:border-accent/40 hover:-translate-y-1 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-dim text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {/* Sized explicitly: an unsized SVG stretches to fill the flex
                      parent, which left the glyph touching the tile's edges. */}
                  <Icon className="h-6 w-6" />
                </div>
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
