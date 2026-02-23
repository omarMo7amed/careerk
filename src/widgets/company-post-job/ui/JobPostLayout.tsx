"use client";
import Card from "@/shared/ui/Card";
import { CardHeader } from "@/shared/ui/CardHeader";
import { MoveLeft } from "lucide-react";

import { Button } from "@/shared";
import { useRouter } from "next/navigation";
import { JobPostForm } from "@/features/post-job-form";

export function JobPostLayout() {
  const router = useRouter();
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-8 ">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="group flex items-center gap-2 text-foreground text-sm font-semibold"
        >
          <MoveLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Jobs
        </Button>
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
