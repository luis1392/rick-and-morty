import React from "react";

import { CardPresetation, FlexCol } from "../../styles/Character";

const CharacterItem = (props) => {
  const { name, image, species, status, gender } = props.character;
  console.log(props);
  return (
    <CardPresetation>
      <FlexCol>
        <img src={image} alt={name} />
        <span>Nombre: {name}</span>
        <span>Genero: {gender}</span>
        <span>Especie: {species}</span>
        <span>Estatus: {status}</span>
      </FlexCol>
    </CardPresetation>
  );
};

export default CharacterItem;
