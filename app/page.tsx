import AboutSection from "@/components/Sections/about-section";
import HeroSection from "@/components/Sections/hero-section";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}

