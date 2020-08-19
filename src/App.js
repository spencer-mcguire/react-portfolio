import React from 'react';

import { ThemeProvider } from '@chakra-ui/core';
import { Flex, Image } from '@chakra-ui/core';
import customTheme from './theme';
import './App.css';
import UnderConstruction from './img/UnderConstruction.jpg';
import ProfileLogo from './img/profile_logo_200x200.png';

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
          {window.innerWidth < 900 ? (
            <Flex minW='100vw' h='100vh' flexDir='column'>
              <Flex align='center'>
                <Image src={ProfileLogo} size='100px' mx='20px' zIndex='999' />
                <h3>SPENCER MCGUIRE</h3>
              </Flex>
              <Image size='100%' src={UnderConstruction} />
            </Flex>
          ) : (
            //  HEADER
            <>
              <Navbar />

              {/* // BODY */}
              <Landing />
              <Aboutme />
              <Projects />

              {/* // FOOTER */}
              <Footer />
            </>
          )}
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
