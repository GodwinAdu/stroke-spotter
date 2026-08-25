import ModernSidebar from "@/components/dashboard/modern/ModernSidebar";
import ModernHeader from "@/components/dashboard/modern/ModernHeader";
import { currentProfile } from "@/hooks/intial-profile";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StrokeSpot Dashboard",
  description: "Modern dashboard for stroke awareness platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentProfile();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <ModernSidebar />
      <div className="lg:pl-72">
        <ModernHeader user={user} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
