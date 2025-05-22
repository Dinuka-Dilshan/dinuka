import DinukaImage from "@/modules/Landing/components/DinukaImage";

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-5 flex-col lg:flex-row">
        <DinukaImage />
        <div>
          <h1 className="text-3xl ">
            Hey I&apos;m <span className="font-semibold">Dinuka Dilshan</span>
          </h1>
          <p className="text-mute-dark text-xl font-semibold">
            Software engineer at Rhino Partners
          </p>
        </div>
      </div>
      <p className="text-mute-light  leading-7 font-medium">
        Hi, I&apos;m Dinuka! I&apos;m a software engineer with 3+ years of
        experience creating fast, user-friendly full-stack web apps that run in
        the cloud. I love building software solutions that deliver real value
        for both users and businesses.
      </p>
    </section>
  );
};

export default HeroSection;
