"use client";

import { OBJECTIVE_DESCRIPTION, SCROLL_CONFIG } from "../lib/constants";
import { useScrollProgress } from "../model/useScrollProgress";
import { AnimatedText } from "./AnimatedText";
import { PlatformIcons } from "./PlatformIcons";

export default function Objective() {
  const [{ visibleCharCount, textTranslateY }, sectionRef] = useScrollProgress(
    OBJECTIVE_DESCRIPTION.length,
  );

  return (
    <div className="min-h-screen bg-[#0f1623]  transition-colors duration-300">
      {/* Platform Description */}
      <section
        ref={sectionRef}
        className="py-24 px-6 relative"
        style={{ height: `${SCROLL_CONFIG.SECTION_HEIGHT}px` }}
      >
        <PlatformIcons />

        <div className="max-w-5xl text-white  mx-auto sticky top-40">
          <AnimatedText
            text={OBJECTIVE_DESCRIPTION}
            visibleCharCount={visibleCharCount}
            textTranslateY={textTranslateY}
          />
        </div>
      </section>

      {/* Key Features */}
      <div
        className="py-24 px-6"
        style={{ height: `${SCROLL_CONFIG.KEY_FEATURES_HEIGHT}px` }}
      ></div>
    </div>
  );
}
