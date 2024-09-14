import { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterContext";
import CharacterCard from "./CharacterListCard";
import {
  Box,
  UnorderedList,
  Select,
  Stack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";

const CharacterList = ({ totalPages }) => {
  const { filterCharacters, setFilter } = useContext(CharacterContext);
  const [currentPage, setCurrentPage] = useState(1);
  const filtered = filterCharacters();

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
      <Stack display="flex" flexDir="row" mb={5}>
        <Text
          textAlign="center"
          color="black"
          fontWeight="bold"
          rounded="md"
          bg="rgb(255,255,255, 0.5)"
        >
          {" "}
          Filter by Gender{" "}
        </Text>
        <Select
          boxShadow="dark-lg"
          rounded="md"
          fontWeight="bold"
          color="black"
          backgroundColor="rgb(255,255,255, 0.5)"
          variant="filled"
          placeholder="Select gender"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="none">None</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="hermaphrodite">Hermaphrodite</option>
        </Select>
      </Stack>
      <Box className="characterList" textAlign="center">
        {filtered.length > 0 ? (
          <HStack spacing={4}>
            <Button onClick={handlePrev} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            {filtered.map((el, index) => (
              <CharacterCard key={index} character={el} />
            ))}
            <Button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </Button>
          </HStack>
        ) : (
          <Text color="red.500">No Characters to Display</Text>
        )}
      </Box>
    </Box>
  );
};

export default CharacterList;
