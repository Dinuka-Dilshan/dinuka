import BlogPreview from "@/modules/Landing/BlogPreview";
import Experience from "@/modules/Landing/Experience";
import HeroSection from "@/modules/Landing/HeroSection";
import HireMe from "@/modules/Landing/HireMe";
import SideProjects from "@/modules/Landing/SideProjects";
import TechStack from "@/modules/Landing/TechStack";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <SideProjects />
      <Experience />
      <BlogPreview />
      <HireMe />
    </>
  );
}
