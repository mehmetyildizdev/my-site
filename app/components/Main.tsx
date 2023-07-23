"use client";
import {
  Button,
  Center,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoGithub,
  BiEnvelope,
} from "react-icons/bi";

function Main() {
  const theme = useTheme() as any;
  const shadowColor = theme.semanticTokens.colors.p.gold._light;
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
          <Center>
            <Grid
              width={{ base: "100%", md: "60%", lg: "40%" }}
              p={2}
              templateColumns="repeat(6, 1fr)"
              gap={2}
            >
              <Button
                className="transition-all motion-safe:animate-pulse ease-in duration-300 hover:scale-110"
                justifySelf="center"
                color="p.gold"
                width="48px"
                height="48px"
                fontSize="32px"
                variant="ghost"
                borderColor="p.gold"
                borderRadius="full"
                boxShadow={`0 4px 8px 0px ${shadowColor}`}
                p="0"
              >
                <BiLogoLinkedin />
              </Button>
              <Button
                className="transition-all motion-safe:animate-pulse ease-in duration-300 hover:scale-110"
                justifySelf="center"
                color="p.gold"
                width="48px"
                height="48px"
                fontSize="32px"
                variant="ghost"
                borderColor="p.gold"
                borderRadius="full"
                boxShadow={`0 4px 8px 0px ${shadowColor}`}
                p="0"
              >
                <BiLogoTwitter />
              </Button>
              <Button
                className="transition-all motion-safe:animate-pulse ease-in duration-300 hover:scale-110"
                justifySelf="center"
                color="p.gold"
                width="48px"
                height="48px"
                fontSize="32px"
                variant="ghost"
                borderColor="p.gold"
                borderRadius="full"
                boxShadow={`0 4px 8px 0px ${shadowColor}`}
                p="0"
              >
                <BiLogoFacebook />
              </Button>
              <Button
                className="transition-all motion-safe:animate-pulse ease-in duration-300 hover:scale-110"
                justifySelf="center"
                color="p.gold"
                width="48px"
                height="48px"
                fontSize="32px"
                variant="ghost"
                borderColor="p.gold"
                borderRadius="full"
                boxShadow={`0 4px 8px 0px ${shadowColor}`}
                p="0"
              >
                <BiLogoGithub />
              </Button>
              <Button
                className="transition-all motion-safe:animate-pulse ease-in duration-300 hover:scale-110"
                justifySelf="center"
                color="p.gold"
                width="48px"
                height="48px"
                fontSize="32px"
                variant="ghost"
                borderColor="p.gold"
                borderRadius="full"
                boxShadow={`0 4px 8px 0px ${shadowColor}`}
                p="0"
              >
                <BiLogoTelegram />
              </Button>
              <Button
                className="transition-all motion-safe:animate-pulse ease-in duration-300 hover:scale-110"
                justifySelf="center"
                color="p.gold"
                width="48px"
                height="48px"
                fontSize="32px"
                variant="ghost"
                borderColor="p.gold"
                borderRadius="full"
                boxShadow={`0 4px 8px 0px ${shadowColor}`}
                p="0"
              >
                <BiEnvelope />
              </Button>
            </Grid>
          </Center>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default Main;
