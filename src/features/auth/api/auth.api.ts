import { AUTH_ENDPOINTS } from "../config/auth.endpoints";
import type {
  LoginRequest,
  LoginResponse,
  RegisterJobSeekerRequest,
  RegisterCompanyRequest,
  RegisterResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  ResendVerificationRequest,
  ResendVerificationResponse,
  RefreshTokenResponse,
  LogoutResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
} from "./auth.types";

const BASE_URL = process.env.BASE_API_URL ?? "http://localhost:3000/api/v1";

async function post<TBody, TResponse>(
  endpoint: string,
  body?: TBody,
  options?: RequestInit,
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message ?? "Request failed");
  }

  return res.json() as Promise<TResponse>;
}

// ─── Auth API ────────────────────────────────────────────────────────────────

export const authApi = {
  login(data: LoginRequest): Promise<LoginResponse> {
    return post(AUTH_ENDPOINTS.LOGIN, data);
  },

  registerJobSeeker(data: RegisterJobSeekerRequest): Promise<RegisterResponse> {
    return post(AUTH_ENDPOINTS.REGISTER_JOB_SEEKER, data);
  },

  registerCompany(data: RegisterCompanyRequest): Promise<RegisterResponse> {
    return post(AUTH_ENDPOINTS.REGISTER_COMPANY, data);
  },

  verifyEmail(data: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    return post(AUTH_ENDPOINTS.VERIFY_EMAIL, data);
  },

  resendVerification(
    data: ResendVerificationRequest,
  ): Promise<ResendVerificationResponse> {
    return post(AUTH_ENDPOINTS.RESEND_VERIFICATION, data);
  },

  /**
   * Sends the refresh token via HttpOnly cookie automatically.
   * The backend reads it and returns a new access token.
   */
  refresh(): Promise<RefreshTokenResponse> {
    return post(AUTH_ENDPOINTS.REFRESH, undefined, {
      credentials: "include",
    });
  },

  /**
   * The backend clears the HttpOnly refresh-token cookie.
   */
  logout(): Promise<LogoutResponse> {
    return post(AUTH_ENDPOINTS.LOGOUT, undefined, {
      credentials: "include",
    });
  },

  forgotPassword(data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    return post(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);
  },

  resetPassword(data: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
  },

  changePassword(
    data: ChangePasswordRequest,
    accessToken: string,
  ): Promise<ChangePasswordResponse> {
    return post(AUTH_ENDPOINTS.CHANGE_PASSWORD, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
