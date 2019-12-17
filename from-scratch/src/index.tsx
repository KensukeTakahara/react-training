import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>hello, redux</div>
  </Provider>,
  document.getElementById("root")
);
