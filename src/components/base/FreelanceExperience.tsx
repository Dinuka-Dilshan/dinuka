import Section from "@/components/base/Section";
import { Badge } from "@/components/ui/badge";
import benFahimnia from "@/images/benFahimnia.png";
import chanceLab from "@/images/chanceandchoicelab.png";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FreelanceExperience = () => {
  return (
    <Section
      title={"Freelance & Side Projects"}
      subtitle={"Personal builds and freelance work beyond my day job."}
    >
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
              A clean, modern portfolio site built for Ben Fahimnia, showcasing
              his work.The site is fully responsive, optimized for speed, and
              styled with a minimalist design.
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
    </Section>
  );
};

export default FreelanceExperience;
