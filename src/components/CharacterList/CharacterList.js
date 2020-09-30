import React from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";

const CharacterList = () => {
  const { response, errors, mesages, loading } = useFetch("/character");
  // ?page=2
  if (loading) {
    return <Loader text="Cargando información" />;
  }
  if (response === null) {
    return null;
  }

  if (errors) {
    return <div>{mesages}</div>;
  }
  console.log(response);
  //   const renderCharacterList = characters => {
  //     // Generate company item.
  //     const character = characters.map(element => {
  //       return <CharacterItem key={element.encrypt_id} character={element} />;
  //     });
  //     return character;
  //   };
  return <div>la lista</div>;
};

export default CharacterList;
