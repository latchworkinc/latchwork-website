import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.latchworkinc.com"),
  title: {
    default: "Latchwork Inc | Business Operations & Back-Office Consulting",
    template: "%s | Latchwork Inc",
  },
  description:
    "Latchwork Inc helps small businesses fix the operational plumbing behind the scenes — bookkeeping, workflow automation, vendor management, and process design.",
  openGraph: {
    title: "Latchwork Inc | Business Operations & Back-Office Consulting",
    description:
      "Latchwork Inc helps small businesses fix the operational plumbing behind the scenes — bookkeeping, workflow automation, vendor management, and process design.",
    siteName: "Latchwork Inc",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Latchwork Inc — Business Operations & Back-Office Efficiency Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latchwork Inc | Business Operations & Back-Office Consulting",
    description:
      "Latchwork Inc helps small businesses fix the operational plumbing behind the scenes — bookkeeping, workflow automation, vendor management, and process design.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased bg-charcoal-950 text-ink-100`}
      >
        <BackgroundGrid />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
