import type { Board, GameHUD, Piece } from "@core/types";
import { EventEmitter } from "events";

export const APP_EVENTS = {
  RENDER: "render",
  MENU: "menu",
  ANIMATE_LINE_CLEAR: "animateLineClear",
  ANIMATE_CLEAR_BLOCKS: "animateClearBlocks",
} as const;

export interface AppEvents {
  [APP_EVENTS.RENDER]: (board: Board, currentPiece?: Piece, hud?: GameHUD) => void;
  [APP_EVENTS.MENU]: () => void;
  [APP_EVENTS.ANIMATE_LINE_CLEAR]: (
    board: Board,
    linesToClear: number[],
    finalBoard: Board,
    hud: GameHUD,
    currentPiece?: Piece,
    done?: () => void
  ) => void;
  [APP_EVENTS.ANIMATE_CLEAR_BLOCKS]: (board: Board, linesToClear: number[], hud: GameHUD, done?: () => void) => void;
}

interface AppEventEmitter extends EventEmitter {
  on<K extends keyof AppEvents>(eventName: K, listener: AppEvents[K]): this;
  off<K extends keyof AppEvents>(eventName: K, listener: AppEvents[K]): this;
  emit<K extends keyof AppEvents>(eventName: K, ...args: Parameters<AppEvents[K]>): boolean;
}

const appEventEmitter = new EventEmitter() as AppEventEmitter;

export { appEventEmitter };
