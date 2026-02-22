import { ProfileStrength } from "@/widgets/jobseeker-overview/profile-strength";
import { RecentActivity } from "@/widgets/jobseeker-overview/recent-activity";
import {
  StatCards,
  WelcomeBanner,
} from "@/widgets/jobseeker-overview/welcome-section";

function JobseekerOverview() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md-gap-8">
        <ProfileStrength />
        <RecentActivity />
      </div>
    </div>
  );
}

export default JobseekerOverview;
