import type { KickTable } from "./types";

// =========================
// BOARD DIMENSIONS
// =========================

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const BOARD_WIDTH_WITH_BORDERS = BOARD_WIDTH + 2;
export const BOARD_HEIGHT_WITH_BORDERS = BOARD_HEIGHT + 2;

export const BLOCKSIZE = 36;

// =========================
// TIMING & SPEED
// =========================

export const DELAY_ANIMATION = 18;

export const INITIAL_TICK_DELAY = 500;

export const MIN_TICK_DELAY = 50;

export const LEVEL_UP_LINES = 10;

export const TICK_DELAY_DECREASE = 0.8; // Each level, the tick delay is multiplied by this factor (15% faster per level)

// =========================
// SCORING & LEVELS
// =========================

export const LINE_CLEAR_SCORES: Record<number, { points: number; label: string }> = {
  1: { points: 100, label: "Single" },
  2: { points: 300, label: "Double" },
  3: { points: 500, label: "Triple" },
  4: { points: 800, label: "Tetris" },
};

export const BACK_TO_BACK_MULTIPLIER = 1.5;

export const COMBO_BONUS = 50;

export const SOFT_DROP_POINTS = 1;
export const HARD_DROP_POINTS = 2;

// =========================
// SRS KICK TABLE
// =========================

export const SRS_KICKS: { normal: KickTable; I: KickTable } = {
  normal: {
    "0>1": [
      [0, 0],
      [-1, 0],
      [-1, 1],
      [0, -2],
      [-1, -2],
    ],
    "1>0": [
      [0, 0],
      [1, 0],
      [1, -1],
      [0, 2],
      [1, 2],
    ],
    "1>2": [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, -2],
      [1, -2],
    ],
    "2>1": [
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, 2],
      [-1, 2],
    ],
    "2>3": [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, -2],
      [1, -2],
    ],
    "3>2": [
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, 2],
      [-1, 2],
    ],
    "3>0": [
      [0, 0],
      [-1, 0],
      [-1, 1],
      [0, -2],
      [-1, -2],
    ],
    "0>3": [
      [0, 0],
      [1, 0],
      [1, -1],
      [0, 2],
      [1, 2],
    ],
  },
  I: {
    "0>1": [
      [0, 0],
      [-2, 0],
      [1, 0],
      [-2, -1],
      [1, 2],
    ],
    "1>0": [
      [0, 0],
      [2, 0],
      [-1, 0],
      [2, 1],
      [-1, -2],
    ],
    "1>2": [
      [0, 0],
      [-1, 0],
      [2, 0],
      [-1, 2],
      [2, -1],
    ],
    "2>1": [
      [0, 0],
      [1, 0],
      [-2, 0],
      [1, -2],
      [-2, 1],
    ],
    "2>3": [
      [0, 0],
      [2, 0],
      [-1, 0],
      [2, 1],
      [-1, -2],
    ],
    "3>2": [
      [0, 0],
      [-2, 0],
      [1, 0],
      [-2, -1],
      [1, 2],
    ],
    "3>0": [
      [0, 0],
      [1, 0],
      [-2, 0],
      [1, -2],
      [-2, 1],
    ],
    "0>3": [
      [0, 0],
      [-1, 0],
      [2, 0],
      [-1, 2],
      [2, -1],
    ],
  },
} as const;

// =========================
// RENDERING & UI
// =========================

export const LETTERS = {
  T: ["[][][][][][]", "    [][]    ", "    [][]    ", "    [][]    ", "    [][]    ", "    [][]    ", "    [][]    "],
  E: ["[][][][][][]", "[][]        ", "[][]        ", "[][][][][][]", "[][]        ", "[][]        ", "[][][][][][]"],
  R: ["[][][][][]  ", "[][]    [][]", "[][]    [][]", "[][][][][]  ", "[][]  [][]  ", "[][]   [][] ", "[][]    [][]"],
  I: ["[][][][][][]", "    [][]    ", "    [][]    ", "    [][]    ", "    [][]    ", "    [][]    ", "[][][][][][]"],
  S: ["[][][][][][]", "[][]        ", "[][]        ", "[][][][][][]", "        [][]", "        [][]", "[][][][][][]"],
};

export const TETRIS_ART = [
  ...LETTERS.T.map(
    (row, i) =>
      row + "  " + LETTERS.E[i] + "  " + LETTERS.T[i] + "  " + LETTERS.R[i] + " " + LETTERS.I[i] + "  " + LETTERS.S[i]
  ),
];
