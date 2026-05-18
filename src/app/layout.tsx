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
  title: "LagrangeOS | AI-Native Astrodynamics Infrastructure",
  description:
    "Experimental astrodynamics accelerated by AI for mission design, trajectory optimization, simulation, rendezvous planning, and orbital decision-making.",
  keywords: [
    "AI astrodynamics",
    "mission design software",
    "trajectory optimization",
    "orbital mechanics",
    "space autonomy",
    "rendezvous proximity operations",
    "cislunar logistics",
    "spacecraft simulation",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070b] text-zinc-50 selection:bg-cyan-500/20 selection:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
