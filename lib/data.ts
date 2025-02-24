import { Certification, Technologies } from "@/types";

// Projects
export const projects = [
  {
    title: "Unknown Chronicles",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    technologies: ["AWS", "React", "JavaScript"],
    githubLink: "https://github.com/yourusername/unknown-chronicles",
    externalLink: "https://unknown-chronicles.example.com",
    imageSrc: "/projects/unknown-chronicles.webp",
    blogPostLink: "/blog/unknown-chronicles",
  },
  {
    title: "Task Manager Pro",
    description:
      "An advanced task manager application built to organize and optimize personal productivity.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubLink: "https://github.com/yourusername/task-manager-pro",
    externalLink: "https://task-manager-pro.example.com",
    imageSrc: "/projects/task-manager.webp",
    blogPostLink: "/blog/task-manager-pro",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile app to track fitness goals and monitor physical activity over time.",
    technologies: ["AWS", "TypeScript", "React Native"],
    githubLink: "https://github.com/yourusername/fitness-tracker",
    externalLink: "https://fitness-tracker.example.com",
    imageSrc: "/projects/fitness-tracker.webp",
    blogPostLink: "/blog/fitness-tracker",
  },
  {
    title: "E-Commerce Shop",
    description:
      "An e-commerce platform built with modern technologies for a smooth shopping experience.",
    technologies: ["JavaScript", "React", "Next.js", "Node.js"],
    githubLink: "https://github.com/yourusername/e-commerce-shop",
    externalLink: "https://ecommerce-shop.example.com",
    imageSrc: "/projects/e-commerce.webp",
    blogPostLink: "/blog/e-commerce-shop",
  },
  {
    title: "Recipe Finder",
    description:
      "A web app that helps users find recipes by inputting ingredients they have at home.",
    technologies: ["JavaScript", "React", "API"],
    githubLink: "https://github.com/yourusername/recipe-finder",
    externalLink: "https://recipe-finder.example.com",
    imageSrc: "/projects/recipe-finder.webp",
    blogPostLink: "/blog/recipe-finder",
  },
];

// Technologies
export const technologies: Technologies[] = [
  { id: 1, name: "AWS" },
  { id: 2, name: "React" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "Docker" },
];

// Navigation
export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
  { name: "Blog", href: "/blog" },
];

// Certifications

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Ironhack",
    date: "23/07/2022",
    imageSrc: "/certifications/ironhack.svg",
    description: "Full-Stack Web Developer Bootcamp at Ironhack",
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
  },
];
