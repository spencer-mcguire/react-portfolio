import React from 'react';

import { Flex, Text, Link, Image } from '@chakra-ui/core';
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
        mb={{ base: '4rem', lg: '15rem' }}
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
            <Link
              href='https://www.getbeluga.com'
              isExternal
              my='2%'
              mx={{ base: '0%', md: '2%' }}
            >
              <Image
                className='projects'
                h='250px'
                w='400px'
                borderRadius='10px'
                alt='getbeluga.com'
                src={BelugaScreenshot}
              />
            </Link>
            <Link
              href='https://webdb-ii-app-127edu9m1.now.sh/'
              isExternal
              my='2%'
              mx={{ base: '0%', md: '2%' }}
            >
              <Image
                className='projects'
                h='250px'
                w='400px'
                borderRadius='10px'
                src={InventoryApp}
                alt='Car dealer inventory App'
              />
            </Link>
            <Link
              href='http://labs21-allay-fe.herokuapp.com/'
              isExternal
              my='2%'
              mx={{ base: '0%', md: '2%' }}
            >
              <Image
                className='projects'
                h='250px'
                w='400px'
                borderRadius='10px'
                src={Allay}
                alt='Allay interview app'
              />
            </Link>
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            overflow='hidden'
            align='center'
            justify='center'
          >
            <Link
              href='https://www.npmjs.com/package/cra-template-reduxstarter'
              isExternal
              my='2%'
              mx={{ base: '0%', md: '2%' }}
            >
              <Image
                className='projects'
                h='250px'
                w='400px'
                borderRadius='10px'
                src={CRA}
                alt='NPM Create React App Template'
              />
            </Link>
            <Link my='2%' mx={{ base: '0%', md: '2%' }}>
              <Image
                className='projects'
                h='250px'
                w='400px'
                borderRadius='10px'
                src={ComingSoon}
                alt='Placeholder'
              />
            </Link>
            <Link
              href='https://frontend-qhy1sab1y.now.sh/'
              isExternal
              my='2%'
              mx={{ base: '0%', md: '2%' }}
            >
              <Image
                className='projects'
                h='250px'
                w='400px'
                borderRadius='10px'
                src={Lendr}
                alt='Lendr App'
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};
