import { PropsWithChildren } from "react";

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <section className="mt-16">
      <p className="text-mute-light font-medium mb-6">{title}</p>
      {children}
    </section>
  );
};

export default Section;
