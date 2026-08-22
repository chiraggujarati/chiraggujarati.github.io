// Post-build sitemap generator. Walks dist/client/ for *.html files and emits
// dist/client/sitemap.xml.
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pagePath } from '../src/urls.js';

const SITE = 'https://chiraggujarati.github.io';
const DIST = 'dist/client';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (entry === 'index.html') out.push(p);
  }
  return out;
}

function fileToUrl(file) {
  const rel = relative(DIST, file)
    .replace(/\\/g, '/')
    .replace(/\/?index\.html$/, '');
  return pagePath('/' + rel);
}

const urls = [...new Set(walk(DIST).map(fileToUrl))].filter((url) => url.replace(/\/$/, '') !== '/404');

const today = new Date().toISOString().slice(0, 10);
const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const url of urls) {
  xml.push('  <url>');
  xml.push(`    <loc>${SITE}${url}</loc>`);
  xml.push(`    <lastmod>${today}</lastmod>`);
  xml.push('  </url>');
}
xml.push('</urlset>');

writeFileSync(join(DIST, 'sitemap.xml'), xml.join('\n') + '\n');
console.log(`✓ sitemap.xml generated with ${urls.length} URLs`);
