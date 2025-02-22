interface SectionTitleProps {
    number: number
    title: string
}

export function SectionTitle({ number, title }: SectionTitleProps) {
    return (
        <h2 className="text-3xl font-bold font-merriweather flex items-center">
            <span className="text-primary mr-2">{number}.</span>
            {title}
        </h2>
    )
}

