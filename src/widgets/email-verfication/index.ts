export { VerifyEmailForm } from "./ui/verifyEmailForm";
export { OtpInput } from "./ui/OtpInput";
export { ResendButton } from "./ui/ResendButton";
export { ExpiryTimer } from "./ui/ExpiryTimer";

export { verifyEmailSchema, resendOtpSchema } from "./model/verifyEmailSchema";

export type {
  VerifyEmailFormData,
  ResendOtpFormData,
} from "./model/verifyEmailSchema";

export type {
  VerifyEmailRequest,
  VerifyEmailResponse,
  JobSeekerVerifyResponse,
  CompanyVerifyResponse,
  ResendOtpRequest,
  ResendOtpResponse,
} from "./types/verifyEmail";
