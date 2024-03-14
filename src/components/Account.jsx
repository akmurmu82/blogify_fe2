import React from "react";
import { Grid, Image, Card, CardBody, Stack, Heading, Text, CardFooter, Box, Flex, Divider } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare, BiBox } from "react-icons/bi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,

} from '@chakra-ui/react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Account() {
  const navigate = useNavigate()

  const createBlog = () => {
    navigate("/createBlog")
  }

  function handleEdit() {
    navigate("/editBlog")
  }

  async function handleDelete(){
try {
  const response= await axios.delete(`https://blogify-be-1.onrender.com/deleteBlog/}` )
} catch (error) {
  console.log(error)
}
  }
  function BlogCard() {


    return (
      <Card borderRadius="lg" boxShadow="md">
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderTopRadius="lg"
        />
        <CardBody>
          <Stack spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <BiLike />
              <Text ml="2">Likes</Text>
            </Flex>
            <Flex alignItems="center">
              <BiChat />
              <Text ml="2">Comments</Text>
            </Flex>
            <Flex alignItems="center">
              <BiShare />
              <Text ml="2">Share</Text>
            </Flex>
            <Flex alignItems="center">
              <BiBox />
              <Text ml="2">Save</Text>
            </Flex>
          </Flex>
        </CardFooter>
        <Box>
            {/* map id to be pasted in ediiiit butn*/}
{/* pass the real id */}
            <Button onClick={(()=>{handleEdit("1")})}><Link to={`/editBlog/1`}>Edit</Link>

            </Button>
            
             <Button onClick={(()=>{handleDelete("1")})}>Delete</Button>
{/* pass the real id data delt  */}
          </Box>

      </Card>
      
    )
  }

  return (
    <Box
      w="100%"
      minH="100vh"
      backgroundImage="linear-gradient(to right, #C33764, #1D2671)"
      backgroundSize="200% 100%"
      animation="gradient 10s ease infinite"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      flexDirection="column"
    >
      <Flex p="20px 0" margin="10px" justifyContent="space-around">
        <Image src="https://th.bing.com/th?id=OIP.LlHfUFvoxcSDRkGcLnwSbwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" borderRadius="full" boxSize="150px" />
        <Box>
          <Text fontSize="4xl" fontWeight="bold">John Doe</Text>
          <Text fontSize="2xl">Graphic Designer</Text>
          <Text mt="4" fontSize="lg">This is an example of about text. It could contain a brief description of the user or their blog.</Text>
        </Box>
      </Flex>
      <Box>
        <Button marginLeft="590%" marginBottom="50%" onClick={createBlog}>Create Blog</Button></Box>
      <Grid gridTemplateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} gap={["5px", "10px", "15px"]}>
        <BlogCard /> <BlogCard />
       
      </Grid>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Box>
  )
}

export default Account;
