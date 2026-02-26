import { Badge } from "@/shared";
import { Card } from "@/shared";

export function JobStatistics({
  status,
  applicationsCount,
}: {
  status: string;
  applicationsCount: number;
}) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Job Statistics</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-3">
          <span className="text-sm text-text-secondary">Status</span>
          <Badge
            className="rounded-lg"
            variant={status === "published" ? "active" : "default"}
          >
            {status}
          </Badge>
        </div>

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
