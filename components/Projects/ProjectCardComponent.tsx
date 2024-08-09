import Image from "next/image";

const ProjectCardComponent = () => {
    return (
        <div className="container flex flex-col gap-5 ">
            <div className="card w-full h-full bg-green-500 p-6 rounded-md ">
                <div className="flex flex-col card-body  gap-[10px] text-pretty">
                    <h6 className="text-sm text-white">Featured Project</h6>
                    <h5 className="card-title text-2xl font-bold text-white">Unknown Chronicles</h5>
                    <div className="flex flex-col gap-6 rounded-sm w-full h-full bg-slate-100 dark:bg-slate-950 dark:bg-opacity-60 bg-opacity-70 p-2">
                        <p className="card-text text-sm text-black dark:text-white ">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        <ul className="flex justify-between text-sm font-bold w-full">
                            <li>Vs Code</li>
                            <li>Vs Code</li>
                            <li>Vs Code</li>
                            <li>Vs Code</li>
                        </ul>
                        <div className="flex gap-3">
                            <Image src="/githubLight.svg" alt="Github" width={24} height={24} />
                            <Image src="/externalLight.svg" alt="External Link" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCardComponent;