import Nav from '../src/sections/Nav.jsx';
import Footer from '../src/sections/Footer.jsx';
import { translations } from '../src/i18n.js';
import '../index.css';

export default function Layout({ children }) {
  const t = translations;

  return (
    <div
      className="min-h-screen overflow-x-clip"
      style={{
        background: `
          radial-gradient(at 90% 15%, rgba(255, 123, 84, 0.35), transparent 55%),
          radial-gradient(at 85% 70%, rgba(128, 42, 22, 0.45), transparent 45%),
          #050505
        `,
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-medium focus:text-sm focus:outline-none"
      >
        {t.nav.skipToContent || 'Skip to content'}
      </a>
      <Nav homeUrl="/" />
      <main id="main" tabIndex="-1" className="outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
