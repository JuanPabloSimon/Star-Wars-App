import { act, useContext, useState } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import CharacterCard from "../characterCards/CharacterListCard";
import { Box, UnorderedList, Stack, Text, Button } from "@chakra-ui/react";
import FilterInput from "../filterInput/FilterInput";
import "./characterList.css";

const CharacterList = () => {
  const { filterCharacters } = useContext(CharacterContext);
  const filtered = filterCharacters();
  const [actualpage, setActualPage] = useState(1);

  const totalPages = Math.ceil(filtered.length / 4);
  const lastElement = actualpage * 4;
  const firstElement = lastElement - 4;
  const currentCharacters = filtered.slice(firstElement, lastElement);

  const handleNext = () => {
    if (actualpage < totalPages) {
      setActualPage(actualpage + 1);
    }
    console.log(actualpage);
  };
  const handlePrev = () => {
    if (actualpage > 1) {
      setActualPage(actualpage - 1);
    }
    console.log(actualpage);
  };

  return (
    <Box
      mt={8}
      width="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <FilterInput />
      <Stack
        display="flex"
        flexDir="row"
        width="90vw"
        justifyItems="center"
        alignItems="center"
      >
        <Button onClick={() => handlePrev()}>Anterior</Button>
        <UnorderedList className="characterList" textAlign="center">
          {filtered.length > 0 ? (
            currentCharacters.map((el, index) => (
              <CharacterCard key={index} character={el} />
            ))
          ) : (
            <Text color="red.500">No Characters to Display</Text>
          )}
        </UnorderedList>
        <Button onClick={() => handleNext()}> Siguiente</Button>
      </Stack>
    </Box>
  );
};

export default CharacterList;
