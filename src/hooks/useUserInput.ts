import { GameEngine } from "@core/engine";
import { useGameStore } from "@store/gameStore";
import { useEffect } from "react";

export function useUserInput(engine: GameEngine) {
  const status = useGameStore((s) => s.status);
  const setStatus = useGameStore((s) => s.setStatus);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      switch (e.code) {
        case "ArrowLeft":
          e.preventDefault();
          engine.applyAction("moveLeft");
          break;
        case "ArrowRight":
          e.preventDefault();
          engine.applyAction("moveRight");
          break;
        case "ArrowDown":
          e.preventDefault();
          engine.applyAction("softDrop");
          break;
        case "ArrowUp":
        case "KeyX":
          e.preventDefault();
          engine.applyAction("rotate");
          break;
        case "Space":
          e.preventDefault();
          engine.applyAction("hardDrop");
          break;
        case "KeyP":
          e.preventDefault();
          if (status === "menu" || status === "paused") {
            setStatus("playing");
            engine.status = "playing";
          } else if (status === "playing") {
            setStatus("paused");
            engine.status = "paused";
          }
          break;
        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [status, engine, setStatus]);
}
