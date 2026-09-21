"use client";

import { contactInfo, socialLinks } from "@/data";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

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
    y: 30,
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-white/2.5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-white/2.5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something"
          highlight="meaningful together."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col rounded-[28px] border border-white/8 bg-[#0a0a0a] p-7 sm:p-8 md:p-9"
          >
            <motion.div variants={itemVariants}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/25">
                Contact Details
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                Start a conversation.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                Whether you have a new project in mind or just want to say
                hello, feel free to reach out.
              </p>
            </motion.div>

            <div className="mt-10 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/6 bg-white/2 p-4 transition-all duration-300 hover:border-white/12 hover:bg-white/4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/2.5 text-white/35 transition-all duration-300 group-hover:border-white/13 group-hover:bg-white/6 group-hover:text-white">
                      <Icon className="h-4.5 w-4,5" strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/20">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-white/60 transition-colors duration-300 group-hover:text-white/85">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div variants={itemVariants} className="mt-auto pt-10">
              <div className="mb-5 h-px w-full bg-white/6" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/20">
                  Follow Along
                </span>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] bg-white/2 text-white/30 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.07] hover:text-white"
                      >
                        <Icon
                          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={1.6}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#0a0a0a] p-7 sm:p-8 md:p-9"
          >
            {/* Form Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/[0.035] blur-[100px]" />

            {/* Top Line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative">
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/25">
                    Send a Message
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                    Tell me about your project.
                  </h3>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/2.5 text-white/30 sm:flex">
                  <Send className="h-4.25 w-4.25" strokeWidth={1.5} />
                </div>
              </div>

              <form className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/25"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-white/8 bg-white/2.5 px-4 text-sm text-white outline-none placeholder:text-white/15 transition-all duration-300 focus:border-white/20 focus:bg-white/4 focus:ring-1 focus:ring-white/5"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/25"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 w-full rounded-xl border border-white/8 bg-white/2.5 px-4 text-sm text-white outline-none placeholder:text-white/15 transition-all duration-300 focus:border-white/20 focus:bg-white/4 focus:ring-1 focus:ring-white/5"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/25"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Let's work together"
                    className="h-12 w-full rounded-xl border border-white/8 bg-white/2.5 px-4 text-sm text-white outline-none placeholder:text-white/15 transition-all duration-300 focus:border-white/20 focus:bg-white/4 focus:ring-1 focus:ring-white/5"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/25"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me a little about your project..."
                    className="w-full resize-none rounded-xl border border-white/8 bg-white/2.5 px-4 py-3.5 text-sm leading-7 text-white outline-none placeholder:text-white/15 transition-all duration-300 focus:border-white/20 focus:bg-white/4 focus:ring-1 focus:ring-white/5"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-5 text-white/20">
                    I usually respond within 24–48 hours.
                  </p>

                  <motion.button
                    type="submit"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-medium text-black transition-colors duration-300 hover:bg-white/90"
                  >
                    <span>Send Message</span>

                    <motion.span
                      variants={{
                        hover: {
                          x: 3,
                          y: -3,
                        },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-5 flex flex-col gap-4 rounded-[22px] border border-white/6 bg-white/1.5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
            </span>

            <span className="text-xs text-white/35">
              Available for selected projects
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/15">
            Based in Bangladesh · Working globally
          </span>
        </motion.div>
      </div>
    </section>
  );
}
