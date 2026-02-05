import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header/ui/Header";
import "./animations.css";

export const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});
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
      <body className={`${InterFont.className} antialiased flex flex-col`}>
        <Header />
        <div className="flex-1 pt-4 sm:pt-8 lg:pt-12">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
