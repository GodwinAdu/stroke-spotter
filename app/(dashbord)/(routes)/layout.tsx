import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Header/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Spot Stroke fast Admin",
  description: "Created by Jutech Devs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark h-full flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col h-screen w-full">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="md:ml-72.5 p-4 flex-grow overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
