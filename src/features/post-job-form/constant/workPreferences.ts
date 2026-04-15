import { workPreferenceLabels } from "@/entities/company-job";

export const workPreferencesOptions = Object.entries(workPreferenceLabels).map(
  ([value, label]) => ({
    value,
    label,
  }),
);
