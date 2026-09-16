"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (!element) return;

    const navbarOffset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex h-17 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-white/10 bg-black/75 shadow-2xl shadow-black/20 backdrop-blur-2xl"
              : "border-white/10 bg-black/40 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white text-xs font-black text-black">
              <span className="relative z-10">FD</span>

              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-neutral-300"
              />
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold tracking-tight text-white">
                Your Name
              </p>

              <p className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-white/40">
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="relative rounded-xl px-4 py-2.5 text-[13px] font-medium text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-xl bg-white/[0.07]"
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>

                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="group hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-neutral-200 md:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.button
                      key={item.href}
                      type="button"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/[0.07] text-white"
                          : "text-white/50 hover:bg-white/4 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </motion.button>
                  );
                })}

                <div className="my-2 h-px bg-white/10" />

                <button
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={16} />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
