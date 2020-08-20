import React from 'react';

import { Flex, Text, Link, Image, Stack } from '@chakra-ui/core';
import BelugaScreenshot from '../img/beluga.PNG';
import InventoryApp from '../img/InventoryApp.PNG';
import Allay from '../img/Allay.png';
import CRA from '../img/CRA.png';
import Lendr from '../img/Lendr.PNG';
import ComingSoon from '../img/ComingSoon.jpg';

export const Projects = () => {
  return (
    <section id='projects'>
      <Flex
        justify='center'
        align='center'
        pt={{ base: '0px', lg: '200px' }}
        mb='15rem'
      >
        <Flex maxW='1920px' w='100%' flexDir='column'>
          {/* Project Header */}
          <Flex justify='center' align='center' flexDir='column' pb='80px'>
            <Text
              fontSize={{ base: '35px', md: '55px', lg: '6xl' }}
              fontWeight='bold'
              p='35px'
            >
              recent projects
            </Text>
            <Text textAlign='center' w={{ base: '90%' }}>
              Here are just a few of the projects I have worked on recently.
              Want to see more? Check out my
              <Link
                href='https://github.com/spencer-mcguire'
                color='#2fcc76'
                fontWeight='bold'
                isExternal
                px='4px'
              >
                github
              </Link>
              !
            </Text>
          </Flex>
          {/* Projects container */}
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            align='center'
            justify='center'
            mb={{ lg: '40px' }}
          >
            <Image
              className='projects'
              h='250px'
              w='400px'
              m='2%'
              borderRadius='10px'
              alt='getbeluga.com'
              src={BelugaScreenshot}
            />
            <Image
              className='projects'
              h='250px'
              w='400px'
              m='2%'
              borderRadius='10px'
              src={InventoryApp}
              alt='Car dealer inventory App'
            />
            <Image
              className='projects'
              h='250px'
              w='400px'
              m='2%'
              borderRadius='10px'
              src={Allay}
              alt='Allay interview app'
            />
          </Flex>
          <Flex
            // display={{ md: 'isInline' }}
            flexDir={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            align='center'
            justify='center'
          >
            <Image
              className='projects'
              h='250px'
              w='400px'
              m='2%'
              borderRadius='10px'
              src={CRA}
              alt='NPM Create React App Template'
            />
            <Image
              className='projects'
              h='250px'
              w='400px'
              m='2%'
              borderRadius='10px'
              src={ComingSoon}
              alt='Placeholder'
            />
            <Image
              className='projects'
              h='250px'
              w='400px'
              m='2%'
              borderRadius='10px'
              src={Lendr}
              alt='Lendr App'
            />
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};
