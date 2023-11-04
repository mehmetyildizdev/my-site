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
        <SimpleGrid columns={{ base: 1, md: 5 }} width={1080} p={8}>
          <SimpleGrid
            gridColumn={{
              base: "1 / span 1",
              md: "1 / span 4",
            }}
            columns={{ base: 1, md: 4 }}
          >
            <Box
              gridColumn={{
                base: "1 / span 1",
                md: "1 / span 1",
              }}
              borderColor="p.gold"
              borderRadius="24"
              boxShadow={`0 8px 16px 0px ${shadowColor}`}
            >
              <Center height="100%" className="p-4">
                <Avatar size="2xl" name="Mehmet YILDIZ" src="/1.jpg" />
              </Center>
            </Box>

            <Box
              gridColumn={{
                base: "1 / span 1",
                md: "2 / span 3",
              }}
              p={{ base: "2", md: "8" }}
              pt={{ base: "8", md: "4" }}
            >
              <Text textAlign="justify">
                I switched to web design and development field from academic
                pursuit, and currently employed as an IT support specialist. I
                always had a passion for computer technologies both hardware and
                software. I am really glad to be able to turn my passion into
                profession slowly.
              </Text>
              <Text textAlign="justify">
                Having a researcher background helps me find solutions even on
                things I do not know yet. I like checking out new methods and
                use new technologies, and I always try to implement them. Here
                in this website you might find examples from my works, and
                please feel free to contact me for anything.
              </Text>
              <br />
              <Text textAlign="justify">
                I currently work as an IT Specialist at a manufacturing company,
                where I handle various software and e-commerce platforms, as
                well as company websites and network devices. I am always eager
                to learn new skills and explore new challenges. I am looking for
                opportunities to grow and advance in my field and create useful
                and innovative applications.
              </Text>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            gridColumn={{
              base: "1 / span 1",
              md: "5 / span 1",
            }}
          >
            <Box
              p={{ base: "2", md: "4" }}
              pt={{ base: "8", md: "8", lg: "4" }}
            >
              Right Column
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Me;
