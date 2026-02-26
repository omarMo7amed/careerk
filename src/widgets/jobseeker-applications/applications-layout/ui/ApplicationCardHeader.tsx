import { ApplicationListItem } from "@/entities/application";
import { StatusConfig } from "../../../../entities/application/config/statusConfig";
import { Badge } from "@/shared";

interface ApplicationCardHeaderProps {
  application: ApplicationListItem;
  config: StatusConfig;
}

function ApplicationCardHeader({
  application,
  config,
}: ApplicationCardHeaderProps) {
  const StatusIcon = config.icon;

  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-4 flex-1">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">
            {application.directJob.company.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold mb-1">
            {application.directJob.title}
          </h3>
          <p className="text-sm text-text-secondary">
            {application.directJob.company.name}
          </p>
        </div>
      </div>

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

export { ApplicationCardHeader };
