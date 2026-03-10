import { NewJobButton } from "@/features/post-job-form";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-gray-900 flex items-center justify-center flex-col p-4 h-[400px] border-y border-border">
      <div className="max-w-md flex flex-col items-center">
        <h2 className="text-white mb-2">Looking for Top Talent?</h2>
        <p className="text-lg text-white/70 mb-6">
          Post a job and let the best candidates come to you.
        </p>
        <div className="flex gap-2">
          <NewJobButton variant="primary" />
          <Link
            href="/auth/register?type=employer"
            className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-md"
          >
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
