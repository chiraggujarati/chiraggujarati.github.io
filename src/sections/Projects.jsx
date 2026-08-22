import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import Card from '../components/Card';
import { GitHubIcon, StarIcon } from '../icons';

// Language dot colours match GitHub's own linguist palette.
const languageColors = { Swift: '#F05138', JavaScript: '#F1E05A', Ruby: '#701516' };

const ProjectCard = ({ project }) => (
  <Card className="group relative overflow-hidden p-6 h-full flex flex-col hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.65)]">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />

    <div className="flex items-start justify-between gap-3 mb-3">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-text/70 ring-1 ring-line transition-colors duration-300 group-hover:text-accent group-hover:ring-accent/40">
        <GitHubIcon className="h-5 w-5" />
      </span>
      {project.stars > 0 && (
        <span className="inline-flex items-center gap-1 rounded-full border border-line/70 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
          <StarIcon className="h-3.5 w-3.5" />
          {project.stars}
        </span>
      )}
    </div>

    <h3 className="text-base font-semibold mb-2 break-words">{project.name}</h3>
    <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{project.description}</p>

    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-line">
      {project.language && (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: languageColors[project.language] || '#8b8178' }}
          />
          {project.language}
        </span>
      )}
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-line/60 bg-white/[0.03] px-2 py-1 text-[0.7rem] font-medium text-muted transition-colors duration-300 group-hover:border-accent/25"
        >
          {tag}
        </span>
      ))}
    </div>

    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.name} on GitHub`}
      className="absolute inset-0 z-10"
    />
  </Card>
);

const Projects = () => {
  const t = translations;
  const { title, subtitle, items, ctaLabel, ctaHref } = t.projects;

  return (
    <section id="projects" className={sectionClasses}>
      <ScrollReveal>
        <SectionHeader title={title} className="mb-4" />
        {subtitle && <p className="text-base text-muted max-w-2xl mb-12">{subtitle}</p>}
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.08}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {ctaHref && (
        <ScrollReveal delay={0.25}>
          <div className="flex justify-center mt-10">
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-text/20 bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-muted no-underline transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.06] hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              {ctaLabel}
            </a>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
};

export default Projects;
