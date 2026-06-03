import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bearliu.com"),
  title: "Bear Liu, Fractional Design Partner",
  description:
    "I help early-stage teams make clear product design decisions and ship with momentum, without hiring a full-time designer.",
  openGraph: {
    title: "Bear Liu, Fractional Design Partner",
    description:
      "I help early-stage teams make clear product design decisions and ship with momentum, without hiring a full-time designer.",
    url: "https://bearliu.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
