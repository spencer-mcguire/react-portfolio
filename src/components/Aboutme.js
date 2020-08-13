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
                  We can always carry this a step further. There's really no end
                  to this. Let your heart take you to wherever you want to be.
                  This is the time to get out all your flustrations, much better
                  than kicking the dog around the house or taking it out on your
                  spouse.
                </Text>
              </Flex>
            </Flex>

            <Flex w='100%' h='auto'>
              <Image
                mb='-15.5rem'
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
                  Each highlight must have it's own private shadow. Let's make
                  some happy little clouds in our world. We're trying to teach
                  you a technique here and how to use it. That's a crooked tree.
                  We'll send him to Washington.
                </Text>
                <Text mb={5} textAlign='center'>
                  Tree trunks grow however makes them happy. They say everything
                  looks better with odd numbers of things. But sometimes I put
                  even numbers—just to upset the critics. This present moment is
                  perfect simply due to the fact you're experiencing it. Isn't
                  that fantastic? You can just push a little tree out of your
                  brush like that. This is unplanned it really just happens.
                  Making all those little fluffies that live in the clouds.
                  Let's go up in here, and start having some fun All you have to
                  learn here is how to have fun. Only God can make a tree - but
                  you can paint one. A tree needs to be your friend if you're
                  going to paint him.
                </Text>
                <Text mb={5} textAlign='center'>
                  This is unplanned it really just happens. Making all those
                  little fluffies that live in the clouds. Let's go up in here,
                  and start having some fun All you have to learn here is how to
                  have fun. Only God can make a tree - but you can paint one. A
                  tree needs to be your friend if you're going to paint him.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};
