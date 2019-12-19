import React, { FC } from "react";
import { connect } from "react-redux";

import {
  rotateX,
  rotateY,
  rotateZ,
  stopRotation,
  RotateX,
  RotateY,
  RotateZ,
  StopRotation
} from "./action";
import { State } from "./model";

interface Props {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly rotateX: RotateX;
  readonly rotateY: RotateY;
  readonly rotateZ: RotateZ;
  readonly stopRotation: StopRotation;
}

const mapStateToProps = (state: State) => ({
  x: state.x,
  y: state.y,
  z: state.z
});

const mapDispatchToProps = {
  rotateX,
  rotateY,
  rotateZ,
  stopRotation
};

const Controller: FC<Props> = (props: Props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <div>
      <p>{`x:${props.x}`}</p>
      <button onClick={() => props.rotateX(props.x - 1)}>&lt;</button>
      <button onClick={() => props.rotateX(props.x + 1)}>&gt;</button>
    </div>
    <div>
      <p>{`y:${props.y}`}</p>
      <button onClick={() => props.rotateY(props.y - 1)}>&lt;</button>
      <button onClick={() => props.rotateY(props.y + 1)}>&gt;</button>
    </div>
    <div>
      <p>{`z:${props.z}`}</p>
      <button onClick={() => props.rotateZ(props.z - 1)}>&lt;</button>
      <button onClick={() => props.rotateZ(props.z + 1)}>&gt;</button>
    </div>
    <div>
      <button onClick={() => props.stopRotation()}>stop</button>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
