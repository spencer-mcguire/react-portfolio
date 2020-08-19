import React from 'react';

import DevImg from '../img/Developer activity-bro.svg';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineComment,
  MdMailOutline,
  IoIosBarcode,
  BsCodeSlash,
} from 'react-icons/all';
import {
  Flex,
  Box,
  Text,
  Button,
  Link,
  Image,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core';

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
              Over my professional career I have worn multiple hats, from
              business owner to now Fullstack developer. I have done remote work
              for startups, collaborated with cross functional teams and built a
              plethora of helpful and usable applications. I am actively
              searching for a team where I can grow and flourish as a developer.
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
            {/* MAIN TABLE */}
            <Flex
              className='table'
              h='850px'
              w='65rem'
              border='1px solid #E6ECF8'
              background='#FBFCFC'
              rounded='15px'
              zIndex='11'
            >
              {/* FRONT END TABLE */}
              <Flex w='33.3%' p='1rem' flexDir='column' align='center'>
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
                <Text h='100px' mb='50px' textAlign='center'>
                  I deeply enjoy crafting clean and more importantly usable
                  Front-ends from idea to production.
                </Text>
                <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                  Languages I speak:
                </Text>
                <Text mb='50px'> JavaScript, HTML, CSS, Less </Text>
                <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                  Frameworks and tools:
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    React.js
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Redux
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Chakra UI
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Tailwind CSS
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Material UI
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Github
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Cypress.io
                  </ListItem>
                </List>
              </Flex>

              {/* WHAT MAKES ME DIFFERENT TABLE */}
              <Flex
                w='33.3%'
                p='1rem'
                flexDir='column'
                align='center'
                borderX='1px solid #E6ECF8'
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
                <Text h='100px' mb='50px' textAlign='center'>
                  My biggest weakness is I refuse to be stagnant. I am
                  determined to continue learning and shaping my craft.
                </Text>
                <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                  Soft Skills:
                </Text>
                <Text mb='50px'> Conflict Resolution, Self Starter </Text>
                <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                  More Skills:
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Attention to detail
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    NPM
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Test-Driven-Development
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Unit Testing
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    VS Code
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Heroku
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Customer Service
                  </ListItem>
                </List>
              </Flex>

              {/* BACK END TABLE */}
              <Flex w='33.3%' p='1rem' flexDir='column' align='center'>
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
                <Text h='100px' mb='50px' textAlign='center'>
                  Any Front-end would be lost without a solid and secure
                  Back-end. I love taking on edge case problem and solving them
                  with BigO in mind.
                </Text>
                <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                  Languages I speak:
                </Text>
                <Text mb='50px'> JavaScript, Python </Text>
                <Text mb='20px' fontSize='xl' fontWeight='bold' color='#2fcc76'>
                  Frameworks and tools:
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    NodeJS
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Express
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Knex
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    MongoDB (learning)
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    Authentication
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    PostgreSQL
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      icon='chevron-right'
                      color='rgba(255,35,60, 0.9)'
                    />
                    SQLite
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
