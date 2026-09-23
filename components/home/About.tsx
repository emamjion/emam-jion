"use client";

import { highlights, stats, technologies } from "@/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#f7f7f5] py-28
        text-neutral-950
        transition-colors duration-500
        dark:bg-[#050505]
        dark:text-white
        sm:py-32
        lg:py-40
      "
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Light mode grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.028]
            dark:hidden
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.75) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Dark mode grid */}
        <div
          className="
            absolute inset-0
            hidden opacity-[0.035]
            dark:block
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Center glow */}
        <div
          className="
            absolute left-1/2 top-1/3
            h-125 w-125
            -translate-x-1/2
            rounded-full
            bg-black/[0.018]
            blur-[140px]
            dark:bg-white/[0.025]
          "
        />
      </div>

      {/* =========================
          CONTAINER
      ========================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================
            SECTION HEADER

            Explicit colors are applied here
            so the header remains readable
            regardless of SectionHeader defaults.
        ========================== */}

        <div
          className="
            text-neutral-950
            [&_h1]:text-neutral-950
            [&_h2]:text-neutral-950
            [&_p]:text-neutral-500
            [&_span]:text-neutral-950

            dark:text-white
            dark:[&_h1]:text-white
            dark:[&_h2]:text-white
            dark:[&_p]:text-white/50
            dark:[&_span]:text-white
          "
        >
          <SectionHeader
            eyebrow="About Me"
            title="Building digital experiences"
            highlight="with purpose."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* =========================
              LEFT PROFILE CARD
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="
              relative min-h-125
              overflow-hidden rounded-4xl
              border border-black/[0.09]
              bg-white/45
              shadow-[0_20px_70px_rgba(0,0,0,0.035)]
              transition-all duration-500

              dark:border-white/[0.09]
              dark:bg-white/[0.025]
              dark:shadow-none
            "
          >
            {/* Glows */}

            <div
              className="
                absolute -left-20 -top-20
                h-64 w-64
                rounded-full
                bg-black/[0.035]
                blur-[100px]
                dark:bg-white/[0.06]
              "
            />

            <div
              className="
                absolute -bottom-20 -right-20
                h-64 w-64
                rounded-full
                bg-black/[0.02]
                blur-[100px]
                dark:bg-white/[0.04]
              "
            />

            {/* Corner decorations */}

            <div
              className="
                absolute left-8 top-8
                h-20 w-20
                border-l border-t
                border-black/[0.10]
                dark:border-white/[0.10]
              "
            />

            <div
              className="
                absolute bottom-8 right-8
                h-20 w-20
                border-b border-r
                border-black/[0.10]
                dark:border-white/[0.10]
              "
            />

            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
              {/* Top */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-2 w-2
                      rounded-full
                      bg-black/75
                      shadow-[0_0_15px_rgba(0,0,0,0.20)]
                      dark:bg-white/80
                      dark:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    "
                  />

                  <span
                    className="
                      text-xs uppercase
                      tracking-[0.2em]
                      text-black/50
                      dark:text-white/45
                    "
                  >
                    Developer / Creator
                  </span>
                </div>

                <Sparkles
                  className="
                    h-4 w-4
                    text-black/30
                    dark:text-white/30
                  "
                />
              </div>

              {/* Center */}

              <div className="relative flex flex-1 items-center justify-center">
                <div className="relative">
                  {/* Rings */}

                  <div
                    className="
                      absolute -inset-16
                      rounded-full
                      border border-black/[0.055]
                      dark:border-white/[0.045]
                    "
                  />

                  <div
                    className="
                      absolute -inset-28
                      rounded-full
                      border border-black/[0.035]
                      dark:border-white/[0.025]
                    "
                  />

                  <div
                    className="
                      absolute -inset-10
                      rounded-full
                      bg-black/[0.02]
                      blur-2xl
                      dark:bg-white/[0.025]
                    "
                  />

                  {/* Profile Circle */}

                  <div
                    className="
                      relative flex
                      h-48 w-48
                      items-center justify-center
                      rounded-full
                      border border-black/[0.13]
                      bg-white
                      shadow-[0_20px_50px_rgba(0,0,0,0.10)]
                      transition-all duration-500

                      dark:border-white/[0.12]
                      dark:bg-[#090909]
                      dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]

                      sm:h-56 sm:w-56
                    "
                  >
                    <div
                      className="
                        absolute inset-3
                        rounded-full
                        border border-black/[0.07]
                        dark:border-white/[0.05]
                      "
                    />

                    <div className="text-center">
                      <div
                        className="
                          text-5xl
                          font-semibold
                          tracking-[-0.08em]
                          text-black
                          dark:text-white
                          sm:text-6xl
                        "
                      >
                        EJ
                      </div>

                      <div
                        className="
                          mt-2
                          text-[9px]
                          uppercase
                          tracking-[0.35em]
                          text-black/40
                          dark:text-white/35
                        "
                      >
                        Emam Jion
                      </div>
                    </div>
                  </div>

                  {/* Floating DEV */}

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute -right-8 top-4
                      rounded-xl
                      border border-black/[0.10]
                      bg-white/95
                      px-4 py-3
                      shadow-[0_15px_35px_rgba(0,0,0,0.10)]
                      backdrop-blur-xl

                      dark:border-white/[0.10]
                      dark:bg-[#0b0b0b]/90
                      dark:shadow-xl
                    "
                  >
                    <div
                      className="
                        font-mono
                        text-xs
                        text-black/55
                        dark:text-white/50
                      "
                    >
                      {"<dev />"}
                    </div>
                  </motion.div>

                  {/* Available */}

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute -bottom-3 -left-10
                      rounded-xl
                      border border-black/[0.10]
                      bg-white/95
                      px-4 py-3
                      shadow-[0_15px_35px_rgba(0,0,0,0.10)]
                      backdrop-blur-xl

                      dark:border-white/[0.10]
                      dark:bg-[#0b0b0b]/90
                      dark:shadow-xl
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          h-1.5 w-1.5
                          rounded-full
                          bg-emerald-500
                          shadow-[0_0_8px_rgba(16,185,129,0.5)]
                          dark:bg-emerald-400
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-black/55
                          dark:text-white/50
                        "
                      >
                        Available
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom */}

              <div className="flex items-end justify-between gap-6">
                <div>
                  <p
                    className="
                      text-sm
                      leading-6
                      text-black/50
                      dark:text-white/35
                    "
                  >
                    Turning complex ideas into
                    <br />
                    simple digital products.
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-black/35
                      dark:text-white/25
                    "
                  >
                    Based in
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-black/70
                      dark:text-white/60
                    "
                  >
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p
                className="
                  max-w-2xl
                  text-lg
                  leading-8
                  text-black/65
                  dark:text-white/60

                  sm:text-xl
                  sm:leading-9
                "
              >
                I'm a{" "}
                <span
                  className="
                    font-medium
                    text-black
                    dark:text-white
                  "
                >
                  Full Stack Developer
                </span>{" "}
                focused on creating modern, scalable and visually refined web
                applications.
              </p>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-black/50
                  dark:text-white/40
                "
              >
                I enjoy working across the entire development process — from
                designing intuitive interfaces to building powerful backend
                systems. My goal is simple: create products that look great,
                feel effortless and work reliably.
              </p>

              {/* Technologies */}

              <div className="mt-10">
                <p
                  className="
                    mb-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-black/45
                    dark:text-white/35
                  "
                >
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
                      className="
                        rounded-full
                        border border-black/[0.10]
                        bg-white/60
                        px-4 py-2
                        text-xs
                        text-black/60
                        shadow-sm
                        transition-all duration-300

                        hover:border-black/[0.18]
                        hover:bg-white
                        hover:text-black

                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:text-white/55
                        dark:shadow-none
                        dark:hover:border-white/[0.20]
                        dark:hover:bg-white/[0.06]
                        dark:hover:text-white
                      "
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights */}

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
                    className="
                      group
                      flex
                      gap-5
                      rounded-2xl
                      border border-black/[0.08]
                      bg-white/35
                      p-5
                      shadow-sm
                      transition-all duration-300

                      hover:border-black/[0.15]
                      hover:bg-white/65
                      hover:shadow-[0_10px_35px_rgba(0,0,0,0.045)]

                      dark:border-white/[0.07]
                      dark:bg-white/[0.02]
                      dark:shadow-none
                      dark:hover:border-white/[0.14]
                      dark:hover:bg-white/[0.035]
                    "
                  >
                    <div
                      className="
                        flex
                        h-11 w-11
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        border border-black/[0.09]
                        bg-black/[0.035]
                        transition-all

                        group-hover:border-black/[0.14]
                        group-hover:bg-black/[0.07]

                        dark:border-white/[0.08]
                        dark:bg-white/[0.03]
                        dark:group-hover:border-white/[0.12]
                        dark:group-hover:bg-white/[0.07]
                      "
                    >
                      <Icon
                        className="
                          h-5 w-5
                          text-black/60
                          transition-colors

                          group-hover:text-black

                          dark:text-white/50
                          dark:group-hover:text-white
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-sm
                          font-medium
                          text-black/85
                          dark:text-white/85
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-sm
                          leading-6
                          text-black/45
                          dark:text-white/35
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="
                        ml-auto
                        mt-1
                        h-4 w-4
                        shrink-0
                        text-black/25
                        transition-all duration-300

                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-black/60

                        dark:text-white/15
                        dark:group-hover:text-white/50
                      "
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =========================
            STATS
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="
            mt-20
            grid
            overflow-hidden
            rounded-[1.75rem]
            border border-black/[0.09]
            bg-white/35
            shadow-sm
            transition-colors duration-500

            dark:border-white/[0.08]
            dark:bg-white/[0.02]
            dark:shadow-none

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                relative
                p-7
                sm:p-8
                ${
                  index !== stats.length - 1
                    ? "border-b border-black/[0.08] sm:border-r lg:border-b-0 dark:border-white/[0.07]"
                    : ""
                }
                ${index === 1 ? "sm:border-b lg:border-b-0" : ""}
              `}
            >
              <div
                className="
                  text-3xl
                  font-semibold
                  tracking-tighter
                  text-black
                  dark:text-white
                  sm:text-4xl
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-2
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-black/45
                  dark:text-white/35
                "
              >
                {stat.label}
              </div>

              <div
                className="
                  absolute
                  right-5
                  top-5
                  font-mono
                  text-[10px]
                  text-black/15
                  dark:text-white/12
                "
              >
                0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>

        {/* =========================
            FOOTER
        ========================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-6
            border-t border-black/[0.08]
            pt-8

            dark:border-white/[0.07]

            sm:flex-row
            sm:items-center
          "
        >
          <p
            className="
              max-w-xl
              text-sm
              leading-6
              text-black/40
              dark:text-white/30
            "
          >
            Every project is an opportunity to learn, experiment and build
            something meaningful.
          </p>

          <a
            href="#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-black/60
              transition-colors
              hover:text-black

              dark:text-white/55
              dark:hover:text-white
            "
          >
            <span>Explore my work</span>

            <ArrowUpRight
              className="
                h-4 w-4
                transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
