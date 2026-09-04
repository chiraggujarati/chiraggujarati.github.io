import Nav from '../src/sections/Nav.jsx';
import Footer from '../src/sections/Footer.jsx';
import CanvasCursor from '../src/components/CanvasCursor.jsx';
import { translations } from '../src/i18n.js';
import '../index.css';

export default function Layout({ children }) {
  const t = translations;

  return (
    <>
      <CanvasCursor />
      {/* No page-level wash: the background is the flat `--color-bg` set on
          body. Colour on this site comes from the accent on type, borders and
          buttons - a tinted backdrop only muddies them. */}
      <div className="min-h-screen overflow-x-clip">
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
    </>
  );
}
