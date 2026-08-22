import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../sections/Projects';
import { translations } from '../i18n';

const { items, ctaHref } = translations.projects;

describe('ProjectCard', () => {
  it('renders a card for every repository', () => {
    render(<Projects />);
    for (const repo of items) {
      expect(screen.getByRole('heading', { level: 3, name: repo.name })).toBeInTheDocument();
      expect(screen.getByText(repo.description)).toBeInTheDocument();
    }
  });

  it('links every card to its GitHub repository', () => {
    render(<Projects />);
    for (const repo of items) {
      const link = screen.getByLabelText(`${repo.name} on GitHub`);
      expect(link).toHaveAttribute('href', repo.href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });

  it('every repository link points at the real github.com/chiraggujarati namespace', () => {
    for (const repo of items) {
      expect(repo.href).toBe(`https://github.com/chiraggujarati/${repo.name}`);
    }
  });

  it('shows a star count only for repositories that have stars', () => {
    render(<Projects />);
    const starred = items.filter((repo) => repo.stars > 0);
    expect(starred.length).toBeGreaterThan(0);
    for (const repo of starred) {
      expect(screen.getByText(String(repo.stars))).toBeInTheDocument();
    }
  });

  it('renders the language and tags for each repository', () => {
    render(<Projects />);
    for (const repo of items) {
      for (const tag of repo.tags) {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
      }
    }
  });

  it('renders a link out to the full GitHub profile', () => {
    render(<Projects />);
    const cta = screen.getByRole('link', { name: new RegExp(translations.projects.ctaLabel, 'i') });
    expect(cta).toHaveAttribute('href', ctaHref);
  });
});
