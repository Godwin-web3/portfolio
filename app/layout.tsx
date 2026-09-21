import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Godwin Mbah",
  alternateName: "GodwinXbt",
  url: "https://godwinxbt.vercel.app",
  jobTitle: "Full-stack builder and Smart Contract Auditor",
  description:
    "Full-stack builder who ships live on-chain products. Smart Contract Auditor at SMC Audits.",
  email: "mailto:godwinxbt@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "SMC Audits",
    legalName: "Sir Mapy & Co Limited",
  },
  sameAs: [
    "https://x.com/GodwinXbt",
    "https://t.me/GodwinXbt",
    "https://github.com/Godwin-web3",
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

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Godwin Mbah — full-stack builder & smart contract auditor";
const description =
  "I build cool shit on-chain, then break it on purpose. Live products: Blast Radius, Folio, Keel, Assay, Paidline, NoGhosts. Smart Contract Auditor @ SMC Audits.";

export const metadata: Metadata = {
  metadataBase: new URL("https://godwinxbt.vercel.app"),
  title: {
    default: title,
    template: "%s · Godwin Mbah",
  },
  description,
  openGraph: {
    title,
    description,
    url: "https://godwinxbt.vercel.app",
    siteName: "Godwin Mbah",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@GodwinXbt",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper">
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
