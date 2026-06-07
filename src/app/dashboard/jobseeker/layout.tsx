import { AuthGuard } from "@/shared";
import { SideBarLayout } from "@/widgets/side-bar";
// import { jobseekerNavItems } from "@/shared";

export default function JobseekerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="h-screen flex">
        <SideBarLayout role="jobseeker" />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </AuthGuard>
  );
}
