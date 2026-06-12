export type LoginRequest = {
  email: string;
  password: string;
};

export interface VerifyEmailRequest {
  email: string;
  code: string;
}

// ─── Register ─────────────────────────────────────────────────────────────────

export interface RegisterJobSeekerRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterCompanyRequest {
  name: string;
  email: string;
  password: string;
  industry: string;
  size: string;
  type: string;
}

export interface RegisterResponse {
  success: boolean;
  data: {
    email: string;
    role: "job-seeker" | "company";
  };
  message: string;
  meta: {
    timestamp: string;
    path: string;
    method: string;
  };
}
// ─── Email Verification ───────────────────────────────────────────────────────

// ─── Token ────────────────────────────────────────────────────────────────────

export interface RefreshTokenResponse {
  accessToken: string;
  // user: LoginResponse;
}

export interface LogoutResponse {
  message: string;
}

// ─── Password ─────────────────────────────────────────────────────────────────

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface ResetPasswordResponse {
  message: string;
}


