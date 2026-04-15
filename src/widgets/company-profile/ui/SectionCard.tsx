export function SectionCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-bg-surface rounded-xl border border-border p-6 shadow-sm">
      {children}
    </section>
  );
}
