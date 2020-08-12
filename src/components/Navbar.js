import React from 'react';

import myPDF from '../Spencer_McGuire_Resume.pdf';
import ProfileLogo from '../profile_logo_200x200.png';
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
} from '@chakra-ui/core';

export const Navbar = () => {
  // Resume Download Modal
  const [isOpen, setIsOpen] = React.useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    // Main nav container
    <Flex className='Navbar' w='100%' justify='center' align='center'>
      <Flex w='100%' maxW='1920px' mx='1%' align='center'>
        <Flex w='50%' align='center'>
          <Image src={ProfileLogo} size='100px' mx='20px' />
          <h1>SPENCER MCGUIRE</h1>
        </Flex>
        <Flex w='50%' justify='flex-end'>
          <Flex justify='space-between' w='50%'>
            <a href='#aboutme'> About Me </a>
            <a href='#projects'> Projects </a>
            <a href='#' onClick={() => setIsOpen(true)}>
              Resume
            </a>
            <a href='#'> Contact </a>
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
