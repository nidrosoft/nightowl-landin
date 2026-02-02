import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { WaitlistProvider } from "@/context/WaitlistContext";

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
  description: "A safe, anonymous social space exclusively for the night. Connect with fellow night owls through mood-based matching, anonymous thoughts sharing, and live audio lounges. Download free on iOS and Android.",
  keywords: ["night owl", "social app", "insomnia", "late night", "anonymous", "mood matching", "audio lounges", "night chat", "anonymous chat", "mood based dating"],
  authors: [{ name: "Night Owl" }],
  creator: "Cyriac Zeh",
  publisher: "Night Owl",
  metadataBase: new URL("https://nightowl.app"),
  openGraph: {
    title: "Night Owl - The city sleeps. We don't.",
    description: "A safe, anonymous social space for night owls. Connect through mood-based matching, share thoughts, and join live audio lounges. Free on iOS & Android.",
    type: "website",
    locale: "en_US",
    siteName: "Night Owl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Night Owl - The city sleeps. We don't. 🦉🌙",
    description: "A safe, anonymous social space for night owls. Connect through mood-based matching, share thoughts, and join live audio lounges. Free on iOS & Android.",
    creator: "@nightowlapp",
    site: "@nightowlapp",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        <WaitlistProvider>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
