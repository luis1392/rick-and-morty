import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import Home from "../../pages/Home";
import NoMatch from "../../pages/NoMatch";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/cards" />} />
      <Route exact path="/cards" component={Home} />
      <Route exact path="/character" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default App;
