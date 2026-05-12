import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Study Global",
    default: "Study Global | Yurtdışı Eğitim Danışmanlığı",
  },
  description: "Study Global - Yurtdışı eğitim danışmanlık hizmeti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
