import { Button } from "@/shared";
import { Card } from "@/shared";
import { DeleteButton } from "@/shared";

type JobSidebarProps = {
  isEditingJob: boolean;
  setIsEditingJob: (value: boolean) => void;
  applicationDeadline: string;
  onDeleteClick: () => void;
};

export function JobSidebar({
  isEditingJob,
  setIsEditingJob,
  applicationDeadline,
  onDeleteClick,
}: JobSidebarProps) {
  return (
    <Card className="grid gap-6 items-center">
      <Button onClick={() => setIsEditingJob(!isEditingJob)}>
        {isEditingJob ? "Cancel Edit" : "Edit Post"}
      </Button>

      <DeleteButton onClick={onDeleteClick}>Delete Post</DeleteButton>

      <p className="text-center text-xs text-text-secondary">
        Application closes in {applicationDeadline}
      </p>
    </Card>
  );
}
