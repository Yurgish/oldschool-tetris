import type { GameStatus } from "@core/types";
import { create } from "zustand";

interface GameState {
  status: GameStatus;
  score: number;
  lines: number;
  level: number;
  setStatus: (status: GameStatus) => void;
  setScore: (score: number) => void;
  setLines: (lines: number) => void;
  setLevel: (level: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  status: "menu",
  score: 0,
  lines: 0,
  level: 1,
  setStatus: (status) => set({ status }),
  setScore: (score) => set({ score }),
  setLines: (lines) => set({ lines }),
  setLevel: (level) => set({ level }),
}));
