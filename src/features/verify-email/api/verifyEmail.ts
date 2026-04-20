import type {
  VerifyEmailRequest,
  VerifyEmailResponse,
  VerifyEmailErrorResponse,
} from "../types/verifyEmail";

export async function verifyEmail(
  request: VerifyEmailRequest,
): Promise<VerifyEmailResponse | VerifyEmailErrorResponse> {
  console.log("[Mock API] Email verified successfully");

  return {
    success: true,
    data: {
      id: "550e8400-e29b-41d4-a716-446655440000",
      email: request.email,
      firstName: "John",
      lastName: "Doe",
      profileImageUrl: null,
      isActive: true,
      isVerified: true,
      lastLoginAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      meta: {
        timestamp: new Date().toISOString(),
        path: "/auth/verify-email",
        method: "POST",
      },
    },
    message: "Email verified successfully. You are now logged in.",
  };
}
