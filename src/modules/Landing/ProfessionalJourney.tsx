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
        description:
          "Built a modern data-driven web platform from the ground up using Next.js, AWS, and modern React tools, featuring dynamic visualizations, API integrations, and responsive UI components.",
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
        description:
          "Developed full-stack features for an e-commerce application using Next.js and React, implementing optimized data fetching, responsive UI components, and scalable cloud deployment.",
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
        description:
          "Contributed to multiple air ticket booking and data-driven applications, developing full-stack features using React, TypeScript, Node.js, C#, and AWS with a focus on performance, scalability, and secure workflows.",
        designation: "Software Engineer",
        years: "March 2023 - January 2025",
      },
      {
        description:
          "Developed reusable React components and enhanced frontend applications during internship using TypeScript and Material-UI.",
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
