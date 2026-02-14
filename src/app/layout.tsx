import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/widgets/header";
import "./animations.css";
import { InterFont, QueryProvider } from "@/shared";
import { FooterUI } from "@/widgets/footer";
import { cn } from "@/shared/lib/cn";

export const metadata: Metadata = {
  title: "Careerk",
  description: "Your career assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(InterFont.className, "antialiased")}>
        <Header />

        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
        <FooterUI />
      </body>
    </html>
  );
}
