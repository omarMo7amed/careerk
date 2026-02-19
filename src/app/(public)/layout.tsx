import { Header } from "@/widgets/header";
import { FooterUI } from "@/widgets/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterUI />
    </>
  );
}
