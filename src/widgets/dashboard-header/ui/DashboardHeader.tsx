export function DashboardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-b border-border">
      <div className="p-4 ">
        <h1 className="text-primary text-4xl font-bold mb-2">{title}</h1>
        <p className="text-text-secondary text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
