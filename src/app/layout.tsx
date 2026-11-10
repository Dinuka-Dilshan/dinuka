import dinukaImage from "#/opengraph-image.png";
import Footer from "@/modules/Landing/Footer";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinuka Abeygunawardhana (Dinuka Dilshan) | Senior Software Engineer",
  description:
    "Dinuka Abeygunawardhana (Dinuka Dilshan) is a Senior Software Engineer with 4+ years of experience building scalable, accessible web applications with React, Next.js, Node.js, Python and AWS.",
  authors: [{ name: "Dinuka Abeygunawardhana", url: "https://dinukadilshan.com" }],
  creator: "Dinuka Abeygunawardhana",
  keywords: [
    "Dinuka Abeygunawardhana", 
    "Dinuka",
    "Dinuka Dilshan",
    "Senior Software Engineer",
    "Software Engineer",
    "Full-stack Engineer",
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Next.js",
    "Python",
    "AI / RAG",
    "Cloud Web Apps",
    "University of Kelaniya", 
  ],
  metadataBase: new URL("https://dinukadilshan.com"),
  openGraph: {
    title: "Dinuka Abeygunawardhana (Dinuka Dilshan) | Senior Software Engineer",
    description:
      "Senior Software Engineer with 4+ years of experience building scalable, accessible web applications. Explore the portfolio of Dinuka Abeygunawardhana.",
    images: [
      {
        url: dinukaImage.src,
        width: dinukaImage.width,
        height: dinukaImage.height,
        alt: "Dinuka Abeygunawardhana - Senior Software Engineer",
      },
    ],
    type: "website",
    url: "https://dinukadilshan.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinuka Abeygunawardhana | Senior Software Engineer",
    description:
      "Senior Software Engineer building scalable web applications with React, Next.js, Node.js, Python and AWS.",
    images: [dinukaImage.src],
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
              "name": "Dinuka Abeygunawardhana",
              "alternateName": "Dinuka Dilshan", 
              "url": "https://dinukadilshan.com",
              "image": "https://dinukadilshan.com/opengraph-image.png",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Rhino Partners"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University of Kelaniya" 
              },
              "sameAs": [
                "https://github.com/Dinuka-Dilshan",
                "https://www.linkedin.com/in/dinuka-abeygunawardhana/",
                "https://www.researchgate.net/profile/Dinuka-Abeygunawardhana"
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${bricolage.className} antialiased flex items-center flex-col`}
      >
        <main className="container max-w-3xl my-12 lg:my-24 px-5 lg:px-8">
          {children} 
          <Footer />
        </main>
      </body>
    </html>
  );
}