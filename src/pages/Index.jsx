import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Heading>Welcome to GPT Engineer</Heading>
        <Text>Create and improve web applications with the help of AI.</Text>
        <Link to="/particles">
          <Button colorScheme="blue">Visit Particles Marketplace</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;