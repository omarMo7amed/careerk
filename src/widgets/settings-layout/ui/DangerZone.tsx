import { DeleteAccountButton } from "@/features/delete-account";
import { AlertTriangle } from "lucide-react";

interface DangerZoneTabProps {
  role: "jobseeker" | "company";
}

export function DangerZoneTab({ role }: DangerZoneTabProps) {
  const description =
    role === "jobseeker"
      ? "Your account will be deactivated and your profile hidden from searches. All your data is preserved and you can contact support to reactivate."
      : "Your company account will be deactivated and all associated jobs and data will be hidden. Contact support to reactivate.";

  return (
    <div className="bg-error/5 rounded-xl border-2 border-error/30 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-error" />
        </div>
        <h2 className="text-xl font-bold text-error">Danger Zone</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-bg-surface rounded-xl border border-error/30 p-6">
          <h3 className="font-bold text-lg mb-2">Deactivate Account</h3>
          <p className="text-sm text-text-secondary mb-4">{description}</p>
          <DeleteAccountButton />
        </div>
      </div>
    </div>
  );
}
