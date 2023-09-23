"use client"
import "./globals.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/common/ScrollUp";
import ScrollToTop from "@/components/common/ScrollToTop";
import MembershipBanner from "@/components/common/MembershipBanner";
import FeedbackModal from "@/components/feedback/FeedbackModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ScrollUp />
        <Navbar />
        {children}
        <ProgressBar
            height="4px"
            color="#FF0000"
            options={{ showSpinner: false }}
            shallowRouting
          />
        <MembershipBanner />
        <FeedbackModal />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
