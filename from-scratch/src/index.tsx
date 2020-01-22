import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducer";
import { Layer0, Button } from "./component";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <>
      <Layer0 />
      <Button />
    </>
  </Provider>,
  document.getElementById("root")
);
