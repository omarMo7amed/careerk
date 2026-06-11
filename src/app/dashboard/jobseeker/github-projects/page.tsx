import { DashboardHeader } from "@/shared";
import { GitHubProjectsWidget } from "@/widgets/github-projects";

export default function GitHubProjectsPage() {
  return (
    <div className="p-6">
      <DashboardHeader
        title="Open Source Projects"
        subtitle="Find starter-friendly GitHub projects based on your role and level"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard/jobseeker/overview" },
          { label: "GitHub Projects" },
        ]}
      />
      <div className="mt-6">
        <GitHubProjectsWidget />
      </div>
    </div>
  );
}
