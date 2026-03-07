import type { Metadata } from "next";

import "./globals.css";
import "./animations.css";
import { InterFont, QueryProvider, cn } from "@/shared";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, ThemeScript } from "@/shared/providers/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={cn(InterFont.className, "antialiased")}>
        <QueryProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
