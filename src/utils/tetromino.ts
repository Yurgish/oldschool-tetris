import type { Piece } from "../core/types";

export const rotatePiece = (piece: Piece): Piece => {
  const newShape = piece.shape[0].map((_, colIndex) => piece.shape.map((row) => row[row.length - 1 - colIndex]));
  return { ...piece, shape: newShape };
};
