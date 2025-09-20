import type { Board, GameHUD, GameStatus, Piece } from "@core/types";
import { EventEmitter } from "events";

export const APP_EVENTS = {
  RENDER: "render",
  MENU: "menu",
  ANIMATE_LINE_CLEAR: "animateLineClear",
  ANIMATE_CLEAR_BLOCKS: "animateClearBlocks",
  STATUS_CHANGED: "statusChanged",
  SCORE_EVENT: "scoreEvent",
  SHOW_HIGHEST_SCORE: "showHighestScore",
} as const;

export interface AppEvents {
  [APP_EVENTS.RENDER]: (board: Board, currentPiece?: Piece, hud?: GameHUD) => void;
  [APP_EVENTS.MENU]: (done?: () => void) => void;
  [APP_EVENTS.ANIMATE_LINE_CLEAR]: (
    board: Board,
    linesToClear: number[],
    finalBoard: Board,
    hud: GameHUD,
    currentPiece?: Piece,
    done?: () => void
  ) => void;
  [APP_EVENTS.ANIMATE_CLEAR_BLOCKS]: (board: Board, linesToClear: number[], hud: GameHUD, done?: () => void) => void;
  [APP_EVENTS.STATUS_CHANGED]: (status: GameStatus) => void;
  [APP_EVENTS.SCORE_EVENT]: (message: string) => void;
  [APP_EVENTS.SHOW_HIGHEST_SCORE]: () => void;
}

interface AppEventEmitter extends EventEmitter {
  on<K extends keyof AppEvents>(eventName: K, listener: AppEvents[K]): this;
  off<K extends keyof AppEvents>(eventName: K, listener: AppEvents[K]): this;
  emit<K extends keyof AppEvents>(eventName: K, ...args: Parameters<AppEvents[K]>): boolean;
}

const appEventEmitter = new EventEmitter() as AppEventEmitter;

export { appEventEmitter };
