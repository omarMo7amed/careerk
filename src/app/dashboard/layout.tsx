export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      {/* Add unified dashboard sidebar/navigation here */}
      <main>{children}</main>
    </div>
  );
}
