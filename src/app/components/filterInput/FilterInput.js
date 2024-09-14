import { Stack, Text, Select } from "@chakra-ui/react";
import { CharacterContext } from "../../context/CharacterContext";
import { useContext } from "react";
const FilterInput = () => {
  const { setFilter } = useContext(CharacterContext);
  return (
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
  );
};

export default FilterInput;
