import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
} from "@chakra-ui/react";

const CharacterCurrentCard = ({ character }) => {
  return (
    <Card
      boxShadow="dark-lg"
      rounded="md"
      direction={{ base: "column", sm: "row" }}
      variant="filled"
      borderRadius="none"
      maxW="700px"
      minW="200px"
      mb={4}
      color="white"
      backgroundColor="rgb(0,0,0,0.6)"
      //   background="linear-gradient(48deg, rgba(0,0,0,0.8) 19%, rgba(41,19,84,0.8) 74%);"
    >
      <CardBody display="flex" textAlign="center" fontWeight="bold">
        <Image
          className="cardImage"
          maxH="350px"
          src={`https://starwars-visualguide.com/assets/img/characters/${
            character.url.split("/")[5]
          }.jpg`}
          alt={character.name}
        />
        <Stack
          height="100%"
          display="flex"
          justifyContent="space-evenly"
          ml={4}
        >
          <Stack height="20%">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              className="cardText"
              fontSize="xl"
            >
              {character.name}
            </Text>
            <Divider />
          </Stack>
          <Stack height="20%" justifyContent="center" display="flex">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              className="cardText"
            >
              Height: {character.height}cm - Weight: {character.mass}Kg
            </Text>
            <Divider />
          </Stack>
          <Stack height="20%">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              className="cardText"
            >
              Gender: {character.gender}
            </Text>
            <Divider />
          </Stack>
          <Stack height="20%" display="flex">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              className="cardText"
            >
              Hair Color: {character.hair_color} - Eye Color:{" "}
              {character.eye_color}
            </Text>
            <Divider />
          </Stack>
          <Stack height="20%">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              className="cardText"
            >
              Home: {character.homeworld}
            </Text>
            <Divider />
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CharacterCurrentCard;
