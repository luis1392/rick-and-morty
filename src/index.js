import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";

import { BrowserRouter, HashRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

// add lib css
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";

// Redux
import { Provider } from "react-redux";
import makeStore from "./redux/makeStore";

const store = makeStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
