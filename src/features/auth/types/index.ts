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
  message: string;
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

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
}
