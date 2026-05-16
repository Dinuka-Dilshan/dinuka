import { BookOpenText, GithubIcon, LinkedinIcon, Rss } from "lucide-react";
import Link from "next/link";

const links = [
  { url: "https://github.com/Dinuka-Dilshan", Icon: GithubIcon, label: "GitHub" },
  {
    url: "https://www.linkedin.com/in/dinuka-abeygunawardhana/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    url: "https://stackoverflow.com/users/12492472/dinuka-dilshan",
    Icon: Rss,
    label: "Stack Overflow",
  },
  {
    url: "https://www.researchgate.net/profile/Dinuka-Abeygunawardhana",
    Icon: BookOpenText,
    label: "ResearchGate",
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-sage-mid flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-faint">
        © {new Date().getFullYear()} Dinuka Abeygunawardhana. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {links.map(({ url, Icon, label }) => (
          <Link
            key={label}
            href={url}
            target="_blank"
            aria-label={label}
            className="text-faint hover:text-olive transition-colors"
          >
            <Icon size={15} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
