# chiraggujarati.github.io

Personal website and portfolio of Chirag Gujarati, full-stack developer.

**[chiraggujarati.github.io](https://chiraggujarati.github.io)**

## Overview

English showcase site presenting my services, projects and professional background. Designed to be fast, accessible and well-indexed on Google.

## Tech stack

| Technology         | Role                       |
| ------------------ | -------------------------- |
| React 19           | User interface             |
| Vike               | File-based routing and SSG |
| Vite 7             | Build and dev server       |
| Tailwind CSS v4    | Utility-first styles       |
| Framer Motion      | Animations and transitions |
| GitHub Pages       | Hosting                    |
| Google Analytics 4 | Traffic tracking           |

## Technical decisions

**SSG over SPA**: Every page is pre-rendered to static HTML at build time by Vike. Each page gets a real URL with its own title, meta tags and canonical - which a client-rendered SPA cannot express without relying on Googlebot executing JavaScript.

**Tailwind CSS v4 without shadcn/ui**: shadcn/ui is compatible with Tailwind v4, but the overhead is disproportionate for a site this size. Reusable components (`Button`, `SectionHeader`, `ScrollReveal`) are handmade.

**Framer Motion for animations**: Used for scroll reveal, nav transitions and hero entrance animations. The library accounts for most of the JS bundle, but the visual result justifies the cost.

**Content in one object**: All copy lives in `src/i18n.js` as a single flat object, one key per section. No i18n library and no locale layer - the site ships in English only.

**Structured SEO**: JSON-LD (schema.org Organization), OG/Twitter meta tags, canonical tags are emitted from `pages/+Head.jsx` into the pre-rendered HTML, so they are readable without executing JavaScript. `sitemap.xml` is generated after the build from the pages that actually exist.

## Articles

The site hosts long-form technical articles, pre-rendered at build time.

Posts live on [Medium](https://medium.com/@chiraggj6353) and LinkedIn, and are linked from the Writing section of the site.

## License

Copyright (c) 2026 Chirag Gujarati. All rights reserved. See [LICENSE](LICENSE).
