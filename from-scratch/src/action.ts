// action types
export const Type = {
  X: "ROTATE/X",
  Y: "ROTATE/Y",
  Z: "ROTATE/Z",
  STOP: "ROTATE/STOP"
} as const;

// action creators
export const rotateX = (amount: number) => ({
  type: Type.X,
  payload: amount
});

export const rotateY = (amount: number) => ({
  type: Type.Y,
  payload: amount
});

export const rotateZ = (amount: number) => ({
  type: Type.Z,
  payload: amount
});

export const stopRotation = () => ({
  type: Type.STOP
});

export type RotateX = (amount: number) => void;
export type RotateY = (amount: number) => void;
export type RotateZ = (amount: number) => void;
export type StopRotation = () => void;

export type RotateAction =
  | ReturnType<typeof rotateX>
  | ReturnType<typeof rotateY>
  | ReturnType<typeof rotateZ>
  | ReturnType<typeof stopRotation>;
