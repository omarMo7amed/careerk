export function InsightHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <h3 className="text-primary flex items-center  gap-2 font-bold">
      <span className="shrink-0">{icon}</span>
      <span className="text-xl ">{title}</span>
    </h3>
  );
}
