import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FormPopup from "@/components/layout/FormPopup";

const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi-regular",
});

const satoshiMedium = localFont({
  src: "./fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi-medium",
});

const hoperBegin = localFont({
  src: "./fonts/hoperbegin.otf",
  variable: "--font-hoper",
});

export const metadata: Metadata = {
  title: {
    default: "Wambui Ndung'u | Web Developer & Designer",
    template: "%s | Wambui Ndung'u"
  },
  description: "Professional web developer and designer specializing in creating modern, responsive websites with a focus on user experience and performance.",
  keywords: ["web developer", "web designer", "frontend developer", "UI/UX designer", "Next.js", "React", "Tailwind CSS"],
  authors: [{ name: "Wambui Ndung'u" }],
  creator: "Wambui Ndung'u",
  publisher: "Wambui Ndung'u",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wambuiswork.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wambuiswork.vercel.app',
    title: "Wambui Ndung'u | Web Developer & Designer",
    description: 'Professional web developer and designer specializing in creating modern, responsive websites with a focus on user experience and performance.',
    siteName: "Wambui Ndung'u",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wambui Ndung'u | Web Developer & Designer",
    description: 'Professional web developer and designer specializing in creating modern, responsive websites with a focus on user experience and performance.',
    creator: '@wambuindungu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/hoper-begin"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/futura-std-4"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${satoshiRegular.variable} ${satoshiMedium.variable} ${hoperBegin.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FormPopup />
      </body>
    </html>
  );
}
