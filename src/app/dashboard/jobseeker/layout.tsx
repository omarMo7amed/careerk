export default function JobseekerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="jobseeker-dashboard">
      {/* Jobseeker Sidebar would go here */}
      <main>{children}</main>
    </div>
  );
}
