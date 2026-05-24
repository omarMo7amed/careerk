import { DeleteAccountButton } from "@/features/delete-account";
import { AlertTriangle } from "lucide-react";

export function DangerZoneTab() {
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
          <h3 className="font-bold text-lg mb-2">Delete Account</h3>
          <p className="text-sm text-text-secondary mb-4">
            Once you delete your account, there is no going back. This will
            permanently delete your profile, all job applications, and
            associated data.
          </p>
          <DeleteAccountButton />
        </div>
      </div>
    </div>
  );
}
