import Image from "next/image"
import SectionTitle from "./components/section-title"
import { technologies } from "@/lib/data"

const AboutSection = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <SectionTitle number={1} title="About Me" />
                <div className="lg:flex lg:items-center lg:gap-16 mt-12">
                    <div className="lg:flex-1 space-y-8 text-justify">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Hello! My name is <span className="text-primary font-semibold">Joaquin</span>. I have a passion for creating innovative solutions and tackling complex problems.
                            My journey into web development began in 2023 when I enrolled in the <span className="font-medium">Full-Stack Web Developer Bootcamp</span> at Ironhack.
                            I discovered a deep enthusiasm for development and thoroughly enjoyed the learning process.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            I come from a background in <span className="font-medium">Gastronomy as a Wine Sommelier</span>. Transitioning to a tech career has been both challenging and rewarding.
                            Each new challenge brings me closer to my goal of becoming a proficient <span className="text-primary font-semibold">Cloud Engineer</span>.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Recently, I earned my <span className="font-medium">AWS Solutions Architect Associate</span> certification.
                            I have been continuously enhancing my skills through various courses in containerization, computer science, and other relevant areas.
                        </p>

                        <div className="border-t border-border border-slate-600 mt-8 pt-6">
                            <p className="text-xl font-semibold text-primary mb-6">
                                Technologies I’ve been working with recently:
                            </p>
                            <ul className="grid grid-cols-2 gap-3 text-muted-foreground text-lg">
                                {technologies.map((tech) => (
                                    <li key={tech.id} className="flex items-center space-x-2">
                                        <span className="text-primary">🔹</span>
                                        <span>{tech.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:mt-0 flex justify-center items-center">
                        <Image
                            src="/profile/joaquin-swears.png"
                            alt="Joaquin Swears"
                            width={400}
                            height={400}
                            className="transition-transform duration-300 hover:scale-105 mb-6 lg:mb-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
