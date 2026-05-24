export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER_JOB_SEEKER: "/auth/register/job-seeker",
  REGISTER_COMPANY: "/auth/register/company",
  VERIFY_EMAIL: "/auth/verify-email",
  RESEND_VERIFICATION: "/auth/resend-verification",
  REFRESH: "/auth/refresh-token",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  CHANGE_PASSWORD: "/auth/change-password",
} as const;
