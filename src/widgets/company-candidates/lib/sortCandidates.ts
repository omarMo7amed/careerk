import { Candidate } from "@/entities/candidate";

export function sortCandidates(
  candidates: Candidate[],
  sortBy: string,
): Candidate[] {
  const sorted = [...candidates];
  switch (sortBy) {
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    case "cv_score_high":
      return sorted.sort((a, b) => b.cv_score - a.cv_score);
    case "cv_match_high":
      return sorted.sort(
        (a, b) => b.cv_match_percentage - a.cv_match_percentage,
      );
    case "salary_low":
      return sorted.sort(
        (a, b) =>
          (a.expected_salary ?? Infinity) - (b.expected_salary ?? Infinity),
      );
    case "salary_high":
      return sorted.sort(
        (a, b) =>
          (b.expected_salary ?? -Infinity) - (a.expected_salary ?? -Infinity),
      );
    case "name_az":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name_za":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return candidates;
  }
}
