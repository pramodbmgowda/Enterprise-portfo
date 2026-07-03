import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/inventory";
import "./globals.css";

// 1. YOUR CUSTOMIZED SEO METADATA
export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Agricultural Machinery`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Authorized dealer for Honda, STIHL, and agricultural equipment. Heavy-duty  tillers, brush cutters, sprayers, water pumps and dairy machinery backed by direct workshop support.",
  keywords: [
    "Agricultural Machinery",
    "Power Weeders",
    "Brush Cutters",
    "Tractors Karnataka",
    "Milking Machines",
    "Honda Tillers",
    "STIHL Dealer",
    "Tillers",
    "Water Pumps ",
    "Dairy Equipments",
    "GreenRider Enterprises",
    "senthepete",
    "Kunigal",
    "Hutridurga",
    "Grass Cutters"
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL("https://greenriderskb.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greenriderskb.com",
    title: `${SITE_CONFIG.name} |  Agricultural Machinery`,
    description:
      "Heavy-duty agricultural and dairy equipment. Browse our live inventory and contact us directly for dealership pricing.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/agro5.jpeg", // This dictates the WhatsApp preview image
        width: 1200,
        height: 630,
        alt: "GreenRider Agricultural Machinery Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Premium Machinery`,
    description: "Browse our live inventory of heavy-duty agricultural equipment.",
    images: ["/agro5.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 2. THE REQUIRED REACT LAYOUT COMPONENT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* If you are importing your Navbar or Footer here globally, they go above/below {children} */}
        {children}
      </body>
    </html>
  );
}