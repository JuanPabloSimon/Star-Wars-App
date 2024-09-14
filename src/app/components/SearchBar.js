import { useContext, useState } from "react";
import axios from "axios";
import { CharacterContext } from "../context/CharacterContext";
import { Input, Button } from "@chakra-ui/react";

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

      addCharacter(character);
    } catch (error) {
      setError("Character not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form">
      <Input
        maxW="md"
        fontWeight="bold"
        color="black"
        backgroundColor="rgb(255,255,255, 0.5)"
        variant="filled"
        mt={4}
        size="lg"
        placeholder="Luke Skywalker"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        type="button"
        onClick={searchCharacter}
        variant="outline"
        size="lg"
        mt={4}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
