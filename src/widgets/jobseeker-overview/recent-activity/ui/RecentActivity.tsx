"use client";

import type { RecentActivityItem } from "@/widgets/jobseeker-overview/recent-activity";
import ActivityItem from "./ActivityItem";
import { Loader } from "@/shared";

interface RecentActivityProps {
  activities: RecentActivityItem[];
  isLoading?: boolean;
}

export function RecentActivity({ activities, isLoading }: RecentActivityProps) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="bg-bg-surface rounded-lg p-4 md:p-8 border border-border">
      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <p className="text-text-secondary text-sm mb-4">
          Your latest updates and notifications
        </p>
      </div>

      <div className="overflow-y-auto">
        {activities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">No recent activity</p>
          </div>
        ) : (
          activities.map((activity, index) => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              isLast={index === activities.length - 1}
            />
          ))
        )}
      </div>
    </section>
  );
}
