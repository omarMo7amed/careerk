"use client";
import { Card } from "@/shared";
import { CardHeader } from "@/shared";
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

const jobMetrics = [
  { month: "Jan", posted: 2, active: 1, filled: 0 },
  { month: "Feb", posted: 3, active: 2, filled: 1 },
  { month: "Mar", posted: 2, active: 2, filled: 0 },
  { month: "Apr", posted: 4, active: 3, filled: 1 },
  { month: "May", posted: 3, active: 2, filled: 1 },
  { month: "Jun", posted: 5, active: 3, filled: 2 },
];
const applicationStatus = [
  { name: "Pending", value: 34, color: "#f59e0b" },
  { name: "Screening", value: 28, color: "#4186f6" },
  { name: "Interview", value: 24, color: "#0353a4" },
  { name: "Offer", value: 8, color: "#10b981" },
  { name: "Rejected", value: 7, color: "#ef4444" },
];

function OverviewCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardHeader
          title="Job Postings Trend"
          description="Posted, active and filled jobs over time"
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
              contentStyle={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontSize: "14px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="posted" fill="#0353a4" name="Posted" />
            <Bar dataKey="active" fill="#4186F6" name="Active" />
            <Bar dataKey="filled" fill="#10b981" name="Filled" />
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
              fill="#8884d8"
              dataKey="value"
            >
              {applicationStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-bg-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

export default OverviewCharts;
