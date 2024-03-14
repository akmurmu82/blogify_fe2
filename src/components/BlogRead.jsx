import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Heading, Text, CardFooter, Button, Image, Flex, Box } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

function BlogRead() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(to right, green, blue)',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <Card border="1px solid crimson" marginBottom="3%" width="50%" marginLeft="25%" marginTop="3%" padding="20px">
          <CardBody>
            <Heading size="lg" marginBottom="20px">Title of the Blog</Heading>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Blog Image'
                marginBottom="20px"
              />
            </motion.div>
            <Text fontSize="md">
              With Chakra UI, I wanted to sync the speed of development with the speed
              of design. I wanted the developer to be just as excited as the designer to
              create a screen.
            </Text>
          </CardBody>

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            marginTop="20px"
          >
            <Button flex='1' variant='ghost' leftIcon={<BiLike />} marginRight="10px">
              Like
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<BiChat />} marginRight="10px">
              Comment
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  )
}

export default BlogRead;
