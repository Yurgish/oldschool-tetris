import { APP_EVENTS, appEventEmitter } from "@/events/appEventEmmiter";

import { BACK_TO_BACK_MULTIPLIER, COMBO_BONUS, LEVEL_UP_LINES, LINE_CLEAR_SCORES } from "./constants";

export class ScoreSystem {
  private level: number;
  private startLevel: number;
  private combo: number = 0;
  private lastClearWasTetris: boolean = false;

  score: number = 0;
  lines: number = 0;

  constructor(startLevel: number = 1) {
    this.level = startLevel;
    this.startLevel = startLevel;
  }

  addSoftDrop(cells: number) {
    this.score += cells * 1;
  }

  addHardDrop(cells: number) {
    this.score += cells * 2;
  }

  addLineClear(linesCleared: number) {
    let points = 0;
    let label = "";

    const base = LINE_CLEAR_SCORES[linesCleared];
    if (base) {
      points = base.points;
      label = base.label;
    }

    if (linesCleared === 4 && this.lastClearWasTetris) {
      points = Math.floor(points * BACK_TO_BACK_MULTIPLIER);
      label = "Back-to-Back Tetris";
    }

    if (linesCleared > 0) {
      this.combo++;
      const comboPoints = COMBO_BONUS * this.combo;
      points += comboPoints;
      label += this.combo > 1 ? ` (Combo x${this.combo})` : "";
    } else {
      this.combo = 0;
    }

    this.lastClearWasTetris = linesCleared === 4;

    const total = points * this.level;
    this.score += total;
    this.lines += linesCleared;

    while (this.lines >= this.level * LEVEL_UP_LINES) {
      this.level++;
    }

    if (total > 0) {
      appEventEmitter.emit(APP_EVENTS.SCORE_EVENT, `${label} +${total}`);
    }
  }

  getLevel() {
    return this.level;
  }

  getStartLevel() {
    return this.startLevel;
  }

  reset() {
    this.level = this.startLevel;
    this.combo = 0;
    this.lastClearWasTetris = false;
    this.score = 0;
    this.lines = 0;
  }
}
