import { CompanyOverview } from "@/widgets/company-overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Overview",
  description:
    "Access your dashboard overview to monitor job posts, applications, and account activity in one place.",
};

export default function CompanyOverviewPage() {
  return (
    <div>
      <CompanyOverview />
    </div>
  );
}
