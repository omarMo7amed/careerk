import { DashboardHeader } from "@/widgets/dashboard-header";
import { ControlPanel } from "@/widgets/find-jobs-layout/control-panel";
import { JobsList } from "@/widgets/find-jobs-layout/jobs-list";

export default function FindJobsPage() {
  return (
    <section className="min-h-screen bg-background">
      <DashboardHeader
        title="Find Jobs"
        subtitle="Explore job opportunities that match your skills and interests."
      />

      <ControlPanel />

      <JobsList />
    </section>
  );
}
