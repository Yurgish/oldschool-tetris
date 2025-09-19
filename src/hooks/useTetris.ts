import { GameEngine } from "@core/engine";
import { useGameStore } from "@store/gameStore";
import { useEffect, useRef, useState } from "react";

export function useTetris() {
  const engineRef = useRef(new GameEngine());
  const { status, setStatus } = useGameStore();
  const [tickSpeed, setTickSpeed] = useState(engineRef.current.tickSpeed);

  useEffect(() => {
    const engine = engineRef.current;
    console.log(engine.status);
    console.log(status);

    if (engine.status !== "playing") return;

    const interval = setInterval(() => {
      engine.tick();

      if (engine.tickSpeed !== tickSpeed) {
        setTickSpeed(engine.tickSpeed);
      }

      if (engine.status === "gameover") {
        setStatus("gameover");
      }
    }, engine.tickSpeed);

    return () => clearInterval(interval);
  }, [setStatus, status, tickSpeed]);

  return {
    engine: engineRef.current,
  };
}
