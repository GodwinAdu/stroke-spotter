

import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/common/ScrollUp";
import ScrollToTop from "@/components/common/ScrollToTop";
import MembershipBanner from "@/components/common/MembershipBanner";
import FeedbackModal from "@/components/feedback/FeedbackModal";
import RenderNavbar from "@/components/header/RenderNavbar";
import Loader from "@/components/loader/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spot Stroke Fast",
  description: "Created by Jutech Devs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div >
        <ScrollUp />
        <RenderNavbar />
        {children}
        <Loader />
        <MembershipBanner />
        <FeedbackModal />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
