import { BLOCKSIZE, BOARD_HEIGHT_WITH_BORDERS, BOARD_WIDTH_WITH_BORDERS } from "@core/types";
import { useTetris } from "@hooks/useTetris";
import { useUserInput } from "@hooks/useUserInput";
import { renderTetrisCanvas } from "@render/renderCanvas";
import { useEffect, useRef } from "react";

export function TetrisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { engine, start, pause, reset, status } = useTetris(500);
  useUserInput(engine);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    engine.setRenderFn(() => {
      renderTetrisCanvas({
        ctx,
        board: engine.board,
        currentPiece: engine.currentPiece,
        blockSize: BLOCKSIZE,
      });
    });

    engine.render();
  }, [engine]);

  return (
    <div>
      <h1>Tetris ({status})</h1>
      <canvas
        ref={canvasRef}
        width={BLOCKSIZE * BOARD_WIDTH_WITH_BORDERS}
        height={BLOCKSIZE * BOARD_HEIGHT_WITH_BORDERS}
      />
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
