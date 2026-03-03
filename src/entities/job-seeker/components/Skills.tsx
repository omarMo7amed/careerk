import { Badge } from "@/shared";
import { JobSeekerSkill } from "@/entities/skill";

export default function Skills({ skills }: { skills: JobSeekerSkill[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {skills.map((skill) => (
        <Badge
          key={skill.name}
          size="sm"
          className="font-medium "
          variant="info"
        >
          {skill.name}
        </Badge>
      ))}
    </div>
  );
}
