import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Night Owl - The city sleeps. We don't.",
  description: "A safe, anonymous social space exclusively for the night. Connect with fellow night owls through mood-based matching, anonymous thoughts sharing, and live audio lounges.",
  keywords: ["night owl", "social app", "insomnia", "late night", "anonymous", "mood matching", "audio lounges"],
  authors: [{ name: "Night Owl" }],
  openGraph: {
    title: "Night Owl - The city sleeps. We don't.",
    description: "A safe, anonymous social space exclusively for the night.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Night Owl - The city sleeps. We don't.",
    description: "A safe, anonymous social space exclusively for the night.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased bg-[#0D0D0D] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
