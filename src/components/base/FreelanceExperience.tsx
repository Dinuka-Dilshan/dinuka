import ExperienceCard from "@/components/base/ExperienceCard";
import Section from "@/components/base/Section";
import benFahimnia from "@/images/benFahimnia.png";
import chanceLab from "@/images/chanceandchoicelab.png";
import flickPick from "@/images/flickpick.png";

const FreelanceExperience = () => {
  return (
    <Section
      title={"Freelance & Side Projects"}
      subtitle={"Personal builds and freelance work beyond my day job."}
    >
      <div className="flex gap-5 flex-col">
        <ExperienceCard
          image={benFahimnia}
          title={"Ben Fahimnia - Personal Portfolio Website"}
          description={`A clean, modern portfolio site built for Ben Fahimnia, showcasing
            his work.The site is fully responsive, optimized for speed, and
            styled with a minimalist design.`}
          technologies={["Next.js", "Tailwind", "shadcn/ui", "Amplify"]}
          demoLink={"https://www.benfahimnia.com/"}
        />
        <ExperienceCard
          image={chanceLab}
          title={" Chance and Choice Lab - Portfolio & Survey Platform"}
          description={
            "A two-part web experience for Chance and Choice Lab, including a public-facing portfolio site and a secure behavioral survey platform."
          }
          technologies={[
            "React.js",
            "Mui",
            "React Query",
            "AWS Lambda",
            "AWS CDK",
            "Dynamodb",
            "API Gateway",
          ]}
          demoLink={"https://www.chanceandchoicelab.com/"}
        />
        <ExperienceCard
          image={flickPick}
          title={"FlickPick"}
          description={
            "A web app to discover trending and latest movies, built with a clean UI and real-time data integration. Users can explore movie details, view popular titles, and stay updated with what’s hot in cinema."
          }
          technologies={[
            "Next.js",
            "Shadcn",
            "Tailwind",
            "AWS Lambda",
            "AWS CDK",
            "Dynamodb",
            "API Gateway",
          ]}
          demoLink={"https://flick-pick-new.vercel.app/"}
        />
      </div>
    </Section>
  );
};

export default FreelanceExperience;
