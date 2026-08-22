import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../sections/About';
import { translations } from '../i18n';

describe('About', () => {
  it('renders the section title', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 2, name: translations.about.title })).toBeInTheDocument();
  });

  it('renders every career timeline entry', () => {
    render(<About />);
    for (const job of translations.about.timeline.items) {
      expect(screen.getByRole('heading', { level: 4, name: job.company })).toBeInTheDocument();
      // Two companies share the title "iOS Developer", so match all of them.
      expect(screen.getAllByText(job.role).length).toBeGreaterThan(0);
      expect(screen.getByText(job.period)).toBeInTheDocument();
    }
  });

  it('marks exactly one role as current', () => {
    render(<About />);
    const current = translations.about.timeline.items.filter((job) => job.current);
    expect(current).toHaveLength(1);
    expect(screen.getByText('Current')).toBeInTheDocument();
  });

  it('renders the method block with all items', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 3, name: translations.about.method.title })).toBeInTheDocument();
    for (const item of translations.about.method.items) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders all stats', () => {
    render(<About />);
    for (const stat of translations.about.stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it('renders every toolbox entry', () => {
    render(<About />);
    for (const { label } of translations.about.toolbox.primary) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
    for (const item of translations.about.toolbox.secondary) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders education and awards', () => {
    render(<About />);
    for (const item of translations.about.education.items) {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.detail)).toBeInTheDocument();
    }
  });
});
