"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Code2,
  ExternalLink,
  Layers3,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
  SiExpress,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";

type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "UI/UX Design";

type Technology = {
  name: string;
  icon: React.ElementType;
};

type Project = {
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

const projects: Project[] = [
  {
    id: "01",
    title: "Real Estate Platform",
    category: "Full Stack Web Application",
    categories: ["Full Stack", "Frontend", "Backend"],
    description:
      "A modern real estate platform with property discovery, advanced filtering, detailed property pages and a smooth user experience.",
    image: "/images/projects/real-estate.jpg",
    featured: true,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "02",
    title: "E-Commerce Experience",
    category: "Frontend Development",
    categories: ["Frontend", "Full Stack"],
    description:
      "A clean and conversion-focused shopping experience designed around speed, simplicity and intuitive navigation.",
    image: "/images/projects/ecommerce.jpg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "03",
    title: "SaaS Dashboard",
    category: "Frontend Development",
    categories: ["Frontend", "Full Stack"],
    description:
      "A responsive dashboard interface for managing data, analytics and business operations from a single place.",
    image: "/images/projects/dashboard.jpg",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "04",
    title: "Creative Portfolio",
    category: "UI/UX Design",
    categories: ["UI/UX Design", "Frontend"],
    description:
      "A minimal portfolio experience combining strong typography, subtle motion and an editorial-inspired visual system.",
    image: "/images/projects/portfolio.jpg",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "05",
    title: "API & Backend System",
    category: "Backend Development",
    categories: ["Backend", "Full Stack"],
    description:
      "A scalable backend architecture with REST APIs, authentication, database integration and structured server-side logic.",
    image: "/images/projects/backend.jpg",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "06",
    title: "Business Landing Page",
    category: "UI/UX Design",
    categories: ["UI/UX Design", "Frontend"],
    description:
      "A conversion-focused landing page designed with clear visual hierarchy, modern interactions and responsive layouts.",
    image: "/images/projects/landing-page.jpg",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "07",
    title: "Database Management System",
    category: "Backend Development",
    categories: ["Backend"],
    description:
      "A structured data management system focused on reliable database architecture, efficient queries and scalable data handling.",
    image: "/images/projects/database.jpg",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "TypeScript", icon: SiTypescript },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "08",
    title: "Modern Web Interface",
    category: "Frontend Development",
    categories: ["Frontend", "UI/UX Design"],
    description:
      "A polished modern interface built around reusable components, responsive behavior and subtle micro-interactions.",
    image: "/images/projects/interface.jpg",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const tabs = [
  { name: "All", icon: Layers3 },
  { name: "Frontend", icon: Code2 },
  { name: "Backend", icon: Server },
  { name: "Full Stack", icon: Boxes },
  { name: "UI/UX Design", icon: Palette },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(activeTab as ProjectCategory),
    );
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-white/[0.015] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white/35" />

              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Things I&apos;ve
              <span className="block text-white/25">built with purpose.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35 lg:pb-1">
            A collection of digital products where design, development and
            problem solving come together to create meaningful experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.025] p-1.5">
            <div className="flex min-w-max gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;

                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(tab.name)}
                    className={`group relative flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-medium transition-all duration-300 sm:px-5 ${
                      isActive ? "text-black" : "text-white/40 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectTab"
                        className="absolute inset-0 rounded-xl bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <Icon
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isActive ? "scale-105" : "group-hover:scale-110"
                        }`}
                      />

                      <span>{tab.name}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between px-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Showing / {activeTab}
            </p>

            <p className="font-mono text-[10px] text-white/25">
              {String(filteredProjects.length).padStart(2, "0")} PROJECTS
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0 && activeTab === "All";

              return (
                <motion.article
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className={`group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.035] ${
                    isFeatured ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  {isFeatured ? (
                    <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
                      {/* Featured Image */}
                      <div className="group/image relative min-h-[330px] overflow-hidden bg-[#0b0b0b] sm:min-h-[430px] lg:min-h-[560px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-black/35 to-transparent lg:block" />

                        {/* Badge */}
                        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3.5 py-2 backdrop-blur-xl sm:left-7 sm:top-7">
                          <Sparkles className="h-3.5 w-3.5 text-white/65" />

                          <span className="text-[9px] uppercase tracking-[0.18em] text-white/60">
                            Featured Project
                          </span>
                        </div>

                        {/* Number */}
                        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                          <span className="font-mono text-[9px] tracking-[0.2em] text-white/35">
                            PROJECT / {project.id}
                          </span>
                        </div>

                        {/* Image Button */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl transition-all duration-500 hover:bg-white sm:bottom-8 sm:right-8"
                        >
                          <ArrowUpRight className="h-4 w-4 text-white/65 transition-colors group-hover:text-black" />
                        </a>
                      </div>

                      {/* Featured Content */}
                      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                        <div>
                          <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/55" />

                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="max-w-xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                            {project.title}
                          </h3>

                          <p className="mt-5 max-w-xl text-sm leading-7 text-white/35">
                            {project.description}
                          </p>

                          {/* Categories */}
                          <div className="mt-7 flex flex-wrap gap-2">
                            {project.categories.map((category) => (
                              <span
                                key={category}
                                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[9px] uppercase tracking-[0.13em] text-white/35"
                              >
                                {category}
                              </span>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="mt-8">
                            <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/20">
                              Built with
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => {
                                const TechIcon = tech.icon;

                                return (
                                  <div
                                    key={tech.name}
                                    className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 transition-colors hover:border-white/[0.13] hover:bg-white/[0.045]"
                                  >
                                    <TechIcon className="h-3.5 w-3.5 text-white/45" />

                                    <span className="text-[10px] text-white/45">
                                      {tech.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-10 flex flex-wrap gap-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition-all duration-300 hover:bg-white/90"
                          >
                            <span>View Live Project</span>

                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-xs text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
                          >
                            <FaGithub className="h-3.5 w-3.5" />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0b0b]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                        {/* Top metadata */}
                        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[9px] tracking-[0.15em] text-white/45 backdrop-blur-xl">
                            {project.id}
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 group-hover:bg-white">
                            <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-black" />
                          </span>
                        </div>

                        {/* Category */}
                        <div className="absolute bottom-5 left-5">
                          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[8px] uppercase tracking-[0.17em] text-white/50 backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-medium tracking-[-0.035em] text-white/90 transition-colors group-hover:text-white">
                              {project.title}
                            </h3>

                            <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-white/15 transition-colors group-hover:text-white/45" />
                          </div>

                          <p className="mt-3 text-sm leading-6 text-white/30 transition-colors group-hover:text-white/40">
                            {project.description}
                          </p>

                          {/* Categories */}
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.categories.map((category) => (
                              <span
                                key={category}
                                className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[8px] uppercase tracking-[0.12em] text-white/25 transition-colors group-hover:border-white/10 group-hover:text-white/35"
                              >
                                {category}
                              </span>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => {
                              const TechIcon = tech.icon;

                              return (
                                <div
                                  key={tech.name}
                                  title={tech.name}
                                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.015] px-2.5 py-1.5 transition-all duration-300 group-hover:border-white/[0.08]"
                                >
                                  <TechIcon className="h-3 w-3 text-white/35" />

                                  <span className="text-[10px] text-white/35">
                                    {tech.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-[11px] font-medium text-white/50 transition-colors hover:text-white"
                          >
                            <span>Live Project</span>

                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] text-white/30 transition-colors hover:text-white/70"
                          >
                            <FaGithub className="h-3 w-3" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.6rem] border border-white/[0.08] bg-white/[0.02] py-20 text-center"
          >
            <p className="text-sm text-white/35">
              No projects found in this category yet.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-center justify-center gap-5 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/10" />

            <Layers3 className="h-4 w-4 text-white/20" />

            <span className="h-px w-8 bg-white/10" />
          </div>

          <div>
            <p className="text-sm text-white/35">Have a project in mind?</p>

            <a
              href="#contact"
              className="group mt-2 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
            >
              <span>Let&apos;s work together</span>

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
