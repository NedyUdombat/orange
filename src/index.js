import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
// import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-tabs/style/react-tabs.css";
import "react-responsive-modal/styles.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
