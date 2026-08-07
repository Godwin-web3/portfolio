import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "GodwinXbt",
  url: "https://godwinxbt.vercel.app",
  jobTitle: "Smart Contract Developer & Security Researcher",
  sameAs: [
    "https://x.com/GodwinXbt",
    "https://t.me/GodwinXbt",
    "https://github.com/godwin-web3",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://godwinxbt.vercel.app"),
  title: "GodwinXbt — Smart Contract Developer & Security Researcher",
  description:
    "Smart contract developer and security researcher. Builder of ChainSentinel, my AI-augmented audit tool. Real findings, real proof, no inflated numbers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-neutral-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
