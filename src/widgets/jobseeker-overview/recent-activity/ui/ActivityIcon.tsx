import { activityColorMap, IconMap } from "../config/ActivityConfig";
import { RecentActivityItem } from "../types/Activity";

function ActivityIcon({ activity }: { activity: RecentActivityItem }) {
  const Icon = IconMap[activity.type] || IconMap["default"];
  const colors = activityColorMap[activity.type] || activityColorMap.default;
  return (
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center border ${colors.bg} ${colors.border}`}
    >
      <Icon className={`w-5 h-5 ${colors.text}`} />
    </div>
  );
}

export default ActivityIcon;
