import React from 'react';

import { ThemeProvider } from '@chakra-ui/core';
import theme from './theme';
import './App.css';

import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <Navbar />
        </header>
        <section>
          <Landing />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
