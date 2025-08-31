import type { Piece } from "./types";

const SHAPES: number[][][] = [
  // I
  [[1, 1, 1, 1]],
  // O
  [
    [1, 1],
    [1, 1],
  ],
  // L
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  // J
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  // T
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
];

export function randomPiece(): Piece {
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  return {
    shape,
    position: { x: 3, y: 0 },
  };
}
