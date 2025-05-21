import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
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
    <div className={cn("flex flex-col gap-10", className)}>
      {data.map(({ logo, experiences, companyName }, index) => (
        <div
          key={`${companyName}-${index}`}
          className="flex h-full gap-5 group"
        >
          <div className="gap-3 flex flex-col items-center">
            {/* Logo with gradient border */}
            <div className="relative ">
              {/* Gradient border */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="relative h-10 w-10 rounded-full  flex justify-center items-center overflow-hidden border-2 border-white dark:border-zinc-900">
                <Image
                  src={logo}
                  alt={companyName}
                  className="rounded-full z-30"
                  fill
                />
              </div>
            </div>

            {/* Timeline with dots */}
            {experiences.map((_, index) => (
              <Fragment key={index}>
                {index !== 0 && (
                  <div className="relative">
                    <Dot
                      className="text-purple-400 dark:text-purple-500 m-0 z-10 relative"
                      size={28}
                    />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-full bg-purple-400/20 dark:bg-purple-500/20 blur-sm" />
                  </div>
                )}
                {/* Gradient timeline line */}
                <div className="relative w-0.5 min-h-10 mb-2.5 grow">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 opacity-70" />
                  {/* Animated pulse on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </div>
              </Fragment>
            ))}
          </div>

          <div className="space-y-2">
            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              {companyName}
            </p>

            {experiences.map(({ description, designation, years }, index) => (
              <div
                className={cn("flex flex-col gap-2", index !== 0 && "pt-2.5")}
                key={designation}
              >
                <div className="space-y-1">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    {designation}
                  </p>
                  <p className="text-xs font-medium ">{years}</p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 relative">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
