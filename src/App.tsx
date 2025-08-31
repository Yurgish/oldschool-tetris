import { BOARD_HEIGHT_WITH_BORDERS, BOARD_WIDTH_WITH_BORDERS } from "@core/types";
import { renderTetrisCanvas } from "@render/renderCanvas";
import { useEffect, useRef, useState } from "react";

import { GameEngine } from "@/core/engine";

const BLOCKSIZE = 32 as const;

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [engine, setEngine] = useState<GameEngine>(new GameEngine());

  useEffect(() => {
    const interval = setInterval(() => {
      engine.tick();
      setEngine(engine);

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx)
          renderTetrisCanvas({ ctx, board: engine.board, currentPiece: engine.currentPiece, blockSize: BLOCKSIZE });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [engine]);

  return (
    <div>
      <h1>Old School Tetris</h1>
      <canvas
        ref={canvasRef}
        width={BLOCKSIZE * BOARD_WIDTH_WITH_BORDERS}
        height={BLOCKSIZE * BOARD_HEIGHT_WITH_BORDERS}
      />
    </div>
  );
}

export default App;
