export interface JobSeekerVerifyResponse {
  success: boolean;
  data: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImageUrl: string | null;
    isActive: boolean;
    isVerified: boolean;
    hasProfile: boolean;
    linkedIn: string | null;
    github: string | null;
    totalRecommendedJobs: number;
    lastLoginAt: string;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
  };
  message: string;
}

export interface CompanyVerifyResponse {
  success: boolean;
  data: {
    id: string;
    email: string;
    name: string;
    description: string | null;
    logoUrl: string | null;
    coverUrl: string | null;
    industry: string;
    size: string;
    type: string;
    headquartersLocation: string | null;
    foundedYear: number | null;
    websiteUrl: string | null;
    benefits: string | null;
    linkedIn: string | null;
    facebook: string | null;
    twitter: string | null;
    isActive: boolean;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
  };
  message: string;
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = JobSeekerVerifyResponse | CompanyVerifyResponse;

export interface VerifyEmailRequest {
  email: string;
  code: string;
}
