import React from 'react';

import { Flex, Box, Text, Link, Image } from '@chakra-ui/core';
import {
  GoMarkGithub,
  AiOutlineLinkedin,
  MdMailOutline,
  GoHeart,
  AiOutlineCopyrightCircle,
} from 'react-icons/all';
import footLogo from '../img/footer_logo.png';

export const Footer = () => {
  return (
    <footer>
      {/* MAIN */}
      <Flex
        h='20rem'
        background='rgba(255,35,60, 0.9)'
        align='center'
        justify='center'
      >
        {/* container */}
        <Flex
          maxW='1920px'
          w='100%'
          h='100%'
          flexDir='column'
          align='center'
          justify='center'
        >
          {/* CONTENT CONTAINER */}
          <Flex h='125px' w='100%' justify='center' align='center'>
            <Image src={footLogo} size='100px' />
          </Flex>

          {/* SOCIAL CONTAINER */}
          <Flex h='100px' w='20rem' align='center' justify='space-around'>
            <Link href='https://github.com/spencer-mcguire' isExternal>
              <Box
                as={GoMarkGithub}
                size='40px'
                color='white'
                href='https://github.com/spencer-mcguire'
              />
            </Link>
            <Link href='mailto:smcguire1826@gmail.com' isExternal>
              <Box as={MdMailOutline} size='45px' color='white' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/spencer-mcguire/'
              isExternal
            >
              <Box as={AiOutlineLinkedin} size='40px' color='white' />
            </Link>
          </Flex>

          {/* 3rd container */}
          <Flex
            h='150px'
            w='100%'
            align='center'
            justify='center'
            opacity='0.8'
            flexDir='column'
          >
            <Flex>
              <Text color='#fff'>Built with</Text>
              <Box as={GoHeart} color='black' mx='5px' />
              <Text color='#fff' pr='15px'>
                in Nashville
              </Text>
              <Box as={AiOutlineCopyrightCircle} color='black' mx='5px' />
              <Text color='#fff'>spencer-mcguire</Text>
            </Flex>
            <Flex>
              <Text color='#fff' fontSize='0.8rem' p='10px'>
                Crafted with
                <Link
                  href='https://chakra-ui.com/'
                  isExternal
                  color='#ffffff'
                  fontSize='2xl'
                  ml='8px'
                  fontWeight='bold'
                >
                  Chakra UI
                </Link>
              </Text>
            </Flex>
          </Flex>

          {/* Bottom container */}
          <Flex h='25px' w='100%' align='flex-end' justify='center'>
            <Link
              href='https://stories.freepik.com/web'
              isExternal
              color='#fff'
              opacity='0.7'
              fontSize='md'
            >
              Illustration by Freepik Stories
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};
