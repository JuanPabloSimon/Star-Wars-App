import { Text, Image, Card, CardBody } from "@chakra-ui/react";
import "./characterCards.css";
const CharacterCard = ({ character }) => {
  return (
    <Card
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
            character.url.split("/")[5]
          }.jpg`}
          alt={character.name}
        />
        <Text fontSize="xl">{character.name}</Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
