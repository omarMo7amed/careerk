import { useState } from "react";
import { JobSeekerSkill } from "@/entities/skill";

export function useVerifiedSkillRemoval(removeSkill: (id: string) => void) {
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [skillToRemove, setSkillToRemove] = useState<{
    id: string | number;
    name: string;
  } | null>(null);

  const handleRemoveClick = (skill: JobSeekerSkill, index: number) => {
    if (skill.verified) {
      setSkillToRemove({
        id: skill.skillId || index,
        name: skill.name,
      });
      setIsWarningOpen(true);
    } else {
      removeSkill(skill?.skillId || index.toString());
    }
  };

  const handleConfirmRemoveVerified = () => {
    if (skillToRemove) {
      removeSkill(skillToRemove.id.toString());
      closeWarning();
    }
  };

  const closeWarning = () => {
    setIsWarningOpen(false);
    setSkillToRemove(null);
  };

  return {
    isWarningOpen,
    skillToRemove,
    handleRemoveClick,
    handleConfirmRemoveVerified,
    closeWarning,
  };
}
