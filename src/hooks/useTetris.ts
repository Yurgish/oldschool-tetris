import { GameEngine } from "@core/engine";
import { TetrisRenderer } from "@render/renderer";
import { useGameStore } from "@store/gameStore";
import { useEffect, useRef, useState } from "react";

import { RendererManager } from "@/events/RendererManager";

export function useTetrisManager(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const engineRef = useRef(new GameEngine());
  const { status, setStatus } = useGameStore();
  const [tickSpeed, setTickSpeed] = useState(engineRef.current.tickSpeed);
  const [canvasReady, setCanvasReady] = useState<HTMLCanvasElement | null>(null);

  const height = window.innerHeight;
  const width = (height * 4) / 3;

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const renderer = new TetrisRenderer(ctx);
    renderer.init().then(() => engineRef.current.render());
    const manager = new RendererManager(renderer);

    setCanvasReady(canvasRef.current);

    return () => manager.unsubscribe();
  }, [canvasRef, height, width]);

  useEffect(() => {
    const engine = engineRef.current;

    if (engine.status !== "playing") return;

    const interval = setInterval(() => {
      console.log("tick", engine.status, engine.animationStatus);
      console.log("store", status);
      engine.tick();

      if (engine.tickSpeed !== tickSpeed) {
        setTickSpeed(engine.tickSpeed);
      }
      if (engine.status !== status) {
        setStatus(engine.status);
      }
    }, engine.tickSpeed);

    return () => clearInterval(interval);
  }, [setStatus, status, tickSpeed]);

  return {
    engine: engineRef.current,
    canvasReady,
    height,
    width,
  };
}
