import React from 'react';

import { Flex } from '@chakra-ui/core';

export const Navbar = () => {
  return (
    // Main nav container
    <Flex className='Navbar' w='100%' pt='2%' justify='center'>
      <Flex justify='space-around' w='30%'>
        <h2> About me </h2>
        <h2> Projects </h2>
        <h2> Contact </h2>
      </Flex>
    </Flex>
  );
};
