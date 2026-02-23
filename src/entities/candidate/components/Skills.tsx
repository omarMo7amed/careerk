import { Badge } from "@/shared";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {skills.map((skill) => (
        <Badge key={skill} size="sm" className="font-medium " variant="info">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
