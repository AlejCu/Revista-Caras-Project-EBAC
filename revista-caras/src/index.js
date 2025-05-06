import React from 'react';
import ReactDOM from 'react-dom/client';

//import components
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Newsletter } from './components/newletter/newsletter';
import { Testimonials } from './components/testimonials/testimonials';

import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyles from './theme/globalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <ThemeProvider theme={Theme}>

      <GlobalStyles />

      <Header />

      <main>

        <Newsletter />
        <Testimonials />

      </main>

      <Footer />

    </ThemeProvider>
    
  </>
);
