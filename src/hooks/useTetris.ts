import { GameEngine } from "@core/engine";
import { useGameStore } from "@store/gameStore";
import { useEffect, useRef } from "react";

export function useTetris(tickSpeed = 1000) {
  const engineRef = useRef(new GameEngine());
  const { status, setStatus } = useGameStore();

  useEffect(() => {
    const engine = engineRef.current;
    if (engine.status !== "playing") return;

    const interval = setInterval(() => {
      engine.tick();

      if (engine.status === "gameover") {
        setStatus("gameover");
      }
    }, tickSpeed);

    return () => clearInterval(interval);
  }, [setStatus, status, tickSpeed]);

  return {
    engine: engineRef.current,
  };
}
