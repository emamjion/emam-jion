"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  Sparkles,
} from "lucide-react";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Experience = {
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
    icon: React.ReactNode;
  }[];
  current?: boolean;
};

const experiences: Experience[] = [
  {
    id: "01",
    company: "Sanjin Tech",
    role: "Full Stack Developer",
    type: "Full-time",
    period: "2024 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Building modern digital products and scalable web applications with a strong focus on clean architecture, thoughtful UX, and reliable performance.",
    achievements: [
      "Developing scalable full-stack web applications",
      "Designing responsive and user-focused interfaces",
      "Building REST APIs and backend architectures",
      "Working with modern frontend and backend technologies",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
    current: true,
  },
  {
    id: "02",
    company: "Freelance",
    role: "Full Stack Developer",
    type: "Freelance",
    period: "2022 — 2024",
    location: "Remote",
    description:
      "Worked with businesses and individuals to transform ideas into functional, responsive, and production-ready digital experiences.",
    achievements: [
      "Delivered custom websites and web applications",
      "Developed e-commerce and business platforms",
      "Created reusable UI components and design systems",
      "Integrated APIs, databases, and third-party services",
    ],
    technologies: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
    ],
  },
];

const containerVariants : Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants : Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-wide text-white/60 backdrop-blur-sm">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              EXPERIENCE
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            Where I’ve
            <span className="text-white/35"> made an impact.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base"
          >
            A journey of building digital products, solving real problems, and
            continuously growing through meaningful work.
          </motion.p>
        </motion.div>

        {/* Experience List */}
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[17px] top-8 hidden h-[calc(100%-65px)] w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={containerVariants}
              className="space-y-8"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative md:pl-14"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-8 hidden md:flex">
                    <div
                      className={`relative flex h-[35px] w-[35px] items-center justify-center rounded-full border ${
                        experience.current
                          ? "border-white/25 bg-white text-black"
                          : "border-white/10 bg-[#0b0b0b] text-white/40"
                      }`}
                    >
                      {experience.current ? (
                        <Sparkles className="h-3.5 w-3.5" />
                      ) : (
                        <span className="text-[10px] font-semibold">
                          {experience.id}
                        </span>
                      )}

                      {experience.current && (
                        <span className="absolute inset-[-5px] rounded-full border border-white/10" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.04]">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/[0.035] blur-3xl transition-all duration-700 group-hover:bg-white/[0.06]" />

                    <div className="relative p-6 sm:p-8 lg:p-9">
                      {/* Top */}
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          {/* Mobile number */}
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-xs font-semibold text-white/50 md:hidden">
                            {experience.id}
                          </div>

                          <div>
                            <div className="mb-2 flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                                {experience.role}
                              </h3>

                              {experience.current && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/65">
                                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                  Current
                                </span>
                              )}
                            </div>

                            <p className="text-sm font-medium text-white/55">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        {/* Period */}
                        <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-white/45">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {experience.period}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-7 h-px bg-white/[0.07]" />

                      {/* Info */}
                      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* Left */}
                        <div>
                          <p className="max-w-2xl text-sm leading-7 text-white/45">
                            {experience.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/45">
                              {experience.type}
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/45">
                              {experience.location}
                            </span>
                          </div>
                        </div>

                        {/* Right */}
                        <div>
                          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
                            What I worked on
                          </p>

                          <div className="space-y-3">
                            {experience.achievements.map((achievement) => (
                              <div
                                key={achievement}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                                  <Check className="h-3 w-3 text-white/55" />
                                </span>

                                <span className="text-sm leading-6 text-white/50">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 border-t border-white/[0.07] pt-6">
                        <div className="mb-4 flex items-center gap-2">
                          <Code2 className="h-3.5 w-3.5 text-white/30" />
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                            Technologies
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <div
                              key={technology.name}
                              className="group/tech inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-white/45 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white/70"
                            >
                              <span className="text-sm text-white/45 transition-colors group-hover/tech:text-white/70">
                                {technology.icon}
                              </span>

                              {technology.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] sm:grid-cols-3">
            <div className="px-6 py-7 text-center sm:border-r sm:border-white/[0.07]">
              <div className="text-3xl font-semibold tracking-tight">4+</div>
              <p className="mt-1.5 text-xs text-white/35">Years Experience</p>
            </div>

            <div className="border-t border-white/[0.07] px-6 py-7 text-center sm:border-t-0 sm:border-r">
              <div className="text-3xl font-semibold tracking-tight">30+</div>
              <p className="mt-1.5 text-xs text-white/35">Projects Delivered</p>
            </div>

            <div className="border-t border-white/[0.07] px-6 py-7 text-center sm:border-t-0">
              <div className="text-3xl font-semibold tracking-tight">100%</div>
              <p className="mt-1.5 text-xs text-white/35">Focus on Quality</p>
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-12 flex items-center justify-center gap-3 text-center"
        >
          <div className="h-px w-10 bg-white/10" />
          <span className="text-xs text-white/25">
            Always learning. Always building.
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-white/25" />
          <div className="h-px w-10 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
