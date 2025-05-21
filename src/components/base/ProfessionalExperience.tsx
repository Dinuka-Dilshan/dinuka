import Section from "@/components/base/Section";
import TimeLine from "@/components/base/Timeline";
import AeronologyLogo from "@/images/aeronology.jpeg";
import RhinoLogo from "@/images/rhinopartners.jpeg";
import VillvayLogo from "@/images/villvay.svg";

const ProfessionalExperience = () => {
  return (
    <Section
      subtitle="A snapshot of my roles, responsibilities, and contributions in the tech
        industry."
      title="Professional Journey"
    >
      <TimeLine
        className="mt-4"
        data={[
          {
            logo: RhinoLogo,
            companyName: "Rhino Partners",
            experiences: [
              {
                description:
                  "Worked on alternatives.pe from the initial stage, building a modern data-driven platform using Next.js, AWS, and Tailwind CSS. Integrated external APIs, implemented dynamic data visualization with AG Grid and AG Charts, optimized data fetching with React Query, and built accessible, responsive UI components using shadcn/ui.",
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
                  "Contributed to Wurth Bear Suppliers e-commerce app by developing frontend and backend features using Next.js, React, Tailwind CSS, and Shadcn/ui. Optimized data fetching with React Query, collaborated via GitHub, and supported deployment on Vercel for scalability.",
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
                  "Contributed to AeroControl, Tareo, DataInsight, Webtop Ticketing, and Sabre Webtop Ticketing applications by developing fullstack features for air ticket booking and data-driven platforms using React, TypeScript, Node.js, C#, and AWS, with a focus on performance, scalability, and secure workflows.",
                designation: "Software Engineer",
                years: "March 2023 - January 2025",
              },
              {
                description:
                  "Contributed to the Aero Frontend Common Library and Aeronology corporate website during internship, gaining hands-on experience with React, TypeScript, Material-UI, and Storybook while building reusable components, improving existing features, and enhancing user experience across multiple frontend applications.",
                designation: "Software Engineer (Intern) ",
                years: "Sep 2022 - Mar 2023",
              },
            ],
          },
        ]}
      />
    </Section>
  );
};

export default ProfessionalExperience;
