import { SectionTitleProps } from "@/types/components"

const SectionTitle = ({ number, title }: SectionTitleProps) => {
    return (
        <h2 className="text-4xl font-bold font-merriweather flex items-center mb-8">
            <span className="text-primary mr-3">{number}.</span>
            {title}
        </h2>
    )
}

export default SectionTitle
