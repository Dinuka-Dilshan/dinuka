import Section from "@/modules/Landing/Section";

const skills = [
  { label: "TypeScript" },
  { label: "React" },
  { label: "Next.js" },
  { label: "Node.js" },
  { label: "Python" },
  { label: "AWS" },
  { label: "PostgreSQL" },
  { label: "DynamoDB" },
  { label: "TanStack Query" },
  { label: "Tailwind CSS" },
  { label: "Playwright" },
  { label: "RAG / LLMs" },
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
