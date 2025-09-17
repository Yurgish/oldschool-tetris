export const Cell = {
  EMPTY: "empty",
  BLOCK: "block",
} as const;

type Cell = (typeof Cell)[keyof typeof Cell];

export interface Position {
  x: number;
  y: number;
}

export type Rotation = 0 | 1 | 2 | 3; // 0=0°, 1=90°, 2=180°, 3=270°

export type PieceType = "I" | "O" | "T" | "S" | "Z" | "J" | "L";

export interface Piece {
  shape: number[][];
  position: Position;
  rotation: Rotation;
  type: PieceType;
}

export type Board = Cell[][];

export type Action = "moveLeft" | "moveRight" | "rotate" | "softDrop" | "hardDrop";

export interface GameHUD {
  score: number;
  lines: number;
  level: number;
  nextPiece: Piece;
}

export type KickTable = Record<string, [number, number][]>;
