import React, { useEffect, useState } from 'react';
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
  Select,
} from '@chakra-ui/react';

const ProductPage = () => {
  const [Qantity, setQantity] = useState(1);

  const { handle } = useParams();
  const { product, fetchProductWithHandle, addItemtoCheckout } =
    useShopContext();

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Container maxW='6xl' pt='0' h='60vh'>
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
            <Text pb='2rem'>${product.variants[0].price}</Text>

            <Text fontWeight='bold'>Qty :</Text>
            <Select
              placeholder='Select option'
              w='150px'
              mb='2rem'
              value={Qantity}
              onChange={(e) => setQantity(e.target.value)}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Select>

            <Text fontWeight='bold'>Description:</Text>
            <Text pb='2rem'>{product.description}</Text>
            <Button
              border='solid 1px #fff'
              colorScheme='teal'
              onClick={() =>
                addItemtoCheckout(product.variants[0].id, parseInt(Qantity))
              }
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
