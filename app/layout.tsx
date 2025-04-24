import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarWrapper from "@/components/sidebar-wrapper";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "@/components/provider/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefan Klaes - WordPress Entwickler",
  description:
    "Erfahrener WordPress-Entwickler und Webentwickler aus Deutschland. Individuelle WordPress-Lösungen, Themes und Plugins für Unternehmen und Agenturen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <SidebarWrapper>{children}</SidebarWrapper>
        </SessionProvider>
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
