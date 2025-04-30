import { Certification, Technology } from "@/types";

// Projects
export const projects = [
  {
    id: 1,
    title: "CloudWatch Enhanced Weather Metrics",
    description:
      "Collects weather data using OpenWeatherMap API, pushes metrics to CloudWatch, and sends SNS alerts.",
    technologies: ["AWS", "Python", "Terraform", "CloudWatch", "SNS", "Lambda"],
    githubLink: "https://github.com/Jswears/cloudwatch-enhanced",
    externalLink: "https://www.youtube.com/watch?v=gk5vjf95TJ8",
    imageSrc: "/projects/architecture-diagram.png",
  },
  {
    id: 2,
    title: "ChainOPT AI - Supply Chain Optimization",
    description: "AI-powered web app for optimizing supply chain processes.",
    technologies: ["AWS", "TypeScript", "Next.js", "Node.js", "DynamoDB", "S3"],
    githubLink: "https://github.com/Jswears/supply-chain-optimizer-backend",
    externalLink: "https://chainopt.joaquinswears.com",
    imageSrc: "/projects/chainopt.png",
  },
  {
    id: 3,
    title: "Serverless Contact Form",
    description: "Serverless form that sends emails using AWS Lambda and SES.",
    technologies: ["AWS", "TypeScript", "Node.js", "Lambda", "SES"],
    githubLink: "https://github.com/Jswears/serverless-contact-form.git",
    externalLink: "#contact",
    imageSrc: "/projects/contact-form.png",
  },
  {
    id: 4,
    title: "Unknown Chronicles",
    description: "2D click game using DOM manipulation and JS Canvas.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM", "JS Canvas"],
    githubLink: "https://github.com/Jswears/unknownChronicles",
    externalLink: "https://jswears.github.io/unknownChronicles/",
    imageSrc: "/projects/unknown-chronicles.webp",
  },
];

// Technologies
export const technologies: Technology[] = [
  { id: 1, name: "AWS" },
  { id: 4, name: "TypeScript" },
  { id: 6, name: "Node.js" },
  { id: 8, name: "Next.js" },
  { id: 9, name: "Python" },
  { id: 14, name: "Terraform" },
  { id: 16, name: "DynamoDB" },
];

// Navigation

type navItem = {
  name: string;
  target?: string;
  href?: string;
};

export const navItems: navItem[] = [
  { name: "About", target: "about" },
  { name: "Projects", target: "projects" },
  { name: "Certifications", target: "certifications" },
  { name: "Contact", target: "contact" },
  // { name: "Blog", href: "/blog" },
];

// Certifications

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Ironhack",
    date: "23/07/2022",
    imageSrc: "/certifications/ironhack.svg",
    description: "Full-Stack Web Developer Bootcamp at Ironhack",
    badgeLink:
      "https://www.credential.net/33acbeb0-11a2-40c8-bc8c-703a8d2ccd8a#acc.N6v50V9M",
  },
  {
    id: 2,
    name: "AWS Cloud Practitioner",
    date: "23/08/2023",
    imageSrc: "/certifications/aws-certified-cloud-practitioner.png",
    description: "AWS Cloud Practitioner Certification",
    badgeLink:
      "https://www.credly.com/badges/ba189bb0-eae5-4d61-ab1b-aa016b5e37b5/public_url",
  },
  {
    id: 3,
    name: "AWS Solutions Architect Associate",
    date: "25/11/2024",
    imageSrc: "/certifications/aws-certified-solutions-architect-associate.png",
    description: "AWS Solutions Architect Associate Certification",
    badgeLink:
      "https://www.credly.com/badges/3f9436ff-7de0-431c-8e33-659ce0896adb/public_url",
  },
];

// Social Media
export const socialMedia = [
  {
    name: "GitHub",
    icon: "Github",
    href: "https://github.com/Jswears",
  },

  {
    name: "LinkedIn",
    icon: "Linkedin",
    href: "https://www.linkedin.com/in/joaquin-ignacio-swears-salinas-9a4947284/",
  },
  {
    name: "Email",
    icon: "Mail",
    href: "joaquinsw.salinas@gmail.com",
  },
];
