import React from 'react';
import { Flex, Text, Icon, Image, Badge, Box } from '@chakra-ui/react';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import { useShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { openCart, openMenu, checkout } = useShopContext();

  if (!checkout.lineItems) return <div>Loading...</div>;

  return (
    <Flex
      backgroundColor='#24292f'
      flexDir='row'
      justifyContent='space-between'
      alignItems='center'
      p='1rem'
    >
      <Text>
        <Icon
          cursor='pointer'
          fill='white'
          as={MdMenu}
          w={35}
          h={35}
          onClick={() => openMenu()}
        />
      </Text>
      <Link to='/'>
        <Image
          src='https://cdn.shopify.com/s/files/1/0666/1659/0579/files/logo_9aa9b2c8-4f0d-43ac-bcb5-e93482759063_450x.png?v=1664117363'
          w={100}
          alt='Fashion Shop'
        />
      </Link>
      <Box display='flex' alignItems='center'>
        <Icon
          fill='white'
          cursor='pointer'
          as={MdShoppingCart}
          w={35}
          h={35}
          onClick={() => openCart()}
        ></Icon>
        <Badge colorScheme='red' borderRadius='50%' alignSelf='flex-start'>
          {checkout?.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
