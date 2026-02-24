import { Button } from "@/shared";
import Card from "@/shared/ui/Card";
import DeleteButton from "@/shared/ui/DeleteButton";

export function JobSidebar({
  isEditingJob,
  setIsEditingJob,
  applicationDeadline,
}: {
  isEditingJob: boolean;
  setIsEditingJob: (value: boolean) => void;
  applicationDeadline: string;
}) {
  return (
    <Card className="grid gap-6 items-center">
      <Button onClick={() => setIsEditingJob(!isEditingJob)}>
        {isEditingJob ? "Cancel Edit" : "Edit Post"}
      </Button>

      <DeleteButton>Delete Post</DeleteButton>

      <p className="text-center text-xs text-text-secondary">
        Application closes in {applicationDeadline}
      </p>
    </Card>
  );
}
