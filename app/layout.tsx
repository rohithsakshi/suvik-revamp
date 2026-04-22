import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Loader from "@/components/common/Loader";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Suvik Group | UAE Company Setup in 30 Days + Enterprise Blockchain",
  description:
    "Set up your UAE company in 30 days — or build enterprise blockchain. 516+ projects delivered since 2011. Free Zone, Mainland, Offshore formation + XDC, Ethereum, Hyperledger development. Schedule a free consultation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${space.variable} antialiased bg-background text-foreground min-h-screen`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <Loader />
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
