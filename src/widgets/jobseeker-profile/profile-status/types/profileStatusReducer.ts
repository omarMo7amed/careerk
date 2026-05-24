import { JobType, WorkPreference } from "@/entities/company-job";
import { AvailabilityStatus } from "@/entities/job-seeker";

export interface EditingState {
  status: "editing";
  availabilityStatus: AvailabilityStatus;
  workPreference: WorkPreference | "";
  preferredJobTypes: JobType[];
  expectedSalary: number | null;
  noticePeriod: string | "";
}

export type State = { status: "idle" } | EditingState;

export type Action =
  | {
      type: "START_EDIT";
      profileStatus: Omit<EditingState, "status">;
    }
  | {
      type: "SET_FIELD";
      field: keyof Omit<EditingState, "status">;
      value: unknown;
    }
  | { type: "CANCEL" }
  | { type: "SAVE_SUCCESS" };
