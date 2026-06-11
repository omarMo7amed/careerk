import { JobPostLayout } from "@/widgets/company-post-job";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a New Job",
  description:
    "Create and publish a new job listing to attract qualified candidates and grow your team.",
};

function PostJobPage() {
  return (
    <div className="py-8">
      <JobPostLayout />
    </div>
  );
}

export default PostJobPage;
