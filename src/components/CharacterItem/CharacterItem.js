import React from "react";
import { Link } from "react-router-dom";

import { CardPresetation, FlexCol } from "../../styles/Character";

const CharacterItem = (props) => {
  const { name, image, species, status, gender, id } = props.character;

  return (
    <Link to={`/character/${id}`}>
      <CardPresetation>
        <FlexCol>
          <img src={image} alt={name} />
          <span>Nombre: {name}</span>
          <span>Genero: {gender}</span>
          <span>Especie: {species}</span>
          <span>Estatus: {status}</span>
        </FlexCol>
      </CardPresetation>
    </Link>
  );
};

export default CharacterItem;
