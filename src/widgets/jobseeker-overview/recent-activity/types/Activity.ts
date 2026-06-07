export type ActivityType =
  | "APPLICATION_SUBMITTED"
  | "STATUS_CHANGED"
  | "INTERVIEW_SCHEDULED"
  | "APPLICATION_WITHDRAWN"
  | "APPLICATION_REJECTED"
  | "APPLICATION_ACCEPTED";

export interface RecentActivityItem {
  id: string;
  type: ActivityType;
  applicationId: string;
  jobTitle: string;
  companyName: string;
  companyLogoUrl?: string;
  timestamp: string;
  newStatus: string;
}
