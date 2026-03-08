"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "@/shared";
import { FieldError } from "@/shared/ui/FieldError";
import { JobPostFormData, jobPostSchema } from "../lib/jobPostSchema";
import { CompanyJob } from "@/entities/company-job";
import { buildNewJob } from "../lib/buildNewJob";
import { FormFields } from "./FormFields";
import { SkillsInput } from "./SkillsInput";

type JobPostFormProps = {
  initialData?: CompanyJob;
  onSubmit?: (data: JobPostFormData) => void;
  onCancel?: () => void;
};

export function JobPostForm({
  initialData,
  onSubmit: onSubmitProp,
  onCancel,
}: JobPostFormProps) {
  const isEditMode = !!initialData;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<JobPostFormData>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          description: initialData.description,
          requirements: initialData.requirements ?? "",
          jobType: initialData.jobType,
          workPreference: initialData.workPreference,
          experienceLevel: initialData.experienceLevel,
          salaryMin: initialData.salaryMin?.toString() ?? "",
          salaryMax: initialData.salaryMax?.toString() ?? "",
          location: initialData.location ?? "",
          deadline: initialData.deadline ?? "",
          skills: initialData.skills.map((s) => s.name),
        }
      : {
          jobType: "FULL_TIME",
          workPreference: "REMOTE",
          experienceLevel: "ENTRY",
          skills: [],
        },
  });

  const skills = watch("skills") ?? [];

  function onSubmit(data: JobPostFormData) {
    if (onSubmitProp) {
      onSubmitProp(data);
    } else {
      console.log(
        "Job posted:",
        buildNewJob(data, { id: "2", logoUrl: "/", name: "ss" }),
      );
      reset();
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <FormFields register={register} control={control} errors={errors} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label label="Deadline" htmlFor="deadline" />
          <Input
            id="deadline"
            type="date"
            className="bg-background"
            {...register("deadline")}
          />
          <FieldError message={errors.deadline?.message} />
        </div>

        <SkillsInput
          register={register}
          setValue={setValue}
          skills={skills}
          error={errors.skills?.message}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-6 border-t border-border/50">
        <Button variant="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? isEditMode
              ? "Saving..."
              : "Publishing..."
            : isEditMode
              ? "Save Changes"
              : "Publish Job"}
        </Button>
      </div>
    </form>
  );
}
