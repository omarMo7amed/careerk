import { experienceLevelLabels } from "@/entities/company-job";

export const experienceLevelsOptions = Object.entries(
  experienceLevelLabels,
).map(([value, label]) => ({
  value,
  label,
}));
