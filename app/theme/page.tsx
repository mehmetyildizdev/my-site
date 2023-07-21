"use client";
import { Box, Center, Container, Flex } from "@chakra-ui/react";

export default function Theme() {
  const colors = [
    "p.platinum",
    "p.gold",
    "p.diamond",
    "p.ruby",
    "p.emerald",
    "p.sapphire",
    "p.pearl",
    "p.amethyst",
  ];

  return (
    <Center>
      <Container>
        {" "}
        <Flex maxW={1920}>
          {colors.map((color) => (
            <Box key={color} bg={color} w="8em" h="8em" mr="4" />
          ))}
        </Flex>
      </Container>
    </Center>
  );
}
