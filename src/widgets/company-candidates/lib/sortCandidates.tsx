import { JobSeeker } from "@/entities/job-seeker";

export function sortCandidates(candidates: JobSeeker[], sortBy: string) {
  const sorted = [...candidates];

  switch (sortBy) {
    case "cv_score_high":
      sorted.sort(
        (a, b) => (b.profile?.cvScore ?? 0) - (a.profile?.cvScore ?? 0),
      );
      break;

    case "cv_match_high":
      sorted.sort(
        (a, b) =>
          (b.profile?.cvMatchPercentage ?? 0) -
          (a.profile?.cvMatchPercentage ?? 0),
      );
      break;

    case "salary_low":
      sorted.sort(
        (a, b) =>
          (a.profile?.expectedSalary ?? 0) - (b.profile?.expectedSalary ?? 0),
      );
      break;

    case "salary_high":
      sorted.sort(
        (a, b) =>
          (b.profile?.expectedSalary ?? 0) - (a.profile?.expectedSalary ?? 0),
      );
      break;

    case "name_az":
      sorted.sort((a, b) =>
        `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`,
        ),
      );
      break;

    case "name_za":
      sorted.sort((a, b) =>
        `${b.firstName} ${b.lastName}`.localeCompare(
          `${a.firstName} ${a.lastName}`,
        ),
      );
      break;

    case "best_match":
    default:
      break;
  }

  return sorted;
}
