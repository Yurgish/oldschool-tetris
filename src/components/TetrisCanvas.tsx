import { useTetrisManager } from "@hooks/useTetris";
import { useUserInput } from "@hooks/useUserInput";
import { CRTCanvas } from "@render/CRTCanvas";
import { useRef } from "react";

export function TetrisCanvas() {
  const tetrisRef = useRef<HTMLCanvasElement>(null!);
  const { engine, canvasReady, height, width } = useTetrisManager(tetrisRef);

  useUserInput(engine);

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
