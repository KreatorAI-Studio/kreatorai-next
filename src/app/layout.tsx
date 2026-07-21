import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import StatusBanner from "@/components/StatusBanner";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KreatorAI — All-In-One Social Media Management",
  description: "Create content, publish everywhere, and track what works — AI video, images, captions, and voice, with scheduling and analytics across Instagram, LinkedIn, X, YouTube and more.",
  keywords: "social media management, AI content creation, automated publishing, content scheduling, social media analytics, AI video creation, AI avatars, hashtag generator, script generator, KreatorAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div id="prog"></div>
        <div className="o o1"></div>
        <div className="o o2"></div>
        <div className="o o3"></div>
        <StatusBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
