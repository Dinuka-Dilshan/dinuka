import Section from "@/modules/Landing/Section";

const skills = [
  { label: "React" },
  { label: "Next.js" },
  { label: "TypeScript" },
  { label: "Tailwind CSS" },
  { label: "React Query" },
  { label: "Node.js" },
  { label: "AWS" },
  { label: "Git" },
  { label: ".NET" },
  { label: "DynamoDB" },
];

const TechStack = () => {
  return (
    <Section title="Tech stack">
      <div className="flex flex-wrap gap-2">
        {skills.map(({ label }) => (
          <span
            key={label}
            className="bg-white border border-sage-mid text-olive text-base font-medium px-3.5 py-1.5 rounded-full"
          >
            {label}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
