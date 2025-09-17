import { SRS_KICKS } from "@core/constants";
import type { KickTable, Piece, Rotation } from "@core/types";

const rotateMatrix = (matrix: number[][]): number[][] => {
  const size = matrix.length;
  const newMatrix = Array.from({ length: size }, () => Array(size).fill(0));

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      newMatrix[x][size - 1 - y] = matrix[y][x];
    }
  }

  return newMatrix;
};

const rotateMatrixCCW = (matrix: number[][]): number[][] => {
  const size = matrix.length;
  const newMatrix = Array.from({ length: size }, () => Array(size).fill(0));

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      newMatrix[size - 1 - x][y] = matrix[y][x];
    }
  }

  return newMatrix;
};

export const rotatePiece = (
  piece: Piece,
  hasCollision: (p: Piece) => boolean,
  direction: "clockwise" | "counter-clockwise" = "clockwise"
): Piece => {
  const from: Rotation = piece.rotation as Rotation;
  // For counter-clockwise rotation, (from + 3) % 4 is equivalent to (from - 1 + 4) % 4, ensuring a positive result.
  const to: Rotation = direction === "clockwise" ? (((from + 1) % 4) as Rotation) : (((from + 3) % 4) as Rotation);

  let rotatedShape = piece.shape;
  if (direction === "counter-clockwise") {
    rotatedShape = rotateMatrixCCW(rotatedShape);
  } else {
    rotatedShape = rotateMatrix(rotatedShape);
  }

  const rotatedPiece: Piece = {
    ...piece,
    shape: rotatedShape,
    rotation: to,
  };

  const kicks = piece.type === "I" ? SRS_KICKS.I : SRS_KICKS.normal;
  const key = `${from}>${to}` as keyof KickTable;
  const tests = kicks[key] ?? [[0, 0]];

  for (const [dx, dy] of tests) {
    const testPiece: Piece = {
      ...rotatedPiece,
      position: {
        x: piece.position.x + dx,
        y: piece.position.y + dy,
      },
    };
    if (!hasCollision(testPiece)) {
      return testPiece;
    }
  }

  return piece;
};
