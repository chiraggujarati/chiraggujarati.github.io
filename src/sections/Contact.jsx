import { translations } from '../i18n';
import { sectionClasses } from '../styles';
import { SectionHeader, Button } from '../components/ui';
import { ScrollReveal } from '../components/ScrollReveal';
import { MailIcon, LinkedInIcon, GitHubIcon, UpworkIcon, XIcon, StackOverflowIcon } from '../icons';

const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  upwork: UpworkIcon,
  x: XIcon,
  stackoverflow: StackOverflowIcon,
};

const Contact = () => {
  const t = translations;
  const { title, paragraphs, primary, secondary, socials } = t.contact;

  return (
    <section id="contact" className={`${sectionClasses} border-b-0`}>
      <ScrollReveal>
        <div className="bg-surface border border-line rounded-3xl p-10 md:p-16 text-center">
          <SectionHeader title={title} className="mb-6" />
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base text-muted max-w-xl mx-auto mb-4 last:mb-8">
              {p}
            </p>
          ))}

          {/* Two ways in, side by side: book a call, or write instead. */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <Button href={primary.href} variant="primary" target="_blank" rel="noreferrer">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="accent" className="gap-2">
              <MailIcon className="h-[1.15em] w-[1.15em] shrink-0" />
              {secondary.label}
            </Button>
          </div>

          <ul className="flex flex-wrap justify-center gap-2.5 mt-8 list-none p-0">
            {socials.map(({ icon, label, href }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-text/20 bg-white/[0.02] px-4 py-2 text-sm font-medium text-muted no-underline transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent/[0.06] max-[480px]:px-3 max-[480px]:text-xs"
                  >
                    {Icon && <Icon className="h-[1.1em] w-[1.1em] shrink-0" />}
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
