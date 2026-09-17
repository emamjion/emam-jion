"use client";

import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";

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
  {
    id: "03",
    company: "Independent Projects",
    role: "Frontend Developer",
    type: "Project-based",
    period: "2021 — 2022",
    location: "Remote",
    description:
      "Focused on creating polished frontend experiences and turning product ideas into responsive, interactive interfaces.",
    achievements: [
      "Built responsive frontend interfaces",
      "Created reusable React components",
      "Implemented modern animations and interactions",
      "Worked closely with design and product requirements",
    ],
    technologies: [
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function ExperienceCard({
  experience,
  index,
  progress,
  total,
}: {
  experience: Experience;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  /*
   * Every card owns a portion of the scroll progress.
   *
   * Example with 3 cards:
   *
   * Card 01 -> 0.00 - 0.50
   * Card 02 -> 0.25 - 0.75
   * Card 03 -> 0.50 - 1.00
   *
   * This overlap is what creates the "new card comes over old card"
   * feeling.
   */

  const start = index / total;
  const end = (index + 1) / total;

  const cardScale = useTransform(
    progress,
    [start, end],
    index === total - 1 ? [1, 1] : [1, 0.91],
  );

  const cardY = useTransform(
    progress,
    [start, end],
    index === 0 ? [0, -10] : [0, -18],
  );

  const cardOpacity = useTransform(
    progress,
    [start, end],
    index === total - 1 ? [1, 1] : [1, 0.72],
  );

  const contentOpacity = useTransform(
    progress,
    [start, start + (end - start) * 0.45, end],
    [1, 1, index === total - 1 ? 1 : 0.82],
  );

  return (
    <div
      className="sticky top-[100px] h-[calc(100vh-140px)] min-h-[620px] md:top-[110px]"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{
          scale: cardScale,
          y: cardY,
          opacity: cardOpacity,
        }}
        className="group relative h-full overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
      >
        {/* Card top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.035] to-transparent" />

        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.025] blur-[100px] transition-all duration-700 group-hover:bg-white/[0.045]" />

        {/* Card number */}
        <div className="absolute right-6 top-6 z-10 md:right-8 md:top-8">
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/20">
            {experience.id}
          </span>
        </div>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative flex h-full flex-col overflow-y-auto p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                  <BriefcaseBusiness className="h-3 w-3" />
                  {experience.type}
                </span>

                {experience.current && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/65">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {experience.role}
              </h3>

              <p className="mt-3 text-sm font-medium text-white/50">
                {experience.company}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-white/40">
              <CalendarDays className="h-3.5 w-3.5" />
              {experience.period}
            </div>
          </div>

          {/* Divider */}
          <div className="my-7 h-px w-full bg-white/[0.07] md:my-9" />

          {/* Main content */}
          <div className="grid flex-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            {/* Left */}
            <div className="flex flex-col">
              <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                {experience.description}
              </p>

              {/* Location */}
              <div className="mt-6 flex items-center gap-2 text-xs text-white/30">
                <MapPin className="h-3.5 w-3.5" />
                {experience.location}
              </div>

              {/* Journey quote */}
              <div className="mt-auto hidden border-l border-white/10 pl-5 lg:block">
                <p className="text-sm italic leading-7 text-white/25">
                  “Every project became another step in the journey.”
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-px w-5 bg-white/20" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  What I worked on
                </span>
              </div>

              <div className="space-y-3.5">
                {experience.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-start gap-3 rounded-xl border border-transparent py-1"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                      <Check className="h-3 w-3 text-white/50" />
                    </span>

                    <span className="text-sm leading-6 text-white/45">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-8 border-t border-white/[0.07] pt-6 md:mt-10">
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5 text-white/25" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                Technologies
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <div
                  key={technology.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-white/40 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white/70"
                >
                  <span className="text-sm text-white/40">
                    {technology.icon}
                  </span>

                  {technology.name}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom journey indicator */}
          <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/20">
              <span>Journey</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>

            <div className="font-mono text-[10px] tracking-widest text-white/20">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </div>
          </div>
        </motion.div>

        {/* Bottom edge */}
        <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.35,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = clamp(
      Math.round(latest * (experiences.length - 1)),
      0,
      experiences.length - 1,
    );

    setActiveIndex(nextIndex);
  });

  /*
   * Road marker position.
   *
   * 0% = first experience
   * 100% = last experience
   */
  const roadMarkerY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const roadGlowOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0.4, 1, 1, 1, 0.8],
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-[-200px] top-[25%] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[130px]" />

        <div className="absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-20 max-w-3xl text-center md:mb-28"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            EXPERIENCE
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            A journey of
            <span className="text-white/30"> building & growing.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Every role, project and challenge has been another mile in the
            journey of becoming a better developer.
          </p>
        </motion.div>

        {/* =========================================================
            JOURNEY AREA
        ========================================================= */}
        <div className="relative">
          {/* =====================================================
              HIGHWAY ROAD
          ===================================================== */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 hidden w-[74px] md:block">
            {/* Outer road */}
            <div className="absolute left-[17px] top-0 h-full w-[40px] overflow-hidden rounded-full border border-white/[0.07] bg-[#090909]">
              {/* Road inner */}
              <div className="absolute inset-x-[7px] top-0 bottom-0 rounded-full border-x border-white/[0.035] bg-[#0d0d0d]" />

              {/* Center lane */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgba(255,255,255,0.28) 0px, rgba(255,255,255,0.28) 18px, transparent 18px, transparent 36px)",
                  }}
                />
              </div>

              {/* Moving light */}
              <motion.div
                style={{
                  top: roadMarkerY,
                  opacity: roadGlowOpacity,
                }}
                className="absolute left-1/2 z-20 h-20 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-md"
              />

              {/* Moving vehicle */}
              <motion.div
                style={{
                  top: roadMarkerY,
                }}
                className="absolute left-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex h-8 w-6 items-center justify-center rounded-[7px] border border-white/30 bg-white shadow-[0_0_25px_rgba(255,255,255,0.18)]">
                  <div className="h-3.5 w-1 rounded-full bg-black/70" />

                  {/* headlights */}
                  <span className="absolute -bottom-1 left-0.5 h-1 w-1 rounded-full bg-white" />
                  <span className="absolute -bottom-1 right-0.5 h-1 w-1 rounded-full bg-white" />
                </div>
              </motion.div>
            </div>

            {/* Start / end dots */}
            <div className="absolute left-[32px] top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/30 bg-[#050505]" />

            <div className="absolute bottom-0 left-[32px] h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/20 bg-[#050505]" />
          </div>

          {/* =====================================================
              DESKTOP ROAD LABELS
          ===================================================== */}
          <div className="pointer-events-none absolute left-[-5px] top-0 z-40 hidden h-full w-24 md:block">
            {experiences.map((experience, index) => {
              const position =
                experiences.length === 1
                  ? 0
                  : (index / (experiences.length - 1)) * 100;

              return (
                <div
                  key={experience.id}
                  className="absolute left-[52px] -translate-y-1/2"
                  style={{
                    top: `${position}%`,
                  }}
                >
                  <motion.div
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.3,
                      scale: activeIndex === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        activeIndex === index
                          ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                          : "bg-white/20"
                      }`}
                    />

                    <span
                      className={`font-mono text-[9px] tracking-widest ${
                        activeIndex === index
                          ? "text-white/70"
                          : "text-white/20"
                      }`}
                    >
                      {experience.id}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              MOBILE MINI ROAD
          ===================================================== */}
          <div className="mb-6 flex items-center gap-3 md:hidden">
            <div className="relative h-10 w-[110px] overflow-hidden rounded-full border border-white/[0.08] bg-[#090909]">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-white/20" />

              <motion.div
                animate={{
                  left: `${(activeIndex / Math.max(experiences.length - 1, 1)) * 100}%`,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-1/2 h-5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[5px] border border-white/30 bg-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                Current milestone
              </p>

              <p className="mt-1 font-mono text-xs text-white/50">
                {experiences[activeIndex]?.id} /{" "}
                {String(experiences.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* =====================================================
              STACKED EXPERIENCE CARDS
          ===================================================== */}
          <div className="relative ml-0 md:ml-[74px]">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative h-[100vh] min-h-[760px] md:h-[105vh]"
              >
                <ExperienceCard
                  experience={experience}
                  index={index}
                  progress={smoothProgress}
                  total={experiences.length}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            JOURNEY PROGRESS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                  The Journey
                </p>

                <p className="mt-1 text-sm text-white/40">
                  {experiences[activeIndex]?.company}
                </p>
              </div>

              <div className="font-mono text-xs text-white/25">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(experiences.length).padStart(2, "0")}
              </div>
            </div>

            {/* Progress road */}
            <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                style={{
                  scaleX: smoothProgress,
                  transformOrigin: "left",
                }}
                className="absolute inset-y-0 left-0 w-full rounded-full bg-white/30"
              />

              {/* milestones */}
              {experiences.map((experience, index) => {
                const position =
                  experiences.length === 1
                    ? 0
                    : (index / (experiences.length - 1)) * 100;

                return (
                  <div
                    key={experience.id}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${position}%`,
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: activeIndex === index ? 1.4 : 1,
                        backgroundColor:
                          activeIndex === index
                            ? "rgba(255,255,255,1)"
                            : "rgba(255,255,255,0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-2 w-2 rounded-full"
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex justify-between">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`text-[9px] font-mono tracking-widest transition-colors duration-300 ${
                    activeIndex === index ? "text-white/60" : "text-white/15"
                  }`}
                >
                  {experience.id}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            STATS
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-3">
            <div className="px-6 py-7 text-center sm:border-r sm:border-white/[0.07]">
              <div className="text-3xl font-semibold tracking-tight">4+</div>

              <p className="mt-1.5 text-xs text-white/30">Years Experience</p>
            </div>

            <div className="border-t border-white/[0.07] px-6 py-7 text-center sm:border-t-0 sm:border-r">
              <div className="text-3xl font-semibold tracking-tight">30+</div>

              <p className="mt-1.5 text-xs text-white/30">Projects Delivered</p>
            </div>

            <div className="border-t border-white/[0.07] px-6 py-7 text-center sm:border-t-0">
              <div className="text-3xl font-semibold tracking-tight">100%</div>

              <p className="mt-1.5 text-xs text-white/30">Focus on Quality</p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            ENDING
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 bg-white/10" />

          <div className="flex items-center gap-2 text-xs text-white/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Always learning. Always building.</span>
          </div>

          <div className="h-px w-10 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
