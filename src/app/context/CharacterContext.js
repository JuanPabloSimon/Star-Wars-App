import { createContext, useState } from "react";
export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addCharacter = (character) => {
    setCharacters((prev) => [character, ...prev]);
  };

  return (
    <CharacterContext.Provider
      value={{ characters, addCharacter, loading, setLoading, error, setError }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
