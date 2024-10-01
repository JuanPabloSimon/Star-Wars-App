import { useContext, useState } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import CharacterListCard from "../characterCards/CharacterListCard";
import { Box, UnorderedList, Stack, Text, Button } from "@chakra-ui/react";
import FilterInput from "../filterInput/FilterInput";
import "./characterList.css";

// Componente que renderiza el historial de busquedas
const CharacterList = () => {
  const { filterCharacters } = useContext(CharacterContext);
  const filtered = filterCharacters(); // personajes filtrados por genero de haber sido seleccionado
  // Paginación
  const [actualpage, setActualPage] = useState(1); // pagina actual en la que se encuentra el usuario
  const totalPages = Math.ceil(filtered.length / 4); // paginas totales serán igual a la cantidad de personajes dividido la cantidad de que deseamos mostrar por página (4 en este caso)
  const lastElement = actualpage * 4; // último elemento por página será la pagina actual por la cantidad de personajes a mostrar
  const firstElement = lastElement - 4; // primer elemento por página será el ultimo elemento menos la cantidad de personajes a mostrar
  const currentCharacters = filtered.slice(firstElement, lastElement); // re-filtrado de los personajes para obtener los que deben mostrarse según la pagina en la que se encuentra el usuario

  // función para pasar a la siguiente página
  const handleNext = () => {
    if (actualpage < totalPages) {
      setActualPage(actualpage + 1);
    }
    console.log(actualpage);
  };

  // función para volver a la página anterior
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
        <Button variant="outline" color="red" onClick={() => handlePrev()}>
          Recent
        </Button>
        <UnorderedList className="characterList" textAlign="center">
          {
            // chequeo condicional: si la cantidad filtrada es mayor a 0 mapeamos y devolvemos el componente CharacterListCard, de no serlo, mostramos un texto indicandolo
            filtered.length > 0 ? (
              currentCharacters.map((el, index) => (
                <CharacterListCard
                  className="cards"
                  key={index}
                  character={el}
                />
              ))
            ) : (
              <Text
                bg="rgb(0,0,0,0.5)"
                borderRadius={10}
                color="red.500"
                fontSize="3em"
                fontWeight="bolder"
              >
                No Characters to Display
              </Text>
            )
          }
        </UnorderedList>
        <Button variant="outline" color="red" onClick={() => handleNext()}>
          Previous
        </Button>
      </Stack>
    </Box>
  );
};
export default CharacterList;
