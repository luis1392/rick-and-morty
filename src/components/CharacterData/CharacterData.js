import React from "react";
import { withRouter } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";
import { Row, Col } from "../../styles/Grid";
import {
  H1,
  FlexCol,
  ContainerCharacterData,
  ButtonBack,
} from "../../styles/Character";

const CharacterData = (props) => {
  const { response, errors, mesages, loading } = useFetch(
    `/character/${props.match.params.id}`
  );
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
  const { name, image, location, origin, status, species, gender } = response;
  return (
    <Row>
      <Col xl="12" lg="12" md="12" sm="12">
        <H1 className="card-title">{name}</H1>
      </Col>
      <Col xl="4" lg="4" md="4" sm="4">
        <img src={image} alt={name} />
      </Col>
      <Col xl="6" lg="6" md="6" sm="6">
        <ContainerCharacterData>
          <FlexCol>
            <span>Genero: {gender}</span>
            <span>Especie: {species}</span>
            <span>Estatus: {status}</span>
            <span>Locacion: {location.name}</span>
            <span>Planeta de origen: {origin.name}</span>
          </FlexCol>
        </ContainerCharacterData>
        <ButtonBack to="/cards">Regresa a buscar mas personajes</ButtonBack>
      </Col>
    </Row>
  );
};

export default withRouter(CharacterData);
