import { Activity } from "../types/Activity";
import ActivityIcon from "./ActivityIcon";

interface ActivityItemProps {
  activity: Activity;
  isLast: boolean;
}
function ActivityItem({ activity, isLast }: ActivityItemProps) {
  return (
    <div className="flex justify-between gap-4 relative pb-8 md:pb-12">
      {!isLast && (
        <div className="absolute left-5 top-14 mb-2 bottom-0 w-0.5 bg-blue-600/40" />
      )}

      <ActivityIcon activity={activity} />

      <div className="flex-1">
        <h4 className="text-sm font-semibold mb-1">{activity.title}</h4>
        <p className="text-sm text-text-secondary mb-1">{activity.subtitle}</p>
        <span className="text-xs text-text-secondary">
          {activity.timestamp}
        </span>
      </div>
    </div>
  );
}

export default ActivityItem;
