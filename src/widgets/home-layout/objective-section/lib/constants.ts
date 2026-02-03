export const OBJECTIVE_DESCRIPTION =
  "A unified job discovery platform that bridges the gap between job seekers and employers by aggregating opportunities from multiple sources into a single, intelligent ecosystem.";

export const SCROLL_CONFIG = {
  SECTION_HEIGHT: 3000,
  KEY_FEATURES_HEIGHT: 0, //i use it for test the main section
  STICKY_TOP: 160,
  REVEAL_PROGRESS_THRESHOLD: 0.8,
  FADE_PROGRESS_THRESHOLD: 0.2,
  FADE_DISTANCE: 150,
} as const;

export const ANIMATION_CONFIG = {
  CHAR_OPACITY_LEVELS: [1, 0.8, 0.6, 0.4, 0.25, 0.15, 0.08, 0],
  TRANSITION_DURATION: 0.4,
  TRANSITION_EASE: "easeOut",
} as const;
