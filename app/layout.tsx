import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Preloader from "@/components/Preloader";
import ScrollToHash from "@/components/ScrollToHash";
import "./globals.css";

// Self-hosted by Next at build time, which removes the render-blocking
// fonts.googleapis.com stylesheet the Vite app loaded in <head>.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kubertechsolutions.in"),
  title: "Kuber Tech Solutions: AI, Cloud, IoT & Full-Stack Engineering",
  description:
    "Full-stack, AI, cloud, and IoT engineering for funded startups in the US, UK, and UAE. We build fast, scalable products and the infrastructure behind them.",
  authors: [{ name: "Kuber Tech Solutions" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/kuber_favicon_v2.png", sizes: "32x32", type: "image/png" },
      { url: "/kuber_favicon_v2.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/kuber_favicon_v2.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Kuber Tech Solutions",
    images: ["/kuber_logo_dark.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/kuber_logo_dark.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      {/*
        Extensions (Bitdefender's bis_register, password managers, etc.) inject
        attributes onto <body> before React hydrates, which React reports as a
        mismatch. This suppresses that one element's attribute diff only; it
        does not extend to children, so real hydration bugs still surface.
      */}
      <body className={manrope.className} suppressHydrationWarning>
        <Preloader />
        <ScrollToHash />
        {children}
        <Analytics />

        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xdgd1zd3wx");`}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R21TX2MTRF"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R21TX2MTRF');`}
        </Script>
      </body>
    </html>
  );
}
