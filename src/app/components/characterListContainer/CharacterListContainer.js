const { default: CharacterList } = require("../characterList/CharacterList");
import { useState, useContext } from "react";
import { CharacterContext } from "@/app/context/CharacterContext";
import Pagination from "../characterList/Pagination";

const CharacterListContainer = () => {
  //   const { characters } = useContext(CharacterContext);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postsPerPage, setPostsPerPage] = useState(4);

  //   const lastPostIndex = currentPage * postsPerPage;
  //   const firstPostIndex = lastPostIndex - postsPerPage;
  //   const currentCharacters = characters.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <CharacterList />
    </>
  );
};

export default CharacterListContainer;
