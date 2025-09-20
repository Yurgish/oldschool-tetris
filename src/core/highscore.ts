export interface TetrisSession {
  score: number;
  level: number;
  lines: number;
}

export class HighScoreManager {
  private key: string;
  private bestSession: TetrisSession | null;

  constructor(storageKey: string = "tetris_best_session") {
    this.key = storageKey;
    this.bestSession = this.load();
  }

  /**
   * Loads best session from localStorage
   */
  private load(): TetrisSession | null {
    const val = localStorage.getItem(this.key);
    if (!val) return null;
    try {
      return JSON.parse(val);
    } catch {
      return null;
    }
  }

  /**
   * Returns current best session
   */
  getBest(): TetrisSession | null {
    return this.bestSession;
  }

  /**
   * Checks and updates best session if new score is higher
   */
  tryUpdate(session: TetrisSession): boolean {
    if (!this.bestSession || session.score > this.bestSession.score) {
      this.bestSession = session;
      localStorage.setItem(this.key, JSON.stringify(session));
      return true;
    }
    return false;
  }
}
