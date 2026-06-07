import { timeAgo } from "../lib/calculateTimeAgo";
import { RecentActivityItem } from "../types/Activity";
import ActivityIcon from "./ActivityIcon";

interface ActivityItemProps {
  activity: RecentActivityItem;
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
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-semibold">{activity.jobTitle}</h4>
        </div>
        <p className="text-xs text-text-secondary mb-1">
          {activity.companyName}
        </p>
        {activity.newStatus && (
          <span className="inline-block text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5 mr-2">
            {activity.newStatus}
          </span>
        )}
        <span className="text-xs text-text-secondary">
          {timeAgo(activity.timestamp)}
        </span>
      </div>
    </div>
  );
}

export default ActivityItem;
