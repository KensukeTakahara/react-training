import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { State } from "./reducer";

export const Layer0: React.FC = () => {
  const a = useSelector((state: State) => state.text);

  return (
    <div>
      <Layer1 test1={{ test2: a }} />
    </div>
  );
};

interface Layer1Props {
  test1: {
    test2: string;
  };
}

const Layer1Base: React.FC<Layer1Props> = (props: Layer1Props) => {
  console.log(`Layer1:${props.test1.test2}`);
  return (
    <div>
      <span>hoge</span>
      <Layer2 arg={props.test1.test2} />
    </div>
  );
};

// 絶対に更新されない
const Layer1 = React.memo(Layer1Base, (prevProps, nextProps) => {
  return true;
});

interface Layer2Props {
  arg: string;
}

const Layer2: React.FC<Layer2Props> = (props: Layer2Props) => {
  console.log(`Layer2:${props.arg}`);
  return (
    <div>
      <p>{props.arg}</p>
    </div>
  );
};

export const Button: React.FC = () => {
  const dispatch = useDispatch();
  const [cnt, setCnt] = React.useState(0);

  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked!");
          dispatch({ type: "write", payload: `cnt:${cnt}` });
          setCnt(oldCnt => oldCnt + 1);
        }}
      >
        click
      </button>
    </div>
  );
};
