import { FileText, Calendar, XCircle } from "lucide-react";
import StatCard from "./StatCard";

interface ApplicationsHeaderProps {
  stats: {
    active: number;
    interviews: number;
    rejected: number;
  };
}

export function ApplicationsHeader({ stats }: ApplicationsHeaderProps) {
  return (
    <div className="bg-bg-surface p-4 md:p-8 rounded-lg mb-8">
      <h1 className="text-3xl font-bold text-primary mb-2">My Applications</h1>
      <p className="text-text-secondary mb-6">
        Track all the jobs you have applied for and stay updated on their
        status.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          label="ACTIVE"
          value={stats.active}
          icon={FileText}
          color="blue"
        />
        <StatCard
          label="INTERVIEWS"
          value={stats.interviews}
          icon={Calendar}
          color="green"
        />
        <StatCard
          label="REJECTED"
          value={stats.rejected}
          icon={XCircle}
          color="red"
        />
      </div>
    </div>
  );
}
