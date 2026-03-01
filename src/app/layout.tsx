import type { Metadata } from "next";

import "./globals.css";
import "./animations.css";
import { InterFont, QueryProvider, cn } from "@/shared";
import { Toaster } from "react-hot-toast";

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
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
