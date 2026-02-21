import {
  StatCards,
  WelcomeBanner,
} from "@/widgets/jobseeker-overview/welcome-section";

function JobseekerOverview() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <StatCards />
    </div>
  );
}

export default JobseekerOverview;
