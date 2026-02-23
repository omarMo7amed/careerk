import { CompanyJoblistings } from "@/widgets/company-joblistings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Job Listings",
  description:
    "View, manage, and track all your posted jobs. Edit, update, or remove listings easily from your dashboard.",
};

export default function JobListingsPage() {
  return (
    <div>
      <CompanyJoblistings />
    </div>
  );
}
