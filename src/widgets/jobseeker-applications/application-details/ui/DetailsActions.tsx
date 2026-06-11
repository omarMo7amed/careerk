import { ApplicationStatus } from "@/entities/application";
import { WithdrawButton } from "@/features/withdraw-application";
import { Button } from "@/shared";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface DetailsActionsProps {
  jobId: string;
  applicationId: string;
  status: ApplicationStatus;
  onClose: () => void;
}

export function DetailsActions({
  jobId,
  applicationId,
  status,
  onClose,
}: DetailsActionsProps) {
  return (
    <div className="pt-6 border-t flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <Button className="flex-1">
        <Link
          href={`/dashboard/jobseeker/find-jobs/${jobId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center justify-center gap-2 w-full"
        >
          <span> View Job Post</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </Button>

      {status !== "WITHDRAWN" && status !== "REJECTED" && (
        <WithdrawButton applicationId={applicationId} onSuccess={onClose} />
      )}
    </div>
  );
}
