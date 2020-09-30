import React from "react";

import { Row, Col } from "../../styles/Grid";

import CharacterList from "../CharacterList";

const Characters = () => {
  return (
    <Row>
      <Col xl="12" lg="12" md="12" sm="12">
        <span>Search-bar</span>
      </Col>

      <Col xl="12" lg="12" md="12" sm="12">
        <CharacterList />
      </Col>
    </Row>
  );
};

export default Characters;
