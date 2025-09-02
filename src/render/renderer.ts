import { type Board, BOARD_HEIGHT, BOARD_WIDTH, Cell, DELAY_ANIMATION, type Piece } from "@core/types";

async function loadFont(name: string, url: string) {
  const font = new FontFace(name, `url(${url})`);
  await font.load();
  document.fonts.add(font);
}

export class TetrisRenderer {
  private ctx: CanvasRenderingContext2D;
  private blockSize: number;

  constructor(ctx: CanvasRenderingContext2D, blockSize: number = 32) {
    this.ctx = ctx;
    this.blockSize = blockSize;
  }

  async init() {
    await loadFont("Dina", "/fonts/DinaRemasterII.ttc");
    this.ctx.font = `${this.blockSize}px Dina`;
    this.ctx.fillStyle = "lime";
    this.ctx.textBaseline = "top";
  }

  private delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  private drawCell(x: number, y: number, filled: boolean) {
    this.ctx.fillText(filled ? "[]" : " .", (x + 1) * this.blockSize, y * this.blockSize);
  }

  private drawBorders(row: number) {
    this.ctx.fillText("<!", 0, row * this.blockSize);
    this.ctx.fillText("!>", (BOARD_WIDTH + 1) * this.blockSize, row * this.blockSize);
  }

  private drawBottom() {
    const bottomLine = "<!" + "=".repeat(BOARD_WIDTH * 2) + "!>";
    this.ctx.fillText(bottomLine, 0, BOARD_HEIGHT * this.blockSize);

    const pattern =
      "  " + Array.from({ length: BOARD_WIDTH * 2 }, (_, i) => (i % 2 === 0 ? "\\" : "/")).join("") + "  ";
    this.ctx.fillText(pattern, 0, (BOARD_HEIGHT + 1) * this.blockSize);
  }

  render(board: Board, currentPiece?: Piece) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    const tempBoard = board.map((row) => [...row]);

    if (currentPiece) {
      currentPiece.shape.forEach((row, y) => {
        row.forEach((cell, x) => {
          const boardY = currentPiece.position.y + y;
          const boardX = currentPiece.position.x + x;
          if (cell === 1 && boardY >= 0 && boardY < tempBoard.length && boardX >= 0 && boardX < tempBoard[0].length) {
            tempBoard[boardY][boardX] = Cell.BLOCK;
          }
        });
      });
    }

    tempBoard.forEach((row, y) => {
      this.drawBorders(y);
      row.forEach((cell, x) => this.drawCell(x, y, cell === Cell.BLOCK));
    });

    this.drawBottom();
  }

  async animateLineClear(board: Board, lines: number[], finalBoard: Board) {
    const tempBoard = structuredClone(board);

    for (const y of lines) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        await this.delay(DELAY_ANIMATION);
        tempBoard[y][x] = Cell.EMPTY;
        this.render(tempBoard);
      }
    }

    if (lines.length > 0) {
      const highestLine = Math.min(...lines);

      for (let y = 0; y <= highestLine - 1; y++) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
          if (tempBoard[y][x] === Cell.BLOCK) {
            await this.delay(DELAY_ANIMATION);

            tempBoard[y][x] = Cell.EMPTY;

            this.render(tempBoard);
          }
        }
      }
    }

    for (let y = 0; y <= BOARD_HEIGHT - 1; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (finalBoard[y][x] === Cell.BLOCK && tempBoard[y][x] === Cell.EMPTY) {
          await this.delay(DELAY_ANIMATION);
          tempBoard[y][x] = Cell.BLOCK;
          this.render(tempBoard);
        }
      }
    }
  }
}
