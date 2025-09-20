import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WizardJS - The Ultimate JavaScript & TypeScript Playground",
  description: "Open source alternative to RunJS. Complete JavaScript and TypeScript playground with Monaco Editor, real-time execution, and advanced features. Download for macOS, Windows, and Linux.",
  keywords: ["javascript", "typescript", "playground", "editor", "runjs", "monaco", "electron", "open source", "wizardjs", "code editor", "js playground", "typescript editor", "javascript runner", "code execution", "developer tools", "programming", "coding", "web development"],
  authors: [{ name: "Francisco Brito", url: "https://github.com/FranciscoJBrito" }],
  creator: "Francisco Brito",
  publisher: "Francisco Brito",
  applicationName: "WizardJS",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "WizardJS - The Ultimate JavaScript & TypeScript Playground",
    description: "Open source alternative to RunJS. Complete JavaScript and TypeScript playground with Monaco Editor, real-time execution, and advanced features. Download for macOS, Windows, and Linux.",
    url: "https://wizardjs.dev",
    siteName: "WizardJS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://wizardjs.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "WizardJS - JavaScript & TypeScript Playground",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WizardJS - The Ultimate JavaScript & TypeScript Playground",
    description: "Open source alternative to RunJS. Complete JavaScript and TypeScript playground with Monaco Editor, real-time execution, and advanced features.",
    creator: "@FranciscoJBrito",
    images: ["https://wizardjs.dev/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://wizardjs.dev",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WizardJS",
    "description": "Open source alternative to RunJS. Complete JavaScript and TypeScript playground with Monaco Editor, real-time execution, and advanced features.",
    "url": "https://wizardjs.dev",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": ["macOS", "Windows", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Francisco Brito",
      "url": "https://github.com/FranciscoJBrito"
    },
    "publisher": {
      "@type": "Person",
      "name": "Francisco Brito"
    },
    "downloadUrl": "https://github.com/FranciscoJBrito/WizardJS/releases",
    "screenshot": "https://wizardjs.dev/og-image.png",
    "featureList": [
      "JavaScript and TypeScript support",
      "Monaco Editor integration",
      "Real-time code execution",
      "Cross-platform compatibility",
      "Open source"
    ],
    "keywords": "javascript, typescript, playground, editor, monaco, electron, open source, developer tools"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
