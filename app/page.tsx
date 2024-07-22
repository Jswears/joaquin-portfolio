import AboutMeSection from "@/components/AboutMe/AboutMeSection";
import HomeSection from "@/components/Home/HomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeSection />
      <AboutMeSection />
    </main>
  );
}
