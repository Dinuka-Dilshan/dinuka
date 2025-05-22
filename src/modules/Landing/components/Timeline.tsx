import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

type TimelineItem = {
  logo: StaticImageData;
  companyName: string;
  experiences: { years: string; description: string; designation: string }[];
};
type Props = {
  data: TimelineItem[];
  className?: string;
};

const TimeLine = ({ data, className }: Props) => {
  return (
    <div className={cn("py-3.5 flex flex-col gap-8", className)}>
      {data.map(({ logo, experiences, companyName }, index) => (
        <div key={`${companyName}-${index}`} className="flex h-full gap-5">
          <div className="gap-3 flex flex-col items-center">
            <div className="relative h-10 w-10 rounded-full  bg-black flex justify-center items-center">
              <Image src={logo} alt="" className="rounded-full" />
            </div>
            {experiences.map((_, index) => (
              <Fragment key={index}>
                {index !== 0 && (
                  <Dot className="text-zinc-300 m-0 " size={25} />
                )}
                <div className="w-px bg-zinc-200 min-h-10 mb-2.5 grow"></div>
              </Fragment>
            ))}
          </div>
          <div>
            {experiences.map(({ description, designation, years }, index) => (
              <div
                className={cn("flex flex-col gap-1 ", index !== 0 && "pt-2.5")}
                key={designation}
              >
                <p className="font-medium ">
                  {designation} | {companyName}
                </p>
                <p className="text-xs">{years}</p>
                <p className="text-mute-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
