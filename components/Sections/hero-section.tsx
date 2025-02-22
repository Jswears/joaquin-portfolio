import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
    return (
        <section className="flex flex-col justify-evenly py-12 lg:py-24" id="hero">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-lg lg:text-2xl mb-2">Hi, I am</p>
                    <h1 className="text-4xl lg:text-7xl font-bold">Joaquin Swears</h1>
                    <p className="text-sm lg:text-lg text-gray-400 font-semibold">Software Developer & Solutions Architect</p>
                    <p className="text-lg lg:text-xl">Crafting efficient solutions with code and cloud.</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full max-w-md">
                    <Button asChild variant="default" size="lg" className="w-full">
                        <Link href="#projects">View Work</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full">
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                </div>
            </div>
            <div className="badges-container border-y dark:border-slate-800 f border-slate-200 w-full p-4 flex gap-8 justify-center md:mt-12 items-center shadow-lg">
                <div className="container mx-auto px-4 flex gap-8 justify-center items-center">
                    <Link
                        href="https://www.credly.com/badges/ba189bb0-eae5-4d61-ab1b-aa016b5e37b5/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/certifications/aws-certified-cloud-practitioner.png"
                            alt="AWS Certified Cloud Practitioner"
                            width={96}
                            height={96}
                            className="h-20 w-20 lg:h-24 lg:w-24 transition-transform hover:scale-105"
                        />
                    </Link>
                    <Link
                        href="https://www.credly.com/badges/3f9436ff-7de0-431c-8e33-659ce0896adb/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/certifications/aws-certified-solutions-architect-associate.png"
                            alt="AWS Certified Solutions Architect Associate"
                            width={96}
                            height={96}
                            className="h-20 w-20 lg:h-24 lg:w-24 transition-transform hover:scale-105"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

