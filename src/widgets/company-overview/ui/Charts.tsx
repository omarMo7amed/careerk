"use client";

import { Card, CardHeader } from "@/shared";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CompanyJob } from "@/entities/company-job";
import { JobApplication } from "@/entities/company-applications";
import { ApplicationStatus } from "@/entities/application";

interface Props {
  jobs: CompanyJob[];
  applications: JobApplication[];
}

const STATUS_COLORS: Record<ApplicationStatus, string> = {
  PENDING: "#f59e0b",
  REVIEWED: "#4186f6",
  SHORTLISTED: "#0353a4",
  INTERVIEW_SCHEDULED: "#6366f1",
  HIRED: "#10b981",
  REJECTED: "#ef4444",
  WITHDRAWN: "#9ca3af",
};

const TOOLTIP_STYLE = {
  backgroundColor: "var(--color-bg-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "8px",
  fontSize: "14px",
};

function OverviewCharts({ jobs, applications }: Props) {
  // Build monthly job postings trend from real data
  const jobMetrics = buildJobMetrics(jobs);

  // Build application status distribution from real data
  const applicationStatus = buildApplicationStatus(applications);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardHeader
          title="Job Postings Trend"
          description="Posted, active and paused jobs over time"
        />
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={jobMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey="month"
              stroke="var(--color-foreground)"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="var(--color-foreground)"
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={TOOLTIP_STYLE}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="posted" fill="#0353a4" name="Posted" />
            <Bar dataKey="active" fill="#4186F6" name="Active" />
            <Bar dataKey="paused" fill="#10b981" name="Paused" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <CardHeader
          title="Application Status"
          description="Distribution of applications by status"
        />
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={applicationStatus}
              cx="50%"
              cy="50%"
              fontSize="14px"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              dataKey="value"
            >
              {applicationStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={TOOLTIP_STYLE} />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

// ── helpers ──────────────────────────────────────────────

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function buildJobMetrics(jobs: CompanyJob[]) {
  const map: Record<
    string,
    { posted: number; active: number; paused: number }
  > = {};

  jobs.forEach((job) => {
    if (!job.publishedAt) return;
    const month = MONTHS[new Date(job.publishedAt).getMonth()];
    if (!map[month]) map[month] = { posted: 0, active: 0, paused: 0 };
    map[month].posted += 1;
    if (job.status === "PUBLISHED") map[month].active += 1;
    if (job.status === "PAUSED") map[month].paused += 1;
  });

  return Object.entries(map).map(([month, values]) => ({ month, ...values }));
}

function buildApplicationStatus(applications: JobApplication[]) {
  const map: Partial<Record<ApplicationStatus, number>> = {};

  applications.forEach((app) => {
    map[app.status] = (map[app.status] ?? 0) + 1;
  });

  return (Object.entries(map) as [ApplicationStatus, number][]).map(
    ([name, value]) => ({
      name: name.replace(/_/g, " "),
      value,
      color: STATUS_COLORS[name],
    }),
  );
}

export default OverviewCharts;
