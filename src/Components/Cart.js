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
  Image,
  Text,
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
                <Flex
                  gap='1'
                  key={item.id}
                  mb='20px'
                  justifyContent='space-between'
                >
                  <Flex alignItems='center' justifyContent='center' w='10%'>
                    <CloseIcon
                      cursor='pointer'
                      onClick={() => removeLineItem(item.id)}
                    />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center' w='20%'>
                    <Image
                      src={item.variant.image.src}
                      alt={item.title}
                      w='100px'
                    />
                  </Flex>
                  <Flex alignItems='center' justifyContent='center' w='20%'>
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center' w='10%'>
                    <Text>{item.quantity}</Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center' w='20%'>
                    <Text textAlign='right'>${item.variant.price}</Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='center' w='10%'>
                    <Text textAlign='right'>
                      ${item.variant.price * item.quantity}
                    </Text>
                  </Flex>
                </Flex>
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
            <Flex
              justifyContent='space-between'
              borderTop='solid 1px #999'
              pt='1rem'
            >
              <Box>
                <Text fontWeight='bold'>Cart Total</Text>
              </Box>
              <Box>
                <Text fontWeight='bold'>
                  $
                  {checkout.lineItems?.length
                    ? checkout.lineItems
                        .map((item) => item.quantity * item.variant.price)
                        .reduce((acc, val) => acc + val, 0)
                    : null}
                </Text>
              </Box>
            </Flex>
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
