import { Separator } from "@/components/ui/separator";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

const Section = ({ subtitle, title, children }: Props) => {
  return (
    <>
      <Separator className="mt-14" />
      <section className="pt-6 flex flex-col h-fit">
        <h6 className="text-3xl font-semibold ">{title}</h6>
        <h6 className="font-semibold text-gray-500">{subtitle}</h6>
        {children}
      </section>
    </>
  );
};

export default Section;
