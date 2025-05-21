import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
};

const ExperienceCard = ({
  image,
  title,
  description,
  technologies,
  demoLink,
}: Props) => {
  return (
    <div className="flex max-w-full box-border flex-col lg:flex-row bg-white rounded-md shadow">
      <Image
        className="rounded-t-md lg:rounded-t-none lg:rounded-l-md h-56 w-full lg:w-56 object-cover object-left"
        src={image}
        alt={title}
      />
      <div className="px-5 py-4 flex gap-3 flex-col">
        <h6 className="font-semibold text-lg">{title}</h6>
        <h1 className="text-[#86868b] font-medium ">{description}</h1>

        <div className="flex gap-1 flex-wrap">
          {technologies.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Link
            target="_blank"
            className="text-primary text-sm font-semibold"
            href={demoLink}
          >
            Live Demo
            <ExternalLink className="inline-block size-3.5 text-primary ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
