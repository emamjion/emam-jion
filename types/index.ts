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
