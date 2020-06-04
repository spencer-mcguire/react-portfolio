import React from 'react';

import { Flex } from '@chakra-ui/core';

export const Navbar = () => {
  return (
    // Main nav container
    <Flex className='Navbar' pt='2%' justify='center'>
      <Flex justify='space-around' w='30%'>
        <a href=''> About me </a>
        <a href=''> Projects </a>
        <a href=''> Contact </a>
      </Flex>
    </Flex>
  );
};
