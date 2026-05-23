import { ForgotPasswordForm } from "@/widgets/forgot-password/ui/ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password",
  description: "Reset your password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
