"use client";

import { ANIMATION_CONFIG } from "../config/config";
import type { AnimatedTextProps } from "../types/types";
import { getCharOpacity } from "../lib/getCharOpacity";

export function AnimatedText({
  text,
  visibleCharCount,
  textTranslateY,
}: AnimatedTextProps) {
  const opacity = Math.max(0, 1 - Math.abs(textTranslateY) / 150);

  return (
    <div
      className="max-w-4xl mx-auto text-left"
      style={{
        transform: `translateY(${textTranslateY}%)`,
        opacity,
        transition: `opacity ${ANIMATION_CONFIG.TRANSITION_DURATION}s ${ANIMATION_CONFIG.TRANSITION_EASE}, transform ${ANIMATION_CONFIG.TRANSITION_DURATION}s ${ANIMATION_CONFIG.TRANSITION_EASE}`,
      }}
    >
      <p className="text-[24px] leading-[1.4] font-medium tracking-tight sm:text-[36px] md:text-[44px]">
        {text.split("").map((char, i) => {
          const distance = i - visibleCharCount;
          return (
            <span
              key={i}
              className="inline-block"
              style={{ opacity: getCharOpacity(distance) }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </p>
    </div>
  );
}
