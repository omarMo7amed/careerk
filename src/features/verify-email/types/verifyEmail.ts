export interface VerifyEmailRequest {
  email: string;
  code: string;
}

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
    lastLoginAt: string;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
    meta: {
      timestamp: string;
      path: string;
      method: string;
    };
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
    meta: {
      timestamp: string;
      path: string;
      method: string;
    };
  };
  message: string;
}

export type VerifyEmailResponse =
  | JobSeekerVerifyResponse
  | CompanyVerifyResponse;

export interface VerifyEmailErrorResponse {
  success: false;
  error: {
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
  };
  message: string;
}

// resend otp types
export interface ResendOtpRequest {
  email: string;
}

export interface ResendOtpResponse {
  success: boolean;
  data: null;
  message: string;
}

export interface ResendOtpErrorResponse {
  success: false;
  data: {
    statusCode: number;
    timestamp: string;
    path: string;
    method: string;
  };
  message: string;
}
