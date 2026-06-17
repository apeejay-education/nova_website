import type { Metadata } from "next";
import { Inter, Instrument_Serif, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/nav/NavbarWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cadence Nova — AI-Powered School Management Platform | India",
  description:
    "Cadence Nova is India's most complete school ERP — fees, transport, hostel, LMS, and AI-powered insights in one platform. Book a demo today.",
  openGraph: {
    title: "Cadence Nova — School management. School intelligence. One platform.",
    description:
      "Fees, transport, hostel, learning, and AI-powered insights — giving school leaders complete, intelligent command of their institution.",
    url: "https://nova.cadenceinfotech.com",
    siteName: "Cadence Nova",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cadence Nova — School management. School intelligence. One platform.",
    description:
      "Fees, transport, hostel, learning, and AI-powered insights — giving school leaders complete, intelligent command of their institution.",
  },
  keywords: [
    "school management software India",
    "school ERP India",
    "AI school ERP",
    "transport hostel LMS school software",
    "Cadence Nova",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${dmSans.variable} ${playfairDisplay.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
