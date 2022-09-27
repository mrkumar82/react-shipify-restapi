import React from 'react';
import { Box, Button, Text, Image } from '@chakra-ui/react';
import { useShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { products } = useShopContext();

  return (
    <Box h='70vh' overflow='hidden' position='relative'>
      <Image src={products[0]?.images[0].src} w='100%' />
      <Box
        position='absolute'
        top='auto'
        left='50%'
        zIndex='999'
        color='#fff'
        maxWidth='320px'
        textAlign='center'
        bottom='1rem'
        fontSize='25px'
        transform='translateX(-50%)'
        p='1rem'
        w='320px'
      >
        <Text pb='1rem'>{products[0]?.title}</Text>

        <Button colorScheme='teal'>
          <Link key={products[0]?.id} to={`/product/${products[0]?.handle}`}>
            <Text>Buy now</Text>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
