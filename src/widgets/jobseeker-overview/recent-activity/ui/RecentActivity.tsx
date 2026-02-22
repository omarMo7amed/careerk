import { mockActivities } from "../mock-data/activitiesData";
import ActivityItem from "./ActivityItem";

function RecentActivity() {
  return (
    <section className="bg-bg-surface rounded-lg p-4 md:p-8">
      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <p className="text-text-secondary text-sm mb-4">
          Your latest updates and notifications
        </p>
      </div>

      <div>
        {mockActivities.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            isLast={index === mockActivities.length - 1}
          />
        ))}
      </div>

      {mockActivities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-muted">No recent activity</p>
        </div>
      )}
    </section>
  );
}

export { RecentActivity };
