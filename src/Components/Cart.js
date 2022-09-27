import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Image,
  Text,
  Grid,
  Flex,
  Link,
  Box,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useShopContext } from '../context/shopContext';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } = useShopContext();

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement='right'
        onClose={closeCart}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid templateColumns='repeat(4, 1fr)' gap='1' key={item.id}>
                  <Flex alignItems='center' justifyContent='center'>
                    <CloseIcon
                      cursor='pointer'
                      onClick={() => removeLineItem(item.id)}
                    />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image src={item.variant.image.src} alt={item.title} />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center'>
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box w='100%' h='100%'>
                <Text
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDir='column'
                  h='100%'
                >
                  Your cart is empty
                </Text>
              </Box>
            )}
          </DrawerBody>

          {checkout.lineItems?.length ? (
            <DrawerFooter>
              <Button colorScheme='blue'>
                <Link href={checkout.webUrl}>Checkout</Link>
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
