import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Faq from '../sections/Faq';
import { translations } from '../i18n';

describe('Faq', () => {
  it('renders the title and all questions', () => {
    render(<Faq />);
    expect(screen.getByRole('heading', { level: 2, name: translations.faq.title })).toBeInTheDocument();
    for (const item of translations.faq.items) {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument();
    }
  });

  it('starts with all items collapsed (aria-expanded=false)', () => {
    render(<Faq />);
    const buttons = screen.getAllByRole('button');
    for (const btn of buttons) {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    }
  });

  it('opens an item on click and reflects aria-expanded', () => {
    render(<Faq />);
    const firstQuestion = translations.faq.items[0].question;
    const button = screen.getByRole('button', { name: firstQuestion });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(translations.faq.items[0].answer)).toBeInTheDocument();
  });

  it('closes an item on second click', () => {
    render(<Faq />);
    const firstQuestion = translations.faq.items[0].question;
    const button = screen.getByRole('button', { name: firstQuestion });
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('allows multiple items to be opened simultaneously', () => {
    render(<Faq />);
    const q1 = screen.getByRole('button', { name: translations.faq.items[0].question });
    const q2 = screen.getByRole('button', { name: translations.faq.items[1].question });
    fireEvent.click(q1);
    fireEvent.click(q2);
    expect(q1).toHaveAttribute('aria-expanded', 'true');
    expect(q2).toHaveAttribute('aria-expanded', 'true');
  });

  it('links each panel to its button via aria-controls and id', () => {
    render(<Faq />);
    const button = screen.getByRole('button', { name: translations.faq.items[0].question });
    fireEvent.click(button);
    const panelId = button.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();
    const panel = document.getElementById(panelId);
    expect(panel).toBeInTheDocument();
    expect(panel).toHaveAttribute('aria-labelledby', button.getAttribute('id'));
    expect(within(panel).getByText(translations.faq.items[0].answer)).toBeInTheDocument();
  });
});
