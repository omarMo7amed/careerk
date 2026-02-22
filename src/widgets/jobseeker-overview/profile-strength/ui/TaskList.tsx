import { ProfileTask } from "../types/ProfileTask";
import TaskItem from "./TaskItem";

function TaskList({ tasks }: { tasks: ProfileTask[] }) {
  return (
    <div className="space-y-2 mb-8">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
