"use client";
import { CharacterProvider } from "./context/CharacterContext";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <CharacterProvider>
        <Container maxW="80vw">
          <Heading as="h1" size="xl" textAlign="center" mt={20} color="white">
            StarWars Character Search
          </Heading>
          <SearchBar />
          <CharacterList />
        </Container>
      </CharacterProvider>
    </ChakraProvider>
  );
}
