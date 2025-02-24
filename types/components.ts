export interface SectionTitleProps {
  number: number;
  title: string;
}

// Certification Section
export interface CertificationCardProps {
  name: string;
  date: string;
  imageSrc: string;
  description: string;
  badgeLink?: string;
}

// Project Section
export interface FilterButtonsProps {
  technologies: string[];
  selectedTechnologies: string[];
  toggleTechnology: (tech: string) => void;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  externalLink: string;
  imageSrc: string;
  blogPostLink?: string;
}
