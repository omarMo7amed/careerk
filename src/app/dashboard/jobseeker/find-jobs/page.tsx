import { DashboardHeader } from "@/shared";
import { ControlPanel } from "@/widgets/find-jobs-layout/control-panel";
import { JobsList } from "@/widgets/find-jobs-layout/jobs-list";

export default function FindJobsPage() {
  return (
    <section className="min-h-screen bg-background">
      <div className="px-5 py-8">
        <DashboardHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard/jobseeker/overview" },
            { label: "Find Jobs" },
          ]}
          title="Find Jobs"
          subtitle="Explore job opportunities that match your skills and interests."
        />
      </div>

      <ControlPanel />
      <JobsList />
    </section>
  );
}
