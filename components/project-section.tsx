import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "AlgoVisual",
    description:
      "A 3D tool to visualize sorting and path-finding algorithms in an interactive way with 3d animations.",
    role: "creator",
    period: "2023",
    achievements: [
      "Learned three.js and how to create 3d experiences",
      "Implemented sorting and path-finding algorithm visualizer",
    ],
    technologies: [
      "Three Js",
      "React three fiber",
      "Zustand",
      "React",
      "Tailwind CSS",
      "Typescript",
      "Vite",
    ],
    href: "https://algovisual.anirudtate.com",
  },
  {
    title: "Course Flow AI",
    description:
      "A platform that uses AI to generate personalized courses, suggest topics and learning resources, and keep track of your progress.",
    role: "creator",
    period: "2024",
    achievements: [
      "Learned how to use AI though API and get structured data",
      "Learned express and mongo db for backend",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Node JS",
      "Express",
      "Mongo db",
      "Google Gemini",
    ],
    href: "https://course-flow-ai.anirudtate.com",
  },
  {
    title: "CF Ladder",
    description:
      "A tool for codeforces users who want to solve all the problem solved by there friend.",
    role: "creator",
    period: "2022",
    achievements: [
      "Created my first project in react to solve a that me and friend were facing",
      "Learned react and how to use third party API (codeforces API)",
    ],
    technologies: ["React", "Vite", "Axios"],
    href: "https://cf-ladder.anirudtate.com",
  },
];

export function ProjectSection({ limit = 100 }: { limit?: number }) {
  return projects
    .slice(0, limit)
    .map((project) => <ProjectCard key={project.title} {...project} />);
}
