import Section from "@/modules/Landing/Section";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Ben Fahimnia — Personal Portfolio",
    description:
      "Designed and built a personal portfolio website for a researcher, focusing on clean presentation of academic work and publications.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://www.benfahimnia.com/",
  },
  {
    title: "Chance and Choice Lab",
    description:
      "Portfolio and interactive survey platform for a behavioral research lab, combining content management with custom survey tooling.",
    tags: ["React", "Next.js", "TypeScript"],
    demoLink: "https://www.chanceandchoicelab.com/",
  },
];

const SideProjects = () => {
  return (
    <Section title="Selected work" id="work">
      <div className="flex flex-col gap-4">
        {projects.map(({ demoLink, title, description, tags }) => (
          <div
            key={title}
            className="bg-white border border-sage-mid rounded-2xl overflow-hidden hover:border-olive hover:shadow-sm transition-all"
          >
            <div className="h-36 bg-sage-light/40 flex items-center justify-center border-b border-sage-mid">
              <span className="text-sm font-medium text-faint uppercase tracking-widest">
                Screenshot coming soon
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-mute-dark leading-snug">{title}</h3>
                <Link
                  href={demoLink}
                  target="_blank"
                  className="shrink-0 text-olive hover:text-olive-dark transition-colors mt-0.5"
                  aria-label={`Visit ${title}`}
                >
                  <ExternalLink size={15} strokeWidth={2} />
                </Link>
              </div>
              <p className="text-base text-body mt-2 leading-7">{description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium bg-sage-light/50 border border-sage-mid text-olive px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SideProjects;
