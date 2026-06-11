import { DashboardHeader } from "@/shared";
import { RecommendedSection } from "@/widgets/recommended-jobs";

export default function RecommendedJobsPage() {
  return (
    <section className="min-h-screen bg-background">
      <div className="px-5 py-8">
        <DashboardHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard/jobseeker/overview" },
            { label: "Recommended Jobs" },
          ]}
          title="Recommended Jobs"
          subtitle="Discover job opportunities tailored to your profile and preferences."
        />
      </div>
      <RecommendedSection />
    </section>
  );
}
