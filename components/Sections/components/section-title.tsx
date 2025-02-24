import { SectionTitleProps } from "@/types/components";

const SectionTitle = ({ number, title }: SectionTitleProps) => {
    return (
        <h2 className="text-3xl font-bold font-merriweather flex items-center mb-6">
            <span className="text-primary mr-2">{number}.</span>
            {title}
        </h2>
    )
}

export default SectionTitle;
