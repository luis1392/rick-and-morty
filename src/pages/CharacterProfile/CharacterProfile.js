import React from "react";
import Layout from "../../components/Layout";

import { Container } from "../../styles/Grid";
import CharacterData from "../../components/CharacterData";

const CharacterProfile = () => {
  return (
    <Layout>
      <Container>
        <CharacterData />
      </Container>
    </Layout>
  );
};

export default CharacterProfile;
