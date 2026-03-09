import { cn } from "@/shared";
import Link from "next/link";

export function NewJobButton({
  variant = "primary",
}: {
  variant?: "primary" | "outline";
}) {
  return (
    <Link
      href="/dashboard/company/job-listings/post-new-job"
      className={cn(
        "px-4 py-2  transition-colors rounded-lg",
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary/90"
          : "border-2 border-border text-primary hover:bg-primary/10",
      )}
    >
      Post a Job
    </Link>
  );
}
