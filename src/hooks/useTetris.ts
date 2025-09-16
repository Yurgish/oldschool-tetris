import { GameEngine } from "@core/engine";
import { useEffect, useRef } from "react";

import { useGameStore } from "@/store/gameStore";

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
