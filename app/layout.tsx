import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: "Virtue Group Prototype",
  description: "Marketing prototype for Virtue Group enterprise services and transformation offerings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body 
        className="min-h-full text-zinc-900"
        style={{
          background: "linear-gradient(135deg, #D6EDE9 0%, #BFDCD4 33%, #A0CFC9 66%, #7BB9B3 100%)",
          backgroundAttachment: "fixed"
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
