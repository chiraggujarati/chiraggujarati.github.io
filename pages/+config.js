import vikeReact from 'vike-react/config';

export default {
  extends: vikeReact,
  // `partial` keeps the /article/@slug route available without warning while
  // no articles are hosted on this site - every post currently lives on
  // Medium or LinkedIn and is linked out to from the Writing section.
  prerender: { partial: true },
  lang: 'en',
};
