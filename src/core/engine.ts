import { sleep } from "@utils/index";

import { randomPiece, rotatePiece } from "./tetromino";
import { type Action, type Board, BOARD_HEIGHT, BOARD_WIDTH, Cell, type Piece } from "./types";

export class GameEngine {
  board: Board;
  currentPiece: Piece;
  score: number;
  lines: number;
  level: number;
  status: "menu" | "playing" | "paused" | "gameover";
  animationStatus: "idle" | "running";

  constructor() {
    this.board = this.createEmptyBoard();
    this.currentPiece = randomPiece();
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.status = "playing";
    this.animationStatus = "idle";
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
    if (this.animationStatus === "running") return;
    this.moveDown();
    this.render();
  }

  applyAction(action: Action) {
    if (this.animationStatus === "running") return;

    switch (action) {
      case "moveLeft":
        this.move(-1);
        break;
      case "moveRight":
        this.move(1);
        break;
      case "rotate":
        this.rotate();
        break;
      case "softDrop":
        this.moveDown();
        break;
      case "hardDrop":
        this.drop();
        break;
    }
    this.render();
  }

  private move(dx: number) {
    if (this.status !== "playing") return;

    const movedPiece: Piece = {
      ...this.currentPiece,
      position: { x: this.currentPiece.position.x + dx, y: this.currentPiece.position.y },
    };

    if (!this.hasCollision(movedPiece)) {
      this.currentPiece = movedPiece;
    }
  }

  private moveDown() {
    const moved: Piece = {
      ...this.currentPiece,
      position: { x: this.currentPiece.position.x, y: this.currentPiece.position.y + 1 },
    };
    if (!this.hasCollision(moved)) {
      this.currentPiece = moved;
    } else {
      this.mergePiece(this.currentPiece);
      this.checkAndClearLines();
      this.currentPiece = randomPiece();
    }
  }

  private rotate() {
    if (this.status !== "playing") return;

    const rotatedPiece = rotatePiece(this.currentPiece);
    if (!this.hasCollision(rotatedPiece)) {
      this.currentPiece = rotatedPiece;
    }
  }

  private drop() {
    if (this.status !== "playing") return;

    const newPosition = { ...this.currentPiece.position };
    while (!this.hasCollision({ ...this.currentPiece, position: { ...newPosition, y: newPosition.y + 1 } })) {
      newPosition.y++;
    }

    this.currentPiece.position = newPosition;
    this.tick();
    this.checkAndClearLines();
  }

  private renderFn?: () => void;

  render() {
    this.renderFn?.();
  }

  setRenderFn(fn: () => void) {
    this.renderFn = fn;
  }

  // this works but with some issues, fix later
  // not working when multiple lines are cleared
  async animateLineClear({ linesToClear }: { linesToClear: number[] }) {
    this.animationStatus = "running";

    const oldBoard = this.board.map((row) => [...row]);

    for (const line of linesToClear) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        this.board[line][x] = Cell.EMPTY;
        this.render();
        await sleep(70);
      }
    }

    const minLine = Math.min(...linesToClear);
    for (let y = minLine - 1; y >= 0; y--) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (this.board[y][x] === Cell.BLOCK) {
          this.board[y][x] = Cell.EMPTY;
          this.render();
          await sleep(70);
        }
      }
    }

    const newBoard: Board = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(Cell.EMPTY));

    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (oldBoard[y][x] === Cell.BLOCK && !linesToClear.includes(y)) {
          const linesBelow = linesToClear.filter((line) => line > y).length;
          newBoard[y + linesBelow][x] = Cell.BLOCK;
        }
      }
    }

    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (newBoard[y][x] === Cell.BLOCK) {
          this.board[y][x] = Cell.BLOCK;
          this.render();
          await sleep(70);
        }
      }
    }

    this.animationStatus = "idle";
  }

  private async checkAndClearLines() {
    const linesToClear: number[] = [];

    for (let y = 0; y < this.board.length; y++) {
      if (this.board[y].every((cell) => cell === Cell.BLOCK)) {
        linesToClear.push(y);
      }
    }

    if (linesToClear.length > 0) {
      this.lines += linesToClear.length;
      this.score += linesToClear.length * 100 * this.level;

      await this.animateLineClear({
        linesToClear,
      });

      this.render();
    }
  }
}
