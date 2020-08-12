import React from 'react';

import { Flex, Text, Link, Image, Stack } from '@chakra-ui/core';

export const Projects = () => {
  return (
    <section id='projects'>
      <Flex justify='center' align='center' pt='200px'>
        <Flex maxW='1920px' w='100%' flexDir='column'>
          {/* Project Header */}
          <Flex
            maxW='1920px'
            justify='center'
            align='center'
            flexDir='column'
            pb='80px'
          >
            <Text fontSize='3xl' fontWeight='bold' p='35px'>
              My Recent Projects{' '}
            </Text>
            <Text textAlign='center'>
              Here are just a few of the projects I have worked on recently.
              Want to see more? Check out my{' '}
              <Link href='https://github.com/spencer-mcguire' isExternal>
                github
              </Link>
              !
            </Text>
          </Flex>
          {/* Projects container */}
          <Stack
            isInline
            spacing={10}
            overflow='hidden'
            align='center'
            justify='center'
            m='40px'
          >
            <Image
              size='250px'
              borderRadius='10px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
            <Image
              size='250px'
              borderRadius='10px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />{' '}
            <Image
              size='250px'
              borderRadius='10px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />{' '}
          </Stack>
          <Stack
            isInline
            spacing={10}
            overflow='hidden'
            align='center'
            justify='center'
          >
            <Image
              size='250px'
              borderRadius='10px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />{' '}
            <Image
              size='250px'
              borderRadius='10px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />{' '}
            <Image
              size='250px'
              borderRadius='10px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
          </Stack>
        </Flex>
      </Flex>
    </section>
  );
};
