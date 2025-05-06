import type { Metadata, Viewport } from "next";

import {
  BASE_URL,
  COMPANY_NAME,
  DESCRIPTION,
  OG_IMAGE_URL,
} from "@/consts/metadata";

import "./globals.css";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: DESCRIPTION,
  openGraph: {
    title: COMPANY_NAME,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: COMPANY_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f0f0f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
