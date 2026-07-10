import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pugazhenthiran C — Lead Software Engineer",
  description:
    "Lead Software Engineer with 7+ years of experience building scalable enterprise web applications with React, Ember, and TypeScript.",
  openGraph: {
    title: "Pugazhenthiran C — Lead Software Engineer",
    description:
      "Lead Software Engineer with 7+ years of experience building scalable enterprise web applications with React, Ember, and TypeScript.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-300">
        {children}
      </body>
    </html>
  );
}
