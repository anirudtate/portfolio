import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Anirud Tate - Portfolio",
  description:
    "My portfolio created for displaying my projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark font-sans antialiased w-screen min-h-screen max-w-full overflow-x-hidden",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
