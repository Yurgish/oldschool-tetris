import type { TetrisRenderer } from "@render/renderer";

import { randomPiece, rotatePiece } from "./tetromino";
import { type Action, type Board, BOARD_HEIGHT, BOARD_WIDTH, Cell, type Piece } from "./types";

export class GameEngine {
  board: Board;
  currentPiece: Piece;
  nextPiece: Piece;
  score: number;
  lines: number;
  level: number;
  status: "menu" | "playing" | "paused" | "gameover";
  animationStatus: "idle" | "running";
  private renderer?: TetrisRenderer;

  constructor() {
    this.board = this.createTestBoard({ fillBottomRows: 3, skipColumn: 4 });
    this.currentPiece = randomPiece();
    this.nextPiece = randomPiece();
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.status = "menu";
    this.animationStatus = "idle";
  }

  render() {
    this.renderer?.render(this.board, this.currentPiece, {
      score: this.score,
      lines: this.lines,
      level: this.level,
      nextPiece: this.nextPiece,
    });
  }

  setRenderer(renderer: TetrisRenderer) {
    this.renderer = renderer;
  }

  /**
   * Create an empty board or a custom board for testing.
   * @param options Optional config:
   *   - fillBottomRows: number of bottom rows to fill (default: 0)
   *   - skipColumn: index of column to leave empty in filled rows (default: 0)
   */
  createTestBoard(options?: { fillBottomRows?: number; skipColumn?: number }): Board {
    const fillBottomRows = options?.fillBottomRows ?? 0;
    const skipColumn = options?.skipColumn ?? 0;
    const board: Board = Array.from({ length: BOARD_HEIGHT }, () =>
      Array.from({ length: BOARD_WIDTH }, () => Cell.EMPTY)
    );

    for (let i = 0; i < fillBottomRows; i++) {
      const rowIdx = BOARD_HEIGHT - 1 - i;
      for (let col = 0; col < BOARD_WIDTH; col++) {
        board[rowIdx][col] = col === skipColumn ? Cell.EMPTY : Cell.BLOCK;
      }
    }

    return board;
  }

  private createEmptyBoard(): Board {
    return Array.from({ length: BOARD_HEIGHT }, () => Array.from({ length: BOARD_WIDTH }, () => Cell.EMPTY));
  }

  private spawnPiece() {
    this.currentPiece = this.nextPiece;
    this.nextPiece = randomPiece();
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
      this.spawnPiece();
      this.checkAndClearLines();
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
  }

  async checkAndClearLines(): Promise<number[]> {
    const linesToClear: number[] = [];

    for (let y = 0; y < this.board.length; y++) {
      if (this.board[y].every((cell) => cell === Cell.BLOCK)) {
        linesToClear.push(y);
      }
    }

    if (linesToClear.length > 0) {
      this.lines += linesToClear.length;
      this.score += linesToClear.length * 100 * this.level;

      const finalBoard = this.dropBlocks(structuredClone(this.board), linesToClear);

      this.animationStatus = "running";
      if (this.renderer) {
        await this.renderer.animateLineClear(this.board, linesToClear, finalBoard, this.currentPiece, {
          score: this.score,
          lines: this.lines,
          level: this.level,
          nextPiece: this.nextPiece,
        });
      }
      this.animationStatus = "idle";

      this.board = finalBoard;
    }

    return linesToClear;
  }

  private dropBlocks(board: Board, linesToClear: number[]): Board {
    const cleared = board.filter((_, y) => !linesToClear.includes(y));
    const emptyRows = Array.from({ length: linesToClear.length }, () => Array(board[0].length).fill(Cell.EMPTY));
    return [...emptyRows, ...cleared];
  }
}
