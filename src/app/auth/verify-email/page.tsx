import { Suspense } from "react";
import { Loader } from "@/shared";
import { VerifyEmailForm } from "@/widgets/email-verfication";

function VerifyEmailContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
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
