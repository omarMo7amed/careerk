import { Badge } from "@/shared";

export function JobHeader({
  title,
  workArrangement,
  employmentType,
}: {
  title: string;
  workArrangement: string;
  employmentType: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap gap-2 pb-6 border-b border-border/50">
        <Badge variant="info" className="rounded-lg shadow-none">
          {workArrangement}
        </Badge>
        <Badge variant="info" className="rounded-lg shadow-none">
          {employmentType}
        </Badge>
      </div>
    </>
  );
}
