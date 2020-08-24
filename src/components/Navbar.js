import React from 'react';

import myPDF from '../Spencer_McGuire_Resume.pdf';
import ProfileLogo from '../img/profile_logo_200x200.png';
import avatar from '../img/29.jpg';
import {
  Flex,
  Image,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  Button,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Avatar,
} from '@chakra-ui/core';
import { FiMenu } from 'react-icons/fi';

export const Navbar = () => {
  // Resume Download Modal
  const [open, setOpen] = React.useState();
  const close = () => setOpen(false);
  const cancelRef = React.useRef();

  // Drawr
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function foo() {
    window.open('mailto: smcguire' + '1826' + '@gmail.com');
  }
  return (
    // Main nav container
    <Flex className='Navbar' w='100%' justify='center' align='center'>
      <Flex w='100%' maxW='1920px' mx='1%' align='center'>
        <Flex w={{ base: '75%', md: '50%' }} align='center'>
          <Image
            src={ProfileLogo}
            size={{ base: '75px', md: '75px', lg: '100px' }}
            mx='20px'
          />
          <Text
            fontSize={{ base: 'md', md: 'xl', lg: '3xl' }}
            fontWeight='bold'
          >
            SPENCER MCGUIRE
          </Text>
        </Flex>
        <Flex w={{ base: '25%', md: '50%' }} pr='10px' justify='flex-end'>
          <Button
            display={{ base: 'flex', lg: 'none' }}
            variantColor='#2fcc76'
            variant='ghost'
            border='none'
            onClick={onOpen}
          >
            <Box as={FiMenu} color='black' size='30px' />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader textAlign='center'>Welcome!</DrawerHeader>

              <DrawerBody justify='center'>
                <Flex flexDir='column' justify='center' align='center'>
                  <Avatar name='fake avatar' src={avatar} size='xl' />
                  <Link
                    href='#aboutme'
                    p='4%'
                    borderBottom='1px solid #2fcc76'
                    textDecor='none'
                    onClick={onClose}
                  >
                    about me
                  </Link>
                  <Link
                    href='#projects'
                    p='4%'
                    borderBottom=' 1px solid rgba(255,35,60, 0.9)'
                    onClick={onClose}
                  >
                    projects
                  </Link>
                  <Link
                    href='#resume'
                    onClick={() => {
                      setOpen(true);
                      onClose();
                    }}
                    p='4%'
                    borderBottom=' 1px solid rgba(255,35,60, 0.9)'
                  >
                    resume
                  </Link>
                  <Link
                    href='mailto:smcguire1826@gmail.com'
                    p='4%'
                    borderBottom='1px solid #2fcc76'
                    onClick={onClose}
                  >
                    contact
                  </Link>
                </Flex>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Flex
            w={{ md: '80%', lg: '70%' }}
            display={{ base: 'none', lg: 'flex' }}
            justify='space-between'
          >
            <a href='#aboutme'> About Me </a>
            <a href='#projects'> Projects </a>
            <a href='#resume' onClick={() => setOpen(true)}>
              Resume
            </a>
            <a href='mailto:smcguire1826@gmail.com'> Contact </a>
          </Flex>
        </Flex>
        {/* RESUME DOWNLOAD MODAL */}
        <>
          <AlertDialog
            isOpen={open}
            leastDestructiveRef={cancelRef}
            onClose={close}
          >
            <AlertDialogOverlay />
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Do you want to view or download my resume?
              </AlertDialogHeader>

              <AlertDialogBody>
                Click download to download or view to only view. But you should
                just download it anyway!
              </AlertDialogBody>

              <AlertDialogFooter>
                <a href={myPDF} download='Spencer_McGuire_Resume.pdf'>
                  <Button variantColor='green' ref={cancelRef} onClick={close}>
                    Download
                  </Button>
                </a>
                <Link
                  textDecoration='none'
                  href='https://resume.creddle.io/resume/fzh9z72jc9n'
                  isExternal
                >
                  <Button variantColor='red' onClick={close} ml={3}>
                    View
                  </Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      </Flex>
    </Flex>
  );
};
