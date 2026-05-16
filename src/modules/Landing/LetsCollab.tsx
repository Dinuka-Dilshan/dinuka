import Section from "@/modules/Landing/Section";
import {
  BookOpenText,
  GithubIcon,
  LinkedinIcon,
  Mail,
  MessageCircleMore,
  Rss,
} from "lucide-react";
import Link from "next/link";

const collabLinks = [
  {
    url: "https://github.com/Dinuka-Dilshan",
    title: "GitHub",
    Icon: GithubIcon,
  },
  {
    url: "https://stackoverflow.com/users/12492472/dinuka-dilshan",
    title: "Stackoverflow",
    Icon: Rss,
  },
  {
    url: "https://www.linkedin.com/in/dinuka-abeygunawardhana/",
    title: "LinkedIn",
    Icon: LinkedinIcon,
  },
  { url: "mailto:jadinukadilshan@gmail.com", title: "Email", Icon: Mail },
  {
    url: "https://www.researchgate.net/profile/Dinuka-Abeygunawardhana",
    title: "ResearchGate",
    Icon: BookOpenText,
  },
  {
    url: "https://wa.me/+94762629249",
    title: "WhatsApp",
    Icon: MessageCircleMore,
  },
];

const LetsCollab = () => {
  return (
    <Section title="Let's collab?">
      <ul className="flex flex-col">
        {collabLinks.map(({ title, url, Icon }) => (
          <li key={title}>
            <Link
              href={url}
              target="_blank"
              className="flex items-center gap-3 py-2.5 px-3 -mx-3 rounded-lg hover:bg-white group transition-colors"
            >
              <Icon className="size-4 text-zinc-400 group-hover:text-violet-500 transition-colors shrink-0" />
              <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default LetsCollab;
