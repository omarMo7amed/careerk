import {
  AvailabilityBadge,
  UserAvatar as CandidateAvatar,
  RankingBadge,
} from "@/shared";
import type { CandidateHeaderProps } from "../types/candidateHeader";

export function CandidateHeader({
  id,
  name,
  title,
  avatarUrl,
  availability_status,
  rank,
}: CandidateHeaderProps) {
  return (
    <div className="flex  flex-1 gap-4">
      <div>
        <CandidateAvatar id={id} name={name} avatarUrl={avatarUrl} size={50} />
      </div>

      <div className="shrink">
        <div className="mb-1">
          <h4 className="text-text-primary text-lg">{name}</h4>

          {title && (
            <p className="text-text-secondary text-xs line-clamp-1">{title}</p>
          )}
        </div>

        <AvailabilityBadge status={availability_status} className="mt-1" />
      </div>
      <div className="flex-1 flex justify-end">
        <RankingBadge rank={rank} />
      </div>
    </div>
  );
}
