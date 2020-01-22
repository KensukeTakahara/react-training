import { Action } from "redux";

export interface State {
  text: string;
}

const initialState: State = {
  text: ""
};

const actionFunc = (text: string) => ({
  type: "write",
  payload: text
});

const rootReducer = (
  state = initialState,
  action: ReturnType<typeof actionFunc>
): State => {
  switch (action.type) {
    case "write": {
      return { text: action.payload };
    }
    default:
      return state;
  }
};

export default rootReducer;
