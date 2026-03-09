import { ANIMATION_CONFIG } from "../config/config";

export function getCharOpacity(distance: number): number {
  if (distance < 0) return ANIMATION_CONFIG.CHAR_OPACITY_LEVELS[0];
  if (distance >= ANIMATION_CONFIG.CHAR_OPACITY_LEVELS.length) {
    return ANIMATION_CONFIG.CHAR_OPACITY_LEVELS[
      ANIMATION_CONFIG.CHAR_OPACITY_LEVELS.length - 1
    ];
  }
  return ANIMATION_CONFIG.CHAR_OPACITY_LEVELS[distance];
}
