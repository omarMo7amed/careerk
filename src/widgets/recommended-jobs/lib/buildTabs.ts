import { Job } from "@/entities/job";
import { DynamicTab } from "../types/types";
import {
  experienceLevelLabels,
  jobTypeLabels,
  workPreferenceLabels,
} from "@/entities/company-job";

export function buildTabs(jobs: Job[]): DynamicTab[] {
  const experienceCounts = new Map<string, number>();
  const jobTypeCounts = new Map<string, number>();
  const workPreferences = new Map<string, number>();

  for (const job of jobs) {
    if (job.experienceLevel) {
      const label =
        experienceLevelLabels[
          job.experienceLevel as keyof typeof experienceLevelLabels
        ] ?? job.experienceLevel;
      experienceCounts.set(label, (experienceCounts.get(label) ?? 0) + 1);
    }

    if (job.jobType) {
      const label =
        jobTypeLabels[job.jobType as keyof typeof jobTypeLabels] ?? job.jobType;
      jobTypeCounts.set(label, (jobTypeCounts.get(label) ?? 0) + 1);
    }

    if (job.workPreference) {
      const label =
        workPreferenceLabels[
          job.workPreference as keyof typeof workPreferenceLabels
        ] ?? job.workPreference;
      workPreferences.set(label, (workPreferences.get(label) ?? 0) + 1);
    }
  }

  const sortedExperience = [...experienceCounts.entries()].sort(
    (a, b) => b[1] - a[1],
  );
  const sortedJobTypes = [...jobTypeCounts.entries()].sort(
    (a, b) => b[1] - a[1],
  );
  const sortedWorkPreferences = [...workPreferences.entries()].sort(
    (a, b) => b[1] - a[1],
  );

  return [
    { key: "all", label: "All", count: jobs.length },
    ...sortedExperience.map(([key, count]) => ({
      key,
      label: key,
      count,
    })),
    ...sortedJobTypes.map(([key, count]) => ({
      key,
      label: key,
      count,
    })),
    ...sortedWorkPreferences.map(([key, count]) => ({
      key,
      label: key,
      count,
    })),
  ];
}
