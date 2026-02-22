import { SideBarLayout } from "@/widgets/side-bar";
import { jobseekerNavItems } from "@/shared";

export default function JobseekerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBarLayout navItems={jobseekerNavItems} />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
