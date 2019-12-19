import { Reducer } from "redux";
import { State } from "./model";
import { Type, RotateAction } from "./action";

const initialState: State = {
  x: 0,
  y: 0,
  z: 0
};

const rootReducer: Reducer<State, RotateAction> = (
  state = initialState,
  action: RotateAction
) => {
  switch (action.type) {
    case Type.X:
      return { ...state, x: action.payload };
    case Type.Y:
      return { ...state, y: action.payload };
    case Type.Z:
      return { ...state, z: action.payload };
    case Type.STOP:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
