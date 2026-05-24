import { UserAvatar as CandidateAvatar, RankingBadge } from "@/shared";
import type { CandidateHeaderProps } from "../types/candidateHeader";
import { AvailabilityBadge } from "./AvailabilityBadge";

export function CandidateHeader({
  id,
  firstName,
  lastName,
  title,
  profileImageUrl,
  availabilityStatus,
  rank,
}: CandidateHeaderProps) {
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="flex  flex-1 gap-4">
      <div>
        <CandidateAvatar
          id={id}
          name={fullName}
          profileImageUrl={profileImageUrl}
          size={50}
        />
      </div>

      <div className="shrink">
        <div className="mb-1">
          <h4 className="text-text-primary text-lg">{fullName}</h4>

          {title && (
            <p className="text-text-secondary text-xs line-clamp-1">{title}</p>
          )}
        </div>

        <AvailabilityBadge status={availabilityStatus} className="mt-1" />
      </div>
      <div className="flex-1 flex justify-end">
        <RankingBadge rank={rank} />
      </div>
    </div>
  );
}
