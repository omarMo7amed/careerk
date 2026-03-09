import { useState, useEffect, useRef, useCallback } from "react";
import { SCROLL_CONFIG } from "../config/config";
import type { ScrollProgressReturn } from "../types/types";

export function useScrollProgress(textLength: number): ScrollProgressReturn {
  const [visibleCharCount, setVisibleCharCount] = useState(0);
  const [textTranslateY, setTextTranslateY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollProgress =
        (scrollY - sectionTop + windowHeight * 0.5) / sectionHeight;
      const progress = Math.min(1, Math.max(0, scrollProgress));

      // Calculate character reveal progress
      const revealProgress = Math.min(
        1,
        progress / SCROLL_CONFIG.REVEAL_PROGRESS_THRESHOLD,
      );
      const charsToShow = Math.floor(revealProgress * textLength);
      setVisibleCharCount(charsToShow);

      // Calculate text fade out
      if (progress > SCROLL_CONFIG.REVEAL_PROGRESS_THRESHOLD) {
        const fadeProgress = Math.min(
          1,
          (progress - SCROLL_CONFIG.REVEAL_PROGRESS_THRESHOLD) /
            SCROLL_CONFIG.FADE_PROGRESS_THRESHOLD,
        );
        setTextTranslateY(-fadeProgress * SCROLL_CONFIG.FADE_DISTANCE);
      } else {
        setTextTranslateY(0);
      }
    });
  }, [textLength]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return [{ visibleCharCount, textTranslateY }, sectionRef];
}
