import { GameEngine } from "@core/engine";
import { useEffect, useRef } from "react";

import { useGameStore } from "@/store/gameStore";

export function useTetris(tickSpeed = 1000) {
  const engineRef = useRef(new GameEngine());
  const { status, setStatus, setScore, setLines, setLevel } = useGameStore();

  useEffect(() => {
    if (status !== "playing") return;

    const interval = setInterval(() => {
      const engine = engineRef.current;
      engine.tick();

      setScore(engine.score);
      setLines(engine.lines);
      setLevel(engine.level);

      if (engine.status === "gameover") {
        setStatus("gameover");
      }
    }, tickSpeed);

    return () => clearInterval(interval);
  }, [status, tickSpeed, setScore, setLines, setLevel, setStatus]);

  return {
    engine: engineRef.current,
    status,
    start: () => setStatus("playing"),
    pause: () => setStatus("paused"),
    reset: () => {
      engineRef.current = new GameEngine();
      setStatus("menu");
    },
  };
}
