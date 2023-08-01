"use client";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Me() {
  return (
    <>
      <Center h={`calc(100vh - 4em)`}>
        <SimpleGrid templateColumns="repeat(5, 1fr)" width={1080}>
          <Box gridColumn="1 / span 1" bg="p.emerald">
            Left Column
          </Box>
          <Box gridColumn="2 / span 2" p={4}>
            <Text textAlign="justify">
              I am currently working as Information Technologies Specialist in
              Wenta Heat Technologies. Main responsibilities are managing ERP
              software, Alibaba and other local e-commerce platforms, company
              websites, and network devices.
            </Text>
            <br />
            <Text textAlign="justify">
              I am an academic career dropout. This helps me to be open to
              research and learn whenever needed. Being passionate about
              computer technologies eventually directed me to this field.
            </Text>
          </Box>
          <Box gridColumn="4 / span 2" bg="p.emerald">
            Right Column
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Me;
