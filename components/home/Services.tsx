"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  Megaphone,
  Palette,
  ServerCog,
  Smartphone,
  Sparkles,
} from "lucide-react";

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    id: "01",
    title: "Web Development",
    shortTitle: "Web",
    description:
      "Fast, scalable and modern websites built around your business goals, users and long-term growth.",
    icon: Code2,
    tags: ["Next.js", "React", "TypeScript"],
    number: "01",
  },
  {
    id: "02",
    title: "UI/UX Design",
    shortTitle: "Design",
    description:
      "Clean and thoughtful interfaces that balance visual quality, usability and a seamless user experience.",
    icon: Palette,
    tags: ["Figma", "Design System", "Prototype"],
    number: "02",
  },
  {
    id: "03",
    title: "Mobile App",
    shortTitle: "Mobile",
    description:
      "User-focused mobile experiences designed to feel intuitive, reliable and consistent across devices.",
    icon: Smartphone,
    tags: ["React Native", "iOS", "Android"],
    number: "03",
  },
  {
    id: "04",
    title: "Backend & API",
    shortTitle: "Backend",
    description:
      "Reliable backend systems and APIs designed for security, performance, scalability and maintainability.",
    icon: ServerCog,
    tags: ["Node.js", "MongoDB", "REST API"],
    number: "04",
  },
  {
    id: "05",
    title: "Branding",
    shortTitle: "Brand",
    description:
      "Distinctive visual identities that help businesses communicate clearly and build a memorable presence.",
    icon: LayoutTemplate,
    tags: ["Identity", "Visuals", "Guidelines"],
    number: "05",
  },
  {
    id: "06",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Strategic digital solutions focused on improving visibility, engagement and meaningful business growth.",
    icon: Megaphone,
    tags: ["SEO", "Social Media", "Growth"],
    number: "06",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={itemVariants}
      whileHover="hover"
      className="
        group
        relative
        min-h-[330px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-[#0a0a0a]
        transition-colors
        duration-500
        hover:border-white/[0.15]
      "
    >
      {/* ===================================================
          BACKGROUND GLOW
      =================================================== */}

      <motion.div
        variants={{
          hover: {
            opacity: 1,
            scale: 1.15,
          },
        }}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-white/[0.045]
          blur-[90px]
        "
      />

      {/* ===================================================
          GRID DETAIL
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          maskImage: "linear-gradient(to bottom right, black, transparent 65%)",
          WebkitMaskImage:
            "linear-gradient(to bottom right, black, transparent 65%)",
        }}
      />

      {/* ===================================================
          TOP LINE
      =================================================== */}

      <motion.div
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          origin-left
          bg-white/30
        "
      />

      {/* ===================================================
          CARD NUMBER
      =================================================== */}

      <div className="absolute right-7 top-7 z-10">
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-white/45">
          {service.number}
        </span>
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
        {/* Icon */}

        <motion.div
          variants={{
            hover: {
              y: -3,
              scale: 1.05,
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.09]
            bg-white/[0.035]
            text-white/55
            transition-all
            duration-500
            group-hover:border-white/15
            group-hover:bg-white/[0.07]
            group-hover:text-white
          "
        >
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </motion.div>

        {/* Title */}

        <div className="mt-8">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
            {service.shortTitle}
          </p>

          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[28px]">
            {service.title}
          </h3>
        </div>

        {/* Description */}

        <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
          {service.description}
        </p>

        {/* Bottom */}

        <div className="mt-auto pt-8">
          {/* Divider */}

          <div className="mb-5 h-px w-full bg-white/[0.07]" />

          <div className="flex items-end justify-between gap-4">
            {/* Tags */}

            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-2.5
                    py-1.5
                    text-[10px]
                    text-white/30
                    transition-colors
                    duration-300
                    group-hover:text-white/45
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow */}

            <motion.div
              variants={{
                hover: {
                  x: 4,
                  y: -4,
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-white/30
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN SERVICE SECTION
========================================================= */

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
      {/* ===================================================
          BACKGROUND
      =================================================== */}

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

        {/* Ambient lights */}

        <div className="absolute left-[-180px] top-[10%] h-[400px] w-[400px] rounded-full bg-white/[0.018] blur-[130px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[140px]" />
      </div>

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            HEADER
        ================================================= */}

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
          {/* Left */}

          <div className="max-w-3xl">
            {/* Label */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-wide text-white/50 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              WHAT I DO
            </div>

            {/* Heading */}

            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
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

          {/* Right mini detail */}

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

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">
                <ArrowUpRight className="h-4 w-4 text-white/30" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SERVICE GRID
        ================================================= */}

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

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

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
            border-white/[0.08]
            bg-white/[0.02]
            p-6
            sm:p-7
            md:flex-row
            md:items-center
            md:justify-between
            md:p-8
          "
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035]">
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
              border-white/[0.1]
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
