import { BLOCKSIZE, BOARD_HEIGHT_WITH_BORDERS, BOARD_WIDTH_WITH_BORDERS } from "@core/types";
import { useTetris } from "@hooks/useTetris";
import { useUserInput } from "@hooks/useUserInput";
import { TetrisRenderer } from "@render/renderer";
import { useEffect, useRef } from "react";

export function TetrisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { engine, start, pause, reset, status } = useTetris(500);
  useUserInput(engine);

  useEffect(() => {
    async function setupRenderer() {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const renderer = new TetrisRenderer(ctx, BLOCKSIZE);
      await renderer.init();

      engine.setRenderer(renderer);

      engine.render();
    }

    setupRenderer();
  }, [engine]);

  return (
    <div>
      <h1>Tetris ({status})</h1>
      <canvas
        ref={canvasRef}
        width={BLOCKSIZE * BOARD_WIDTH_WITH_BORDERS}
        height={BLOCKSIZE * BOARD_HEIGHT_WITH_BORDERS}
      />
      <div className="text-2xl flex justify-between">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
