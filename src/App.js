import React from 'react';

import { ThemeProvider } from '@chakra-ui/core';
import { Flex } from '@chakra-ui/core';
import customTheme from './theme';
import './App.css';

import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { Aboutme } from './components/Aboutme';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Flex w='100%' justify='center'>
        <Flex w='100%' flexDir='column' wrap='no-wrap'>
          <Navbar />

          {/* BODY */}
          <Landing />

          <Aboutme />
          <Projects />
          <Footer />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
