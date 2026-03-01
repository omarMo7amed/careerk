import { ProfileStrength } from "@/widgets/jobseeker-overview/profile-strength";
import { QuickActions } from "@/widgets/jobseeker-overview/quick-actions";
import { RecentActivity } from "@/widgets/jobseeker-overview/recent-activity";
import { SavedJobsSection } from "@/widgets/jobseeker-overview/saved-jobs";
import {
  StatCards,
  WelcomeBanner,
} from "@/widgets/jobseeker-overview/welcome-section";

function JobseekerOverview() {
  return (
    <div className="space-y-8 p-6">
      <WelcomeBanner />
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md-gap-8">
        <ProfileStrength />
        <RecentActivity />
      </div>
      <SavedJobsSection />
      <QuickActions />
    </div>
  );
}

export default JobseekerOverview;
