import { ProfileTask } from "../types/ProfileTask";

export function calculateProfileProgress(tasks: ProfileTask[]) {
  if (tasks.length === 0) return 0;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const totalTasks = tasks.length;

  const percentage = Math.round((completedTasks / totalTasks) * 100);
  return percentage;
}
