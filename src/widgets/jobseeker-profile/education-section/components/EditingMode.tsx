import { useEducationContext } from "../model/EducationContext";
import { EducationItem } from "./EducationItem";
import { AddEducationSection } from "./AddEducationSection";
import { EditingActions } from "./EditingActions";

export function EditingMode() {
  const { educations } = useEducationContext();

  return (
    <div className="flex flex-col gap-4">
      {educations.map((edu, idx) => (
        <EducationItem key={idx} education={edu} index={idx} />
      ))}

      <AddEducationSection />
      <EditingActions />
    </div>
  );
}
