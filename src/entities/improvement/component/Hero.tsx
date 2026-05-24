import { motion } from "framer-motion";
import { ScoreRing } from "./ScoreRing";
import { scoreData } from "../config/importanceStyle";

export function Hero({
  cvScore,
  targetRole,
  description,
}: {
  cvScore: number;
  targetRole: string;
  description: string;
}) {
  const { label, color } = scoreData(cvScore);
  return (
    <div className="w-full lg:basis-lg lg:shrink-0 relative overflow-hidden rounded-3xl bg-bg-surface border border-border p-6 shadow-sm">
      <div className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full" />

      <div className="relative flex flex-col items-center gap-10">
        <div className="relative shrink-0 w-52 h-52">
          <ScoreRing score={cvScore} color={color} />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-4xl font-black text-foreground leading-none tracking-tighter">
              {cvScore}
              <span className="text-lg text-text-muted font-normal">/100</span>
            </span>
            <span
              className={`text-xs font-bold uppercase tracking-[0.15em] mt-1 ${scoreData(cvScore).color}`}
            >
              {label}
            </span>
          </motion.div>
        </div>

        <div className="text-center space-y-4">
          <h3 className="text-3xl text-primary font-extrabold tracking-tight leading-tight">
            {targetRole}
          </h3>

          <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
