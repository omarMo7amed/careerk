import { JobSeekerSkill } from "../types/skill";
import { cn } from "@/shared";
import { BadgeCheck } from "lucide-react";

export default function Skill({
  skill,
  index,
}: {
  skill: JobSeekerSkill;
  index: number;
}) {
  return (
    <>
      {skill.verified ? (
        <span
          className={cn(
            "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",
            "bg-primary/10 text-primary border border-primary/20",
          )}
        >
          <BadgeCheck className="w-3.5 h-3.5" />
          {skill.name}
        </span>
      ) : (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-bg-muted text-text-secondary border border-border">
          {skill.name}
        </span>
      )}
    </>
  );
}
