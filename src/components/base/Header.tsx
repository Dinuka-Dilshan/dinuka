import Logo from "@/components/base/Logo";
import {
  GithubIcon,
  LinkedinIcon,
  LucideIcon,
  Mail,
  MessageCircleMore,
} from "lucide-react";
import Link from "next/link";

// const HEADER_LINKS: { label: string; path: string }[] = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "#about" },
// ];

const SOCIAL_LINKS: { url: string; Icon: LucideIcon }[] = [
  { Icon: GithubIcon, url: "https://github.com/Dinuka-Dilshan" },
  { Icon: LinkedinIcon, url: "https://www.linkedin.com/in/dilshan-dinuka" },
  { Icon: Mail, url: "mailto:jadinukadilshan@gmail.com" },
  { Icon: MessageCircleMore, url: "https://wa.me/+94762629249" },
];

const Header = () => {
  return (
    <nav className="w-full fixed top-0 left-0 backdrop-blur-xl bg-white/10 border-b z-50">
      <div className="container max-w-4xl  px-6 lg:px-10 py-3 lg:py-6 mx-auto flex justify-between items-center">
        <Logo />
        {/* <ul className="flex gap-5">
          {HEADER_LINKS.map(({ label, path }) => (
            <li
              key={path}
              className="text-sm  hover:text-primary transition-colors"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul> */}
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ Icon, url }) => (
            <Link key={url} target="_blank" href={url}>
              <Icon
                size={20}
                className="hover:text-primary transition-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
