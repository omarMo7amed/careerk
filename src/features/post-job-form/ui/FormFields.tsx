import {
  UseFormRegister,
  Control,
  Controller,
  FieldErrors,
} from "react-hook-form";
import { Input, Label, Select } from "@/shared";
import { FieldError } from "@/shared/ui/FieldError";
import { JobPostFormData } from "../lib/jobPostSchema";
import { jobStatusOptions } from "../constant/jobStatusOptions";
import { jobTypesOptions } from "../constant/jobTypes";
import { workPreferencesOptions } from "../constant/workPreferences";
import { experienceLevelsOptions } from "../constant/experienceLevels";

type FormFieldsProps = {
  register: UseFormRegister<JobPostFormData>;
  control: Control<JobPostFormData>;
  errors: FieldErrors<JobPostFormData>;
};

export function FormFields({ register, control, errors }: FormFieldsProps) {
  return (
    <>
      <div>
        <Label htmlFor="title" label="Job Title" />
        <Input
          id="title"
          placeholder="e.g., Senior Frontend Developer"
          className="bg-background"
          {...register("title")}
        />
        <FieldError message={errors.title?.message} />
      </div>

      <div>
        <Label htmlFor="description" label="Job Description" />
        <textarea
          id="description"
          placeholder="Describe the role, responsibilities, and company culture..."
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background resize-none"
          {...register("description")}
        />
        <FieldError message={errors.description?.message} />
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Controller
          name="jobType"
          control={control}
          render={({ field }) => (
            <Select
              label="Job Type"
              options={jobTypesOptions}
              className="bg-background border-border"
              {...field}
            />
          )}
        />
        <Controller
          name="workPreference"
          control={control}
          render={({ field }) => (
            <Select
              label="Work Preference"
              options={workPreferencesOptions}
              className="bg-background border-border"
              {...field}
            />
          )}
        />
        <Controller
          name="experienceLevel"
          control={control}
          render={({ field }) => (
            <Select
              label="Experience Level"
              options={experienceLevelsOptions}
              className="bg-background border-border"
              {...field}
            />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              label="Status"
              options={jobStatusOptions}
              className="bg-background border-border"
              {...field}
            />
          )}
        />
      </div>

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
    </>
  );
}
