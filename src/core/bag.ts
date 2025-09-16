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

function createPiece(shape: number[][]): Piece {
  return {
    shape,
    position: { x: 3, y: 0 },
  };
}

export class Bag {
  private pieces: Piece[] = [];

  private refill() {
    const shapes = [...SHAPES];

    for (let i = shapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shapes[i], shapes[j]] = [shapes[j], shapes[i]];
    }
    this.pieces.push(...shapes.map(createPiece));
  }

  next(): Piece {
    if (this.pieces.length === 0) {
      this.refill();
    }
    return this.pieces.shift()!;
  }
}
