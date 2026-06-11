import type { Metadata } from "next";
import { AuthGuard } from "@/shared";
import { SideBarLayout } from "@/widgets/side-bar";

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
    <AuthGuard>
      <div className="h-screen bg-background transition-colors duration-300 flex">
        <SideBarLayout role="company" />
        <main className="flex-1 overflow-y-auto px-8 ">{children}</main>
      </div>
    </AuthGuard>
  );
}
