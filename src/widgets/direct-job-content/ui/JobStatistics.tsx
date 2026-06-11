import { usePauseStatus, usePublishJob } from "@/entities/company-job";
import { JobStatusLabels } from "@/entities/company-job/lib/labelMap";
import { Badge, Button } from "@/shared";
import { Card } from "@/shared";
import { Pause, PlayIcon } from "lucide-react";

export function JobStatistics({
  jobId,
  status,
  applicationsCount,
  isOwner = false,
}: {
  isOwner?: boolean;
  jobId?: string;
  status: string;
  applicationsCount?: number;
}) {
  const { mutateAsync: publishJob } = usePublishJob();
  const { mutateAsync: pauseJob } = usePauseStatus();

  async function handleToggleStatus() {
    if (status === "PUBLISHED") {
      await pauseJob(jobId!);
    } else {
      await publishJob(jobId!);
    }
  }

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Job Statistics</h2>
      <div className="space-y-4">
        {isOwner && (
          <div className="flex justify-between items-center p-3">
            <span className="text-sm text-text-secondary">Status</span>
            <div className="flex items-center gap-2">
              {status === "PUBLISHED" ? (
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-2"
                  onClick={handleToggleStatus}
                >
                  <Pause className="w-4 h-4" />
                  Pause
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-2 text-success hover:bg-success/10"
                  onClick={handleToggleStatus}
                >
                  <PlayIcon className="w-4 h-4" />
                  Activate
                </Button>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center p-3">
          <span className="text-sm text-text-secondary">Applicants</span>
          <span className="font-semibold text-foreground text-lg">
            {applicationsCount}
          </span>
        </div>
      </div>
    </Card>
  );
}
