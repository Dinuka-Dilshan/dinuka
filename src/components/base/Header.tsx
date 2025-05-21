import Logo from "@/components/base/Logo";
import ScrollIndicator from "@/components/base/ScrollIndicator";
import {
  GithubIcon,
  LinkedinIcon,
  type LucideIcon,
  Mail,
  MessageCircleMore,
} from "lucide-react";
import Link from "next/link";

// const HEADER_LINKS: { label: string; path: string }[] = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "#about" },
// ];

export const SOCIAL_LINKS: { url: string; Icon: LucideIcon; label: string }[] =
  [
    {
      Icon: GithubIcon,
      url: "https://github.com/Dinuka-Dilshan",
      label: "GitHub",
    },
    {
      Icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/dilshan-dinuka",
      label: "LinkedIn",
    },
    { Icon: Mail, url: "mailto:jadinukadilshan@gmail.com", label: "Email" },
    {
      Icon: MessageCircleMore,
      url: "https://wa.me/+94762629249",
      label: "WhatsApp",
    },
  ];

const Header = () => {
  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-xl bg-white/10 dark:bg-zinc-900/10 border-b border-purple-500/10 z-50">
      <div className="container max-w-4xl px-6 lg:px-10 py-5 lg:py-6 mx-auto flex justify-between items-center">
        <Logo />
        <ScrollIndicator />
        {/* <ul className="flex gap-5">
          {HEADER_LINKS.map(({ label, path }) => (
            <li
              key={path}
              className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-400 dark:hover:to-pink-400 transition-colors"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul> */}
        <div className="flex gap-5">
          {SOCIAL_LINKS.map(({ Icon, url, label }) => (
            <Link
              key={url}
              target="_blank"
              href={url}
              className="group relative"
              aria-label={label}
            >
              <Icon
                size={20}
                className="text-zinc-700 hover:scale-110  hover:text-pink-600 transition-all"
              />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
