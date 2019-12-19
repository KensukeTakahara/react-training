import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";

import Dragon from "./three";
import Controller from "./controller";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Dragon />
    <Controller />
  </Provider>,
  document.getElementById("root")
);
