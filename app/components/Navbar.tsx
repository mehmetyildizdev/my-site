"use client";
import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Link href="/">
            {colorMode === "dark" ? (
              <Image
                className="p-2"
                src="/logo_l.svg"
                alt=""
                width={200}
                height={60}
              />
            ) : (
              <Image
                className="p-2"
                src="/logo_d.svg"
                alt=""
                width={200}
                height={60}
              />
            )}
          </Link>
        </Flex>
        <Flex
          justifyContent={"flex-end"}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/" passHref>
            <Box mr={4}>Home</Box>
          </Link>
          <Link href="/about" passHref>
            <Box mr={4}>About</Box>
          </Link>
        </Flex>
        <Flex justifyContent={"flex-end"} alignItems={"center"}>
          <IconButton
            mr={4}
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={() => setIsOpen(true)}
            display={{ base: "inline-flex", md: "none" }}
          />
        </Flex>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              {colorMode === "dark" ? (
                <Image
                  className="p-2"
                  src="/logo_l.svg"
                  alt=""
                  width={200}
                  height={60}
                />
              ) : (
                <Image
                  className="p-2"
                  src="/logo_d.svg"
                  alt=""
                  width={200}
                  height={60}
                />
              )}
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={4}>
                <Link href="/" passHref>
                  Home
                </Link>
                <Link href="/about" passHref>
                  About
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
