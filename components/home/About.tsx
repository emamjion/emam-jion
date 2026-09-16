"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Rocket, Sparkles } from "lucide-react";

const stats = [
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

const highlights = [
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

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-28 sm:py-32 lg:py-40"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-white/40" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Building digital experiences
            <span className="block text-white/35">with purpose.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Left visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025]"
          >
            {/* Glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/[0.06] blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/[0.04] blur-[100px]" />

            {/* Decorative lines */}
            <div className="absolute left-8 top-8 h-20 w-20 border-l border-t border-white/10" />
            <div className="absolute bottom-8 right-8 h-20 w-20 border-b border-r border-white/10" />

            {/* Main identity */}
            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.7)]" />

                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Developer / Creator
                  </span>
                </div>

                <Sparkles className="h-4 w-4 text-white/30" />
              </div>

              {/* Center */}
              <div className="relative flex flex-1 items-center justify-center">
                <div className="relative">
                  {/* Outer rings */}
                  <div className="absolute -inset-16 rounded-full border border-white/[0.045]" />
                  <div className="absolute -inset-28 rounded-full border border-white/[0.025]" />

                  <div className="absolute -inset-10 rounded-full bg-white/[0.025] blur-2xl" />

                  {/* Monogram */}
                  <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/[0.12] bg-[#090909] shadow-2xl sm:h-56 sm:w-56">
                    <div className="absolute inset-3 rounded-full border border-white/[0.05]" />

                    <div className="text-center">
                      <div className="text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl">
                        FD
                      </div>

                      <div className="mt-2 text-[9px] uppercase tracking-[0.35em] text-white/30">
                        Digital Craftsman
                      </div>
                    </div>
                  </div>

                  {/* Floating code badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-8 top-4 rounded-xl border border-white/[0.1] bg-[#0b0b0b]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                  >
                    <div className="font-mono text-xs text-white/50">
                      {"<dev />"}
                    </div>
                  </motion.div>

                  {/* Floating status badge */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-3 -left-10 rounded-xl border border-white/[0.1] bg-[#0b0b0b]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                        Available
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm leading-6 text-white/35">
                    Turning complex ideas into
                    <br />
                    simple digital products.
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Based in
                  </p>

                  <p className="mt-1 text-sm text-white/60">Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/55 sm:text-xl sm:leading-9">
                I'm a <span className="text-white">Full Stack Developer</span>{" "}
                focused on creating modern, scalable and visually refined web
                applications.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/35">
                I enjoy working across the entire development process — from
                designing intuitive interfaces to building powerful backend
                systems. My goal is simple: create products that look great,
                feel effortless and work reliably.
              </p>

              {/* Technologies */}
              <div className="mt-10">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
                  Technologies I work with
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + index * 0.05,
                      }}
                      whileHover={{ y: -3 }}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-white/50 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="mt-12 space-y-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                    }}
                    whileHover={{ x: 5 }}
                    className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.035]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:bg-white/[0.07]">
                      <Icon className="h-5 w-5 text-white/50 transition-colors group-hover:text-white" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-white/80">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-white/30">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative p-7 sm:p-8 ${
                index !== stats.length - 1
                  ? "border-b border-white/[0.07] sm:border-r lg:border-b-0"
                  : ""
              } ${index === 1 ? "sm:border-b lg:border-b-0" : ""}`}
            >
              <div className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">
                {stat.label}
              </div>

              {/* Decorative number */}
              <div className="absolute right-5 top-5 text-[10px] font-mono text-white/[0.12]">
                0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-white/25">
            Every project is an opportunity to learn, experiment and build
            something meaningful.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <span>Explore my work</span>

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
