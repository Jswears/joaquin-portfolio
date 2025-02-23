import AboutSection from "@/components/Sections/about-section";
import HeroSection from "@/components/Sections/hero-section";
import { ProjectsSection } from "@/components/Sections/projects-section";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  )
}

