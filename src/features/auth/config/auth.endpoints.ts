/**
 * LOCAL endpoints — these hit the Next.js proxy routes at /api/v1/auth/*
 * The proxy forwards requests to the real backend server-side, which
 * solves the cross-origin cookie issue (refresh token cookie is set
 * on localhost instead of the external backend domain).
 */
export const AUTH_ENDPOINTS = {
  LOGIN: "/api/v1/auth/login",
  REGISTER_JOB_SEEKER: "/auth/register/job-seeker",
  REGISTER_COMPANY: "/auth/register/company",
  VERIFY_EMAIL: "/auth/verify-email",
  RESEND_VERIFICATION: "/auth/resend-verification",
  REFRESH: "/api/v1/auth/refresh-token",
  LOGOUT: "/api/v1/auth/logout",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  CHANGE_PASSWORD: "/auth/change-password",
} as const;
