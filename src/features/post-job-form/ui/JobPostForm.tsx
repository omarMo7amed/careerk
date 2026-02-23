"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Badge, Button, Input } from "@/shared";
import Label from "@/shared/ui/Label";
import Select from "@/shared/ui/Select";
import { employmentTypes } from "../mock-data/employmentTypes";
import { workArrangements } from "../mock-data/workArrangements";
import { experienceLevels } from "../mock-data/experienceLevels";
import { FieldError } from "@/shared/ui/FieldError";
import { JobPostFormData, jobPostSchema } from "../lib/jobPostSchema";

export function JobPostForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<JobPostFormData>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      employmentType: "full-time",
      workArrangement: "remote",
      experienceLevel: "entry",
      skills: ["JavaScript", "React"],
    },
  });

  const skills = watch("skills") ?? [];

  function handleSkillKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const input = e.currentTarget;
      const skill = input.value.trim();
      if (skill && !skills.includes(skill)) {
        setValue("skills", [...skills, skill], { shouldValidate: true });
        input.value = "";
      }
    }
  }

  function removeSkill(skill: string) {
    setValue(
      "skills",
      skills.filter((s) => s !== skill),
      { shouldValidate: true },
    );
  }

  function onSubmit(data: JobPostFormData) {
    console.log("Form submitted:", data);
    reset();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Job Title */}
      <div>
        <Label htmlFor="jobTitle" label="Job Title" />
        <Input
          id="jobTitle"
          placeholder="e.g., Senior Frontend Developer"
          className="bg-background"
          {...register("jobTitle")}
        />
        <FieldError message={errors.jobTitle?.message} />
      </div>

      {/* Job Description */}
      <div>
        <Label htmlFor="jobDescription" label="Job Description" />
        <textarea
          id="jobDescription"
          placeholder="Describe the role, responsibilities, and company culture..."
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background resize-none"
          {...register("jobDescription")}
        />
        <FieldError message={errors.jobDescription?.message} />
      </div>

      {/* Requirements */}
      <div>
        <Label htmlFor="requirements" label="Requirements" />
        <textarea
          id="requirements"
          placeholder="List the required skills, qualifications, and experience..."
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background resize-none"
          {...register("requirements")}
        />
        <FieldError message={errors.requirements?.message} />
      </div>

      {/* Employment Type, Work Arrangement, Experience Level */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          name="employmentType"
          label="Employment Type"
          options={employmentTypes}
          className="bg-background border-border"
          value={watch("employmentType")}
          onChange={(e) =>
            setValue(
              "employmentType",
              e.target.value as JobPostFormData["employmentType"],
            )
          }
        />

        <Select
          name="workArrangement"
          label="Work Arrangement"
          options={workArrangements}
          className="bg-background border-border"
          value={watch("workArrangement")}
          onChange={(e) =>
            setValue(
              "workArrangement",
              e.target.value as JobPostFormData["workArrangement"],
            )
          }
        />

        <Select
          name="experienceLevel"
          label="Experience Level"
          options={experienceLevels}
          className="bg-background border-border"
          value={watch("experienceLevel")}
          onChange={(e) =>
            setValue(
              "experienceLevel",
              e.target.value as JobPostFormData["experienceLevel"],
            )
          }
        />
      </div>

      {/* Salary Range and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label label="Salary Range" />
          <div className="flex items-center gap-2">
            <Input
              placeholder="Minimum"
              className="bg-background"
              {...register("salaryMin")}
            />
            <span className="text-text-secondary">-</span>
            <Input
              placeholder="Maximum"
              className="bg-background"
              {...register("salaryMax")}
            />
          </div>
          <FieldError message={errors.salaryMin?.message} />
          <FieldError message={errors.salaryMax?.message} />
        </div>

        <div>
          <Label htmlFor="location" label="Location" />
          <Input
            id="location"
            placeholder="e.g., San Francisco, CA or 'Remote'"
            className="bg-background"
            {...register("location")}
          />
          <FieldError message={errors.location?.message} />
        </div>
      </div>

      {/* Application Deadline and Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label label="Application Deadline" htmlFor="deadline" />
          <Input
            id="deadline"
            type="date"
            className="bg-background"
            {...register("deadline")}
          />
          <FieldError message={errors.deadline?.message} />
        </div>

        <div>
          <Label
            label="Skills (press Enter or comma to add)"
            htmlFor="skillsInput"
          />
          <Input
            id="skillsInput"
            placeholder="Type to add skills..."
            className="bg-background"
            onKeyDown={handleSkillKeyDown}
          />
          {/* Hidden field keeps skills array registered with RHF */}
          <input type="hidden" {...register("skills")} />
          <FieldError message={errors.skills?.message} />

          {skills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div key={skill} onClick={() => removeSkill(skill)}>
                  <Badge variant="skill" className="cursor-pointer">
                    {skill} ×
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3 pt-6 border-t border-border/50">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish Job"}
        </Button>
      </div>
    </form>
  );
}
