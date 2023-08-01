"use client";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

function Current() {
  return (
    <section>
      <Center id="Current" h={`calc(100vh - 4em)`}>
        <Grid
          templateAreas={`"title title title" "info doing skills"`}
          templateRows={"5vh 2fr 1fr"}
          templateColumns={"10vw 1fr 1fr"}
          gap="1"
          width={{ base: "100%", md: "80%", lg: "60%" }}
          height={{ base: "90%", md: "90%", lg: "80%" }}
        >
          <GridItem bg="p.emerald" area={"title"}>
            Title
          </GridItem>
          <GridItem bg="p.sapphire" area={"info"}>
            Info
          </GridItem>
          <GridItem bg="p.amethyst" area={"doing"}>
            Doing
          </GridItem>
          <GridItem bg="p.ruby" area={"skills"}>
            Skills
          </GridItem>
        </Grid>
      </Center>
    </section>
  );
}

export default Current;
