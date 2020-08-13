import React from 'react';

import DevImg from '../Developer activity-bro.svg';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineComment,
  MdMailOutline,
  IoIosBarcode,
  BsCodeSlash,
} from 'react-icons/all';
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
                <Link href='mailto:smcguire1826@gmail.com' isExternal>
                  <Box as={MdMailOutline} size='30px' color='grey' />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/spencer-mcguire/'
                  isExternal
                >
                  <Box as={AiOutlineLinkedin} size='30px' color='grey' />
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
          h='30%'
          mb='5%'
          background='rgba(255,35,60, 0.9)'
          // background='#ff2252'
          justify='center'
          align='center'
          flexDir='column'
        >
          <Flex
            w='100%'
            h='80%'
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
          {/* table CONTAINER */}
          <Flex
            maxW='1920px'
            w='100%'
            h='20%'
            justify='center'
            align='flex-start'
          >
            <Flex
              className='table'
              h='850px'
              w='20%'
              p='1%'
              zIndex='11'
              bg='white'
              roundedLeft='20px'
              flexDir='column'
              align='center'
              border='1px solid #E6ECF8'
              background='#FBFCFC'
            >
              <Box
                as={AiOutlineComment}
                size='70px'
                mb='30px'
                mt='30px'
                color='#2fcc76'
              />
              <Text fontSize='2xl' mb='30px'>
                Front-end Developer
              </Text>
              <Text mb='50px' textAlign='center'>
                In painting, you have unlimited power. You have the ability to
                move mountains. Painting should do one thing. It should put
                happiness in your heart. A happy cloud.
              </Text>
              <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                Languages I speak:
              </Text>
              <Text mb='50px'> JavaScript, HTML, CSS, Python </Text>
              <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                Frameworks and tools:
              </Text>

              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </Flex>

            <Flex
              className='table'
              h='850px'
              w='20%'
              p='1%'
              zIndex='11'
              bg='white'
              flexDir='column'
              align='center'
              borderY='1px solid #E6ECF8'
              background='#FBFCFC'
            >
              <Box
                as={BsCodeSlash}
                size='70px'
                mb='30px'
                mt='30px'
                color='#2fcc76'
              />
              <Text fontSize='2xl' mb='30px'>
                Back-end Developer
              </Text>
              <Text mb='50px' textAlign='center'>
                In painting, you have unlimited power. You have the ability to
                move mountains. Painting should do one thing. It should put
                happiness in your heart. A happy cloud.
              </Text>
              <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                Languages I speak:
              </Text>
              <Text mb='50px'> JavaScript, HTML, CSS, Python </Text>
              <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                Frameworks and tools:
              </Text>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </Flex>
            <Flex
              className='table'
              h='850px'
              w='20%'
              p='1%'
              bg='white'
              zIndex='11'
              roundedRight='20px'
              flexDir='column'
              align='center'
              border='1px solid #E6ECF8'
              background='#FBFCFC'
            >
              <Box
                as={IoIosBarcode}
                size='70px'
                mb='30px'
                mt='30px'
                color='#2fcc76'
              />
              <Text fontSize='2xl' mb='30px'>
                What makes me different?
              </Text>
              <Text mb='50px' textAlign='center'>
                In painting, you have unlimited power. You have the ability to
                move mountains. Painting should do one thing. It should put
                happiness in your heart. A happy cloud.
              </Text>
              <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                Languages I speak:
              </Text>
              <Text mb='50px'> JavaScript, HTML, CSS, Python </Text>
              <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                Frameworks and tools:
              </Text>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </Flex>
          </Flex>
          <Flex h='10%'>
            <p> stuff </p>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
