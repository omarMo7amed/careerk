import { useCompanyJobMatches } from "@/entities/company-job";
import { Badge, Card } from "@/shared";
import { MapPin, Sparkles } from "lucide-react";
import { getScoreColor } from "../lib/getScoreColor";
import { useRouter } from "next/navigation";

export function RecommendedCandidates({ jobId }: { jobId: string }) {
  const router = useRouter();
  const { data, isLoading, error } = useCompanyJobMatches({
    jobId,
    page: 1,
    limit: 5,
    minScore: 50,
    availabilityStatus: "OPEN_TO_WORK",
  });

  if (isLoading) return <p>Loading matches...</p>;
  if (error) return <p className="text-destructive">Failed to load matches.</p>;
  if (!data) return null;

  const candidates = data.matches;
  return (
    <>
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <h3 className="text-lg font-semibold">Recommended Candidates</h3>
        </div>

        {candidates.length > 0 ? (
          <div className="space-y-3">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="p-3 rounded-lg bg-bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-border/30 shadow-sm hover:shadow-md"
                onClick={() =>
                  router.push(
                    `/dashboard/company/job-listings/candidates/${candidate.jobSeekerId}`,
                  )
                }
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">
                      {`${candidate.jobSeekerName}`}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {candidate.jobSeekerTitle}
                    </p>
                  </div>
                  <Badge
                    className={`${getScoreColor(candidate.matchScore)} border text-xs font-semibold`}
                  >
                    {candidate.matchScore}%
                  </Badge>
                </div>
                {candidate.location && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{candidate.location}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-center text-muted-foreground py-6">
            No recommended candidates found.
          </p>
        )}
      </Card>
    </>
  );
}
