import { useContext, useState } from "react";
import axios from "axios";
import { CharacterContext } from "../../context/CharacterContext";
import { Input, Button } from "@chakra-ui/react";
import "./searchBar.css";
// Componente de busqueda de personajes
const SearchBar = () => {
  const { addCharacter, setLoading, setError } = useContext(CharacterContext); // funciones para cambiar el estado de la app desde el contexto
  const [input, setInput] = useState(""); // manejo del estado del texto ingresado por el usuario

  // funcion llamada a la api
  const searchCharacter = async () => {
    setLoading(true); // mostrar algo mientras los datos son leídos
    setError(null);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${input}`
      );
      const character = response.data.results[0]; // trae el primer personaje (el de mayor coincidencia)
      const planet = await axios.get(character.homeworld); // fetch a la api para recuperar el mundo del personaje
      character.homeworld = planet.data.name; // asignación del mundo del personaje a su nombre (de no hacerlo será un link a la api)
      addCharacter(character); // agregado al contexto
      setInput(""); // reinicio de  input
    } catch (error) {
      setError("Character not found");
    } finally {
      setLoading(false); // termina el fetching y corta la animación de carga para mostrar los datos
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
        placeholder="Insert a character name like Luke Skywalker"
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
