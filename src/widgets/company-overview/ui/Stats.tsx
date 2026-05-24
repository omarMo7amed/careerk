import { Badge, Card } from "@/shared";
import {
  Briefcase,
  TrendingUp,
  Users,
  CircleCheck,
  MessageSquare,
} from "lucide-react";
import { CompanyJob } from "@/entities/company-job";
import { JobApplication } from "@/entities/company-applications";

interface Props {
  jobs: CompanyJob[];
  applications: JobApplication[];
}

function OverviewStats({ jobs, applications }: Props) {
  const stats = [
    {
      label: "Total Jobs",
      value: jobs.length,
      color: "text-foreground",
      icon: Briefcase,
    },
    {
      label: "Active Jobs",
      value: jobs.filter((j) => j.status === "PUBLISHED").length,
      color: "text-success",
      icon: TrendingUp,
    },
    {
      label: "Total Applicants",
      value: applications.length,
      color: "text-foreground",
      icon: Users,
    },
    {
      label: "Hires",
      value: applications.filter((a) => a.status === "HIRED").length,
      color: "text-foreground",
      icon: CircleCheck,
    },
    {
      label: "Interviews",
      value: applications.filter((a) => a.status === "INTERVIEW_SCHEDULED")
        .length,
      color: "text-foreground",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className={`animate-fade-in [animation-delay:${0.2 + index * 0.05}s]`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <Badge
                variant="info"
                className="min-w-8 min-h-8 rounded-lg justify-center border-none"
              >
                <Icon className="w-4 h-4" />
              </Badge>
            </div>
            <div className="text-sm text-text-secondary">{stat.label}</div>
          </Card>
        );
      })}
    </div>
  );
}

export default OverviewStats;
