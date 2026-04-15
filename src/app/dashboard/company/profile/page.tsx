import { CompanyProfileWidget } from "@/widgets/company-profile";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "View and manage your company profile, including company details, social links, and branding information.",
};

export default function CompanyProfilePage() {
  return (
    <div>
      <CompanyProfileWidget isOwner />
    </div>
  );
}
