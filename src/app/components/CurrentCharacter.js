import { Box, Text, Spinner } from "@chakra-ui/react";
import { CharacterContext } from "../context/CharacterContext";
import CharacterCurrentCard from "./CharacterCurrentCard";
import { useContext } from "react";

const CurrentCharacter = () => {
  const { characters, loading, error } = useContext(CharacterContext);

  return (
    <Box
      mt={3}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {loading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : characters.length > 0 ? (
        <CharacterCurrentCard character={characters[0]} />
      ) : (
        <Text color="red"> No Character to Display</Text>
      )}
    </Box>
  );
};

export default CurrentCharacter;
