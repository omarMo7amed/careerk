import { VerifyEmailForm } from "@/features/verify-email";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { Loader } from "@/shared";

function VerifyEmailContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <VerifyEmailForm />
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<Loader />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
