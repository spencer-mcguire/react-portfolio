import React from 'react';

import { Flex } from '@chakra-ui/core';

export const Navbar = () => {
  return (
    // Main nav container
    <Flex w='100%' justify='center' align='center'>
      <Flex w='100%' maxW='1920px' pt='1%' mx='1%' align='center'>
        <Flex w='50%'>
          <h1>SPENCER MCGUIRE</h1>
        </Flex>
        <Flex w='50%' justify='flex-end'>
          <Flex justify='space-between' w='50%'>
            <a href='#aboutme'> About Me </a>
            <a href='#projects'> Projects </a>
            <a href='#projects'> Resume </a>
            <a href='#'> Contact </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
