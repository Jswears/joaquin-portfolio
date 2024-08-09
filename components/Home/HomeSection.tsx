import Link from "next/link";

const HomeSection = () => {
    return (
        <section className="p-6 flex flex-col justify-center items-center">
            <div className="p-4 flex flex-col gap-3">
                <p className="text-lg">Hi, I am</p>
                <h1 className="text-4xl font-bold">Joaquin Swears</h1>
                <p className="text-sm">Software Developer & AWS Solutions Architect</p>
                <p className="text-lg">Crafting efficient solutions with code and cloud.</p>
            </div>
            <div className="flex gap-4 mt-12">
                <Link href="#projects" className="text-sm font-bold border-charcoal-gray dark:border-slate-500 border px-8 py-[14px] rounded-lg">
                    View Work
                </Link>
                <Link href="#contact" className="text-sm font-bold border-charcoal-gray dark:border-slate-500 border px-8 py-[14px] rounded-lg">
                    Contact Me
                </Link>
            </div>
        </section>
    );
}

export default HomeSection;