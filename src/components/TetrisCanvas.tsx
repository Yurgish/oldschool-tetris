import { BLOCKSIZE } from "@core/types";
import { useTetris } from "@hooks/useTetris";
import { useUserInput } from "@hooks/useUserInput";
import { TetrisRenderer } from "@render/renderer";
import { useEffect, useRef } from "react";

export function TetrisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { engine } = useTetris(500);
  useUserInput(engine);

  useEffect(() => {
    async function setupRenderer() {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      const renderer = new TetrisRenderer(ctx, BLOCKSIZE);
      await renderer.init();

      engine.setRenderer(renderer);

      engine.render();
    }

    setupRenderer();
  }, [engine]);

  return <canvas ref={canvasRef} />;
}
