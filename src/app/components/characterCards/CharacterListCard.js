import { Text, Image, Card, CardBody } from "@chakra-ui/react";
import "./characterCards.css";
import { useContext } from "react";
import { CharacterContext } from "@/app/context/CharacterContext";

// Componente "Card" que renderiza el personaje individualmente sin información, para ser renderizado en la lista del historial
const CharacterCard = ({ character }) => {
  const { addCharacter } = useContext(CharacterContext);

  // funcion para poder seleccionar personajes desde el historial
  const handleClick = (element) => {
    addCharacter(element);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <Card
      onClick={() => handleClick(character)}
      justifySelf="center"
      className="listCard"
      variant="filled"
      maxW="200px"
      borderRadius="lg"
      mb={4}
      backgroundColor="rgb(0,0,0 ,0.8)"
      color="white"
    >
      <CardBody textAlign="center" fontWeight="bold">
        <Image
          src={`https://starwars-visualguide.com/assets/img/characters/${
            character.url.split("/")[5] // utilización de "guia visual" para renderizar una imagen del personaje buscado (se obtiene el id de la url provista por la api)
          }.jpg`}
          alt={character.name}
        />
        <Text fontSize="xl">{character.name}</Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
