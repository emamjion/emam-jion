import {
  Code2,
  Layers3,
  LayoutTemplate,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Phone,
  Rocket,
  ServerCog,
  Smartphone,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

export const services = [
  {
    id: "01",
    title: "Web Development",
    shortTitle: "Web",
    description:
      "Fast, scalable and modern websites built around your business goals, users and long-term growth.",
    icon: Code2,
    tags: ["Next.js", "React", "TypeScript"],
    number: "01",
  },
  {
    id: "02",
    title: "UI/UX Design",
    shortTitle: "Design",
    description:
      "Clean and thoughtful interfaces that balance visual quality, usability and a seamless user experience.",
    icon: Palette,
    tags: ["Figma", "Design System", "Prototype"],
    number: "02",
  },
  {
    id: "03",
    title: "Mobile App",
    shortTitle: "Mobile",
    description:
      "User-focused mobile experiences designed to feel intuitive, reliable and consistent across devices.",
    icon: Smartphone,
    tags: ["React Native", "iOS", "Android"],
    number: "03",
  },
  {
    id: "04",
    title: "Backend & API",
    shortTitle: "Backend",
    description:
      "Reliable backend systems and APIs designed for security, performance, scalability and maintainability.",
    icon: ServerCog,
    tags: ["Node.js", "MongoDB", "REST API"],
    number: "04",
  },
  {
    id: "05",
    title: "Branding",
    shortTitle: "Brand",
    description:
      "Distinctive visual identities that help businesses communicate clearly and build a memorable presence.",
    icon: LayoutTemplate,
    tags: ["Identity", "Visuals", "Guidelines"],
    number: "05",
  },
  {
    id: "06",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Strategic digital solutions focused on improving visibility, engagement and meaningful business growth.",
    icon: Megaphone,
    tags: ["SEO", "Social Media", "Growth"],
    number: "06",
  },
];

export const stats = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "40+",
    label: "Projects Completed",
  },
  {
    value: "20+",
    label: "Happy Clients",
  },
  {
    value: "∞",
    label: "Ideas Built",
  },
];

export const highlights = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "Writing scalable, maintainable and production-ready code with attention to every detail.",
  },
  {
    icon: Layers3,
    title: "Modern Architecture",
    description:
      "Building reliable applications using modern technologies, thoughtful architecture and best practices.",
  },
  {
    icon: Rocket,
    title: "Built for Impact",
    description:
      "Turning ideas into fast, polished and meaningful digital experiences that people enjoy using.",
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sanjintech.com",
    href: "mailto:hello@sanjintech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "#",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "#",
  },
];
