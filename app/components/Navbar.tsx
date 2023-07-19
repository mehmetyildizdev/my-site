"use client";
import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  {
    /*
  const [prefersDark] = useMediaQuery("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    if (prefersDark) {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  }, [prefersDark, setColorMode]);  
  */
  }

  return (
    <Box bg={colorMode === "dark" ? "black" : "gray.100"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Link href="/" passHref>
            <Box mr={4}>Home</Box>
          </Link>
          <Link href="/about" passHref>
            <Box mr={4}>About</Box>
          </Link>
        </Flex>
        <Flex justifyContent={"flex-end"} alignItems={"center"}>
          <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
