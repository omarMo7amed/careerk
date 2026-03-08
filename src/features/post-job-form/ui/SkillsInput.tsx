import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Badge, Input, Label } from "@/shared";
import { FieldError } from "@/shared/ui/FieldError";
import { JobPostFormData } from "../lib/jobPostSchema";
import { X } from "lucide-react";

type SkillsInputProps = {
  register: UseFormRegister<JobPostFormData>;
  setValue: UseFormSetValue<JobPostFormData>;
  skills: string[];
  error?: string;
};

export function SkillsInput({
  register,
  setValue,
  skills,
  error,
}: SkillsInputProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const input = e.currentTarget;
      const skill = input.value.trim();
      if (skill && !skills.includes(skill)) {
        setValue("skills", [...skills, skill], {
          shouldValidate: true,
          shouldDirty: true,
        });
        input.value = "";
      }
    }
  }

  function removeSkill(skill: string) {
    setValue(
      "skills",
      skills.filter((s) => s !== skill),
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
      <input type="hidden" {...register("skills")} />
      <FieldError message={error} />
      {skills.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
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
