import React from "react";
import { Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <Flex
            as="footer"
            align="center"
            justify="space-between"
            py="4"
            px="6"
            bg="gray.800"
            color="white"
        >
            <Text>&copy; 2024 Blogify. All rights reserved.</Text>
            <Flex>
                <Link href="#" mx="2">
                    <Icon as={FaInstagram} boxSize="6" />
                </Link>
                <Link href="#" mx="2">
                    <Icon as={FaLinkedin} boxSize="6" />
                </Link>
                <Link href="#" mx="2">
                    <Icon as={FaFacebook} boxSize="6" />
                </Link>
                <Link href="#" mx="2">
                    <Icon as={FaTwitter} boxSize="6" />
                </Link>
                <Link href="#" mx="2">
                    <Icon as={FaWhatsapp} boxSize="6" />
                </Link>
            </Flex>
        </Flex>
    );
}

export { Footer };
