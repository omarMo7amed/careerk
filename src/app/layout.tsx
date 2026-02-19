import type { Metadata } from "next";

import "./globals.css";
import "./animations.css";
import { InterFont, QueryProvider, cn } from "@/shared";

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
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
