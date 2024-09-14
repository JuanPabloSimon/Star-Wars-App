import { Text, Image, Card, CardBody, CardFooter } from "@chakra-ui/react";

const CharacterCard = ({ character }) => {
  return (
    <Card
      variant="filled"
      maxW="200px"
      borderWidth="1px"
      borderRadius="lg"
      mb={4}
      backgroundColor="rgb(255,255,255,0.8)"
    >
      <CardBody textAlign="center" fontWeight="bold">
        <Image
          src={`https://starwars-visualguide.com/assets/img/characters/${
            character.url.split("/")[5]
          }.jpg`}
          alt={character.name}
        />
        <Text fontSize="xl">{character.name}</Text>
        <Text>Gender: {character.gender}</Text>
        <Text>Height: {character.height} </Text>
        <Text>Mass: {character.mass}</Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
