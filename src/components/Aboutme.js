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
                <Text textAlign='center'>
                  A little about myself, before I decided to pursue development
                  I owned and operated an audio engineering company here in
                  Nashville where I gathered a great deal of non technical
                  problem solving and conflict resolution skills. I then decided
                  to make the switch into development by way of Lambda School.
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
                  Lambda School is an intensive agile based program with week
                  long sprints. During a sprint I was required to not only learn
                  new aspects of the language but also produce a product based
                  on client requirements. Therefore I am no stranger to learning
                  new frameworks, and even languages very quickly. During my
                  time here I worked with cross functional teams made up of UX,
                  UI, and back end developers where we created projects from
                  idea to production over the course of 3 to 4 days to showcase
                  our knowledge.
                </Text>
                <Text mb={5} textAlign='center'>
                  I have worked on a great deal of projects but a few are close
                  to my heart. One would be Beluga. Beluga is a proof of concept
                  and more of a sandbox for attempting to solve some of the core
                  issues with social media. I also had the honor of working on a
                  project called Allay. Allay is a platform built to bridge the
                  gap between LinkedIn and GlassDoor mainly for internal use of
                  Lambda Students. Here Students have access to candid reviews
                  not only about a company but also about the hiring and
                  interview process.
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
