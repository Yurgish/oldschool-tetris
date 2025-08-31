import { type Board, BOARD_HEIGHT, BOARD_WIDTH, Cell, type Piece } from "@core/types";

interface CanvasRenderProps {
  ctx: CanvasRenderingContext2D;
  board: Board;
  currentPiece: Piece;
  blockSize?: number;
}

export function renderTetrisCanvas({ ctx, board, currentPiece, blockSize = 32 }: CanvasRenderProps) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = `${blockSize}px monospace`;
  ctx.textBaseline = "top";

  const tempBoard = board.map((row) => [...row]);

  currentPiece.shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      const boardY = currentPiece.position.y + y;
      const boardX = currentPiece.position.x + x;
      if (cell === 1 && boardY >= 0 && boardY < tempBoard.length && boardX >= 0 && boardX < tempBoard[0].length) {
        tempBoard[boardY][boardX] = Cell.BLOCK;
      }
    });
  });

  tempBoard.forEach((row, y) => {
    ctx.fillText("<!", 0, y * blockSize);

    row.forEach((cell, x) => {
      if (cell === Cell.BLOCK) {
        ctx.fillText("[]", (x + 1) * blockSize, y * blockSize);
      } else {
        ctx.fillText(" .", (x + 1) * blockSize, y * blockSize);
      }
    });

    ctx.fillText("!>", (row.length + 1) * blockSize, y * blockSize);
  });

  const bottomLine = "<!" + "=".repeat(BOARD_WIDTH * 2 - 2) + "!>";
  ctx.fillText(bottomLine, 0, BOARD_HEIGHT * blockSize);

  const pattern =
    "  " + Array.from({ length: BOARD_WIDTH * 2 - 2 }, (_, i) => (i % 2 === 0 ? "\\" : "/")).join("") + "  ";
  ctx.fillText(pattern, 0, (BOARD_HEIGHT + 1) * blockSize);
}
