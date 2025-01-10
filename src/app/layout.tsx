import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftResume",
  description: "Free Resume Builder",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh ">
        {children}
      </body>
    </html>
  );
}
