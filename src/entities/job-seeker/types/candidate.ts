import { JobType } from "@/entities/company-job";
import { AvailabilityStatus } from "./availabilityStatus";

export type GetCandidatesOptions = {
  signal?: AbortSignal;
  page?: number;
  limit?: number;
  search?: string;
  location?: string;
  workPreference?: string[];
  availabilityStatus?: AvailabilityStatus[];
  preferredJobTypes?: JobType[];
  enabled?: boolean;
};
