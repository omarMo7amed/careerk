import { JobType, WorkPreference } from "@/entities/job-seeker";
import { AvailabilityStatus } from "@/shared";

export interface EditingModeProps {
  availability: AvailabilityStatus | "";
  workPreference: WorkPreference | "";
  preferredJobTypes: JobType[];
  expectedSalary: number | null;
  noticePeriod: string;
  isPending: boolean;
  onChangeAvailability: (val: AvailabilityStatus | "") => void;
  onChangeWorkPreference: (val: WorkPreference | "") => void;
  onToggleJobType: (type: JobType) => void;
  onChangeSalary: (val: string) => void;
  onChangeNotice: (val: string) => void;
  onSave: () => void;
  onCancel: () => void;
}