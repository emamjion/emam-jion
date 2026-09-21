"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { BriefcaseBusiness, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

import { experiences } from "@/data";
import { ExperienceCard } from "./ExperienceCard";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-50 top-[25%] h-112.5 w-112.5 rounded-full bg-white/2 blur-[130px]" />

        <div className="absolute -bottom-50 -right-37.5 h-112.5 w-112.5 rounded-full bg-white/2 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Experience Timeline */}
        <div className="relative">
          {/* Desktop Road */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 hidden w-18.5 md:block">
            {/* Outer Road */}
            <div className="absolute left-4.25 top-0 h-full w-10 overflow-hidden rounded-full border border-white/[0.07] bg-[#090909]">
              {/* Road Inner */}
              <div className="absolute inset-x-1.75 top-0 bottom-0 rounded-full border-x border-white/[0.035] bg-[#0d0d0d]" />

              {/* Center Lane */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgba(255,255,255,0.28) 0px, rgba(255,255,255,0.28) 18px, transparent 18px, transparent 36px)",
                  }}
                />
              </div>

              {/* Moving Light */}
              <motion.div
                style={{
                  top: roadMarkerY,
                  opacity: roadGlowOpacity,
                }}
                className="absolute left-1/2 z-20 h-20 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-md"
              />

              {/* Moving Vehicle */}
              <motion.div
                style={{
                  top: roadMarkerY,
                }}
                className="absolute left-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex h-8 w-6 items-center justify-center rounded-[7px] border border-white/30 bg-white shadow-[0_0_25px_rgba(255,255,255,0.18)]">
                  <div className="h-3.5 w-1 rounded-full bg-black/70" />

                  {/* Headlights */}
                  <span className="absolute -bottom-1 left-0.5 h-1 w-1 rounded-full bg-white" />
                  <span className="absolute -bottom-1 right-0.5 h-1 w-1 rounded-full bg-white" />
                </div>
              </motion.div>
            </div>

            {/* Start Dot */}
            <div className="absolute left-8 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/30 bg-[#050505]" />

            {/* End Dot */}
            <div className="absolute bottom-0 left-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/20 bg-[#050505]" />
          </div>

          {/* Desktop Milestones */}
          <div className="pointer-events-none absolute -left-1.25 top-0 z-40 hidden h-full w-24 md:block">
            {experiences.map((experience, index) => {
              const position =
                experiences.length === 1
                  ? 0
                  : (index / (experiences.length - 1)) * 100;

              return (
                <div
                  key={experience.id}
                  className="absolute left-13 -translate-y-1/2"
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

          {/* Mobile Progress Indicator */}
          <div className="mb-6 flex items-center gap-3 md:hidden">
            <div className="relative h-10 w-27.5 overflow-hidden rounded-full border border-white/8 bg-[#090909]">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-white/20" />

              <motion.div
                animate={{
                  left: `${
                    (activeIndex / Math.max(experiences.length - 1, 1)) * 100
                  }%`,
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

          {/* Experience Cards */}
          <div className="relative ml-0 md:ml-18.5">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative h-screen min-h-190 md:h-[105vh]"
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

        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="rounded-3xl border border-white/8 bg-white/2 p-5 sm:p-6">
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

            {/* Progress Road */}
            <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                style={{
                  scaleX: smoothProgress,
                  transformOrigin: "left",
                }}
                className="absolute inset-y-0 left-0 w-full rounded-full bg-white/30"
              />

              {/* Milestones */}
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

            {/* Milestone Labels */}
            <div className="mt-4 flex justify-between">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`font-mono text-[9px] tracking-widest transition-colors duration-300 ${
                    activeIndex === index ? "text-white/60" : "text-white/15"
                  }`}
                >
                  {experience.id}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="grid overflow-hidden rounded-3xl border border-white/8 bg-white/2 sm:grid-cols-3">
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

        {/* Bottom Message */}
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
