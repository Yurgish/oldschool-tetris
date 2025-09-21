import { HighScoreManager } from "@core/highscore";
import { TetrisRenderer } from "@render/renderer";

import { APP_EVENTS, appEventEmitter, type AppEvents } from "@/events/appEventEmmiter";

export class RendererManager {
  private renderer: TetrisRenderer;
  private isHighScoreWindowVisible: boolean = false;

  constructor(renderer: TetrisRenderer) {
    this.renderer = renderer;

    this.subscribe();
  }

  private subscribe() {
    appEventEmitter.on(APP_EVENTS.RENDER, this.handleRender);
    appEventEmitter.on(APP_EVENTS.MENU, this.handleMenu);
    appEventEmitter.on(APP_EVENTS.ANIMATE_LINE_CLEAR, this.handleLineClear);
    appEventEmitter.on(APP_EVENTS.ANIMATE_CLEAR_BLOCKS, this.handleClearBlocks);
    appEventEmitter.on(APP_EVENTS.STATUS_CHANGED, this.handleStatusChange);
    appEventEmitter.on(APP_EVENTS.SCORE_EVENT, this.handleScoreEvent);
    appEventEmitter.on(APP_EVENTS.SHOW_HIGHEST_SCORE, this.handleShowHighestScore);
  }

  private handleRender: AppEvents[typeof APP_EVENTS.RENDER] = (board, piece, hud) => {
    this.renderer.render(board, piece, hud);
  };

  private handleMenu: AppEvents[typeof APP_EVENTS.MENU] = async (done) => {
    await this.renderer.renderMenu();
    done?.();
  };

  private handleLineClear: AppEvents[typeof APP_EVENTS.ANIMATE_LINE_CLEAR] = async (
    board,
    lines,
    finalBoard,
    hud,
    piece,
    done
  ) => {
    await this.renderer.animateLineClear(board, lines, finalBoard, hud, piece);
    done?.();
  };

  private handleClearBlocks: AppEvents[typeof APP_EVENTS.ANIMATE_CLEAR_BLOCKS] = async (board, lines, hud, done) => {
    await this.renderer.animateClearBlocks(board, lines, hud);
    done?.();
  };

  private handleStatusChange: AppEvents[typeof APP_EVENTS.STATUS_CHANGED] = (status) => {
    if (status === "paused") {
      this.renderer.renderWindow(["PAUSED", "PRESS [P] TO RESUME"]);
    } else if (status === "gameover") {
      this.renderer.renderWindow(["GAME OVER", "PRESS [R] TO RESTART"]);
    }
  };

  private handleScoreEvent: AppEvents[typeof APP_EVENTS.SCORE_EVENT] = (message) => {
    this.renderer.setNewScoreMessage(message);
  };

  private handleShowHighestScore: AppEvents[typeof APP_EVENTS.SHOW_HIGHEST_SCORE] = () => {
    if (this.isHighScoreWindowVisible) {
      this.isHighScoreWindowVisible = false;
      this.renderer.cancelWindowAnimation();
      this.renderer.renderMenu(false);
    } else {
      const highScore = new HighScoreManager().getBest();
      if (!highScore) return;
      const lines = Object.entries(highScore).map(([key, value]) => `${key.toUpperCase()}: ${value}`);
      this.isHighScoreWindowVisible = true;
      this.renderer.renderWindow(lines);
    }
  };

  public unsubscribe() {
    appEventEmitter.off(APP_EVENTS.RENDER, this.handleRender);
    appEventEmitter.off(APP_EVENTS.MENU, this.handleMenu);
    appEventEmitter.off(APP_EVENTS.ANIMATE_LINE_CLEAR, this.handleLineClear);
    appEventEmitter.off(APP_EVENTS.ANIMATE_CLEAR_BLOCKS, this.handleClearBlocks);
    appEventEmitter.off(APP_EVENTS.STATUS_CHANGED, this.handleStatusChange);
    appEventEmitter.off(APP_EVENTS.SCORE_EVENT, this.handleScoreEvent);
    appEventEmitter.off(APP_EVENTS.SHOW_HIGHEST_SCORE, this.handleShowHighestScore);
  }
}
