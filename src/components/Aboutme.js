import React from 'react';

import { Flex } from '@chakra-ui/core';

export const Aboutme = () => {
  return (
    <section id='aboutme'>
      <Flex
        w='100%'
        h='100%'
        maxH='100vh'
        minH='100vh'
        flexDir='column'
        align='center'
        borderBottom='1px solid #E6ECF8'
      >
        <Flex maxW='1920px' w='100%' h='100%' flexDir='column'>
          {/* content container */}
          {/* EMPTY CONTAINER */}
          <Flex h='40%' w='100%'></Flex>
          <Flex h='60%' w='100%'>
            <h1>This is the about me section</h1>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};
