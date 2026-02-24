import { DashboardHeader } from "@/widgets/dashboard-header";
import { RecommendedSection } from "@/widgets/recommended-jobs";

export default function RecommendedJobsPage() {
  return (
    <section className="min-h-screen bg-background">
      <DashboardHeader
        title="Recommended Jobs"
        subtitle="Discover job opportunities tailored to your profile and preferences."
      />

      <RecommendedSection />
    </section>
  );
}
