import { Box, Text, Spinner } from "@chakra-ui/react";
import { CharacterContext } from "../../context/CharacterContext";
import CharacterCurrentCard from "../characterCards/CharacterCurrentCard";
import { useContext } from "react";

// Elemento contenedor del personaje que se muestra despues de la búsqueda
const CurrentCharacterContainer = () => {
  const { characters, loading, error } = useContext(CharacterContext);

  return (
    <Box
      mt={3}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      {loading ? ( // si loading es true mostramos el spinner (simular carga)
        <Spinner size="xl" />
      ) : error ? ( // si loading es false pero error es true ocurrión un error en el fetching de datos, mostramos un text con el error
        <Text
          bg="rgb(0,0,0,0.5)"
          borderRadius={10}
          color="red.500"
          fontSize="3em"
          fontWeight="bolder"
        >
          {error}
        </Text>
      ) : characters.length > 0 ? ( // si error es false y hay character renderizamos el componente Card con detalles
        <>
          <Text
            fontWeight="bolder"
            bg="tomato"
            borderRadius={10}
            p={1}
            mb={1}
            color="black"
          >
            {" "}
            Best coincidence{" "}
          </Text>
          <CharacterCurrentCard character={characters[0]} />
        </>
      ) : (
        <Text
          bg="rgb(0,0,0,0.5)"
          borderRadius={10}
          color="red.500"
          fontSize="3em"
          fontWeight="bolder"
        >
          {" "}
          No Character to Display
        </Text> // de no haber personajes muestra un texto de aviso
      )}
    </Box>
  );
};

export default CurrentCharacterContainer;
