"use client";
import { CharacterProvider } from "./context/CharacterContext";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";

import { ChakraProvider, Container, Heading, Text } from "@chakra-ui/react";
import CurrentCharacter from "./components/CurrentCharacter";
import Head from "next/head";

export default function Home() {
  return (
    <ChakraProvider>
      <CharacterProvider>
        <Container maxW="100vw" height="100vh" className="bg1" pt={10} mt={0}>
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            mt="0 !important"
            color="white"
          >
            StarWars Character Search
          </Heading>
          <SearchBar />
          <CurrentCharacter />
        </Container>
        <Container
          maxW="100vw"
          height="100vh"
          className="bg2"
          overflow="hidden"
          display="flex"
          flexDir="column"
          alignItems="center"
          p={50}
        >
          <Heading
            as="h1"
            color="black"
            bg="rgb(255,255,255,0.8)"
            p={2}
            borderRadius={10}
          >
            {" "}
            History{" "}
          </Heading>
          <CharacterList totalPages={10} />
        </Container>
      </CharacterProvider>
    </ChakraProvider>
  );
}
