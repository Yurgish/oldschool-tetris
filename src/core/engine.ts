import { randomPiece } from "./tetromino";
import { type Board, BOARD_HEIGHT, BOARD_WIDTH, Cell, type Piece } from "./types";

export class GameEngine {
  board: Board;
  currentPiece: Piece;
  score: number;
  lines: number;
  level: number;
  status: "menu" | "playing" | "paused" | "gameover";

  constructor() {
    this.board = this.createEmptyBoard();
    this.currentPiece = randomPiece();
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.status = "playing";
  }

  private createEmptyBoard(): Board {
    return Array.from({ length: BOARD_HEIGHT }, () => Array.from({ length: BOARD_WIDTH }, () => Cell.EMPTY));
  }

  private hasCollision(piece: Piece): boolean {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] === 1) {
          const newX = piece.position.x + x;
          const newY = piece.position.y + y;

          if (
            newX < 0 ||
            newX >= BOARD_WIDTH ||
            newY >= BOARD_HEIGHT ||
            (newY >= 0 && this.board[newY][newX] === Cell.BLOCK)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }

  private mergePiece(piece: Piece) {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] === 1) {
          const boardY = piece.position.y + y;
          const boardX = piece.position.x + x;
          if (boardY >= 0) {
            this.board[boardY][boardX] = "block";
          }
        }
      }
    }
  }

  tick() {
    const moved: Piece = {
      ...this.currentPiece,
      position: {
        x: this.currentPiece.position.x,
        y: this.currentPiece.position.y + 1,
      },
    };

    if (this.hasCollision(moved)) {
      this.mergePiece(this.currentPiece);
      this.currentPiece = randomPiece();
    } else {
      this.currentPiece = moved;
    }
  }
}
