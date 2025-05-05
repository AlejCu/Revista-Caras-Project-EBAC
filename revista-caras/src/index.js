import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Newsletter } from './components/newletter/newsletter';
import { Testimonials } from './components/testimonials/testimonials';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Header />

    <main>

      <Newsletter />
      <Testimonials />

    </main>

    <Footer />
    
  </React.StrictMode>
);
