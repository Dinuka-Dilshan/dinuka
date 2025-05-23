import DinukaImage from "@/modules/Landing/components/DinukaImage";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex lg:items-center gap-5 flex-col lg:flex-row">
        <DinukaImage />
        <div>
          <h1 className="text-3xl ">
            Hey, I&apos;m <span className="font-semibold">Dinuka Dilshan</span>
          </h1>
          <p className="text-mute-dark text-xl font-semibold">
            Software engineer at Rhino Partners
          </p>
        </div>
      </div>
      <p className="text-mute-light  leading-7 font-medium">
        Hi, I&apos;m Dinuka! I&apos;m a software engineer with 3+ years of
        experience creating fast, user-friendly full-stack web apps that run in
        the cloud. I love building software solutions that deliver real value
        for both users and businesses.
      </p>
      <Link
        className="text-mute-light font-medium -mt-6"
        href="/DinukaDilshan.pdf"
        target="_blank"
      >
        View my cv{" "}
        <ExternalLink
          size={15}
          className="text-mute-light inline-block ml-0.5 mb-0.5"
          strokeWidth={3}
        />
      </Link>
    </section>
  );
};

export default HeroSection;
