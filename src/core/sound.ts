import { Howl } from "howler";

import dropTetroidSound from "/sounds/dropTetroid.wav";
import moveTetroidSound from "/sounds/moveTetroid.wav";
import openWindowSound from "/sounds/openWindow.wav";

export const SOUND_CONFIG = {
  moveTetroid: { path: moveTetroidSound, volume: 0.2 },
  dropTetroid: { path: dropTetroidSound, volume: 0.15 },
  openWindow: { path: openWindowSound, volume: 0.3 },
} as const;

export type SoundName = keyof typeof SOUND_CONFIG;

class SoundManager {
  private sounds: Record<SoundName, Howl>;
  private isMuted: boolean = false;
  private defaultVolumes: Record<SoundName, number>;

  constructor() {
    this.sounds = {} as Record<SoundName, Howl>;
    this.defaultVolumes = {} as Record<SoundName, number>;
    for (const name in SOUND_CONFIG) {
      const { path, volume } = SOUND_CONFIG[name as SoundName];
      this.sounds[name as SoundName] = new Howl({ src: [path], volume });
      this.defaultVolumes[name as SoundName] = volume;
    }
  }

  play(name: SoundName) {
    if (!this.isMuted) {
      this.sounds[name]?.play();
    }
  }

  setVolume(volume: number) {
    for (const name in this.sounds) {
      this.sounds[name as SoundName].volume(volume);
      this.defaultVolumes[name as SoundName] = volume;
    }
  }

  mute() {
    this.isMuted = true;
    for (const name in this.sounds) {
      this.sounds[name as SoundName].volume(0);
    }
  }

  unmute() {
    this.isMuted = false;
    for (const name in this.sounds) {
      this.sounds[name as SoundName].volume(this.defaultVolumes[name as SoundName]);
    }
  }

  toggleMute() {
    if (this.isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}

export const soundManager = new SoundManager();
