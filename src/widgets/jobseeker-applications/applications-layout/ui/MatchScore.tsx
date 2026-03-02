import { getMatchScoreColor } from "@/entities/application";

function MatchScore({ matchScore = 85 }: { matchScore?: number }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className={`shrink-0 w-12 h-12 rounded-full border-2 ${getMatchScoreColor(matchScore)} flex items-center justify-center`}
      >
        <span className="text-sm font-bold">{matchScore}%</span>
      </div>
      <div>
        <p className="text-xs font-semibold text-text-secondary">Match Score</p>
        <p className="text-xs text-text-secondary">Based on your profile</p>
      </div>
    </div>
  );
}

export { MatchScore };
