import { createContext, useState } from "react";
export const CharacterContext = createContext();

// Conexto de la aplicación
export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
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
