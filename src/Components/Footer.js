import React from 'react';

import { Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Text,
  Image,
  VStack,
  Flex,
  Container,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <Box backgroundColor='#24292f' mt='3rem'>
      <Container maxW='6xl'>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          color='#fff'
        >
          <Flex alignItems='center'>
            <Image
              py='20px'
              w='150px'
              src='https://cdn.shopify.com/s/files/1/0666/1659/0579/files/logo_9aa9b2c8-4f0d-43ac-bcb5-e93482759063_450x.png?v=1664117363'
            />
          </Flex>
          <VStack p='2rem' alignItems='flex-start'>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About us</Link>
            <Link to='/contact-us'>Contact us</Link>
          </VStack>
          <Flex p='2rem' alignItems='flex-start'>
            <Box mr='1rem' fontSize='30px'>
              <Link to='https://www.facebook.com/'>
                <FaFacebook />
              </Link>
            </Box>
            <Box mr='1rem' fontSize='30px'>
              <Link to='https://twitter.com/'>
                <FaTwitter />
              </Link>
            </Box>
            <Box mr='1rem' fontSize='30px'>
              <Link to='https://www.linkedin.com/'>
                <FaLinkedin />
              </Link>
            </Box>
          </Flex>
        </Grid>
      </Container>
      <Box>
        <Text
          color='#fff'
          textAlign='center'
          p='1rem'
          borderTop='solid 1px #4a4a4a'
        >
          &copy; Copyright Fashion Shop 2022
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
