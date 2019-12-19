import React, { FC, useRef, useEffect, useState } from "react";
import { connect } from "react-redux";

import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import "imports-loader?THREE=three!three/examples/js/loaders/ColladaLoader.js";

import { State } from "./model";

const FILE_PATH = "Dragon.dae";
const COEFFICIENT = 0.003;

interface Props {
  x: number;
  y: number;
  z: number;
}

const mapStateToProps = (state: State): Props => ({
  x: state.x,
  y: state.y,
  z: state.z
});

const Thing = ({ x, y, z }: Props) => {
  const [obj, setObj] = useState<any>(null);
  useEffect(() => {
    // @ts-ignore
    const loader = new THREE.ColladaLoader();
    loader.load(FILE_PATH, (object: any) => {
      setObj(object.scene);
    });
  }, []);

  const ref = useRef<any>();
  useFrame(() => {
    if (ref.current) {
      x && (ref.current.rotation.x += x * COEFFICIENT);
      y && (ref.current.rotation.y += y * COEFFICIENT);
      z && (ref.current.rotation.z += z * COEFFICIENT);
    }
  });

  const { camera } = useThree();
  camera.position.z = 120;
  return obj ? <primitive ref={ref} object={obj} position={[0, 0, 0]} /> : null;
};

const WrapperThing: FC<Props> = ({ x, y, z }: Props) => (
  <div style={{ width: "100vw", height: "80vh" }}>
    <Canvas shadowMap>
      <Thing x={x} y={y} z={z} />
    </Canvas>
  </div>
);

export default connect(mapStateToProps)(WrapperThing);
