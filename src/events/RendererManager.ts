import { TetrisRenderer } from "@render/renderer";

import { APP_EVENTS, appEventEmitter, type AppEvents } from "@/events/appEventEmmiter";

export class RendererManager {
  private renderer: TetrisRenderer;

  constructor(renderer: TetrisRenderer) {
    this.renderer = renderer;
    this.subscribe();
  }

  private subscribe() {
    appEventEmitter.on(APP_EVENTS.RENDER, this.handleRender);
    appEventEmitter.on(APP_EVENTS.MENU, this.handleMenu);
    appEventEmitter.on(APP_EVENTS.ANIMATE_LINE_CLEAR, this.handleLineClear);
    appEventEmitter.on(APP_EVENTS.ANIMATE_CLEAR_BLOCKS, this.handleClearBlocks);
  }

  private handleRender: AppEvents[typeof APP_EVENTS.RENDER] = (board, piece, hud) => {
    this.renderer.render(board, piece, hud);
  };

  private handleMenu: AppEvents[typeof APP_EVENTS.MENU] = () => {
    this.renderer.renderMenu();
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

  public unsubscribe() {
    appEventEmitter.off(APP_EVENTS.RENDER, this.handleRender);
    appEventEmitter.off(APP_EVENTS.MENU, this.handleMenu);
    appEventEmitter.off(APP_EVENTS.ANIMATE_LINE_CLEAR, this.handleLineClear);
    appEventEmitter.off(APP_EVENTS.ANIMATE_CLEAR_BLOCKS, this.handleClearBlocks);
  }
}
