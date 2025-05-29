import Section from "@/modules/Landing/Section";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "FlickPick",
    demoLink: "https://flickpick.dinukadilshan.com/",
  },
  {
    title: "Ben Fahimnia - Personal Portfolio Website",
    demoLink: "https://www.benfahimnia.com/",
  },
  {
    title: "Chance and Choice Lab - Portfolio & Survey Platform",
    demoLink: "https://www.chanceandchoicelab.com/",
  },
];

const SideProjects = () => {
  return (
    <Section title="My side projects">
      <ul className="flex flex-col gap-3">
        {projects.map(({ demoLink, title }) => (
          <li key={title}>
            <Link href={demoLink} target="_blank" className="font-semibold">
              {title}
            </Link>
            <ExternalLink
              size={15}
              className="inline-block ml-2"
              strokeWidth={3}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default SideProjects;
