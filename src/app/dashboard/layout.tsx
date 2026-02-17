export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex">
      {children}
    </div>
  );
}
