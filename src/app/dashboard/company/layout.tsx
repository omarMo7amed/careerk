import type { Metadata } from "next";
import { SideBarLayout } from "@/widgets/side-bar";
import { companyNavItems } from "@/shared";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your company dashboard",
};

export default function CompanyDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex">
      <SideBarLayout navItems={companyNavItems} />
      <main className="flex-1 px-8 py-8">{children}</main>
    </div>
  );
}
