import { AvailabilityStatus } from "@/shared";

export interface CandidateHeaderProps {
  id: string;
  firstName: string;
  lastName: string;
  title?: string | null;
  avatarUrl?: string | null;
  rank: number;
  availabilityStatus: AvailabilityStatus;
}
