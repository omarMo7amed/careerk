import { WorkPreference } from "@/entities/company-job";

export const WORK_PREFERENCE_LABELS: Record<WorkPreference, string> = {
  REMOTE: "Remote",
  ONSITE: "On-site",
  HYBRID: "Hybrid",
  ANY: "Other",
};

export type AvailabilityStatus =
  | "OPEN_TO_WORK"
  | "NOT_LOOKING"
  | "PASSIVELY_LOOKING";

export const AVAILABILITY_STATUS_LABELS: Record<AvailabilityStatus, string> = {
  OPEN_TO_WORK: "Open to Work",
  NOT_LOOKING: "Not Looking",
  PASSIVELY_LOOKING: "Passively Looking",
};
