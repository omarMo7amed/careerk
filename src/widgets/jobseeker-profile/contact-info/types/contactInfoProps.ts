import { JobSeekerProfile } from "@/entities/job-seeker";

export type ContactInfoData = Pick<
  JobSeekerProfile,
  "phone" | "cvEmail" | "location"
>;

export interface ContactInfoRootProps {
  isOwner?: boolean;
  contactInfo: ContactInfoData;
}

export interface ContactInfoProps {
  contactInfo: ContactInfoData;
}

export interface EditableContactInfoProps extends ContactInfoProps {
  isOwner?: boolean;
}
