import Image from "next/image"
import { SectionTitle } from "./components/section-title"

const AboutSection = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center py-12 lg:py-24">
            <div className="container mx-auto px-4">
                <SectionTitle number={1} title="About Me" />
                <div className="lg:flex lg:items-center lg:gap-12">
                    <div className="lg:flex-1 space-y-6 text-justify">
                        <p>
                            Hello! My name is Joaquin. I have a passion for creating innovative solutions and tackling complex problems.
                            My journey into web development began in 2023 when I enrolled in the Full-Stack Web Developer Bootcamp at Ironhack.
                            I discovered a deep enthusiasm for web development and thoroughly enjoyed the learning process.
                        </p>
                        <p>
                            I come from a background in Gastronomy as a wine sommelier. Transitioning to a tech career has been both challenging and rewarding.
                            Each new challenge brings me closer to my goal of becoming a proficient Cloud Engineer.
                        </p>
                        <p>
                            Recently, I earned my AWS Solutions Architect Associate certification. I have been continuously enhancing my skills through various courses
                            in containerization, computer science, and other relevant areas.
                        </p>
                        <div className="pt-6 border-t border-border">
                            <p className="font-semibold mb-4">Here are a few technologies I've been working with recently:</p>
                            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
                                <li>AWS</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 flex justify-center items-center">
                        <Image
                            src="/profile/joaquin-swears.png"
                            alt="Joaquin Swears"
                            width={400}
                            height={400}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

