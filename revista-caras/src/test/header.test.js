import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/header/header';

describe('Header', () => {
  it('Renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/Caras Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('Renders the navigation links', () => {
    render(<Header />);
    expect(screen.getByText(/Entretenimiento/i)).toBeInTheDocument();
    expect(screen.getByText(/Realeza/i)).toBeInTheDocument();
    expect(screen.getByText(/Moda/i)).toBeInTheDocument();
    expect(screen.getByText(/Lifestyle/i)).toBeInTheDocument();
    expect(screen.getByText(/Personalidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Arte y Cultura/i)).toBeInTheDocument();
    expect(screen.getByText(/Sport/i)).toBeInTheDocument();
    expect(screen.getByText(/Revista/i)).toBeInTheDocument();
  });

  it('Renders header social media icons', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links.some(link => link.getAttribute('href') === 'https://www.facebook.com/Revista.Caras')).toBe(true);
    expect(links.some(link => link.getAttribute('href') === 'https://www.instagram.com/carasmexico/')).toBe(true);
    expect(links.some(link => link.getAttribute('href') === 'https://twitter.com/carasmexico')).toBe(true);
  });
});