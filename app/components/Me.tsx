"use client";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { BiSolidBusiness, BiSolidUser, BiSolidMap } from "react-icons/bi";
import React from "react";
import Image from "next/image";

function Me() {
  const theme = useTheme() as any;
  const shadowColor = theme.semanticTokens.colors.p.gold._light;
  const height = useBreakpointValue({ base: 200, md: 130 });
  return (
    <>
      <Center h={`calc(100vh - 4em)`}>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} width={1080} p={8}>
          <Box
            gridColumn={{
              base: "1 / span 1",
              md: "1 / span 1",
              lg: "1 / span 1",
            }}
            borderColor="p.gold"
            borderRadius="24"
            boxShadow={`0 8px 16px 0px ${shadowColor}`}
          >
            <Center className="p-4">
              <Avatar size="2xl" name="Mehmet YILDIZ" src="/1.jpg" />
            </Center>
            <Center className="pt-2">
              <Box>
                <Flex className="pt-2">
                  <BiSolidUser />{" "}
                  <Heading as="h5" size="xs">
                    Mehmet YILDIZ
                  </Heading>
                </Flex>

                <Flex className="pt-2">
                  <BiSolidBusiness />
                  <Heading as="h5" size="xs">
                    Fake Scientist & IT Guy
                  </Heading>
                </Flex>
                <Flex className="pt-2">
                  <BiSolidMap />
                  <Heading as="h5" size="xs">
                    Based in Turkey
                  </Heading>
                </Flex>
              </Box>
            </Center>
            <Box position="relative" width="100%" height={height}>
              <Image
                className="opacity-50 rounded-3xl pt-8"
                src="/ankara-pin.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
          <Box
            gridColumn={{
              base: "1 / span 1",
              md: "2 / span 2",
              lg: "2 / span 2",
            }}
            p={{ base: "2", md: "8" }}
            pt={{ base: "8", md: "4" }}
          >
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
          <Box
            gridColumn={{
              base: "1 / span 1",
              md: "1 / span 3",
              lg: "4 / span 2",
            }}
            p={{ base: "2", md: "4" }}
            pt={{ base: "8", md: "8", lg: "4" }}
          >
            Right Column
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Me;
