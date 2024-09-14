"use client";
import { CharacterProvider } from "./context/CharacterContext";
import SearchBar from "./components/searchBar/SearchBar";
import CharacterList from "./components/characterList/CharacterList";
import CurrentCharacter from "./components/currentCharacter/CurrentCharacter";
import logo from "./Star_Wars_Logo.png";
import { ChakraProvider, Container, Heading, Image } from "@chakra-ui/react";

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
          <CharacterList totalPages={10} />
        </Container>
      </CharacterProvider>
    </ChakraProvider>
  );
}
