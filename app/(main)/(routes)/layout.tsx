
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/common/ScrollUp";
import ScrollToTop from "@/components/common/ScrollToTop";
import MembershipBanner from "@/components/common/MembershipBanner";
import FeedbackModal from "@/components/feedback/FeedbackModal";
import RenderNavbar from "@/components/header/RenderNavbar";
import Loader from "@/components/loader/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ScrollUp />
        <RenderNavbar />
        {children}
        <Loader />
        <MembershipBanner />
        <FeedbackModal />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
