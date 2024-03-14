import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const { isOpen, onToggle } = useDisclosure();

  function handleScroll() {
    const triggerPosition = 100;
    const scrollPosition = window.scrollY;
    setVisible(scrollPosition < triggerPosition);
  }

  function NavLink({ menu, link }) {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to={`http://localhost:3000/${link}`} padding="20px">
          {menu}
        </Link>
      </motion.div>
    );
  }
  let navlinks = [
    { title: "HOME", link: "http://localhost:3000/" },
    { title: "BLOG", link: "http://localhost:3000/" },
    { title: "SIGNUP", link: "http://localhost:3000/signup" },
    { title: "AUTHOR", link: "http://localhost:3000/" },
    { title: "ACCOUNT", link: "http://localhost:3000/" },
  ];

  window.addEventListener("scroll", handleScroll);

  return (
    <Box
      color="#000"
      position="sticky"
      width="100%"
      top="0"
      backgroundColor="#fff"
      zIndex="2"
    >
      <Box
        height={visible ? "70px" : "0"}
        overflow="hidden"
        transition="all 0.5s"
        fontFamily="cursive"
        fontSize="38px"
      >
        <motion.h1
          animate={{ y: visible ? 0 : -30, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          𝙱𝚕𝚘𝚐𝚒𝚏𝚢
        </motion.h1>
      </Box>

      <Flex alignItems="center" border="0.01px solid grey">
        <Text
          fontSize="40px"
          display={visible ? "none" : "block"}
          fontFamily="cursive"
          opacity={visible ? 0 : 1}
          width={visible ? "0" : "200px"}
          transition="all 0.5s"
          overflow="hidden"
        >
          𝙱𝚕𝚘𝚐𝚒𝚏𝚢
        </Text>

        <Flex
          className="link-items"
          width="100%"
          margin="auto"
          gap="10px"
          fontSize="20px"
          padding="10px"
          justifyContent="center"
        >
          {navlinks.map((navlink) => (
            <NavLink menu={navlink.title} link={navlink.link} />
          ))}
        </Flex>
      </Flex>

      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
        />
      </motion.div>
    </Box>
  );
}

export { Navbar };
