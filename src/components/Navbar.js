import React from 'react';

import myPDF from '../Spencer_McGuire_Resume.pdf';
import ProfileLogo from '../img/profile_logo_200x200.png';
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
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuButton,
} from '@chakra-ui/core';
import { FiMenu } from 'react-icons/fi';

export const Navbar = () => {
  // Resume Download Modal
  const [isOpen, setIsOpen] = React.useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

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
          <Flex display={{ base: 'flex', lg: 'none' }}>
            <Menu>
              <MenuButton as={FiMenu} size='40px' />
              <MenuList>
                <MenuGroup title='Welcome!'>
                  <MenuItem href='#aboutme'> about me </MenuItem>
                  <MenuItem> projects </MenuItem>
                  <MenuItem> resume </MenuItem>
                  <MenuItem> contact </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>

          <Flex
            w={{ md: '80%', lg: '70%' }}
            display={{ base: 'none', lg: 'flex' }}
            justify='space-between'
          >
            <a href='#aboutme'> About Me </a>
            <a href='#projects'> Projects </a>
            <a href='#resume' onClick={() => setIsOpen(true)}>
              Resume
            </a>
            <a href='mailto:smcguire1826@gmail.com'> Contact </a>
          </Flex>
        </Flex>
        {/* RESUME DOWNLOAD MODAL */}
        <>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
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
                  <Button
                    variantColor='green'
                    ref={cancelRef}
                    onClick={onClose}
                  >
                    Download
                  </Button>
                </a>
                <Link
                  textDecoration='none'
                  href='https://resume.creddle.io/resume/fzh9z72jc9n'
                  isExternal
                >
                  <Button variantColor='red' onClick={onClose} ml={3}>
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
