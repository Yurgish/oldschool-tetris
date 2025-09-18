import { BLOCKSIZE } from "@core/constants";
import { useTetris } from "@hooks/useTetris";
import { useUserInput } from "@hooks/useUserInput";
import { CRTCanvas } from "@render/CRTCanvas";
import { TetrisRenderer } from "@render/renderer";
import { useEffect, useRef, useState } from "react";

export function TetrisCanvas() {
  const tetrisRef = useRef<HTMLCanvasElement>(null);
  const [canvasReady, setCanvasReady] = useState<HTMLCanvasElement | null>(null);
  const { engine } = useTetris();

  useUserInput(engine);

  const height = window.innerHeight;
  const width = (height * 4) / 3;

  useEffect(() => {
    if (!tetrisRef.current) return;

    const ctx = tetrisRef.current.getContext("2d");
    if (!ctx) return;

    tetrisRef.current.width = width;
    tetrisRef.current.height = height;

    const renderer = new TetrisRenderer(ctx, BLOCKSIZE);
    renderer.init().then(() => {
      engine.setRenderer(renderer);
      engine.render();
    });

    setCanvasReady(tetrisRef.current);
  }, [engine, height, width]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-950" style={{ width: width }}>
      <canvas
        ref={tetrisRef}
        style={{
          background: "#1a202c",
          visibility: "hidden",
          width: width,
          height: height,
        }}
      />
      {canvasReady && <CRTCanvas sourceCanvas={canvasReady} width={width} height={height} />}
    </div>
  );
}
