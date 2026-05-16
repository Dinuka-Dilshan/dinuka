import dinukaImage from "@/images/dinuka.jpg";
import DinukaImage from "@/modules/Landing/components/DinukaImage";
import { ExternalLink } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex-1 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 bg-sage-light/60 text-olive border border-sage-mid px-3 py-1.5 rounded-full w-fit">
          <span className="h-2 w-2 rounded-full bg-olive animate-pulse" />
          <span className="text-sm font-semibold tracking-wide">
            Open to work
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-[2rem] lg:text-6xl font-bold text-mute-dark leading-tight tracking-tight">
              Dinuka Dilshan
            </h1>
            <p className="text-xl lg:text-2xl text-olive font-semibold mt-2">
              Frontend Engineer
            </p>
          </div>
          <div className="lg:hidden relative shrink-0">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-sage-light rounded-xl" />
            <div className="relative h-24 w-20 rounded-xl overflow-hidden bg-sage-mid z-10">
              <ExportedImage
                src={dinukaImage}
                alt="Dinuka Dilshan"
                width={80}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <p className="text-body leading-7 text-base">
          I craft fast, accessible, and visually polished web experiences using
          React and Next.js. Currently helping build financial platforms at
          Rhino Partners.
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#work"
            className="whitespace-nowrap bg-olive text-white px-5 py-2.5 rounded-lg text-base font-semibold hover:bg-olive-dark transition-colors"
          >
            View my work
          </a>
          <Link
            href="mailto:jadinukadilshan@gmail.com"
            className="whitespace-nowrap border border-sage-mid text-olive px-5 py-2.5 rounded-lg text-base font-semibold hover:bg-sage-light/40 transition-colors"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="/DinukaDilshan.pdf"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-base font-medium text-faint hover:text-olive transition-colors"
          >
            View my CV
            <ExternalLink size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        <DinukaImage />
      </div>
    </section>
  );
};

export default HeroSection;
