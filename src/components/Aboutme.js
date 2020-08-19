import React from 'react';

import Aboutimg from '../JavaScript frameworks-pana.svg';
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
        p='30px'
      >
        <Flex maxW='1920px' w='100%' h='100%' flexDir='column'>
          {/* content container */}
          <Flex mt='650px' flexDir='column'>
            <Flex justify='center' id='aboutme'>
              <Flex
                // h='300px'
                maxW='875px'
                zIndex='11'
                flexDir='column'
                justify='center'
                align='center'
                mb='-15rem'
              >
                <Text fontSize='6xl' fontWeight='bold' zIndex='99' mb='30px'>
                  about me
                </Text>
                <Text textAlign='center' fontSize='3xl' color='grey'>
                  "Imagination is more important than knowledge. Knowledge is
                  limited. Imagination encircles the world." - Albert Einstein
                </Text>
              </Flex>
            </Flex>

            <Flex w='100%' h='auto'>
              <Image
                mb='-15.85rem'
                p='0%'
                src={Aboutimg}
                size='900px'
                zIndex='-1'
              />
              {/* Text container */}
              <Flex
                w='50%'
                mt='15rem'
                flexDir='column'
                align='center'
                justify='center'
                px='5rem'
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
