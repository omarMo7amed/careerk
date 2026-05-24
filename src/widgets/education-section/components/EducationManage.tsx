import { useEducationContext } from "../model/EducationContext";
import { EducationItem } from "./EducationItem";
import { AddEducationSection } from "./AddEducationSection";
import { Education } from "@/entities/education";

export function EducationManage() {
  const { educations, isOwner } = useEducationContext();

  return (
    <div className="flex flex-col gap-4">
      {educations.map((edu: Education, idx: number) => (
        <EducationItem
          key={edu.id || idx.toString()}
          education={edu}
          index={idx}
        />
      ))}
      {isOwner && <AddEducationSection />}
    </div>
  );
}
