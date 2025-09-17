import type { Piece } from "./types";

const SHAPES: { type: Piece["type"]; shape: number[][] }[] = [
  {
    type: "I",
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  },
  {
    type: "O",
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    type: "L",
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
  },
  {
    type: "J",
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    type: "T",
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    type: "S",
    shape: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
  },
  {
    type: "Z",
    shape: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
  },
];

function createPiece({ type, shape }: { type: Piece["type"]; shape: number[][] }): Piece {
  return {
    type,
    shape,
    position: { x: 3, y: 0 },
    rotation: 0,
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
