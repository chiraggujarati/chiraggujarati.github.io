// Single source of truth for the shape of a public URL.
//
// Every prerendered page is served at its directory URL - with a trailing
// slash. The canonical tag, the sitemap and every internal link have to carry
// that slash too: a canonical pointing at a URL that redirects is discarded by
// Google, which then picks its own canonical instead.

// Builds the canonical, slash-terminated URL for a page.
export function pagePath(bare = '/') {
  const inner = (bare || '/').replace(/^\/+|\/+$/g, '');
  return inner ? `/${inner}/` : '/';
}
