import { EducationCard } from "@/entities/education";
import { useEducationContext } from "../model/EducationContext";

export function DisplayMode() {
  const { educations } = useEducationContext();

  if (!educations.length)
    return <p className="text-text-muted text-sm">No education entries yet.</p>;

  return (
    <div className="flex flex-col gap-4">
      {educations.map((edu, idx) => (
        <EducationCard key={idx} education={edu} />
      ))}
    </div>
  );
}
