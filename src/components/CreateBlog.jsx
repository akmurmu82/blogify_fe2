import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  VStack,
  Heading,
  Box,
  Center,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleBlog = async () => {
    try {
      const obj = { title, description, image };
      const resp = await axios.post('https://blogify-be-1.onrender.com/blog', obj);
      console.log(resp);
    } catch (error) {
      console.log(error);
      setError('Failed to create blog. Please try again.');
    }
  };

  return (
    <Center h="100vh" style={{
      background: 'linear-gradient(45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <VStack spacing={6} width="60%">
        <Heading color="white">Create Your Blog Here</Heading>
        <Box w="100%" p={8} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="md">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="lg"
              minHeight="150px"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
          </FormControl>
          {error && <Box color="red.500">{error}</Box>}
          <Button mt={4} colorScheme="teal" onClick={handleBlog}>
            Add Blog
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}

export default CreateBlog;
