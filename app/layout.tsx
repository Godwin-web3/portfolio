import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const instrumentSans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

const title = "GodwinXbt — engineer, protocol researcher, security";
const description =
  "I build financial and distributed systems, and I use security research to understand whether they actually behave as designed.";

export const metadata: Metadata = {
  metadataBase: new URL("https://godwinxbt.vercel.app"),
  title: { default: title, template: "%s · GodwinXbt" },
  description,
  openGraph: { title, description, url: "https://godwinxbt.vercel.app", siteName: "GodwinXbt", type: "website" },
  twitter: { card: "summary_large_image", title, description, creator: "@GodwinXbt" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
