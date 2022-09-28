import React, { useEffect } from 'react';
import { useShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Container } from '@chakra-ui/react';
import Hero from '../Components/Hero';
import ImageWithText from '../Components/ImageWithText';

const Home = () => {
  const { products, fetchAllProducts } = useShopContext();

  useEffect(() => {
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products) return <div>Loading...</div>;

  return (
    <>
      <Hero />
      <Container maxW='6xl' pt='50'>
        <Box>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            gap={6}
            mb='50'
          >
            {products.slice(1, 19).map((product) => {
              return (
                <Link key={product.id} to={`/product/${product.handle}`}>
                  <Box
                    _hover={{
                      boxShadow: '1px 1px 5px 5px #eee;',
                      borderRadius: '5px',
                    }}
                  >
                    <Image src={product.images[0].src} alt={product.title} />
                    <Box p='1rem'>
                      <Text fontWeight='bold' fontSize='20px'>
                        {product.title}
                      </Text>
                      <Text fontWeight='bold'>
                        ${product.variants[0].price}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              );
            })}
          </Grid>

          <ImageWithText
            heading='LED High Tops'
            image='https://cdn.shopify.com/s/files/1/0666/1659/0579/products/putting-on-your-shoes_925x_7c4fcf74-83f8-46a3-b573-6f69fb5824c0.jpg?v=1664103365'
            description='Black high top shoes with green LED lights in the sole, tied up with laces and a buckle.'
          />
          <ImageWithText
            reverse
            heading='Olive Green Jacket'
            image='https://cdn.shopify.com/s/files/1/0666/1659/0579/products/urban-fashion_925x_e18b4026-0d48-4753-81d5-3740d459d960.jpg?v=1664103360'
            description='Loose fitting olive green jacket with buttons and large pockets. Multicoloured pattern on the front of the shoulders.'
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
