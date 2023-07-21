"use client";
import { Center, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Main() {
  return (
    <>
      <Center h={`calc(100vh - 4em)`}>
        <SimpleGrid width={960}>
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            textAlign="center"
            mb={6}
            color="#FFD700"
          >
            <div>
              Hello! I&apos;m{" "}
              <Text color="#DCB118" as="span">
                Mehmet
              </Text>
            </div>
            <div>A Front-End Web Developer</div>
          </Heading>
          <Container maxW="container.md">
            <Text textAlign="center" mb={6}>
              <span>
                I am a designer and a developer inclined more at the developing
                side. I am here to provide you all the necessary tools for
                enhancing your web identity. them.
              </span>
            </Text>
            <Text textAlign="center" mb={6}>
              <span>
                Being a computer user for over 20 years, I have become familiar
                with many computer technologies, and be adept at using them.
              </span>
            </Text>
          </Container>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Main;
