"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Database,
  Globe2,
  Layers3,
  Server,
  Sparkles,
} from "lucide-react";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building fast, responsive and polished interfaces with a strong focus on usability.",
    icon: Globe2,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Designing secure APIs and scalable server-side systems for real-world applications.",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: Braces },
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Structuring reliable data systems with performance, scalability and maintainability in mind.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern tools to keep development organized, collaborative and efficient.",
    icon: Layers3,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

const principles = [
  "Performance",
  "Accessibility",
  "Responsive Design",
  "Clean Architecture",
  "Reusable Components",
  "User Experience",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-28 sm:py-32 lg:py-40"
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

        <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />

              <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                Skills & Expertise
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Tools I use to turn
              <span className="block text-white/30">ideas into products.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1">
            <p className="text-sm leading-7 text-white/35">
              From frontend experiences to backend architecture, I work across
              the stack to build products that are functional, scalable and
              enjoyable to use.
            </p>
          </div>
        </motion.div>

        {/* Skill cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.04] opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                      <Icon className="h-5 w-5 text-white/50 transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <div>
                      <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                        {group.number}
                      </div>

                      <h3 className="text-lg font-medium text-white/85">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50" />
                </div>

                {/* Description */}
                <p className="relative mt-7 max-w-md text-sm leading-7 text-white/30">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3.5 py-2.5 transition-all duration-300 group-hover:border-white/[0.1]"
                      >
                        <SkillIcon className="h-3.5 w-3.5 text-white/40" />

                        <span className="text-xs text-white/45">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom line */}
                <div className="relative mt-8 h-px w-full overflow-hidden bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${70 + index * 7}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-white/20"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02]"
        >
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left */}
            <div className="relative border-b border-white/[0.07] p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.035] blur-[70px]" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-white/35" />

                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                    My approach
                  </span>
                </div>

                <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.03em] text-white/85 sm:text-3xl">
                  Technology is a tool.
                  <span className="block text-white/30">
                    Experience is the goal.
                  </span>
                </h3>
              </div>
            </div>

            {/* Right */}
            <div className="p-7 sm:p-9">
              <p className="mb-7 max-w-2xl text-sm leading-7 text-white/35">
                Good development is not only about writing code. I focus on how
                the final product feels, performs and solves a real problem.
                Every technical decision should contribute to a better
                experience.
              </p>

              <div className="flex flex-wrap gap-2">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-xs text-white/40"
                  >
                    {principle}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.07]" />

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            Always learning
          </div>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </motion.div>
      </div>
    </section>
  );
}
