import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Nav from '../sections/Nav';
import { translations } from '../i18n';

describe('Nav', () => {
  it('renders logo', () => {
    render(<Nav articleSlug={null} />);
    expect(screen.getByAltText('Chirag Gujarati')).toBeInTheDocument();
  });

  it('renders navigation links in homepage mode', () => {
    render(<Nav articleSlug={null} />);
    expect(screen.getAllByText(translations.nav.about).length).toBeGreaterThan(0);
    expect(screen.getAllByText(translations.nav.services).length).toBeGreaterThan(0);
    expect(screen.getAllByText(translations.nav.projects).length).toBeGreaterThan(0);
    expect(screen.getAllByText(translations.nav.faq).length).toBeGreaterThan(0);
  });

  it('renders back link in article mode', () => {
    render(<Nav articleSlug="llm-modernes-tesla-k80-2014" homeUrl="/" />);
    expect(screen.getByText(/Back/)).toBeInTheDocument();
  });

  it('back link points to homeUrl', () => {
    render(<Nav articleSlug="llm-modernes-tesla-k80-2014" homeUrl="/" />);
    expect(screen.getByText(/Back/).closest('a')).toHaveAttribute('href', '/');
  });
});
