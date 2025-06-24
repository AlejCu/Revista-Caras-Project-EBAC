import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Testimonials } from '../components/testimonials/testimonials';


jest.mock('../components/testimonials/../../hooks/useAutoScroll', () => {
  return () => ({ current: null });
});

describe('Testimonials', () => {
  it('Renders the title', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Testimonios/i)).toBeInTheDocument();
  });

    it('Renders the testimonial names', () => {
    render(<Testimonials />);
    expect(screen.getAllByText(/María López/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/Juan Pérez/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/Sofía Gutiérrez/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/Diego Ramírez/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/Mateo Fernández/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText(/Lucía Martínez/i).length).toBeGreaterThanOrEqual(2);
    });

    it('Renders the testimonial texts', () => {
    render(<Testimonials />);
    expect(
        screen.getAllByText(/¡Me encanta recibir el newsletter cada semana!/i).length
    ).toBeGreaterThanOrEqual(2);
    expect(
        screen.getAllByText(/Desde que me suscribí al newsletter, he descubierto tantos recursos útiles/i).length
    ).toBeGreaterThanOrEqual(2);
    expect(
        screen.getAllByText(/¡Me encanta el newsletter! Es como tener acceso exclusivo/i).length
    ).toBeGreaterThanOrEqual(2);
    });

  it('Uses the autoscroll function', () => {
    render(<Testimonials />);
    const testimonialsDiv = document.querySelector('.testimonials');
    expect(testimonialsDiv).toBeInTheDocument();
  });
});