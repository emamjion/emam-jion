import { services } from "@/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

export function ServiceCard({
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
        min-h-82.5
        overflow-hidden
        rounded-[28px]
        border
        border-white/8
        bg-[#0a0a0a]
        transition-colors
        duration-500
        hover:border-white/15
      "
    >
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
          bg-white/4.5
          blur-[90px]
        "
      />

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

      <div className="absolute right-7 top-7 z-10">
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-white/45">
          {service.number}
        </span>
      </div>

      <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
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
            border-white/9
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

        <div className="mt-8">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
            {service.shortTitle}
          </p>

          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[28px]">
            {service.title}
          </h3>
        </div>

        <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
          {service.description}
        </p>

        <div className="mt-auto pt-8">
          <div className="mb-5 h-px w-full bg-white/[0.07]" />

          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/2.5
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
                border-white/8
                bg-white/2.5
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
