import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Badge, Input, Label } from "@/shared";
import { FieldError } from "@/shared/ui/FieldError";
import { JobPostFormData } from "../lib/jobPostSchema";
import { X } from "lucide-react";

type SkillsInputProps = {
  register: UseFormRegister<JobPostFormData>;
  setValue: UseFormSetValue<JobPostFormData>;
  skillNames: string[];
  error?: string;
};

export function SkillsInput({
  register,
  setValue,
  skillNames,
  error,
}: SkillsInputProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const input = e.currentTarget;
      const skillName = input.value.trim();

      if (!skillName) return;

      const exists = skillNames.includes(skillName);
      if (exists) return;

      setValue("skillNames", [...skillNames, skillName], {
        shouldValidate: true,
        shouldDirty: true,
      });

      input.value = "";
    }
  }

  function removeSkill(skillName: string) {
    setValue(
      "skillNames",
      skillNames.filter((s) => s !== skillName),
      { shouldValidate: true, shouldDirty: true },
    );
  }

  return (
    <div>
      <Label
        label="Skills (press Enter or comma to add)"
        htmlFor="skillsInput"
      />
      <Input
        id="skillsInput"
        placeholder="Type to add skills..."
        className="bg-background"
        onKeyDown={handleKeyDown}
      />
      <input type="hidden" {...register("skillNames")} />
      <FieldError message={error} />
      {skillNames.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {skillNames.map((skill) => (
            <div key={skill}>
              <Badge variant="skill" className="cursor-pointer">
                {skill}
                <span onClick={() => removeSkill(skill)}>
                  <X className="w-4 h-4" />
                </span>
              </Badge>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
