export type ApplicationStatus =
  | "PENDING"
  | "REVIEWED"
  | "SHORTLISTED"
  | "INTERVIEW_SCHEDULED"
  | "REJECTED"
  | "HIRED"
  | "WITHDRAWN";

export type JobType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";

export type WorkPreference = "REMOTE" | "HYBRID" | "ONSITE";

export interface ApplicationListItem {
  id: string;
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  directJob: {
    id: string;
    title: string;
    location: string;
    jobType: JobType;
    workPreference: WorkPreference;
    company: {
      id: string;
      name: string;
      logoUrl: string | null;
    };
  };
}

export interface ApplicationsListResponse {
  success: boolean;
  data: {
    applications: ApplicationListItem[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  message: string;
}
