import { ApplicationStatus, statusConfig } from "@/entities/application";
import { Badge } from "@/shared";

interface StatusBadgeProps {
  status: ApplicationStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div>
      <p className="text-sm text-text-secondary mb-2">STATUS</p>
      <Badge
        size="sm"
        className={`${config.badgeBg} ${config.badgeText}  flex items-center gap-1`}
      >
        <StatusIcon className="w-3 h-3" />
        {config.label}
      </Badge>
    </div>
  );
}
