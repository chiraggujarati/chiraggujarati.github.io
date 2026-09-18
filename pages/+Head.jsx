import { usePageContext } from 'vike-react/usePageContext';
import { pagePath } from '../src/urls.js';
import { translations } from '../src/i18n.js';

const SITE = 'https://chiraggujarati.com';

const GA_ID = 'G-CFWXGNHYN3';

const PERSON_ID = `${SITE}/#chirag`;
const BUSINESS_ID = `${SITE}/#business`;

const ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'Ahmedabad',
  addressRegion: 'Gujarat',
  addressCountry: 'IN',
};

const SAME_AS = [
  'https://www.linkedin.com/in/chirag-gujarati-5520751ab',
  'https://github.com/chiraggujarati',
  'https://www.upwork.com/freelancers/~017b8533e11d1e6002?mp_source=share',
  'https://x.com/ChiragGujarati4',
  'https://stackoverflow.com/users/14504695/chirag-gujarati',
];

const KNOWS_ABOUT = [
  'iOS app development',
  'Swift',
  'SwiftUI',
  'UIKit',
  'React Native',
  'Mobile app development',
  'App Store Connect',
  'CoreBluetooth',
  'HealthKit',
  'ScreenTime API',
  'Firebase',
  'Supabase',
  'WebRTC',
  'Python',
  'AI agents',
  'CI/CD',
];

const OG_DESCRIPTION =
  'Native iOS and React Native developer in Ahmedabad. 30+ apps on the App Store & Google Play, 1M+ downloads - from scoping to a live listing.';

export default function Head() {
  const pageContext = usePageContext();

  const path = pagePath(pageContext.urlPathname || '/');
  const canonical = `${SITE}${path}`;
  const title = 'Chirag Gujarati - Mobile App Developer | CG';
  const description = OG_DESCRIPTION;
  const isErrorPage =
    pageContext.is404 === true || pageContext.abortStatusCode !== undefined || path.replace(/\/$/, '') === '/404';
   
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
             '@graph': [
              {
                '@type': 'Person',
                '@id': PERSON_ID,
                name: 'Chirag Gujarati',
                alternateName: 'CG',
                url: SITE,
                mainEntityOfPage: SITE,
                image: `${SITE}/share-card.jpg`,
                email: 'mailto:chiraggj6353@gmail.com',
                jobTitle: 'iOS & React Native Developer',
                description:
                  'iOS and React Native developer from Ahmedabad, India. I take mobile apps from an empty project to a live App Store and Google Play listing - work that has passed 1M+ downloads.',
                address: ADDRESS,
                nationality: { '@type': 'Country', name: 'India' },
                alumniOf: {
                  '@type': 'CollegeOrUniversity',
                  name: 'Sarvajanik College of Engineering and Technology',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Surat',
                    addressRegion: 'Gujarat',
                    addressCountry: 'IN',
                  },
                },
                knowsLanguage: ['en', 'hi', 'gu'],
                knowsAbout: KNOWS_ABOUT,
                worksFor: { '@id': BUSINESS_ID },
                sameAs: SAME_AS,
              },
              {
                '@type': 'Organization',
                '@id': BUSINESS_ID,
                name: 'Chirag Gujarati - Mobile App Developer',
                alternateName: 'CG',
                url: SITE,
                logo: `${SITE}/icon-512.png`,
                image: `${SITE}/share-card.jpg`,
                email: 'mailto:chiraggj6353@gmail.com',
                description:
                  'Native iOS and cross-platform React Native development for companies shipping mobile products - scoping, build, App Store and Google Play release, and the follow-up versions.',
                founder: { '@id': PERSON_ID },
                // No street address and no walk-in trade, so this stays a plain
                // Organization: LocalBusiness would claim a storefront that
                // does not exist. The address is here only to place the entity.
                address: ADDRESS,
                // Ahmedabad-based, remote worldwide - both are true and both
                // are worth saying, because they answer different queries.
                areaServed: [
                  { '@type': 'Country', name: 'India' },
                  { '@type': 'Place', name: 'Worldwide' },
                ],
                sameAs: SAME_AS,
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE}/#website`,
                url: SITE,
                name: 'Chirag Gujarati',
                inLanguage: 'en',
                about: { '@id': PERSON_ID },
                publisher: { '@id': BUSINESS_ID },
              },
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
