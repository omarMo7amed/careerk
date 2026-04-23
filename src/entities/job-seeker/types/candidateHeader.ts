import { AvailabilityStatus } from "./availabilityStatus";

export interface CandidateHeaderProps {
  id: string;
  firstName: string;
  lastName: string;
  title?: string | null;
  profileImageUrl?: string | null;
  rank: number;
  availabilityStatus: AvailabilityStatus;
}
