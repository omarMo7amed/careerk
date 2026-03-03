import { Button } from "@/shared";
import { Card } from "@/shared";
import { DeleteButton } from "@/shared";

type JobSidebarProps = {
  isEditingJob: boolean;
  setIsEditingJob: (value: boolean) => void;
  deadline: string | null;
  onDeleteClick: () => void;
};

export function JobSidebar({
  isEditingJob,
  setIsEditingJob,
  deadline,
  onDeleteClick,
}: JobSidebarProps) {
  const deadlineValue = deadline
    ? `Closes on ${new Date(deadline).toLocaleDateString("en-US", { dateStyle: "medium" })}`
    : null;
  return (
    <Card className="grid gap-6 items-center">
      <Button onClick={() => setIsEditingJob(!isEditingJob)}>
        {isEditingJob ? "Cancel Edit" : "Edit Post"}
      </Button>

      <DeleteButton onClick={onDeleteClick}>Delete Post</DeleteButton>

      <p className="text-center text-xs text-text-secondary">{deadlineValue}</p>
    </Card>
  );
}
