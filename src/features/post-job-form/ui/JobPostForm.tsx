"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "@/shared";
import { FieldError } from "@/shared/ui/FieldError";
import { JobPostFormData, jobPostSchema } from "../lib/jobPostSchema";
import { CompanyJob, useCreateCompanyJob } from "@/entities/company-job";
import { FormFields } from "./FormFields";
import { SkillsInput } from "./SkillsInput";

type JobPostFormProps = {
  initialData?: CompanyJob;
  onSubmit?: (data: JobPostFormData) => void;
  onCancel?: () => void;
  onSuccess?: () => void;
};

export function JobPostForm({
  initialData,
  onSubmit: onSubmitProp,
  onCancel,
  onSuccess,
}: JobPostFormProps) {
  const isEditMode = !!initialData;
  const { mutateAsync: createJob, isPending: isCreating } =
    useCreateCompanyJob();

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
          skillNames:
            initialData.skills?.map((s) =>
              typeof s === "string" ? s : s.name,
            ) ?? [],
        }
      : {
          jobType: "FULL_TIME",
          workPreference: "REMOTE",
          experienceLevel: "ENTRY",
          skillNames: [],
        },
  });

  const skillNames = watch("skillNames") ?? [];
  const isLoading = isSubmitting || isCreating;

  async function onSubmit(data: JobPostFormData) {
    if (onSubmitProp) {
      onSubmitProp(data);
      console.log("Job edit:", data);
      return;
    }

    await createJob(data);
    console.log("Job posted:", data);

    reset();
    onSuccess?.();
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
          skillNames={skillNames}
          error={errors.skillNames?.message}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-6 border-t border-border/50">
        <Button variant="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isLoading
            ? isEditMode
              ? "Saving..."
              : "Creating..."
            : isEditMode
              ? "Save Changes"
              : "Create Job"}
        </Button>
      </div>
    </form>
  );
}
