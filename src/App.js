import React from 'react';

import { ThemeProvider } from '@chakra-ui/core';
import { Flex } from '@chakra-ui/core';
import theme from './theme';
import './App.css';

import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex w='100%' minH='100vh' justify='center'>
        <Flex maxW='1920px' w='100%' flexDir='column' wrap='no-wrap'>
          <header>
            <Navbar />
          </header>
          <section>
            <Landing />
          </section>
          >
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
