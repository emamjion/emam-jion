"use client";

import { services } from "@/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-24
        text-white
        md:py-32
      "
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-45 top-[10%] h-100 w-100 rounded-full bg-white/[0.018] blur-[130px]" />

        <div className="absolute -bottom-45 -right-30 h-112.5 w-112.5 rounded-full bg-white/2 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-14
            flex
            flex-col
            gap-8
            md:mb-16
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              WHAT I DO
            </div>

            {/* Heading */}

            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">
              Services built around
              <span className="text-white/30"> real results.</span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              From strategy and design to development and deployment, I help
              turn ideas into thoughtful digital products that are built to
              last.
            </p>
          </div>

          <div className="hidden shrink-0 md:block">
            <div className="flex items-center gap-3 text-right">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                  Expertise
                </p>

                <p className="mt-1 text-sm text-white/40">
                  Digital Product Development
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/2.5">
                <ArrowUpRight className="h-4 w-4 text-white/30" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-5
            rounded-[28px]
            border
            border-white/8
            bg-white/2
            p-6
            sm:p-7
            md:flex-row
            md:items-center
            md:justify-between
            md:p-8
          "
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/8 bg-white/[0.035]">
              <Sparkles className="h-4 w-4 text-white/40" />
            </div>

            <div>
              <p className="text-sm font-medium text-white/65">
                Have a project in mind?
              </p>

              <p className="mt-1 text-xs leading-6 text-white/30">
                Let&apos;s turn your idea into something people love to use.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white
              px-5
              py-3
              text-xs
              font-medium
              text-black
              transition-all
              duration-300
              hover:bg-white/90
            "
          >
            Start a conversation
            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
