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

  const scrollToAbout = () => {
    const section = document.querySelector("#about");

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
      className="
        relative flex min-h-screen items-center overflow-hidden
        bg-white pt-28 text-neutral-950
        transition-colors duration-500
        dark:bg-[#050505] dark:text-white
      "
    >
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/3
          h-125 w-125 -translate-x-1/2 rounded-full
          bg-black/[0.035] blur-[140px]
          dark:bg-white/[0.035]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 -top-40
          h-125 w-125 rounded-full
          bg-black/2.5 blur-[120px]
          dark:bg-white/2.5
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          dark:opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              currentColor 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_78%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)]
        "
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
              <div
                className="
                  mb-7 inline-flex items-center gap-2.5
                  rounded-full border
                  border-neutral-200
                  bg-neutral-100/80
                  px-3.5 py-2
                  backdrop-blur-xl
                  transition-colors duration-300
                  dark:border-white/10
                  dark:bg-white/[0.035]
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span
                  className="
                    text-[11px] font-medium tracking-wide
                    text-neutral-600
                    dark:text-white/55
                  "
                >
                  Available for new projects
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="
                mb-5 text-sm font-medium uppercase
                tracking-[0.3em]
                text-neutral-400
                dark:text-white/35
              "
            >
              Hello, I&apos;m Emam Khalid Jion
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="
                text-[clamp(3.5rem,8vw,7.5rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
                text-neutral-950
                dark:text-white
              "
            >
              Full Stack
              <br />
              <span
                className="
                  text-neutral-300
                  dark:text-white/30
                "
              >
                Developer.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="
                mt-8 max-w-xl text-base leading-7
                text-neutral-500
                sm:text-lg
                dark:text-white/45
              "
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
                className="
                  group flex items-center justify-center gap-3
                  rounded-full
                  bg-neutral-950
                  px-6 py-3.5
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:bg-neutral-800
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-neutral-200
                "
              >
                View my work
                <span
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full
                    bg-white
                    text-black
                    transition-transform duration-300
                    group-hover:rotate-45
                    dark:bg-black
                    dark:text-white
                  "
                >
                  <ArrowUpRight size={14} />
                </span>
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="
                  group flex items-center justify-center gap-2
                  rounded-full
                  border border-neutral-200
                  bg-neutral-100/70
                  px-6 py-3.5
                  text-sm font-medium
                  text-neutral-700
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-neutral-300
                  hover:bg-neutral-100
                  hover:text-neutral-950
                  dark:border-white/10
                  dark:bg-white/3
                  dark:text-white/70
                  dark:hover:border-white/20
                  dark:hover:bg-white/[0.07]
                  dark:hover:text-white
                "
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-3"
            >
              <span
                className="
                  mr-2 text-[10px] uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  dark:text-white/25
                "
              >
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
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-neutral-200
                      bg-neutral-100/70
                      text-neutral-400
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-neutral-300
                      hover:bg-neutral-950
                      hover:text-white
                      dark:border-white/10
                      dark:bg-white/2.5
                      dark:text-white/40
                      dark:hover:border-white/20
                      dark:hover:bg-white
                      dark:hover:text-black
                    "
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
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute -inset-8 rounded-full
                border border-dashed
                border-neutral-200
                dark:border-white/[0.07]
              "
            />

            <div
              className="
                absolute -inset-4 rounded-full
                border border-neutral-200
                dark:border-white/6
              "
            />

            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative aspect-square overflow-hidden
                rounded-4xl
                border border-neutral-200
                bg-linear-to-br
                from-neutral-100
                via-neutral-50
                to-transparent
                p-3
                shadow-2xl
                shadow-neutral-300/30
                transition-colors duration-500
                dark:border-white/10
                dark:from-white/8
                dark:via-white/2.5
                dark:to-transparent
                dark:shadow-black/50
              "
            >
              {/* Card Inner */}
              <div
                className="
                  relative flex h-full w-full
                  items-center justify-center
                  overflow-hidden rounded-3xl
                  border border-neutral-200
                  bg-neutral-50
                  transition-colors duration-500
                  dark:border-white/[0.07]
                  dark:bg-[#090909]
                "
              >
                {/* Center glow */}
                <div
                  className="
                    absolute h-56 w-56 rounded-full
                    bg-black/[0.035]
                    blur-[80px]
                    dark:bg-white/[0.035]
                  "
                />

                {/* Decorative circles */}
                <div
                  className="
                    absolute h-64 w-64 rounded-full
                    border border-neutral-200
                    dark:border-white/6
                  "
                />

                <div
                  className="
                    absolute h-44 w-44 rounded-full
                    border border-neutral-200
                    dark:border-white/6
                  "
                />

                <div
                  className="
                    absolute h-24 w-24 rounded-full
                    border border-neutral-300
                    dark:border-white/8
                  "
                />

                {/* Center */}
                <div className="relative z-10 text-center">
                  <p
                    className="
                      text-5xl font-bold
                      tracking-[-0.06em]
                      text-neutral-950
                      dark:text-white
                    "
                  >
                    FD
                  </p>

                  <div
                    className="
                      mx-auto mt-3 h-px w-10
                      bg-neutral-300
                      dark:bg-white/20
                    "
                  />

                  <p
                    className="
                      mt-3 text-[9px] uppercase
                      tracking-[0.3em]
                      text-neutral-400
                      dark:text-white/30
                    "
                  >
                    Digital Craftsman
                  </p>
                </div>

                {/* Next.js Floating Card */}
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
                  className="
                    absolute left-5 top-8
                    flex items-center gap-2.5
                    rounded-xl
                    border border-neutral-200
                    bg-white/80
                    px-3 py-2.5
                    shadow-xl
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-black/70
                  "
                >
                  <SiNextdotjs
                    size={17}
                    className="text-neutral-950 dark:text-white"
                  />

                  <span
                    className="
                      text-[10px] font-medium
                      text-neutral-500
                      dark:text-white/55
                    "
                  >
                    Next.js
                  </span>
                </motion.div>

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
                  className="
                    absolute bottom-8 right-5
                    flex items-center gap-2.5
                    rounded-xl
                    border border-neutral-200
                    bg-white/80
                    px-3 py-2.5
                    shadow-xl
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-black/70
                  "
                >
                  <SiTypescript
                    size={16}
                    className="text-neutral-950 dark:text-white"
                  />

                  <span
                    className="
                      text-[10px] font-medium
                      text-neutral-500
                      dark:text-white/55
                    "
                  >
                    TypeScript
                  </span>
                </motion.div>

                {/* Code Decoration */}
                <div
                  className="
                    absolute bottom-7 left-7
                    rounded-lg
                    border border-neutral-200
                    bg-white/70
                    px-3 py-2
                    font-mono text-[9px]
                    text-neutral-400
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-black/60
                    dark:text-white/25
                  "
                >
                  {"<build />"}
                </div>

                {/* Status */}
                <div
                  className="
                    absolute right-7 top-7
                    flex items-center gap-2
                    rounded-full
                    border border-neutral-200
                    bg-white/70
                    px-3 py-2
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-black/60
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span
                    className="
                      text-[9px] uppercase
                      tracking-wider
                      text-neutral-400
                      dark:text-white/40
                    "
                  >
                    Online
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <div
              className="
                absolute -bottom-10 left-1/2
                flex -translate-x-1/2
                items-center gap-2
                rounded-2xl
                border border-neutral-200
                bg-white/90
                p-2
                shadow-2xl
                shadow-neutral-300/30
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-black/80
                dark:shadow-black/50
              "
            >
              {heroTechStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-neutral-100
                      text-neutral-400
                      transition-all duration-300
                      hover:bg-neutral-200
                      hover:text-neutral-950
                      dark:bg-white/4
                      dark:text-white/40
                      dark:hover:bg-white/8
                      dark:hover:text-white
                    "
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
          className="
            mt-24 flex items-center justify-between
            border-t border-neutral-200
            pt-6
            lg:mt-28
            dark:border-white/[0.07]
          "
        >
          {/* Location */}
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5 w-1.5 rounded-full
                bg-neutral-300
                dark:bg-white/30
              "
            />

            <span
              className="
                text-[10px] uppercase
                tracking-[0.25em]
                text-neutral-400
                dark:text-white/25
              "
            >
              Based in Bangladesh
            </span>
          </div>

          {/* Scroll */}
          <button
            type="button"
            onClick={scrollToAbout}
            className="
              group flex items-center gap-3
              text-[10px] uppercase
              tracking-[0.25em]
              text-neutral-400
              transition-colors
              hover:text-neutral-950
              dark:text-white/25
              dark:hover:text-white/60
            "
          >
            Scroll to explore
            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-neutral-200
                transition-all duration-300
                group-hover:border-neutral-300
                group-hover:bg-neutral-100
                dark:border-white/10
                dark:group-hover:border-white/20
                dark:group-hover:bg-white/5
              "
            >
              <ArrowDown size={13} className="animate-bounce" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
