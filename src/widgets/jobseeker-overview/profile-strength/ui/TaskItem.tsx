import { cn } from "@/shared";
import { Check } from "lucide-react";

interface TaskItemProps {
  task: {
    id: string;
    label: string;
    completed: boolean;
  };
}
function TaskItem({ task }: TaskItemProps) {
  return (
    <div
      className={`flex items-center space-x-2 p-2 rounded-md ${!task.completed ? "opacity-50" : ""}`}
    >
      <div
        className={cn(
          "w-5 h-5 rounded-full flex items-center justify-center border-2",
          task.completed ? "border-green-500" : "border-gray-400",
        )}
      >
        <Check
          className={`w-4 h-4 text-green-500 font-bold ${task.completed ? "block" : "hidden"}`}
        />
      </div>

      <div className="text-sm">{task.label}</div>
    </div>
  );
}

export default TaskItem;
