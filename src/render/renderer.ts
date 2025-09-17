import {
  BOARD_HEIGHT,
  BOARD_HEIGHT_WITH_BORDERS,
  BOARD_WIDTH,
  BOARD_WIDTH_WITH_BORDERS,
  DELAY_ANIMATION,
} from "@core/constants";
import { type Board, Cell, type GameHUD, type Piece } from "@core/types";

async function loadFont(name: string, url: string) {
  const font = new FontFace(name, `url(${url})`);
  await font.load();
  document.fonts.add(font);
}

export class TetrisRenderer {
  private ctx: CanvasRenderingContext2D;
  private blockSize: number;

  private offsetX: number;
  private offsetY: number;

  constructor(ctx: CanvasRenderingContext2D, blockSize: number = 32) {
    this.ctx = ctx;
    this.blockSize = blockSize;

    const boardPixelWidth = BOARD_WIDTH_WITH_BORDERS * this.blockSize;
    const boardPixelHeight = BOARD_HEIGHT_WITH_BORDERS * this.blockSize;

    this.offsetX = (this.ctx.canvas.width - boardPixelWidth) / 2;
    this.offsetY = (this.ctx.canvas.height - boardPixelHeight) / 2;
  }

  /**
   * Initializes the renderer by loading the required font and setting up the canvas context.
   *
   * This method asynchronously loads the "Dina" font from the specified path,
   * then configures the canvas context's font, fill style, and text baseline
   * for rendering text elements.
   */
  async init() {
    await loadFont("Dina", `${import.meta.env.BASE_URL}/fonts/DinaRemasterII.ttc`);
    this.ctx.font = `${this.blockSize}px Dina`;
    this.ctx.fillStyle = "lime";
    this.ctx.textBaseline = "top";
  }

  private delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  private drawCell(x: number, y: number, filled: boolean) {
    this.ctx.fillText(filled ? "[]" : " .", this.offsetX + (x + 1) * this.blockSize, this.offsetY + y * this.blockSize);
  }

  private drawBorders(row: number) {
    this.ctx.fillText("<!", this.offsetX, this.offsetY + row * this.blockSize);
    this.ctx.fillText("!>", this.offsetX + (BOARD_WIDTH + 1) * this.blockSize, this.offsetY + row * this.blockSize);
  }

  private drawBottom() {
    const bottomLine = "<!" + "=".repeat(BOARD_WIDTH * 2) + "!>";
    this.ctx.fillText(bottomLine, this.offsetX, this.offsetY + BOARD_HEIGHT * this.blockSize);

    const pattern =
      "  " + Array.from({ length: BOARD_WIDTH * 2 }, (_, i) => (i % 2 === 0 ? "\\" : "/")).join("") + "  ";
    this.ctx.fillText(pattern, this.offsetX, this.offsetY + (BOARD_HEIGHT + 1) * this.blockSize);
  }

  private drawBoard(board: Board) {
    board.forEach((row, y) => {
      this.drawBorders(y);
      row.forEach((cell, x) => this.drawCell(x, y, cell === Cell.BLOCK));
    });
    this.drawBottom();
  }

  private drawCurrentPiece(board: Board, piece: Piece) {
    piece.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 1) {
          const boardY = piece.position.y + y;
          const boardX = piece.position.x + x;
          if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
            board[boardY][boardX] = Cell.BLOCK;
          }
        }
      });
    });
  }

  private drawHUD(score: number, lines: number, level: number) {
    this.ctx.fillText(`SCORE: ${score}`, 20, 20);
    this.ctx.fillText(`LEVEL: ${level}`, 20, 20 + this.blockSize);
    this.ctx.fillText(`LINES: ${lines}`, 20, 20 + this.blockSize * 2);
  }

  private drawInstructions() {
    const startX = this.ctx.canvas.width - 300;
    const startY = 20;
    const lineHeight = this.blockSize;

    const instructions = ["← → : MOVE", "↑ / X : ROTATE", "↓ : SOFT DROP", "SPACE : HARD DROP", "P : PAUSE"];

    instructions.forEach((text, i) => {
      this.ctx.fillText(text, startX, startY + i * lineHeight);
    });
  }

  private drawNextPiece(nextPiece?: Piece) {
    if (!nextPiece) return;

    const previewX = this.ctx.canvas.width - 200;
    const previewY = 200;

    this.ctx.fillText("NEXT:", previewX, previewY);

    nextPiece.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 1) {
          this.ctx.fillText("[]", previewX + x * this.blockSize, previewY + (y + 1) * this.blockSize);
        }
      });
    });
  }

  render(board: Board, currentPiece?: Piece, hud?: GameHUD) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    const tempBoard = board.map((row) => [...row]);
    if (currentPiece) {
      this.drawCurrentPiece(tempBoard, currentPiece);
    }

    this.drawBoard(tempBoard);
    if (hud) {
      this.drawHUD(hud.score, hud.lines, hud.level);
      this.drawNextPiece(hud.nextPiece);
    }
    this.drawInstructions();
  }

  async animateLineClear(board: Board, lines: number[], finalBoard: Board, currentPiece: Piece, hud: GameHUD) {
    const tempBoard = structuredClone(board);

    for (const y of lines) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        await this.delay(DELAY_ANIMATION);
        tempBoard[y][x] = Cell.EMPTY;
        this.render(tempBoard, currentPiece, hud);
      }
    }

    if (lines.length > 0) {
      const highestLine = Math.min(...lines);

      for (let y = 0; y <= highestLine - 1; y++) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
          if (tempBoard[y][x] === Cell.BLOCK) {
            await this.delay(DELAY_ANIMATION);

            tempBoard[y][x] = Cell.EMPTY;

            this.render(tempBoard, currentPiece, hud);
          }
        }
      }
    }

    for (let y = 0; y <= BOARD_HEIGHT - 1; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (finalBoard[y][x] === Cell.BLOCK && tempBoard[y][x] === Cell.EMPTY) {
          await this.delay(DELAY_ANIMATION);
          tempBoard[y][x] = Cell.BLOCK;
          this.render(tempBoard, currentPiece, hud);
        }
      }
    }
  }
}
