export default function CompanyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="company-dashboard">
      {/* Company Sidebar would go here */}
      <main>{children}</main>
    </div>
  );
}
