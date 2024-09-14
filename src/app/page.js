"use client";
import { CharacterProvider } from "./context/CharacterContext";
import SearchBar from "./components/searchBar/SearchBar";
import CurrentCharacter from "./components/currentCharacter/CurrentCharacter";
import { ChakraProvider, Container, Heading, Image } from "@chakra-ui/react";
import CharacterListContainer from "./components/characterListContainer/CharacterListContainer";

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
            color="black"
            bg="rgb(255,255,255,0.8)"
            p={2}
            borderRadius={10}
          >
            {" "}
            History{" "}
          </Heading>
          <CharacterListContainer />
        </Container>
      </CharacterProvider>
    </ChakraProvider>
  );
}
