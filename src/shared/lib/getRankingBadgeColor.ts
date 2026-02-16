export function getRankingBadgeColor(rank: number) {
  if (rank >= 80)
    return {
      //   bg: "bg-emerald-400/25",
      border: "border-emerald-400/50",
      text: "text-emerald-300",
      shadow: "shadow-[0_4px_14px_rgba(16,185,129,0.35)]",
    };

  if (rank >= 50)
    return {
      //   bg: "bg-amber-400/25",
      border: "border-amber-400/50",
      text: "text-amber-300",
      shadow: "shadow-[0_4px_14px_rgba(245,158,11,0.35)]",
    };

  return {
    // bg: "bg-rose-400/25",
    border: "border-rose-400/50",
    text: "text-rose-300",
    shadow: "shadow-[0_4px_14px_rgba(244,63,94,0.35)]",
  };
}
