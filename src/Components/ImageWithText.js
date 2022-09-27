import React from 'react';
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
  Container,
} from '@chakra-ui/react';
const ImageWithText = ({ reverse, image, heading, description }) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';
  return (
    <Box>
      <Flex flexDirection={['column', reverseSection]} w='100%'>
        <Image src={image} objectFit='cover' w={['100%', '50%']} />
        <Flex
          w={['100%', '50%']}
          flexDirection='column'
          justifyContent='center'
          p='2rem'
        >
          <Heading py='1rem'>{heading && heading}</Heading>
          <Text py='1rem'>{description && description}</Text>
          <Button colorScheme='teal'>Buy Now</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
