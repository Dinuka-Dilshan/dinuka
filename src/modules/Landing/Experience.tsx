import AeronologyLogo from "@/images/aeronology.jpeg";
import RhinoLogo from "@/images/rhinopartners.jpeg";
import VillvayLogo from "@/images/villvay.svg";
import Section from "@/modules/Landing/Section";
import TimeLine from "@/modules/Landing/components/Timeline";

const TimeLine_Data = [
  {
    logo: RhinoLogo,
    companyName: "Rhino Partners",
    experiences: [
      {
        description: `Building full-stack features for an AI-powered clinical search application that gives GPs source-grounded,
LLM-generated answers, using Python and retrieval-augmented generation (RAG). Migrated an existing Svelte
application to Next.js to align it with the wider React platform. Built internal observability tools that bring
internal and third-party monitoring into one place.`,
        designation: "Senior Software Engineer",
        years: "Sep 2026 - Present",
      },
      {
        description: `Co-architected a greenfield financial data platform for investors on React, Next.js, TypeScript and AWS,
built to support thousands of concurrent users with high availability. Built visualisations and interactive tables
that render millions of rows without blocking the UI. Reworked state management and data fetching with Zustand
and TanStack Query, cutting perceived load times by an estimated 40–50%.`,
        designation: "Software Engineer",
        years: "Apr 2025 - Sep 2026",
      },
    ],
  },
  {
    logo: VillvayLogo,
    logoBg: "black",
    logoContain: true,
    companyName: "Villvay Systems (Pvt) Ltd",
    experiences: [
      {
        description: `Joined mid-project to rescue a delayed e-commerce launch. Refactored a fragmented Next.js/React codebase,
resolved technical debt and delivered a stable, launch-ready frontend on an aggressive deadline.`,
        designation: "Software Engineer (Fixed-term Contract)",
        years: "Jan 2025 - Apr 2025",
      },
    ],
  },
  {
    logo: AeronologyLogo,
    companyName: "Aeronology",
    experiences: [
      {
        description: `Core contributor on the full rewrite of AeroControl from Vue.js to React. Implemented React Query caching
within a BFF architecture, cutting baseline load times by an estimated 35%. Drove the application-wide API
migration from GraphQL to REST, removing payload bottlenecks and stabilising end-to-end data handling.`,
        designation: "Software Engineer",
        years: "Mar 2023 - Jan 2025",
      },
      {
        description: `Delivered full-stack features using AWS Lambda, DynamoDB and S3 within a React, Node.js and .NET
ecosystem.`,
        designation: "Software Engineer (Intern)",
        years: "Sep 2022 - Mar 2023",
      },
    ],
  },
];

const Experience = () => {
  return (
    <Section title="Experience">
      <TimeLine data={TimeLine_Data} />
    </Section>
  );
};

export default Experience;
