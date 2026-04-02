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
        description: `Co-architected the frontend of a greenfield financial data platform for investors to analyze company
performance, funding, and market metrics at scale - built on Next.js, React, and AWS to support thousands of
concurrent users with high availability.`,
        designation: "Software Engineer",
        years: "April 2025 - Present",
      },
    ],
  },
  {
    logo: VillvayLogo,
    companyName: "Villvay Systems (Pvt) Ltd",
    experiences: [
      {
        description: `Fixed-term contract to rescue a delayed e-commerce launch - onboarded mid-project with an aggressive go-live
deadline.`,
        designation: "Software Engineer",
        years: "January 2025 - April 2025",
      },
    ],
  },
  {
    logo: AeronologyLogo,
    companyName: "Aeronology",
    experiences: [
      {
        description: `Served as a core contributor on the full rewrite of AeroControl, migrating a legacy Vue.js architecture to a
modern React stack. Implemented React Query with advanced caching strategies within a BFF architecture,
cutting baseline load times by an estimated 35%.`,
        designation: "Software Engineer",
        years: "March 2023 - January 2025",
      },
      {
        description: `Delivered full-stack features using AWS Lambda, DynamoDB, and S3 within a React, Node.js, and .NET
ecosystem.`,
        designation: "Software Engineer (Intern) ",
        years: "Sep 2022 - Mar 2023",
      },
    ],
  },
];

const ProfessionalJourney = () => {
  return (
    <Section title="Professional journey">
      <TimeLine className="mt-6" data={TimeLine_Data} />
    </Section>
  );
};

export default ProfessionalJourney;
