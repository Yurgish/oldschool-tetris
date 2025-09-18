import { GameEngine } from "@core/engine";
import { useGameStore } from "@store/gameStore";
import { useCallback, useEffect } from "react";

export function useUserInput(engine: GameEngine) {
  const status = useGameStore((s) => s.status);
  const setStatus = useGameStore((s) => s.setStatus);

  const togglePause = useCallback(() => {
    if (status === "paused") {
      setStatus("playing");
      engine.status = "playing";
    } else if (status === "playing") {
      setStatus("paused");
      engine.status = "paused";
    }
  }, [status, setStatus, engine]);

  const startGame = useCallback(() => {
    if (status === "menu") {
      setStatus("playing");
      engine.status = "playing";
    }
  }, [status, setStatus, engine]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const handled = ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "KeyX", "Space", "KeyP", "KeyS"];
      if (handled.includes(e.code)) {
        e.preventDefault();
      }
      switch (e.code) {
        case "ArrowLeft":
          engine.applyAction("moveLeft");
          break;
        case "ArrowRight":
          engine.applyAction("moveRight");
          break;
        case "ArrowDown":
          engine.applyAction("softDrop");
          break;
        case "ArrowUp":
        case "KeyX":
          engine.applyAction("rotate");
          break;
        case "Space":
          engine.applyAction("hardDrop");
          break;
        case "KeyP":
          togglePause();
          break;
        case "KeyS":
          startGame();
          break;
        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [status, engine, setStatus, togglePause, startGame]);
}
