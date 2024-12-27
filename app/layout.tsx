import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { LinksSection } from "@/components/links-section";

const fontMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anirudtate.com"),
  title: {
    default: "Anirud Tate",
    template: "%s | Anirud Tate",
  },
  description: "Full stack web developer",
  openGraph: {
    title: "Anirud Tate",
    description: "Full stack web developer",
    url: "https://Anirud Tate",
    siteName: "Anirud Tate",
    locale: "en_US",
    type: "website",
    images: ["https://anirudtate.com/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Anirud Tate",
    card: "summary_large_image",
    creator: "@anirudtate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
          <LinksSection />
        </div>
      </body>
    </html>
  );
}
