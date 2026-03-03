import { AVAILABILITY_BADGE_COLORS } from "../constant/availabilityBadgeColors";
import { cn } from "../lib/cn";
import { AvailabilityBadgeProps } from "../types/availabilityBadgeProps";

export function AvailabilityBadge({
  status,
  className = "",
}: AvailabilityBadgeProps) {
  const style =
    AVAILABILITY_BADGE_COLORS[status] ?? AVAILABILITY_BADGE_COLORS.Available;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-xl",
        "text-xs text-text-primary",
        "backdrop-blur-md",
        className,
        style.container,
      )}
    >
      <span className={cn(" w-2 h-2 rounded-full", style.dot)} />

      {status}
    </span>
  );
}
