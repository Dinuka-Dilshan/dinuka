import Header from "@/components/base/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinuka Dilshan",
  description:
    "Fullstack web developer crafting fast, scalable, and user-friendly web apps using React, Next.js, Node.js, TypeScript, and AWS.",
  authors: [{ name: "Dinuka Dilshan", url: "https://dinukadilshan.com" }],
  creator: "Dinuka Dilshan",
  keywords: [
    "Dinuka",
    "Dinuka Dilshan",
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Cloud Web Apps",
    "Fast Web Applications",
    "Scalable Web Solutions",
    "Modern Web Development",
    "Freelance Developer",
  ],
  metadataBase: new URL("https://dinukadilshan.com"),
  openGraph: {
    title: "Dinuka Dilshan",
    description:
      "Fullstack developer building modern, cloud-powered web apps that deliver speed, scalability, and great user experiences.",
    url: "https://dinukadilshan.com",
    siteName: "Dinuka Dilshan Portfolio",
    images: [
      {
        url: "/opengraphg-image.png",
        width: 1200,
        height: 630,
        alt: "Dinuka Dilshan - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinuka Dilshan",
    description:
      "Fast, scalable web apps crafted with care — by Dinuka Dilshan.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dinuka Dilshan",
              url: "https://dinukadilshan.com",
              image: "https://dinukadilshan.com/opengraph-image.png",
              jobTitle: "Fullstack Web Developer",
              sameAs: [
                "https://github.com/Dinuka-Dilshan",
                "https://www.linkedin.com/in/dilshan-dinuka",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className}  antialiased bg-gradient-to-br from-pink-50 to-blue-50 min-h-screen`}
      >
        <Header />
        <main className="container px-6 lg:px-10 mx-auto max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
}
