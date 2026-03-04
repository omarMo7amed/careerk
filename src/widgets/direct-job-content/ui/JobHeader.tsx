import { Badge } from "@/shared";

export function JobHeader({
  title,
  workPreference,
  jobType,
}: {
  title: string;
  workPreference: string;
  jobType: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap gap-2 pb-6 border-b border-border/50">
        <Badge variant="info" className="rounded-lg shadow-none">
          {workPreference}
        </Badge>
        <Badge variant="info" className="rounded-lg shadow-none">
          {jobType}
        </Badge>
      </div>
    </>
  );
}
