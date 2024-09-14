"use client";
import { CharacterProvider } from "./context/CharacterContext";
import SearchBar from "./components/searchBar/SearchBar";
import CurrentCharacter from "./components/currentCharacter/CurrentCharacterContainer";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import CharacterList from "./components/characterList/CharacterList";
import Head from "next/head";

export default function Home() {
  return (
    <ChakraProvider>
      <CharacterProvider>
        <Container maxW="100vw" height="100vh" className="bg1" pt={10} mt={0}>
          <SearchBar />
          <CurrentCharacter />
        </Container>
        <Container
          maxW="100vw"
          minH="100vh"
          className="bg2"
          display="flex"
          flexDir="column"
          alignItems="center"
          p={50}
        >
          <Heading
            as="h1"
            color="white"
            bg="rgb(0,0,0,0.9)"
            p="5px 2em 5px 2em"
            borderRadius={10}
          >
            History
          </Heading>
          <CharacterList />
        </Container>
      </CharacterProvider>
    </ChakraProvider>
  );
}
