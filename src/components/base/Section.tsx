import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  subtitle: string;
}>;

const Section = ({ subtitle, title, children }: Props) => {
  return (
    <>
      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
      <section className="flex flex-col h-fit mt-14 w-full relative">
        <div className="absolute -left-4 top-2 h-12 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            {title}
          </h2>
          <h3 className="font-medium text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </h3>
          <div className="h-0.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>
        <div className="relative">{children}</div>
      </section>
    </>
  );
};

export default Section;
