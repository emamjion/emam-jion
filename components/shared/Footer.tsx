"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8 lg:pt-28">
        {/* Top CTA */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/35"
            >
              Have a project in mind?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let&apos;s build
              <br />
              something <span className="text-white/35">great.</span>
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:bg-neutral-200"
          >
            Start a conversation
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
              <FiArrowUpRight size={15} />
            </span>
          </motion.a>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-black text-black">
                FD
              </span>

              <span className="text-sm font-semibold tracking-tight text-white">
                Your Name
              </span>
            </button>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              Full Stack Developer focused on building modern, scalable and
              meaningful digital experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-black"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Navigation
            </p>

            <nav className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {link.label}

                  <FiArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Get in touch
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="block text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                hello@example.com
              </a>

              <p className="text-sm leading-6 text-white/35">
                Available for freelance
                <br />
                &amp; selected collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-white/25">
              Designed &amp; Developed with care.
            </span>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-colors duration-300 hover:border-white/20 hover:bg-white hover:text-black"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
