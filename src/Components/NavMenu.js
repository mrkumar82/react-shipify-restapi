import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useShopContext();
  return (
    <Drawer isOpen={isMenuOpen} placement='left' onClose={closeMenu}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <VStack alignItems='flex-start'>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About us</Link>
            <Link to='/contact-us'>Contact us</Link>
          </VStack>
        </DrawerBody>

        <DrawerFooter justifyContent='center'>
          <Text>&copy; Copyright Fashion Shop 2022</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenu;
