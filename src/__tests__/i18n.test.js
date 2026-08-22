import { describe, it, expect } from 'vitest';
import { translations } from '../i18n';

// The site ships a single English copy deck. These guard the shape the
// components index into, so a bad edit fails here instead of at render time.
describe('i18n translations', () => {
  const sections = [
    'hero',
    'about',
    'howItWorks',
    'proofBand',
    'services',
    'projects',
    'faq',
    'testimonials',
    'articles',
    'contact',
    'nav',
    'footer',
  ];

  it('exposes every section the pages render', () => {
    for (const section of sections) {
      expect(translations[section], `missing section "${section}"`).toBeDefined();
    }
  });

  it('is a flat deck with no leftover locale keys', () => {
    expect(translations.fr).toBeUndefined();
    expect(translations.en).toBeUndefined();
  });

  it('gives every FAQ item a question and an answer', () => {
    expect(translations.faq.items.length).toBeGreaterThan(0);
    for (const item of translations.faq.items) {
      expect(item.question).toBeTruthy();
      expect(item.answer).toBeTruthy();
    }
  });

  it('gives every article a title and an excerpt', () => {
    expect(translations.articles.items.length).toBeGreaterThan(0);
    for (const item of translations.articles.items) {
      expect(item.title).toBeTruthy();
      expect(item.excerpt).toBeTruthy();
    }
  });
});
