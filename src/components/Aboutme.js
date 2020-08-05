import React from 'react';

import { Flex } from '@chakra-ui/core';

export const Aboutme = () => {
  return (
    <section id='aboutme'>
      <Flex minH='100vh' justify='center' align='center'>
        {/* content container */}
        <Flex>
          <h1>This is the about me section</h1>
        </Flex>
      </Flex>
    </section>
  );
};
