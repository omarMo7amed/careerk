"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "../lib/constants";
import type { AnimatedTextProps } from "../model/types";
import { getCharOpacity } from "../lib/getCharOpacity";

export function AnimatedText({
  text,
  visibleCharCount,
  textTranslateY,
}: AnimatedTextProps) {
  const opacity = Math.max(0, 1 - Math.abs(textTranslateY) / 150);

  return (
    <div
      className="max-w-4xl mx-auto text-left transition-all duration-500 ease-out"
      style={{
        transform: `translateY(${textTranslateY}%)`,
        opacity,
      }}
    >
      <p className="text-[24px] leading-[1.4] font-medium tracking-tight sm:text-[36px] md:text-[44px]">
        {text.split("").map((char, i) => {
          const distance = i - visibleCharCount;
          const opacity = getCharOpacity(distance);

          return (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity }}
              transition={{
                duration: ANIMATION_CONFIG.TRANSITION_DURATION,
                ease: ANIMATION_CONFIG.TRANSITION_EASE,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}
