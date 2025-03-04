import Image from "next/image"
import Link from "next/link"
import HeroButton from "./components/hero-btn";

const HeroSection = () => {


    return (
        <section className="flex flex-col justify-center items-center text-left py-16 lg:py-28" id="hero">
            <div className="container mx-auto px-6 flex flex-col items-center gap-10">
                <div className="space-y-4 lg:space-y-6">
                    <p className="text-lg lg:text-2xl text-muted-foreground">Hi, I am</p>
                    <h1 className="text-4xl lg:text-7xl font-bold text-primary">Joaquin Swears</h1>
                    <p className="text-lg lg:text-xl font-medium text-gray-400">Software Developer & Solutions Architect</p>
                    <p className="text-lg lg:text-xl text-muted-foreground">
                        Crafting efficient solutions with <span className="text-primary font-semibold">code</span> and <span className="text-primary font-semibold">cloud</span>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-sm">
                    <HeroButton title="View Work" variant="default" sectionId="projects" />
                    <HeroButton title="Contact Me" variant="outline" sectionId="contact" />
                </div>
            </div>

            <div className="border-y border-border w-full py-6 flex justify-center shadow-lg dark:border-slate-800 f border-slate-200 mt-10">
                <div className="container mx-auto px-6 flex flex-wrap gap-10 justify-center items-center">
                    <Link
                        href="https://www.credly.com/badges/ba189bb0-eae5-4d61-ab1b-aa016b5e37b5/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center transition-transform hover:scale-110"
                    >
                        <Image
                            src="/certifications/aws-certified-cloud-practitioner.png"
                            alt="AWS Certified Cloud Practitioner"
                            width={600}
                            height={600}
                            className="h-20 w-20 lg:h-24 lg:w-24"
                        />
                    </Link>
                    <Link
                        href="https://www.credly.com/badges/3f9436ff-7de0-431c-8e33-659ce0896adb/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center transition-transform hover:scale-110"
                    >
                        <Image
                            src="/certifications/aws-certified-solutions-architect-associate.png"
                            alt="AWS Certified Solutions Architect Associate"
                            width={600}
                            height={600}
                            className="h-20 w-20 lg:h-24 lg:w-24"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
