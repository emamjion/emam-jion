"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`mb-16 max-w-3xl ${className}`}
    >
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-white/40" />

        <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
          {eyebrow}
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}

        {highlight && <span className="block text-white/35">{highlight}</span>}
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
