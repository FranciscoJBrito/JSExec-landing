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
  title: "JSExec - The Ultimate JavaScript & TypeScript Playground",
  description: "Open source alternative to RunJS. Complete JavaScript and TypeScript playground with Monaco Editor, real-time execution, and advanced features. Download for macOS, Windows, and Linux.",
  keywords: ["javascript", "typescript", "playground", "editor", "runjs", "monaco", "electron", "open source"],
  authors: [{ name: "Francisco Brito", url: "https://github.com/FranciscoJBrito" }],
  creator: "Francisco Brito",
  openGraph: {
    title: "JSExec - JavaScript & TypeScript Playground",
    description: "Open source alternative to RunJS with Monaco Editor and real-time execution",
    url: "https://jsexec.dev",
    siteName: "JSExec",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSExec - JavaScript & TypeScript Playground",
    description: "Open source alternative to RunJS with Monaco Editor and real-time execution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
