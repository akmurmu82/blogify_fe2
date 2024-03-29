import React, { useEffect, useState } from "react";
import {
  Grid,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Flex, Box, CardHeader, Avatar, IconButton } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function BlogPage() {
  const [isBlog, setIsBlog] = useState([]);

  useEffect(() => {
    async function getBlog() {
      try {
        const response = await fetch("https://blogify-be-1.onrender.com/blog");
        let blog = await response.json();
        console.log(blog);
        setIsBlog(blog);

        console.log("Signed up successfully");
      } catch (error) {
        console.error("Error happened:", error.message);
      }
    }
    getBlog();
  }, []);

  function Blog() {
    return (
      <>
        <Card maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, #6c5b7b 0%, #c06c84 100%)", // Change the gradient colors as needed
          minHeight: "100vh", // Ensure the background covers the entire page
          padding: "20px", // Add padding to prevent content from touching the edges
        }}
      >
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap={["5px", "10px", "15px"]}
        >
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </Grid>
      </div>
    </>
  );
}

export default BlogPage;
