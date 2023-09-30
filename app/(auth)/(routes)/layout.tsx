
import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Stroke-spotter hub",
  description: "Created by Jutech Dev",
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
