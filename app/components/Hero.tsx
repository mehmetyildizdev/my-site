import { Box, Heading, Text, Button, Flex, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minH="calc(100vh - 64px)"
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h1" size="4xl" fontWeight="bold" textAlign="center" mb={6}>
        <div>
          Hello I&apos;m <span className="text-yellow-600">Mehmet</span>
        </div>
        <div>A Front-End Web Developer</div>
      </Heading>
      <Text
        fontStyle="Karla"
        fontSize={{ base: "sm", md: "2xl" }}
        maxW="60%"
        textAlign="center"
        mb={6}
      >
        <span>
          I am a developer with diploma in Web Design and Coding. I am
          constantly learning in order to improve and increase my skills in
          front-end technologies, as well as how things happen on the back side
          of the picture.
        </span>
      </Text>
      <Text
        fontStyle="Karla"
        fontSize={{ base: "sm", md: "2xl" }}
        maxW="60%"
        textAlign="center"
        mb={6}
      >
        <span>
          {" "}
          I am here to provide you all the necessary tools for enhancing your
          web identity. Whether you have a technical background or not we will
          find the best solution for your needs.
        </span>
      </Text>
      <Stack
        className="motion-safe:animate-pulse"
        direction="row"
        spacing="10"
        px={{ base: 4, md: 8 }}
      >
        <Button
          className=" shadow-lg shadow-rose-600 ease-in duration-300 hover:scale-105"
          colorScheme="blue"
          variant="solid"
        >
          Learn More
        </Button>
        <Button
          className=" shadow-lg shadow-rose-600 ease-in duration-300 hover:scale-105"
          colorScheme="blue"
          variant="solid"
        >
          Learn More
        </Button>
        <Button
          className=" shadow-lg shadow-rose-600 ease-in duration-300 hover:scale-105"
          colorScheme="blue"
          variant="solid"
        >
          Learn More
        </Button>
        <Button
          className=" shadow-lg shadow-rose-600 ease-in duration-300 hover:scale-105"
          colorScheme="blue"
          variant="solid"
        >
          Learn More
        </Button>
      </Stack>
    </Flex>
  );
}
