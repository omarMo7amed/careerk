import Card from "@/shared/ui/Card";
import { CardHeader } from "@/shared/ui/CardHeader";
import { JobPostForm } from "@/features/post-job-form";
import BackButton from "@/shared/ui/BackButton";

export function JobPostLayout() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 ">
        <BackButton />
      </div>
      <Card>
        <CardHeader
          title="Post a New Job"
          description=" Fill out the details below to create a new job listing."
        />

        <JobPostForm />
      </Card>
    </div>
  );
}
