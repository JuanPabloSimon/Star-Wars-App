import { createContext, useState } from "react";
export const CharacterContext = createContext();

// Conexto de la aplicación
export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:10:51.357000Z",
      edited: "2014-12-20T21:17:50.309000Z",
      url: "https://swapi.dev/api/people/2/",
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.dev/api/people/3/",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/13/"],
      created: "2014-12-10T15:18:20.704000Z",
      edited: "2014-12-20T21:17:50.313000Z",
      url: "https://swapi.dev/api/people/4/",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/2/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/30/"],
      starships: [],
      created: "2014-12-10T15:20:09.791000Z",
      edited: "2014-12-20T21:17:50.315000Z",
      url: "https://swapi.dev/api/people/5/",
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:52:14.024000Z",
      edited: "2014-12-20T21:17:50.317000Z",
      url: "https://swapi.dev/api/people/6/",
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:53:41.121000Z",
      edited: "2014-12-20T21:17:50.319000Z",
      url: "https://swapi.dev/api/people/7/",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(false);

  const addCharacter = (character) => {
    const checkDuplicated = characters.find((el) => el.name == character.name); // chquea si el componente ya existe
    if (checkDuplicated) {
      const filtered = characters.filter((el) => el.name != character.name); // de existir el componente, lo elimina y lo vuelve a agregar al principio para que sea el current
      setCharacters([character, ...filtered]);
      return;
    }
    setCharacters((prev) => [character, ...prev]); // si no existe lo agrega al principio para que sea el current (como un historial)
  };

  // función para filtrar el histial basado en la elección de género
  const filterCharacters = () => {
    switch (filter) {
      case "male":
        return characters.filter((el) => el.gender == "male");
      case "female":
        return characters.filter((el) => el.gender == "female");
      case "hermaphrodite":
        return characters.filter((el) => el.gender == "hermaphrodite");
      default:
        return characters;
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        filterCharacters,
        filter,
        setFilter,
        addCharacter,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
