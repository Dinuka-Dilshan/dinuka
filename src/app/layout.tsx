import dinukaImage from "#/opengraph-image.png";
import Footer from "@/modules/Landing/Footer";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinuka Abeygunawardhana (Dinuka Dilshan) | Software Engineer",
  description:
    "Official website of Dinuka Abeygunawardhana (Dinuka Dilshan), a Software Engineer with 3+ years of experience creating fast, user-friendly full-stack web apps.",
  authors: [{ name: "Dinuka Abeygunawardhana", url: "https://dinukadilshan.com" }],
  creator: "Dinuka Abeygunawardhana",
  keywords: [
    "Dinuka Abeygunawardhana", 
    "Dinuka",
    "Dinuka Dilshan",
    "Software Engineer",
    "Fullstack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Cloud Web Apps",
    "University of Kelaniya", 
  ],
  metadataBase: new URL("https://dinukadilshan.com"),
  openGraph: {
    title: "Dinuka Abeygunawardhana (Dinuka Dilshan) | Software Engineer",
    description:
      "Software engineer with 3+ years of experience building scalable web solutions. Explore the portfolio of Dinuka Abeygunawardhana.",
    images: [
      {
        url: dinukaImage.src,
        width: dinukaImage.width,
        height: dinukaImage.height,
        alt: "Dinuka Abeygunawardhana - Software Engineer",
      },
    ],
    type: "website",
    url: "https://dinukadilshan.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinuka Abeygunawardhana | Software Engineer",
    description: "Software engineer specializing in full-stack web development and cloud solutions.",
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
                "https://www.linkedin.com/in/dilshan-dinuka",
                "https://www.researchgate.net/profile/Dinuka-Abeygunawardhana"
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${bricolage.className} antialiased flex items-center flex-col`}
      >
        <main className="container max-w-xl my-10 lg:my-32 px-5 lg:px-0">
          {children} 
          <Footer />
        </main>
      </body>
    </html>
  );
}