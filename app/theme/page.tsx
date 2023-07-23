"use client";
import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import { colors as customColors } from "./colors";

export default function Theme() {
  const colors = Object.keys(customColors.colors.p).map(
    (color) => `p.${color}`
  );
  const maxLength = Math.max(...colors.map((color) => color.length));
  const boxWidth = `${maxLength * 0.66}em`;

  return (
    <Center>
      <Flex flexWrap="wrap" justifyContent="center">
        {colors.map((color) => (
          <Box key={color} w={boxWidth} mr="4" mb="4">
            <Box bg={color} w="100%" h={boxWidth} />
            <Text textAlign="center" mt="2">
              {color}
            </Text>
          </Box>
        ))}
      </Flex>
    </Center>
  );
}
