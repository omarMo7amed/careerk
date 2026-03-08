import { Button } from "@/shared";

export function CTA() {
  return (
    <section className="bg-foreground  flex items-center justify-center flex-col p-4 h-[400px] border-b border-border">
      <div className="max-w-md text-white flex flex-col items-center">
        <h2 className="text-4xl text-white font-bold mb-2">
          Looking for Top Talent?
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Post a job and let the best candidates come to you.
        </p>
        <div className="flex gap-2">
          {/* <JobPostForm /> */}
          <Button variant="outline" className="text-white">
            Post a Job
          </Button>
          {/* we will replace this button */}
          <button className="bg-transparent border border-border text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}
