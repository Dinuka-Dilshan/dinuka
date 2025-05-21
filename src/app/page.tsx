import FreelanceExperience from "@/components/base/FreelanceExperience";
import ProfessionalExperience from "@/components/base/ProfessionalExperience";
import dinuka from "@/images/dinuka.jpg";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mt-24 lg:mt-28">
        <Image
          src={dinuka}
          alt={"Dinuka Dilshan"}
          height={250}
          className="rounded-[50] aspect-square object-cover  grayscale-100 object-top"
        />
        <div className="flex flex-col justify-around mt-5">
          <h6 className="text-2xl">
            Hey there! <br />
            <span className="text-5xl font-semibold ">
              {" "}
              I&apos;m <span className="text-primary">Dinuka Dilshan</span>
            </span>
          </h6>
          <h4 className="text-xl mt-5">
            I build <strong>fast, user-friendly, fullstack web apps</strong>{" "}
            that run in the cloud, scale effortlessly, ship with style, and
            always arrive on time.
          </h4>
        </div>
      </section>

      <p className="mt-5 text-xl">
        I specialize in building cloud-powered solutions using modern
        technologies like React,Next.js, Node.js, TypeScript, and AWS. With a
        strong eye for detail and a focus on performance, I care as much about
        how things work as how they feel. Whether it&apos;s crafting smooth user
        experiences or architecting robust backends, I build with purpose — and
        always deliver on time.
      </p>

      <section className="mt-8">
        <Link
          className="p-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
          href="/DinukaDilshan.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV{" "}
          <Download strokeWidth={2} className="inline-block size-4" />
        </Link>
      </section>
      <ProfessionalExperience />
      <FreelanceExperience />
    </>
  );
}
