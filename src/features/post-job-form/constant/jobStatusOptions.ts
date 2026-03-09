import { JobStatusLabels } from "@/entities/company-job/lib/labelMap";

export const jobStatusOptions = Object.entries(JobStatusLabels).map(
  ([value, label]) => ({
    value,
    label,
  }),
);
