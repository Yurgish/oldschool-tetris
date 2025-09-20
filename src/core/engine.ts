import { rotatePiece } from "@utils/tetromino";

import { APP_EVENTS, appEventEmitter } from "@/events/appEventEmmiter";

import { Bag } from "./bag";
import { BOARD_HEIGHT, BOARD_WIDTH, INITIAL_TICK_DELAY, MIN_TICK_DELAY, TICK_DELAY_DECREASE } from "./constants";
import { HighScoreManager } from "./highscore";
import { ScoreSystem } from "./score";
import { type Action, type Board, Cell, type GameStatus, type Piece } from "./types";

export class GameEngine {
  board: Board;
  currentPiece: Piece;
  nextPiece: Piece;
  status: GameStatus;
  animationStatus: "idle" | "running";
  private bag: Bag;
  private scoreSystem: ScoreSystem;
  private highScoreManager: HighScoreManager;

  tickSpeed: number;

  constructor(startLevel: number = 1) {
    // this.board = this._createTestBoard({ fillBottomRows: 4, skipColumn: 4 }); //for testing
    this.board = this.createEmptyBoard();
    this.bag = new Bag();
    this.currentPiece = this.bag.next();
    this.nextPiece = this.bag.next();
    this.status = "menu";
    this.animationStatus = "idle";
    this.scoreSystem = new ScoreSystem(startLevel);
    this.highScoreManager = new HighScoreManager();

    this.tickSpeed = Math.max(
      MIN_TICK_DELAY,
      Math.floor(INITIAL_TICK_DELAY * Math.pow(TICK_DELAY_DECREASE, startLevel - 1))
    );
  }

  async render() {
    if (this.status === "gameover") return;
    if (this.status === "menu") {
      this.animationStatus = "running";
      await new Promise<void>((resolve) => {
        appEventEmitter.emit(APP_EVENTS.MENU, resolve);
      });
      this.animationStatus = "idle";
    } else {
      appEventEmitter.emit(APP_EVENTS.RENDER, this.board, this.currentPiece, {
        score: this.scoreSystem.score,
        lines: this.scoreSystem.lines,
        level: this.scoreSystem.getLevel(),
        nextPiece: this.nextPiece,
      });
    }
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
    if (this.hasCollision(this.currentPiece)) {
      this.status = "gameover";
      appEventEmitter.emit(APP_EVENTS.STATUS_CHANGED, this.status);
      this.highScoreManager.tryUpdate({
        score: this.scoreSystem.score,
        level: this.scoreSystem.getLevel(),
        lines: this.scoreSystem.lines,
      });
      return;
    }
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
        this.scoreSystem.addSoftDrop(1);
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
    this.scoreSystem.addHardDrop(dropDistance);
    this.tick();
  }

  private updateTickSpeed() {
    this.tickSpeed = Math.max(
      MIN_TICK_DELAY,
      Math.floor(INITIAL_TICK_DELAY * Math.pow(TICK_DELAY_DECREASE, this.scoreSystem.getLevel() - 1))
    );
  }

  async checkAndClearLines(): Promise<number[]> {
    const linesToClear: number[] = [];

    for (let y = 0; y < this.board.length; y++) {
      if (this.board[y].every((cell) => cell === Cell.BLOCK)) {
        linesToClear.push(y);
      }
    }

    const prevLevel = this.scoreSystem.getLevel();
    this.scoreSystem.addLineClear(linesToClear.length);

    if (linesToClear.length > 0) {
      if (this.scoreSystem.getLevel() !== prevLevel) {
        this.updateTickSpeed();
      }

      const finalBoard = this.dropBlocks(structuredClone(this.board), linesToClear);

      this.animationStatus = "running";
      await new Promise<void>((resolve) => {
        appEventEmitter.emit(
          APP_EVENTS.ANIMATE_LINE_CLEAR,
          this.board,
          linesToClear,
          finalBoard,
          {
            score: this.scoreSystem.score,
            lines: this.scoreSystem.lines,
            level: this.scoreSystem.getLevel(),
            nextPiece: this.nextPiece,
          },
          this.currentPiece,
          resolve
        );
      });
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

  private resetState() {
    this.board = this.createEmptyBoard();
    this.bag = new Bag();

    this.scoreSystem.reset();

    this.updateTickSpeed();
  }

  async restart() {
    this.status = "restarting";
    this.animationStatus = "running";

    // get in utils
    const filledRows = this.board
      .map((row, idx) => (row.some((cell) => cell === Cell.BLOCK) ? idx : null))
      .filter((idx) => idx !== null) as number[];

    const minRow = Math.min(...filledRows);
    const maxRow = Math.max(...filledRows);

    const linesToClear: number[] = [];
    for (let i = minRow; i <= maxRow; i++) {
      linesToClear.push(i);
    }

    await new Promise<void>((resolve) => {
      appEventEmitter.emit(
        APP_EVENTS.ANIMATE_CLEAR_BLOCKS,
        this.board,
        linesToClear,
        {
          score: 0,
          lines: 0,
          level: this.scoreSystem.getStartLevel(),
          nextPiece: this.nextPiece,
        },
        resolve
      );
    });

    this.animationStatus = "idle";

    this.resetState();
    this.render();
    this.spawnPiece();

    this.status = "playing";
  }
}
