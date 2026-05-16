import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";

type TimelineItem = {
  logo: StaticImageData;
  logoBg?: string;
  logoContain?: boolean;
  companyName: string;
  experiences: { years: string; description: string; designation: string }[];
};
type Props = {
  data: TimelineItem[];
  className?: string;
};

const TimeLine = ({ data, className }: Props) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {data.map(
        (
          { logo, logoBg, logoContain, experiences, companyName },
          companyIndex,
        ) => (
          <div key={companyName}>
            {/* Company header row */}
            <div className="flex gap-4">
              <div className="w-9 flex flex-col items-center shrink-0">
                <div
                  className="h-9 w-9 rounded-xl overflow-hidden ring-2 ring-sage-mid shrink-0"
                  style={{ backgroundColor: logoBg ?? "white" }}
                >
                  <ExportedImage
                    src={logo}
                    alt={companyName}
                    width={36}
                    height={36}
                    className={cn(
                      "w-full h-full",
                      logoContain ? "object-contain p-1.5" : "object-cover",
                    )}
                  />
                </div>
                <div className="w-px bg-sage-mid flex-1 mt-2" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-olive pb-3 mt-1">
                {companyName}
              </p>
            </div>

            {/* Experience rows */}
            {experiences.map(({ description, designation, years }, expIdx) => {
              const isLastExp =
                expIdx === experiences.length - 1 &&
                companyIndex === data.length - 1;

              return (
                <div key={designation} className="flex gap-4">
                  <div className="w-9 flex flex-col items-center gap-2">
                    <Dot className="text-zinc-300 m-0 " size={25} />
                    <div
                      className={cn(
                        "w-px bg-sage-mid",
                        isLastExp ? "1/2" : "flex-1",
                      )}
                    />
                  </div>
                  <div className="min-w-0 flex-1 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 mb-1.5">
                      <p className="text-base font-semibold text-mute-dark">
                        {designation}
                      </p>
                      <p className="text-sm text-faint shrink-0 font-medium">
                        {years}
                      </p>
                    </div>
                    <p className="text-base text-body leading-7">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ),
      )}
    </div>
  );
};

export default TimeLine;
