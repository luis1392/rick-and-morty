import React from "react";
import Layout from "../../components/Layout";

import { Container } from "../../styles/Grid";
import Characters from "../../components/Characters";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Characters />
      </Container>
    </Layout>
  );
};

export default Home;
