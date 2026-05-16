import { PropsWithChildren } from "react";

const Section = ({
  title,
  children,
  id,
}: PropsWithChildren<{ title: string; id?: string }>) => {
  return (
    <section className="mt-12 lg:mt-20" id={id}>
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-olive shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-px bg-sage-mid" />
      </div>
      {children}
    </section>
  );
};

export default Section;
