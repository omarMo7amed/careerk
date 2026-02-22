import { ProfileStrength } from "@/widgets/jobseeker-overview/profile-strength";
import {
  StatCards,
  WelcomeBanner,
} from "@/widgets/jobseeker-overview/welcome-section";

function JobseekerOverview() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ProfileStrength />
      </div>
    </div>
  );
}

export default JobseekerOverview;
