import { Box, Flex, Input, Button, Text, Tag, VStack, HStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Jane Smith', location: 'San Francisco', technologies: ['Angular', 'Python'] },
  { id: 3, name: 'Alice Johnson', location: 'London', technologies: ['Vue', 'PHP'] }
];

const Particles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = developers.filter(dev =>
      dev.name.toLowerCase().includes(value) ||
      dev.location.toLowerCase().includes(value) ||
      dev.technologies.some(tech => tech.toLowerCase().includes(value))
    );
    setFilteredDevelopers(filtered);
  };

  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Heading>Particles Marketplace</Heading>
        <Text>Discover top software talent specialized in web technologies.</Text>
        <Input
          placeholder="Search by name, location, or technology..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredDevelopers.map(dev => (
          <Flex key={dev.id} justify="space-between" align="center" p={3} borderWidth="1px" borderRadius="lg">
            <VStack align="start">
              <Text fontSize="xl">{dev.name}</Text>
              <Text>{dev.location}</Text>
              <HStack>
                {dev.technologies.map(tech => <Tag key={tech}>{tech}</Tag>)}
              </HStack>
            </VStack>
            <Button colorScheme="blue">Message</Button>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Particles;