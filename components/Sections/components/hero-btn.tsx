'use client';
import { Button } from "@/components/ui/button";

interface HeroButtonProps {
    title: string;
    variant: "default" | "outline";
    sectionId: string;
}

const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const HeroButton = ({ title, variant, sectionId }: HeroButtonProps) => {
    return (
        <Button onClick={() => scrollTo(sectionId)} variant={variant} size="lg" className="w-full shadow-md transition-transform hover:scale-105">
            {title}
        </Button>
    );
}

export default HeroButton;