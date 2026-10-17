import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
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

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper md:flex-row">
        <Sidebar />
        <MobileNav />
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
