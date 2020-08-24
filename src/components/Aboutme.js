import React from 'react';

import Aboutimg from '../img/Product tour-cuate2.png';
import { Flex, Image, Text } from '@chakra-ui/core';

export const Aboutme = () => {
  return (
    <section>
      <Flex
        w='100%'
        h='100%'
        flexDir='column'
        align='center'
        borderBottom='1px solid #E6ECF8'
        // p='30px'
      >
        <Flex maxW='1920px' w='100%' h='100%' flexDir='column'>
          {/* content container */}
          <Flex
            mt={{ base: '225%', md: '800px', lg: '850px' }}
            flexDir='column'
          >
            <Flex justify='center' id='aboutme'>
              <Flex
                // h='300px'
                maxW='875px'
                flexDir='column'
                justify='center'
                align='center'
                // mb='-15rem'
              >
                <Text
                  fontSize={{ base: '35px', md: '55px', lg: '6xl' }}
                  fontWeight='bold'
                  mb='30px'
                >
                  about me
                </Text>
                <Text
                  textAlign='center'
                  fontSize={{ base: 'lg', lg: '3xl' }}
                  w={{ base: '80%' }}
                  color='grey'
                >
                  "Imagination is more important than knowledge. Knowledge is
                  limited. Imagination encircles the world." - Albert Einstein
                </Text>
              </Flex>
            </Flex>

            <Flex w='100%' h='auto' align='center' justify='center'>
              <Image
                display={{ base: 'none', md: 'flex' }}
                m='2%'
                src={Aboutimg}
                w={{ md: '400px', lg: '500px' }}
                h={{ md: '300px', lg: '400px' }}
                zIndex='-1'
              />
              {/* Text container */}
              <Flex
                w={{ base: '100%', lg: '50%' }}
                mt={{ base: '3rem', lg: '1rem' }}
                flexDir='column'
                align='center'
                justify='center'
                px={{ base: '20px', lg: '5rem' }}
              >
                <Text mb={5} textAlign='center'>
                  I am a Full Stack Developer specializing in React, JavaScript
                  and Node.js. Before I became a developer I owned and operated
                  City Limit Recording where I managed a group of audio
                  engineers. While at CLR I mastered the art of self management
                  and perfected prioritizing tasks. During my free time I held
                  various positions at different start up crypto currency
                  companies which lead me to development. I decided to attend
                  Lambda School late 2019 ( an intensive 9 month development
                  school) where I focused on full stack web development. Over
                  the course of the last year I have worked on remote cross
                  functional teams that prepared me to be a vital piece of a
                  development team. I can not wait to see what is next and am
                  welcoming all opportunities!
                </Text>
                <Text mb={5} textAlign='center'>
                  Bob Ross once said - "I believe talent is just a pursued
                  interest." I have worn multiple hats over my professional
                  career but I have finally found my 'thing'. Development is a
                  way for me to let my creative side loose while simultaneously
                  making the world a 'better' place one app at a time.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};
