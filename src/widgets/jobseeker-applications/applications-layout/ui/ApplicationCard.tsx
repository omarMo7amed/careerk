import { ApplicationListItem, statusConfig } from "@/entities/application";
import { Button } from "@/shared";
import { ArrowRight } from "lucide-react";
import { WithdrawButton } from "@/features/withdraw-application";
import { MatchScore } from "./MatchScore";
import { ApplicationCardHeader } from "./ApplicationCardHeader";
import { ApplicationCardInfo } from "./ApplicationCardInfo";

interface ApplicationCardProps {
  application: ApplicationListItem;
  onViewDetails: () => void;
  matchScore?: string;
}

export function ApplicationCard({
  application,
  onViewDetails,
  matchScore = "85%",
}: ApplicationCardProps) {
  const config = statusConfig[application.status];

  return (
    <div
      className={`bg-bg-surface rounded-xl border-l-4 ${config.borderColor} border border-gray-200 p-6 hover:shadow-lg transition-all`}
    >
      <ApplicationCardHeader application={application} config={config} />
      <ApplicationCardInfo application={application} />

      <MatchScore matchScore={parseInt(matchScore)} />

      <div className="flex items-center justify-between gap-4">
        <Button
          onClick={onViewDetails}
          className="flex-1 transition-colors flex items-center justify-center gap-2"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <WithdrawButton applicationId={application.id} />
      </div>
    </div>
  );
}
