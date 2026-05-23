import { DollarSign, BriefcaseBusiness, MapPin } from "lucide-react";
import { CandidateMetaItem } from "@/entities/job-seeker";

interface Props {
  location: string | null | undefined;
  workPreference: string | null | undefined;
  expectedSalary: number | null | undefined;
}

export function ApplicationMeta({
  location,
  workPreference,
  expectedSalary,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center text-xs">
      <CandidateMetaItem
        icon={<MapPin className="w-3.5 h-3.5 text-text-secondary" />}
        label={location}
      />
      <CandidateMetaItem
        icon={<BriefcaseBusiness className="w-3.5 h-3.5 text-text-secondary" />}
        label={workPreference}
      />
      <CandidateMetaItem
        icon={<DollarSign className="w-3.5 h-3.5 text-text-secondary" />}
        label={expectedSalary}
      />
    </div>
  );
}
