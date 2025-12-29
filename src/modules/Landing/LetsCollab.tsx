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
    url: "https://www.linkedin.com/in/dilshan-dinuka",
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
      <ul className="flex flex-col gap-3">
        {collabLinks.map(({ title, url, Icon }) => (
          <li key={title} className="flex  items-center gap-2">
            <Icon className="size-4 inline-block" />
            <Link href={url} target="_blank" className="font-semibold">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default LetsCollab;
