import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useShopContext } from '../context/shopContext';
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Container,
} from '@chakra-ui/react';

const ProductPage = () => {
  const { handle } = useParams();
  const { product, fetchProductWithHandle, addItemtoCheckout } =
    useShopContext();

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [handle, fetchProductWithHandle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Container maxW='6xl' pt='50'>
      <Box p='2rem'>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
          <Flex justifyContent='center' alignItems='center'>
            <Image src={product.images[0].src} alt={product.title} />
          </Flex>
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            px='2rem'
          >
            <Heading pb='2rem'>{product.title}</Heading>
            <Text fontWeight='bold'>Price :</Text>
            <Text pb='2rem'>{product.variants[0].price}</Text>
            <Text fontWeight='bold'>Description:</Text>
            <Text pb='2rem'>{product.description}</Text>
            <Button
              border='solid 1px #fff'
              colorScheme='teal'
              onClick={() => addItemtoCheckout(product.variants[0].id, 1)}
              _hover={{
                opacity: '80%',
                bg: '#fff',
                color: '#319795',
                border: 'solid 1px #319795',
              }}
            >
              Add to Cart
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductPage;
