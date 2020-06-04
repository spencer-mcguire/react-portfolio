import React from 'react';

import { BsChevronCompactDown } from 'react-icons/bs';
import { Flex, Box } from '@chakra-ui/core';

export const Landing = () => {
  // function to scroll to about me section
  const scrollToAbout = () => {
    document.getElementById('aboutme').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='Landing'>
      {/*Main container  */}
      <Flex justify='center' w='100%' minH='100vh' alignContent='center'>
        <Flex flexDir='column' align='center' justify='center'>
          <Flex h='50%' align='flex-end'>
            <h1>Spencer McGuire</h1>
          </Flex>
          <Flex h='50%' align='flex-end' pb='39%'>
            <Box
              as={BsChevronCompactDown}
              size='90px'
              onClick={scrollToAbout}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
