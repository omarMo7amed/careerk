import { Job } from "@/entities/job";
import { TYPE_LABELS, WORK_LABELS } from "./constants";
import { DynamicTab } from "../types/types";

export function buildTabs(jobs: Job[]): DynamicTab[] {
  const workCounts = new Map<string, number>();
  const typeCounts = new Map<string, number>();

  for (const job of jobs) {
    workCounts.set(
      job.workArrangement,
      (workCounts.get(job.workArrangement) ?? 0) + 1,
    );
    if (job.employmentType) {
      typeCounts.set(
        job.employmentType,
        (typeCounts.get(job.employmentType) ?? 0) + 1,
      );
    }
  }

  const sortedWork = [...workCounts.entries()].sort((a, b) => b[1] - a[1]);
  const sortedType = [...typeCounts.entries()].sort((a, b) => b[1] - a[1]);

  return [
    { key: "all", label: "All", count: jobs.length },
    ...sortedWork.map(([key, count]) => ({
      key,
      label: WORK_LABELS[key] ?? key,
      count,
    })),
    ...sortedType.map(([key, count]) => ({
      key,
      label: TYPE_LABELS[key] ?? key,
      count,
    })),
  ];
}
