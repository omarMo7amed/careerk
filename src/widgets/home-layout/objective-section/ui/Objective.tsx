"use client";

import { OBJECTIVE_DESCRIPTION } from "../config/config";
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
        className="py-24 px-6 relative min-h-screen md:h-[3000px]"
      >
        <PlatformIcons />

        <div className="max-w-5xl text-white  mx-auto sticky top-40">
          {/* Plain text for md and smaller screens */}
          <p className="md:hidden text-[24px] text-center leading-[1.4] font-medium tracking-tight sm:text-[36px] md:text-[44px]">
            {OBJECTIVE_DESCRIPTION}
          </p>

          {/* Animated text for lg+ screens */}
          <div className="hidden md:block">
            <AnimatedText
              text={OBJECTIVE_DESCRIPTION}
              visibleCharCount={visibleCharCount}
              textTranslateY={textTranslateY}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
