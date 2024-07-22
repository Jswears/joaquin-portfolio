import Image from "next/image";

const AboutMeSection = () => {
    return (
        <section className="px-6">
            <div className="mb-10">
                <h1 className="text-left text-[26px] font-bold tracking-[10px] ">1.AboutMe</h1>
                <hr className="h-px   border-charcoal-gray mt-3 w-2/5" />
            </div>
            <div className="text-sm text-pretty text- flex flex-col gap-4">
                <p>Hello! My name is Joaquin, and I have a passion for creating innovative solutions and tackling complex problems. My journey into web development began in 2023 when I enrolled in the Full-Stack Web Developer Bootcamp at Ironhack. I discovered a deep enthusiasm for web development and thoroughly enjoyed the learning process.</p>
                <p>Coming from a background in Gastronomy as a wine sommelier, transitioning to a tech career has been both challenging and rewarding. Each new challenge brings me closer to my goal of becoming a proficient Cloud Engineer</p>
                <p>Recently, I earned my AWS Solutions Architect Associate certification and have been continuously enhancing my skills through various courses in containerization, computer science, and other relevant areas.</p>
            </div>
            <div className="py-4">
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul className="grid grid-cols-2 gap-y-1 pt-6 list-disc list-inside">
                    <li>AWS</li>
                    <li>Kubernetes</li>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>Terraform</li>
                    <li>GCP</li>
                </ul>
            </div>
            <div className="py-4">
                <Image src="/profile.png" alt="About Me" width={226} height={229} className="mx-auto" />
            </div>
        </section>
    );
}

export default AboutMeSection;