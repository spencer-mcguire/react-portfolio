import React from 'react';

import { BsChevronCompactDown } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Flex, Box, Text, Grid } from '@chakra-ui/core';

export const Landing = () => {
  // function to scroll to about me section
  const scrollToAbout = () => {
    document.getElementById('aboutme').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/*Main container  */}
      <Flex w='100%' h='100%' minH='100vh' flexDir='column' align='center'>
        {/* TOP CONTAINER */}
        <Flex maxW='1920px' w='100%' h='60%' border='2px solid red'>
          <Flex
            w='50%'
            align='center'
            justify='center'
            border='2px solid green'
            flexDir='column'
          >
            <Text fontSize={50}>
              I'm a Full Stack <br></br> Web Developer
            </Text>
            {/* SOCIAL CONTAINER */}
            <Flex>
              <Box as={AiFillGithub} size='32px' color='grey' />
              <Box as={AiFillLinkedin} size='32px' color='grey' />
            </Flex>
          </Flex>
        </Flex>
        {/* BOTTOM CONTAINER */}
        <Flex
          w='100%'
          h='40%'
          background='#ff2252'
          justify='center'
          align='center'
        >
          {/* CARD CONTAINER */}
          <Flex
            maxW='1920px'
            w='100%'
            h='100%'
            border='2px solid blue'
            justify='space-around'
            align='center'
          >
            <Box h='60%' w='10%' bg='white'>
              <p>Content</p>
            </Box>
            <Box h='10%' w='10%' bg='white'>
              <p>Content</p>
            </Box>
            <Box h='10%' w='10%' bg='white'>
              <p>Content</p>
            </Box>
          </Flex>
        </Flex>
        {/* <Flex flexDir='column' align='center' justify='center'>
          <h1> Spencer McGuire </h1>
          <h3> Full Stack Developer </h3>
          <Flex h='50%' align='flex-end' pb='39%'>
            <Box
              as={BsChevronCompactDown}
              size='90px'
              onClick={scrollToAbout}
            />
          </Flex> */}
        {/* </Flex> */}
      </Flex>
    </div>
  );
};
