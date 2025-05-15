import { Badge } from "@/components/ui/badge";
import benFahimnia from "@/images/benFahimnia.png";
import chanceLab from "@/images/chanceandchoicelab.png";
import dinuka from "@/images/dinuka.jpg";
import { Download, ExternalLink } from "lucide-react";
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
      <section className="mt-16">
        <h6 className="text-3xl font-semibold ">Projects</h6>
        <h4 className="font-semibold text-gray-500">
          Real-world solutions crafted with performance, clarity, and care.
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-8">
          <div className="rounded-md min-h-80 border bg-gradient-to-br from-pink-50 to-blue-50">
            <Image
              className="rounded-t-md h-56 object-cover"
              src={benFahimnia}
              alt={"Ben Fahimnia Personnel website"}
            />
            <div className="px-5 py-4 flex gap-3 flex-col">
              <h6 className="font-semibold text-lg">
                Ben Fahimnia - Personal Portfolio Website
              </h6>
              <h1 className="text-[#86868b] font-medium ">
                A clean, modern portfolio site built for Ben Fahimnia,
                showcasing his work.The site is fully responsive, optimized for
                speed, and styled with a minimalist design.
              </h1>

              <div className="flex gap-1">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind</Badge>
                <Badge variant="outline">shadcn/ui</Badge>
                <Badge variant="outline">Amplify </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Link
                  className="text-primary text-sm font-semibold"
                  href="https://www.benfahimnia.com/"
                >
                  Live Demo
                </Link>
                <ExternalLink className="inline-block size-3.5 text-primary" />
              </div>
            </div>
          </div>
          <div className="rounded-md min-h-80 border bg-gradient-to-br from-pink-50 to-blue-50">
            <Image
              className="rounded-t-md h-56 object-cover"
              src={chanceLab}
              alt={"Ben Fahimnia Personnel website"}
            />
            <div className="px-5 py-4 flex gap-3 flex-col">
              <h6 className="font-semibold text-lg">
                Chance and Choice Lab - Portfolio & Survey Platform
              </h6>
              <h1 className="text-[#86868b] font-medium ">
                A two-part web experience for Chance and Choice Lab, including a
                public-facing portfolio site and a secure behavioral survey
                platform.
              </h1>

              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Mui</Badge>
                <Badge variant="outline">React Query</Badge>
                <Badge variant="outline">AWS Lambda</Badge>
                <Badge variant="outline">AWS CDK</Badge>
                <Badge variant="outline">Dynamodb</Badge>
                <Badge variant="outline">API Gateway</Badge>
              </div>
              <div className="flex items-center gap-1">
                <Link
                  className="text-primary text-sm font-semibold"
                  href="https://www.chanceandchoicelab.com/"
                >
                  Live Demo
                </Link>
                <ExternalLink className="inline-block size-3.5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
