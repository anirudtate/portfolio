import type { Metadata } from "next";
import { DM_Mono, DM_Sans, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { aboutConfig } from "@/config/aboutConfig";

const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = DM_Serif_Text({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const fontMono = DM_Mono({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: aboutConfig.name,
  description: aboutConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `font-sans antialiased text-md`,
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
