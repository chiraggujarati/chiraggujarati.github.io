import { usePageContext } from 'vike-react/usePageContext';
import { pagePath } from '../src/urls.js';
import { translations } from '../src/i18n.js';

const SITE = 'https://chiraggujarati.github.io';

// Google Analytics 4 measurement ID. Defined once, here — the loader and the
// init snippet below both read it, so the two can never drift apart.
const GA_ID = 'G-CFWXGNHYN3';

const OG_DESCRIPTION =
  'Design, automate, evolve. I help businesses structure their operations and launch their ideas - from initial scoping to production.';

export default function Head() {
  const pageContext = usePageContext();

  const path = pagePath(pageContext.urlPathname || '/');
  const canonical = `${SITE}${path}`;
  const title = 'Chirag Gujarati - Mobile App Developer | CG';
  const description = OG_DESCRIPTION;
  // The error page is pre-rendered as a single /404.html served on any unknown
  // URL, so a canonical pointing at /404 would advertise a page that doesn't
  // exist. It must stay out of the index entirely.
  const isErrorPage =
    pageContext.is404 === true || pageContext.abortStatusCode !== undefined || path.replace(/\/$/, '') === '/404';
  // The video review only lives on the home page, so its VideoObject markup
  // belongs there too - repeating it on every page would advertise a video the
  // rest of the site does not carry.
  const video = translations.testimonials.video;
  const showVideoSchema = !isErrorPage && path === '/';

  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#050505" />
      {!isErrorPage && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={isErrorPage ? 'noindex, follow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={isErrorPage ? SITE : canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${SITE}/share-card.jpg`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/share-card.jpg`} />

      {/* Fonts - non-blocking via media swap pattern */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
        crossOrigin="anonymous"
      />
      <span
        dangerouslySetInnerHTML={{
          __html: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'" crossorigin="anonymous"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" crossorigin="anonymous"></noscript>`,
        }}
      />

      {/* GA4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`,
        }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Chirag Gujarati - Mobile App Developer',
            alternateName: 'CG',
            email: 'mailto:chiraggj6353@gmail.com',
            url: SITE,
            logo: `${SITE}/icon-512.png`,
            image: `${SITE}/share-card.jpg`,
            description:
              'I design, automate and evolve custom web applications for businesses that want to save time, structure their operations or launch a new product.',
            founder: {
              '@type': 'Person',
              name: 'Chirag Gujarati',
              jobTitle: 'Full-stack Developer',
              knowsLanguage: ['en'],
            },
            address: { '@type': 'PostalAddress', addressRegion: 'QC', addressCountry: 'CA' },
            areaServed: { '@type': 'Country', name: 'Canada' },
            sameAs: [
              'https://www.linkedin.com/in/chirag-gujarati-5520751ab',
              'https://github.com/chiraggujarati',
              'https://www.upwork.com/freelancers/~017b8533e11d1e6002?mp_source=share',
              'https://x.com/ChiragGujarati4',
              'https://stackoverflow.com/users/14504695/chirag-gujarati',
            ],
            knowsAbout: [
              'React',
              'Python',
              'Node.js',
              'SaaS',
              'API',
              'Vite',
              'Tailwind CSS',
              'JavaScript',
              'Automation',
              'Docker',
              'Linux',
              'Cloud',
              'DevOps',
            ],
          }),
        }}
      />

      {showVideoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: video.videoTitle,
              description: video.body,
              thumbnailUrl: [`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`, `${SITE}${video.poster}`],
              uploadDate: video.uploadDate,
              duration: video.durationISO,
              embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
              contentUrl: video.watchHref,
              publisher: {
                '@type': 'Organization',
                name: 'Chirag Gujarati - Mobile App Developer',
                logo: { '@type': 'ImageObject', url: `${SITE}/icon-512.png` },
              },
            }),
          }}
        />
      )}
    </>
  );
}
