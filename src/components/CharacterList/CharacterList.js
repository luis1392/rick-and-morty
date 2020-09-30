import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";

import { Row, Col } from "../../styles/Grid";

import CharacterItem from "../CharacterItem";
import { connect } from "react-redux";
import * as characterActions from "../../redux/actions/characterActions";

const CharacterList = (props) => {
  const { response, errors, mesages, loading } = useFetch(
    "/character?name=rick"
  );

  useEffect(() => {
    if (response !== null) {
      props.fetchCheractersSuccess(response);
    }
  }, [response]);

  if (loading) {
    return <Loader text="Cargando información" />;
  }
  // ?page=2

  if (response === null) {
    return null;
  }
  if (errors) {
    return <div>{mesages}</div>;
  }

  const renderCharacterList = (characters) => {
    // Generate character item.
    const character = characters.map((element) => {
      return (
        <Col key={element.id} xl="4" lg="4" md="4" sm="4">
          <CharacterItem character={element} />
        </Col>
      );
    });
    return character;
  };
  return <Row>{renderCharacterList(props.characterReducer.characters)}</Row>;
};

const mapStateToProps = ({ characterReducer }) => {
  return {
    characterReducer,
  };
};
const actions = {
  fetchCharactersBegin: characterActions.fetchCharactersBegin,
  fetchCheractersSuccess: characterActions.fetchCheractersSuccess,
  fetchCheractersError: characterActions.fetchCheractersError,
};
// export default CharacterList;
export default connect(mapStateToProps, actions)(CharacterList);
