import { JobSeekerProfile } from "@/entities/job-seeker";

export interface DisplayModeProps {
  fullName: string;
  profile: JobSeekerProfile;
  isOwner?: boolean;
  onEdit?: () => void;
}
