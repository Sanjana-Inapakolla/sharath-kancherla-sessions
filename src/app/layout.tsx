import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// METADATA 
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Sharath Chandra Kancherla | Music Therapy, Rakheno & CST Sessions",
  description:
    "Book a music therapy, Rakheno, or craniosacral therapy (CST) session with Sharath Kancherla.",
  openGraph: {
    title: "Sharath Kancherla | Therapy Sessions",
    description:
      "Book a music therapy, Rakheno, or craniosacral therapy (CST) session.",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
