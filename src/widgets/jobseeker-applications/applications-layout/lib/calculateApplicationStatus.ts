import { ApplicationListItem } from "@/entities/application";
export function calculateApplicationStatus(
  applications: ApplicationListItem[],
) {
  const active = applications.filter((app) =>
    ["PENDING", "REVIEWED", "SHORTLISTED"].includes(app.status),
  ).length;
  const interviews = applications.filter(
    (app) => app.status === "INTERVIEW_SCHEDULED",
  ).length;
  const rejected = applications.filter(
    (app) => app.status === "REJECTED",
  ).length;

  return {
    active,
    interviews,
    rejected,
  };
}
