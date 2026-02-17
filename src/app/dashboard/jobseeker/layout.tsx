import { SideBarLayout } from "@/widgets/side-bar";

export default function JobseekerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex">
      <SideBarLayout role="jobseeker" />
      <main className="flex-1 px-8 py-8">{children}</main>
    </div>
  );
}
