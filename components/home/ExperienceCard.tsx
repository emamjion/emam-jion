import { Experience } from "@/types";
import { motion, MotionValue, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  MapPin,
} from "lucide-react";

export function ExperienceCard({
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
      className="sticky top-25 h-[calc(100vh-140px)] min-h-155 md:top-27.5"
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
        className="group relative h-full overflow-hidden rounded-[28px] border border-white/9 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/[0.035] to-transparent" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/2.5 blur-[100px] transition-all duration-700 group-hover:bg-white/4.5" />

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
                <span className="inline-flex items-center gap-2 rounded-full border border-white/9 bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                  <BriefcaseBusiness className="h-3 w-3" />
                  {experience.type}
                </span>

                {experience.current && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/65">
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

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/8 bg-white/2.5 px-4 py-2.5 text-xs text-white/40">
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
              {experience.technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/2.5 px-3 py-2 text-xs text-white/40 transition-all duration-300 hover:border-white/15 hover:bg-white/5 hover:text-white/70"
                  >
                    <span className="flex items-center justify-center text-white/40">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span>{technology.name}</span>
                  </div>
                );
              })}
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

        <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </motion.article>
    </div>
  );
}
