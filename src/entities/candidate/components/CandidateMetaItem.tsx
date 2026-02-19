import type { CandidateMetaItemProps } from "../types/candidateMetaItem";

export function CandidateMetaItem({ icon, label }: CandidateMetaItemProps) {
  return (
    <div className="flex flex-wrap items-center bg-bg-muted gap-2 rounded-md mt-2 p-2">
      <div className="shrink-0">{icon}</div>
      <div className="text-text-secondary text-xs">{label}</div>
    </div>
  );
}
