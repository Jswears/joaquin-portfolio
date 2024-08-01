import AboutMeSection from "@/components/AboutMe/AboutMeSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HomeSection from "@/components/Home/HomeSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
