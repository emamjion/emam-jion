"use client";

import { AnimatePresence, motion } from "framer-motion";
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

/* -------------------------------------------------------------------------- */
/*                                  TYPES                                     */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                PROJECT DATA                                */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                  TABS                                      */
/* -------------------------------------------------------------------------- */

const tabs = [
  {
    name: "All",
    icon: Layers3,
  },
  {
    name: "Frontend",
    icon: Code2,
  },
  {
    name: "Backend",
    icon: Server,
  },
  {
    name: "Full Stack",
    icon: Boxes,
  },
  {
    name: "UI/UX Design",
    icon: Palette,
  },
];

/* -------------------------------------------------------------------------- */
/*                              ANIMATION VARIANTS                             */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeTab as ProjectCategory),
    );
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        text-neutral-950
        transition-colors
        duration-500
        dark:bg-[#050505]
        dark:text-white
        sm:py-32
        lg:py-40
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Dark mode grid */}
        <div
          className="
            absolute
            inset-0
            hidden
            opacity-[0.025]
            dark:block
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[15%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-black/[0.025]
            blur-[140px]
            dark:bg-white/[0.025]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-black/[0.02]
            blur-[120px]
            dark:bg-white/[0.015]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ---------------------------------------------------------------- */}
        {/* HEADER                                                           */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/40" />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-black/40
                  dark:text-white/40
                "
              >
                Selected Work
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-neutral-950
                dark:text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Things I&apos;ve
              <span className="block text-black/25 dark:text-white/25">
                built with purpose.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1">
            <p
              className="
                text-sm
                leading-7
                text-black/45
                dark:text-white/35
              "
            >
              A collection of digital products where development, design and
              problem solving come together to create meaningful experiences.
            </p>
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* CATEGORY TABS                                                    */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div
            className="
              relative
              overflow-x-auto
              rounded-2xl
              border
              border-black/[0.08]
              bg-black/[0.025]
              p-1.5
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            <div className="flex min-w-max gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;

                return (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(tab.name)}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      px-4
                      py-3
                      text-xs
                      font-medium
                      transition-all
                      duration-300
                      sm:px-5
                      ${
                        isActive
                          ? "text-white dark:text-black"
                          : "text-black/45 hover:text-black dark:text-white/40 dark:hover:text-white"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectTab"
                        className="
                          absolute
                          inset-0
                          rounded-xl
                          bg-black
                          dark:bg-white
                        "
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <Icon
                        className={`
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300
                          ${isActive ? "scale-105" : "group-hover:scale-110"}
                        `}
                      />

                      <span>{tab.name}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active category indicator */}
          <div className="mt-4 flex items-center justify-between px-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/25 dark:text-white/25">
              Showing / {activeTab}
            </p>

            <p className="text-[10px] font-mono text-black/25 dark:text-white/25">
              {String(filteredProjects.length).padStart(2, "0")} PROJECTS
            </p>
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* PROJECT GRID                                                     */}
        {/* ---------------------------------------------------------------- */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-5 md:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                layout
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-black/[0.08]
                  bg-black/[0.02]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-black/[0.14]
                  hover:bg-black/[0.035]
                  dark:border-white/[0.08]
                  dark:bg-white/[0.02]
                  dark:hover:border-white/[0.14]
                  dark:hover:bg-white/[0.035]
                  ${index === 0 && activeTab === "All" ? "md:col-span-2" : ""}
                `}
              >
                {/* -------------------------------------------------------- */}
                {/* FEATURED PROJECT                                         */}
                {/* -------------------------------------------------------- */}

                {index === 0 && activeTab === "All" ? (
                  <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
                    {/* Image */}
                    <div className="relative min-h-[360px] overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a] sm:min-h-[470px] lg:min-h-[540px]">
                      <div
                        className="
                          absolute
                          inset-0
                          bg-cover
                          bg-center
                          opacity-80
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.04]
                        "
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black
                          via-black/20
                          to-transparent
                        "
                      />

                      {/* Featured badge */}
                      <div
                        className="
                          absolute
                          left-6
                          top-6
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/10
                          bg-black/30
                          px-4
                          py-2
                          backdrop-blur-xl
                          sm:left-8
                          sm:top-8
                        "
                      >
                        <Sparkles className="h-3.5 w-3.5 text-white/65" />

                        <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                          Featured Project
                        </span>
                      </div>

                      {/* Number */}
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                          PROJECT / {project.id}
                        </span>
                      </div>

                      {/* Corner */}
                      <div className="absolute right-6 top-6 h-16 w-16 border-r border-t border-white/10 sm:right-8 sm:top-8" />

                      {/* Hover arrow */}
                      <div
                        className="
                          absolute
                          bottom-6
                          right-6
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/30
                          backdrop-blur-xl
                          transition-all
                          duration-500
                          group-hover:bg-white
                          sm:bottom-8
                          sm:right-8
                        "
                      >
                        <ArrowUpRight className="h-4 w-4 text-white/60 transition-colors group-hover:text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                      <div>
                        <div className="mb-5 flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/50" />

                          <span className="text-[10px] uppercase tracking-[0.2em] text-black/35 dark:text-white/30">
                            {project.category}
                          </span>
                        </div>

                        <h3
                          className="
                            max-w-lg
                            text-3xl
                            font-semibold
                            tracking-[-0.04em]
                            text-neutral-950
                            dark:text-white
                            sm:text-4xl
                          "
                        >
                          {project.title}
                        </h3>

                        <p className="mt-6 max-w-lg text-sm leading-7 text-black/45 dark:text-white/35">
                          {project.description}
                        </p>

                        {/* Categories */}
                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.categories.map((category) => (
                            <span
                              key={category}
                              className="
                                rounded-full
                                border
                                border-black/[0.08]
                                px-3
                                py-1.5
                                text-[9px]
                                uppercase
                                tracking-[0.14em]
                                text-black/35
                                dark:border-white/[0.08]
                                dark:text-white/30
                              "
                            >
                              {category}
                            </span>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="mt-8">
                          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-black/25 dark:text-white/25">
                            Built with
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => {
                              const TechIcon = tech.icon;

                              return (
                                <div
                                  key={tech.name}
                                  className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-black/[0.07]
                                    bg-black/[0.025]
                                    px-3
                                    py-2
                                    dark:border-white/[0.07]
                                    dark:bg-white/[0.025]
                                  "
                                >
                                  <TechIcon className="h-3.5 w-3.5 text-black/45 dark:text-white/45" />

                                  <span className="text-xs text-black/45 dark:text-white/45">
                                    {tech.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="mt-10 flex flex-wrap gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/button
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-black
                            px-5
                            py-3
                            text-xs
                            font-medium
                            text-white
                            transition-all
                            duration-300
                            hover:opacity-85
                            dark:bg-white
                            dark:text-black
                          "
                        >
                          <span>View Live Project</span>

                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-black/10
                            bg-black/[0.025]
                            px-5
                            py-3
                            text-xs
                            text-black/55
                            transition-all
                            duration-300
                            hover:border-black/20
                            hover:text-black
                            dark:border-white/10
                            dark:bg-white/[0.025]
                            dark:text-white/55
                            dark:hover:border-white/20
                            dark:hover:text-white
                          "
                        >
                          <FaGithub className="h-3.5 w-3.5" />

                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* -------------------------------------------------------- */
                  /* NORMAL PROJECT CARD                                      */
                  /* -------------------------------------------------------- */

                  <>
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a]">
                      <div
                        className="
                          absolute
                          inset-0
                          bg-cover
                          bg-center
                          opacity-75
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.05]
                        "
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      {/* Number */}
                      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-xl">
                        <span className="font-mono text-[9px] tracking-[0.18em] text-white/45">
                          {project.id}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300 group-hover:bg-white">
                        <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-black" />
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-5 left-5">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-xl font-medium tracking-[-0.03em] text-neutral-900 dark:text-white/85">
                            {project.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-black/40 dark:text-white/30">
                            {project.description}
                          </p>
                        </div>

                        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-black/15 transition-colors group-hover:text-black/45 dark:text-white/15 dark:group-hover:text-white/45" />
                      </div>

                      {/* Categories */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className="
                              rounded-full
                              border
                              border-black/[0.07]
                              px-2.5
                              py-1
                              text-[9px]
                              uppercase
                              tracking-[0.12em]
                              text-black/30
                              dark:border-white/[0.07]
                              dark:text-white/25
                            "
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
                              className="
                                flex
                                items-center
                                gap-1.5
                                rounded-lg
                                border
                                border-black/[0.06]
                                px-2.5
                                py-1.5
                                dark:border-white/[0.06]
                              "
                            >
                              <TechIcon className="h-3 w-3 text-black/35 dark:text-white/35" />

                              <span className="text-[10px] text-black/35 dark:text-white/35">
                                {tech.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Links */}
                      <div className="mt-6 flex items-center gap-5">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-1.5
                            text-[11px]
                            font-medium
                            text-black/50
                            transition-colors
                            hover:text-black
                            dark:text-white/45
                            dark:hover:text-white
                          "
                        >
                          Live Project
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-[11px]
                            text-black/35
                            transition-colors
                            hover:text-black
                            dark:text-white/30
                            dark:hover:text-white
                          "
                        >
                          <FaGithub className="h-3 w-3" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ---------------------------------------------------------------- */}
        {/* EMPTY STATE                                                       */}
        {/* ---------------------------------------------------------------- */}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              rounded-[1.75rem]
              border
              border-black/[0.08]
              bg-black/[0.02]
              py-20
              text-center
              dark:border-white/[0.08]
              dark:bg-white/[0.02]
            "
          >
            <p className="text-sm text-black/40 dark:text-white/35">
              No projects found in this category yet.
            </p>
          </motion.div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* BOTTOM CTA                                                        */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-center justify-center gap-5 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/10 dark:bg-white/10" />

            <Layers3 className="h-4 w-4 text-black/20 dark:text-white/20" />

            <span className="h-px w-8 bg-black/10 dark:bg-white/10" />
          </div>

          <div>
            <p className="text-sm text-black/40 dark:text-white/35">
              Have a project in mind?
            </p>

            <a
              href="#contact"
              className="
                group
                mt-2
                inline-flex
                items-center
                gap-2
                text-sm
                text-black/65
                transition-colors
                hover:text-black
                dark:text-white/65
                dark:hover:text-white
              "
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
