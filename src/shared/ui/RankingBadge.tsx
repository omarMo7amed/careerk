import type { RankingProps } from "../types/ranking";
import { cn } from "../lib/cn";
import { Star } from "lucide-react";
import { getRankingBadgeColor } from "../lib/getRankingBadgeColor";

export function RankingBadge({ rank }: RankingProps) {
  const color = getRankingBadgeColor(rank);

  return (
    <div
      className={cn(
        "w-16 h-16 p-1 flex flex-col items-center justify-center rounded-lg text-lg font-semibold text-text-primary border-2  ",
        color.border,
        color.shadow,
      )}
    >
      <Star className={cn("w-5 h-5", color.text)} />
      <p>{rank}</p>
    </div>
  );
}
