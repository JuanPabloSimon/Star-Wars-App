import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import CharacterCard from "./CharacterCard";
import { Spinner, Box, Text, UnorderedList } from "@chakra-ui/react";

const CharacterList = () => {
  const { characters, loading, error } = useContext(CharacterContext);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;
  characters.forEach((element) => {
    console.log(element.name);
  });
  return (
    <Box mt={8} width="100%">
      <UnorderedList className="characterList">
        {characters.map((el, index) => (
          //   <li key={index}> {el.name}</li>
          <CharacterCard key={index} character={el} />
        ))}
      </UnorderedList>
    </Box>
  );
};

export default CharacterList;
