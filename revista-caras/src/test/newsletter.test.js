import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Newsletter } from '../components/newletter/newsletter';

describe('Newsletter', () => {
  it('REnders the fields and the newsletter button', () => {
    render(<Newsletter />);
    expect(screen.getByLabelText(/Nombre:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
  });

  it('Shows the email validator message', () => {
    render(<Newsletter />);
    const emailInput = screen.getByLabelText(/Correo:/i);
    fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
    expect(screen.getByText(/Correo válido/i)).toBeInTheDocument();
  });

  it('Shows the invalid email message', () => {
    render(<Newsletter />);
    const emailInput = screen.getByLabelText(/Correo:/i);
    fireEvent.change(emailInput, { target: { value: 'testemail' } });
    expect(screen.getByText(/Introduce un correo válido/i)).toBeInTheDocument();
  });

  it('Shows the message for inputing valid data', () => {
    render(<Newsletter />);
    fireEvent.change(screen.getByLabelText(/Nombre:/i), { target: { value: 'Juan' } });
    fireEvent.change(screen.getByLabelText(/Correo:/i), { target: { value: 'juan@email.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));
    expect(screen.getByText(/¡Gracias por suscribirte!/i)).toBeInTheDocument();
  });

  it('Shows the error message for incomplete information', () => {
    render(<Newsletter />);
    fireEvent.change(screen.getByLabelText(/Nombre:/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Correo:/i), { target: { value: 'correo@mal' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));
    expect(screen.getByText(/Introduce un correo válido y un nombre/i)).toBeInTheDocument();
  });
});