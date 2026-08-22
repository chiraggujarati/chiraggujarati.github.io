import { usePageContext } from 'vike-react/usePageContext';

// This page is pre-rendered once as /404.html and the host serves that single
// file for every not-found URL.
const copy = {
  notFound: {
    title: 'Page not found',
    subtitle: 'The page you are looking for does not exist or has been moved.',
    cta: 'Back to homepage',
  },
  error: {
    title: 'Something went wrong',
    subtitle: 'Sorry about that. Please try again later.',
    cta: 'Back to homepage',
  },
};

const ctaClasses =
  'inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300';

export default function ErrorPage() {
  const pageContext = usePageContext();
  const is404 = pageContext.is404 ?? pageContext.abortStatusCode === 404;
  const { title, subtitle, cta } = is404 ? copy.notFound : copy.error;

  return (
    <section className="w-[min(1200px,calc(100%-48px))] md:w-[min(1200px,calc(100%-80px))] mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center pt-24 pb-20">
      <p className="text-accent text-sm font-medium uppercase tracking-[0.15em] mb-4">{is404 ? '404' : 'Error'}</p>

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h1>
      <p className="text-base text-muted max-w-md mx-auto">{subtitle}</p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/"
          className={`${ctaClasses} bg-accent text-black hover:bg-white border border-transparent hover:border-accent`}
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
