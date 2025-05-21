import FreelanceExperience from "@/components/base/FreelanceExperience";
import ProfessionalExperience from "@/components/base/ProfessionalExperience";
import dinuka from "@/images/dinuka.jpg";
import { Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-amber-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-amber-500/10 rounded-full blur-3xl -z-10" />

      <section className="mt-24 lg:mt-28 flex flex-col md:flex-row md:items-center md:gap-10">
        {/* Image with decorative border */}
        <div className="relative mb-8 md:mb-0 w-fit">
          <div className="absolute w-[258px] -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 rounded-full opacity-70" />
          <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 w-[250px] h-[250px]">
            <Image
              src={dinuka}
              alt={"Dinuka Dilshan"}
              className="aspect-square object-cover grayscale-100 "
            />
          </div>
          {/* Decorative circle */}
          <Sparkles className="absolute -top-1 -left-1 w-6 h-6 rounded-full text-purple-500" />
          <Sparkles className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full text-pink-500" />
        </div>

        <div className="flex flex-col justify-around">
          <h6 className="text-2xl text-zinc-700 dark:text-zinc-300">
            Hey there! <br />
            <span className="text-5xl font-semibold mt-2 block">
              I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Dinuka Dilshan
              </span>
            </span>
          </h6>
          <h4 className="text-xl mt-5 relative">
            I build{" "}
            <strong className="font-semibold text-zinc-800 dark:text-zinc-100">
              fast, user-friendly, fullstack web apps
            </strong>{" "}
            that run in the cloud, scale effortlessly, ship with style, and
            always arrive on time.
            <span className="absolute -bottom-2 left-0 h-0.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </h4>
        </div>
      </section>

      <p className="mt-10 text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
        I specialize in building cloud-powered solutions using modern
        technologies like React, Next.js, Node.js, TypeScript, and AWS. With a
        strong eye for detail and a focus on performance, I care as much about
        how things work as how they feel. Whether it&apos;s crafting smooth user
        experiences or architecting robust backends, I build with purpose — and
        always deliver on time.
      </p>

      <section className="mt-10 relative">
        <Link
          className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold overflow-hidden"
          href="/DinukaDilshan.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Button background */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105"></span>
          {/* Button text */}
          <span className="relative text-white">Download CV</span>
          <Download
            strokeWidth={2}
            className="relative inline-block size-4 text-white"
          />
        </Link>
      </section>

      <ProfessionalExperience />
      <FreelanceExperience />
    </div>
  );
}
