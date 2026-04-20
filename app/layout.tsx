import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import Loader from "@/components/common/Loader";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Suvik Group Of Companies | Premium Corporate Services",
  description:
    "UAE's premium corporate IT, Blockchain, and Business Setup services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        overflow:hidden on html prevents any scroll flash before
        the loader JS runs on the client.
      */}
      <body
        className={`${space.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Loader />
        <Navbar />
        <SmoothScroll>
          <main className="w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
