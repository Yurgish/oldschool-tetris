import type { TetrisRenderer } from "@render/renderer";
import { rotatePiece } from "@utils/tetromino";

import { Bag } from "./bag";
import { BOARD_HEIGHT, BOARD_WIDTH } from "./constants";
import { type Action, type Board, Cell, type Piece } from "./types";

export class GameEngine {
  board: Board;
  currentPiece: Piece;
  nextPiece: Piece;
  backToBack: boolean = false;
  comboCount: number = 0;
  score: number = 0;
  lines: number = 0;
  level: number = 1;
  status: "menu" | "playing" | "paused" | "gameover";
  animationStatus: "idle" | "running";
  private renderer?: TetrisRenderer;
  private bag: Bag;

  constructor() {
    this.board = this.createEmptyBoard();
    this.bag = new Bag();
    this.currentPiece = this.bag.next();
    this.nextPiece = this.bag.next();
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
  _createTestBoard(options?: { fillBottomRows?: number; skipColumn?: number }): Board {
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
    this.nextPiece = this.bag.next();
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
    if (this.status !== "playing") return;

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
        this.moveDown(true);
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

  private moveDown(isSoftDrop: boolean = false) {
    if (this.status !== "playing") return;

    const moved: Piece = {
      ...this.currentPiece,
      position: { x: this.currentPiece.position.x, y: this.currentPiece.position.y + 1 },
    };
    if (!this.hasCollision(moved)) {
      this.currentPiece = moved;
      if (isSoftDrop) {
        this.score += 1;
      }
    } else {
      this.mergePiece(this.currentPiece);
      this.spawnPiece();
      this.checkAndClearLines();
    }
  }

  private rotate() {
    if (this.status !== "playing") return;

    this.currentPiece = rotatePiece(this.currentPiece, (p) => this.hasCollision(p));
  }

  private drop() {
    if (this.status !== "playing") return;

    const newPosition = { ...this.currentPiece.position };
    let dropDistance = 0;

    while (!this.hasCollision({ ...this.currentPiece, position: { ...newPosition, y: newPosition.y + 1 } })) {
      newPosition.y++;
      dropDistance++;
    }

    this.currentPiece.position = newPosition;
    this.score += dropDistance * 2;
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
