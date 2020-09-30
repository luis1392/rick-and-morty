import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import Home from "../../pages/Home";
import CharacterProfile from "../../pages/CharacterProfile";
import NoMatch from "../../pages/NoMatch";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/cards" />} />
      <Route exact path="/cards" component={Home} />
      <Route exact path="/character/:id" component={CharacterProfile} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default App;
