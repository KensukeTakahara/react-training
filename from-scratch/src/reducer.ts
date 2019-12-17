import { Action } from "redux";

interface State {
  text: string;
}

const initialState: State = {
  text: ""
};

const rootReducer = (state = initialState, action: Action) => state;

export default rootReducer;
