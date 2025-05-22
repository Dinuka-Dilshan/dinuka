import HeroSection from "@/modules/Landing/HeroSection";
import LetsCollab from "@/modules/Landing/LetsCollab";
import ProfessionalJourney from "@/modules/Landing/ProfessionalJourney";
import SideProjects from "@/modules/Landing/SideProjects";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ProfessionalJourney />
      <SideProjects />
      <LetsCollab />
    </>
  );
}
