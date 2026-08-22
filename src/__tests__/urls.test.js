import { describe, it, expect } from 'vitest';
import { pagePath } from '../urls.js';

describe('pagePath', () => {
  // The host serves directory URLs and redirects the slashless form, so a
  // missing trailing slash here turns every canonical tag into a pointer at a
  // redirect.
  it('always terminates with a slash', () => {
    expect(pagePath('/')).toBe('/');
    expect(pagePath('/article/some-slug')).toBe('/article/some-slug/');
    expect(pagePath('/article/some-slug/')).toBe('/article/some-slug/');
  });

  it('defaults to the home path', () => {
    expect(pagePath()).toBe('/');
    expect(pagePath(undefined)).toBe('/');
  });
});
