import { useContext, useState } from "react";
import axios from "axios";
import { CharacterContext } from "../context/CharacterContext";
import { Input, Button } from "@chakra-ui/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

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
      // A resolver mappeo de perronajes para no depender de contrato de api
      // const mappedCharacter = {
      //   name: character.name ?? "mierda",
      //   gender: character.gender.charAt(0).tuUpperCase(),
      //   height: character.height,
      //   weight: character.mass,
      //   hairColor: character.hair_color,
      //   homeWorld: character.homeworld,
      //   films: character.films,
      //   url: character.url,
      // };

      // const mappedCharacter = character?.map((el) => ({
      //   name: el.name,
      //   gender: el.gender.chartAt(0).tuUpperCase() + el.slice(1),
      //   height: el.height,
      //   weight: el.mass,
      //   hairColor: el.hair_color,
      //   homeWorld: el.homeworld,
      //   films: el.films,
      // }));

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
        backgroundColor="rgb(255,255,255, 0.5)"
        variant="filled"
        mt={4}
        size="lg"
        placeholder="Luke Skywalker"
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
        mt={4}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
