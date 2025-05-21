import { SOCIAL_LINKS } from "@/components/base/Header";
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-purple-500/20">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-amber-500/5" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-10 md:grid-cols-2 ">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Dinuka Dilshan
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-xs">
              Creating innovative solutions and memorable experiences through
              technology and design.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ Icon, url, label }) => (
                <Link
                  key={url}
                  target="_blank"
                  href={url}
                  className="group relative"
                  aria-label={label}
                >
                  <Icon className="text-zinc-700 hover:text-pink-600 hover:scale-110 h-5 w-5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links
          <div className="space-y-4">
            <h3 className="text-lg font-bold relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="h-px w-0 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-500 mt-0.5" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  jadinukadilshan@gmail.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-500 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-zinc-600 dark:text-zinc-300">
                  Colombo, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-purple-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              © {new Date().getFullYear()} Dinuka Dilshan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
