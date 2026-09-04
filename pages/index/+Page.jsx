import Hero from '../../src/sections/Hero.jsx';
import ProofBand from '../../src/sections/ProofBand.jsx';
import Services from '../../src/sections/Services.jsx';
import HowItWorks from '../../src/sections/HowItWorks.jsx';
import ClientApps from '../../src/sections/ClientApps.jsx';
import Projects from '../../src/sections/Projects.jsx';
import Testimonials from '../../src/sections/Testimonials.jsx';
import Faq from '../../src/sections/Faq.jsx';
import About from '../../src/sections/About.jsx';
import Articles from '../../src/sections/Articles.jsx';
import Contact from '../../src/sections/Contact.jsx';

export default function Page() {
  return (
    <>
      <Hero />
      <ProofBand />
      <Services />
      <HowItWorks />
      <ClientApps />
      <Testimonials />
      <Projects />
      <About />
      <Articles />
      {/* FAQ sits last before the CTA: it clears the objections someone has
          right before they decide to get in touch. */}
      <Faq />
      <Contact />
    </>
  );
}
