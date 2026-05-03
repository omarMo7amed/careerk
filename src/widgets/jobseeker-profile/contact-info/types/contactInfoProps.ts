import { JobSeekerProfile } from "@/entities/job-seeker";

export type ContactInfoData = Pick<
  JobSeekerProfile,
  "phone" | "cvEmail" | "location" | "noticePeriod"
>;

export interface ContactInfoRootProps {
  isOwner?: boolean;
}

export interface ContactInfoProps {
  contactInfo: ContactInfoData;
}

export interface EditableContactInfoProps extends ContactInfoProps {
  isOwner?: boolean;
}
