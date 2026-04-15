import { jobTypeLabels } from "@/entities/company-job";

export const jobTypesOptions = Object.entries(jobTypeLabels).map(
  ([value, label]) => ({
    value,
    label,
  }),
);
