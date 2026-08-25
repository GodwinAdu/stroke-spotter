import ModernFooter from "@/components/footer/ModernFooter";
import ScrollUp from "@/components/common/ScrollUp";
import ScrollToTop from "@/components/common/ScrollToTop";
import MembershipBanner from "@/components/common/MembershipBanner";
import FeedbackModal from "@/components/feedback/FeedbackModal";
import RenderNavbar from "@/components/header/RenderNavbar";
import Loader from "@/components/loader/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spot Stroke Fast - Save Lives with F.A.S.T.",
  description: "Learn to recognize stroke symptoms using F.A.S.T. method. Quick action saves lives and prevents disability. Interactive stroke education and emergency response training.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative max-w-[1920px] mx-auto">
      <ScrollUp />
      <RenderNavbar />
      <div className="pt-24">
        {children}
      </div>
      <Loader />
      <MembershipBanner />
      <FeedbackModal />
      <ModernFooter />
      <ScrollToTop />
    </main>
  );
}
