import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pact — Daily Goals with Friends",
  description:
    "Form a Pact with your friends and hold each other accountable to your daily goals.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pact — Daily Goals with Friends",
    description:
      "Form a Pact with your friends and hold each other accountable to your daily goals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pact — Daily Goals with Friends",
    description:
      "Form a Pact with your friends and hold each other accountable to your daily goals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
