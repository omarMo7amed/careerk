import { motion } from "framer-motion";

export function ScoreRing({ score, color }: { score: number; color: string }) {
  const radius = 60;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;

  const targetOffset = circumference * (1 - score / 100);
  console.log(color);
  return (
    <div className="relative inline-flex items-center justify-center w-full h-full">
      <svg
        viewBox="0 0 140 140"
        className="-rotate-90 w-full h-full"
        aria-hidden="true"
      >
        <circle
          cx="70"
          cy="70"
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-white"
          fill="none"
        />

        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          className={`stroke-current ${color}`}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: targetOffset }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>
    </div>
  );
}
