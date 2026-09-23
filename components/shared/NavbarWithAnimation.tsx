"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const [themeAnimating, setThemeAnimating] = useState(false);
  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
  });

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (themeAnimating) return;

    const rect = event.currentTarget.getBoundingClientRect();

    setOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setThemeAnimating(true);

    const nextTheme = theme === "dark" ? "light" : "dark";

    // Small delay so the reveal starts naturally
    setTimeout(() => {
      setTheme(nextTheme);
    }, 80);

    setTimeout(() => {
      setThemeAnimating(false);
    }, 700);
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
          className={`
            mx-auto flex h-17 max-w-7xl items-center justify-between
            rounded-2xl border px-4 transition-all duration-500 sm:px-6

            ${
              scrolled
                ? `
                  border-black/10
                  bg-white/85
                  shadow-2xl
                  shadow-black/5
                  backdrop-blur-2xl

                  dark:border-white/10
                  dark:bg-black/75
                  dark:shadow-black/20
                `
                : `
                  border-black/10
                  bg-white/70
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-black/40
                `
            }
          `}
        >
          {/* =========================
              LOGO
          ========================== */}

          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            {/* Logo Mark */}
            <div
              className="
                relative flex h-10 w-10 items-center justify-center
                overflow-hidden rounded-xl
                bg-black text-xs font-black text-white
                transition-colors duration-300

                dark:bg-white
                dark:text-black
              "
            >
              <span className="relative z-10">FD</span>

              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="
                  absolute inset-0
                  bg-neutral-200
                  dark:bg-neutral-300
                "
              />
            </div>

            {/* Name */}
            <div className="hidden text-left sm:block">
              <p
                className="
                  text-sm font-semibold tracking-tight
                  text-black
                  dark:text-white
                "
              >
                Your Name
              </p>

              <p
                className="
                  mt-0.5 text-[9px] uppercase
                  tracking-[0.25em]
                  text-black/40
                  dark:text-white/40
                "
              >
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="
                    relative rounded-xl px-4 py-2.5
                    text-[13px] font-medium
                    text-black/50
                    transition-colors duration-300
                    hover:text-black

                    dark:text-white/50
                    dark:hover:text-white
                  "
                >
                  {/* Active Background */}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="
                        absolute inset-0 rounded-xl
                        bg-black/5

                        dark:bg-white/[0.07]
                      "
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>

                  {/* Active Dot */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="
                        absolute bottom-1 left-1/2
                        h-1 w-1
                        -translate-x-1/2
                        rounded-full
                        bg-black

                        dark:bg-white
                      "
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}

            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
      relative z-50 flex h-10 w-10
      items-center justify-center
      overflow-hidden rounded-xl
      border
      border-black/10
      bg-black/[0.04]
      text-black/70
      transition-all duration-300
      hover:bg-black/[0.08]

      dark:border-white/10
      dark:bg-white/[0.05]
      dark:text-white/70
      dark:hover:bg-white/[0.1]
    "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="moon"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.5,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Moon size={17} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.5,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Sun size={17} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* =========================
                DESKTOP CTA
            ========================== */}

            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="
                group hidden items-center gap-2
                rounded-xl
                bg-black
                px-4 py-2.5
                text-xs font-semibold
                text-white
                transition-all duration-300
                hover:bg-neutral-800

                dark:bg-white
                dark:text-black
                dark:hover:bg-neutral-200

                md:flex
              "
            >
              Let's Talk
              <ArrowUpRight
                size={14}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>

            {/* =========================
                MOBILE MENU BUTTON
            ========================== */}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border
                border-black/10
                bg-black/[0.04]
                text-black
                transition-colors
                hover:bg-black/[0.08]

                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-white
                dark:hover:bg-white/[0.1]

                md:hidden
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================== */}

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
              className="
                mx-auto mt-2 max-w-7xl
                overflow-hidden rounded-2xl
                border
                border-black/10
                bg-white/95
                p-2
                shadow-2xl
                shadow-black/10
                backdrop-blur-2xl

                dark:border-white/10
                dark:bg-black/90
                dark:shadow-black/30

                md:hidden
              "
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");

                  const isActive = activeSection === sectionId;

                  return (
                    <motion.button
                      key={item.href}
                      type="button"
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        relative flex items-center
                        justify-between rounded-xl
                        px-4 py-3.5
                        text-left text-sm font-medium
                        transition-colors

                        ${
                          isActive
                            ? `
                              bg-black/[0.05]
                              text-black

                              dark:bg-white/[0.07]
                              dark:text-white
                            `
                            : `
                              text-black/50
                              hover:bg-black/[0.04]
                              hover:text-black

                              dark:text-white/50
                              dark:hover:bg-white/[0.04]
                              dark:hover:text-white
                            `
                        }
                      `}
                    >
                      <span>{item.label}</span>

                      {isActive && (
                        <span
                          className="
                            h-1.5 w-1.5 rounded-full
                            bg-black
                            dark:bg-white
                          "
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Divider */}

                <div
                  className="
                    my-2 h-px
                    bg-black/10
                    dark:bg-white/10
                  "
                />

                {/* Mobile Theme */}

                <div
                  className="
                    flex items-center
                    justify-between
                    rounded-xl
                    px-4 py-3
                  "
                >
                  <span
                    className="
                      text-sm font-medium
                      text-black/50
                      dark:text-white/50
                    "
                  >
                    Appearance
                  </span>

                  {mounted && (
                    <button
                      type="button"
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="
                        relative flex h-9 w-9
                        items-center justify-center
                        rounded-lg
                        border
                        border-black/10
                        bg-black/[0.04]
                        text-black
                        transition-all

                        hover:bg-black/[0.08]

                        dark:border-white/10
                        dark:bg-white/[0.05]
                        dark:text-white
                        dark:hover:bg-white/[0.1]
                      "
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {theme === "dark" ? (
                          <motion.div
                            key="mobile-moon"
                            initial={{
                              opacity: 0,
                              rotate: -90,
                              scale: 0.5,
                            }}
                            animate={{
                              opacity: 1,
                              rotate: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              rotate: 90,
                              scale: 0.5,
                            }}
                          >
                            <Moon size={16} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="mobile-sun"
                            initial={{
                              opacity: 0,
                              rotate: 90,
                              scale: 0.5,
                            }}
                            animate={{
                              opacity: 1,
                              rotate: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              rotate: -90,
                              scale: 0.5,
                            }}
                          >
                            <Sun size={16} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  )}
                </div>

                {/* CTA */}

                <button
                  type="button"
                  onClick={() => scrollToSection("#contact")}
                  className="
                    group flex items-center
                    justify-center gap-2
                    rounded-xl
                    bg-black
                    px-4 py-3.5
                    text-sm font-semibold
                    text-white
                    transition-colors
                    hover:bg-neutral-800

                    dark:bg-white
                    dark:text-black
                    dark:hover:bg-neutral-200
                  "
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================
    THEME TRANSITION
========================= */}

        <AnimatePresence>
          {themeAnimating && (
            <motion.div
              key="theme-transition"
              className="pointer-events-none fixed inset-0 z-[9999]"
              initial={{
                clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
              }}
              animate={{
                clipPath: `circle(150vmax at ${origin.x}px ${origin.y}px)`,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: theme === "dark" ? "#ffffff" : "#050505",
              }}
            />
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
