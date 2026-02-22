import type { CandidateMetaItemProps } from "../types/candidateMetaItem";

export function CandidateMetaItem({ icon, label }: CandidateMetaItemProps) {
  return (
    <div className="flex flex-1 items-center bg-bg-muted gap-2 rounded-md mt-2 p-2">
      <div className="">{icon}</div>
      <div className="text-text-secondary text-nowrap text-xs">{label}</div>
    </div>
  );
}
