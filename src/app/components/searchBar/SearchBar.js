import { useContext, useState } from "react";
import axios from "axios";
import { CharacterContext } from "../../context/CharacterContext";
import { Input, Button } from "@chakra-ui/react";
import "./searchBar.css";
const SearchBar = () => {
  const { addCharacter, setLoading, setError } = useContext(CharacterContext);
  const [input, setInput] = useState("");

  const searchCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${input}`
      );

      const character = response.data.results[0];
      const planet = await axios.get(character.homeworld);
      character.homeworld = planet.data.name;
      addCharacter(character);
      setInput("");
    } catch (error) {
      setError("Character not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form">
      <Input
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        maxW="md"
        fontWeight="bold"
        color="black"
        backgroundColor="rgb(255,255,255, 0.8)"
        variant="filled"
        mt={4}
        size="lg"
        placeholder="Insert a Character name like Luke Skywalker"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        type="button"
        onClick={searchCharacter}
        variant="outline"
        size="lg"
        bg="rgb(255,255,255, 0.8)"
        mt={4}
        ml={4}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
