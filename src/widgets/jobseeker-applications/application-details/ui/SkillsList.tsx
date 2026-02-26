import { ApplicationDetails } from "@/entities/application";
import { Badge } from "@/shared";

interface SkillsListProps {
  skills: ApplicationDetails["directJob"]["skills"];
}

export function SkillsList({ skills }: SkillsListProps) {
  if (skills.length === 0) return null;
  const items = skills.map((item) => item.skill.name);
  return (
    <div>
      <p className="text-sm text-text-secondary mb-3">REQUIRED SKILLS</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Badge size="sm" key={index} className="bg-blue-50 text-blue-700">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
