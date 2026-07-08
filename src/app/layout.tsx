import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanan4li.github.io"),
  title: "Sanan Ali — AI Software Engineer",
  description:
    "Sanan Ali is an AI Software Engineer with 6+ years of experience building Web, Desktop and Mobile applications with JavaScript, TypeScript, React, Electron, and AI/LLM integration.",
  keywords: [
    "Sanan4li",
    "Sanan Ali Portfolio",
    "Sanan Ali Developer",
    "Sanan Ali Github",
    "Sanan Ali Software Engineer",
    "React Developer Lahore",
  ],
  openGraph: {
    title: "Sanan Ali — AI Software Engineer",
    description:
      "AI Software Engineer — Web, Desktop & Mobile apps. React, TypeScript, Electron, AI/LLM.",
    url: "https://sanan4li.github.io",
    type: "website",
    images: ["/images/sanan.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased scanlines`}
      >
        {children}
      </body>
    </html>
  );
}
