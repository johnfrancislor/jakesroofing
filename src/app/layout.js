import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisitNotifier from "@/components/VisitNotifier";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata = {
  metadataBase: new URL("http://jakesroofingltd.com"),
  title: {
    default: "Jake's Roofing Ltd. | Parksville & Qualicum Beach Roofers",
    template: "%s | Jake's Roofing Ltd.",
  },
  description:
    "New & re-roof specialists serving Parksville, Qualicum Beach and Central Vancouver Island. Shakes, shingles, torch-on, metal and tile. Licensed, insured, BBB A+. Free estimates: 250-248-8014.",
  keywords: ["roofing", "roofer", "Parksville roofing", "Qualicum Beach roofing", "Nanaimo roofing", "roof repair", "roof maintenance", "metal roofing", "cedar shakes"],
  openGraph: {
    title: "Jake's Roofing Ltd.",
    description: "New & re-roof specialists serving Parksville and Qualicum Beach.",
    images: ["/images/waterfront.webp"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VisitNotifier />
      </body>
    </html>
  );
}
