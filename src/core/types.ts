export const Cell = {
  EMPTY: "empty",
  BLOCK: "block",
} as const;

type Cell = (typeof Cell)[keyof typeof Cell];

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const BOARD_WIDTH_WITH_BORDERS = BOARD_WIDTH + 2;
export const BOARD_HEIGHT_WITH_BORDERS = BOARD_HEIGHT + 2;

export interface Position {
  x: number;
  y: number;
}

export interface Piece {
  shape: number[][];
  position: Position;
}

export type Board = Cell[][];
