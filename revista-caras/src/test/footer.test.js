import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '../components/footer/footer';

describe('Footer', () => {
  it('Renders the logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Caras Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('Renders the contact info section', () => {
    render(<Footer />);
    expect(screen.getByText(/CONTACTANOS/i)).toBeInTheDocument();
    expect(screen.getByText(/55-3333-4444/)).toBeInTheDocument();
    expect(screen.getByText(/carasrevista@email.com/)).toBeInTheDocument();
  });

  it('Renders the footer social media icons', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.some(link => link.getAttribute('href') === 'https://www.facebook.com/Revista.Caras')).toBe(true);
    expect(links.some(link => link.getAttribute('href') === 'https://www.instagram.com/carasmexico/')).toBe(true);
    expect(links.some(link => link.getAttribute('href') === 'https://twitter.com/carasmexico')).toBe(true);
  });

  it('Renders the rights information', () => {
    render(<Footer />);
    expect(
      screen.getByText(/EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS/i)
    ).toBeInTheDocument();
  });
});