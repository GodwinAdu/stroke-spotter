
import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Spot Stroke fast Auth",
  description: "Created by Jutech Devs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black flex h-screen justify-center items-center">
        {children}
      </body>
    </html>
  );
}
