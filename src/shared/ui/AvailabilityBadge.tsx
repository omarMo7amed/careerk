import { AVAILABILITY_BADGE_COLORS } from "../constant/availabilityBadgeColors";
import { AvailabilityBadgeProps } from "../types/availabilityBadgeProps";

export function AvailabilityBadge({
  status,
  className = "",
}: AvailabilityBadgeProps) {
  const style = AVAILABILITY_BADGE_COLORS[status];

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-3 py-1
        rounded-xl
        text-xs
        backdrop-blur-md
        text-text-primary
        ${style.container}
        ${className}
      `}
    >
      <span
        className={`
          w-2 h-2
          rounded-full
          ${style.dot}
        `}
      />

      {status}
    </span>
  );
}
