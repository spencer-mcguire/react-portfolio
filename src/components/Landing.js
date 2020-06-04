import React from 'react';

import { BsChevronCompactDown } from 'react-icons/bs';
import { Flex } from '@chakra-ui/core';

export const Landing = () => {
  return (
    <div className='Landing'>
      {/*Main container  */}
      <Flex justify='center' w='100%' h='100%' alignContent='center'>
        <Flex flexDir='column' align='center' justify='center'>
          <p>This is the landing page</p>

          <BsChevronCompactDown />
        </Flex>
      </Flex>
    </div>
  );
};
