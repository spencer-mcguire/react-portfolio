import React from 'react';

import DevImg from '../Developer activity-bro.svg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Flex, Box, Text, Button, Link, Image } from '@chakra-ui/core';

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
      <Flex
        w='100%'
        h='100%'
        maxH='100vh'
        minH='100vh'
        flexDir='column'
        align='center'
      >
        {/* TOP CONTAINER */}
        <Flex maxW='1920px' w='100%' h='60%'>
          <Flex w='50%' justify='center'>
            <Flex flexDir='column' justify='center'>
              <Text fontWeight='bolder' fontSize='70px'>
                I'm a Full Stack <br></br> Web Developer
              </Text>
              {/* SOCIAL CONTAINER */}
              <Flex w='30%' justify='space-around' mb='6%'>
                <Link href='https://github.com/spencer-mcguire' isExternal>
                  <Box as={AiFillGithub} size='30px' color='grey' />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/spencer-mcguire/'
                  isExternal
                >
                  <Box as={AiFillLinkedin} size='30px' color='grey' />
                </Link>
              </Flex>
              {/* BUTTON CONTAINER */}
              <Flex>
                <Button
                  p='25px'
                  background='#2fcc76'
                  border='none'
                  color='white'
                  borderRadius='30px'
                  onClick={scrollToAbout}
                >
                  Learn About Me
                </Button>
              </Flex>
            </Flex>
          </Flex>
          {/* IMG CONTAINER */}
          <Flex w='50%' justify='center'>
            <Image src={DevImg} alt='Developer illustration ' size='1000px' />
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
      </Flex>
    </div>
  );
};
