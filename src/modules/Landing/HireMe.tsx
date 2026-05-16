import { GithubIcon, LinkedinIcon, Mail, MessageCircleMore } from "lucide-react";
import Link from "next/link";

const socials = [
  { url: "https://github.com/Dinuka-Dilshan", label: "GitHub", Icon: GithubIcon },
  {
    url: "https://www.linkedin.com/in/dinuka-abeygunawardhana/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  { url: "https://wa.me/+94762629249", label: "WhatsApp", Icon: MessageCircleMore },
];

const HireMe = () => {
  return (
    <section className="mt-12 lg:mt-20 bg-white border border-sage-mid rounded-2xl p-8 lg:p-10 text-center">
      <div className="inline-flex items-center gap-2 bg-sage-light/60 text-olive border border-sage-mid px-3 py-1.5 rounded-full mb-6">
        <span className="h-2 w-2 rounded-full bg-olive animate-pulse" />
        <span className="text-xs font-semibold tracking-wide">
          Open to new opportunities
        </span>
      </div>

      <h2 className="text-3xl lg:text-4xl font-bold text-mute-dark leading-snug">
        Let&apos;s build something great together
      </h2>
      <p className="text-body mt-4 max-w-md mx-auto leading-7 text-base">
        I&apos;m currently available for full-time frontend roles and select
        freelance projects. If you&apos;re looking for an engineer who cares
        about both code quality and user experience, I&apos;d love to hear from
        you.
      </p>

      <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
        <Link
          href="mailto:jadinukadilshan@gmail.com"
          className="inline-flex items-center gap-2 bg-olive text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-olive-dark transition-colors"
        >
          <Mail size={15} />
          Email me
        </Link>
        <Link
          href="https://www.linkedin.com/in/dinuka-abeygunawardhana/"
          target="_blank"
          className="inline-flex items-center gap-2 border border-sage-mid text-olive px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-sage-light/40 transition-colors"
        >
          <LinkedinIcon size={15} />
          LinkedIn
        </Link>
      </div>

      <div className="flex items-center justify-center gap-5 mt-8 pt-6 border-t border-sage-mid">
        {socials.map(({ url, label, Icon }) => (
          <Link
            key={label}
            href={url}
            target="_blank"
            className="flex items-center gap-1.5 text-sm font-medium text-faint hover:text-olive transition-colors"
          >
            <Icon size={14} />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HireMe;
