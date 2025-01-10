import type { Metadata } from "next";
import {DM_Sans} from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftResume",
  description: "Free Resume Builder",
};

export const font_DM_SANS = DM_Sans({ subsets: ['latin'] })

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
