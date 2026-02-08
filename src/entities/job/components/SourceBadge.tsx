import { getSourceBadgeClass } from "../lib/getSourceBadge";
import { checkJobSource } from "../lib/checkJobSource";
import { cn } from "@/shared/lib/cn";

interface SourceBadgeProps {
  source?: string;
}

export function SourceBadge({ source }: SourceBadgeProps) {
  if (!source) return null;

  const sourceBadgeClass = getSourceBadgeClass(source);
  const isCarrerk = checkJobSource(source);

  return (
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <div
        className={cn(
          "px-3 py-1 rounded-full text-xs font-semibold text-white",
          sourceBadgeClass,
          isCarrerk && "ring-2 ring-white/50",
        )}
      >
        {source}
      </div>
    </div>
  );
}
