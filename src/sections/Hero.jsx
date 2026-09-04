import { motion, useReducedMotion } from 'framer-motion';
import { translations } from '../i18n';
import { containerClasses } from '../styles';
import { Button } from '../components/ui';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ServerIcon,
  SparklesIcon,
  StackOverflowIcon,
  UpworkIcon,
  XIcon,
} from '../icons';
import { IOSMark, ReactNativeMark } from '../techIcons';

const socialIcons = {
  mail: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  upwork: UpworkIcon,
  x: XIcon,
  stackoverflow: StackOverflowIcon,
};

// Here the brand colour is the circle, not the glyph - every mark sits white on
// its own colour. GitHub and X are near-black, which disappears against this
// page, so those two get a hairline ring to hold their shape.
const socialStyles = {
  mail: 'bg-[#EA4335]',
  linkedin: 'bg-[#0A66C2]',
  github: 'bg-[#24292F] ring-1 ring-white/20',
  upwork: 'bg-[#14A800]',
  x: 'bg-black ring-1 ring-white/20',
  stackoverflow: 'bg-[#F48024]',
};

// iOS and React Native are real brands, so they use the marks that carry their
// own official colour. Backend and AI agents are concepts with no brand of
// their own, so they keep a UI glyph and get a colour assigned below.
const eyebrowIcons = { apple: IOSMark, react: ReactNativeMark, backend: ServerIcon, ai: SparklesIcon };

// Literal class strings - Tailwind only emits class names it can find in the
// source, so these cannot be built from a variable.
const eyebrowColors = { backend: 'text-[#34D399]', ai: 'text-[#A78BFA]' };

const Hero = () => {
  const t = translations;
  const { eyebrow, heading, subtitle, proofPoints, cta, alt } = t.hero;
  const prefersReducedMotion = useReducedMotion();

  // Read straight off the contact section rather than copied, so a link only
  // ever has to change in one place. Email is not in that list - it is the
  // section's own "email me instead" button - so it is added here.
  const socials = [{ icon: 'mail', label: 'Email', href: t.contact.secondary.href }, ...t.contact.socials];

  return (
    <section
      id="home"
      className={`${containerClasses} flex gap-12 items-center min-h-[85vh] pt-24 pb-14 md:pb-20 border-b border-line max-[1450px]:gap-8 max-[1200px]:flex-col max-[1200px]:text-center max-[1200px]:pt-28 max-[1200px]:gap-10`}
    >
      <motion.div
        className="flex-1 min-w-0 max-[1450px]:max-w-[640px] max-[1200px]:max-w-none"
        initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
      >
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 list-none p-0 max-[1200px]:justify-center max-[480px]:gap-x-3.5">
          {eyebrow.map(({ icon, label }) => {
            const Icon = eyebrowIcons[icon];
            return (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-[0.1em] max-[480px]:text-xs max-[480px]:gap-1.5"
              >
                <Icon className={`h-[1.15em] w-[1.15em] shrink-0 ${eyebrowColors[icon] ?? ''}`} />
                {label}
              </li>
            );
          })}
        </ul>
        <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-tight leading-[1.15] mb-6 max-w-3xl max-[1450px]:text-[2.4rem] max-[1200px]:mx-auto max-[480px]:text-[1.6rem] max-[480px]:leading-[1.2] max-[480px]:mb-4 max-[400px]:text-[1.35rem]">
          <span className="block whitespace-nowrap max-[1200px]:whitespace-normal">{heading[0]}</span>
          <span className="block whitespace-nowrap max-[1200px]:whitespace-normal">{heading[1]}</span>
        </h1>
        <p className="text-lg text-muted mb-6 max-w-xl max-[1200px]:mx-auto max-[480px]:text-base max-[480px]:mb-4">
          {subtitle}
        </p>
        {proofPoints?.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-8 list-none p-0 max-[1200px]:justify-center max-[480px]:gap-1.5 max-[480px]:mb-6">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-text/90 max-[480px]:px-3 max-[480px]:py-1 max-[480px]:text-xs"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-4 max-[1200px]:justify-center flex-wrap">
          <Button
            href={cta.primary.href}
            variant="primary"
            {...(cta.primary.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
          >
            {cta.primary.label}
          </Button>
          <Button
            href={cta.secondary.href}
            variant="secondary"
            {...(cta.secondary.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
          >
            {cta.secondary.label}
          </Button>
        </div>
        {cta.reassurance && <p className="text-xs text-muted mt-4">{cta.reassurance}</p>}

        <ul className="flex flex-wrap items-center gap-2.5 mt-6 list-none p-0 max-[1200px]:justify-center">
          {socials.map(({ icon, label, href }) => {
            const Icon = socialIcons[icon];
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110 hover:text-white ${socialStyles[icon] ?? ''}`}
                >
                  {Icon && <Icon className="h-[18px] w-[18px]" />}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>

      <motion.div
        className="relative z-0 w-[300px] max-[1450px]:w-[240px] max-[1200px]:w-[220px] max-[480px]:w-[160px] shrink-0"
        initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="aspect-square overflow-hidden rounded-[48px] ring-1 ring-white/[0.08] shadow-[0_12px_60px_rgba(0,0,0,0.7),0_4px_20px_rgba(0,0,0,0.5)]">
          <img
            className="w-full h-full object-cover object-top"
            src="/chirag-gujarati.webp"
            alt={alt}
            width="747"
            height="1024"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
