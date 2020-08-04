import React from 'react';

import DevImg from '../Developer activity-bro.svg';
import { AiFillGithub, AiFillLinkedin, AiOutlineComment } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { IoIosBarcode } from 'react-icons/all';
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
          h='35%'
          mb='5%'
          background='#ff2252'
          justify='center'
          align='center'
          flexDir='column'
        >
          <Flex
            w='100%'
            h='70%'
            maxW='1000px'
            padding='2%'
            align='center'
            justify='center'
            flexDir='column'
          >
            <Text fontSize='5xl' color='white' mb='30px'>
              Hey, I'm Spencer. Nice to meet you.
            </Text>
            <Text fontSize='lg' color='white' textAlign='center'>
              He's like the rest of us -- he's about half crazy. It takes a
              very, very little bit. Don't be afraid to go out on a limb once in
              a while. You learn to take advantage of whatever happens and use
              it to make your painting special. Don't over do it -- be careful.
              Be careful.
            </Text>
          </Flex>
          {/* CARD CONTAINER */}
          <Flex
            maxW='1920px'
            w='100%'
            h='30%'
            justify='center'
            align='flex-start'
          >
            <Flex
              h='1000px'
              w='20%'
              p='1%'
              zIndex='11'
              bg='white'
              border='1px solid grey'
              roundedLeft='20px'
              flexDir='column'
              align='center'
            >
              <Box as={AiOutlineComment} size='100px' mb='30px' mt='10px' />
              <h2>Front-end Developer</h2>
            </Flex>

            <Flex
              h='1000px'
              w='20%'
              p='1%'
              bg='grey'
              borderY='1px solid grey'
              flexDir='column'
              align='center'
            >
              <Box as={BsCodeSlash} size='100px' mb='30px' mt='10px' />
              <h2>Back-end Developer</h2>
            </Flex>
            <Flex
              h='1000px'
              w='20%'
              p='1%'
              bg='white'
              border='1px solid grey'
              roundedRight='20px'
              flexDir='column'
              align='center'
            >
              <Box as={IoIosBarcode} size='100px' mb='30px' mt='10px' />
              <h2>What makes me different?</h2>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
