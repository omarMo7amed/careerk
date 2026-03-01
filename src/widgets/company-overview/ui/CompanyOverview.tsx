import OverviewCharts from "./Charts";
import QuickActions from "./QuickActions";
import OverviewStats from "./Stats";
import TopPerformingJobs from "./TopPerformingJobs";

export function CompanyOverview() {
  return (
    <div>
      <OverviewStats />
      <OverviewCharts />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <QuickActions />
        <TopPerformingJobs />
      </div>
    </div>
  );
}
