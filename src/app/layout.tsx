import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/widgets/header/ui/Header";
import "./animations.css";
import { InterFont } from "@/shared";

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
      <body className={`${InterFont.className} antialiased`}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
