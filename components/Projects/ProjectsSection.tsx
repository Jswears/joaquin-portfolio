import ProjectCardComponent from "./ProjectCardComponent";

const ProjectsSection = () => {
    return (

        <section className="px-6">
            <div className="mb-10">
                <h1 className="text-left text-[26px] font-bold tracking-[10px] ">3. Projects</h1>
                <hr className="h-px border-charcoal-gray mt-3 w-2/5" />
            </div>
            <div>
                <ProjectCardComponent />
            </div>
        </section>
    );
}

export default ProjectsSection;