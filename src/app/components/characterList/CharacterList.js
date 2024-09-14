import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import CharacterCard from "../characterCards/CharacterListCard";
import { Box, UnorderedList, Select, Stack, Text } from "@chakra-ui/react";
import FilterInput from "../filterInput/FilterInput";
import "./characterList.css";
const CharacterList = () => {
  const { filterCharacters, characters, addCharacter } =
    useContext(CharacterContext);
  const filtered = filterCharacters();

  // const handleClick = (name) => {
  //   const find = [...characters].find((el) => (el.name = name));
  //   console.log(find);

  //   addCharacter(find);
  // };

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
      <UnorderedList className="characterList" textAlign="center">
        {filtered.length > 0 ? (
          filtered.map((el, index) => (
            <CharacterCard key={index} character={el} />
          ))
        ) : (
          <Text color="red.500">No Characters to Display</Text>
        )}
      </UnorderedList>
    </Box>
  );
};

export default CharacterList;
