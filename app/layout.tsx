import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fixstead | Home & Outdoor Services in Coventry",
  description:
    "Fixstead provides lawn mowing, pressure washing, fence repair, flooring, furniture assembly, bin cleaning, garden maintenance and small home repairs in Coventry.",
  metadataBase: new URL("https://fixstead.co.uk"),
  openGraph: {
    title: "Fixstead | Home & Outdoor Services",
    description:
      "Reliable home and outdoor services in Coventry. Message Eduard for a fast local quote.",
    url: "https://fixstead.co.uk",
    siteName: "Fixstead",
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
