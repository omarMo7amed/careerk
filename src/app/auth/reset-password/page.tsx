import { ResetPasswordForm } from "@/widgets/forgot-password/ui/ResetPasswordForm";

export const metadata = {
  title: "Reset Password",
  description: "Reset your account password",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
