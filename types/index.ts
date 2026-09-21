import type { IconType } from "react-icons";

export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: {
    name: string;
    icon: IconType;
  }[];
  current?: boolean;
};

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "UI/UX Design";

export type Technology = {
  name: string;
  icon: React.ElementType;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  categories: ProjectCategory[];
  description: string;
  image: string;
  featured?: boolean;
  technologies: Technology[];
  liveUrl: string;
  githubUrl: string;
};
