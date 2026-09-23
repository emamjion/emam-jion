"use client";

import { heroSocialLinks, heroTechStack } from "@/data";
import { motion, Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.querySelector("#projects");

    if (!section) return;

    const offset = 100;
    const position =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const section = document.querySelector("#contact");

    if (!section) return;

    const offset = 100;
    const position =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-white/2.5 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, #050505 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants}>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[11px] font-medium tracking-wide text-white/55">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Small intro */}
            <motion.p
              variants={itemVariants}
              className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white/35"
            >
              Hello, I&apos;m Emam Khalid Jion
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white"
            >
              Full Stack
              <br />
              <span className="text-white/30">Developer.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg"
            >
              I design and build modern digital products that combine clean
              interfaces, scalable architecture, and thoughtful user
              experiences.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 cursor-pointer"
              >
                View my work
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-xl cursor-pointer transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-3"
            >
              <span className="mr-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Connect
              </span>

              {heroSocialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/2.5 text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-black"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto hidden w-full max-w-110 lg:block"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-8 rounded-full border border-dashed border-white/[0.07]"
            />

            {/* Inner ring */}
            <div className="absolute -inset-4 rounded-full border border-white/6" />

            {/* Main card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-square overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-white/8 via-white/2.5 to-transparent p-3 shadow-2xl shadow-black/50"
            >
              {/* Card inner */}
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/[0.07] bg-[#090909]">
                {/* Center glow */}
                <div className="absolute h-56 w-56 rounded-full bg-white/[0.035] blur-[80px]" />

                {/* Decorative circles */}
                <div className="absolute h-64 w-64 rounded-full border border-white/6" />

                <div className="absolute h-44 w-44 rounded-full border border-white/6" />

                <div className="absolute h-24 w-24 rounded-full border border-white/8" />

                {/* Center */}
                <div className="relative z-10 text-center">
                  <p className="text-5xl font-bold tracking-[-0.06em] text-white">
                    EJ
                  </p>

                  <div className="mx-auto mt-3 h-px w-10 bg-white/20" />

                  <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Digital Craftsman
                  </p>
                </div>

                {/* Floating tech card */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-5 top-8 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/70 px-3 py-2.5 shadow-xl backdrop-blur-xl"
                >
                  <SiNextdotjs size={17} className="text-white" />

                  <span className="text-[10px] font-medium text-white/55">
                    Next.js
                  </span>
                </motion.div>

                {/* Floating tech card */}
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 right-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/70 px-3 py-2.5 shadow-xl backdrop-blur-xl"
                >
                  <SiTypescript size={16} className="text-white" />

                  <span className="text-[10px] font-medium text-white/55">
                    TypeScript
                  </span>
                </motion.div>

                {/* Code decoration */}
                <div className="absolute bottom-7 left-7 rounded-lg border border-white/10 bg-black/60 px-3 py-2 font-mono text-[9px] text-white/25 backdrop-blur-xl">
                  {"<build />"}
                </div>

                {/* Status */}
                <div className="absolute right-7 top-7 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[9px] uppercase tracking-wider text-white/40">
                    Online
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tech stack */}
            <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/10 bg-black/80 p-2 shadow-2xl backdrop-blur-2xl">
              {heroTechStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/4 text-white/40 transition-all duration-300 hover:bg-white/8 hover:text-white"
                  >
                    <Icon size={17} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
          className="mt-24 flex items-center justify-between border-t border-white/[0.07] pt-6 lg:mt-28"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Based in Bangladesh
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              const section = document.querySelector("#about");

              if (!section) return;

              const offset = 100;

              const position =
                section.getBoundingClientRect().top + window.scrollY - offset;

              window.scrollTo({
                top: position,
                behavior: "smooth",
              });
            }}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/60"
          >
            Scroll to explore
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5">
              <ArrowDown size={13} className="animate-bounce" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
