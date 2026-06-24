import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kuber Tech Solutions: Full-Stack Web Development",
    template: "%s | Kuber Tech Solutions",
  },
  description:
    "We build fast, conversion-focused web products and the cloud infrastructure behind them. A full-stack web development studio, frontend to cloud, in-house.",
  metadataBase: new URL("https://kubertech.example"),
  openGraph: {
    type: "website",
    url: "https://kubertech.example",
    siteName: "Kuber Tech Solutions",
    title: "Kuber Tech Solutions: Full-Stack Web Development",
    description:
      "We build fast, conversion-focused web products and the cloud infrastructure behind them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuber Tech Solutions: Full-Stack Web Development",
    description:
      "We build fast, conversion-focused web products and the cloud infrastructure behind them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#fafafa] antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
