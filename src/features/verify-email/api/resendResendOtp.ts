import type {
  ResendOtpRequest,
  ResendOtpResponse,
  ResendOtpErrorResponse,
} from "../types/verifyEmail";

export async function resendOtp(
  request: ResendOtpRequest,
): Promise<ResendOtpResponse | ResendOtpErrorResponse> {
  console.log(" OTP resent successfully");

  return {
    success: true,
    data: null,
    message: "Verification email sent successfully",
  };
}
