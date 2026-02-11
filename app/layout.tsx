import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fractional Design Partner — Bear Liu",
  description:
    "I help early-stage teams make clear product design decisions and ship with momentum, without hiring a full-time designer.",
  openGraph: {
    title: "Fractional Design Partner — Bear Liu",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
