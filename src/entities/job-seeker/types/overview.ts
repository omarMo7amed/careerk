export interface OverviewData {
  hasProfile: boolean;
  profileImageUrl: string | null;
  linkedIn: string | null;
  github: string | null;
  recommendedJobsCount: number;
  savedJobsCount: number;
}

export interface OverviewSuccessResponse {
  success: true;
  data: OverviewData;
  message: string;
}

export interface OverviewErrorResponse {
  success: false;
  error: {
    message: string;
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
  };
}

export type OverviewResponse = OverviewSuccessResponse | OverviewErrorResponse;
